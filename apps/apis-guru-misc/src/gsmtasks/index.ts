import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountRolesIdIndexRoute,
  deleteAccountsIdManagersIndexRoute,
  deleteAccountsIdWorkersIndexRoute,
  deleteDocumentsIdIndexRoute,
  deleteEmailsIdIndexRoute,
  deleteExportsIdIndexRoute,
  deleteFormrulesIdIndexRoute,
  deleteMetafieldsIdIndexRoute,
  deleteNotificationTemplatesIdIndexRoute,
  deletePushNotificationsIdIndexRoute,
  deleteRoutesIdIndexRoute,
  deleteSignaturesIdIndexRoute,
  deleteSmsIdIndexRoute,
  deleteTaskFormsIdIndexRoute,
  deleteTimeLocationFeaturesIdIndexRoute,
  deleteUsersIdIndexRoute,
  deleteUsersIdOnDutyIndexRoute,
  deleteWebhooksIdIndexRoute,
  getAccountRolesIdIndexRoute,
  getAccountRolesIdTokenIndexRoute,
  getAccountRolesIndexRoute,
  getAccountsIdBraintreeCustomerIndexRoute,
  getAccountsIdIndexRoute,
  getAccountsIdManagersIndexRoute,
  getAccountsIdStripeGetPaymentMethodIndexRoute,
  getAccountsIdStripeGetSetupAttemptIndexRoute,
  getAccountsIdStripeGetSetupIntentIndexRoute,
  getAccountsIdStripePaymentMethodsIndexRoute,
  getAccountsIdStripeSetupIntentsIndexRoute,
  getAccountsIdWorkersIndexRoute,
  getAccountsIndexRoute,
  getAddonsIdIndexRoute,
  getAddonsIndexRoute,
  getBillingCustomersIdClientTokenIndexRoute,
  getBillingCustomersIdIndexRoute,
  getBillingCustomersIndexRoute,
  getBillingInvoicesIdIndexRoute,
  getBillingInvoicesIndexRoute,
  getBillingStripePaymentsIdIndexRoute,
  getBillingStripePaymentsIndexRoute,
  getBillingTransactionsIdIndexRoute,
  getBillingTransactionsIndexRoute,
  getClientRolesIdIndexRoute,
  getClientRolesIndexRoute,
  getClientsIdIndexRoute,
  getClientsIndexRoute,
  getConfigurationsIndexRoute,
  getContactAddressesIdIndexRoute,
  getContactAddressesIndexRoute,
  getContactAddressExportsIndexRoute,
  getContactAddressImportIdIndexRoute,
  getContactAddressImportIndexRoute,
  getDevicesIdIndexRoute,
  getDevicesIndexRoute,
  getDocsSchemaIndexRoute,
  getDocumentsIdIndexRoute,
  getDocumentsIndexRoute,
  getEmailsIdIndexRoute,
  getEmailsIndexRoute,
  getExportsIdIndexRoute,
  getExportsIndexRoute,
  getFileUploadsIdIndexRoute,
  getFileUploadsIndexRoute,
  getFormrulesIdIndexRoute,
  getFormrulesIndexRoute,
  getMetafieldsIdIndexRoute,
  getMetafieldsIndexRoute,
  getNotificationsIdIndexRoute,
  getNotificationsIndexRoute,
  getNotificationTemplatesIdIndexRoute,
  getNotificationTemplatesIndexRoute,
  getOrdersIdIndexRoute,
  getOrdersIndexRoute,
  getPushNotificationsIdIndexRoute,
  getPushNotificationsIndexRoute,
  getRecurrencesIdIndexRoute,
  getRecurrencesIndexRoute,
  getReportsTasksStatesCountIndexRoute,
  getReviewsIdIndexRoute,
  getReviewsIndexRoute,
  getRouteOptimizationsIdIndexRoute,
  getRouteOptimizationsIdResultsIndexRoute,
  getRouteOptimizationsIdRoutesIndexRoute,
  getRouteOptimizationsIndexRoute,
  getRoutesIdIndexRoute,
  getRoutesIndexRoute,
  getScenesDashboardIndexRoute,
  getScenesOrderListIndexRoute,
  getScenesRecurrenceListIndexRoute,
  getScenesTaskListIndexRoute,
  getSignaturesIdIndexRoute,
  getSignaturesIndexRoute,
  getSmsIdIndexRoute,
  getSmsIndexRoute,
  getTaskAddressFeaturesIdIndexRoute,
  getTaskAddressFeaturesIndexRoute,
  getTaskCommandsIdIndexRoute,
  getTaskCommandsIndexRoute,
  getTaskEventsIdIndexRoute,
  getTaskEventsIndexRoute,
  getTaskEventTracksIdIndexRoute,
  getTaskEventTracksIndexRoute,
  getTaskExportsIndexRoute,
  getTaskFormsIdIndexRoute,
  getTaskFormsIndexRoute,
  getTaskImportIdIndexRoute,
  getTaskImportIndexRoute,
  getTaskImportMappingIdIndexRoute,
  getTaskImportMappingIndexRoute,
  getTaskMetadatasIdIndexRoute,
  getTaskMetadatasIndexRoute,
  getTasksIdDocumentsIndexRoute,
  getTasksIdEventsIndexRoute,
  getTasksIdIndexRoute,
  getTasksIdSignaturesIndexRoute,
  getTasksIndexRoute,
  getTimeLocationFeaturesIdIndexRoute,
  getTimeLocationFeaturesIndexRoute,
  getTimeLocationsIdIndexRoute,
  getTimeLocationsIndexRoute,
  getTrackersIdIndexRoute,
  getTrackersIdPublicIndexRoute,
  getTrackersIndexRoute,
  getUsersIdIndexRoute,
  getUsersIdOnDutyIndexRoute,
  getUsersIndexRoute,
  getUsersOnDutyLogIdIndexRoute,
  getUsersOnDutyLogIndexRoute,
  getWebhooksIdIndexRoute,
  getWebhooksIndexRoute,
  getWorkerFeaturesIndexRoute,
  getWorkerFeaturesUserIdIndexRoute,
  getWorkerTracksIndexRoute,
  getWorkingStateIdIndexRoute,
  getWorkingStateIndexRoute,
  patchAccountRolesIdIndexRoute,
  patchAccountsIdIndexRoute,
  patchBillingCustomersIdIndexRoute,
  patchBillingInvoicesIdIndexRoute,
  patchClientRolesIdIndexRoute,
  patchClientsIdIndexRoute,
  patchContactAddressesIdIndexRoute,
  patchEmailsIdIndexRoute,
  patchExportsIdIndexRoute,
  patchFormrulesIdIndexRoute,
  patchMetafieldsIdIndexRoute,
  patchNotificationTemplatesIdIndexRoute,
  patchOrdersIdIndexRoute,
  patchPushNotificationsIdIndexRoute,
  patchRecurrencesIdIndexRoute,
  patchRoutesIdIndexRoute,
  patchSmsIdIndexRoute,
  patchTaskFormsIdIndexRoute,
  patchTasksIdIndexRoute,
  patchTimeLocationFeaturesIdIndexRoute,
  patchTrackersIdIndexRoute,
  patchUsersIdIndexRoute,
  patchWebhooksIdIndexRoute,
  postAccountRolesIdActivateIndexRoute,
  postAccountRolesIdNotifyIndexRoute,
  postAccountRolesIndexRoute,
  postAccountsIdChangeOwnerIndexRoute,
  postAccountsIdManagersIndexRoute,
  postAccountsIdStripeCreateSetupIntentIndexRoute,
  postAccountsIdWorkersIndexRoute,
  postAuthenticateIndexRoute,
  postBillingCustomersIndexRoute,
  postBillingInvoicesIdMarkAsPaidIndexRoute,
  postClientRolesIdNotifyIndexRoute,
  postClientRolesIndexRoute,
  postClientsIndexRoute,
  postContactAddressesIndexRoute,
  postContactAddressImportIndexRoute,
  postDevicesIndexRoute,
  postDocumentsBatchDeleteIndexRoute,
  postDocumentsIndexRoute,
  postEmailsIdResendIndexRoute,
  postEmailsIndexRoute,
  postExportsIndexRoute,
  postFileUploadsIndexRoute,
  postFormrulesIndexRoute,
  postIntegrationsIndexRoute,
  postMetafieldsIndexRoute,
  postNotificationsIndexRoute,
  postNotificationTemplatesIdRenderIndexRoute,
  postNotificationTemplatesIndexRoute,
  postOrdersIndexRoute,
  postPasswordChangeIndexRoute,
  postPasswordResetConfirmIndexRoute,
  postPasswordResetIndexRoute,
  postPushNotificationsIdResendIndexRoute,
  postPushNotificationsIndexRoute,
  postRecurrencesIndexRoute,
  postRegisterIndexRoute,
  postReviewsIndexRoute,
  postRouteOptimizationsIdCommitIndexRoute,
  postRouteOptimizationsIdRoutesIndexRoute,
  postRouteOptimizationsIdScheduleIndexRoute,
  postRouteOptimizationsIndexRoute,
  postRoutesIndexRoute,
  postSignaturesBatchDeleteIndexRoute,
  postSignaturesIndexRoute,
  postSmsIdResendIndexRoute,
  postSmsIndexRoute,
  postTaskCommandsIndexRoute,
  postTaskFormsIndexRoute,
  postTaskImportIndexRoute,
  postTaskImportMappingIndexRoute,
  postTasksIdAcceptIndexRoute,
  postTasksIdAccountChangeIndexRoute,
  postTasksIdActivateIndexRoute,
  postTasksIdAssignIndexRoute,
  postTasksIdCancelIndexRoute,
  postTasksIdCompleteIndexRoute,
  postTasksIdFailIndexRoute,
  postTasksIdRejectIndexRoute,
  postTasksIdTransitIndexRoute,
  postTasksIdUnacceptIndexRoute,
  postTasksIdUnassignIndexRoute,
  postTasksIndexRoute,
  postTasksReorderIndexRoute,
  postTasksRepositionIndexRoute,
  postTimeLocationFeaturesIndexRoute,
  postTimeLocationsIndexRoute,
  postTrackersIndexRoute,
  postUsersIdActivateIndexRoute,
  postUsersIndexRoute,
  postUsersOnDutyLogIndexRoute,
  postWebhooksIdActiveIndexRoute,
  postWebhooksIdInactiveIndexRoute,
  postWebhooksIndexRoute,
  postWorkingStateIndexRoute,
  putAccountRolesIdIndexRoute,
  putAccountsIdIndexRoute,
  putAccountsIdStripeAttachPaymentMethodIndexRoute,
  putAccountsIdStripeCreateSetupIntentIndexRoute,
  putAccountsIdStripeDetachPaymentMethodIndexRoute,
  putAccountsIdStripeSetDefaultPaymentMethodIndexRoute,
  putBillingCustomersIdIndexRoute,
  putBillingInvoicesIdIndexRoute,
  putClientRolesIdIndexRoute,
  putClientsIdIndexRoute,
  putContactAddressesIdIndexRoute,
  putEmailsIdIndexRoute,
  putExportsIdIndexRoute,
  putFormrulesIdIndexRoute,
  putMetafieldsIdIndexRoute,
  putNotificationTemplatesIdIndexRoute,
  putOrdersIdIndexRoute,
  putPushNotificationsIdIndexRoute,
  putRecurrencesIdIndexRoute,
  putRoutesIdIndexRoute,
  putSmsIdIndexRoute,
  putTaskCommandsIdIndexRoute,
  putTaskFormsIdIndexRoute,
  putTasksIdIndexRoute,
  putTimeLocationFeaturesIdIndexRoute,
  putTrackersIdIndexRoute,
  putUsersIdIndexRoute,
  putUsersIdOnDutyIndexRoute,
  putWebhooksIdIndexRoute,
} from './routes'
import {
  deleteAccountRolesIdIndexRouteHandler,
  deleteAccountsIdManagersIndexRouteHandler,
  deleteAccountsIdWorkersIndexRouteHandler,
  deleteDocumentsIdIndexRouteHandler,
  deleteEmailsIdIndexRouteHandler,
  deleteExportsIdIndexRouteHandler,
  deleteFormrulesIdIndexRouteHandler,
  deleteMetafieldsIdIndexRouteHandler,
  deleteNotificationTemplatesIdIndexRouteHandler,
  deletePushNotificationsIdIndexRouteHandler,
  deleteRoutesIdIndexRouteHandler,
  deleteSignaturesIdIndexRouteHandler,
  deleteSmsIdIndexRouteHandler,
  deleteTaskFormsIdIndexRouteHandler,
  deleteTimeLocationFeaturesIdIndexRouteHandler,
  deleteUsersIdIndexRouteHandler,
  deleteUsersIdOnDutyIndexRouteHandler,
  deleteWebhooksIdIndexRouteHandler,
  getAccountRolesIdIndexRouteHandler,
  getAccountRolesIdTokenIndexRouteHandler,
  getAccountRolesIndexRouteHandler,
  getAccountsIdBraintreeCustomerIndexRouteHandler,
  getAccountsIdIndexRouteHandler,
  getAccountsIdManagersIndexRouteHandler,
  getAccountsIdStripeGetPaymentMethodIndexRouteHandler,
  getAccountsIdStripeGetSetupAttemptIndexRouteHandler,
  getAccountsIdStripeGetSetupIntentIndexRouteHandler,
  getAccountsIdStripePaymentMethodsIndexRouteHandler,
  getAccountsIdStripeSetupIntentsIndexRouteHandler,
  getAccountsIdWorkersIndexRouteHandler,
  getAccountsIndexRouteHandler,
  getAddonsIdIndexRouteHandler,
  getAddonsIndexRouteHandler,
  getBillingCustomersIdClientTokenIndexRouteHandler,
  getBillingCustomersIdIndexRouteHandler,
  getBillingCustomersIndexRouteHandler,
  getBillingInvoicesIdIndexRouteHandler,
  getBillingInvoicesIndexRouteHandler,
  getBillingStripePaymentsIdIndexRouteHandler,
  getBillingStripePaymentsIndexRouteHandler,
  getBillingTransactionsIdIndexRouteHandler,
  getBillingTransactionsIndexRouteHandler,
  getClientRolesIdIndexRouteHandler,
  getClientRolesIndexRouteHandler,
  getClientsIdIndexRouteHandler,
  getClientsIndexRouteHandler,
  getConfigurationsIndexRouteHandler,
  getContactAddressesIdIndexRouteHandler,
  getContactAddressesIndexRouteHandler,
  getContactAddressExportsIndexRouteHandler,
  getContactAddressImportIdIndexRouteHandler,
  getContactAddressImportIndexRouteHandler,
  getDevicesIdIndexRouteHandler,
  getDevicesIndexRouteHandler,
  getDocsSchemaIndexRouteHandler,
  getDocumentsIdIndexRouteHandler,
  getDocumentsIndexRouteHandler,
  getEmailsIdIndexRouteHandler,
  getEmailsIndexRouteHandler,
  getExportsIdIndexRouteHandler,
  getExportsIndexRouteHandler,
  getFileUploadsIdIndexRouteHandler,
  getFileUploadsIndexRouteHandler,
  getFormrulesIdIndexRouteHandler,
  getFormrulesIndexRouteHandler,
  getMetafieldsIdIndexRouteHandler,
  getMetafieldsIndexRouteHandler,
  getNotificationsIdIndexRouteHandler,
  getNotificationsIndexRouteHandler,
  getNotificationTemplatesIdIndexRouteHandler,
  getNotificationTemplatesIndexRouteHandler,
  getOrdersIdIndexRouteHandler,
  getOrdersIndexRouteHandler,
  getPushNotificationsIdIndexRouteHandler,
  getPushNotificationsIndexRouteHandler,
  getRecurrencesIdIndexRouteHandler,
  getRecurrencesIndexRouteHandler,
  getReportsTasksStatesCountIndexRouteHandler,
  getReviewsIdIndexRouteHandler,
  getReviewsIndexRouteHandler,
  getRouteOptimizationsIdIndexRouteHandler,
  getRouteOptimizationsIdResultsIndexRouteHandler,
  getRouteOptimizationsIdRoutesIndexRouteHandler,
  getRouteOptimizationsIndexRouteHandler,
  getRoutesIdIndexRouteHandler,
  getRoutesIndexRouteHandler,
  getScenesDashboardIndexRouteHandler,
  getScenesOrderListIndexRouteHandler,
  getScenesRecurrenceListIndexRouteHandler,
  getScenesTaskListIndexRouteHandler,
  getSignaturesIdIndexRouteHandler,
  getSignaturesIndexRouteHandler,
  getSmsIdIndexRouteHandler,
  getSmsIndexRouteHandler,
  getTaskAddressFeaturesIdIndexRouteHandler,
  getTaskAddressFeaturesIndexRouteHandler,
  getTaskCommandsIdIndexRouteHandler,
  getTaskCommandsIndexRouteHandler,
  getTaskEventsIdIndexRouteHandler,
  getTaskEventsIndexRouteHandler,
  getTaskEventTracksIdIndexRouteHandler,
  getTaskEventTracksIndexRouteHandler,
  getTaskExportsIndexRouteHandler,
  getTaskFormsIdIndexRouteHandler,
  getTaskFormsIndexRouteHandler,
  getTaskImportIdIndexRouteHandler,
  getTaskImportIndexRouteHandler,
  getTaskImportMappingIdIndexRouteHandler,
  getTaskImportMappingIndexRouteHandler,
  getTaskMetadatasIdIndexRouteHandler,
  getTaskMetadatasIndexRouteHandler,
  getTasksIdDocumentsIndexRouteHandler,
  getTasksIdEventsIndexRouteHandler,
  getTasksIdIndexRouteHandler,
  getTasksIdSignaturesIndexRouteHandler,
  getTasksIndexRouteHandler,
  getTimeLocationFeaturesIdIndexRouteHandler,
  getTimeLocationFeaturesIndexRouteHandler,
  getTimeLocationsIdIndexRouteHandler,
  getTimeLocationsIndexRouteHandler,
  getTrackersIdIndexRouteHandler,
  getTrackersIdPublicIndexRouteHandler,
  getTrackersIndexRouteHandler,
  getUsersIdIndexRouteHandler,
  getUsersIdOnDutyIndexRouteHandler,
  getUsersIndexRouteHandler,
  getUsersOnDutyLogIdIndexRouteHandler,
  getUsersOnDutyLogIndexRouteHandler,
  getWebhooksIdIndexRouteHandler,
  getWebhooksIndexRouteHandler,
  getWorkerFeaturesIndexRouteHandler,
  getWorkerFeaturesUserIdIndexRouteHandler,
  getWorkerTracksIndexRouteHandler,
  getWorkingStateIdIndexRouteHandler,
  getWorkingStateIndexRouteHandler,
  patchAccountRolesIdIndexRouteHandler,
  patchAccountsIdIndexRouteHandler,
  patchBillingCustomersIdIndexRouteHandler,
  patchBillingInvoicesIdIndexRouteHandler,
  patchClientRolesIdIndexRouteHandler,
  patchClientsIdIndexRouteHandler,
  patchContactAddressesIdIndexRouteHandler,
  patchEmailsIdIndexRouteHandler,
  patchExportsIdIndexRouteHandler,
  patchFormrulesIdIndexRouteHandler,
  patchMetafieldsIdIndexRouteHandler,
  patchNotificationTemplatesIdIndexRouteHandler,
  patchOrdersIdIndexRouteHandler,
  patchPushNotificationsIdIndexRouteHandler,
  patchRecurrencesIdIndexRouteHandler,
  patchRoutesIdIndexRouteHandler,
  patchSmsIdIndexRouteHandler,
  patchTaskFormsIdIndexRouteHandler,
  patchTasksIdIndexRouteHandler,
  patchTimeLocationFeaturesIdIndexRouteHandler,
  patchTrackersIdIndexRouteHandler,
  patchUsersIdIndexRouteHandler,
  patchWebhooksIdIndexRouteHandler,
  postAccountRolesIdActivateIndexRouteHandler,
  postAccountRolesIdNotifyIndexRouteHandler,
  postAccountRolesIndexRouteHandler,
  postAccountsIdChangeOwnerIndexRouteHandler,
  postAccountsIdManagersIndexRouteHandler,
  postAccountsIdStripeCreateSetupIntentIndexRouteHandler,
  postAccountsIdWorkersIndexRouteHandler,
  postAuthenticateIndexRouteHandler,
  postBillingCustomersIndexRouteHandler,
  postBillingInvoicesIdMarkAsPaidIndexRouteHandler,
  postClientRolesIdNotifyIndexRouteHandler,
  postClientRolesIndexRouteHandler,
  postClientsIndexRouteHandler,
  postContactAddressesIndexRouteHandler,
  postContactAddressImportIndexRouteHandler,
  postDevicesIndexRouteHandler,
  postDocumentsBatchDeleteIndexRouteHandler,
  postDocumentsIndexRouteHandler,
  postEmailsIdResendIndexRouteHandler,
  postEmailsIndexRouteHandler,
  postExportsIndexRouteHandler,
  postFileUploadsIndexRouteHandler,
  postFormrulesIndexRouteHandler,
  postIntegrationsIndexRouteHandler,
  postMetafieldsIndexRouteHandler,
  postNotificationsIndexRouteHandler,
  postNotificationTemplatesIdRenderIndexRouteHandler,
  postNotificationTemplatesIndexRouteHandler,
  postOrdersIndexRouteHandler,
  postPasswordChangeIndexRouteHandler,
  postPasswordResetConfirmIndexRouteHandler,
  postPasswordResetIndexRouteHandler,
  postPushNotificationsIdResendIndexRouteHandler,
  postPushNotificationsIndexRouteHandler,
  postRecurrencesIndexRouteHandler,
  postRegisterIndexRouteHandler,
  postReviewsIndexRouteHandler,
  postRouteOptimizationsIdCommitIndexRouteHandler,
  postRouteOptimizationsIdRoutesIndexRouteHandler,
  postRouteOptimizationsIdScheduleIndexRouteHandler,
  postRouteOptimizationsIndexRouteHandler,
  postRoutesIndexRouteHandler,
  postSignaturesBatchDeleteIndexRouteHandler,
  postSignaturesIndexRouteHandler,
  postSmsIdResendIndexRouteHandler,
  postSmsIndexRouteHandler,
  postTaskCommandsIndexRouteHandler,
  postTaskFormsIndexRouteHandler,
  postTaskImportIndexRouteHandler,
  postTaskImportMappingIndexRouteHandler,
  postTasksIdAcceptIndexRouteHandler,
  postTasksIdAccountChangeIndexRouteHandler,
  postTasksIdActivateIndexRouteHandler,
  postTasksIdAssignIndexRouteHandler,
  postTasksIdCancelIndexRouteHandler,
  postTasksIdCompleteIndexRouteHandler,
  postTasksIdFailIndexRouteHandler,
  postTasksIdRejectIndexRouteHandler,
  postTasksIdTransitIndexRouteHandler,
  postTasksIdUnacceptIndexRouteHandler,
  postTasksIdUnassignIndexRouteHandler,
  postTasksIndexRouteHandler,
  postTasksReorderIndexRouteHandler,
  postTasksRepositionIndexRouteHandler,
  postTimeLocationFeaturesIndexRouteHandler,
  postTimeLocationsIndexRouteHandler,
  postTrackersIndexRouteHandler,
  postUsersIdActivateIndexRouteHandler,
  postUsersIndexRouteHandler,
  postUsersOnDutyLogIndexRouteHandler,
  postWebhooksIdActiveIndexRouteHandler,
  postWebhooksIdInactiveIndexRouteHandler,
  postWebhooksIndexRouteHandler,
  postWorkingStateIndexRouteHandler,
  putAccountRolesIdIndexRouteHandler,
  putAccountsIdIndexRouteHandler,
  putAccountsIdStripeAttachPaymentMethodIndexRouteHandler,
  putAccountsIdStripeCreateSetupIntentIndexRouteHandler,
  putAccountsIdStripeDetachPaymentMethodIndexRouteHandler,
  putAccountsIdStripeSetDefaultPaymentMethodIndexRouteHandler,
  putBillingCustomersIdIndexRouteHandler,
  putBillingInvoicesIdIndexRouteHandler,
  putClientRolesIdIndexRouteHandler,
  putClientsIdIndexRouteHandler,
  putContactAddressesIdIndexRouteHandler,
  putEmailsIdIndexRouteHandler,
  putExportsIdIndexRouteHandler,
  putFormrulesIdIndexRouteHandler,
  putMetafieldsIdIndexRouteHandler,
  putNotificationTemplatesIdIndexRouteHandler,
  putOrdersIdIndexRouteHandler,
  putPushNotificationsIdIndexRouteHandler,
  putRecurrencesIdIndexRouteHandler,
  putRoutesIdIndexRouteHandler,
  putSmsIdIndexRouteHandler,
  putTaskCommandsIdIndexRouteHandler,
  putTaskFormsIdIndexRouteHandler,
  putTasksIdIndexRouteHandler,
  putTimeLocationFeaturesIdIndexRouteHandler,
  putTrackersIdIndexRouteHandler,
  putUsersIdIndexRouteHandler,
  putUsersIdOnDutyIndexRouteHandler,
  putWebhooksIdIndexRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountRolesIndexRoute, getAccountRolesIndexRouteHandler)
  .openapi(postAccountRolesIndexRoute, postAccountRolesIndexRouteHandler)
  .openapi(deleteAccountRolesIdIndexRoute, deleteAccountRolesIdIndexRouteHandler)
  .openapi(getAccountRolesIdIndexRoute, getAccountRolesIdIndexRouteHandler)
  .openapi(patchAccountRolesIdIndexRoute, patchAccountRolesIdIndexRouteHandler)
  .openapi(putAccountRolesIdIndexRoute, putAccountRolesIdIndexRouteHandler)
  .openapi(postAccountRolesIdActivateIndexRoute, postAccountRolesIdActivateIndexRouteHandler)
  .openapi(postAccountRolesIdNotifyIndexRoute, postAccountRolesIdNotifyIndexRouteHandler)
  .openapi(getAccountRolesIdTokenIndexRoute, getAccountRolesIdTokenIndexRouteHandler)
  .openapi(getAccountsIndexRoute, getAccountsIndexRouteHandler)
  .openapi(getAccountsIdIndexRoute, getAccountsIdIndexRouteHandler)
  .openapi(patchAccountsIdIndexRoute, patchAccountsIdIndexRouteHandler)
  .openapi(putAccountsIdIndexRoute, putAccountsIdIndexRouteHandler)
  .openapi(
    getAccountsIdBraintreeCustomerIndexRoute,
    getAccountsIdBraintreeCustomerIndexRouteHandler,
  )
  .openapi(postAccountsIdChangeOwnerIndexRoute, postAccountsIdChangeOwnerIndexRouteHandler)
  .openapi(deleteAccountsIdManagersIndexRoute, deleteAccountsIdManagersIndexRouteHandler)
  .openapi(getAccountsIdManagersIndexRoute, getAccountsIdManagersIndexRouteHandler)
  .openapi(postAccountsIdManagersIndexRoute, postAccountsIdManagersIndexRouteHandler)
  .openapi(
    putAccountsIdStripeAttachPaymentMethodIndexRoute,
    putAccountsIdStripeAttachPaymentMethodIndexRouteHandler,
  )
  .openapi(
    postAccountsIdStripeCreateSetupIntentIndexRoute,
    postAccountsIdStripeCreateSetupIntentIndexRouteHandler,
  )
  .openapi(
    putAccountsIdStripeCreateSetupIntentIndexRoute,
    putAccountsIdStripeCreateSetupIntentIndexRouteHandler,
  )
  .openapi(
    putAccountsIdStripeDetachPaymentMethodIndexRoute,
    putAccountsIdStripeDetachPaymentMethodIndexRouteHandler,
  )
  .openapi(
    getAccountsIdStripeGetPaymentMethodIndexRoute,
    getAccountsIdStripeGetPaymentMethodIndexRouteHandler,
  )
  .openapi(
    getAccountsIdStripeGetSetupAttemptIndexRoute,
    getAccountsIdStripeGetSetupAttemptIndexRouteHandler,
  )
  .openapi(
    getAccountsIdStripeGetSetupIntentIndexRoute,
    getAccountsIdStripeGetSetupIntentIndexRouteHandler,
  )
  .openapi(
    getAccountsIdStripePaymentMethodsIndexRoute,
    getAccountsIdStripePaymentMethodsIndexRouteHandler,
  )
  .openapi(
    putAccountsIdStripeSetDefaultPaymentMethodIndexRoute,
    putAccountsIdStripeSetDefaultPaymentMethodIndexRouteHandler,
  )
  .openapi(
    getAccountsIdStripeSetupIntentsIndexRoute,
    getAccountsIdStripeSetupIntentsIndexRouteHandler,
  )
  .openapi(deleteAccountsIdWorkersIndexRoute, deleteAccountsIdWorkersIndexRouteHandler)
  .openapi(getAccountsIdWorkersIndexRoute, getAccountsIdWorkersIndexRouteHandler)
  .openapi(postAccountsIdWorkersIndexRoute, postAccountsIdWorkersIndexRouteHandler)
  .openapi(getAddonsIndexRoute, getAddonsIndexRouteHandler)
  .openapi(getAddonsIdIndexRoute, getAddonsIdIndexRouteHandler)
  .openapi(postAuthenticateIndexRoute, postAuthenticateIndexRouteHandler)
  .openapi(getBillingCustomersIndexRoute, getBillingCustomersIndexRouteHandler)
  .openapi(postBillingCustomersIndexRoute, postBillingCustomersIndexRouteHandler)
  .openapi(getBillingCustomersIdIndexRoute, getBillingCustomersIdIndexRouteHandler)
  .openapi(patchBillingCustomersIdIndexRoute, patchBillingCustomersIdIndexRouteHandler)
  .openapi(putBillingCustomersIdIndexRoute, putBillingCustomersIdIndexRouteHandler)
  .openapi(
    getBillingCustomersIdClientTokenIndexRoute,
    getBillingCustomersIdClientTokenIndexRouteHandler,
  )
  .openapi(getBillingInvoicesIndexRoute, getBillingInvoicesIndexRouteHandler)
  .openapi(getBillingInvoicesIdIndexRoute, getBillingInvoicesIdIndexRouteHandler)
  .openapi(patchBillingInvoicesIdIndexRoute, patchBillingInvoicesIdIndexRouteHandler)
  .openapi(putBillingInvoicesIdIndexRoute, putBillingInvoicesIdIndexRouteHandler)
  .openapi(
    postBillingInvoicesIdMarkAsPaidIndexRoute,
    postBillingInvoicesIdMarkAsPaidIndexRouteHandler,
  )
  .openapi(getBillingStripePaymentsIndexRoute, getBillingStripePaymentsIndexRouteHandler)
  .openapi(getBillingStripePaymentsIdIndexRoute, getBillingStripePaymentsIdIndexRouteHandler)
  .openapi(getBillingTransactionsIndexRoute, getBillingTransactionsIndexRouteHandler)
  .openapi(getBillingTransactionsIdIndexRoute, getBillingTransactionsIdIndexRouteHandler)
  .openapi(getClientRolesIndexRoute, getClientRolesIndexRouteHandler)
  .openapi(postClientRolesIndexRoute, postClientRolesIndexRouteHandler)
  .openapi(getClientRolesIdIndexRoute, getClientRolesIdIndexRouteHandler)
  .openapi(patchClientRolesIdIndexRoute, patchClientRolesIdIndexRouteHandler)
  .openapi(putClientRolesIdIndexRoute, putClientRolesIdIndexRouteHandler)
  .openapi(postClientRolesIdNotifyIndexRoute, postClientRolesIdNotifyIndexRouteHandler)
  .openapi(getClientsIndexRoute, getClientsIndexRouteHandler)
  .openapi(postClientsIndexRoute, postClientsIndexRouteHandler)
  .openapi(getClientsIdIndexRoute, getClientsIdIndexRouteHandler)
  .openapi(patchClientsIdIndexRoute, patchClientsIdIndexRouteHandler)
  .openapi(putClientsIdIndexRoute, putClientsIdIndexRouteHandler)
  .openapi(getConfigurationsIndexRoute, getConfigurationsIndexRouteHandler)
  .openapi(getContactAddressExportsIndexRoute, getContactAddressExportsIndexRouteHandler)
  .openapi(getContactAddressImportIndexRoute, getContactAddressImportIndexRouteHandler)
  .openapi(postContactAddressImportIndexRoute, postContactAddressImportIndexRouteHandler)
  .openapi(getContactAddressImportIdIndexRoute, getContactAddressImportIdIndexRouteHandler)
  .openapi(getContactAddressesIndexRoute, getContactAddressesIndexRouteHandler)
  .openapi(postContactAddressesIndexRoute, postContactAddressesIndexRouteHandler)
  .openapi(getContactAddressesIdIndexRoute, getContactAddressesIdIndexRouteHandler)
  .openapi(patchContactAddressesIdIndexRoute, patchContactAddressesIdIndexRouteHandler)
  .openapi(putContactAddressesIdIndexRoute, putContactAddressesIdIndexRouteHandler)
  .openapi(getDevicesIndexRoute, getDevicesIndexRouteHandler)
  .openapi(postDevicesIndexRoute, postDevicesIndexRouteHandler)
  .openapi(getDevicesIdIndexRoute, getDevicesIdIndexRouteHandler)
  .openapi(getDocsSchemaIndexRoute, getDocsSchemaIndexRouteHandler)
  .openapi(getDocumentsIndexRoute, getDocumentsIndexRouteHandler)
  .openapi(postDocumentsIndexRoute, postDocumentsIndexRouteHandler)
  .openapi(postDocumentsBatchDeleteIndexRoute, postDocumentsBatchDeleteIndexRouteHandler)
  .openapi(deleteDocumentsIdIndexRoute, deleteDocumentsIdIndexRouteHandler)
  .openapi(getDocumentsIdIndexRoute, getDocumentsIdIndexRouteHandler)
  .openapi(getEmailsIndexRoute, getEmailsIndexRouteHandler)
  .openapi(postEmailsIndexRoute, postEmailsIndexRouteHandler)
  .openapi(deleteEmailsIdIndexRoute, deleteEmailsIdIndexRouteHandler)
  .openapi(getEmailsIdIndexRoute, getEmailsIdIndexRouteHandler)
  .openapi(patchEmailsIdIndexRoute, patchEmailsIdIndexRouteHandler)
  .openapi(putEmailsIdIndexRoute, putEmailsIdIndexRouteHandler)
  .openapi(postEmailsIdResendIndexRoute, postEmailsIdResendIndexRouteHandler)
  .openapi(getExportsIndexRoute, getExportsIndexRouteHandler)
  .openapi(postExportsIndexRoute, postExportsIndexRouteHandler)
  .openapi(deleteExportsIdIndexRoute, deleteExportsIdIndexRouteHandler)
  .openapi(getExportsIdIndexRoute, getExportsIdIndexRouteHandler)
  .openapi(patchExportsIdIndexRoute, patchExportsIdIndexRouteHandler)
  .openapi(putExportsIdIndexRoute, putExportsIdIndexRouteHandler)
  .openapi(getFileUploadsIndexRoute, getFileUploadsIndexRouteHandler)
  .openapi(postFileUploadsIndexRoute, postFileUploadsIndexRouteHandler)
  .openapi(getFileUploadsIdIndexRoute, getFileUploadsIdIndexRouteHandler)
  .openapi(getFormrulesIndexRoute, getFormrulesIndexRouteHandler)
  .openapi(postFormrulesIndexRoute, postFormrulesIndexRouteHandler)
  .openapi(deleteFormrulesIdIndexRoute, deleteFormrulesIdIndexRouteHandler)
  .openapi(getFormrulesIdIndexRoute, getFormrulesIdIndexRouteHandler)
  .openapi(patchFormrulesIdIndexRoute, patchFormrulesIdIndexRouteHandler)
  .openapi(putFormrulesIdIndexRoute, putFormrulesIdIndexRouteHandler)
  .openapi(postIntegrationsIndexRoute, postIntegrationsIndexRouteHandler)
  .openapi(getMetafieldsIndexRoute, getMetafieldsIndexRouteHandler)
  .openapi(postMetafieldsIndexRoute, postMetafieldsIndexRouteHandler)
  .openapi(deleteMetafieldsIdIndexRoute, deleteMetafieldsIdIndexRouteHandler)
  .openapi(getMetafieldsIdIndexRoute, getMetafieldsIdIndexRouteHandler)
  .openapi(patchMetafieldsIdIndexRoute, patchMetafieldsIdIndexRouteHandler)
  .openapi(putMetafieldsIdIndexRoute, putMetafieldsIdIndexRouteHandler)
  .openapi(getNotificationTemplatesIndexRoute, getNotificationTemplatesIndexRouteHandler)
  .openapi(postNotificationTemplatesIndexRoute, postNotificationTemplatesIndexRouteHandler)
  .openapi(deleteNotificationTemplatesIdIndexRoute, deleteNotificationTemplatesIdIndexRouteHandler)
  .openapi(getNotificationTemplatesIdIndexRoute, getNotificationTemplatesIdIndexRouteHandler)
  .openapi(patchNotificationTemplatesIdIndexRoute, patchNotificationTemplatesIdIndexRouteHandler)
  .openapi(putNotificationTemplatesIdIndexRoute, putNotificationTemplatesIdIndexRouteHandler)
  .openapi(
    postNotificationTemplatesIdRenderIndexRoute,
    postNotificationTemplatesIdRenderIndexRouteHandler,
  )
  .openapi(getNotificationsIndexRoute, getNotificationsIndexRouteHandler)
  .openapi(postNotificationsIndexRoute, postNotificationsIndexRouteHandler)
  .openapi(getNotificationsIdIndexRoute, getNotificationsIdIndexRouteHandler)
  .openapi(getOrdersIndexRoute, getOrdersIndexRouteHandler)
  .openapi(postOrdersIndexRoute, postOrdersIndexRouteHandler)
  .openapi(getOrdersIdIndexRoute, getOrdersIdIndexRouteHandler)
  .openapi(patchOrdersIdIndexRoute, patchOrdersIdIndexRouteHandler)
  .openapi(putOrdersIdIndexRoute, putOrdersIdIndexRouteHandler)
  .openapi(postPasswordChangeIndexRoute, postPasswordChangeIndexRouteHandler)
  .openapi(postPasswordResetIndexRoute, postPasswordResetIndexRouteHandler)
  .openapi(postPasswordResetConfirmIndexRoute, postPasswordResetConfirmIndexRouteHandler)
  .openapi(getPushNotificationsIndexRoute, getPushNotificationsIndexRouteHandler)
  .openapi(postPushNotificationsIndexRoute, postPushNotificationsIndexRouteHandler)
  .openapi(deletePushNotificationsIdIndexRoute, deletePushNotificationsIdIndexRouteHandler)
  .openapi(getPushNotificationsIdIndexRoute, getPushNotificationsIdIndexRouteHandler)
  .openapi(patchPushNotificationsIdIndexRoute, patchPushNotificationsIdIndexRouteHandler)
  .openapi(putPushNotificationsIdIndexRoute, putPushNotificationsIdIndexRouteHandler)
  .openapi(postPushNotificationsIdResendIndexRoute, postPushNotificationsIdResendIndexRouteHandler)
  .openapi(getRecurrencesIndexRoute, getRecurrencesIndexRouteHandler)
  .openapi(postRecurrencesIndexRoute, postRecurrencesIndexRouteHandler)
  .openapi(getRecurrencesIdIndexRoute, getRecurrencesIdIndexRouteHandler)
  .openapi(patchRecurrencesIdIndexRoute, patchRecurrencesIdIndexRouteHandler)
  .openapi(putRecurrencesIdIndexRoute, putRecurrencesIdIndexRouteHandler)
  .openapi(postRegisterIndexRoute, postRegisterIndexRouteHandler)
  .openapi(getReportsTasksStatesCountIndexRoute, getReportsTasksStatesCountIndexRouteHandler)
  .openapi(getReviewsIndexRoute, getReviewsIndexRouteHandler)
  .openapi(postReviewsIndexRoute, postReviewsIndexRouteHandler)
  .openapi(getReviewsIdIndexRoute, getReviewsIdIndexRouteHandler)
  .openapi(getRouteOptimizationsIndexRoute, getRouteOptimizationsIndexRouteHandler)
  .openapi(postRouteOptimizationsIndexRoute, postRouteOptimizationsIndexRouteHandler)
  .openapi(getRouteOptimizationsIdIndexRoute, getRouteOptimizationsIdIndexRouteHandler)
  .openapi(
    postRouteOptimizationsIdCommitIndexRoute,
    postRouteOptimizationsIdCommitIndexRouteHandler,
  )
  .openapi(
    getRouteOptimizationsIdResultsIndexRoute,
    getRouteOptimizationsIdResultsIndexRouteHandler,
  )
  .openapi(getRouteOptimizationsIdRoutesIndexRoute, getRouteOptimizationsIdRoutesIndexRouteHandler)
  .openapi(
    postRouteOptimizationsIdRoutesIndexRoute,
    postRouteOptimizationsIdRoutesIndexRouteHandler,
  )
  .openapi(
    postRouteOptimizationsIdScheduleIndexRoute,
    postRouteOptimizationsIdScheduleIndexRouteHandler,
  )
  .openapi(getRoutesIndexRoute, getRoutesIndexRouteHandler)
  .openapi(postRoutesIndexRoute, postRoutesIndexRouteHandler)
  .openapi(deleteRoutesIdIndexRoute, deleteRoutesIdIndexRouteHandler)
  .openapi(getRoutesIdIndexRoute, getRoutesIdIndexRouteHandler)
  .openapi(patchRoutesIdIndexRoute, patchRoutesIdIndexRouteHandler)
  .openapi(putRoutesIdIndexRoute, putRoutesIdIndexRouteHandler)
  .openapi(getScenesDashboardIndexRoute, getScenesDashboardIndexRouteHandler)
  .openapi(getScenesOrderListIndexRoute, getScenesOrderListIndexRouteHandler)
  .openapi(getScenesRecurrenceListIndexRoute, getScenesRecurrenceListIndexRouteHandler)
  .openapi(getScenesTaskListIndexRoute, getScenesTaskListIndexRouteHandler)
  .openapi(getSignaturesIndexRoute, getSignaturesIndexRouteHandler)
  .openapi(postSignaturesIndexRoute, postSignaturesIndexRouteHandler)
  .openapi(postSignaturesBatchDeleteIndexRoute, postSignaturesBatchDeleteIndexRouteHandler)
  .openapi(deleteSignaturesIdIndexRoute, deleteSignaturesIdIndexRouteHandler)
  .openapi(getSignaturesIdIndexRoute, getSignaturesIdIndexRouteHandler)
  .openapi(getSmsIndexRoute, getSmsIndexRouteHandler)
  .openapi(postSmsIndexRoute, postSmsIndexRouteHandler)
  .openapi(deleteSmsIdIndexRoute, deleteSmsIdIndexRouteHandler)
  .openapi(getSmsIdIndexRoute, getSmsIdIndexRouteHandler)
  .openapi(patchSmsIdIndexRoute, patchSmsIdIndexRouteHandler)
  .openapi(putSmsIdIndexRoute, putSmsIdIndexRouteHandler)
  .openapi(postSmsIdResendIndexRoute, postSmsIdResendIndexRouteHandler)
  .openapi(getTaskAddressFeaturesIndexRoute, getTaskAddressFeaturesIndexRouteHandler)
  .openapi(getTaskAddressFeaturesIdIndexRoute, getTaskAddressFeaturesIdIndexRouteHandler)
  .openapi(getTaskCommandsIndexRoute, getTaskCommandsIndexRouteHandler)
  .openapi(postTaskCommandsIndexRoute, postTaskCommandsIndexRouteHandler)
  .openapi(getTaskCommandsIdIndexRoute, getTaskCommandsIdIndexRouteHandler)
  .openapi(putTaskCommandsIdIndexRoute, putTaskCommandsIdIndexRouteHandler)
  .openapi(getTaskEventTracksIndexRoute, getTaskEventTracksIndexRouteHandler)
  .openapi(getTaskEventTracksIdIndexRoute, getTaskEventTracksIdIndexRouteHandler)
  .openapi(getTaskEventsIndexRoute, getTaskEventsIndexRouteHandler)
  .openapi(getTaskEventsIdIndexRoute, getTaskEventsIdIndexRouteHandler)
  .openapi(getTaskExportsIndexRoute, getTaskExportsIndexRouteHandler)
  .openapi(getTaskFormsIndexRoute, getTaskFormsIndexRouteHandler)
  .openapi(postTaskFormsIndexRoute, postTaskFormsIndexRouteHandler)
  .openapi(deleteTaskFormsIdIndexRoute, deleteTaskFormsIdIndexRouteHandler)
  .openapi(getTaskFormsIdIndexRoute, getTaskFormsIdIndexRouteHandler)
  .openapi(patchTaskFormsIdIndexRoute, patchTaskFormsIdIndexRouteHandler)
  .openapi(putTaskFormsIdIndexRoute, putTaskFormsIdIndexRouteHandler)
  .openapi(getTaskImportIndexRoute, getTaskImportIndexRouteHandler)
  .openapi(postTaskImportIndexRoute, postTaskImportIndexRouteHandler)
  .openapi(getTaskImportIdIndexRoute, getTaskImportIdIndexRouteHandler)
  .openapi(getTaskImportMappingIndexRoute, getTaskImportMappingIndexRouteHandler)
  .openapi(postTaskImportMappingIndexRoute, postTaskImportMappingIndexRouteHandler)
  .openapi(getTaskImportMappingIdIndexRoute, getTaskImportMappingIdIndexRouteHandler)
  .openapi(getTaskMetadatasIndexRoute, getTaskMetadatasIndexRouteHandler)
  .openapi(getTaskMetadatasIdIndexRoute, getTaskMetadatasIdIndexRouteHandler)
  .openapi(getTasksIndexRoute, getTasksIndexRouteHandler)
  .openapi(postTasksIndexRoute, postTasksIndexRouteHandler)
  .openapi(postTasksReorderIndexRoute, postTasksReorderIndexRouteHandler)
  .openapi(postTasksRepositionIndexRoute, postTasksRepositionIndexRouteHandler)
  .openapi(getTasksIdIndexRoute, getTasksIdIndexRouteHandler)
  .openapi(patchTasksIdIndexRoute, patchTasksIdIndexRouteHandler)
  .openapi(putTasksIdIndexRoute, putTasksIdIndexRouteHandler)
  .openapi(postTasksIdAcceptIndexRoute, postTasksIdAcceptIndexRouteHandler)
  .openapi(postTasksIdAccountChangeIndexRoute, postTasksIdAccountChangeIndexRouteHandler)
  .openapi(postTasksIdActivateIndexRoute, postTasksIdActivateIndexRouteHandler)
  .openapi(postTasksIdAssignIndexRoute, postTasksIdAssignIndexRouteHandler)
  .openapi(postTasksIdCancelIndexRoute, postTasksIdCancelIndexRouteHandler)
  .openapi(postTasksIdCompleteIndexRoute, postTasksIdCompleteIndexRouteHandler)
  .openapi(getTasksIdDocumentsIndexRoute, getTasksIdDocumentsIndexRouteHandler)
  .openapi(getTasksIdEventsIndexRoute, getTasksIdEventsIndexRouteHandler)
  .openapi(postTasksIdFailIndexRoute, postTasksIdFailIndexRouteHandler)
  .openapi(postTasksIdRejectIndexRoute, postTasksIdRejectIndexRouteHandler)
  .openapi(getTasksIdSignaturesIndexRoute, getTasksIdSignaturesIndexRouteHandler)
  .openapi(postTasksIdTransitIndexRoute, postTasksIdTransitIndexRouteHandler)
  .openapi(postTasksIdUnacceptIndexRoute, postTasksIdUnacceptIndexRouteHandler)
  .openapi(postTasksIdUnassignIndexRoute, postTasksIdUnassignIndexRouteHandler)
  .openapi(getTimeLocationFeaturesIndexRoute, getTimeLocationFeaturesIndexRouteHandler)
  .openapi(postTimeLocationFeaturesIndexRoute, postTimeLocationFeaturesIndexRouteHandler)
  .openapi(deleteTimeLocationFeaturesIdIndexRoute, deleteTimeLocationFeaturesIdIndexRouteHandler)
  .openapi(getTimeLocationFeaturesIdIndexRoute, getTimeLocationFeaturesIdIndexRouteHandler)
  .openapi(patchTimeLocationFeaturesIdIndexRoute, patchTimeLocationFeaturesIdIndexRouteHandler)
  .openapi(putTimeLocationFeaturesIdIndexRoute, putTimeLocationFeaturesIdIndexRouteHandler)
  .openapi(getTimeLocationsIndexRoute, getTimeLocationsIndexRouteHandler)
  .openapi(postTimeLocationsIndexRoute, postTimeLocationsIndexRouteHandler)
  .openapi(getTimeLocationsIdIndexRoute, getTimeLocationsIdIndexRouteHandler)
  .openapi(getTrackersIndexRoute, getTrackersIndexRouteHandler)
  .openapi(postTrackersIndexRoute, postTrackersIndexRouteHandler)
  .openapi(getTrackersIdIndexRoute, getTrackersIdIndexRouteHandler)
  .openapi(patchTrackersIdIndexRoute, patchTrackersIdIndexRouteHandler)
  .openapi(putTrackersIdIndexRoute, putTrackersIdIndexRouteHandler)
  .openapi(getTrackersIdPublicIndexRoute, getTrackersIdPublicIndexRouteHandler)
  .openapi(getUsersIndexRoute, getUsersIndexRouteHandler)
  .openapi(postUsersIndexRoute, postUsersIndexRouteHandler)
  .openapi(deleteUsersIdIndexRoute, deleteUsersIdIndexRouteHandler)
  .openapi(getUsersIdIndexRoute, getUsersIdIndexRouteHandler)
  .openapi(patchUsersIdIndexRoute, patchUsersIdIndexRouteHandler)
  .openapi(putUsersIdIndexRoute, putUsersIdIndexRouteHandler)
  .openapi(postUsersIdActivateIndexRoute, postUsersIdActivateIndexRouteHandler)
  .openapi(deleteUsersIdOnDutyIndexRoute, deleteUsersIdOnDutyIndexRouteHandler)
  .openapi(getUsersIdOnDutyIndexRoute, getUsersIdOnDutyIndexRouteHandler)
  .openapi(putUsersIdOnDutyIndexRoute, putUsersIdOnDutyIndexRouteHandler)
  .openapi(getUsersOnDutyLogIndexRoute, getUsersOnDutyLogIndexRouteHandler)
  .openapi(postUsersOnDutyLogIndexRoute, postUsersOnDutyLogIndexRouteHandler)
  .openapi(getUsersOnDutyLogIdIndexRoute, getUsersOnDutyLogIdIndexRouteHandler)
  .openapi(getWebhooksIndexRoute, getWebhooksIndexRouteHandler)
  .openapi(postWebhooksIndexRoute, postWebhooksIndexRouteHandler)
  .openapi(deleteWebhooksIdIndexRoute, deleteWebhooksIdIndexRouteHandler)
  .openapi(getWebhooksIdIndexRoute, getWebhooksIdIndexRouteHandler)
  .openapi(patchWebhooksIdIndexRoute, patchWebhooksIdIndexRouteHandler)
  .openapi(putWebhooksIdIndexRoute, putWebhooksIdIndexRouteHandler)
  .openapi(postWebhooksIdActiveIndexRoute, postWebhooksIdActiveIndexRouteHandler)
  .openapi(postWebhooksIdInactiveIndexRoute, postWebhooksIdInactiveIndexRouteHandler)
  .openapi(getWorkerFeaturesIndexRoute, getWorkerFeaturesIndexRouteHandler)
  .openapi(getWorkerFeaturesUserIdIndexRoute, getWorkerFeaturesUserIdIndexRouteHandler)
  .openapi(getWorkerTracksIndexRoute, getWorkerTracksIndexRouteHandler)
  .openapi(getWorkingStateIndexRoute, getWorkingStateIndexRouteHandler)
  .openapi(postWorkingStateIndexRoute, postWorkingStateIndexRouteHandler)
  .openapi(getWorkingStateIdIndexRoute, getWorkingStateIdIndexRouteHandler)

export default app
