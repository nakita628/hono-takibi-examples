import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBlocklistsNameRoute,
  deleteCampaignsIdRoute,
  deleteChannelsTypeIdFileRoute,
  deleteChannelsTypeIdImageRoute,
  deleteChannelsTypeIdRoute,
  deleteChanneltypesNameRoute,
  deleteCommandsNameRoute,
  deleteDevicesRoute,
  deleteMessagesIdReactionTypeRoute,
  deleteMessagesIdRoute,
  deleteModerationBanRoute,
  deletePushProvidersTypeNameRoute,
  deleteRolesNameRoute,
  deleteSegmentsIdRoute,
  deleteUsersUserIdRoute,
  getAppRoute,
  getBlocklistsNameRoute,
  getBlocklistsRoute,
  getCampaignsRoute,
  getChannelsTypeIdMessagesRoute,
  getChanneltypesNameRoute,
  getChanneltypesRoute,
  getCommandsNameRoute,
  getCommandsRoute,
  getConnectRoute,
  getDevicesRoute,
  getExportChannelsIdRoute,
  getImportsIdRoute,
  getImportsRoute,
  getLongpollRoute,
  getMembersRoute,
  getMessagesIdReactionsRoute,
  getMessagesIdRoute,
  getMessagesParentIdRepliesRoute,
  getModerationFlagsMessageRoute,
  getOgRoute,
  getPermissionsIdRoute,
  getPermissionsRoute,
  getPushProvidersRoute,
  getQueryBannedUsersRoute,
  getRateLimitsRoute,
  getRecipientsRoute,
  getRolesRoute,
  getSearchRoute,
  getSegmentsRoute,
  getTasksIdRoute,
  getUsersRoute,
  getUsersUserIdExportRoute,
  patchAppRoute,
  patchCampaignsIdResumeRoute,
  patchCampaignsIdScheduleRoute,
  patchCampaignsIdStopRoute,
  patchChannelsTypeIdRoute,
  patchUsersRoute,
  postBlocklistsRoute,
  postCallsCallIdRoute,
  postCallsIndexRoute,
  postCampaignsIdTestRoute,
  postCampaignsRoute,
  postChannelsDeleteRoute,
  postChannelsReadRoute,
  postChannelsRoute,
  postChannelsTypeIdCallRoute,
  postChannelsTypeIdEventRoute,
  postChannelsTypeIdFileRoute,
  postChannelsTypeIdHideRoute,
  postChannelsTypeIdImageRoute,
  postChannelsTypeIdMessageRoute,
  postChannelsTypeIdQueryRoute,
  postChannelsTypeIdReadRoute,
  postChannelsTypeIdRoute,
  postChannelsTypeIdShowRoute,
  postChannelsTypeIdStopWatchingRoute,
  postChannelsTypeIdTruncateRoute,
  postChannelsTypeIdUnreadRoute,
  postChannelsTypeQueryRoute,
  postChanneltypesRoute,
  postCheckPushRoute,
  postCheckSqsRoute,
  postCommandsRoute,
  postDevicesRoute,
  postExportChannelsRoute,
  postExportUsersRoute,
  postGuestRoute,
  postImportsRoute,
  postImportUrlsRoute,
  postMessagesIdActionRoute,
  postMessagesIdCommitRoute,
  postMessagesIdReactionRoute,
  postMessagesIdRoute,
  postMessagesIdTranslateRoute,
  postModerationBanRoute,
  postModerationFlagRoute,
  postModerationMuteChannelRoute,
  postModerationMuteRoute,
  postModerationUnflagRoute,
  postModerationUnmuteChannelRoute,
  postModerationUnmuteRoute,
  postPushProvidersRoute,
  postRolesRoute,
  postSegmentsRoute,
  postSyncRoute,
  postUsersDeactivateRoute,
  postUsersDeleteRoute,
  postUsersReactivateRoute,
  postUsersRestoreRoute,
  postUsersRoute,
  postUsersUserIdDeactivateRoute,
  postUsersUserIdEventRoute,
  postUsersUserIdReactivateRoute,
  putBlocklistsNameRoute,
  putCampaignsIdRoute,
  putChanneltypesNameRoute,
  putCommandsNameRoute,
  putMessagesIdRoute,
  putSegmentsIdRoute,
} from './routes'
import {
  deleteBlocklistsNameRouteHandler,
  deleteCampaignsIdRouteHandler,
  deleteChannelsTypeIdFileRouteHandler,
  deleteChannelsTypeIdImageRouteHandler,
  deleteChannelsTypeIdRouteHandler,
  deleteChanneltypesNameRouteHandler,
  deleteCommandsNameRouteHandler,
  deleteDevicesRouteHandler,
  deleteMessagesIdReactionTypeRouteHandler,
  deleteMessagesIdRouteHandler,
  deleteModerationBanRouteHandler,
  deletePushProvidersTypeNameRouteHandler,
  deleteRolesNameRouteHandler,
  deleteSegmentsIdRouteHandler,
  deleteUsersUserIdRouteHandler,
  getAppRouteHandler,
  getBlocklistsNameRouteHandler,
  getBlocklistsRouteHandler,
  getCampaignsRouteHandler,
  getChannelsTypeIdMessagesRouteHandler,
  getChanneltypesNameRouteHandler,
  getChanneltypesRouteHandler,
  getCommandsNameRouteHandler,
  getCommandsRouteHandler,
  getConnectRouteHandler,
  getDevicesRouteHandler,
  getExportChannelsIdRouteHandler,
  getImportsIdRouteHandler,
  getImportsRouteHandler,
  getLongpollRouteHandler,
  getMembersRouteHandler,
  getMessagesIdReactionsRouteHandler,
  getMessagesIdRouteHandler,
  getMessagesParentIdRepliesRouteHandler,
  getModerationFlagsMessageRouteHandler,
  getOgRouteHandler,
  getPermissionsIdRouteHandler,
  getPermissionsRouteHandler,
  getPushProvidersRouteHandler,
  getQueryBannedUsersRouteHandler,
  getRateLimitsRouteHandler,
  getRecipientsRouteHandler,
  getRolesRouteHandler,
  getSearchRouteHandler,
  getSegmentsRouteHandler,
  getTasksIdRouteHandler,
  getUsersRouteHandler,
  getUsersUserIdExportRouteHandler,
  patchAppRouteHandler,
  patchCampaignsIdResumeRouteHandler,
  patchCampaignsIdScheduleRouteHandler,
  patchCampaignsIdStopRouteHandler,
  patchChannelsTypeIdRouteHandler,
  patchUsersRouteHandler,
  postBlocklistsRouteHandler,
  postCallsCallIdRouteHandler,
  postCallsIndexRouteHandler,
  postCampaignsIdTestRouteHandler,
  postCampaignsRouteHandler,
  postChannelsDeleteRouteHandler,
  postChannelsReadRouteHandler,
  postChannelsRouteHandler,
  postChannelsTypeIdCallRouteHandler,
  postChannelsTypeIdEventRouteHandler,
  postChannelsTypeIdFileRouteHandler,
  postChannelsTypeIdHideRouteHandler,
  postChannelsTypeIdImageRouteHandler,
  postChannelsTypeIdMessageRouteHandler,
  postChannelsTypeIdQueryRouteHandler,
  postChannelsTypeIdReadRouteHandler,
  postChannelsTypeIdRouteHandler,
  postChannelsTypeIdShowRouteHandler,
  postChannelsTypeIdStopWatchingRouteHandler,
  postChannelsTypeIdTruncateRouteHandler,
  postChannelsTypeIdUnreadRouteHandler,
  postChannelsTypeQueryRouteHandler,
  postChanneltypesRouteHandler,
  postCheckPushRouteHandler,
  postCheckSqsRouteHandler,
  postCommandsRouteHandler,
  postDevicesRouteHandler,
  postExportChannelsRouteHandler,
  postExportUsersRouteHandler,
  postGuestRouteHandler,
  postImportsRouteHandler,
  postImportUrlsRouteHandler,
  postMessagesIdActionRouteHandler,
  postMessagesIdCommitRouteHandler,
  postMessagesIdReactionRouteHandler,
  postMessagesIdRouteHandler,
  postMessagesIdTranslateRouteHandler,
  postModerationBanRouteHandler,
  postModerationFlagRouteHandler,
  postModerationMuteChannelRouteHandler,
  postModerationMuteRouteHandler,
  postModerationUnflagRouteHandler,
  postModerationUnmuteChannelRouteHandler,
  postModerationUnmuteRouteHandler,
  postPushProvidersRouteHandler,
  postRolesRouteHandler,
  postSegmentsRouteHandler,
  postSyncRouteHandler,
  postUsersDeactivateRouteHandler,
  postUsersDeleteRouteHandler,
  postUsersReactivateRouteHandler,
  postUsersRestoreRouteHandler,
  postUsersRouteHandler,
  postUsersUserIdDeactivateRouteHandler,
  postUsersUserIdEventRouteHandler,
  postUsersUserIdReactivateRouteHandler,
  putBlocklistsNameRouteHandler,
  putCampaignsIdRouteHandler,
  putChanneltypesNameRouteHandler,
  putCommandsNameRouteHandler,
  putMessagesIdRouteHandler,
  putSegmentsIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAppRoute, getAppRouteHandler)
  .openapi(patchAppRoute, patchAppRouteHandler)
  .openapi(getBlocklistsRoute, getBlocklistsRouteHandler)
  .openapi(postBlocklistsRoute, postBlocklistsRouteHandler)
  .openapi(deleteBlocklistsNameRoute, deleteBlocklistsNameRouteHandler)
  .openapi(getBlocklistsNameRoute, getBlocklistsNameRouteHandler)
  .openapi(putBlocklistsNameRoute, putBlocklistsNameRouteHandler)
  .openapi(postCallsIndexRoute, postCallsIndexRouteHandler)
  .openapi(postCallsCallIdRoute, postCallsCallIdRouteHandler)
  .openapi(getCampaignsRoute, getCampaignsRouteHandler)
  .openapi(postCampaignsRoute, postCampaignsRouteHandler)
  .openapi(deleteCampaignsIdRoute, deleteCampaignsIdRouteHandler)
  .openapi(putCampaignsIdRoute, putCampaignsIdRouteHandler)
  .openapi(patchCampaignsIdResumeRoute, patchCampaignsIdResumeRouteHandler)
  .openapi(patchCampaignsIdScheduleRoute, patchCampaignsIdScheduleRouteHandler)
  .openapi(patchCampaignsIdStopRoute, patchCampaignsIdStopRouteHandler)
  .openapi(postCampaignsIdTestRoute, postCampaignsIdTestRouteHandler)
  .openapi(postChannelsRoute, postChannelsRouteHandler)
  .openapi(postChannelsDeleteRoute, postChannelsDeleteRouteHandler)
  .openapi(postChannelsReadRoute, postChannelsReadRouteHandler)
  .openapi(postChannelsTypeQueryRoute, postChannelsTypeQueryRouteHandler)
  .openapi(deleteChannelsTypeIdRoute, deleteChannelsTypeIdRouteHandler)
  .openapi(patchChannelsTypeIdRoute, patchChannelsTypeIdRouteHandler)
  .openapi(postChannelsTypeIdRoute, postChannelsTypeIdRouteHandler)
  .openapi(postChannelsTypeIdCallRoute, postChannelsTypeIdCallRouteHandler)
  .openapi(postChannelsTypeIdEventRoute, postChannelsTypeIdEventRouteHandler)
  .openapi(deleteChannelsTypeIdFileRoute, deleteChannelsTypeIdFileRouteHandler)
  .openapi(postChannelsTypeIdFileRoute, postChannelsTypeIdFileRouteHandler)
  .openapi(postChannelsTypeIdHideRoute, postChannelsTypeIdHideRouteHandler)
  .openapi(deleteChannelsTypeIdImageRoute, deleteChannelsTypeIdImageRouteHandler)
  .openapi(postChannelsTypeIdImageRoute, postChannelsTypeIdImageRouteHandler)
  .openapi(postChannelsTypeIdMessageRoute, postChannelsTypeIdMessageRouteHandler)
  .openapi(getChannelsTypeIdMessagesRoute, getChannelsTypeIdMessagesRouteHandler)
  .openapi(postChannelsTypeIdQueryRoute, postChannelsTypeIdQueryRouteHandler)
  .openapi(postChannelsTypeIdReadRoute, postChannelsTypeIdReadRouteHandler)
  .openapi(postChannelsTypeIdShowRoute, postChannelsTypeIdShowRouteHandler)
  .openapi(postChannelsTypeIdStopWatchingRoute, postChannelsTypeIdStopWatchingRouteHandler)
  .openapi(postChannelsTypeIdTruncateRoute, postChannelsTypeIdTruncateRouteHandler)
  .openapi(postChannelsTypeIdUnreadRoute, postChannelsTypeIdUnreadRouteHandler)
  .openapi(getChanneltypesRoute, getChanneltypesRouteHandler)
  .openapi(postChanneltypesRoute, postChanneltypesRouteHandler)
  .openapi(deleteChanneltypesNameRoute, deleteChanneltypesNameRouteHandler)
  .openapi(getChanneltypesNameRoute, getChanneltypesNameRouteHandler)
  .openapi(putChanneltypesNameRoute, putChanneltypesNameRouteHandler)
  .openapi(postCheckPushRoute, postCheckPushRouteHandler)
  .openapi(postCheckSqsRoute, postCheckSqsRouteHandler)
  .openapi(getCommandsRoute, getCommandsRouteHandler)
  .openapi(postCommandsRoute, postCommandsRouteHandler)
  .openapi(deleteCommandsNameRoute, deleteCommandsNameRouteHandler)
  .openapi(getCommandsNameRoute, getCommandsNameRouteHandler)
  .openapi(putCommandsNameRoute, putCommandsNameRouteHandler)
  .openapi(getConnectRoute, getConnectRouteHandler)
  .openapi(deleteDevicesRoute, deleteDevicesRouteHandler)
  .openapi(getDevicesRoute, getDevicesRouteHandler)
  .openapi(postDevicesRoute, postDevicesRouteHandler)
  .openapi(postExportUsersRoute, postExportUsersRouteHandler)
  .openapi(postExportChannelsRoute, postExportChannelsRouteHandler)
  .openapi(getExportChannelsIdRoute, getExportChannelsIdRouteHandler)
  .openapi(postGuestRoute, postGuestRouteHandler)
  .openapi(postImportUrlsRoute, postImportUrlsRouteHandler)
  .openapi(getImportsRoute, getImportsRouteHandler)
  .openapi(postImportsRoute, postImportsRouteHandler)
  .openapi(getImportsIdRoute, getImportsIdRouteHandler)
  .openapi(getLongpollRoute, getLongpollRouteHandler)
  .openapi(getMembersRoute, getMembersRouteHandler)
  .openapi(deleteMessagesIdRoute, deleteMessagesIdRouteHandler)
  .openapi(getMessagesIdRoute, getMessagesIdRouteHandler)
  .openapi(postMessagesIdRoute, postMessagesIdRouteHandler)
  .openapi(putMessagesIdRoute, putMessagesIdRouteHandler)
  .openapi(postMessagesIdActionRoute, postMessagesIdActionRouteHandler)
  .openapi(postMessagesIdCommitRoute, postMessagesIdCommitRouteHandler)
  .openapi(postMessagesIdReactionRoute, postMessagesIdReactionRouteHandler)
  .openapi(deleteMessagesIdReactionTypeRoute, deleteMessagesIdReactionTypeRouteHandler)
  .openapi(getMessagesIdReactionsRoute, getMessagesIdReactionsRouteHandler)
  .openapi(postMessagesIdTranslateRoute, postMessagesIdTranslateRouteHandler)
  .openapi(getMessagesParentIdRepliesRoute, getMessagesParentIdRepliesRouteHandler)
  .openapi(deleteModerationBanRoute, deleteModerationBanRouteHandler)
  .openapi(postModerationBanRoute, postModerationBanRouteHandler)
  .openapi(postModerationFlagRoute, postModerationFlagRouteHandler)
  .openapi(getModerationFlagsMessageRoute, getModerationFlagsMessageRouteHandler)
  .openapi(postModerationMuteRoute, postModerationMuteRouteHandler)
  .openapi(postModerationMuteChannelRoute, postModerationMuteChannelRouteHandler)
  .openapi(postModerationUnflagRoute, postModerationUnflagRouteHandler)
  .openapi(postModerationUnmuteRoute, postModerationUnmuteRouteHandler)
  .openapi(postModerationUnmuteChannelRoute, postModerationUnmuteChannelRouteHandler)
  .openapi(getOgRoute, getOgRouteHandler)
  .openapi(getPermissionsRoute, getPermissionsRouteHandler)
  .openapi(getPermissionsIdRoute, getPermissionsIdRouteHandler)
  .openapi(getPushProvidersRoute, getPushProvidersRouteHandler)
  .openapi(postPushProvidersRoute, postPushProvidersRouteHandler)
  .openapi(deletePushProvidersTypeNameRoute, deletePushProvidersTypeNameRouteHandler)
  .openapi(getQueryBannedUsersRoute, getQueryBannedUsersRouteHandler)
  .openapi(getRateLimitsRoute, getRateLimitsRouteHandler)
  .openapi(getRecipientsRoute, getRecipientsRouteHandler)
  .openapi(getRolesRoute, getRolesRouteHandler)
  .openapi(postRolesRoute, postRolesRouteHandler)
  .openapi(deleteRolesNameRoute, deleteRolesNameRouteHandler)
  .openapi(getSearchRoute, getSearchRouteHandler)
  .openapi(getSegmentsRoute, getSegmentsRouteHandler)
  .openapi(postSegmentsRoute, postSegmentsRouteHandler)
  .openapi(deleteSegmentsIdRoute, deleteSegmentsIdRouteHandler)
  .openapi(putSegmentsIdRoute, putSegmentsIdRouteHandler)
  .openapi(postSyncRoute, postSyncRouteHandler)
  .openapi(getTasksIdRoute, getTasksIdRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(patchUsersRoute, patchUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(postUsersDeactivateRoute, postUsersDeactivateRouteHandler)
  .openapi(postUsersDeleteRoute, postUsersDeleteRouteHandler)
  .openapi(postUsersReactivateRoute, postUsersReactivateRouteHandler)
  .openapi(postUsersRestoreRoute, postUsersRestoreRouteHandler)
  .openapi(deleteUsersUserIdRoute, deleteUsersUserIdRouteHandler)
  .openapi(postUsersUserIdDeactivateRoute, postUsersUserIdDeactivateRouteHandler)
  .openapi(postUsersUserIdEventRoute, postUsersUserIdEventRouteHandler)
  .openapi(getUsersUserIdExportRoute, getUsersUserIdExportRouteHandler)
  .openapi(postUsersUserIdReactivateRoute, postUsersUserIdReactivateRouteHandler)

export default app
