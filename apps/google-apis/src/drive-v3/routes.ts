import { createRoute, z } from '@hono/zod-openapi'

const UserSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. A plain text displayable name for this user.' }),
    emailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.',
      }),
    kind: z
      .string()
      .default('drive#user')
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#user"`.',
      }),
    me: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Whether this user is the requesting user.' }),
    permissionId: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. The user's ID as visible in Permission resources." }),
    photoLink: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. A link to the user's profile photo, if available." }),
  })
  .openapi({ description: 'Information about a Drive user.', required: [] })
  .openapi('User')

const AboutSchema = z
  .object({
    appInstalled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the user has installed the requesting app.' }),
    canCreateDrives: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the user can create shared drives.' }),
    canCreateTeamDrives: z
      .boolean()
      .exactOptional()
      .openapi({ deprecated: true, description: 'Deprecated: Use `canCreateDrives` instead.' }),
    driveThemes: z
      .array(
        z
          .object({
            backgroundImageLink: z
              .string()
              .exactOptional()
              .openapi({ description: "A link to this theme's background image." }),
            colorRgb: z
              .string()
              .exactOptional()
              .openapi({ description: 'The color of this theme as an RGB hex string.' }),
            id: z.string().exactOptional().openapi({ description: 'The ID of the theme.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'A list of themes that are supported for shared drives.' }),
    exportFormats: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({
        description: 'A map of source MIME type to possible targets for all supported exports.',
      }),
    folderColorPalette: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The currently supported folder colors as RGB hex strings.' }),
    importFormats: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({
        description: 'A map of source MIME type to possible targets for all supported imports.',
      }),
    kind: z
      .string()
      .default('drive#about')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"drive#about"`.',
      }),
    maxImportSizes: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'A map of maximum import sizes by MIME type, in bytes.' }),
    maxUploadSize: z
      .string()
      .exactOptional()
      .openapi({ description: 'The maximum upload size in bytes.' }),
    storageQuota: z
      .object({
        limit: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The usage limit, if applicable. This will not be present if the user has unlimited storage.',
          }),
        usage: z
          .string()
          .exactOptional()
          .openapi({ description: 'The total usage across all services.' }),
        usageInDrive: z
          .string()
          .exactOptional()
          .openapi({ description: 'The usage by all files in Google Drive.' }),
        usageInDriveTrash: z
          .string()
          .exactOptional()
          .openapi({ description: 'The usage by trashed files in Google Drive.' }),
      })
      .exactOptional()
      .openapi({
        description: "The user's storage quota limits and usage. All fields are measured in bytes.",
        required: [],
      }),
    teamDriveThemes: z
      .array(
        z
          .object({
            backgroundImageLink: z
              .string()
              .exactOptional()
              .openapi({
                deprecated: true,
                description: 'Deprecated: Use `driveThemes/backgroundImageLink` instead.',
              }),
            colorRgb: z
              .string()
              .exactOptional()
              .openapi({
                deprecated: true,
                description: 'Deprecated: Use `driveThemes/colorRgb` instead.',
              }),
            id: z
              .string()
              .exactOptional()
              .openapi({
                deprecated: true,
                description: 'Deprecated: Use `driveThemes/id` instead.',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ deprecated: true, description: 'Deprecated: Use `driveThemes` instead.' }),
    user: UserSchema.exactOptional().openapi({ description: 'The authenticated user.' }),
  })
  .openapi({
    description: "Information about the user, the user's Drive, and system capabilities.",
    required: [],
  })
  .openapi('About')

const AppIconsSchema = z
  .object({
    category: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Category of the icon. Allowed values are: * `application` - The icon for the application. * `document` - The icon for a file associated with the app. * `documentShared` - The icon for a shared file associated with the app.',
      }),
    iconUrl: z.string().exactOptional().openapi({ description: 'URL for the icon.' }),
    size: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Size of the icon. Represented as the maximum of the width and height.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AppIcons')

const AppSchema = z
  .object({
    authorized: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Whether the app is authorized to access data on the user's Drive.",
      }),
    createInFolderTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The template URL to create a file with this app in a given folder. The template contains the {folderId} to be replaced by the folder ID house the new file.',
      }),
    createUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL to create a file with this app.' }),
    hasDriveWideScope: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether the app has Drive-wide scope. An app with Drive-wide scope can access all files in the user's Drive.",
      }),
    icons: z
      .array(AppIconsSchema)
      .exactOptional()
      .openapi({ description: 'The various icons for the app.' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the app.' }),
    installed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the app is installed.' }),
    kind: z
      .string()
      .default('drive#app')
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifies what kind of resource this is. Value: the fixed string "drive#app".',
      }),
    longDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'A long description of the app.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the app.' }),
    objectType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of object this app creates such as a Chart. If empty, the app name should be used instead.',
      }),
    openUrlTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The template URL for opening files with this app. The template contains {ids} or {exportIds} to be replaced by the actual file IDs. For more information, see Open Files for the full documentation.',
      }),
    primaryFileExtensions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of primary file extensions.' }),
    primaryMimeTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of primary MIME types.' }),
    productId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the product listing for this app.' }),
    productUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'A link to the product listing for this app.' }),
    secondaryFileExtensions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of secondary file extensions.' }),
    secondaryMimeTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of secondary MIME types.' }),
    shortDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short description of the app.' }),
    supportsCreate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this app supports creating objects.' }),
    supportsImport: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this app supports importing from Google Docs.' }),
    supportsMultiOpen: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this app supports opening more than one file.' }),
    supportsOfflineCreate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this app supports creating files when offline.' }),
    useByDefault: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the app is selected as the default handler for the types it supports.',
      }),
  })
  .openapi({
    description:
      "The `apps` resource provides a list of apps that a user has installed, with information about each app's supported MIME types, file extensions, and other details. Some resource methods (such as `apps.get`) require an `appId`. Use the `apps.list` method to retrieve the ID for an installed application.",
    required: [],
  })
  .openapi('App')

const AppListSchema = z
  .object({
    defaultAppIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of app IDs that the user has specified to use by default. The list is in reverse-priority order (lowest to highest).',
      }),
    items: z.array(AppSchema).exactOptional().openapi({ description: 'The list of apps.' }),
    kind: z
      .string()
      .default('drive#appList')
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifies what kind of resource this is. Value: the fixed string "drive#appList".',
      }),
    selfLink: z.string().exactOptional().openapi({ description: 'A link back to this list.' }),
  })
  .openapi({
    description:
      'A list of third-party applications which the user has installed or given access to Google Drive.',
    required: [],
  })
  .openapi('AppList')

const DriveSchema = z
  .object({
    backgroundImageFile: z
      .object({
        id: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The ID of an image file in Google Drive to use for the background image.',
          }),
        width: z
          .float32()
          .exactOptional()
          .openapi({
            description:
              'The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high.',
          }),
        xCoordinate: z
          .float32()
          .exactOptional()
          .openapi({
            description:
              'The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image.',
          }),
        yCoordinate: z
          .float32()
          .exactOptional()
          .openapi({
            description:
              'The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          "An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on `drive.drives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set.",
        required: [],
      }),
    backgroundImageLink: z
      .string()
      .exactOptional()
      .openapi({
        description: "Output only. A short-lived link to this shared drive's background image.",
      }),
    capabilities: z
      .object({
        canAddChildren: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can add children to folders in this shared drive.',
          }),
        canChangeCopyRequiresWriterPermissionRestriction: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can change the `copyRequiresWriterPermission` restriction of this shared drive.',
          }),
        canChangeDomainUsersOnlyRestriction: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can change the `domainUsersOnly` restriction of this shared drive.',
          }),
        canChangeDriveBackground: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can change the background of this shared drive.',
          }),
        canChangeDriveMembersOnlyRestriction: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can change the `driveMembersOnly` restriction of this shared drive.',
          }),
        canChangeSharingFoldersRequiresOrganizerPermissionRestriction: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can change the `sharingFoldersRequiresOrganizerPermission` restriction of this shared drive.',
          }),
        canComment: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can comment on files in this shared drive.',
          }),
        canCopy: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can copy files in this shared drive.',
          }),
        canDeleteChildren: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can delete children from folders in this shared drive.',
          }),
        canDeleteDrive: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can delete this shared drive. Attempting to delete the shared drive may still fail if there are untrashed items inside the shared drive.',
          }),
        canDownload: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can download files in this shared drive.',
          }),
        canEdit: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can edit files in this shared drive',
          }),
        canListChildren: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can list the children of folders in this shared drive.',
          }),
        canManageMembers: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can add members to this shared drive or remove them or change their role.',
          }),
        canReadRevisions: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can read the revisions resource of files in this shared drive.',
          }),
        canRename: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can rename files or folders in this shared drive.',
          }),
        canRenameDrive: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Output only. Whether the current user can rename this shared drive.',
          }),
        canResetDriveRestrictions: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can reset the shared drive restrictions to defaults.',
          }),
        canShare: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can share files or folders in this shared drive.',
          }),
        canTrashChildren: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can trash children from folders in this shared drive.',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Output only. Capabilities the current user has on this shared drive.',
        required: [],
      }),
    colorRgb: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The color of this shared drive as an RGB hex string. It can only be set on a `drive.drives.update` request that does not set `themeId`.',
      }),
    createdTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The time at which the shared drive was created (RFC 3339 date-time).',
      }),
    hidden: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the shared drive is hidden from default view.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The ID of this shared drive which is also the ID of the top level folder of this shared drive.',
      }),
    kind: z
      .string()
      .default('drive#drive')
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#drive"`.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of this shared drive.' }),
    orgUnitId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`.',
      }),
    restrictions: z
      .object({
        adminManagedRestrictions: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether administrative privileges on this shared drive are required to modify restrictions.',
          }),
        copyRequiresWriterPermission: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the options to copy, print, or download files inside this shared drive, should be disabled for readers and commenters. When this restriction is set to `true`, it will override the similarly named field to `true` for any file inside this shared drive.',
          }),
        domainUsersOnly: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether access to this shared drive and items inside this shared drive is restricted to users of the domain to which this shared drive belongs. This restriction may be overridden by other sharing policies controlled outside of this shared drive.',
          }),
        driveMembersOnly: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether access to items inside this shared drive is restricted to its members.',
          }),
        sharingFoldersRequiresOrganizerPermission: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If true, only users with the organizer role can share folders. If false, users with either the organizer role or the file organizer role can share folders.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          "A set of restrictions that apply to this shared drive or items inside this shared drive. Note that restrictions can't be set when creating a shared drive. To add a restriction, first create a shared drive and then use `drives.update` to add restrictions.",
        required: [],
      }),
    themeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The ID of the theme from which the background image and color will be set. The set of possible `driveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.drives.create` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`.",
      }),
  })
  .openapi({
    description:
      'Representation of a shared drive. Some resource methods (such as `drives.update`) require a `driveId`. Use the `drives.list` method to retrieve the ID for a shared drive.',
    required: [],
  })
  .openapi('Drive')

