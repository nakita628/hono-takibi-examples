type User = {
  displayName?: string | undefined
  emailAddress?: string | undefined
  kind?: string | undefined
  me?: boolean | undefined
  permissionId?: string | undefined
  photoLink?: string | undefined
}
type About = {
  appInstalled?: boolean | undefined
  canCreateDrives?: boolean | undefined
  canCreateTeamDrives?: boolean | undefined
  driveThemes?:
    | {
        backgroundImageLink?: string | undefined
        colorRgb?: string | undefined
        id?: string | undefined
      }[]
    | undefined
  exportFormats?: { [x: string]: string[] } | undefined
  folderColorPalette?: string[] | undefined
  importFormats?: { [x: string]: string[] } | undefined
  kind?: string | undefined
  maxImportSizes?: { [x: string]: string } | undefined
  maxUploadSize?: string | undefined
  storageQuota?:
    | {
        limit?: string | undefined
        usage?: string | undefined
        usageInDrive?: string | undefined
        usageInDriveTrash?: string | undefined
      }
    | undefined
  teamDriveThemes?:
    | {
        backgroundImageLink?: string | undefined
        colorRgb?: string | undefined
        id?: string | undefined
      }[]
    | undefined
  user?: User | undefined
}
type AppIcons = {
  category?: string | undefined
  iconUrl?: string | undefined
  size?: number | undefined
}
type App = {
  authorized?: boolean | undefined
  createInFolderTemplate?: string | undefined
  createUrl?: string | undefined
  hasDriveWideScope?: boolean | undefined
  icons?: AppIcons[] | undefined
  id?: string | undefined
  installed?: boolean | undefined
  kind?: string | undefined
  longDescription?: string | undefined
  name?: string | undefined
  objectType?: string | undefined
  openUrlTemplate?: string | undefined
  primaryFileExtensions?: string[] | undefined
  primaryMimeTypes?: string[] | undefined
  productId?: string | undefined
  productUrl?: string | undefined
  secondaryFileExtensions?: string[] | undefined
  secondaryMimeTypes?: string[] | undefined
  shortDescription?: string | undefined
  supportsCreate?: boolean | undefined
  supportsImport?: boolean | undefined
  supportsMultiOpen?: boolean | undefined
  supportsOfflineCreate?: boolean | undefined
  useByDefault?: boolean | undefined
}
type AppList = {
  defaultAppIds?: string[] | undefined
  items?: App[] | undefined
  kind?: string | undefined
  selfLink?: string | undefined
}
type Drive = {
  backgroundImageFile?:
    | {
        id?: string | undefined
        width?: number | undefined
        xCoordinate?: number | undefined
        yCoordinate?: number | undefined
      }
    | undefined
  backgroundImageLink?: string | undefined
  capabilities?:
    | {
        canAddChildren?: boolean | undefined
        canChangeCopyRequiresWriterPermissionRestriction?: boolean | undefined
        canChangeDomainUsersOnlyRestriction?: boolean | undefined
        canChangeDriveBackground?: boolean | undefined
        canChangeDriveMembersOnlyRestriction?: boolean | undefined
        canChangeSharingFoldersRequiresOrganizerPermissionRestriction?: boolean | undefined
        canComment?: boolean | undefined
        canCopy?: boolean | undefined
        canDeleteChildren?: boolean | undefined
        canDeleteDrive?: boolean | undefined
        canDownload?: boolean | undefined
        canEdit?: boolean | undefined
        canListChildren?: boolean | undefined
        canManageMembers?: boolean | undefined
        canReadRevisions?: boolean | undefined
        canRename?: boolean | undefined
        canRenameDrive?: boolean | undefined
        canResetDriveRestrictions?: boolean | undefined
        canShare?: boolean | undefined
        canTrashChildren?: boolean | undefined
      }
    | undefined
  colorRgb?: string | undefined
  createdTime?: string | undefined
  hidden?: boolean | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  orgUnitId?: string | undefined
  restrictions?:
    | {
        adminManagedRestrictions?: boolean | undefined
        copyRequiresWriterPermission?: boolean | undefined
        domainUsersOnly?: boolean | undefined
        driveMembersOnly?: boolean | undefined
        sharingFoldersRequiresOrganizerPermission?: boolean | undefined
      }
    | undefined
  themeId?: string | undefined
}
type ContentRestriction = {
  ownerRestricted?: boolean | undefined
  readOnly?: boolean | undefined
  reason?: string | undefined
  restrictingUser?: User | undefined
  restrictionTime?: string | undefined
  systemRestricted?: boolean | undefined
  type?: string | undefined
}
type LabelField = {
  dateString?: string[] | undefined
  id?: string | undefined
  integer?: string[] | undefined
  kind?: string | undefined
  selection?: string[] | undefined
  text?: string[] | undefined
  user?: User[] | undefined
  valueType?: string | undefined
}
type Label = {
  fields?: { [x: string]: LabelField } | undefined
  id?: string | undefined
  kind?: string | undefined
  revisionId?: string | undefined
}
type Permission = {
  allowFileDiscovery?: boolean | undefined
  deleted?: boolean | undefined
  displayName?: string | undefined
  domain?: string | undefined
  emailAddress?: string | undefined
  expirationTime?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  pendingOwner?: boolean | undefined
  permissionDetails?:
    | {
        inherited?: boolean | undefined
        inheritedFrom?: string | undefined
        permissionType?: string | undefined
        role?: string | undefined
      }[]
    | undefined
  photoLink?: string | undefined
  role?: string | undefined
  teamDrivePermissionDetails?:
    | {
        inherited?: boolean | undefined
        inheritedFrom?: string | undefined
        role?: string | undefined
        teamDrivePermissionType?: string | undefined
      }[]
    | undefined
  type?: string | undefined
  view?: string | undefined
}
type File2 = {
  appProperties?: { [x: string]: string } | undefined
  capabilities?:
    | {
        canAcceptOwnership?: boolean | undefined
        canAddChildren?: boolean | undefined
        canAddFolderFromAnotherDrive?: boolean | undefined
        canAddMyDriveParent?: boolean | undefined
        canChangeCopyRequiresWriterPermission?: boolean | undefined
        canChangeSecurityUpdateEnabled?: boolean | undefined
        canChangeViewersCanCopyContent?: boolean | undefined
        canComment?: boolean | undefined
        canCopy?: boolean | undefined
        canDelete?: boolean | undefined
        canDeleteChildren?: boolean | undefined
        canDownload?: boolean | undefined
        canEdit?: boolean | undefined
        canListChildren?: boolean | undefined
        canModifyContent?: boolean | undefined
        canModifyContentRestriction?: boolean | undefined
        canModifyEditorContentRestriction?: boolean | undefined
        canModifyLabels?: boolean | undefined
        canModifyOwnerContentRestriction?: boolean | undefined
        canMoveChildrenOutOfDrive?: boolean | undefined
        canMoveChildrenOutOfTeamDrive?: boolean | undefined
        canMoveChildrenWithinDrive?: boolean | undefined
        canMoveChildrenWithinTeamDrive?: boolean | undefined
        canMoveItemIntoTeamDrive?: boolean | undefined
        canMoveItemOutOfDrive?: boolean | undefined
        canMoveItemOutOfTeamDrive?: boolean | undefined
        canMoveItemWithinDrive?: boolean | undefined
        canMoveItemWithinTeamDrive?: boolean | undefined
        canMoveTeamDriveItem?: boolean | undefined
        canReadDrive?: boolean | undefined
        canReadLabels?: boolean | undefined
        canReadRevisions?: boolean | undefined
        canReadTeamDrive?: boolean | undefined
        canRemoveChildren?: boolean | undefined
        canRemoveContentRestriction?: boolean | undefined
        canRemoveMyDriveParent?: boolean | undefined
        canRename?: boolean | undefined
        canShare?: boolean | undefined
        canTrash?: boolean | undefined
        canTrashChildren?: boolean | undefined
        canUntrash?: boolean | undefined
      }
    | undefined
  contentHints?:
    | {
        indexableText?: string | undefined
        thumbnail?: { image?: string | undefined; mimeType?: string | undefined } | undefined
      }
    | undefined
  contentRestrictions?: ContentRestriction[] | undefined
  copyRequiresWriterPermission?: boolean | undefined
  createdTime?: string | undefined
  description?: string | undefined
  driveId?: string | undefined
  explicitlyTrashed?: boolean | undefined
  exportLinks?: { [x: string]: string } | undefined
  fileExtension?: string | undefined
  folderColorRgb?: string | undefined
  fullFileExtension?: string | undefined
  hasAugmentedPermissions?: boolean | undefined
  hasThumbnail?: boolean | undefined
  headRevisionId?: string | undefined
  iconLink?: string | undefined
  id?: string | undefined
  imageMediaMetadata?:
    | {
        aperture?: number | undefined
        cameraMake?: string | undefined
        cameraModel?: string | undefined
        colorSpace?: string | undefined
        exposureBias?: number | undefined
        exposureMode?: string | undefined
        exposureTime?: number | undefined
        flashUsed?: boolean | undefined
        focalLength?: number | undefined
        height?: number | undefined
        isoSpeed?: number | undefined
        lens?: string | undefined
        location?:
          | {
              altitude?: number | undefined
              latitude?: number | undefined
              longitude?: number | undefined
            }
          | undefined
        maxApertureValue?: number | undefined
        meteringMode?: string | undefined
        rotation?: number | undefined
        sensor?: string | undefined
        subjectDistance?: number | undefined
        time?: string | undefined
        whiteBalance?: string | undefined
        width?: number | undefined
      }
    | undefined
  isAppAuthorized?: boolean | undefined
  kind?: string | undefined
  labelInfo?: { labels?: Label[] | undefined } | undefined
  lastModifyingUser?: User | undefined
  linkShareMetadata?:
    | { securityUpdateEligible?: boolean | undefined; securityUpdateEnabled?: boolean | undefined }
    | undefined
  md5Checksum?: string | undefined
  mimeType?: string | undefined
  modifiedByMe?: boolean | undefined
  modifiedByMeTime?: string | undefined
  modifiedTime?: string | undefined
  name?: string | undefined
  originalFilename?: string | undefined
  ownedByMe?: boolean | undefined
  owners?: User[] | undefined
  parents?: string[] | undefined
  permissionIds?: string[] | undefined
  permissions?: Permission[] | undefined
  properties?: { [x: string]: string } | undefined
  quotaBytesUsed?: string | undefined
  resourceKey?: string | undefined
  sha1Checksum?: string | undefined
  sha256Checksum?: string | undefined
  shared?: boolean | undefined
  sharedWithMeTime?: string | undefined
  sharingUser?: User | undefined
  shortcutDetails?:
    | {
        targetId?: string | undefined
        targetMimeType?: string | undefined
        targetResourceKey?: string | undefined
      }
    | undefined
  size?: string | undefined
  spaces?: string[] | undefined
  starred?: boolean | undefined
  teamDriveId?: string | undefined
  thumbnailLink?: string | undefined
  thumbnailVersion?: string | undefined
  trashed?: boolean | undefined
  trashedTime?: string | undefined
  trashingUser?: User | undefined
  version?: string | undefined
  videoMediaMetadata?:
    | {
        durationMillis?: string | undefined
        height?: number | undefined
        width?: number | undefined
      }
    | undefined
  viewedByMe?: boolean | undefined
  viewedByMeTime?: string | undefined
  viewersCanCopyContent?: boolean | undefined
  webContentLink?: string | undefined
  webViewLink?: string | undefined
  writersCanShare?: boolean | undefined
}
type TeamDrive = {
  backgroundImageFile?:
    | {
        id?: string | undefined
        width?: number | undefined
        xCoordinate?: number | undefined
        yCoordinate?: number | undefined
      }
    | undefined
  backgroundImageLink?: string | undefined
  capabilities?:
    | {
        canAddChildren?: boolean | undefined
        canChangeCopyRequiresWriterPermissionRestriction?: boolean | undefined
        canChangeDomainUsersOnlyRestriction?: boolean | undefined
        canChangeSharingFoldersRequiresOrganizerPermissionRestriction?: boolean | undefined
        canChangeTeamDriveBackground?: boolean | undefined
        canChangeTeamMembersOnlyRestriction?: boolean | undefined
        canComment?: boolean | undefined
        canCopy?: boolean | undefined
        canDeleteChildren?: boolean | undefined
        canDeleteTeamDrive?: boolean | undefined
        canDownload?: boolean | undefined
        canEdit?: boolean | undefined
        canListChildren?: boolean | undefined
        canManageMembers?: boolean | undefined
        canReadRevisions?: boolean | undefined
        canRemoveChildren?: boolean | undefined
        canRename?: boolean | undefined
        canRenameTeamDrive?: boolean | undefined
        canResetTeamDriveRestrictions?: boolean | undefined
        canShare?: boolean | undefined
        canTrashChildren?: boolean | undefined
      }
    | undefined
  colorRgb?: string | undefined
  createdTime?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  orgUnitId?: string | undefined
  restrictions?:
    | {
        adminManagedRestrictions?: boolean | undefined
        copyRequiresWriterPermission?: boolean | undefined
        domainUsersOnly?: boolean | undefined
        sharingFoldersRequiresOrganizerPermission?: boolean | undefined
        teamMembersOnly?: boolean | undefined
      }
    | undefined
  themeId?: string | undefined
}
type Change = {
  changeType?: string | undefined
  drive?: Drive | undefined
  driveId?: string | undefined
  file?: File2 | undefined
  fileId?: string | undefined
  kind?: string | undefined
  removed?: boolean | undefined
  teamDrive?: TeamDrive | undefined
  teamDriveId?: string | undefined
  time?: string | undefined
  type?: string | undefined
}
type ChangeList = {
  changes?: Change[] | undefined
  kind?: string | undefined
  newStartPageToken?: string | undefined
  nextPageToken?: string | undefined
}
type StartPageToken = { kind?: string | undefined; startPageToken?: string | undefined }
type Channel = {
  address?: string | undefined
  expiration?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  params?: { [x: string]: string } | undefined
  payload?: boolean | undefined
  resourceId?: string | undefined
  resourceUri?: string | undefined
  token?: string | undefined
  type?: string | undefined
}
type DriveList = {
  drives?: Drive[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type FileList = {
  files?: File2[] | undefined
  incompleteSearch?: boolean | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type GeneratedIds = {
  ids?: string[] | undefined
  kind?: string | undefined
  space?: string | undefined
}
type Reply = {
  action?: string | undefined
  author?: User | undefined
  content?: string | undefined
  createdTime?: string | undefined
  deleted?: boolean | undefined
  htmlContent?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  modifiedTime?: string | undefined
}
type Comment = {
  anchor?: string | undefined
  author?: User | undefined
  content?: string | undefined
  createdTime?: string | undefined
  deleted?: boolean | undefined
  htmlContent?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  modifiedTime?: string | undefined
  quotedFileContent?: { mimeType?: string | undefined; value?: string | undefined } | undefined
  replies?: Reply[] | undefined
  resolved?: boolean | undefined
}
type CommentList = {
  comments?: Comment[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type ReplyList = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  replies?: Reply[] | undefined
}
type LabelList = {
  kind?: string | undefined
  labels?: Label[] | undefined
  nextPageToken?: string | undefined
}
type LabelFieldModification = {
  fieldId?: string | undefined
  kind?: string | undefined
  setDateValues?: string[] | undefined
  setIntegerValues?: string[] | undefined
  setSelectionValues?: string[] | undefined
  setTextValues?: string[] | undefined
  setUserValues?: string[] | undefined
  unsetValues?: boolean | undefined
}
type LabelModification = {
  fieldModifications?: LabelFieldModification[] | undefined
  kind?: string | undefined
  labelId?: string | undefined
  removeLabel?: boolean | undefined
}
type ModifyLabelsRequest = {
  kind?: string | undefined
  labelModifications?: LabelModification[] | undefined
}
type ModifyLabelsResponse = { kind?: string | undefined; modifiedLabels?: Label[] | undefined }
type PermissionList = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  permissions?: Permission[] | undefined
}
type Revision = {
  exportLinks?: { [x: string]: string } | undefined
  id?: string | undefined
  keepForever?: boolean | undefined
  kind?: string | undefined
  lastModifyingUser?: User | undefined
  md5Checksum?: string | undefined
  mimeType?: string | undefined
  modifiedTime?: string | undefined
  originalFilename?: string | undefined
  publishAuto?: boolean | undefined
  published?: boolean | undefined
  publishedLink?: string | undefined
  publishedOutsideDomain?: boolean | undefined
  size?: string | undefined
}
type RevisionList = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  revisions?: Revision[] | undefined
}
type TeamDriveList = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  teamDrives?: TeamDrive[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/about': {
      $get: {
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
        }
        output: About
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps': {
      $get: {
        input: {
          query: {
            appFilterExtensions?: string | undefined
            appFilterMimeTypes?: string | undefined
            languageCode?: string | undefined
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
        output: AppList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apps/:appId': {
      $get: {
        input: { param: { appId: string } } & {
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
        output: App
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/changes': {
      $get: {
        input: {
          query: {
            pageToken: string
            driveId?: string | undefined
            includeCorpusRemovals?: boolean | undefined
            includeItemsFromAllDrives?: boolean | undefined
            includeLabels?: string | undefined
            includePermissionsForView?: string | undefined
            includeRemoved?: boolean | undefined
            includeTeamDriveItems?: boolean | undefined
            pageSize?: number | undefined
            restrictToMyDrive?: boolean | undefined
            spaces?: string | undefined
            supportsAllDrives?: boolean | undefined
            supportsTeamDrives?: boolean | undefined
            teamDriveId?: string | undefined
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
        output: ChangeList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/changes/startPageToken': {
      $get: {
        input: {
          query: {
            driveId?: string | undefined
            supportsAllDrives?: boolean | undefined
            supportsTeamDrives?: boolean | undefined
            teamDriveId?: string | undefined
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
        output: StartPageToken
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/changes/watch': {
      $post: {
        input: {
          query: {
            pageToken: string
            driveId?: string | undefined
            includeCorpusRemovals?: boolean | undefined
            includeItemsFromAllDrives?: boolean | undefined
            includeLabels?: string | undefined
            includePermissionsForView?: string | undefined
            includeRemoved?: boolean | undefined
            includeTeamDriveItems?: boolean | undefined
            pageSize?: number | undefined
            restrictToMyDrive?: boolean | undefined
            spaces?: string | undefined
            supportsAllDrives?: boolean | undefined
            supportsTeamDrives?: boolean | undefined
            teamDriveId?: string | undefined
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
        } & { json: Channel }
        output: Channel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/stop': {
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
        } & { json: Channel }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/drives': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            q?: string | undefined
            useDomainAdminAccess?: boolean | undefined
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
        output: DriveList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            requestId: string
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
        } & { json: Drive }
        output: Drive
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/drives/:driveId': {
      $delete: {
        input: { param: { driveId: string } } & {
          query: {
            allowItemDeletion?: boolean | undefined
            useDomainAdminAccess?: boolean | undefined
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { driveId: string } } & {
          query: {
            useDomainAdminAccess?: boolean | undefined
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
        output: Drive
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { driveId: string } } & {
          query: {
            useDomainAdminAccess?: boolean | undefined
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
        } & { json: Drive }
        output: Drive
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/drives/:driveId/hide': {
      $post: {
        input: { param: { driveId: string } } & {
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
        output: Drive
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/drives/:driveId/unhide': {
      $post: {
        input: { param: { driveId: string } } & {
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
        output: Drive
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/files': {
      $get: {
        input: {
          query: {
            corpora?: string | undefined
            corpus?: 'domain' | 'user' | undefined
            driveId?: string | undefined
            includeItemsFromAllDrives?: boolean | undefined
            includeLabels?: string | undefined
            includePermissionsForView?: string | undefined
            includeTeamDriveItems?: boolean | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            q?: string | undefined
            spaces?: string | undefined
            supportsAllDrives?: boolean | undefined
            supportsTeamDrives?: boolean | undefined
            teamDriveId?: string | undefined
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
        output: FileList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            enforceSingleParent?: boolean | undefined
            ignoreDefaultVisibility?: boolean | undefined
            includeLabels?: string | undefined
            includePermissionsForView?: string | undefined
            keepRevisionForever?: boolean | undefined
            ocrLanguage?: string | undefined
            supportsAllDrives?: boolean | undefined
            supportsTeamDrives?: boolean | undefined
            useContentAsIndexableText?: boolean | undefined
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
        } & { json: File2 }
        output: File2
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/files/generateIds': {
      $get: {
        input: {
          query: {
            count?: number | undefined
            space?: string | undefined
            type?: string | undefined
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
        output: GeneratedIds
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/files/trash': {
      $delete: {
        input: {
          query: {
            driveId?: string | undefined
            enforceSingleParent?: boolean | undefined
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
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/files/:fileId': {
      $delete: {
        input: { param: { fileId: string } } & {
          query: {
            enforceSingleParent?: boolean | undefined
            supportsAllDrives?: boolean | undefined
            supportsTeamDrives?: boolean | undefined
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { fileId: string } } & {
          query: {
            acknowledgeAbuse?: boolean | undefined
            includeLabels?: string | undefined
            includePermissionsForView?: string | undefined
            supportsAllDrives?: boolean | undefined
            supportsTeamDrives?: boolean | undefined
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
        output: File2
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { fileId: string } } & {
          query: {
            addParents?: string | undefined
            enforceSingleParent?: boolean | undefined
            includeLabels?: string | undefined
            includePermissionsForView?: string | undefined
            keepRevisionForever?: boolean | undefined
            ocrLanguage?: string | undefined
            removeParents?: string | undefined
            supportsAllDrives?: boolean | undefined
            supportsTeamDrives?: boolean | undefined
            useContentAsIndexableText?: boolean | undefined
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
        } & { json: File2 }
        output: File2
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/files/:fileId/comments': {
      $get: {
        input: { param: { fileId: string } } & {
          query: {
            includeDeleted?: boolean | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            startModifiedTime?: string | undefined
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
        output: CommentList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { fileId: string } } & {
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
        } & { json: Comment }
        output: Comment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/files/:fileId/comments/:commentId': {
      $delete: {
        input: { param: { fileId: string; commentId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { fileId: string; commentId: string } } & {
          query: {
            includeDeleted?: boolean | undefined
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
        output: Comment
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { fileId: string; commentId: string } } & {
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
        } & { json: Comment }
        output: Comment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/files/:fileId/comments/:commentId/replies': {
      $get: {
        input: { param: { fileId: string; commentId: string } } & {
          query: {
            includeDeleted?: boolean | undefined
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
        output: ReplyList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { fileId: string; commentId: string } } & {
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
        } & { json: Reply }
        output: Reply
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/files/:fileId/comments/:commentId/replies/:replyId': {
      $delete: {
        input: { param: { fileId: string; commentId: string; replyId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { fileId: string; commentId: string; replyId: string } } & {
          query: {
            includeDeleted?: boolean | undefined
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
        output: Reply
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { fileId: string; commentId: string; replyId: string } } & {
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
        } & { json: Reply }
        output: Reply
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/files/:fileId/copy': {
      $post: {
        input: { param: { fileId: string } } & {
          query: {
            enforceSingleParent?: boolean | undefined
            ignoreDefaultVisibility?: boolean | undefined
            includeLabels?: string | undefined
            includePermissionsForView?: string | undefined
            keepRevisionForever?: boolean | undefined
            ocrLanguage?: string | undefined
            supportsAllDrives?: boolean | undefined
            supportsTeamDrives?: boolean | undefined
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
        } & { json: File2 }
        output: File2
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/files/:fileId/export': {
      $get: {
        input: { param: { fileId: string } } & {
          query: {
            mimeType: string
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
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/files/:fileId/listLabels': {
      $get: {
        input: { param: { fileId: string } } & {
          query: {
            maxResults?: number | undefined
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
        output: LabelList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/files/:fileId/modifyLabels': {
      $post: {
        input: { param: { fileId: string } } & {
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
        } & { json: ModifyLabelsRequest }
        output: ModifyLabelsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/files/:fileId/permissions': {
      $get: {
        input: { param: { fileId: string } } & {
          query: {
            includePermissionsForView?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            supportsAllDrives?: boolean | undefined
            supportsTeamDrives?: boolean | undefined
            useDomainAdminAccess?: boolean | undefined
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
        output: PermissionList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { fileId: string } } & {
          query: {
            emailMessage?: string | undefined
            enforceSingleParent?: boolean | undefined
            moveToNewOwnersRoot?: boolean | undefined
            sendNotificationEmail?: boolean | undefined
            supportsAllDrives?: boolean | undefined
            supportsTeamDrives?: boolean | undefined
            transferOwnership?: boolean | undefined
            useDomainAdminAccess?: boolean | undefined
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
        } & { json: Permission }
        output: Permission
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/files/:fileId/permissions/:permissionId': {
      $delete: {
        input: { param: { fileId: string; permissionId: string } } & {
          query: {
            supportsAllDrives?: boolean | undefined
            supportsTeamDrives?: boolean | undefined
            useDomainAdminAccess?: boolean | undefined
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { fileId: string; permissionId: string } } & {
          query: {
            supportsAllDrives?: boolean | undefined
            supportsTeamDrives?: boolean | undefined
            useDomainAdminAccess?: boolean | undefined
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
        output: Permission
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { fileId: string; permissionId: string } } & {
          query: {
            removeExpiration?: boolean | undefined
            supportsAllDrives?: boolean | undefined
            supportsTeamDrives?: boolean | undefined
            transferOwnership?: boolean | undefined
            useDomainAdminAccess?: boolean | undefined
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
        } & { json: Permission }
        output: Permission
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/files/:fileId/revisions': {
      $get: {
        input: { param: { fileId: string } } & {
          query: {
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
        output: RevisionList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/files/:fileId/revisions/:revisionId': {
      $delete: {
        input: { param: { fileId: string; revisionId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { fileId: string; revisionId: string } } & {
          query: {
            acknowledgeAbuse?: boolean | undefined
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
        output: Revision
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { fileId: string; revisionId: string } } & {
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
        } & { json: Revision }
        output: Revision
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/files/:fileId/watch': {
      $post: {
        input: { param: { fileId: string } } & {
          query: {
            acknowledgeAbuse?: boolean | undefined
            includeLabels?: string | undefined
            includePermissionsForView?: string | undefined
            supportsAllDrives?: boolean | undefined
            supportsTeamDrives?: boolean | undefined
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
        } & { json: Channel }
        output: Channel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/teamdrives': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            q?: string | undefined
            useDomainAdminAccess?: boolean | undefined
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
        output: TeamDriveList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            requestId: string
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
        } & { json: TeamDrive }
        output: TeamDrive
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/teamdrives/:teamDriveId': {
      $delete: {
        input: { param: { teamDriveId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { teamDriveId: string } } & {
          query: {
            useDomainAdminAccess?: boolean | undefined
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
        output: TeamDrive
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { teamDriveId: string } } & {
          query: {
            useDomainAdminAccess?: boolean | undefined
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
        } & { json: TeamDrive }
        output: TeamDrive
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
