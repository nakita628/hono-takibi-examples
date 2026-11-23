import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDrivesDriveIdRoute,
  deleteFilesFileIdCommentsCommentIdRepliesReplyIdRoute,
  deleteFilesFileIdCommentsCommentIdRoute,
  deleteFilesFileIdPermissionsPermissionIdRoute,
  deleteFilesFileIdRevisionsRevisionIdRoute,
  deleteFilesFileIdRoute,
  deleteFilesTrashRoute,
  deleteTeamdrivesTeamDriveIdRoute,
  getAboutRoute,
  getAppsAppIdRoute,
  getAppsRoute,
  getChangesRoute,
  getChangesStartPageTokenRoute,
  getDrivesDriveIdRoute,
  getDrivesRoute,
  getFilesFileIdCommentsCommentIdRepliesReplyIdRoute,
  getFilesFileIdCommentsCommentIdRepliesRoute,
  getFilesFileIdCommentsCommentIdRoute,
  getFilesFileIdCommentsRoute,
  getFilesFileIdExportRoute,
  getFilesFileIdListLabelsRoute,
  getFilesFileIdPermissionsPermissionIdRoute,
  getFilesFileIdPermissionsRoute,
  getFilesFileIdRevisionsRevisionIdRoute,
  getFilesFileIdRevisionsRoute,
  getFilesFileIdRoute,
  getFilesGenerateIdsRoute,
  getFilesRoute,
  getTeamdrivesRoute,
  getTeamdrivesTeamDriveIdRoute,
  patchDrivesDriveIdRoute,
  patchFilesFileIdCommentsCommentIdRepliesReplyIdRoute,
  patchFilesFileIdCommentsCommentIdRoute,
  patchFilesFileIdPermissionsPermissionIdRoute,
  patchFilesFileIdRevisionsRevisionIdRoute,
  patchFilesFileIdRoute,
  patchTeamdrivesTeamDriveIdRoute,
  postChangesWatchRoute,
  postChannelsStopRoute,
  postDrivesDriveIdHideRoute,
  postDrivesDriveIdUnhideRoute,
  postDrivesRoute,
  postFilesFileIdCommentsCommentIdRepliesRoute,
  postFilesFileIdCommentsRoute,
  postFilesFileIdCopyRoute,
  postFilesFileIdModifyLabelsRoute,
  postFilesFileIdPermissionsRoute,
  postFilesFileIdWatchRoute,
  postFilesRoute,
  postTeamdrivesRoute,
} from './routes'
import {
  deleteDrivesDriveIdRouteHandler,
  deleteFilesFileIdCommentsCommentIdRepliesReplyIdRouteHandler,
  deleteFilesFileIdCommentsCommentIdRouteHandler,
  deleteFilesFileIdPermissionsPermissionIdRouteHandler,
  deleteFilesFileIdRevisionsRevisionIdRouteHandler,
  deleteFilesFileIdRouteHandler,
  deleteFilesTrashRouteHandler,
  deleteTeamdrivesTeamDriveIdRouteHandler,
  getAboutRouteHandler,
  getAppsAppIdRouteHandler,
  getAppsRouteHandler,
  getChangesRouteHandler,
  getChangesStartPageTokenRouteHandler,
  getDrivesDriveIdRouteHandler,
  getDrivesRouteHandler,
  getFilesFileIdCommentsCommentIdRepliesReplyIdRouteHandler,
  getFilesFileIdCommentsCommentIdRepliesRouteHandler,
  getFilesFileIdCommentsCommentIdRouteHandler,
  getFilesFileIdCommentsRouteHandler,
  getFilesFileIdExportRouteHandler,
  getFilesFileIdListLabelsRouteHandler,
  getFilesFileIdPermissionsPermissionIdRouteHandler,
  getFilesFileIdPermissionsRouteHandler,
  getFilesFileIdRevisionsRevisionIdRouteHandler,
  getFilesFileIdRevisionsRouteHandler,
  getFilesFileIdRouteHandler,
  getFilesGenerateIdsRouteHandler,
  getFilesRouteHandler,
  getTeamdrivesRouteHandler,
  getTeamdrivesTeamDriveIdRouteHandler,
  patchDrivesDriveIdRouteHandler,
  patchFilesFileIdCommentsCommentIdRepliesReplyIdRouteHandler,
  patchFilesFileIdCommentsCommentIdRouteHandler,
  patchFilesFileIdPermissionsPermissionIdRouteHandler,
  patchFilesFileIdRevisionsRevisionIdRouteHandler,
  patchFilesFileIdRouteHandler,
  patchTeamdrivesTeamDriveIdRouteHandler,
  postChangesWatchRouteHandler,
  postChannelsStopRouteHandler,
  postDrivesDriveIdHideRouteHandler,
  postDrivesDriveIdUnhideRouteHandler,
  postDrivesRouteHandler,
  postFilesFileIdCommentsCommentIdRepliesRouteHandler,
  postFilesFileIdCommentsRouteHandler,
  postFilesFileIdCopyRouteHandler,
  postFilesFileIdModifyLabelsRouteHandler,
  postFilesFileIdPermissionsRouteHandler,
  postFilesFileIdWatchRouteHandler,
  postFilesRouteHandler,
  postTeamdrivesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAboutRoute, getAboutRouteHandler)
  .openapi(getAppsRoute, getAppsRouteHandler)
  .openapi(getAppsAppIdRoute, getAppsAppIdRouteHandler)
  .openapi(getChangesRoute, getChangesRouteHandler)
  .openapi(getChangesStartPageTokenRoute, getChangesStartPageTokenRouteHandler)
  .openapi(postChangesWatchRoute, postChangesWatchRouteHandler)
  .openapi(postChannelsStopRoute, postChannelsStopRouteHandler)
  .openapi(getDrivesRoute, getDrivesRouteHandler)
  .openapi(postDrivesRoute, postDrivesRouteHandler)
  .openapi(deleteDrivesDriveIdRoute, deleteDrivesDriveIdRouteHandler)
  .openapi(getDrivesDriveIdRoute, getDrivesDriveIdRouteHandler)
  .openapi(patchDrivesDriveIdRoute, patchDrivesDriveIdRouteHandler)
  .openapi(postDrivesDriveIdHideRoute, postDrivesDriveIdHideRouteHandler)
  .openapi(postDrivesDriveIdUnhideRoute, postDrivesDriveIdUnhideRouteHandler)
  .openapi(getFilesRoute, getFilesRouteHandler)
  .openapi(postFilesRoute, postFilesRouteHandler)
  .openapi(getFilesGenerateIdsRoute, getFilesGenerateIdsRouteHandler)
  .openapi(deleteFilesTrashRoute, deleteFilesTrashRouteHandler)
  .openapi(deleteFilesFileIdRoute, deleteFilesFileIdRouteHandler)
  .openapi(getFilesFileIdRoute, getFilesFileIdRouteHandler)
  .openapi(patchFilesFileIdRoute, patchFilesFileIdRouteHandler)
  .openapi(getFilesFileIdCommentsRoute, getFilesFileIdCommentsRouteHandler)
  .openapi(postFilesFileIdCommentsRoute, postFilesFileIdCommentsRouteHandler)
  .openapi(deleteFilesFileIdCommentsCommentIdRoute, deleteFilesFileIdCommentsCommentIdRouteHandler)
  .openapi(getFilesFileIdCommentsCommentIdRoute, getFilesFileIdCommentsCommentIdRouteHandler)
  .openapi(patchFilesFileIdCommentsCommentIdRoute, patchFilesFileIdCommentsCommentIdRouteHandler)
  .openapi(
    getFilesFileIdCommentsCommentIdRepliesRoute,
    getFilesFileIdCommentsCommentIdRepliesRouteHandler,
  )
  .openapi(
    postFilesFileIdCommentsCommentIdRepliesRoute,
    postFilesFileIdCommentsCommentIdRepliesRouteHandler,
  )
  .openapi(
    deleteFilesFileIdCommentsCommentIdRepliesReplyIdRoute,
    deleteFilesFileIdCommentsCommentIdRepliesReplyIdRouteHandler,
  )
  .openapi(
    getFilesFileIdCommentsCommentIdRepliesReplyIdRoute,
    getFilesFileIdCommentsCommentIdRepliesReplyIdRouteHandler,
  )
  .openapi(
    patchFilesFileIdCommentsCommentIdRepliesReplyIdRoute,
    patchFilesFileIdCommentsCommentIdRepliesReplyIdRouteHandler,
  )
  .openapi(postFilesFileIdCopyRoute, postFilesFileIdCopyRouteHandler)
  .openapi(getFilesFileIdExportRoute, getFilesFileIdExportRouteHandler)
  .openapi(getFilesFileIdListLabelsRoute, getFilesFileIdListLabelsRouteHandler)
  .openapi(postFilesFileIdModifyLabelsRoute, postFilesFileIdModifyLabelsRouteHandler)
  .openapi(getFilesFileIdPermissionsRoute, getFilesFileIdPermissionsRouteHandler)
  .openapi(postFilesFileIdPermissionsRoute, postFilesFileIdPermissionsRouteHandler)
  .openapi(
    deleteFilesFileIdPermissionsPermissionIdRoute,
    deleteFilesFileIdPermissionsPermissionIdRouteHandler,
  )
  .openapi(
    getFilesFileIdPermissionsPermissionIdRoute,
    getFilesFileIdPermissionsPermissionIdRouteHandler,
  )
  .openapi(
    patchFilesFileIdPermissionsPermissionIdRoute,
    patchFilesFileIdPermissionsPermissionIdRouteHandler,
  )
  .openapi(getFilesFileIdRevisionsRoute, getFilesFileIdRevisionsRouteHandler)
  .openapi(
    deleteFilesFileIdRevisionsRevisionIdRoute,
    deleteFilesFileIdRevisionsRevisionIdRouteHandler,
  )
  .openapi(getFilesFileIdRevisionsRevisionIdRoute, getFilesFileIdRevisionsRevisionIdRouteHandler)
  .openapi(
    patchFilesFileIdRevisionsRevisionIdRoute,
    patchFilesFileIdRevisionsRevisionIdRouteHandler,
  )
  .openapi(postFilesFileIdWatchRoute, postFilesFileIdWatchRouteHandler)
  .openapi(getTeamdrivesRoute, getTeamdrivesRouteHandler)
  .openapi(postTeamdrivesRoute, postTeamdrivesRouteHandler)
  .openapi(deleteTeamdrivesTeamDriveIdRoute, deleteTeamdrivesTeamDriveIdRouteHandler)
  .openapi(getTeamdrivesTeamDriveIdRoute, getTeamdrivesTeamDriveIdRouteHandler)
  .openapi(patchTeamdrivesTeamDriveIdRoute, patchTeamdrivesTeamDriveIdRouteHandler)

export default app