const ContentRestrictionSchema = z
  .object({
    ownerRestricted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the content restriction can only be modified or removed by a user who owns the file. For files in shared drives, any user with `organizer` capabilities can modify or remove this content restriction.',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the content of the file is read-only. If a file is read-only, a new revision of the file may not be added, comments may not be added or modified, and the title of the file may not be modified.',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reason for why the content of the file is restricted. This is only mutable on requests that also set `readOnly=true`.',
      }),
    restrictingUser: UserSchema.exactOptional().openapi({
      description:
        'Output only. The user who set the content restriction. Only populated if `readOnly` is true.',
    }),
    restrictionTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time at which the content restriction was set (formatted RFC 3339 timestamp). Only populated if readOnly is true.',
      }),
    systemRestricted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether the content restriction was applied by the system, for example due to an esignature. Users cannot modify or remove system restricted content restrictions.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The type of the content restriction. Currently the only possible value is `globalContentRestriction`.',
      }),
  })
  .openapi({ description: 'A restriction for accessing the content of the file.', required: [] })
  .openapi('ContentRestriction')

const LabelFieldSchema = z
  .object({
    dateString: z
      .array(z.iso.date())
      .exactOptional()
      .openapi({
        description:
          'Only present if valueType is dateString. RFC 3339 formatted date: YYYY-MM-DD.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The identifier of this label field.' }),
    integer: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Only present if `valueType` is `integer`.' }),
    kind: z.string().exactOptional().openapi({ description: 'This is always drive#labelField.' }),
    selection: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Only present if `valueType` is `selection`' }),
    text: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Only present if `valueType` is `text`.' }),
    user: z
      .array(UserSchema)
      .exactOptional()
      .openapi({ description: 'Only present if `valueType` is `user`.' }),
    valueType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The field type. While new values may be supported in the future, the following are currently allowed: * `dateString` * `integer` * `selection` * `text` * `user`',
      }),
  })
  .openapi({
    description: 'Representation of field, which is a typed key-value pair.',
    required: [],
  })
  .openapi('LabelField')

const LabelSchema = z
  .object({
    fields: z
      .record(z.string(), LabelFieldSchema)
      .exactOptional()
      .openapi({ description: "A map of the fields on the label, keyed by the field's ID." }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the label.' }),
    kind: z.string().exactOptional().openapi({ description: 'This is always drive#label' }),
    revisionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The revision ID of the label.' }),
  })
  .openapi({ description: 'Representation of label and label fields.', required: [] })
  .openapi('Label')

const PermissionSchema = z
  .object({
    allowFileDiscovery: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type `domain` or `anyone`.',
      }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The "pretty" name of the value of the permission. The following is a list of examples for each type of permission: * `user` - User\'s full name, as defined for their Google account, such as "Joe Smith." * `group` - Name of the Google Group, such as "The Company Administrators." * `domain` - String domain name, such as "thecompany.com." * `anyone` - No `displayName` is present.',
      }),
    domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The domain to which this permission refers.' }),
    emailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The email address of the user or group to which this permission refers.',
      }),
    expirationTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions: - They can only be set on user and group permissions - The time must be in the future - The time cannot be more than a year in the future',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The ID of this permission. This is a unique identifier for the grantee, and is published in User resources as `permissionId`. IDs should be treated as opaque values.',
      }),
    kind: z
      .string()
      .default('drive#permission')
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#permission"`.',
      }),
    pendingOwner: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the account associated with this permission is a pending owner. Only populated for `user` type permissions for files that are not in a shared drive.',
      }),
    permissionDetails: z
      .array(
        z
          .object({
            inherited: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Output only. Whether this permission is inherited. This field is always populated. This is an output-only field.',
              }),
            inheritedFrom: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Output only. The ID of the item from which this permission is inherited. This is an output-only field.',
              }),
            permissionType: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Output only. The permission type for this user. While new values may be added in future, the following are currently possible: * `file` * `member`',
              }),
            role: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Output only. The primary role for this user. While new values may be added in the future, the following are currently possible: * `organizer` * `fileOrganizer` * `writer` * `commenter` * `reader`',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Output only. Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items.',
        readOnly: true,
      }),
    photoLink: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. A link to the user's profile photo, if available." }),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The role granted by this permission. While new values may be supported in the future, the following are currently allowed: * `owner` * `organizer` * `fileOrganizer` * `writer` * `commenter` * `reader`',
      }),
    teamDrivePermissionDetails: z
      .array(
        z
          .object({
            inherited: z
              .boolean()
              .exactOptional()
              .openapi({
                deprecated: true,
                description: 'Deprecated: Output only. Use `permissionDetails/inherited` instead.',
              }),
            inheritedFrom: z
              .string()
              .exactOptional()
              .openapi({
                deprecated: true,
                description:
                  'Deprecated: Output only. Use `permissionDetails/inheritedFrom` instead.',
              }),
            role: z
              .string()
              .exactOptional()
              .openapi({
                deprecated: true,
                description: 'Deprecated: Output only. Use `permissionDetails/role` instead.',
              }),
            teamDrivePermissionType: z
              .string()
              .exactOptional()
              .openapi({
                deprecated: true,
                description:
                  'Deprecated: Output only. Use `permissionDetails/permissionType` instead.',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Output only. Deprecated: Output only. Use `permissionDetails` instead.',
        readOnly: true,
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The type of the grantee. Valid values are: * `user` * `group` * `domain` * `anyone` When creating a permission, if `type` is `user` or `group`, you must provide an `emailAddress` for the user or group. When `type` is `domain`, you must provide a `domain`. There isn't extra information required for an `anyone` type.",
      }),
    view: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the view for this permission. Only populated for permissions that belong to a view. 'published' is the only supported value.",
      }),
  })
  .openapi({
    description:
      'A permission for a file. A permission grants a user, group, domain, or the world access to a file or a folder hierarchy. Some resource methods (such as `permissions.update`) require a `permissionId`. Use the `permissions.list` method to retrieve the ID for a file, folder, or shared drive.',
    required: [],
  })
  .openapi('Permission')

