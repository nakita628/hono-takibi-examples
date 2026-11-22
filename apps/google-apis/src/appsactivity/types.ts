type Parent = { id?: string | undefined; isRoot?: boolean | undefined; title?: string | undefined }
type Move = { addedParents?: Parent[] | undefined; removedParents?: Parent[] | undefined }
type Photo = { url?: string | undefined }
type User = {
  isDeleted?: boolean | undefined
  isMe?: boolean | undefined
  name?: string | undefined
  permissionId?: string | undefined
  photo?: Photo | undefined
}
type Permission = {
  name?: string | undefined
  permissionId?: string | undefined
  role?:
    | 'commenter'
    | 'fileOrganizer'
    | 'owner'
    | 'publishedReader'
    | 'reader'
    | 'writer'
    | undefined
  type?: 'anyone' | 'domain' | 'group' | 'user' | undefined
  user?: User | undefined
  withLink?: boolean | undefined
}
type PermissionChange = {
  addedPermissions?: Permission[] | undefined
  removedPermissions?: Permission[] | undefined
}
type Rename = { newTitle?: string | undefined; oldTitle?: string | undefined }
type Target = { id?: string | undefined; mimeType?: string | undefined; name?: string | undefined }
type Event = {
  additionalEventTypes?:
    | (
        | 'comment'
        | 'create'
        | 'edit'
        | 'emptyTrash'
        | 'move'
        | 'permissionChange'
        | 'rename'
        | 'trash'
        | 'unknown'
        | 'untrash'
        | 'upload'
      )[]
    | undefined
  eventTimeMillis?: string | undefined
  fromUserDeletion?: boolean | undefined
  move?: Move | undefined
  permissionChanges?: PermissionChange[] | undefined
  primaryEventType?:
    | 'comment'
    | 'create'
    | 'edit'
    | 'emptyTrash'
    | 'move'
    | 'permissionChange'
    | 'rename'
    | 'trash'
    | 'unknown'
    | 'untrash'
    | 'upload'
    | undefined
  rename?: Rename | undefined
  target?: Target | undefined
  user?: User | undefined
}
type Activity = { combinedEvent?: Event | undefined; singleEvents?: Event[] | undefined }
type ListActivitiesResponse = {
  activities?: Activity[] | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/activities': {
      $get: {
        input: {
          query: {
            'drive.ancestorId'?: string | undefined
            'drive.fileId'?: string | undefined
            groupingStrategy?: 'driveUi' | 'none' | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            source?: string | undefined
            userId?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: ListActivitiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
