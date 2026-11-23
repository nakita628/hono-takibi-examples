import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiKeyRoute,
  deleteApiKeysIdRoute,
  deleteAs2PartnersIdRoute,
  deleteAs2StationsIdRoute,
  deleteAutomationsIdRoute,
  deleteBehaviorsIdRoute,
  deleteBundleNotificationsIdRoute,
  deleteBundlesIdRoute,
  deleteClickwrapsIdRoute,
  deleteFileCommentReactionsIdRoute,
  deleteFileCommentsIdRoute,
  deleteFilesPathRoute,
  deleteFormFieldSetsIdRoute,
  deleteGroupsGroupIdMembershipsUserIdRoute,
  deleteGroupsIdRoute,
  deleteGroupUsersIdRoute,
  deleteLocksPathRoute,
  deleteMessageCommentReactionsIdRoute,
  deleteMessageCommentsIdRoute,
  deleteMessageReactionsIdRoute,
  deleteMessagesIdRoute,
  deleteNotificationsIdRoute,
  deletePermissionsIdRoute,
  deleteProjectsIdRoute,
  deletePublicKeysIdRoute,
  deleteRemoteServersIdRoute,
  deleteRequestsIdRoute,
  deleteSessionsRoute,
  deleteSftpHostKeysIdRoute,
  deleteStylesPathRoute,
  deleteUserRequestsIdRoute,
  deleteUsersIdRoute,
  getActionNotificationExportResultsRoute,
  getActionNotificationExportsIdRoute,
  getApiKeyRoute,
  getApiKeysIdRoute,
  getApiKeysRoute,
  getAppsRoute,
  getAs2IncomingMessagesRoute,
  getAs2OutgoingMessagesRoute,
  getAs2PartnersIdRoute,
  getAs2PartnersRoute,
  getAs2StationsIdRoute,
  getAs2StationsRoute,
  getAutomationRunsIdRoute,
  getAutomationRunsRoute,
  getAutomationsIdRoute,
  getAutomationsRoute,
  getBandwidthSnapshotsRoute,
  getBehaviorsFoldersPathRoute,
  getBehaviorsIdRoute,
  getBehaviorsRoute,
  getBundleDownloadsRoute,
  getBundleNotificationsIdRoute,
  getBundleNotificationsRoute,
  getBundleRecipientsRoute,
  getBundleRegistrationsRoute,
  getBundlesIdRoute,
  getBundlesRoute,
  getClickwrapsIdRoute,
  getClickwrapsRoute,
  getDnsRecordsRoute,
  getExternalEventsIdRoute,
  getExternalEventsRoute,
  getFileActionsMetadataPathRoute,
  getFileCommentsFilesPathRoute,
  getFileMigrationsIdRoute,
  getFilesPathRoute,
  getFoldersPathRoute,
  getFormFieldSetsIdRoute,
  getFormFieldSetsRoute,
  getGroupsGroupIdPermissionsRoute,
  getGroupsGroupIdUsersRoute,
  getGroupsIdRoute,
  getGroupsRoute,
  getGroupUsersRoute,
  getHistoryExportResultsRoute,
  getHistoryExportsIdRoute,
  getHistoryFilesPathRoute,
  getHistoryFoldersPathRoute,
  getHistoryLoginRoute,
  getHistoryRoute,
  getHistoryUsersUserIdRoute,
  getInboxRecipientsRoute,
  getInboxRegistrationsRoute,
  getInboxUploadsRoute,
  getInvoicesIdRoute,
  getInvoicesRoute,
  getIpAddressesExavaultReservedRoute,
  getIpAddressesReservedRoute,
  getIpAddressesRoute,
  getLocksPathRoute,
  getMessageCommentReactionsIdRoute,
  getMessageCommentReactionsRoute,
  getMessageCommentsIdRoute,
  getMessageCommentsRoute,
  getMessageReactionsIdRoute,
  getMessageReactionsRoute,
  getMessagesIdRoute,
  getMessagesRoute,
  getNotificationsIdRoute,
  getNotificationsRoute,
  getPaymentsIdRoute,
  getPaymentsRoute,
  getPermissionsRoute,
  getPrioritiesRoute,
  getProjectsIdRoute,
  getProjectsRoute,
  getPublicKeysIdRoute,
  getPublicKeysRoute,
  getRemoteBandwidthSnapshotsRoute,
  getRemoteServersIdConfigurationFileRoute,
  getRemoteServersIdRoute,
  getRemoteServersRoute,
  getRequestsFoldersPathRoute,
  getRequestsRoute,
  getSettingsChangesRoute,
  getSftpHostKeysIdRoute,
  getSftpHostKeysRoute,
  getSiteApiKeysRoute,
  getSiteDnsRecordsRoute,
  getSiteIpAddressesRoute,
  getSiteRoute,
  getSiteUsageRoute,
  getSsoStrategiesIdRoute,
  getSsoStrategiesRoute,
  getStylesPathRoute,
  getUsageDailySnapshotsRoute,
  getUsageSnapshotsRoute,
  getUserApiKeysRoute,
  getUserCipherUsesRoute,
  getUserGroupsRoute,
  getUserPublicKeysRoute,
  getUserRequestsIdRoute,
  getUserRequestsRoute,
  getUsersIdRoute,
  getUsersRoute,
  getUsersUserIdApiKeysRoute,
  getUsersUserIdCipherUsesRoute,
  getUsersUserIdGroupsRoute,
  getUsersUserIdPermissionsRoute,
  getUsersUserIdPublicKeysRoute,
  patchApiKeyRoute,
  patchApiKeysIdRoute,
  patchAs2PartnersIdRoute,
  patchAs2StationsIdRoute,
  patchAutomationsIdRoute,
  patchBehaviorsIdRoute,
  patchBundleNotificationsIdRoute,
  patchBundlesIdRoute,
  patchClickwrapsIdRoute,
  patchFileCommentsIdRoute,
  patchFilesPathRoute,
  patchFormFieldSetsIdRoute,
  patchGroupsGroupIdMembershipsUserIdRoute,
  patchGroupsIdRoute,
  patchGroupUsersIdRoute,
  patchMessageCommentsIdRoute,
  patchMessagesIdRoute,
  patchNotificationsIdRoute,
  patchProjectsIdRoute,
  patchPublicKeysIdRoute,
  patchRemoteServersIdRoute,
  patchSftpHostKeysIdRoute,
  patchSiteRoute,
  patchStylesPathRoute,
  patchUserRoute,
  patchUsersIdRoute,
  postActionNotificationExportsRoute,
  postActionWebhookFailuresIdRetryRoute,
  postApiKeysRoute,
  postAs2PartnersRoute,
  postAs2StationsRoute,
  postAutomationsRoute,
  postBehaviorsRoute,
  postBehaviorsWebhookTestRoute,
  postBundleNotificationsRoute,
  postBundleRecipientsRoute,
  postBundlesIdShareRoute,
  postBundlesRoute,
  postClickwrapsRoute,
  postExternalEventsRoute,
  postFileActionsBeginUploadPathRoute,
  postFileActionsCopyPathRoute,
  postFileActionsMovePathRoute,
  postFileCommentReactionsRoute,
  postFileCommentsRoute,
  postFilesPathRoute,
  postFoldersPathRoute,
  postFormFieldSetsRoute,
  postGroupsGroupIdUsersRoute,
  postGroupsRoute,
  postGroupUsersRoute,
  postHistoryExportsRoute,
  postInboxRecipientsRoute,
  postLocksPathRoute,
  postMessageCommentReactionsRoute,
  postMessageCommentsRoute,
  postMessageReactionsRoute,
  postMessagesRoute,
  postNotificationsRoute,
  postPermissionsRoute,
  postProjectsRoute,
  postPublicKeysRoute,
  postRemoteServersIdConfigurationFileRoute,
  postRemoteServersRoute,
  postRequestsRoute,
  postSessionsRoute,
  postSftpHostKeysRoute,
  postSiteApiKeysRoute,
  postSiteTestWebhookRoute,
  postSsoStrategiesIdSyncRoute,
  postUserApiKeysRoute,
  postUserPublicKeysRoute,
  postUserRequestsRoute,
  postUsersId2faResetRoute,
  postUsersIdResendWelcomeEmailRoute,
  postUsersIdUnlockRoute,
  postUsersRoute,
  postUsersUserIdApiKeysRoute,
  postUsersUserIdPublicKeysRoute,
  postWebhookTestsRoute,
} from './routes'
import {
  deleteApiKeyRouteHandler,
  deleteApiKeysIdRouteHandler,
  deleteAs2PartnersIdRouteHandler,
  deleteAs2StationsIdRouteHandler,
  deleteAutomationsIdRouteHandler,
  deleteBehaviorsIdRouteHandler,
  deleteBundleNotificationsIdRouteHandler,
  deleteBundlesIdRouteHandler,
  deleteClickwrapsIdRouteHandler,
  deleteFileCommentReactionsIdRouteHandler,
  deleteFileCommentsIdRouteHandler,
  deleteFilesPathRouteHandler,
  deleteFormFieldSetsIdRouteHandler,
  deleteGroupsGroupIdMembershipsUserIdRouteHandler,
  deleteGroupsIdRouteHandler,
  deleteGroupUsersIdRouteHandler,
  deleteLocksPathRouteHandler,
  deleteMessageCommentReactionsIdRouteHandler,
  deleteMessageCommentsIdRouteHandler,
  deleteMessageReactionsIdRouteHandler,
  deleteMessagesIdRouteHandler,
  deleteNotificationsIdRouteHandler,
  deletePermissionsIdRouteHandler,
  deleteProjectsIdRouteHandler,
  deletePublicKeysIdRouteHandler,
  deleteRemoteServersIdRouteHandler,
  deleteRequestsIdRouteHandler,
  deleteSessionsRouteHandler,
  deleteSftpHostKeysIdRouteHandler,
  deleteStylesPathRouteHandler,
  deleteUserRequestsIdRouteHandler,
  deleteUsersIdRouteHandler,
  getActionNotificationExportResultsRouteHandler,
  getActionNotificationExportsIdRouteHandler,
  getApiKeyRouteHandler,
  getApiKeysIdRouteHandler,
  getApiKeysRouteHandler,
  getAppsRouteHandler,
  getAs2IncomingMessagesRouteHandler,
  getAs2OutgoingMessagesRouteHandler,
  getAs2PartnersIdRouteHandler,
  getAs2PartnersRouteHandler,
  getAs2StationsIdRouteHandler,
  getAs2StationsRouteHandler,
  getAutomationRunsIdRouteHandler,
  getAutomationRunsRouteHandler,
  getAutomationsIdRouteHandler,
  getAutomationsRouteHandler,
  getBandwidthSnapshotsRouteHandler,
  getBehaviorsFoldersPathRouteHandler,
  getBehaviorsIdRouteHandler,
  getBehaviorsRouteHandler,
  getBundleDownloadsRouteHandler,
  getBundleNotificationsIdRouteHandler,
  getBundleNotificationsRouteHandler,
  getBundleRecipientsRouteHandler,
  getBundleRegistrationsRouteHandler,
  getBundlesIdRouteHandler,
  getBundlesRouteHandler,
  getClickwrapsIdRouteHandler,
  getClickwrapsRouteHandler,
  getDnsRecordsRouteHandler,
  getExternalEventsIdRouteHandler,
  getExternalEventsRouteHandler,
  getFileActionsMetadataPathRouteHandler,
  getFileCommentsFilesPathRouteHandler,
  getFileMigrationsIdRouteHandler,
  getFilesPathRouteHandler,
  getFoldersPathRouteHandler,
  getFormFieldSetsIdRouteHandler,
  getFormFieldSetsRouteHandler,
  getGroupsGroupIdPermissionsRouteHandler,
  getGroupsGroupIdUsersRouteHandler,
  getGroupsIdRouteHandler,
  getGroupsRouteHandler,
  getGroupUsersRouteHandler,
  getHistoryExportResultsRouteHandler,
  getHistoryExportsIdRouteHandler,
  getHistoryFilesPathRouteHandler,
  getHistoryFoldersPathRouteHandler,
  getHistoryLoginRouteHandler,
  getHistoryRouteHandler,
  getHistoryUsersUserIdRouteHandler,
  getInboxRecipientsRouteHandler,
  getInboxRegistrationsRouteHandler,
  getInboxUploadsRouteHandler,
  getInvoicesIdRouteHandler,
  getInvoicesRouteHandler,
  getIpAddressesExavaultReservedRouteHandler,
  getIpAddressesReservedRouteHandler,
  getIpAddressesRouteHandler,
  getLocksPathRouteHandler,
  getMessageCommentReactionsIdRouteHandler,
  getMessageCommentReactionsRouteHandler,
  getMessageCommentsIdRouteHandler,
  getMessageCommentsRouteHandler,
  getMessageReactionsIdRouteHandler,
  getMessageReactionsRouteHandler,
  getMessagesIdRouteHandler,
  getMessagesRouteHandler,
  getNotificationsIdRouteHandler,
  getNotificationsRouteHandler,
  getPaymentsIdRouteHandler,
  getPaymentsRouteHandler,
  getPermissionsRouteHandler,
  getPrioritiesRouteHandler,
  getProjectsIdRouteHandler,
  getProjectsRouteHandler,
  getPublicKeysIdRouteHandler,
  getPublicKeysRouteHandler,
  getRemoteBandwidthSnapshotsRouteHandler,
  getRemoteServersIdConfigurationFileRouteHandler,
  getRemoteServersIdRouteHandler,
  getRemoteServersRouteHandler,
  getRequestsFoldersPathRouteHandler,
  getRequestsRouteHandler,
  getSettingsChangesRouteHandler,
  getSftpHostKeysIdRouteHandler,
  getSftpHostKeysRouteHandler,
  getSiteApiKeysRouteHandler,
  getSiteDnsRecordsRouteHandler,
  getSiteIpAddressesRouteHandler,
  getSiteRouteHandler,
  getSiteUsageRouteHandler,
  getSsoStrategiesIdRouteHandler,
  getSsoStrategiesRouteHandler,
  getStylesPathRouteHandler,
  getUsageDailySnapshotsRouteHandler,
  getUsageSnapshotsRouteHandler,
  getUserApiKeysRouteHandler,
  getUserCipherUsesRouteHandler,
  getUserGroupsRouteHandler,
  getUserPublicKeysRouteHandler,
  getUserRequestsIdRouteHandler,
  getUserRequestsRouteHandler,
  getUsersIdRouteHandler,
  getUsersRouteHandler,
  getUsersUserIdApiKeysRouteHandler,
  getUsersUserIdCipherUsesRouteHandler,
  getUsersUserIdGroupsRouteHandler,
  getUsersUserIdPermissionsRouteHandler,
  getUsersUserIdPublicKeysRouteHandler,
  patchApiKeyRouteHandler,
  patchApiKeysIdRouteHandler,
  patchAs2PartnersIdRouteHandler,
  patchAs2StationsIdRouteHandler,
  patchAutomationsIdRouteHandler,
  patchBehaviorsIdRouteHandler,
  patchBundleNotificationsIdRouteHandler,
  patchBundlesIdRouteHandler,
  patchClickwrapsIdRouteHandler,
  patchFileCommentsIdRouteHandler,
  patchFilesPathRouteHandler,
  patchFormFieldSetsIdRouteHandler,
  patchGroupsGroupIdMembershipsUserIdRouteHandler,
  patchGroupsIdRouteHandler,
  patchGroupUsersIdRouteHandler,
  patchMessageCommentsIdRouteHandler,
  patchMessagesIdRouteHandler,
  patchNotificationsIdRouteHandler,
  patchProjectsIdRouteHandler,
  patchPublicKeysIdRouteHandler,
  patchRemoteServersIdRouteHandler,
  patchSftpHostKeysIdRouteHandler,
  patchSiteRouteHandler,
  patchStylesPathRouteHandler,
  patchUserRouteHandler,
  patchUsersIdRouteHandler,
  postActionNotificationExportsRouteHandler,
  postActionWebhookFailuresIdRetryRouteHandler,
  postApiKeysRouteHandler,
  postAs2PartnersRouteHandler,
  postAs2StationsRouteHandler,
  postAutomationsRouteHandler,
  postBehaviorsRouteHandler,
  postBehaviorsWebhookTestRouteHandler,
  postBundleNotificationsRouteHandler,
  postBundleRecipientsRouteHandler,
  postBundlesIdShareRouteHandler,
  postBundlesRouteHandler,
  postClickwrapsRouteHandler,
  postExternalEventsRouteHandler,
  postFileActionsBeginUploadPathRouteHandler,
  postFileActionsCopyPathRouteHandler,
  postFileActionsMovePathRouteHandler,
  postFileCommentReactionsRouteHandler,
  postFileCommentsRouteHandler,
  postFilesPathRouteHandler,
  postFoldersPathRouteHandler,
  postFormFieldSetsRouteHandler,
  postGroupsGroupIdUsersRouteHandler,
  postGroupsRouteHandler,
  postGroupUsersRouteHandler,
  postHistoryExportsRouteHandler,
  postInboxRecipientsRouteHandler,
  postLocksPathRouteHandler,
  postMessageCommentReactionsRouteHandler,
  postMessageCommentsRouteHandler,
  postMessageReactionsRouteHandler,
  postMessagesRouteHandler,
  postNotificationsRouteHandler,
  postPermissionsRouteHandler,
  postProjectsRouteHandler,
  postPublicKeysRouteHandler,
  postRemoteServersIdConfigurationFileRouteHandler,
  postRemoteServersRouteHandler,
  postRequestsRouteHandler,
  postSessionsRouteHandler,
  postSftpHostKeysRouteHandler,
  postSiteApiKeysRouteHandler,
  postSiteTestWebhookRouteHandler,
  postSsoStrategiesIdSyncRouteHandler,
  postUserApiKeysRouteHandler,
  postUserPublicKeysRouteHandler,
  postUserRequestsRouteHandler,
  postUsersId2faResetRouteHandler,
  postUsersIdResendWelcomeEmailRouteHandler,
  postUsersIdUnlockRouteHandler,
  postUsersRouteHandler,
  postUsersUserIdApiKeysRouteHandler,
  postUsersUserIdPublicKeysRouteHandler,
  postWebhookTestsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActionNotificationExportResultsRoute, getActionNotificationExportResultsRouteHandler)
  .openapi(postActionNotificationExportsRoute, postActionNotificationExportsRouteHandler)
  .openapi(getActionNotificationExportsIdRoute, getActionNotificationExportsIdRouteHandler)
  .openapi(postActionWebhookFailuresIdRetryRoute, postActionWebhookFailuresIdRetryRouteHandler)
  .openapi(deleteApiKeyRoute, deleteApiKeyRouteHandler)
  .openapi(getApiKeyRoute, getApiKeyRouteHandler)
  .openapi(patchApiKeyRoute, patchApiKeyRouteHandler)
  .openapi(getApiKeysRoute, getApiKeysRouteHandler)
  .openapi(postApiKeysRoute, postApiKeysRouteHandler)
  .openapi(deleteApiKeysIdRoute, deleteApiKeysIdRouteHandler)
  .openapi(getApiKeysIdRoute, getApiKeysIdRouteHandler)
  .openapi(patchApiKeysIdRoute, patchApiKeysIdRouteHandler)
  .openapi(getAppsRoute, getAppsRouteHandler)
  .openapi(getAs2IncomingMessagesRoute, getAs2IncomingMessagesRouteHandler)
  .openapi(getAs2OutgoingMessagesRoute, getAs2OutgoingMessagesRouteHandler)
  .openapi(getAs2PartnersRoute, getAs2PartnersRouteHandler)
  .openapi(postAs2PartnersRoute, postAs2PartnersRouteHandler)
  .openapi(deleteAs2PartnersIdRoute, deleteAs2PartnersIdRouteHandler)
  .openapi(getAs2PartnersIdRoute, getAs2PartnersIdRouteHandler)
  .openapi(patchAs2PartnersIdRoute, patchAs2PartnersIdRouteHandler)
  .openapi(getAs2StationsRoute, getAs2StationsRouteHandler)
  .openapi(postAs2StationsRoute, postAs2StationsRouteHandler)
  .openapi(deleteAs2StationsIdRoute, deleteAs2StationsIdRouteHandler)
  .openapi(getAs2StationsIdRoute, getAs2StationsIdRouteHandler)
  .openapi(patchAs2StationsIdRoute, patchAs2StationsIdRouteHandler)
  .openapi(getAutomationRunsRoute, getAutomationRunsRouteHandler)
  .openapi(getAutomationRunsIdRoute, getAutomationRunsIdRouteHandler)
  .openapi(getAutomationsRoute, getAutomationsRouteHandler)
  .openapi(postAutomationsRoute, postAutomationsRouteHandler)
  .openapi(deleteAutomationsIdRoute, deleteAutomationsIdRouteHandler)
  .openapi(getAutomationsIdRoute, getAutomationsIdRouteHandler)
  .openapi(patchAutomationsIdRoute, patchAutomationsIdRouteHandler)
  .openapi(getBandwidthSnapshotsRoute, getBandwidthSnapshotsRouteHandler)
  .openapi(getBehaviorsRoute, getBehaviorsRouteHandler)
  .openapi(postBehaviorsRoute, postBehaviorsRouteHandler)
  .openapi(getBehaviorsFoldersPathRoute, getBehaviorsFoldersPathRouteHandler)
  .openapi(postBehaviorsWebhookTestRoute, postBehaviorsWebhookTestRouteHandler)
  .openapi(deleteBehaviorsIdRoute, deleteBehaviorsIdRouteHandler)
  .openapi(getBehaviorsIdRoute, getBehaviorsIdRouteHandler)
  .openapi(patchBehaviorsIdRoute, patchBehaviorsIdRouteHandler)
  .openapi(getBundleDownloadsRoute, getBundleDownloadsRouteHandler)
  .openapi(getBundleNotificationsRoute, getBundleNotificationsRouteHandler)
  .openapi(postBundleNotificationsRoute, postBundleNotificationsRouteHandler)
  .openapi(deleteBundleNotificationsIdRoute, deleteBundleNotificationsIdRouteHandler)
  .openapi(getBundleNotificationsIdRoute, getBundleNotificationsIdRouteHandler)
  .openapi(patchBundleNotificationsIdRoute, patchBundleNotificationsIdRouteHandler)
  .openapi(getBundleRecipientsRoute, getBundleRecipientsRouteHandler)
  .openapi(postBundleRecipientsRoute, postBundleRecipientsRouteHandler)
  .openapi(getBundleRegistrationsRoute, getBundleRegistrationsRouteHandler)
  .openapi(getBundlesRoute, getBundlesRouteHandler)
  .openapi(postBundlesRoute, postBundlesRouteHandler)
  .openapi(deleteBundlesIdRoute, deleteBundlesIdRouteHandler)
  .openapi(getBundlesIdRoute, getBundlesIdRouteHandler)
  .openapi(patchBundlesIdRoute, patchBundlesIdRouteHandler)
  .openapi(postBundlesIdShareRoute, postBundlesIdShareRouteHandler)
  .openapi(getClickwrapsRoute, getClickwrapsRouteHandler)
  .openapi(postClickwrapsRoute, postClickwrapsRouteHandler)
  .openapi(deleteClickwrapsIdRoute, deleteClickwrapsIdRouteHandler)
  .openapi(getClickwrapsIdRoute, getClickwrapsIdRouteHandler)
  .openapi(patchClickwrapsIdRoute, patchClickwrapsIdRouteHandler)
  .openapi(getDnsRecordsRoute, getDnsRecordsRouteHandler)
  .openapi(getExternalEventsRoute, getExternalEventsRouteHandler)
  .openapi(postExternalEventsRoute, postExternalEventsRouteHandler)
  .openapi(getExternalEventsIdRoute, getExternalEventsIdRouteHandler)
  .openapi(postFileActionsBeginUploadPathRoute, postFileActionsBeginUploadPathRouteHandler)
  .openapi(postFileActionsCopyPathRoute, postFileActionsCopyPathRouteHandler)
  .openapi(getFileActionsMetadataPathRoute, getFileActionsMetadataPathRouteHandler)
  .openapi(postFileActionsMovePathRoute, postFileActionsMovePathRouteHandler)
  .openapi(postFileCommentReactionsRoute, postFileCommentReactionsRouteHandler)
  .openapi(deleteFileCommentReactionsIdRoute, deleteFileCommentReactionsIdRouteHandler)
  .openapi(postFileCommentsRoute, postFileCommentsRouteHandler)
  .openapi(getFileCommentsFilesPathRoute, getFileCommentsFilesPathRouteHandler)
  .openapi(deleteFileCommentsIdRoute, deleteFileCommentsIdRouteHandler)
  .openapi(patchFileCommentsIdRoute, patchFileCommentsIdRouteHandler)
  .openapi(getFileMigrationsIdRoute, getFileMigrationsIdRouteHandler)
  .openapi(deleteFilesPathRoute, deleteFilesPathRouteHandler)
  .openapi(getFilesPathRoute, getFilesPathRouteHandler)
  .openapi(patchFilesPathRoute, patchFilesPathRouteHandler)
  .openapi(postFilesPathRoute, postFilesPathRouteHandler)
  .openapi(getFoldersPathRoute, getFoldersPathRouteHandler)
  .openapi(postFoldersPathRoute, postFoldersPathRouteHandler)
  .openapi(getFormFieldSetsRoute, getFormFieldSetsRouteHandler)
  .openapi(postFormFieldSetsRoute, postFormFieldSetsRouteHandler)
  .openapi(deleteFormFieldSetsIdRoute, deleteFormFieldSetsIdRouteHandler)
  .openapi(getFormFieldSetsIdRoute, getFormFieldSetsIdRouteHandler)
  .openapi(patchFormFieldSetsIdRoute, patchFormFieldSetsIdRouteHandler)
  .openapi(getGroupUsersRoute, getGroupUsersRouteHandler)
  .openapi(postGroupUsersRoute, postGroupUsersRouteHandler)
  .openapi(deleteGroupUsersIdRoute, deleteGroupUsersIdRouteHandler)
  .openapi(patchGroupUsersIdRoute, patchGroupUsersIdRouteHandler)
  .openapi(getGroupsRoute, getGroupsRouteHandler)
  .openapi(postGroupsRoute, postGroupsRouteHandler)
  .openapi(
    deleteGroupsGroupIdMembershipsUserIdRoute,
    deleteGroupsGroupIdMembershipsUserIdRouteHandler,
  )
  .openapi(
    patchGroupsGroupIdMembershipsUserIdRoute,
    patchGroupsGroupIdMembershipsUserIdRouteHandler,
  )
  .openapi(getGroupsGroupIdPermissionsRoute, getGroupsGroupIdPermissionsRouteHandler)
  .openapi(getGroupsGroupIdUsersRoute, getGroupsGroupIdUsersRouteHandler)
  .openapi(postGroupsGroupIdUsersRoute, postGroupsGroupIdUsersRouteHandler)
  .openapi(deleteGroupsIdRoute, deleteGroupsIdRouteHandler)
  .openapi(getGroupsIdRoute, getGroupsIdRouteHandler)
  .openapi(patchGroupsIdRoute, patchGroupsIdRouteHandler)
  .openapi(getHistoryRoute, getHistoryRouteHandler)
  .openapi(getHistoryFilesPathRoute, getHistoryFilesPathRouteHandler)
  .openapi(getHistoryFoldersPathRoute, getHistoryFoldersPathRouteHandler)
  .openapi(getHistoryLoginRoute, getHistoryLoginRouteHandler)
  .openapi(getHistoryUsersUserIdRoute, getHistoryUsersUserIdRouteHandler)
  .openapi(getHistoryExportResultsRoute, getHistoryExportResultsRouteHandler)
  .openapi(postHistoryExportsRoute, postHistoryExportsRouteHandler)
  .openapi(getHistoryExportsIdRoute, getHistoryExportsIdRouteHandler)
  .openapi(getInboxRecipientsRoute, getInboxRecipientsRouteHandler)
  .openapi(postInboxRecipientsRoute, postInboxRecipientsRouteHandler)
  .openapi(getInboxRegistrationsRoute, getInboxRegistrationsRouteHandler)
  .openapi(getInboxUploadsRoute, getInboxUploadsRouteHandler)
  .openapi(getInvoicesRoute, getInvoicesRouteHandler)
  .openapi(getInvoicesIdRoute, getInvoicesIdRouteHandler)
  .openapi(getIpAddressesRoute, getIpAddressesRouteHandler)
  .openapi(getIpAddressesExavaultReservedRoute, getIpAddressesExavaultReservedRouteHandler)
  .openapi(getIpAddressesReservedRoute, getIpAddressesReservedRouteHandler)
  .openapi(deleteLocksPathRoute, deleteLocksPathRouteHandler)
  .openapi(getLocksPathRoute, getLocksPathRouteHandler)
  .openapi(postLocksPathRoute, postLocksPathRouteHandler)
  .openapi(getMessageCommentReactionsRoute, getMessageCommentReactionsRouteHandler)
  .openapi(postMessageCommentReactionsRoute, postMessageCommentReactionsRouteHandler)
  .openapi(deleteMessageCommentReactionsIdRoute, deleteMessageCommentReactionsIdRouteHandler)
  .openapi(getMessageCommentReactionsIdRoute, getMessageCommentReactionsIdRouteHandler)
  .openapi(getMessageCommentsRoute, getMessageCommentsRouteHandler)
  .openapi(postMessageCommentsRoute, postMessageCommentsRouteHandler)
  .openapi(deleteMessageCommentsIdRoute, deleteMessageCommentsIdRouteHandler)
  .openapi(getMessageCommentsIdRoute, getMessageCommentsIdRouteHandler)
  .openapi(patchMessageCommentsIdRoute, patchMessageCommentsIdRouteHandler)
  .openapi(getMessageReactionsRoute, getMessageReactionsRouteHandler)
  .openapi(postMessageReactionsRoute, postMessageReactionsRouteHandler)
  .openapi(deleteMessageReactionsIdRoute, deleteMessageReactionsIdRouteHandler)
  .openapi(getMessageReactionsIdRoute, getMessageReactionsIdRouteHandler)
  .openapi(getMessagesRoute, getMessagesRouteHandler)
  .openapi(postMessagesRoute, postMessagesRouteHandler)
  .openapi(deleteMessagesIdRoute, deleteMessagesIdRouteHandler)
  .openapi(getMessagesIdRoute, getMessagesIdRouteHandler)
  .openapi(patchMessagesIdRoute, patchMessagesIdRouteHandler)
  .openapi(getNotificationsRoute, getNotificationsRouteHandler)
  .openapi(postNotificationsRoute, postNotificationsRouteHandler)
  .openapi(deleteNotificationsIdRoute, deleteNotificationsIdRouteHandler)
  .openapi(getNotificationsIdRoute, getNotificationsIdRouteHandler)
  .openapi(patchNotificationsIdRoute, patchNotificationsIdRouteHandler)
  .openapi(getPaymentsRoute, getPaymentsRouteHandler)
  .openapi(getPaymentsIdRoute, getPaymentsIdRouteHandler)
  .openapi(getPermissionsRoute, getPermissionsRouteHandler)
  .openapi(postPermissionsRoute, postPermissionsRouteHandler)
  .openapi(deletePermissionsIdRoute, deletePermissionsIdRouteHandler)
  .openapi(getPrioritiesRoute, getPrioritiesRouteHandler)
  .openapi(getProjectsRoute, getProjectsRouteHandler)
  .openapi(postProjectsRoute, postProjectsRouteHandler)
  .openapi(deleteProjectsIdRoute, deleteProjectsIdRouteHandler)
  .openapi(getProjectsIdRoute, getProjectsIdRouteHandler)
  .openapi(patchProjectsIdRoute, patchProjectsIdRouteHandler)
  .openapi(getPublicKeysRoute, getPublicKeysRouteHandler)
  .openapi(postPublicKeysRoute, postPublicKeysRouteHandler)
  .openapi(deletePublicKeysIdRoute, deletePublicKeysIdRouteHandler)
  .openapi(getPublicKeysIdRoute, getPublicKeysIdRouteHandler)
  .openapi(patchPublicKeysIdRoute, patchPublicKeysIdRouteHandler)
  .openapi(getRemoteBandwidthSnapshotsRoute, getRemoteBandwidthSnapshotsRouteHandler)
  .openapi(getRemoteServersRoute, getRemoteServersRouteHandler)
  .openapi(postRemoteServersRoute, postRemoteServersRouteHandler)
  .openapi(deleteRemoteServersIdRoute, deleteRemoteServersIdRouteHandler)
  .openapi(getRemoteServersIdRoute, getRemoteServersIdRouteHandler)
  .openapi(patchRemoteServersIdRoute, patchRemoteServersIdRouteHandler)
  .openapi(
    getRemoteServersIdConfigurationFileRoute,
    getRemoteServersIdConfigurationFileRouteHandler,
  )
  .openapi(
    postRemoteServersIdConfigurationFileRoute,
    postRemoteServersIdConfigurationFileRouteHandler,
  )
  .openapi(getRequestsRoute, getRequestsRouteHandler)
  .openapi(postRequestsRoute, postRequestsRouteHandler)
  .openapi(getRequestsFoldersPathRoute, getRequestsFoldersPathRouteHandler)
  .openapi(deleteRequestsIdRoute, deleteRequestsIdRouteHandler)
  .openapi(deleteSessionsRoute, deleteSessionsRouteHandler)
  .openapi(postSessionsRoute, postSessionsRouteHandler)
  .openapi(getSettingsChangesRoute, getSettingsChangesRouteHandler)
  .openapi(getSftpHostKeysRoute, getSftpHostKeysRouteHandler)
  .openapi(postSftpHostKeysRoute, postSftpHostKeysRouteHandler)
  .openapi(deleteSftpHostKeysIdRoute, deleteSftpHostKeysIdRouteHandler)
  .openapi(getSftpHostKeysIdRoute, getSftpHostKeysIdRouteHandler)
  .openapi(patchSftpHostKeysIdRoute, patchSftpHostKeysIdRouteHandler)
  .openapi(getSiteRoute, getSiteRouteHandler)
  .openapi(patchSiteRoute, patchSiteRouteHandler)
  .openapi(getSiteApiKeysRoute, getSiteApiKeysRouteHandler)
  .openapi(postSiteApiKeysRoute, postSiteApiKeysRouteHandler)
  .openapi(getSiteDnsRecordsRoute, getSiteDnsRecordsRouteHandler)
  .openapi(getSiteIpAddressesRoute, getSiteIpAddressesRouteHandler)
  .openapi(postSiteTestWebhookRoute, postSiteTestWebhookRouteHandler)
  .openapi(getSiteUsageRoute, getSiteUsageRouteHandler)
  .openapi(getSsoStrategiesRoute, getSsoStrategiesRouteHandler)
  .openapi(getSsoStrategiesIdRoute, getSsoStrategiesIdRouteHandler)
  .openapi(postSsoStrategiesIdSyncRoute, postSsoStrategiesIdSyncRouteHandler)
  .openapi(deleteStylesPathRoute, deleteStylesPathRouteHandler)
  .openapi(getStylesPathRoute, getStylesPathRouteHandler)
  .openapi(patchStylesPathRoute, patchStylesPathRouteHandler)
  .openapi(getUsageDailySnapshotsRoute, getUsageDailySnapshotsRouteHandler)
  .openapi(getUsageSnapshotsRoute, getUsageSnapshotsRouteHandler)
  .openapi(patchUserRoute, patchUserRouteHandler)
  .openapi(getUserApiKeysRoute, getUserApiKeysRouteHandler)
  .openapi(postUserApiKeysRoute, postUserApiKeysRouteHandler)
  .openapi(getUserGroupsRoute, getUserGroupsRouteHandler)
  .openapi(getUserPublicKeysRoute, getUserPublicKeysRouteHandler)
  .openapi(postUserPublicKeysRoute, postUserPublicKeysRouteHandler)
  .openapi(getUserCipherUsesRoute, getUserCipherUsesRouteHandler)
  .openapi(getUserRequestsRoute, getUserRequestsRouteHandler)
  .openapi(postUserRequestsRoute, postUserRequestsRouteHandler)
  .openapi(deleteUserRequestsIdRoute, deleteUserRequestsIdRouteHandler)
  .openapi(getUserRequestsIdRoute, getUserRequestsIdRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(deleteUsersIdRoute, deleteUsersIdRouteHandler)
  .openapi(getUsersIdRoute, getUsersIdRouteHandler)
  .openapi(patchUsersIdRoute, patchUsersIdRouteHandler)
  .openapi(postUsersId2faResetRoute, postUsersId2faResetRouteHandler)
  .openapi(postUsersIdResendWelcomeEmailRoute, postUsersIdResendWelcomeEmailRouteHandler)
  .openapi(postUsersIdUnlockRoute, postUsersIdUnlockRouteHandler)
  .openapi(getUsersUserIdApiKeysRoute, getUsersUserIdApiKeysRouteHandler)
  .openapi(postUsersUserIdApiKeysRoute, postUsersUserIdApiKeysRouteHandler)
  .openapi(getUsersUserIdCipherUsesRoute, getUsersUserIdCipherUsesRouteHandler)
  .openapi(getUsersUserIdGroupsRoute, getUsersUserIdGroupsRouteHandler)
  .openapi(getUsersUserIdPermissionsRoute, getUsersUserIdPermissionsRouteHandler)
  .openapi(getUsersUserIdPublicKeysRoute, getUsersUserIdPublicKeysRouteHandler)
  .openapi(postUsersUserIdPublicKeysRoute, postUsersUserIdPublicKeysRouteHandler)
  .openapi(postWebhookTestsRoute, postWebhookTestsRouteHandler)

export default app