const FileSchema = z
  .object({
    appProperties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'A collection of arbitrary key-value pairs which are private to the requesting app.\nEntries with null values are cleared in update and copy requests. These properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties.',
      }),
    capabilities: z
      .object({
        canAcceptOwnership: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user is the pending owner of the file. Not populated for shared drive files.',
          }),
        canAddChildren: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can add children to this folder. This is always false when the item is not a folder.',
          }),
        canAddFolderFromAnotherDrive: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can add a folder from another drive (different shared drive or My Drive) to this folder. This is false when the item is not a folder. Only populated for items in shared drives.',
          }),
        canAddMyDriveParent: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can add a parent for the item without removing an existing parent in the same request. Not populated for shared drive files.',
          }),
        canChangeCopyRequiresWriterPermission: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can change the `copyRequiresWriterPermission` restriction of this file.',
          }),
        canChangeSecurityUpdateEnabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can change the securityUpdateEnabled field on link share metadata.',
          }),
        canChangeViewersCanCopyContent: z
          .boolean()
          .exactOptional()
          .openapi({ deprecated: true, description: 'Deprecated: Output only.' }),
        canComment: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Output only. Whether the current user can comment on this file.',
          }),
        canCopy: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder.',
          }),
        canDelete: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Output only. Whether the current user can delete this file.' }),
        canDeleteChildren: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can delete children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.',
          }),
        canDownload: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Output only. Whether the current user can download this file.',
          }),
        canEdit: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can edit this file. Other factors may limit the type of changes a user can make to a file. For example, see `canChangeCopyRequiresWriterPermission` or `canModifyContent`.',
          }),
        canListChildren: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can list the children of this folder. This is always false when the item is not a folder.',
          }),
        canModifyContent: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can modify the content of this file.',
          }),
        canModifyContentRestriction: z
          .boolean()
          .exactOptional()
          .openapi({
            deprecated: true,
            description:
              'Deprecated: Output only. Use one of `canModifyEditorContentRestriction`, `canModifyOwnerContentRestriction` or `canRemoveContentRestriction`.',
          }),
        canModifyEditorContentRestriction: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can add or modify content restrictions on the file which are editor restricted.',
          }),
        canModifyLabels: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Output only. Whether the current user can modify the labels on the file.',
          }),
        canModifyOwnerContentRestriction: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can add or modify content restrictions which are owner restricted.',
          }),
        canMoveChildrenOutOfDrive: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can move children of this folder outside of the shared drive. This is false when the item is not a folder. Only populated for items in shared drives.',
          }),
        canMoveChildrenOutOfTeamDrive: z
          .boolean()
          .exactOptional()
          .openapi({
            deprecated: true,
            description: 'Deprecated: Output only. Use `canMoveChildrenOutOfDrive` instead.',
          }),
        canMoveChildrenWithinDrive: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              "Output only. Whether the current user can move children of this folder within this drive. This is false when the item is not a folder. Note that a request to move the child may still fail depending on the current user's access to the child and to the destination folder.",
          }),
        canMoveChildrenWithinTeamDrive: z
          .boolean()
          .exactOptional()
          .openapi({
            deprecated: true,
            description: 'Deprecated: Output only. Use `canMoveChildrenWithinDrive` instead.',
          }),
        canMoveItemIntoTeamDrive: z
          .boolean()
          .exactOptional()
          .openapi({
            deprecated: true,
            description: 'Deprecated: Output only. Use `canMoveItemOutOfDrive` instead.',
          }),
        canMoveItemOutOfDrive: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change the parent of the item may still fail depending on the new parent that is being added.',
          }),
        canMoveItemOutOfTeamDrive: z
          .boolean()
          .exactOptional()
          .openapi({
            deprecated: true,
            description: 'Deprecated: Output only. Use `canMoveItemOutOfDrive` instead.',
          }),
        canMoveItemWithinDrive: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can move this item within this drive. Note that a request to change the parent of the item may still fail depending on the new parent that is being added and the parent that is being removed.',
          }),
        canMoveItemWithinTeamDrive: z
          .boolean()
          .exactOptional()
          .openapi({
            deprecated: true,
            description: 'Deprecated: Output only. Use `canMoveItemWithinDrive` instead.',
          }),
        canMoveTeamDriveItem: z
          .boolean()
          .exactOptional()
          .openapi({
            deprecated: true,
            description:
              'Deprecated: Output only. Use `canMoveItemWithinDrive` or `canMoveItemOutOfDrive` instead.',
          }),
        canReadDrive: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives.',
          }),
        canReadLabels: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Output only. Whether the current user can read the labels on the file.',
          }),
        canReadRevisions: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item itself if it is not a folder, can be read.',
          }),
        canReadTeamDrive: z
          .boolean()
          .exactOptional()
          .openapi({
            deprecated: true,
            description: 'Deprecated: Output only. Use `canReadDrive` instead.',
          }),
        canRemoveChildren: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can remove children from this folder. This is always false when the item is not a folder. For a folder in a shared drive, use `canDeleteChildren` or `canTrashChildren` instead.',
          }),
        canRemoveContentRestriction: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether there is a content restriction on the file that can be removed by the current user.',
          }),
        canRemoveMyDriveParent: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files.',
          }),
        canRename: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Output only. Whether the current user can rename this file.' }),
        canShare: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can modify the sharing settings for this file.',
          }),
        canTrash: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Output only. Whether the current user can move this file to trash.',
          }),
        canTrashChildren: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Output only. Whether the current user can trash children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.',
          }),
        canUntrash: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Output only. Whether the current user can restore this file from trash.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Output only. Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.',
        required: [],
      }),
    contentHints: z
      .object({
        indexableText: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Text to be indexed for the file to improve fullText queries. This is limited to 128KB in length and may contain HTML elements.',
          }),
        thumbnail: z
          .object({
            image: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The thumbnail data encoded with URL-safe Base64 (RFC 4648 section 5).',
              }),
            mimeType: z
              .string()
              .exactOptional()
              .openapi({ description: 'The MIME type of the thumbnail.' }),
          })
          .exactOptional()
          .openapi({
            description:
              'A thumbnail for the file. This will only be used if Google Drive cannot generate a standard thumbnail.',
            required: [],
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Additional information about the content of the file. These fields are never populated in responses.',
        required: [],
      }),
    contentRestrictions: z
      .array(ContentRestrictionSchema)
      .exactOptional()
      .openapi({
        description:
          'Restrictions for accessing the content of the file. Only populated if such a restriction exists.',
      }),
    copyRequiresWriterPermission: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the options to copy, print, or download this file, should be disabled for readers and commenters.',
      }),
    createdTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time at which the file was created (RFC 3339 date-time).' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short description of the file.' }),
    driveId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. ID of the shared drive the file resides in. Only populated for items in shared drives.',
      }),
    explicitlyTrashed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.',
      }),
    exportLinks: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. Links for exporting Docs Editors files to specific formats.',
        readOnly: true,
      }),
    fileExtension: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The final component of `fullFileExtension`. This is only available for files with binary content in Google Drive.',
      }),
    folderColorRgb: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The color for a folder or a shortcut to a folder as an RGB hex string. The supported colors are published in the `folderColorPalette` field of the About resource. If an unsupported color is specified, the closest color in the palette is used instead.',
      }),
    fullFileExtension: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The full file extension extracted from the `name` field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive. This is automatically updated when the `name` field changes, however it is not cleared if the new name does not contain a valid extension.',
      }),
    hasAugmentedPermissions: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether there are permissions directly on this file. This field is only populated for items in shared drives.',
      }),
    hasThumbnail: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.',
      }),
    headRevisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The ID of the file's head revision. This is currently only available for files with binary content in Google Drive.",
      }),
    iconLink: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. A static, unauthenticated link to the file's icon." }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the file.' }),
    imageMediaMetadata: z
      .object({
        aperture: z
          .float32()
          .exactOptional()
          .openapi({
            description: 'Output only. The aperture used to create the photo (f-number).',
          }),
        cameraMake: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. The make of the camera used to create the photo.',
          }),
        cameraModel: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. The model of the camera used to create the photo.',
          }),
        colorSpace: z
          .string()
          .exactOptional()
          .openapi({ description: 'Output only. The color space of the photo.' }),
        exposureBias: z
          .float32()
          .exactOptional()
          .openapi({ description: 'Output only. The exposure bias of the photo (APEX value).' }),
        exposureMode: z
          .string()
          .exactOptional()
          .openapi({ description: 'Output only. The exposure mode used to create the photo.' }),
        exposureTime: z
          .float32()
          .exactOptional()
          .openapi({ description: 'Output only. The length of the exposure, in seconds.' }),
        flashUsed: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Output only. Whether a flash was used to create the photo.' }),
        focalLength: z
          .float32()
          .exactOptional()
          .openapi({
            description: 'Output only. The focal length used to create the photo, in millimeters.',
          }),
        height: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Output only. The height of the image in pixels.' }),
        isoSpeed: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Output only. The ISO speed used to create the photo.' }),
        lens: z
          .string()
          .exactOptional()
          .openapi({ description: 'Output only. The lens used to create the photo.' }),
        location: z
          .object({
            altitude: z
              .float64()
              .exactOptional()
              .openapi({ description: 'Output only. The altitude stored in the image.' }),
            latitude: z
              .float64()
              .exactOptional()
              .openapi({ description: 'Output only. The latitude stored in the image.' }),
            longitude: z
              .float64()
              .exactOptional()
              .openapi({ description: 'Output only. The longitude stored in the image.' }),
          })
          .exactOptional()
          .openapi({
            description: 'Output only. Geographic location information stored in the image.',
            required: [],
          }),
        maxApertureValue: z
          .float32()
          .exactOptional()
          .openapi({
            description:
              'Output only. The smallest f-number of the lens at the focal length used to create the photo (APEX value).',
          }),
        meteringMode: z
          .string()
          .exactOptional()
          .openapi({ description: 'Output only. The metering mode used to create the photo.' }),
        rotation: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              "Output only. The number of clockwise 90 degree rotations applied from the image's original orientation.",
          }),
        sensor: z
          .string()
          .exactOptional()
          .openapi({ description: 'Output only. The type of sensor used to create the photo.' }),
        subjectDistance: z
          .int32()
          .exactOptional()
          .openapi({
            description: 'Output only. The distance to the subject of the photo, in meters.',
          }),
        time: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. The date and time the photo was taken (EXIF DateTime).',
          }),
        whiteBalance: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. The white balance mode used to create the photo.',
          }),
        width: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Output only. The width of the image in pixels.' }),
      })
      .exactOptional()
      .openapi({
        description: 'Output only. Additional metadata about image media, if available.',
        required: [],
      }),
    isAppAuthorized: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Whether the file was created or opened by the requesting app.',
      }),
    kind: z
      .string()
      .default('drive#file')
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#file"`.',
      }),
    labelInfo: z
      .object({
        labels: z
          .array(LabelSchema)
          .exactOptional()
          .openapi({
            description:
              'Output only. The set of labels on the file as requested by the label IDs in the `includeLabels` parameter. By default, no labels are returned.',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Output only. An overview of the labels on the file.',
        required: [],
      }),
    lastModifyingUser: UserSchema.exactOptional().openapi({
      description: 'Output only. The last user to modify the file.',
    }),
    linkShareMetadata: z
      .object({
        securityUpdateEligible: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Output only. Whether the file is eligible for security update.',
          }),
        securityUpdateEnabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Output only. Whether the security update is enabled for this file.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Contains details about the link URLs that clients are using to refer to this item.',
        required: [],
      }),
    md5Checksum: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.',
      }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The MIME type of the file. Google Drive attempts to automatically detect an appropriate value from uploaded content, if no value is provided. The value cannot be changed unless a new revision is uploaded. If a file is created with a Google Doc MIME type, the uploaded content is imported, if possible. The supported import formats are published in the About resource.',
      }),
    modifiedByMe: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Whether the file has been modified by this user.' }),
    modifiedByMeTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The last time the file was modified by the user (RFC 3339 date-time).',
      }),
    modifiedTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'he last time the file was modified by anyone (RFC 3339 date-time). Note that setting modifiedTime will also update modifiedByMeTime for the user.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant.',
      }),
    originalFilename: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The original filename of the uploaded content if available, or else the original value of the `name` field. This is only available for files with binary content in Google Drive.',
      }),
    ownedByMe: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether the user owns the file. Not populated for items in shared drives.',
      }),
    owners: z
      .array(UserSchema)
      .exactOptional()
      .openapi({
        description:
          "Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives.",
      }),
    parents: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "The IDs of the parent folders which contain the file. If not specified as part of a create request, the file is placed directly in the user's My Drive folder. If not specified as part of a copy request, the file inherits any discoverable parents of the source file. Update requests must use the `addParents` and `removeParents` parameters to modify the parents list.",
      }),
    permissionIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. List of permission IDs for users with access to this file.',
      }),
    permissions: z
      .array(PermissionSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.',
      }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'A collection of arbitrary key-value pairs which are visible to all apps.\nEntries with null values are cleared in update and copy requests.',
      }),
    quotaBytesUsed: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with `keepForever` enabled.',
      }),
    resourceKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. A key needed to access the item via a shared link.' }),
    sha1Checksum: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.',
      }),
    sha256Checksum: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.',
      }),
    shared: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether the file has been shared. Not populated for items in shared drives.',
      }),
    sharedWithMeTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time at which the file was shared with the user, if applicable (RFC 3339 date-time).',
      }),
    sharingUser: UserSchema.exactOptional().openapi({
      description:
        'Output only. The user who shared the file with the requesting user, if applicable.',
    }),
    shortcutDetails: z
      .object({
        targetId: z
          .string()
          .exactOptional()
          .openapi({ description: 'The ID of the file that this shortcut points to.' }),
        targetMimeType: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "Output only. The MIME type of the file that this shortcut points to. The value of this field is a snapshot of the target's MIME type, captured when the shortcut is created.",
          }),
        targetResourceKey: z
          .string()
          .exactOptional()
          .openapi({ description: 'Output only. The ResourceKey for the target file.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Shortcut file details. Only populated for shortcut files, which have the mimeType field set to `application/vnd.google-apps.shortcut`.',
        required: [],
      }),
    size: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. Size in bytes of blobs and first party editor files. Won't be populated for files that have no size, like shortcuts and folders.",
      }),
    spaces: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Output only. The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.",
      }),
    starred: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the user has starred the file.' }),
    teamDriveId: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Deprecated: Output only. Use `driveId` instead.',
      }),
    thumbnailLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in `Files.thumbnailLink` must be fetched using a credentialed request.",
      }),
    thumbnailVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The thumbnail version for use in thumbnail cache invalidation.',
      }),
    trashed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, and other users cannot see files in the owner's trash.",
      }),
    trashedTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.',
      }),
    trashingUser: UserSchema.exactOptional().openapi({
      description:
        'Output only. If the file has been explicitly trashed, the user who trashed it. Only populated for items in shared drives.',
    }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.',
      }),
    videoMediaMetadata: z
      .object({
        durationMillis: z
          .string()
          .exactOptional()
          .openapi({ description: 'Output only. The duration of the video in milliseconds.' }),
        height: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Output only. The height of the video in pixels.' }),
        width: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Output only. The width of the video in pixels.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Output only. Additional metadata about video media. This may not be available immediately upon upload.',
        required: [],
      }),
    viewedByMe: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Whether the file has been viewed by this user.' }),
    viewedByMeTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The last time the file was viewed by the user (RFC 3339 date-time).',
      }),
    viewersCanCopyContent: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Deprecated: Use `copyRequiresWriterPermission` instead.',
      }),
    webContentLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.',
      }),
    webViewLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A link for opening the file in a relevant Google editor or viewer in a browser.',
      }),
    writersCanShare: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether users with only `writer` permission can modify the file's permissions. Not populated for items in shared drives.",
      }),
  })
  .openapi({
    description:
      'The metadata for a file. Some resource methods (such as `files.update`) require a `fileId`. Use the `files.list` method to retrieve the ID for a file.',
    required: [],
  })
  .openapi('File')

