type Legacy = { [x: string]: unknown }
type NoConsolidation = { [x: string]: unknown }
type ConsolidationStrategy = { legacy?: Legacy | undefined; none?: NoConsolidation | undefined }
type QueryDriveActivityRequest = {
  ancestorName?: string | undefined
  consolidationStrategy?: ConsolidationStrategy | undefined
  filter?: string | undefined
  itemName?: string | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
}
type Administrator = { [x: string]: unknown }
type AnonymousUser = { [x: string]: unknown }
type DeletedUser = { [x: string]: unknown }
type KnownUser = { isCurrentUser?: boolean | undefined; personName?: string | undefined }
type UnknownUser = { [x: string]: unknown }
type User = {
  deletedUser?: DeletedUser | undefined
  knownUser?: KnownUser | undefined
  unknownUser?: UnknownUser | undefined
}
type Impersonation = { impersonatedUser?: User | undefined }
type SystemEvent = { type?: 'TYPE_UNSPECIFIED' | 'USER_DELETION' | 'TRASH_AUTO_PURGE' | undefined }
type Actor = {
  administrator?: Administrator | undefined
  anonymous?: AnonymousUser | undefined
  impersonation?: Impersonation | undefined
  system?: SystemEvent | undefined
  user?: User | undefined
}
type Date = { value?: string | undefined }
type Integer = { value?: string | undefined }
type Selection = { displayName?: string | undefined; value?: string | undefined }
type SelectionList = { values?: Selection[] | undefined }
type Text = { value?: string | undefined }
type TextList = { values?: Text[] | undefined }
type SingleUser = { value?: string | undefined }
type UserList = { values?: SingleUser[] | undefined }
type FieldValue = {
  date?: Date | undefined
  integer?: Integer | undefined
  selection?: Selection | undefined
  selectionList?: SelectionList | undefined
  text?: Text | undefined
  textList?: TextList | undefined
  user?: SingleUser | undefined
  userList?: UserList | undefined
}
type FieldValueChange = {
  displayName?: string | undefined
  fieldId?: string | undefined
  newValue?: FieldValue | undefined
  oldValue?: FieldValue | undefined
}
type AppliedLabelChangeDetail = {
  fieldChanges?: FieldValueChange[] | undefined
  label?: string | undefined
  title?: string | undefined
  types?:
    | (
        | 'TYPE_UNSPECIFIED'
        | 'LABEL_ADDED'
        | 'LABEL_REMOVED'
        | 'LABEL_FIELD_VALUE_CHANGED'
        | 'LABEL_APPLIED_BY_ITEM_CREATE'
      )[]
    | undefined
}
type AppliedLabelChange = { changes?: AppliedLabelChangeDetail[] | undefined }
type Assignment = {
  assignedUser?: User | undefined
  subtype?:
    | 'SUBTYPE_UNSPECIFIED'
    | 'ADDED'
    | 'DELETED'
    | 'REPLY_ADDED'
    | 'REPLY_DELETED'
    | 'RESOLVED'
    | 'REOPENED'
    | 'REASSIGNED'
    | undefined
}
type Post = {
  subtype?:
    | 'SUBTYPE_UNSPECIFIED'
    | 'ADDED'
    | 'DELETED'
    | 'REPLY_ADDED'
    | 'REPLY_DELETED'
    | 'RESOLVED'
    | 'REOPENED'
    | undefined
}
type Suggestion = {
  subtype?:
    | 'SUBTYPE_UNSPECIFIED'
    | 'ADDED'
    | 'DELETED'
    | 'REPLY_ADDED'
    | 'REPLY_DELETED'
    | 'ACCEPTED'
    | 'REJECTED'
    | 'ACCEPT_DELETED'
    | 'REJECT_DELETED'
    | undefined
}
type Comment = {
  assignment?: Assignment | undefined
  mentionedUsers?: User[] | undefined
  post?: Post | undefined
  suggestion?: Suggestion | undefined
}
type DriveReference = { name?: string | undefined; title?: string | undefined }
type DriveFile = { [x: string]: unknown }
type DriveFolder = {
  type?: 'TYPE_UNSPECIFIED' | 'MY_DRIVE_ROOT' | 'SHARED_DRIVE_ROOT' | 'STANDARD_FOLDER' | undefined
}
type File2 = { [x: string]: unknown }
type Folder = {
  type?: 'TYPE_UNSPECIFIED' | 'MY_DRIVE_ROOT' | 'TEAM_DRIVE_ROOT' | 'STANDARD_FOLDER' | undefined
}
type DriveItemReference = {
  driveFile?: DriveFile | undefined
  driveFolder?: DriveFolder | undefined
  file?: File2 | undefined
  folder?: Folder | undefined
  name?: string | undefined
  title?: string | undefined
}
type TeamDriveReference = { name?: string | undefined; title?: string | undefined }
type TargetReference = {
  drive?: DriveReference | undefined
  driveItem?: DriveItemReference | undefined
  teamDrive?: TeamDriveReference | undefined
}
type Copy = { originalObject?: TargetReference | undefined }
type New = { [x: string]: unknown }
type Upload = { [x: string]: unknown }
type Create = { copy?: Copy | undefined; new?: New | undefined; upload?: Upload | undefined }
type Delete = { type?: 'TYPE_UNSPECIFIED' | 'TRASH' | 'PERMANENT_DELETE' | undefined }
type DataLeakPreventionChange = { type?: 'TYPE_UNSPECIFIED' | 'FLAGGED' | 'CLEARED' | undefined }
type Edit = { [x: string]: unknown }
type Move = {
  addedParents?: TargetReference[] | undefined
  removedParents?: TargetReference[] | undefined
}
type Anyone = { [x: string]: unknown }
type Domain = { legacyId?: string | undefined; name?: string | undefined }
type Group = { email?: string | undefined; title?: string | undefined }
type Permission = {
  allowDiscovery?: boolean | undefined
  anyone?: Anyone | undefined
  domain?: Domain | undefined
  group?: Group | undefined
  role?:
    | 'ROLE_UNSPECIFIED'
    | 'OWNER'
    | 'ORGANIZER'
    | 'FILE_ORGANIZER'
    | 'EDITOR'
    | 'COMMENTER'
    | 'VIEWER'
    | 'PUBLISHED_VIEWER'
    | undefined
  user?: User | undefined
}
type PermissionChange = {
  addedPermissions?: Permission[] | undefined
  removedPermissions?: Permission[] | undefined
}
type ApplicationReference = { type?: 'UNSPECIFIED_REFERENCE_TYPE' | 'LINK' | 'DISCUSS' | undefined }
type Rename = { newTitle?: string | undefined; oldTitle?: string | undefined }
type Restore = { type?: 'TYPE_UNSPECIFIED' | 'UNTRASH' | undefined }
type RestrictionChange = {
  feature?:
    | 'FEATURE_UNSPECIFIED'
    | 'SHARING_OUTSIDE_DOMAIN'
    | 'DIRECT_SHARING'
    | 'ITEM_DUPLICATION'
    | 'DRIVE_FILE_STREAM'
    | 'FILE_ORGANIZER_CAN_SHARE_FOLDERS'
    | undefined
  newRestriction?: 'RESTRICTION_UNSPECIFIED' | 'UNRESTRICTED' | 'FULLY_RESTRICTED' | undefined
}
type SettingsChange = { restrictionChanges?: RestrictionChange[] | undefined }
type ActionDetail = {
  appliedLabelChange?: AppliedLabelChange | undefined
  comment?: Comment | undefined
  create?: Create | undefined
  delete?: Delete | undefined
  dlpChange?: DataLeakPreventionChange | undefined
  edit?: Edit | undefined
  move?: Move | undefined
  permissionChange?: PermissionChange | undefined
  reference?: ApplicationReference | undefined
  rename?: Rename | undefined
  restore?: Restore | undefined
  settingsChange?: SettingsChange | undefined
}
type Owner = {
  domain?: Domain | undefined
  drive?: DriveReference | undefined
  teamDrive?: TeamDriveReference | undefined
  user?: User | undefined
}
type DriveItem = {
  driveFile?: DriveFile | undefined
  driveFolder?: DriveFolder | undefined
  file?: File2 | undefined
  folder?: Folder | undefined
  mimeType?: string | undefined
  name?: string | undefined
  owner?: Owner | undefined
  title?: string | undefined
}
type Drive = { name?: string | undefined; root?: DriveItem | undefined; title?: string | undefined }
type FileComment = {
  legacyCommentId?: string | undefined
  legacyDiscussionId?: string | undefined
  linkToDiscussion?: string | undefined
  parent?: DriveItem | undefined
}
type TeamDrive = {
  name?: string | undefined
  root?: DriveItem | undefined
  title?: string | undefined
}
type Target = {
  drive?: Drive | undefined
  driveItem?: DriveItem | undefined
  fileComment?: FileComment | undefined
  teamDrive?: TeamDrive | undefined
}
type TimeRange = { endTime?: string | undefined; startTime?: string | undefined }
type Action = {
  actor?: Actor | undefined
  detail?: ActionDetail | undefined
  target?: Target | undefined
  timeRange?: TimeRange | undefined
  timestamp?: string | undefined
}
type DriveActivity = {
  actions?: Action[] | undefined
  actors?: Actor[] | undefined
  primaryActionDetail?: ActionDetail | undefined
  targets?: Target[] | undefined
  timeRange?: TimeRange | undefined
  timestamp?: string | undefined
}
type QueryDriveActivityResponse = {
  activities?: DriveActivity[] | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/activity:query': {
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
        } & { json: QueryDriveActivityRequest }
        output: QueryDriveActivityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
