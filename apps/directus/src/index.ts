import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCollectionsIdRoute,
  deleteCommentsIdRoute,
  deleteCommentsRoute,
  deleteFieldsCollectionIdRoute,
  deleteFilesIdRoute,
  deleteFilesRoute,
  deleteFlowsIdRoute,
  deleteFlowsRoute,
  deleteFoldersIdRoute,
  deleteFoldersRoute,
  deleteItemsCollectionIdRoute,
  deleteItemsCollectionRoute,
  deleteOperationsIdRoute,
  deleteOperationsRoute,
  deletePermissionsIdRoute,
  deletePermissionsRoute,
  deletePresetsIdRoute,
  deletePresetsRoute,
  deleteRelationsIdRoute,
  deleteRolesIdRoute,
  deleteRolesRoute,
  deleteUsersIdRoute,
  deleteUsersRoute,
  deleteVersionsIdRoute,
  deleteVersionsRoute,
  getActivityIdRoute,
  getActivityRoute,
  getAssetsIdRoute,
  getAuthOauthProviderRoute,
  getAuthOauthRoute,
  getCollectionsIdRoute,
  getCollectionsRoute,
  getCommentsIdRoute,
  getCommentsRoute,
  getExtensionsRoute,
  getFieldsCollectionIdRoute,
  getFieldsCollectionRoute,
  getFieldsRoute,
  getFilesIdRoute,
  getFilesRoute,
  getFlowsIdRoute,
  getFlowsRoute,
  getFoldersIdRoute,
  getFoldersRoute,
  getItemsCollectionIdRoute,
  getItemsCollectionRoute,
  getOperationsIdRoute,
  getOperationsRoute,
  getPermissionsIdRoute,
  getPermissionsMeRoute,
  getPermissionsRoute,
  getPresetsIdRoute,
  getPresetsRoute,
  getRelationsIdRoute,
  getRelationsRoute,
  getRevisionsIdRoute,
  getRevisionsRoute,
  getRolesIdRoute,
  getRolesRoute,
  getSchemaSnapshotRoute,
  getServerInfoRoute,
  getServerPingRoute,
  getSettingsRoute,
  getUsersIdRoute,
  getUsersMeRoute,
  getUsersRegisterVerifyEmailRoute,
  getUsersRoute,
  getUtilsRandomStringRoute,
  getVersionsIdCompareRoute,
  getVersionsIdRoute,
  getVersionsRoute,
  patchCollectionsIdRoute,
  patchCommentsIdRoute,
  patchCommentsRoute,
  patchExtensionsBundleNameRoute,
  patchExtensionsNameRoute,
  patchFieldsCollectionIdRoute,
  patchFilesIdRoute,
  patchFilesRoute,
  patchFlowsIdRoute,
  patchFlowsRoute,
  patchFoldersIdRoute,
  patchFoldersRoute,
  patchItemsCollectionIdRoute,
  patchItemsCollectionRoute,
  patchOperationsIdRoute,
  patchOperationsRoute,
  patchPermissionsIdRoute,
  patchPermissionsRoute,
  patchPresetsIdRoute,
  patchPresetsRoute,
  patchRelationsIdRoute,
  patchRolesIdRoute,
  patchRolesRoute,
  patchSettingsRoute,
  patchUsersIdRoute,
  patchUsersMeRoute,
  patchUsersMeTrackPageRoute,
  patchUsersRoute,
  patchVersionsIdRoute,
  patchVersionsRoute,
  postAuthLoginRoute,
  postAuthLogoutRoute,
  postAuthPasswordRequestRoute,
  postAuthPasswordResetRoute,
  postAuthRefreshRoute,
  postCollectionsRoute,
  postCommentsRoute,
  postFieldsCollectionRoute,
  postFilesRoute,
  postFlowsRoute,
  postFoldersRoute,
  postItemsCollectionRoute,
  postOperationsRoute,
  postPermissionsRoute,
  postPresetsRoute,
  postRelationsRoute,
  postRolesRoute,
  postSchemaApplyRoute,
  postSchemaDiffRoute,
  postUsersIdTfaDisableRoute,
  postUsersInviteAcceptRoute,
  postUsersInviteRoute,
  postUsersMeTfaDisableRoute,
  postUsersMeTfaEnableRoute,
  postUsersMeTfaGenerateRoute,
  postUsersRegisterRoute,
  postUsersRoute,
  postUtilsCacheClearRoute,
  postUtilsExportCollectionRoute,
  postUtilsImportCollectionRoute,
  postUtilsImportRoute,
  postUtilsSortCollectionRoute,
  postVersionsIdPromoteRoute,
  postVersionsIdSaveRoute,
  postVersionsRoute,
} from './routes'
import {
  deleteCollectionsIdRouteHandler,
  deleteCommentsIdRouteHandler,
  deleteCommentsRouteHandler,
  deleteFieldsCollectionIdRouteHandler,
  deleteFilesIdRouteHandler,
  deleteFilesRouteHandler,
  deleteFlowsIdRouteHandler,
  deleteFlowsRouteHandler,
  deleteFoldersIdRouteHandler,
  deleteFoldersRouteHandler,
  deleteItemsCollectionIdRouteHandler,
  deleteItemsCollectionRouteHandler,
  deleteOperationsIdRouteHandler,
  deleteOperationsRouteHandler,
  deletePermissionsIdRouteHandler,
  deletePermissionsRouteHandler,
  deletePresetsIdRouteHandler,
  deletePresetsRouteHandler,
  deleteRelationsIdRouteHandler,
  deleteRolesIdRouteHandler,
  deleteRolesRouteHandler,
  deleteUsersIdRouteHandler,
  deleteUsersRouteHandler,
  deleteVersionsIdRouteHandler,
  deleteVersionsRouteHandler,
  getActivityIdRouteHandler,
  getActivityRouteHandler,
  getAssetsIdRouteHandler,
  getAuthOauthProviderRouteHandler,
  getAuthOauthRouteHandler,
  getCollectionsIdRouteHandler,
  getCollectionsRouteHandler,
  getCommentsIdRouteHandler,
  getCommentsRouteHandler,
  getExtensionsRouteHandler,
  getFieldsCollectionIdRouteHandler,
  getFieldsCollectionRouteHandler,
  getFieldsRouteHandler,
  getFilesIdRouteHandler,
  getFilesRouteHandler,
  getFlowsIdRouteHandler,
  getFlowsRouteHandler,
  getFoldersIdRouteHandler,
  getFoldersRouteHandler,
  getItemsCollectionIdRouteHandler,
  getItemsCollectionRouteHandler,
  getOperationsIdRouteHandler,
  getOperationsRouteHandler,
  getPermissionsIdRouteHandler,
  getPermissionsMeRouteHandler,
  getPermissionsRouteHandler,
  getPresetsIdRouteHandler,
  getPresetsRouteHandler,
  getRelationsIdRouteHandler,
  getRelationsRouteHandler,
  getRevisionsIdRouteHandler,
  getRevisionsRouteHandler,
  getRolesIdRouteHandler,
  getRolesRouteHandler,
  getSchemaSnapshotRouteHandler,
  getServerInfoRouteHandler,
  getServerPingRouteHandler,
  getSettingsRouteHandler,
  getUsersIdRouteHandler,
  getUsersMeRouteHandler,
  getUsersRegisterVerifyEmailRouteHandler,
  getUsersRouteHandler,
  getUtilsRandomStringRouteHandler,
  getVersionsIdCompareRouteHandler,
  getVersionsIdRouteHandler,
  getVersionsRouteHandler,
  patchCollectionsIdRouteHandler,
  patchCommentsIdRouteHandler,
  patchCommentsRouteHandler,
  patchExtensionsBundleNameRouteHandler,
  patchExtensionsNameRouteHandler,
  patchFieldsCollectionIdRouteHandler,
  patchFilesIdRouteHandler,
  patchFilesRouteHandler,
  patchFlowsIdRouteHandler,
  patchFlowsRouteHandler,
  patchFoldersIdRouteHandler,
  patchFoldersRouteHandler,
  patchItemsCollectionIdRouteHandler,
  patchItemsCollectionRouteHandler,
  patchOperationsIdRouteHandler,
  patchOperationsRouteHandler,
  patchPermissionsIdRouteHandler,
  patchPermissionsRouteHandler,
  patchPresetsIdRouteHandler,
  patchPresetsRouteHandler,
  patchRelationsIdRouteHandler,
  patchRolesIdRouteHandler,
  patchRolesRouteHandler,
  patchSettingsRouteHandler,
  patchUsersIdRouteHandler,
  patchUsersMeRouteHandler,
  patchUsersMeTrackPageRouteHandler,
  patchUsersRouteHandler,
  patchVersionsIdRouteHandler,
  patchVersionsRouteHandler,
  postAuthLoginRouteHandler,
  postAuthLogoutRouteHandler,
  postAuthPasswordRequestRouteHandler,
  postAuthPasswordResetRouteHandler,
  postAuthRefreshRouteHandler,
  postCollectionsRouteHandler,
  postCommentsRouteHandler,
  postFieldsCollectionRouteHandler,
  postFilesRouteHandler,
  postFlowsRouteHandler,
  postFoldersRouteHandler,
  postItemsCollectionRouteHandler,
  postOperationsRouteHandler,
  postPermissionsRouteHandler,
  postPresetsRouteHandler,
  postRelationsRouteHandler,
  postRolesRouteHandler,
  postSchemaApplyRouteHandler,
  postSchemaDiffRouteHandler,
  postUsersIdTfaDisableRouteHandler,
  postUsersInviteAcceptRouteHandler,
  postUsersInviteRouteHandler,
  postUsersMeTfaDisableRouteHandler,
  postUsersMeTfaEnableRouteHandler,
  postUsersMeTfaGenerateRouteHandler,
  postUsersRegisterRouteHandler,
  postUsersRouteHandler,
  postUtilsCacheClearRouteHandler,
  postUtilsExportCollectionRouteHandler,
  postUtilsImportCollectionRouteHandler,
  postUtilsImportRouteHandler,
  postUtilsSortCollectionRouteHandler,
  postVersionsIdPromoteRouteHandler,
  postVersionsIdSaveRouteHandler,
  postVersionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActivityRoute, getActivityRouteHandler)
  .openapi(getActivityIdRoute, getActivityIdRouteHandler)
  .openapi(getAssetsIdRoute, getAssetsIdRouteHandler)
  .openapi(postAuthLoginRoute, postAuthLoginRouteHandler)
  .openapi(postAuthRefreshRoute, postAuthRefreshRouteHandler)
  .openapi(postAuthLogoutRoute, postAuthLogoutRouteHandler)
  .openapi(postAuthPasswordRequestRoute, postAuthPasswordRequestRouteHandler)
  .openapi(postAuthPasswordResetRoute, postAuthPasswordResetRouteHandler)
  .openapi(getAuthOauthRoute, getAuthOauthRouteHandler)
  .openapi(getAuthOauthProviderRoute, getAuthOauthProviderRouteHandler)
  .openapi(getItemsCollectionRoute, getItemsCollectionRouteHandler)
  .openapi(postItemsCollectionRoute, postItemsCollectionRouteHandler)
  .openapi(patchItemsCollectionRoute, patchItemsCollectionRouteHandler)
  .openapi(deleteItemsCollectionRoute, deleteItemsCollectionRouteHandler)
  .openapi(getItemsCollectionIdRoute, getItemsCollectionIdRouteHandler)
  .openapi(patchItemsCollectionIdRoute, patchItemsCollectionIdRouteHandler)
  .openapi(deleteItemsCollectionIdRoute, deleteItemsCollectionIdRouteHandler)
  .openapi(getPresetsRoute, getPresetsRouteHandler)
  .openapi(postPresetsRoute, postPresetsRouteHandler)
  .openapi(patchPresetsRoute, patchPresetsRouteHandler)
  .openapi(deletePresetsRoute, deletePresetsRouteHandler)
  .openapi(getPresetsIdRoute, getPresetsIdRouteHandler)
  .openapi(patchPresetsIdRoute, patchPresetsIdRouteHandler)
  .openapi(deletePresetsIdRoute, deletePresetsIdRouteHandler)
  .openapi(getCollectionsRoute, getCollectionsRouteHandler)
  .openapi(postCollectionsRoute, postCollectionsRouteHandler)
  .openapi(getCollectionsIdRoute, getCollectionsIdRouteHandler)
  .openapi(patchCollectionsIdRoute, patchCollectionsIdRouteHandler)
  .openapi(deleteCollectionsIdRoute, deleteCollectionsIdRouteHandler)
  .openapi(getCommentsRoute, getCommentsRouteHandler)
  .openapi(postCommentsRoute, postCommentsRouteHandler)
  .openapi(patchCommentsRoute, patchCommentsRouteHandler)
  .openapi(deleteCommentsRoute, deleteCommentsRouteHandler)
  .openapi(getCommentsIdRoute, getCommentsIdRouteHandler)
  .openapi(patchCommentsIdRoute, patchCommentsIdRouteHandler)
  .openapi(deleteCommentsIdRoute, deleteCommentsIdRouteHandler)
  .openapi(getExtensionsRoute, getExtensionsRouteHandler)
  .openapi(patchExtensionsNameRoute, patchExtensionsNameRouteHandler)
  .openapi(patchExtensionsBundleNameRoute, patchExtensionsBundleNameRouteHandler)
  .openapi(getFieldsRoute, getFieldsRouteHandler)
  .openapi(getFieldsCollectionRoute, getFieldsCollectionRouteHandler)
  .openapi(postFieldsCollectionRoute, postFieldsCollectionRouteHandler)
  .openapi(getFieldsCollectionIdRoute, getFieldsCollectionIdRouteHandler)
  .openapi(patchFieldsCollectionIdRoute, patchFieldsCollectionIdRouteHandler)
  .openapi(deleteFieldsCollectionIdRoute, deleteFieldsCollectionIdRouteHandler)
  .openapi(getFilesRoute, getFilesRouteHandler)
  .openapi(postFilesRoute, postFilesRouteHandler)
  .openapi(patchFilesRoute, patchFilesRouteHandler)
  .openapi(deleteFilesRoute, deleteFilesRouteHandler)
  .openapi(getFilesIdRoute, getFilesIdRouteHandler)
  .openapi(patchFilesIdRoute, patchFilesIdRouteHandler)
  .openapi(deleteFilesIdRoute, deleteFilesIdRouteHandler)
  .openapi(getFlowsRoute, getFlowsRouteHandler)
  .openapi(postFlowsRoute, postFlowsRouteHandler)
  .openapi(patchFlowsRoute, patchFlowsRouteHandler)
  .openapi(deleteFlowsRoute, deleteFlowsRouteHandler)
  .openapi(getFlowsIdRoute, getFlowsIdRouteHandler)
  .openapi(patchFlowsIdRoute, patchFlowsIdRouteHandler)
  .openapi(deleteFlowsIdRoute, deleteFlowsIdRouteHandler)
  .openapi(getFoldersRoute, getFoldersRouteHandler)
  .openapi(postFoldersRoute, postFoldersRouteHandler)
  .openapi(patchFoldersRoute, patchFoldersRouteHandler)
  .openapi(deleteFoldersRoute, deleteFoldersRouteHandler)
  .openapi(getFoldersIdRoute, getFoldersIdRouteHandler)
  .openapi(patchFoldersIdRoute, patchFoldersIdRouteHandler)
  .openapi(deleteFoldersIdRoute, deleteFoldersIdRouteHandler)
  .openapi(getOperationsRoute, getOperationsRouteHandler)
  .openapi(postOperationsRoute, postOperationsRouteHandler)
  .openapi(patchOperationsRoute, patchOperationsRouteHandler)
  .openapi(deleteOperationsRoute, deleteOperationsRouteHandler)
  .openapi(getOperationsIdRoute, getOperationsIdRouteHandler)
  .openapi(patchOperationsIdRoute, patchOperationsIdRouteHandler)
  .openapi(deleteOperationsIdRoute, deleteOperationsIdRouteHandler)
  .openapi(getPermissionsRoute, getPermissionsRouteHandler)
  .openapi(postPermissionsRoute, postPermissionsRouteHandler)
  .openapi(patchPermissionsRoute, patchPermissionsRouteHandler)
  .openapi(deletePermissionsRoute, deletePermissionsRouteHandler)
  .openapi(getPermissionsMeRoute, getPermissionsMeRouteHandler)
  .openapi(getPermissionsIdRoute, getPermissionsIdRouteHandler)
  .openapi(patchPermissionsIdRoute, patchPermissionsIdRouteHandler)
  .openapi(deletePermissionsIdRoute, deletePermissionsIdRouteHandler)
  .openapi(getRelationsRoute, getRelationsRouteHandler)
  .openapi(postRelationsRoute, postRelationsRouteHandler)
  .openapi(getRelationsIdRoute, getRelationsIdRouteHandler)
  .openapi(patchRelationsIdRoute, patchRelationsIdRouteHandler)
  .openapi(deleteRelationsIdRoute, deleteRelationsIdRouteHandler)
  .openapi(getRevisionsRoute, getRevisionsRouteHandler)
  .openapi(getRevisionsIdRoute, getRevisionsIdRouteHandler)
  .openapi(getRolesRoute, getRolesRouteHandler)
  .openapi(postRolesRoute, postRolesRouteHandler)
  .openapi(patchRolesRoute, patchRolesRouteHandler)
  .openapi(deleteRolesRoute, deleteRolesRouteHandler)
  .openapi(getRolesIdRoute, getRolesIdRouteHandler)
  .openapi(patchRolesIdRoute, patchRolesIdRouteHandler)
  .openapi(deleteRolesIdRoute, deleteRolesIdRouteHandler)
  .openapi(getSchemaSnapshotRoute, getSchemaSnapshotRouteHandler)
  .openapi(postSchemaApplyRoute, postSchemaApplyRouteHandler)
  .openapi(postSchemaDiffRoute, postSchemaDiffRouteHandler)
  .openapi(getServerInfoRoute, getServerInfoRouteHandler)
  .openapi(getServerPingRoute, getServerPingRouteHandler)
  .openapi(getSettingsRoute, getSettingsRouteHandler)
  .openapi(patchSettingsRoute, patchSettingsRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(patchUsersRoute, patchUsersRouteHandler)
  .openapi(deleteUsersRoute, deleteUsersRouteHandler)
  .openapi(getUsersIdRoute, getUsersIdRouteHandler)
  .openapi(patchUsersIdRoute, patchUsersIdRouteHandler)
  .openapi(deleteUsersIdRoute, deleteUsersIdRouteHandler)
  .openapi(postUsersIdTfaDisableRoute, postUsersIdTfaDisableRouteHandler)
  .openapi(postUsersInviteRoute, postUsersInviteRouteHandler)
  .openapi(postUsersInviteAcceptRoute, postUsersInviteAcceptRouteHandler)
  .openapi(getUsersMeRoute, getUsersMeRouteHandler)
  .openapi(patchUsersMeRoute, patchUsersMeRouteHandler)
  .openapi(postUsersMeTfaDisableRoute, postUsersMeTfaDisableRouteHandler)
  .openapi(postUsersMeTfaEnableRoute, postUsersMeTfaEnableRouteHandler)
  .openapi(postUsersMeTfaGenerateRoute, postUsersMeTfaGenerateRouteHandler)
  .openapi(patchUsersMeTrackPageRoute, patchUsersMeTrackPageRouteHandler)
  .openapi(postUsersRegisterRoute, postUsersRegisterRouteHandler)
  .openapi(getUsersRegisterVerifyEmailRoute, getUsersRegisterVerifyEmailRouteHandler)
  .openapi(postUtilsSortCollectionRoute, postUtilsSortCollectionRouteHandler)
  .openapi(postUtilsImportRoute, postUtilsImportRouteHandler)
  .openapi(postUtilsImportCollectionRoute, postUtilsImportCollectionRouteHandler)
  .openapi(postUtilsExportCollectionRoute, postUtilsExportCollectionRouteHandler)
  .openapi(postUtilsCacheClearRoute, postUtilsCacheClearRouteHandler)
  .openapi(getUtilsRandomStringRoute, getUtilsRandomStringRouteHandler)
  .openapi(getVersionsRoute, getVersionsRouteHandler)
  .openapi(postVersionsRoute, postVersionsRouteHandler)
  .openapi(patchVersionsRoute, patchVersionsRouteHandler)
  .openapi(deleteVersionsRoute, deleteVersionsRouteHandler)
  .openapi(getVersionsIdRoute, getVersionsIdRouteHandler)
  .openapi(patchVersionsIdRoute, patchVersionsIdRouteHandler)
  .openapi(deleteVersionsIdRoute, deleteVersionsIdRouteHandler)
  .openapi(postVersionsIdSaveRoute, postVersionsIdSaveRouteHandler)
  .openapi(getVersionsIdCompareRoute, getVersionsIdCompareRouteHandler)
  .openapi(postVersionsIdPromoteRoute, postVersionsIdPromoteRouteHandler)

export default app