const TeamDriveSchema = z
  .object({
    backgroundImageFile: z
      .object({
        id: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The ID of an image file in Drive to use for the background image.',
          }),
        width: z
          .float32()
          .exactOptional()
          .openapi({
            description:
              'The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high.',
          }),
        xCoordinate: z
          .float32()
          .exactOptional()
          .openapi({
            description:
              'The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image.',
          }),
        yCoordinate: z
          .float32()
          .exactOptional()
          .openapi({
            description:
              'The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          "An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on `drive.teamdrives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set.",
        required: [],
      }),
    backgroundImageLink: z
      .string()
      .exactOptional()
      .openapi({ description: "A short-lived link to this Team Drive's background image." }),
    capabilities: z
      .object({
        canAddChildren: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether the current user can add children to folders in this Team Drive.',
          }),
        canChangeCopyRequiresWriterPermissionRestriction: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the current user can change the `copyRequiresWriterPermission` restriction of this Team Drive.',
          }),
        canChangeDomainUsersOnlyRestriction: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the current user can change the `domainUsersOnly` restriction of this Team Drive.',
          }),
        canChangeSharingFoldersRequiresOrganizerPermissionRestriction: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the current user can change the `sharingFoldersRequiresOrganizerPermission` restriction of this Team Drive.',
          }),
        canChangeTeamDriveBackground: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether the current user can change the background of this Team Drive.',
          }),
        canChangeTeamMembersOnlyRestriction: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the current user can change the `teamMembersOnly` restriction of this Team Drive.',
          }),
        canComment: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether the current user can comment on files in this Team Drive.',
          }),
        canCopy: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether the current user can copy files in this Team Drive.' }),
        canDeleteChildren: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the current user can delete children from folders in this Team Drive.',
          }),
        canDeleteTeamDrive: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the current user can delete this Team Drive. Attempting to delete the Team Drive may still fail if there are untrashed items inside the Team Drive.',
          }),
        canDownload: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether the current user can download files in this Team Drive.',
          }),
        canEdit: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether the current user can edit files in this Team Drive' }),
        canListChildren: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the current user can list the children of folders in this Team Drive.',
          }),
        canManageMembers: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the current user can add members to this Team Drive or remove them or change their role.',
          }),
        canReadRevisions: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the current user can read the revisions resource of files in this Team Drive.',
          }),
        canRemoveChildren: z
          .boolean()
          .exactOptional()
          .openapi({
            deprecated: true,
            description: 'Deprecated: Use `canDeleteChildren` or `canTrashChildren` instead.',
          }),
        canRename: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether the current user can rename files or folders in this Team Drive.',
          }),
        canRenameTeamDrive: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether the current user can rename this Team Drive.' }),
        canResetTeamDriveRestrictions: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the current user can reset the Team Drive restrictions to defaults.',
          }),
        canShare: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether the current user can share files or folders in this Team Drive.',
          }),
        canTrashChildren: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the current user can trash children from folders in this Team Drive.',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Capabilities the current user has on this Team Drive.',
        required: [],
      }),
    colorRgb: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The color of this Team Drive as an RGB hex string. It can only be set on a `drive.teamdrives.update` request that does not set `themeId`.',
      }),
    createdTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The time at which the Team Drive was created (RFC 3339 date-time).',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of this Team Drive which is also the ID of the top level folder of this Team Drive.',
      }),
    kind: z
      .string()
      .default('drive#teamDrive')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"drive#teamDrive"`.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of this Team Drive.' }),
    orgUnitId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`.',
      }),
    restrictions: z
      .object({
        adminManagedRestrictions: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether administrative privileges on this Team Drive are required to modify restrictions.',
          }),
        copyRequiresWriterPermission: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the options to copy, print, or download files inside this Team Drive, should be disabled for readers and commenters. When this restriction is set to `true`, it will override the similarly named field to `true` for any file inside this Team Drive.',
          }),
        domainUsersOnly: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether access to this Team Drive and items inside this Team Drive is restricted to users of the domain to which this Team Drive belongs. This restriction may be overridden by other sharing policies controlled outside of this Team Drive.',
          }),
        sharingFoldersRequiresOrganizerPermission: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If true, only users with the organizer role can share folders. If false, users with either the organizer role or the file organizer role can share folders.',
          }),
        teamMembersOnly: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether access to items inside this Team Drive is restricted to members of this Team Drive.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'A set of restrictions that apply to this Team Drive or items inside this Team Drive.',
        required: [],
      }),
    themeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The ID of the theme from which the background image and color will be set. The set of possible `teamDriveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.teamdrives.create` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`.",
      }),
  })
  .openapi({ description: 'Deprecated: use the drive collection instead.', required: [] })
  .openapi('TeamDrive')

const ChangeSchema = z
  .object({
    changeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the change. Possible values are `file` and `drive`.' }),
    drive: DriveSchema.exactOptional().openapi({
      description:
        'The updated state of the shared drive. Present if the changeType is drive, the user is still a member of the shared drive, and the shared drive has not been deleted.',
    }),
    driveId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the shared drive associated with this change.' }),
    file: FileSchema.exactOptional().openapi({
      description:
        'The updated state of the file. Present if the type is file and the file has not been removed from this list of changes.',
    }),
    fileId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the file which has changed.' }),
    kind: z
      .string()
      .default('drive#change')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"drive#change"`.',
      }),
    removed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access.',
      }),
    teamDrive: TeamDriveSchema.exactOptional().openapi({
      deprecated: true,
      description: 'Deprecated: Use `drive` instead.',
    }),
    teamDriveId: z
      .string()
      .exactOptional()
      .openapi({ deprecated: true, description: 'Deprecated: Use `driveId` instead.' }),
    time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time of this change (RFC 3339 date-time).' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ deprecated: true, description: 'Deprecated: Use `changeType` instead.' }),
  })
  .openapi({ description: 'A change to a file or shared drive.', required: [] })
  .openapi('Change')

const ChangeListSchema = z
  .object({
    changes: z
      .array(ChangeSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.',
      }),
    kind: z
      .string()
      .default('drive#changeList')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"drive#changeList"`.',
      }),
    newStartPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The starting page token for future changes. This will be present only if the end of the current changes list has been reached. The page token doesn't expire.",
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The page token for the next page of changes. This will be absent if the end of the changes list has been reached. The page token doesn't expire.",
      }),
  })
  .openapi({ description: 'A list of changes for a user.', required: [] })
  .openapi('ChangeList')

const ChannelSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({ description: 'The address where notifications are delivered for this channel.' }),
    expiration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'A UUID or similar unique string that identifies this channel.' }),
    kind: z
      .string()
      .default('api#channel')
      .exactOptional()
      .openapi({
        description:
          'Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`.',
      }),
    params: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Additional parameters controlling delivery channel behavior. Optional.',
      }),
    payload: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'A Boolean value to indicate whether payload is wanted. Optional.' }),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.',
      }),
    resourceUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'A version-specific identifier for the watched resource.' }),
    token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of delivery mechanism used for this channel. Valid values are "web_hook" or "webhook".',
      }),
  })
  .openapi({
    description: 'A notification channel used to watch for resource changes.',
    required: [],
  })
  .openapi('Channel')

const ReplySchema = z
  .object({
    action: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The action the reply performed to the parent comment. Valid values are: * `resolve` * `reopen`',
      }),
    author: UserSchema.exactOptional().openapi({
      description:
        "Output only. The author of the reply. The author's email address and permission ID will not be populated.",
    }),
    content: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The plain text content of the reply. This field is used for setting the content, while `htmlContent` should be displayed. This is required on creates if no `action` is specified.',
      }),
    createdTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time at which the reply was created (RFC 3339 date-time).' }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether the reply has been deleted. A deleted reply has no content.',
      }),
    htmlContent: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The content of the reply with HTML formatting.' }),
    id: z.string().exactOptional().openapi({ description: 'Output only. The ID of the reply.' }),
    kind: z
      .string()
      .default('drive#reply')
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#reply"`.',
      }),
    modifiedTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The last time the reply was modified (RFC 3339 date-time).' }),
  })
  .openapi({
    description:
      'A reply to a comment on a file. Some resource methods (such as `replies.update`) require a `replyId`. Use the `replies.list` method to retrieve the ID for a reply.',
    required: [],
  })
  .openapi('Reply')

const CommentSchema = z
  .object({
    anchor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A region of the document represented as a JSON string. For details on defining anchor properties, refer to [Manage comments and replies](https://developers.google.com/drive/api/v3/manage-comments).',
      }),
    author: UserSchema.exactOptional().openapi({
      description:
        "Output only. The author of the comment. The author's email address and permission ID will not be populated.",
    }),
    content: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The plain text content of the comment. This field is used for setting the content, while `htmlContent` should be displayed.',
      }),
    createdTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time at which the comment was created (RFC 3339 date-time).' }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether the comment has been deleted. A deleted comment has no content.',
      }),
    htmlContent: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The content of the comment with HTML formatting.' }),
    id: z.string().exactOptional().openapi({ description: 'Output only. The ID of the comment.' }),
    kind: z
      .string()
      .default('drive#comment')
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#comment"`.',
      }),
    modifiedTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The last time the comment or any of its replies was modified (RFC 3339 date-time).',
      }),
    quotedFileContent: z
      .object({
        mimeType: z
          .string()
          .exactOptional()
          .openapi({ description: 'The MIME type of the quoted content.' }),
        value: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The quoted content itself. This is interpreted as plain text if set through the API.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.',
        required: [],
      }),
    replies: z
      .array(ReplySchema)
      .exactOptional()
      .openapi({
        description: 'Output only. The full list of replies to the comment in chronological order.',
      }),
    resolved: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Whether the comment has been resolved by one of its replies.',
      }),
  })
  .openapi({
    description:
      'A comment on a file. Some resource methods (such as `comments.update`) require a `commentId`. Use the `comments.list` method to retrieve the ID for a comment in a file.',
    required: [],
  })
  .openapi('Comment')

const CommentListSchema = z
  .object({
    comments: z
      .array(CommentSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.',
      }),
    kind: z
      .string()
      .default('drive#commentList')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"drive#commentList"`.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.',
      }),
  })
  .openapi({ description: 'A list of comments on a file.', required: [] })
  .openapi('CommentList')

const DriveListSchema = z
  .object({
    drives: z
      .array(DriveSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of shared drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.',
      }),
    kind: z
      .string()
      .default('drive#driveList')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"drive#driveList"`.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The page token for the next page of shared drives. This will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.',
      }),
  })
  .openapi({ description: 'A list of shared drives.', required: [] })
  .openapi('DriveList')

