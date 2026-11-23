import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmailListsIdRoute,
  deleteFormsEntriesIdRoute,
  deleteNotificationsIdRoute,
  deleteResourcesIdRoute,
  deleteResourcesRoute,
  deleteSharesIdRoute,
  deleteSshKeysIdRoute,
  deleteUsersIdRoute,
  deleteWebhooksIdRoute,
  getAccountRoute,
  getActivitySessionRoute,
  getActivityWebhooksRoute,
  getEmailListsIdRoute,
  getEmailListsRoute,
  getFormsEntriesIdRoute,
  getFormsIdRoute,
  getFormsRoute,
  getNotificationsIdRoute,
  getNotificationsRoute,
  getResourcesDownloadRoute,
  getResourcesIdRoute,
  getResourcesListIdRoute,
  getResourcesListRoute,
  getResourcesPreviewRoute,
  getResourcesRoute,
  getSharesIdRoute,
  getSharesRoute,
  getSshKeysIdRoute,
  getSshKeysRoute,
  getUsersIdRoute,
  getUsersRoute,
  getWebhooksIdRoute,
  getWebhooksRoute,
  patchAccountRoute,
  patchEmailListsIdRoute,
  patchFormsIdRoute,
  patchNotificationsIdRoute,
  patchResourcesIdRoute,
  patchSharesIdRoute,
  patchUsersIdRoute,
  patchWebhooksIdRoute,
  postEmailListsRoute,
  postEmailReferralRoute,
  postEmailWelcomeUsernameRoute,
  postNotificationsRoute,
  postRecipientsSharesInvitesShareIdRoute,
  postResourcesCompressRoute,
  postResourcesCopyRoute,
  postResourcesExtractRoute,
  postResourcesMoveRoute,
  postResourcesRoute,
  postResourcesUploadRoute,
  postSharesCompleteSendIdRoute,
  postSharesRoute,
  postSshKeysRoute,
  postUsersRoute,
  postWebhooksRegenerateTokenIdRoute,
  postWebhooksResendActivityIdRoute,
  postWebhooksRoute,
} from './routes'
import {
  deleteEmailListsIdRouteHandler,
  deleteFormsEntriesIdRouteHandler,
  deleteNotificationsIdRouteHandler,
  deleteResourcesIdRouteHandler,
  deleteResourcesRouteHandler,
  deleteSharesIdRouteHandler,
  deleteSshKeysIdRouteHandler,
  deleteUsersIdRouteHandler,
  deleteWebhooksIdRouteHandler,
  getAccountRouteHandler,
  getActivitySessionRouteHandler,
  getActivityWebhooksRouteHandler,
  getEmailListsIdRouteHandler,
  getEmailListsRouteHandler,
  getFormsEntriesIdRouteHandler,
  getFormsIdRouteHandler,
  getFormsRouteHandler,
  getNotificationsIdRouteHandler,
  getNotificationsRouteHandler,
  getResourcesDownloadRouteHandler,
  getResourcesIdRouteHandler,
  getResourcesListIdRouteHandler,
  getResourcesListRouteHandler,
  getResourcesPreviewRouteHandler,
  getResourcesRouteHandler,
  getSharesIdRouteHandler,
  getSharesRouteHandler,
  getSshKeysIdRouteHandler,
  getSshKeysRouteHandler,
  getUsersIdRouteHandler,
  getUsersRouteHandler,
  getWebhooksIdRouteHandler,
  getWebhooksRouteHandler,
  patchAccountRouteHandler,
  patchEmailListsIdRouteHandler,
  patchFormsIdRouteHandler,
  patchNotificationsIdRouteHandler,
  patchResourcesIdRouteHandler,
  patchSharesIdRouteHandler,
  patchUsersIdRouteHandler,
  patchWebhooksIdRouteHandler,
  postEmailListsRouteHandler,
  postEmailReferralRouteHandler,
  postEmailWelcomeUsernameRouteHandler,
  postNotificationsRouteHandler,
  postRecipientsSharesInvitesShareIdRouteHandler,
  postResourcesCompressRouteHandler,
  postResourcesCopyRouteHandler,
  postResourcesExtractRouteHandler,
  postResourcesMoveRouteHandler,
  postResourcesRouteHandler,
  postResourcesUploadRouteHandler,
  postSharesCompleteSendIdRouteHandler,
  postSharesRouteHandler,
  postSshKeysRouteHandler,
  postUsersRouteHandler,
  postWebhooksRegenerateTokenIdRouteHandler,
  postWebhooksResendActivityIdRouteHandler,
  postWebhooksRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountRoute, getAccountRouteHandler)
  .openapi(patchAccountRoute, patchAccountRouteHandler)
  .openapi(getActivitySessionRoute, getActivitySessionRouteHandler)
  .openapi(getActivityWebhooksRoute, getActivityWebhooksRouteHandler)
  .openapi(getEmailListsRoute, getEmailListsRouteHandler)
  .openapi(postEmailListsRoute, postEmailListsRouteHandler)
  .openapi(deleteEmailListsIdRoute, deleteEmailListsIdRouteHandler)
  .openapi(getEmailListsIdRoute, getEmailListsIdRouteHandler)
  .openapi(patchEmailListsIdRoute, patchEmailListsIdRouteHandler)
  .openapi(postEmailReferralRoute, postEmailReferralRouteHandler)
  .openapi(postEmailWelcomeUsernameRoute, postEmailWelcomeUsernameRouteHandler)
  .openapi(getFormsRoute, getFormsRouteHandler)
  .openapi(deleteFormsEntriesIdRoute, deleteFormsEntriesIdRouteHandler)
  .openapi(getFormsEntriesIdRoute, getFormsEntriesIdRouteHandler)
  .openapi(getFormsIdRoute, getFormsIdRouteHandler)
  .openapi(patchFormsIdRoute, patchFormsIdRouteHandler)
  .openapi(getNotificationsRoute, getNotificationsRouteHandler)
  .openapi(postNotificationsRoute, postNotificationsRouteHandler)
  .openapi(deleteNotificationsIdRoute, deleteNotificationsIdRouteHandler)
  .openapi(getNotificationsIdRoute, getNotificationsIdRouteHandler)
  .openapi(patchNotificationsIdRoute, patchNotificationsIdRouteHandler)
  .openapi(postRecipientsSharesInvitesShareIdRoute, postRecipientsSharesInvitesShareIdRouteHandler)
  .openapi(deleteResourcesRoute, deleteResourcesRouteHandler)
  .openapi(getResourcesRoute, getResourcesRouteHandler)
  .openapi(postResourcesRoute, postResourcesRouteHandler)
  .openapi(postResourcesCompressRoute, postResourcesCompressRouteHandler)
  .openapi(postResourcesCopyRoute, postResourcesCopyRouteHandler)
  .openapi(getResourcesDownloadRoute, getResourcesDownloadRouteHandler)
  .openapi(postResourcesExtractRoute, postResourcesExtractRouteHandler)
  .openapi(getResourcesListRoute, getResourcesListRouteHandler)
  .openapi(getResourcesListIdRoute, getResourcesListIdRouteHandler)
  .openapi(postResourcesMoveRoute, postResourcesMoveRouteHandler)
  .openapi(getResourcesPreviewRoute, getResourcesPreviewRouteHandler)
  .openapi(postResourcesUploadRoute, postResourcesUploadRouteHandler)
  .openapi(deleteResourcesIdRoute, deleteResourcesIdRouteHandler)
  .openapi(getResourcesIdRoute, getResourcesIdRouteHandler)
  .openapi(patchResourcesIdRoute, patchResourcesIdRouteHandler)
  .openapi(getSharesRoute, getSharesRouteHandler)
  .openapi(postSharesRoute, postSharesRouteHandler)
  .openapi(postSharesCompleteSendIdRoute, postSharesCompleteSendIdRouteHandler)
  .openapi(deleteSharesIdRoute, deleteSharesIdRouteHandler)
  .openapi(getSharesIdRoute, getSharesIdRouteHandler)
  .openapi(patchSharesIdRoute, patchSharesIdRouteHandler)
  .openapi(getSshKeysRoute, getSshKeysRouteHandler)
  .openapi(postSshKeysRoute, postSshKeysRouteHandler)
  .openapi(deleteSshKeysIdRoute, deleteSshKeysIdRouteHandler)
  .openapi(getSshKeysIdRoute, getSshKeysIdRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(deleteUsersIdRoute, deleteUsersIdRouteHandler)
  .openapi(getUsersIdRoute, getUsersIdRouteHandler)
  .openapi(patchUsersIdRoute, patchUsersIdRouteHandler)
  .openapi(getWebhooksRoute, getWebhooksRouteHandler)
  .openapi(postWebhooksRoute, postWebhooksRouteHandler)
  .openapi(postWebhooksRegenerateTokenIdRoute, postWebhooksRegenerateTokenIdRouteHandler)
  .openapi(postWebhooksResendActivityIdRoute, postWebhooksResendActivityIdRouteHandler)
  .openapi(deleteWebhooksIdRoute, deleteWebhooksIdRouteHandler)
  .openapi(getWebhooksIdRoute, getWebhooksIdRouteHandler)
  .openapi(patchWebhooksIdRoute, patchWebhooksIdRouteHandler)

export default app
