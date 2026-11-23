import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accessRequestsApproveHandler,
  accessRequestsCreateHandler,
  accessRequestsDismissHandler,
  accessRequestsInfoHandler,
  apiKeysCreateHandler,
  apiKeysDeleteHandler,
  apiKeysListHandler,
  attachmentsCreateFromUrlHandler,
  attachmentsCreateHandler,
  attachmentsDeleteHandler,
  attachmentsListHandler,
  attachmentsRedirectHandler,
  authConfigHandler,
  authDeleteHandler,
  authInfoHandler,
  collectionsAddGroupHandler,
  collectionsAddUserHandler,
  collectionsArchiveHandler,
  collectionsCreateHandler,
  collectionsDeleteHandler,
  collectionsDocumentsHandler,
  collectionsDuplicateHandler,
  collectionsExportAllHandler,
  collectionsExportHandler,
  collectionsGroupMembershipsHandler,
  collectionsImportHandler,
  collectionsInfoHandler,
  collectionsListHandler,
  collectionsMembershipsHandler,
  collectionsMoveHandler,
  collectionsRemoveGroupHandler,
  collectionsRemoveUserHandler,
  collectionsRestoreHandler,
  collectionsUpdateHandler,
  commentsAddReactionHandler,
  commentsCreateHandler,
  commentsDeleteHandler,
  commentsInfoHandler,
  commentsListHandler,
  commentsRemoveReactionHandler,
  commentsResolveHandler,
  commentsUnresolveHandler,
  commentsUpdateHandler,
  dataAttributesCreateHandler,
  dataAttributesDeleteHandler,
  dataAttributesInfoHandler,
  dataAttributesListHandler,
  dataAttributesUpdateHandler,
  documentsAddGroupHandler,
  documentsAddUserHandler,
  documentsAnswerQuestionHandler,
  documentsArchivedHandler,
  documentsArchiveHandler,
  documentsCreateHandler,
  documentsDeletedHandler,
  documentsDeleteHandler,
  documentsDocumentsHandler,
  documentsDraftsHandler,
  documentsDuplicateHandler,
  documentsEmptyTrashHandler,
  documentsExportHandler,
  documentsGroupMembershipsHandler,
  documentsImportHandler,
  documentsInfoHandler,
  documentsInsightsHandler,
  documentsListHandler,
  documentsMembershipsHandler,
  documentsMoveHandler,
  documentsRemoveGroupHandler,
  documentsRemoveUserHandler,
  documentsRestoreHandler,
  documentsSearchHandler,
  documentsSearchTitlesHandler,
  documentsTemplatizeHandler,
  documentsUnpublishHandler,
  documentsUpdateHandler,
  documentsUsersHandler,
  documentsViewedHandler,
  eventsListHandler,
  fileOperationsDeleteHandler,
  fileOperationsInfoHandler,
  fileOperationsListHandler,
  fileOperationsRedirectHandler,
  groupMembershipsListHandler,
  groupsAddUserHandler,
  groupsCreateHandler,
  groupsDeleteHandler,
  groupsInfoHandler,
  groupsListHandler,
  groupsMembershipsHandler,
  groupsRemoveUserHandler,
  groupsUpdateHandler,
  groupsUpdateUserHandler,
  notificationsListHandler,
  notificationsUpdateAllHandler,
  notificationsUpdateHandler,
  oauthAuthenticationsDeleteHandler,
  oauthAuthenticationsListHandler,
  oauthClientsCreateHandler,
  oauthClientsDeleteHandler,
  oauthClientsInfoHandler,
  oauthClientsListHandler,
  oauthClientsRotateSecretHandler,
  oauthClientsUpdateHandler,
  pinsCreateHandler,
  pinsDeleteHandler,
  pinsInfoHandler,
  pinsListHandler,
  pinsUpdateHandler,
  reactionsListHandler,
  revisionsDeleteHandler,
  revisionsExportHandler,
  revisionsInfoHandler,
  revisionsListHandler,
  revisionsUpdateHandler,
  sharesCreateHandler,
  sharesInfoHandler,
  sharesListHandler,
  sharesRevokeHandler,
  sharesUpdateHandler,
  starsCreateHandler,
  starsDeleteHandler,
  starsListHandler,
  starsUpdateHandler,
  subscriptionsCreateHandler,
  subscriptionsDeleteHandler,
  subscriptionsInfoHandler,
  subscriptionsListHandler,
  templatesCreateHandler,
  templatesDeleteHandler,
  templatesDuplicateHandler,
  templatesInfoHandler,
  templatesListHandler,
  templatesRestoreHandler,
  templatesUpdateHandler,
  userMembershipsListHandler,
  userMembershipsUpdateHandler,
  usersActivateHandler,
  usersDeleteHandler,
  usersInfoHandler,
  usersInviteHandler,
  usersListHandler,
  usersNotificationsSubscribeHandler,
  usersNotificationsUnsubscribeHandler,
  usersResendInviteHandler,
  usersSuspendHandler,
  usersUpdateHandler,
  usersUpdateRoleHandler,
  viewsListHandler,
  webhookSubscriptionsCreateHandler,
  webhookSubscriptionsDeleteHandler,
  webhookSubscriptionsListHandler,
  webhookSubscriptionsUpdateHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accessRequestsCreateHandler)
  .route('/', accessRequestsInfoHandler)
  .route('/', accessRequestsApproveHandler)
  .route('/', accessRequestsDismissHandler)
  .route('/', apiKeysCreateHandler)
  .route('/', apiKeysListHandler)
  .route('/', apiKeysDeleteHandler)
  .route('/', attachmentsCreateHandler)
  .route('/', attachmentsRedirectHandler)
  .route('/', attachmentsDeleteHandler)
  .route('/', attachmentsListHandler)
  .route('/', attachmentsCreateFromUrlHandler)
  .route('/', authInfoHandler)
  .route('/', authConfigHandler)
  .route('/', authDeleteHandler)
  .route('/', collectionsInfoHandler)
  .route('/', collectionsDocumentsHandler)
  .route('/', collectionsListHandler)
  .route('/', collectionsCreateHandler)
  .route('/', collectionsDuplicateHandler)
  .route('/', collectionsUpdateHandler)
  .route('/', collectionsAddUserHandler)
  .route('/', collectionsRemoveUserHandler)
  .route('/', collectionsMembershipsHandler)
  .route('/', collectionsAddGroupHandler)
  .route('/', collectionsRemoveGroupHandler)
  .route('/', collectionsGroupMembershipsHandler)
  .route('/', collectionsDeleteHandler)
  .route('/', collectionsExportHandler)
  .route('/', collectionsExportAllHandler)
  .route('/', collectionsArchiveHandler)
  .route('/', collectionsRestoreHandler)
  .route('/', collectionsMoveHandler)
  .route('/', collectionsImportHandler)
  .route('/', commentsCreateHandler)
  .route('/', commentsInfoHandler)
  .route('/', commentsUpdateHandler)
  .route('/', commentsDeleteHandler)
  .route('/', commentsListHandler)
  .route('/', commentsResolveHandler)
  .route('/', commentsUnresolveHandler)
  .route('/', commentsAddReactionHandler)
  .route('/', commentsRemoveReactionHandler)
  .route('/', dataAttributesInfoHandler)
  .route('/', dataAttributesListHandler)
  .route('/', dataAttributesCreateHandler)
  .route('/', dataAttributesUpdateHandler)
  .route('/', dataAttributesDeleteHandler)
  .route('/', documentsInfoHandler)
  .route('/', documentsInsightsHandler)
  .route('/', documentsImportHandler)
  .route('/', documentsExportHandler)
  .route('/', documentsListHandler)
  .route('/', documentsDocumentsHandler)
  .route('/', documentsDraftsHandler)
  .route('/', documentsViewedHandler)
  .route('/', documentsAnswerQuestionHandler)
  .route('/', documentsSearchTitlesHandler)
  .route('/', documentsSearchHandler)
  .route('/', documentsCreateHandler)
  .route('/', documentsUpdateHandler)
  .route('/', documentsTemplatizeHandler)
  .route('/', documentsUnpublishHandler)
  .route('/', documentsMoveHandler)
  .route('/', documentsArchiveHandler)
  .route('/', documentsRestoreHandler)
  .route('/', documentsDeleteHandler)
  .route('/', documentsUsersHandler)
  .route('/', documentsMembershipsHandler)
  .route('/', documentsAddUserHandler)
  .route('/', documentsRemoveUserHandler)
  .route('/', documentsArchivedHandler)
  .route('/', documentsDeletedHandler)
  .route('/', documentsDuplicateHandler)
  .route('/', documentsAddGroupHandler)
  .route('/', documentsRemoveGroupHandler)
  .route('/', documentsGroupMembershipsHandler)
  .route('/', documentsEmptyTrashHandler)
  .route('/', eventsListHandler)
  .route('/', fileOperationsInfoHandler)
  .route('/', fileOperationsDeleteHandler)
  .route('/', fileOperationsRedirectHandler)
  .route('/', fileOperationsListHandler)
  .route('/', groupMembershipsListHandler)
  .route('/', groupsInfoHandler)
  .route('/', groupsListHandler)
  .route('/', groupsCreateHandler)
  .route('/', groupsUpdateHandler)
  .route('/', groupsDeleteHandler)
  .route('/', groupsMembershipsHandler)
  .route('/', groupsAddUserHandler)
  .route('/', groupsRemoveUserHandler)
  .route('/', groupsUpdateUserHandler)
  .route('/', notificationsListHandler)
  .route('/', notificationsUpdateHandler)
  .route('/', notificationsUpdateAllHandler)
  .route('/', oauthAuthenticationsListHandler)
  .route('/', oauthAuthenticationsDeleteHandler)
  .route('/', oauthClientsInfoHandler)
  .route('/', oauthClientsListHandler)
  .route('/', oauthClientsCreateHandler)
  .route('/', oauthClientsUpdateHandler)
  .route('/', oauthClientsRotateSecretHandler)
  .route('/', oauthClientsDeleteHandler)
  .route('/', pinsCreateHandler)
  .route('/', pinsInfoHandler)
  .route('/', pinsListHandler)
  .route('/', pinsUpdateHandler)
  .route('/', pinsDeleteHandler)
  .route('/', reactionsListHandler)
  .route('/', revisionsInfoHandler)
  .route('/', revisionsListHandler)
  .route('/', revisionsUpdateHandler)
  .route('/', revisionsDeleteHandler)
  .route('/', revisionsExportHandler)
  .route('/', sharesInfoHandler)
  .route('/', sharesListHandler)
  .route('/', sharesCreateHandler)
  .route('/', sharesUpdateHandler)
  .route('/', sharesRevokeHandler)
  .route('/', starsCreateHandler)
  .route('/', starsListHandler)
  .route('/', starsUpdateHandler)
  .route('/', starsDeleteHandler)
  .route('/', subscriptionsListHandler)
  .route('/', subscriptionsInfoHandler)
  .route('/', subscriptionsCreateHandler)
  .route('/', subscriptionsDeleteHandler)
  .route('/', templatesCreateHandler)
  .route('/', templatesListHandler)
  .route('/', templatesInfoHandler)
  .route('/', templatesUpdateHandler)
  .route('/', templatesDeleteHandler)
  .route('/', templatesRestoreHandler)
  .route('/', templatesDuplicateHandler)
  .route('/', userMembershipsListHandler)
  .route('/', userMembershipsUpdateHandler)
  .route('/', usersInviteHandler)
  .route('/', usersInfoHandler)
  .route('/', usersListHandler)
  .route('/', usersUpdateHandler)
  .route('/', usersUpdateRoleHandler)
  .route('/', usersSuspendHandler)
  .route('/', usersActivateHandler)
  .route('/', usersDeleteHandler)
  .route('/', usersResendInviteHandler)
  .route('/', usersNotificationsSubscribeHandler)
  .route('/', usersNotificationsUnsubscribeHandler)
  .route('/', viewsListHandler)
  .route('/', webhookSubscriptionsListHandler)
  .route('/', webhookSubscriptionsCreateHandler)
  .route('/', webhookSubscriptionsUpdateHandler)
  .route('/', webhookSubscriptionsDeleteHandler)

export default app