const FileListSchema = z
  .object({
    files: z
      .array(FileSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.',
      }),
    incompleteSearch: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether the search process was incomplete. If true, then some search results might be missing, since all documents were not searched. This can occur when searching multiple drives with the 'allDrives' corpora, but all corpora couldn't be searched. When this happens, it's suggested that clients narrow their query by choosing a different corpus such as 'user' or 'drive'.",
      }),
    kind: z
      .string()
      .default('drive#fileList')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"drive#fileList"`.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.',
      }),
  })
  .openapi({ description: 'A list of files.', required: [] })
  .openapi('FileList')

const GeneratedIdsSchema = z
  .object({
    ids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The IDs generated for the requesting user in the specified space.',
      }),
    kind: z
      .string()
      .default('drive#generatedIds')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"drive#generatedIds"`.',
      }),
    space: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of file that can be created with these IDs.' }),
  })
  .openapi({
    description: 'A list of generated file IDs which can be provided in create requests.',
    required: [],
  })
  .openapi('GeneratedIds')

const LabelFieldModificationSchema = z
  .object({
    fieldId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the field to be modified.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always drive#labelFieldModification.' }),
    setDateValues: z
      .array(z.iso.date())
      .exactOptional()
      .openapi({
        description:
          'Replaces the value of a dateString Field with these new values. The string must be in the RFC 3339 full-date format: YYYY-MM-DD.',
      }),
    setIntegerValues: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Replaces the value of an `integer` field with these new values.' }),
    setSelectionValues: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Replaces a `selection` field with these new values.' }),
    setTextValues: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Sets the value of a `text` field.' }),
    setUserValues: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Replaces a `user` field with these new values. The values must be valid email addresses.',
      }),
    unsetValues: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Unsets the values for this field.' }),
  })
  .openapi({ description: "A modification to a label's field.", required: [] })
  .openapi('LabelFieldModification')

const LabelListSchema = z
  .object({
    kind: z.string().exactOptional().openapi({ description: 'This is always drive#labelList' }),
    labels: z.array(LabelSchema).exactOptional().openapi({ description: 'The list of labels.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The page token for the next page of labels. This field will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.',
      }),
  })
  .openapi({ description: 'A list of labels applied to a file.', required: [] })
  .openapi('LabelList')

const LabelModificationSchema = z
  .object({
    fieldModifications: z
      .array(LabelFieldModificationSchema)
      .exactOptional()
      .openapi({ description: "The list of modifications to this label's fields." }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always drive#labelModification.' }),
    labelId: z.string().exactOptional().openapi({ description: 'The ID of the label to modify.' }),
    removeLabel: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, the label will be removed from the file.' }),
  })
  .openapi({
    description:
      'A modification to a label on a file. A LabelModification can be used to apply a label to a file, update an existing label on a file, or remove a label from a file.',
    required: [],
  })
  .openapi('LabelModification')

const ModifyLabelsRequestSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always drive#modifyLabelsRequest.' }),
    labelModifications: z
      .array(LabelModificationSchema)
      .exactOptional()
      .openapi({ description: 'The list of modifications to apply to the labels on the file.' }),
  })
  .openapi({
    description:
      'A request to modify the set of labels on a file. This request may contain many modifications that will either all succeed or all fail atomically.',
    required: [],
  })
  .openapi('ModifyLabelsRequest')

const ModifyLabelsResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always drive#modifyLabelsResponse' }),
    modifiedLabels: z
      .array(LabelSchema)
      .exactOptional()
      .openapi({ description: 'The list of labels which were added or updated by the request.' }),
  })
  .openapi({
    description:
      'Response to a ModifyLabels request. This contains only those labels which were added or updated by the request.',
    required: [],
  })
  .openapi('ModifyLabelsResponse')

const PermissionListSchema = z
  .object({
    kind: z
      .string()
      .default('drive#permissionList')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"drive#permissionList"`.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.',
      }),
    permissions: z
      .array(PermissionSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of permissions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.',
      }),
  })
  .openapi({ description: 'A list of permissions for a file.', required: [] })
  .openapi('PermissionList')

const ReplyListSchema = z
  .object({
    kind: z
      .string()
      .default('drive#replyList')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"drive#replyList"`.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.',
      }),
    replies: z
      .array(ReplySchema)
      .exactOptional()
      .openapi({
        description:
          'The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.',
      }),
  })
  .openapi({ description: 'A list of replies to a comment on a file.', required: [] })
  .openapi('ReplyList')

const RevisionSchema = z
  .object({
    exportLinks: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. Links for exporting Docs Editors files to specific formats.',
      }),
    id: z.string().exactOptional().openapi({ description: 'Output only. The ID of the revision.' }),
    keepForever: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file. This field is only applicable to files with binary content in Drive.',
      }),
    kind: z
      .string()
      .default('drive#revision')
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#revision"`.',
      }),
    lastModifyingUser: UserSchema.exactOptional().openapi({
      description: 'Output only. The last user to modify this revision.',
    }),
    md5Checksum: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The MD5 checksum of the revision's content. This is only applicable to files with binary content in Drive.",
      }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The MIME type of the revision.' }),
    modifiedTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The last time the revision was modified (RFC 3339 date-time).' }),
    originalFilename: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The original filename used to create this revision. This is only applicable to files with binary content in Drive.',
      }),
    publishAuto: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether subsequent revisions will be automatically republished. This is only applicable to Docs Editors files.',
      }),
    published: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this revision is published. This is only applicable to Docs Editors files.',
      }),
    publishedLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A link to the published revision. This is only populated for Google Sites files.',
      }),
    publishedOutsideDomain: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this revision is published outside the domain. This is only applicable to Docs Editors files.',
      }),
    size: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The size of the revision's content in bytes. This is only applicable to files with binary content in Drive.",
      }),
  })
  .openapi({
    description:
      'The metadata for a revision to a file. Some resource methods (such as `revisions.update`) require a `revisionId`. Use the `revisions.list` method to retrieve the ID for a revision.',
    required: [],
  })
  .openapi('Revision')

const RevisionListSchema = z
  .object({
    kind: z
      .string()
      .default('drive#revisionList')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"drive#revisionList"`.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The page token for the next page of revisions. This will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.',
      }),
    revisions: z
      .array(RevisionSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.',
      }),
  })
  .openapi({ description: 'A list of revisions of a file.', required: [] })
  .openapi('RevisionList')

const StartPageTokenSchema = z
  .object({
    kind: z
      .string()
      .default('drive#startPageToken')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"drive#startPageToken"`.',
      }),
    startPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The starting page token for listing future changes. The page token doesn't expire.",
      }),
  })
  .openapi({ required: [] })
  .openapi('StartPageToken')

const TeamDriveListSchema = z
  .object({
    kind: z
      .string()
      .default('drive#teamDriveList')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"drive#teamDriveList"`.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The page token for the next page of Team Drives. This will be absent if the end of the Team Drives list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ.',
      }),
    teamDrives: z
      .array(TeamDriveSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of Team Drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.',
      }),
  })
  .openapi({ description: 'A list of Team Drives.', required: [] })
  .openapi('TeamDriveList')

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
        'https://www.googleapis.com/auth/drive':
          'See, edit, create, and delete all of your Google Drive files',
        'https://www.googleapis.com/auth/drive.appdata':
          'See, create, and delete its own configuration data in your Google Drive',
        'https://www.googleapis.com/auth/drive.apps.readonly': 'View your Google Drive apps',
        'https://www.googleapis.com/auth/drive.file':
          'See, edit, create, and delete only the specific Google Drive files you use with this app',
        'https://www.googleapis.com/auth/drive.metadata':
          'View and manage metadata of files in your Google Drive',
        'https://www.googleapis.com/auth/drive.metadata.readonly':
          'See information about your Google Drive files',
        'https://www.googleapis.com/auth/drive.photos.readonly':
          'View the photos, videos and albums in your Google Photos',
        'https://www.googleapis.com/auth/drive.readonly':
          'See and download all your Google Drive files',
        'https://www.googleapis.com/auth/drive.scripts':
          "Modify your Google Apps Script scripts' behavior",
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
        'https://www.googleapis.com/auth/drive':
          'See, edit, create, and delete all of your Google Drive files',
        'https://www.googleapis.com/auth/drive.appdata':
          'See, create, and delete its own configuration data in your Google Drive',
        'https://www.googleapis.com/auth/drive.apps.readonly': 'View your Google Drive apps',
        'https://www.googleapis.com/auth/drive.file':
          'See, edit, create, and delete only the specific Google Drive files you use with this app',
        'https://www.googleapis.com/auth/drive.metadata':
          'View and manage metadata of files in your Google Drive',
        'https://www.googleapis.com/auth/drive.metadata.readonly':
          'See information about your Google Drive files',
        'https://www.googleapis.com/auth/drive.photos.readonly':
          'View the photos, videos and albums in your Google Photos',
        'https://www.googleapis.com/auth/drive.readonly':
          'See and download all your Google Drive files',
        'https://www.googleapis.com/auth/drive.scripts':
          "Modify your Google Apps Script scripts' behavior",
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getAboutRoute = createRoute({
  method: 'get',
  path: '/about',
  tags: ['about'],
  description: "Gets information about the user, the user's Drive, and system capabilities.",
  operationId: 'drive.about.get',
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
      content: { 'application/json': { schema: AboutSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.appdata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.appdata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.photos.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.photos.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
  ],
})

export const getAppsRoute = createRoute({
  method: 'get',
  path: '/apps',
  tags: ['apps'],
  description: "Lists a user's installed apps.",
  operationId: 'drive.apps.list',
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
      appFilterExtensions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given file extensions are included in the response. If `appFilterMimeTypes` are provided as well, the result is a union of the two resulting app lists.',
            in: 'query',
            name: 'appFilterExtensions',
            schema: { type: 'string' },
            required: false,
          },
        }),
      appFilterMimeTypes: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given MIME types will be included in the response. If `appFilterExtensions` are provided as well, the result is a union of the two resulting app lists.',
            in: 'query',
            name: 'appFilterMimeTypes',
            schema: { type: 'string' },
            required: false,
          },
        }),
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).",
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AppListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.apps.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.apps.readonly'],
    },
  ],
})

export const getAppsAppIdRoute = createRoute({
  method: 'get',
  path: '/apps/{appId}',
  tags: ['apps'],
  description: 'Gets a specific app.',
  operationId: 'drive.apps.get',
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
      appId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the app.',
            in: 'path',
            name: 'appId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AppSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.appdata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.appdata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.apps.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.apps.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
  ],
})

export const getChangesRoute = createRoute({
  method: 'get',
  path: '/changes',
  tags: ['changes'],
  description: 'Lists the changes for a user or shared drive.',
  operationId: 'drive.changes.list',
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
        .openapi({
          param: {
            description:
              "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.",
            in: 'query',
            name: 'pageToken',
            required: true,
            schema: { type: 'string' },
          },
        }),
      driveId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.',
            in: 'query',
            name: 'driveId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeCorpusRemovals: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.',
            in: 'query',
            name: 'includeCorpusRemovals',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeItemsFromAllDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether both My Drive and shared drive items should be included in results.',
            in: 'query',
            name: 'includeItemsFromAllDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeLabels: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.',
            in: 'query',
            name: 'includeLabels',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includePermissionsForView: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies which additional view's permissions to include in the response. Only 'published' is supported.",
            in: 'query',
            name: 'includePermissionsForView',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeRemoved: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.',
            in: 'query',
            name: 'includeRemoved',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeTeamDriveItems: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated: Use `includeItemsFromAllDrives` instead.',
            in: 'query',
            name: 'includeTeamDriveItems',
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of changes to return per page.',
            in: 'query',
            name: 'pageSize',
            schema: { maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      restrictToMyDrive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.',
            in: 'query',
            name: 'restrictToMyDrive',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      spaces: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.",
            in: 'query',
            name: 'spaces',
            schema: { type: 'string' },
            required: false,
          },
        }),
      supportsAllDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the requesting application supports both My Drives and shared drives.',
            in: 'query',
            name: 'supportsAllDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      supportsTeamDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated: Use `supportsAllDrives` instead.',
            in: 'query',
            name: 'supportsTeamDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      teamDriveId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated: Use `driveId` instead.',
            in: 'query',
            name: 'teamDriveId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChangeListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.appdata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.appdata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.photos.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.photos.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
  ],
})

export const getChangesStartPageTokenRoute = createRoute({
  method: 'get',
  path: '/changes/startPageToken',
  tags: ['changes'],
  description: 'Gets the starting pageToken for listing future changes.',
  operationId: 'drive.changes.getStartPageToken',
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
      driveId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned.',
            in: 'query',
            name: 'driveId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      supportsAllDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the requesting application supports both My Drives and shared drives.',
            in: 'query',
            name: 'supportsAllDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      supportsTeamDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated: Use `supportsAllDrives` instead.',
            in: 'query',
            name: 'supportsTeamDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      teamDriveId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated: Use `driveId` instead.',
            in: 'query',
            name: 'teamDriveId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: StartPageTokenSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.appdata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.appdata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.photos.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.photos.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
  ],
})

export const postChangesWatchRoute = createRoute({
  method: 'post',
  path: '/changes/watch',
  tags: ['changes'],
  description: 'Subscribes to changes for a user.',
  operationId: 'drive.changes.watch',
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
        .openapi({
          param: {
            description:
              "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.",
            in: 'query',
            name: 'pageToken',
            required: true,
            schema: { type: 'string' },
          },
        }),
      driveId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.',
            in: 'query',
            name: 'driveId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeCorpusRemovals: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.',
            in: 'query',
            name: 'includeCorpusRemovals',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeItemsFromAllDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether both My Drive and shared drive items should be included in results.',
            in: 'query',
            name: 'includeItemsFromAllDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeLabels: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.',
            in: 'query',
            name: 'includeLabels',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includePermissionsForView: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies which additional view's permissions to include in the response. Only 'published' is supported.",
            in: 'query',
            name: 'includePermissionsForView',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeRemoved: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.',
            in: 'query',
            name: 'includeRemoved',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeTeamDriveItems: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated: Use `includeItemsFromAllDrives` instead.',
            in: 'query',
            name: 'includeTeamDriveItems',
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of changes to return per page.',
            in: 'query',
            name: 'pageSize',
            schema: { maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      restrictToMyDrive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.',
            in: 'query',
            name: 'restrictToMyDrive',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      spaces: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.",
            in: 'query',
            name: 'spaces',
            schema: { type: 'string' },
            required: false,
          },
        }),
      supportsAllDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the requesting application supports both My Drives and shared drives.',
            in: 'query',
            name: 'supportsAllDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      supportsTeamDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated: Use `supportsAllDrives` instead.',
            in: 'query',
            name: 'supportsTeamDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      teamDriveId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated: Use `driveId` instead.',
            in: 'query',
            name: 'teamDriveId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ChannelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChannelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.appdata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.appdata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.photos.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.photos.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
  ],
})

export const postChannelsStopRoute = createRoute({
  method: 'post',
  path: '/channels/stop',
  tags: ['channels'],
  description: 'Stops watching resources through this channel.',
  operationId: 'drive.channels.stop',
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
    body: { content: { 'application/json': { schema: ChannelSchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.appdata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.appdata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.photos.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.photos.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
  ],
})

export const getDrivesRoute = createRoute({
  method: 'get',
  path: '/drives',
  tags: ['drives'],
  description:
    " Lists the user's shared drives. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for shared drives](/drive/api/guides/search-shareddrives) guide.",
  operationId: 'drive.drives.list',
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
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of shared drives to return per page.',
            in: 'query',
            name: 'pageSize',
            schema: { maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Page token for shared drives.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string for searching shared drives.',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
      useDomainAdminAccess: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned.',
            in: 'query',
            name: 'useDomainAdminAccess',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DriveListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
  ],
})

export const postDrivesRoute = createRoute({
  method: 'post',
  path: '/drives',
  tags: ['drives'],
  description: 'Creates a shared drive.',
  operationId: 'drive.drives.create',
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
      requestId: z
        .string()
        .openapi({
          param: {
            description:
              "Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned.",
            in: 'query',
            name: 'requestId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DriveSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DriveSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
  ],
})

export const getDrivesDriveIdRoute = createRoute({
  method: 'get',
  path: '/drives/{driveId}',
  tags: ['drives'],
  description: "Gets a shared drive's metadata by ID.",
  operationId: 'drive.drives.get',
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
      useDomainAdminAccess: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.',
            in: 'query',
            name: 'useDomainAdminAccess',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      driveId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the shared drive.',
            in: 'path',
            name: 'driveId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DriveSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
  ],
})

export const deleteDrivesDriveIdRoute = createRoute({
  method: 'delete',
  path: '/drives/{driveId}',
  tags: ['drives'],
  description:
    'Permanently deletes a shared drive for which the user is an `organizer`. The shared drive cannot contain any untrashed items.',
  operationId: 'drive.drives.delete',
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
      allowItemDeletion: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether any items inside the shared drive should also be deleted. This option is only supported when `useDomainAdminAccess` is also set to `true`.',
            in: 'query',
            name: 'allowItemDeletion',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      useDomainAdminAccess: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.',
            in: 'query',
            name: 'useDomainAdminAccess',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      driveId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the shared drive.',
            in: 'path',
            name: 'driveId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
  ],
})

export const patchDrivesDriveIdRoute = createRoute({
  method: 'patch',
  path: '/drives/{driveId}',
  tags: ['drives'],
  description: 'Updates the metadate for a shared drive.',
  operationId: 'drive.drives.update',
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
      useDomainAdminAccess: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.',
            in: 'query',
            name: 'useDomainAdminAccess',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      driveId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the shared drive.',
            in: 'path',
            name: 'driveId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DriveSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DriveSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
  ],
})

export const postDrivesDriveIdHideRoute = createRoute({
  method: 'post',
  path: '/drives/{driveId}/hide',
  tags: ['drives'],
  description: 'Hides a shared drive from the default view.',
  operationId: 'drive.drives.hide',
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
      driveId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the shared drive.',
            in: 'path',
            name: 'driveId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DriveSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
  ],
})

export const postDrivesDriveIdUnhideRoute = createRoute({
  method: 'post',
  path: '/drives/{driveId}/unhide',
  tags: ['drives'],
  description: 'Restores a shared drive to the default view.',
  operationId: 'drive.drives.unhide',
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
      driveId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the shared drive.',
            in: 'path',
            name: 'driveId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DriveSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
  ],
})

export const getFilesRoute = createRoute({
  method: 'get',
  path: '/files',
  tags: ['files'],
  description:
    " Lists the user's files. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for files & folders](/drive/api/guides/search-files) guide. *Note:* This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.",
  operationId: 'drive.files.list',
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
      corpora: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Bodies of items (files/documents) to which the query applies. Supported bodies are 'user', 'domain', 'drive', and 'allDrives'. Prefer 'user' or 'drive' to 'allDrives' for efficiency. By default, corpora is set to 'user'. However, this can change depending on the filter set through the 'q' parameter.",
            in: 'query',
            name: 'corpora',
            schema: { type: 'string' },
            required: false,
          },
        }),
      corpus: z
        .enum(['domain', 'user'])
        .exactOptional()
        .openapi({
          param: {
            description: "Deprecated: The source of files to list. Use 'corpora' instead.",
            in: 'query',
            name: 'corpus',
            schema: { enum: ['domain', 'user'], type: 'string' },
            required: false,
          },
        }),
      driveId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ID of the shared drive to search.',
            in: 'query',
            name: 'driveId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeItemsFromAllDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether both My Drive and shared drive items should be included in results.',
            in: 'query',
            name: 'includeItemsFromAllDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeLabels: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.',
            in: 'query',
            name: 'includeLabels',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includePermissionsForView: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies which additional view's permissions to include in the response. Only 'published' is supported.",
            in: 'query',
            name: 'includePermissionsForView',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeTeamDriveItems: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated: Use `includeItemsFromAllDrives` instead.',
            in: 'query',
            name: 'includeTeamDriveItems',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but can be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name.",
            in: 'query',
            name: 'orderBy',
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.',
            in: 'query',
            name: 'pageSize',
            schema: { maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.",
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A query for filtering the file results. See the "Search for files & folders" guide for supported syntax.',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
      spaces: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.",
            in: 'query',
            name: 'spaces',
            schema: { type: 'string' },
            required: false,
          },
        }),
      supportsAllDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the requesting application supports both My Drives and shared drives.',
            in: 'query',
            name: 'supportsAllDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      supportsTeamDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated: Use `supportsAllDrives` instead.',
            in: 'query',
            name: 'supportsTeamDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      teamDriveId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated: Use `driveId` instead.',
            in: 'query',
            name: 'teamDriveId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FileListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.appdata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.appdata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.photos.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.photos.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
  ],
})

export const postFilesRoute = createRoute({
  method: 'post',
  path: '/files',
  tags: ['files'],
  description:
    ' Creates a new file. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*/*` Note: Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/drive/api/guides/manage-uploads). Apps creating shortcuts with `files.create` must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `name` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"name": "cat.jpg"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `title` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the title. In cases where the extension is missing, Drive attempts to determine the extension based on the file\'s MIME type.',
  operationId: 'drive.files.create',
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
      enforceSingleParent: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated. Creating files in multiple folders is no longer supported.',
            in: 'query',
            name: 'enforceSingleParent',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      ignoreDefaultVisibility: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.",
            in: 'query',
            name: 'ignoreDefaultVisibility',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeLabels: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.',
            in: 'query',
            name: 'includeLabels',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includePermissionsForView: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies which additional view's permissions to include in the response. Only 'published' is supported.",
            in: 'query',
            name: 'includePermissionsForView',
            schema: { type: 'string' },
            required: false,
          },
        }),
      keepRevisionForever: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.",
            in: 'query',
            name: 'keepRevisionForever',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      ocrLanguage: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A language hint for OCR processing during image import (ISO 639-1 code).',
            in: 'query',
            name: 'ocrLanguage',
            schema: { type: 'string' },
            required: false,
          },
        }),
      supportsAllDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the requesting application supports both My Drives and shared drives.',
            in: 'query',
            name: 'supportsAllDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      supportsTeamDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated: Use `supportsAllDrives` instead.',
            in: 'query',
            name: 'supportsTeamDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      useContentAsIndexableText: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to use the uploaded content as indexable text.',
            in: 'query',
            name: 'useContentAsIndexableText',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/octet-stream': { schema: FileSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FileSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.appdata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.appdata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
  ],
})

export const getFilesGenerateIdsRoute = createRoute({
  method: 'get',
  path: '/files/generateIds',
  tags: ['files'],
  description: 'Generates a set of file IDs which can be provided in create or copy requests.',
  operationId: 'drive.files.generateIds',
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
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of IDs to return.',
            in: 'query',
            name: 'count',
            schema: { maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      space: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'. (Default: 'drive')",
            in: 'query',
            name: 'space',
            schema: { type: 'string' },
            required: false,
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The type of items which the IDs can be used for. Supported values are 'files' and 'shortcuts'. Note that 'shortcuts' are only supported in the `drive` 'space'. (Default: 'files')",
            in: 'query',
            name: 'type',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GeneratedIdsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.appdata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.appdata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
  ],
})

export const deleteFilesTrashRoute = createRoute({
  method: 'delete',
  path: '/files/trash',
  tags: ['files'],
  description: "Permanently deletes all of the user's trashed files.",
  operationId: 'drive.files.emptyTrash',
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
      driveId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If set, empties the trash of the provided shared drive.',
            in: 'query',
            name: 'driveId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      enforceSingleParent: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root.",
            in: 'query',
            name: 'enforceSingleParent',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
  ],
})

export const getFilesFileIdRoute = createRoute({
  method: 'get',
  path: '/files/{fileId}',
  tags: ['files'],
  description:
    " Gets a file's metadata or content by ID. If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](/drive/api/reference/rest/v3/files/export) instead. For more information, see [Download & export files](/drive/api/guides/manage-downloads).",
  operationId: 'drive.files.get',
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
      acknowledgeAbuse: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.',
            in: 'query',
            name: 'acknowledgeAbuse',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeLabels: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.',
            in: 'query',
            name: 'includeLabels',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includePermissionsForView: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies which additional view's permissions to include in the response. Only 'published' is supported.",
            in: 'query',
            name: 'includePermissionsForView',
            schema: { type: 'string' },
            required: false,
          },
        }),
      supportsAllDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the requesting application supports both My Drives and shared drives.',
            in: 'query',
            name: 'supportsAllDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      supportsTeamDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated: Use `supportsAllDrives` instead.',
            in: 'query',
            name: 'supportsTeamDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FileSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.appdata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.appdata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.photos.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.photos.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
  ],
})

export const deleteFilesFileIdRoute = createRoute({
  method: 'delete',
  path: '/files/{fileId}',
  tags: ['files'],
  description:
    'Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive, the user must be an `organizer` on the parent folder. If the target is a folder, all descendants owned by the user are also deleted.',
  operationId: 'drive.files.delete',
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
      enforceSingleParent: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root.",
            in: 'query',
            name: 'enforceSingleParent',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      supportsAllDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the requesting application supports both My Drives and shared drives.',
            in: 'query',
            name: 'supportsAllDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      supportsTeamDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated: Use `supportsAllDrives` instead.',
            in: 'query',
            name: 'supportsTeamDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.appdata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.appdata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
  ],
})

export const patchFilesFileIdRoute = createRoute({
  method: 'patch',
  path: '/files/{fileId}',
  tags: ['files'],
  description:
    " Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*/*` Note: Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/drive/api/guides/manage-uploads).",
  operationId: 'drive.files.update',
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
      addParents: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma-separated list of parent IDs to add.',
            in: 'query',
            name: 'addParents',
            schema: { type: 'string' },
            required: false,
          },
        }),
      enforceSingleParent: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated: Adding files to multiple folders is no longer supported. Use shortcuts instead.',
            in: 'query',
            name: 'enforceSingleParent',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeLabels: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.',
            in: 'query',
            name: 'includeLabels',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includePermissionsForView: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies which additional view's permissions to include in the response. Only 'published' is supported.",
            in: 'query',
            name: 'includePermissionsForView',
            schema: { type: 'string' },
            required: false,
          },
        }),
      keepRevisionForever: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.",
            in: 'query',
            name: 'keepRevisionForever',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      ocrLanguage: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A language hint for OCR processing during image import (ISO 639-1 code).',
            in: 'query',
            name: 'ocrLanguage',
            schema: { type: 'string' },
            required: false,
          },
        }),
      removeParents: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma-separated list of parent IDs to remove.',
            in: 'query',
            name: 'removeParents',
            schema: { type: 'string' },
            required: false,
          },
        }),
      supportsAllDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the requesting application supports both My Drives and shared drives.',
            in: 'query',
            name: 'supportsAllDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      supportsTeamDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated: Use `supportsAllDrives` instead.',
            in: 'query',
            name: 'supportsTeamDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      useContentAsIndexableText: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to use the uploaded content as indexable text.',
            in: 'query',
            name: 'useContentAsIndexableText',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/octet-stream': { schema: FileSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FileSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.appdata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.appdata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.scripts'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.scripts'],
    },
  ],
})

export const getFilesFileIdCommentsRoute = createRoute({
  method: 'get',
  path: '/files/{fileId}/comments',
  tags: ['comments'],
  description: "Lists a file's comments.",
  operationId: 'drive.comments.list',
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
      includeDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to include deleted comments. Deleted comments will not include their original content.',
            in: 'query',
            name: 'includeDeleted',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of comments to return per page.',
            in: 'query',
            name: 'pageSize',
            schema: { maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.",
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startModifiedTime: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time).",
            in: 'query',
            name: 'startModifiedTime',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CommentListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
  ],
})

export const postFilesFileIdCommentsRoute = createRoute({
  method: 'post',
  path: '/files/{fileId}/comments',
  tags: ['comments'],
  description: 'Creates a comment on a file.',
  operationId: 'drive.comments.create',
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
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CommentSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CommentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
  ],
})

export const getFilesFileIdCommentsCommentIdRoute = createRoute({
  method: 'get',
  path: '/files/{fileId}/comments/{commentId}',
  tags: ['comments'],
  description: 'Gets a comment by ID.',
  operationId: 'drive.comments.get',
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
      includeDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to return deleted comments. Deleted comments will not include their original content.',
            in: 'query',
            name: 'includeDeleted',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      commentId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the comment.',
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CommentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
  ],
})

export const deleteFilesFileIdCommentsCommentIdRoute = createRoute({
  method: 'delete',
  path: '/files/{fileId}/comments/{commentId}',
  tags: ['comments'],
  description: 'Deletes a comment.',
  operationId: 'drive.comments.delete',
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
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      commentId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the comment.',
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
  ],
})

export const patchFilesFileIdCommentsCommentIdRoute = createRoute({
  method: 'patch',
  path: '/files/{fileId}/comments/{commentId}',
  tags: ['comments'],
  description: 'Updates a comment with patch semantics.',
  operationId: 'drive.comments.update',
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
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      commentId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the comment.',
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CommentSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CommentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
  ],
})

export const getFilesFileIdCommentsCommentIdRepliesRoute = createRoute({
  method: 'get',
  path: '/files/{fileId}/comments/{commentId}/replies',
  tags: ['replies'],
  description: "Lists a comment's replies.",
  operationId: 'drive.replies.list',
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
      includeDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to include deleted replies. Deleted replies will not include their original content.',
            in: 'query',
            name: 'includeDeleted',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of replies to return per page.',
            in: 'query',
            name: 'pageSize',
            schema: { maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.",
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      commentId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the comment.',
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReplyListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
  ],
})

export const postFilesFileIdCommentsCommentIdRepliesRoute = createRoute({
  method: 'post',
  path: '/files/{fileId}/comments/{commentId}/replies',
  tags: ['replies'],
  description: 'Creates a reply to a comment.',
  operationId: 'drive.replies.create',
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
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      commentId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the comment.',
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReplySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReplySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
  ],
})

export const getFilesFileIdCommentsCommentIdRepliesReplyIdRoute = createRoute({
  method: 'get',
  path: '/files/{fileId}/comments/{commentId}/replies/{replyId}',
  tags: ['replies'],
  description: 'Gets a reply by ID.',
  operationId: 'drive.replies.get',
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
      includeDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to return deleted replies. Deleted replies will not include their original content.',
            in: 'query',
            name: 'includeDeleted',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      commentId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the comment.',
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      replyId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the reply.',
            in: 'path',
            name: 'replyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReplySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
  ],
})

export const deleteFilesFileIdCommentsCommentIdRepliesReplyIdRoute = createRoute({
  method: 'delete',
  path: '/files/{fileId}/comments/{commentId}/replies/{replyId}',
  tags: ['replies'],
  description: 'Deletes a reply.',
  operationId: 'drive.replies.delete',
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
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      commentId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the comment.',
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      replyId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the reply.',
            in: 'path',
            name: 'replyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
  ],
})

export const patchFilesFileIdCommentsCommentIdRepliesReplyIdRoute = createRoute({
  method: 'patch',
  path: '/files/{fileId}/comments/{commentId}/replies/{replyId}',
  tags: ['replies'],
  description: 'Updates a reply with patch semantics.',
  operationId: 'drive.replies.update',
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
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      commentId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the comment.',
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      replyId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the reply.',
            in: 'path',
            name: 'replyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReplySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReplySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
  ],
})

export const postFilesFileIdCopyRoute = createRoute({
  method: 'post',
  path: '/files/{fileId}/copy',
  tags: ['files'],
  description: 'Creates a copy of a file and applies any requested updates with patch semantics.',
  operationId: 'drive.files.copy',
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
      enforceSingleParent: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated. Copying files into multiple folders is no longer supported. Use shortcuts instead.',
            in: 'query',
            name: 'enforceSingleParent',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      ignoreDefaultVisibility: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.",
            in: 'query',
            name: 'ignoreDefaultVisibility',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeLabels: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.',
            in: 'query',
            name: 'includeLabels',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includePermissionsForView: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies which additional view's permissions to include in the response. Only 'published' is supported.",
            in: 'query',
            name: 'includePermissionsForView',
            schema: { type: 'string' },
            required: false,
          },
        }),
      keepRevisionForever: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.",
            in: 'query',
            name: 'keepRevisionForever',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      ocrLanguage: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A language hint for OCR processing during image import (ISO 639-1 code).',
            in: 'query',
            name: 'ocrLanguage',
            schema: { type: 'string' },
            required: false,
          },
        }),
      supportsAllDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the requesting application supports both My Drives and shared drives.',
            in: 'query',
            name: 'supportsAllDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      supportsTeamDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated: Use `supportsAllDrives` instead.',
            in: 'query',
            name: 'supportsTeamDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FileSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FileSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.appdata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.appdata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.photos.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.photos.readonly'],
    },
  ],
})

export const getFilesFileIdExportRoute = createRoute({
  method: 'get',
  path: '/files/{fileId}/export',
  tags: ['files'],
  description:
    'Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.',
  operationId: 'drive.files.export',
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
      mimeType: z
        .string()
        .openapi({
          param: {
            description: 'Required. The MIME type of the format requested for this export.',
            in: 'query',
            name: 'mimeType',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
  ],
})

export const getFilesFileIdListLabelsRoute = createRoute({
  method: 'get',
  path: '/files/{fileId}/listLabels',
  tags: ['files'],
  description: 'Lists the labels on a file.',
  operationId: 'drive.files.listLabels',
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
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of labels to return per page. When not set, defaults to 100.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.",
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID for the file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LabelListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
  ],
})

export const postFilesFileIdModifyLabelsRoute = createRoute({
  method: 'post',
  path: '/files/{fileId}/modifyLabels',
  tags: ['files'],
  description:
    'Modifies the set of labels applied to a file. Returns a list of the labels that were added or modified.',
  operationId: 'drive.files.modifyLabels',
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
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file to which the labels belong.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ModifyLabelsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ModifyLabelsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata'],
    },
  ],
})

export const getFilesFileIdPermissionsRoute = createRoute({
  method: 'get',
  path: '/files/{fileId}/permissions',
  tags: ['permissions'],
  description: "Lists a file's or shared drive's permissions.",
  operationId: 'drive.permissions.list',
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
      includePermissionsForView: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies which additional view's permissions to include in the response. Only 'published' is supported.",
            in: 'query',
            name: 'includePermissionsForView',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned.',
            in: 'query',
            name: 'pageSize',
            schema: { maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.",
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      supportsAllDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the requesting application supports both My Drives and shared drives.',
            in: 'query',
            name: 'supportsAllDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      supportsTeamDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated: Use `supportsAllDrives` instead.',
            in: 'query',
            name: 'supportsTeamDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      useDomainAdminAccess: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.',
            in: 'query',
            name: 'useDomainAdminAccess',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file or shared drive.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PermissionListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.photos.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.photos.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
  ],
})

export const postFilesFileIdPermissionsRoute = createRoute({
  method: 'post',
  path: '/files/{fileId}/permissions',
  tags: ['permissions'],
  description:
    'Creates a permission for a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.',
  operationId: 'drive.permissions.create',
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
      emailMessage: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A plain text custom message to include in the notification email.',
            in: 'query',
            name: 'emailMessage',
            schema: { type: 'string' },
            required: false,
          },
        }),
      enforceSingleParent: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated: See `moveToNewOwnersRoot` for details.',
            in: 'query',
            name: 'enforceSingleParent',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      moveToNewOwnersRoot: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. If set to `true`, the item will be moved to the new owner's My Drive root folder and all prior parents removed. If set to `false`, parents are not changed.",
            in: 'query',
            name: 'moveToNewOwnersRoot',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      sendNotificationEmail: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to send a notification email when sharing to users or groups. This defaults to true for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers.',
            in: 'query',
            name: 'sendNotificationEmail',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      supportsAllDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the requesting application supports both My Drives and shared drives.',
            in: 'query',
            name: 'supportsAllDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      supportsTeamDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated: Use `supportsAllDrives` instead.',
            in: 'query',
            name: 'supportsTeamDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      transferOwnership: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.',
            in: 'query',
            name: 'transferOwnership',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      useDomainAdminAccess: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.',
            in: 'query',
            name: 'useDomainAdminAccess',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file or shared drive.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PermissionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PermissionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
  ],
})

export const getFilesFileIdPermissionsPermissionIdRoute = createRoute({
  method: 'get',
  path: '/files/{fileId}/permissions/{permissionId}',
  tags: ['permissions'],
  description: 'Gets a permission by ID.',
  operationId: 'drive.permissions.get',
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
      supportsAllDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the requesting application supports both My Drives and shared drives.',
            in: 'query',
            name: 'supportsAllDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      supportsTeamDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated: Use `supportsAllDrives` instead.',
            in: 'query',
            name: 'supportsTeamDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      useDomainAdminAccess: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.',
            in: 'query',
            name: 'useDomainAdminAccess',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      permissionId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the permission.',
            in: 'path',
            name: 'permissionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PermissionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.photos.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.photos.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
  ],
})

export const deleteFilesFileIdPermissionsPermissionIdRoute = createRoute({
  method: 'delete',
  path: '/files/{fileId}/permissions/{permissionId}',
  tags: ['permissions'],
  description:
    'Deletes a permission. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.',
  operationId: 'drive.permissions.delete',
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
      supportsAllDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the requesting application supports both My Drives and shared drives.',
            in: 'query',
            name: 'supportsAllDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      supportsTeamDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated: Use `supportsAllDrives` instead.',
            in: 'query',
            name: 'supportsTeamDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      useDomainAdminAccess: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.',
            in: 'query',
            name: 'useDomainAdminAccess',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file or shared drive.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      permissionId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the permission.',
            in: 'path',
            name: 'permissionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
  ],
})

export const patchFilesFileIdPermissionsPermissionIdRoute = createRoute({
  method: 'patch',
  path: '/files/{fileId}/permissions/{permissionId}',
  tags: ['permissions'],
  description:
    'Updates a permission with patch semantics. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.',
  operationId: 'drive.permissions.update',
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
      removeExpiration: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to remove the expiration date.',
            in: 'query',
            name: 'removeExpiration',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      supportsAllDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the requesting application supports both My Drives and shared drives.',
            in: 'query',
            name: 'supportsAllDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      supportsTeamDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated: Use `supportsAllDrives` instead.',
            in: 'query',
            name: 'supportsTeamDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      transferOwnership: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.',
            in: 'query',
            name: 'transferOwnership',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      useDomainAdminAccess: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.',
            in: 'query',
            name: 'useDomainAdminAccess',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file or shared drive.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      permissionId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the permission.',
            in: 'path',
            name: 'permissionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PermissionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PermissionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
  ],
})

export const getFilesFileIdRevisionsRoute = createRoute({
  method: 'get',
  path: '/files/{fileId}/revisions',
  tags: ['revisions'],
  description: "Lists a file's revisions.",
  operationId: 'drive.revisions.list',
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
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of revisions to return per page.',
            in: 'query',
            name: 'pageSize',
            schema: { maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.",
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RevisionListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.appdata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.appdata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.photos.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.photos.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
  ],
})

export const getFilesFileIdRevisionsRevisionIdRoute = createRoute({
  method: 'get',
  path: '/files/{fileId}/revisions/{revisionId}',
  tags: ['revisions'],
  description: "Gets a revision's metadata or content by ID.",
  operationId: 'drive.revisions.get',
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
      acknowledgeAbuse: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.',
            in: 'query',
            name: 'acknowledgeAbuse',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      revisionId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the revision.',
            in: 'path',
            name: 'revisionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RevisionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.appdata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.appdata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.photos.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.photos.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
  ],
})

export const deleteFilesFileIdRevisionsRevisionIdRoute = createRoute({
  method: 'delete',
  path: '/files/{fileId}/revisions/{revisionId}',
  tags: ['revisions'],
  description:
    "Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.",
  operationId: 'drive.revisions.delete',
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
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      revisionId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the revision.',
            in: 'path',
            name: 'revisionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.appdata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.appdata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
  ],
})

export const patchFilesFileIdRevisionsRevisionIdRoute = createRoute({
  method: 'patch',
  path: '/files/{fileId}/revisions/{revisionId}',
  tags: ['revisions'],
  description: 'Updates a revision with patch semantics.',
  operationId: 'drive.revisions.update',
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
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      revisionId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the revision.',
            in: 'path',
            name: 'revisionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RevisionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RevisionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.appdata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.appdata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
  ],
})

export const postFilesFileIdWatchRoute = createRoute({
  method: 'post',
  path: '/files/{fileId}/watch',
  tags: ['files'],
  description: 'Subscribes to changes to a file.',
  operationId: 'drive.files.watch',
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
      acknowledgeAbuse: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.',
            in: 'query',
            name: 'acknowledgeAbuse',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeLabels: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.',
            in: 'query',
            name: 'includeLabels',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includePermissionsForView: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies which additional view's permissions to include in the response. Only 'published' is supported.",
            in: 'query',
            name: 'includePermissionsForView',
            schema: { type: 'string' },
            required: false,
          },
        }),
      supportsAllDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the requesting application supports both My Drives and shared drives.',
            in: 'query',
            name: 'supportsAllDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      supportsTeamDrives: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deprecated: Use `supportsAllDrives` instead.',
            in: 'query',
            name: 'supportsTeamDrives',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ChannelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChannelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.appdata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.appdata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.file'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.file'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.photos.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.photos.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
  ],
})

export const getTeamdrivesRoute = createRoute({
  method: 'get',
  path: '/teamdrives',
  tags: ['teamdrives'],
  description: 'Deprecated: Use `drives.list` instead.',
  operationId: 'drive.teamdrives.list',
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
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of Team Drives to return.',
            in: 'query',
            name: 'pageSize',
            schema: { maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Page token for Team Drives.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string for searching Team Drives.',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
      useDomainAdminAccess: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Issue the request as a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned.',
            in: 'query',
            name: 'useDomainAdminAccess',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TeamDriveListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
  ],
})

export const postTeamdrivesRoute = createRoute({
  method: 'post',
  path: '/teamdrives',
  tags: ['teamdrives'],
  description: 'Deprecated: Use `drives.create` instead.',
  operationId: 'drive.teamdrives.create',
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
      requestId: z
        .string()
        .openapi({
          param: {
            description:
              "Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.",
            in: 'query',
            name: 'requestId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TeamDriveSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TeamDriveSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
  ],
})

export const getTeamdrivesTeamDriveIdRoute = createRoute({
  method: 'get',
  path: '/teamdrives/{teamDriveId}',
  tags: ['teamdrives'],
  description: 'Deprecated: Use `drives.get` instead.',
  operationId: 'drive.teamdrives.get',
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
      useDomainAdminAccess: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.',
            in: 'query',
            name: 'useDomainAdminAccess',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      teamDriveId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Team Drive',
            in: 'path',
            name: 'teamDriveId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TeamDriveSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'],
    },
  ],
})

export const deleteTeamdrivesTeamDriveIdRoute = createRoute({
  method: 'delete',
  path: '/teamdrives/{teamDriveId}',
  tags: ['teamdrives'],
  description: 'Deprecated: Use `drives.delete` instead.',
  operationId: 'drive.teamdrives.delete',
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
      teamDriveId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Team Drive',
            in: 'path',
            name: 'teamDriveId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
  ],
})

export const patchTeamdrivesTeamDriveIdRoute = createRoute({
  method: 'patch',
  path: '/teamdrives/{teamDriveId}',
  tags: ['teamdrives'],
  description: 'Deprecated: Use `drives.update` instead.',
  operationId: 'drive.teamdrives.update',
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
      useDomainAdminAccess: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.',
            in: 'query',
            name: 'useDomainAdminAccess',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      teamDriveId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Team Drive',
            in: 'path',
            name: 'teamDriveId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TeamDriveSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TeamDriveSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
  ],
})
