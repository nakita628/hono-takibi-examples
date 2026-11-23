import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAccessRequestsApproveRoute,
  postAccessRequestsCreateRoute,
  postAccessRequestsDismissRoute,
  postAccessRequestsInfoRoute,
  postApiKeysCreateRoute,
  postApiKeysDeleteRoute,
  postApiKeysListRoute,
  postAttachmentsCreateFromUrlRoute,
  postAttachmentsCreateRoute,
  postAttachmentsDeleteRoute,
  postAttachmentsListRoute,
  postAttachmentsRedirectRoute,
  postAuthConfigRoute,
  postAuthDeleteRoute,
  postAuthInfoRoute,
  postCollectionsAddGroupRoute,
  postCollectionsAddUserRoute,
  postCollectionsArchiveRoute,
  postCollectionsCreateRoute,
  postCollectionsDeleteRoute,
  postCollectionsDocumentsRoute,
  postCollectionsDuplicateRoute,
  postCollectionsExportAllRoute,
  postCollectionsExportRoute,
  postCollectionsGroupMembershipsRoute,
  postCollectionsImportRoute,
  postCollectionsInfoRoute,
  postCollectionsListRoute,
  postCollectionsMembershipsRoute,
  postCollectionsMoveRoute,
  postCollectionsRemoveGroupRoute,
  postCollectionsRemoveUserRoute,
  postCollectionsRestoreRoute,
  postCollectionsUpdateRoute,
  postCommentsAddReactionRoute,
  postCommentsCreateRoute,
  postCommentsDeleteRoute,
  postCommentsInfoRoute,
  postCommentsListRoute,
  postCommentsRemoveReactionRoute,
  postCommentsResolveRoute,
  postCommentsUnresolveRoute,
  postCommentsUpdateRoute,
  postDataAttributesCreateRoute,
  postDataAttributesDeleteRoute,
  postDataAttributesInfoRoute,
  postDataAttributesListRoute,
  postDataAttributesUpdateRoute,
  postDocumentsAddGroupRoute,
  postDocumentsAddUserRoute,
  postDocumentsAnswerQuestionRoute,
  postDocumentsArchivedRoute,
  postDocumentsArchiveRoute,
  postDocumentsCreateRoute,
  postDocumentsDeletedRoute,
  postDocumentsDeleteRoute,
  postDocumentsDocumentsRoute,
  postDocumentsDraftsRoute,
  postDocumentsDuplicateRoute,
  postDocumentsEmptyTrashRoute,
  postDocumentsExportRoute,
  postDocumentsGroupMembershipsRoute,
  postDocumentsImportRoute,
  postDocumentsInfoRoute,
  postDocumentsInsightsRoute,
  postDocumentsListRoute,
  postDocumentsMembershipsRoute,
  postDocumentsMoveRoute,
  postDocumentsRemoveGroupRoute,
  postDocumentsRemoveUserRoute,
  postDocumentsRestoreRoute,
  postDocumentsSearchRoute,
  postDocumentsSearchTitlesRoute,
  postDocumentsTemplatizeRoute,
  postDocumentsUnpublishRoute,
  postDocumentsUpdateRoute,
  postDocumentsUsersRoute,
  postDocumentsViewedRoute,
  postEventsListRoute,
  postFileOperationsDeleteRoute,
  postFileOperationsInfoRoute,
  postFileOperationsListRoute,
  postFileOperationsRedirectRoute,
  postGroupMembershipsListRoute,
  postGroupsAddUserRoute,
  postGroupsCreateRoute,
  postGroupsDeleteRoute,
  postGroupsInfoRoute,
  postGroupsListRoute,
  postGroupsMembershipsRoute,
  postGroupsRemoveUserRoute,
  postGroupsUpdateRoute,
  postGroupsUpdateUserRoute,
  postNotificationsListRoute,
  postNotificationsUpdateAllRoute,
  postNotificationsUpdateRoute,
  postOauthAuthenticationsDeleteRoute,
  postOauthAuthenticationsListRoute,
  postOauthClientsCreateRoute,
  postOauthClientsDeleteRoute,
  postOauthClientsInfoRoute,
  postOauthClientsListRoute,
  postOauthClientsRotateSecretRoute,
  postOauthClientsUpdateRoute,
  postPinsCreateRoute,
  postPinsDeleteRoute,
  postPinsInfoRoute,
  postPinsListRoute,
  postPinsUpdateRoute,
  postReactionsListRoute,
  postRevisionsDeleteRoute,
  postRevisionsExportRoute,
  postRevisionsInfoRoute,
  postRevisionsListRoute,
  postRevisionsUpdateRoute,
  postSharesCreateRoute,
  postSharesInfoRoute,
  postSharesListRoute,
  postSharesRevokeRoute,
  postSharesUpdateRoute,
  postStarsCreateRoute,
  postStarsDeleteRoute,
  postStarsListRoute,
  postStarsUpdateRoute,
  postSubscriptionsCreateRoute,
  postSubscriptionsDeleteRoute,
  postSubscriptionsInfoRoute,
  postSubscriptionsListRoute,
  postTemplatesCreateRoute,
  postTemplatesDeleteRoute,
  postTemplatesDuplicateRoute,
  postTemplatesInfoRoute,
  postTemplatesListRoute,
  postTemplatesRestoreRoute,
  postTemplatesUpdateRoute,
  postUserMembershipsListRoute,
  postUserMembershipsUpdateRoute,
  postUsersActivateRoute,
  postUsersDeleteRoute,
  postUsersInfoRoute,
  postUsersInviteRoute,
  postUsersListRoute,
  postUsersNotificationsSubscribeRoute,
  postUsersNotificationsUnsubscribeRoute,
  postUsersResendInviteRoute,
  postUsersSuspendRoute,
  postUsersUpdateRoleRoute,
  postUsersUpdateRoute,
  postViewsListRoute,
  postWebhookSubscriptionsCreateRoute,
  postWebhookSubscriptionsDeleteRoute,
  postWebhookSubscriptionsListRoute,
  postWebhookSubscriptionsUpdateRoute,
} from './routes'
import {
  postAccessRequestsApproveRouteHandler,
  postAccessRequestsCreateRouteHandler,
  postAccessRequestsDismissRouteHandler,
  postAccessRequestsInfoRouteHandler,
  postApiKeysCreateRouteHandler,
  postApiKeysDeleteRouteHandler,
  postApiKeysListRouteHandler,
  postAttachmentsCreateFromUrlRouteHandler,
  postAttachmentsCreateRouteHandler,
  postAttachmentsDeleteRouteHandler,
  postAttachmentsListRouteHandler,
  postAttachmentsRedirectRouteHandler,
  postAuthConfigRouteHandler,
  postAuthDeleteRouteHandler,
  postAuthInfoRouteHandler,
  postCollectionsAddGroupRouteHandler,
  postCollectionsAddUserRouteHandler,
  postCollectionsArchiveRouteHandler,
  postCollectionsCreateRouteHandler,
  postCollectionsDeleteRouteHandler,
  postCollectionsDocumentsRouteHandler,
  postCollectionsDuplicateRouteHandler,
  postCollectionsExportAllRouteHandler,
  postCollectionsExportRouteHandler,
  postCollectionsGroupMembershipsRouteHandler,
  postCollectionsImportRouteHandler,
  postCollectionsInfoRouteHandler,
  postCollectionsListRouteHandler,
  postCollectionsMembershipsRouteHandler,
  postCollectionsMoveRouteHandler,
  postCollectionsRemoveGroupRouteHandler,
  postCollectionsRemoveUserRouteHandler,
  postCollectionsRestoreRouteHandler,
  postCollectionsUpdateRouteHandler,
  postCommentsAddReactionRouteHandler,
  postCommentsCreateRouteHandler,
  postCommentsDeleteRouteHandler,
  postCommentsInfoRouteHandler,
  postCommentsListRouteHandler,
  postCommentsRemoveReactionRouteHandler,
  postCommentsResolveRouteHandler,
  postCommentsUnresolveRouteHandler,
  postCommentsUpdateRouteHandler,
  postDataAttributesCreateRouteHandler,
  postDataAttributesDeleteRouteHandler,
  postDataAttributesInfoRouteHandler,
  postDataAttributesListRouteHandler,
  postDataAttributesUpdateRouteHandler,
  postDocumentsAddGroupRouteHandler,
  postDocumentsAddUserRouteHandler,
  postDocumentsAnswerQuestionRouteHandler,
  postDocumentsArchivedRouteHandler,
  postDocumentsArchiveRouteHandler,
  postDocumentsCreateRouteHandler,
  postDocumentsDeletedRouteHandler,
  postDocumentsDeleteRouteHandler,
  postDocumentsDocumentsRouteHandler,
  postDocumentsDraftsRouteHandler,
  postDocumentsDuplicateRouteHandler,
  postDocumentsEmptyTrashRouteHandler,
  postDocumentsExportRouteHandler,
  postDocumentsGroupMembershipsRouteHandler,
  postDocumentsImportRouteHandler,
  postDocumentsInfoRouteHandler,
  postDocumentsInsightsRouteHandler,
  postDocumentsListRouteHandler,
  postDocumentsMembershipsRouteHandler,
  postDocumentsMoveRouteHandler,
  postDocumentsRemoveGroupRouteHandler,
  postDocumentsRemoveUserRouteHandler,
  postDocumentsRestoreRouteHandler,
  postDocumentsSearchRouteHandler,
  postDocumentsSearchTitlesRouteHandler,
  postDocumentsTemplatizeRouteHandler,
  postDocumentsUnpublishRouteHandler,
  postDocumentsUpdateRouteHandler,
  postDocumentsUsersRouteHandler,
  postDocumentsViewedRouteHandler,
  postEventsListRouteHandler,
  postFileOperationsDeleteRouteHandler,
  postFileOperationsInfoRouteHandler,
  postFileOperationsListRouteHandler,
  postFileOperationsRedirectRouteHandler,
  postGroupMembershipsListRouteHandler,
  postGroupsAddUserRouteHandler,
  postGroupsCreateRouteHandler,
  postGroupsDeleteRouteHandler,
  postGroupsInfoRouteHandler,
  postGroupsListRouteHandler,
  postGroupsMembershipsRouteHandler,
  postGroupsRemoveUserRouteHandler,
  postGroupsUpdateRouteHandler,
  postGroupsUpdateUserRouteHandler,
  postNotificationsListRouteHandler,
  postNotificationsUpdateAllRouteHandler,
  postNotificationsUpdateRouteHandler,
  postOauthAuthenticationsDeleteRouteHandler,
  postOauthAuthenticationsListRouteHandler,
  postOauthClientsCreateRouteHandler,
  postOauthClientsDeleteRouteHandler,
  postOauthClientsInfoRouteHandler,
  postOauthClientsListRouteHandler,
  postOauthClientsRotateSecretRouteHandler,
  postOauthClientsUpdateRouteHandler,
  postPinsCreateRouteHandler,
  postPinsDeleteRouteHandler,
  postPinsInfoRouteHandler,
  postPinsListRouteHandler,
  postPinsUpdateRouteHandler,
  postReactionsListRouteHandler,
  postRevisionsDeleteRouteHandler,
  postRevisionsExportRouteHandler,
  postRevisionsInfoRouteHandler,
  postRevisionsListRouteHandler,
  postRevisionsUpdateRouteHandler,
  postSharesCreateRouteHandler,
  postSharesInfoRouteHandler,
  postSharesListRouteHandler,
  postSharesRevokeRouteHandler,
  postSharesUpdateRouteHandler,
  postStarsCreateRouteHandler,
  postStarsDeleteRouteHandler,
  postStarsListRouteHandler,
  postStarsUpdateRouteHandler,
  postSubscriptionsCreateRouteHandler,
  postSubscriptionsDeleteRouteHandler,
  postSubscriptionsInfoRouteHandler,
  postSubscriptionsListRouteHandler,
  postTemplatesCreateRouteHandler,
  postTemplatesDeleteRouteHandler,
  postTemplatesDuplicateRouteHandler,
  postTemplatesInfoRouteHandler,
  postTemplatesListRouteHandler,
  postTemplatesRestoreRouteHandler,
  postTemplatesUpdateRouteHandler,
  postUserMembershipsListRouteHandler,
  postUserMembershipsUpdateRouteHandler,
  postUsersActivateRouteHandler,
  postUsersDeleteRouteHandler,
  postUsersInfoRouteHandler,
  postUsersInviteRouteHandler,
  postUsersListRouteHandler,
  postUsersNotificationsSubscribeRouteHandler,
  postUsersNotificationsUnsubscribeRouteHandler,
  postUsersResendInviteRouteHandler,
  postUsersSuspendRouteHandler,
  postUsersUpdateRoleRouteHandler,
  postUsersUpdateRouteHandler,
  postViewsListRouteHandler,
  postWebhookSubscriptionsCreateRouteHandler,
  postWebhookSubscriptionsDeleteRouteHandler,
  postWebhookSubscriptionsListRouteHandler,
  postWebhookSubscriptionsUpdateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAccessRequestsCreateRoute, postAccessRequestsCreateRouteHandler)
  .openapi(postAccessRequestsInfoRoute, postAccessRequestsInfoRouteHandler)
  .openapi(postAccessRequestsApproveRoute, postAccessRequestsApproveRouteHandler)
  .openapi(postAccessRequestsDismissRoute, postAccessRequestsDismissRouteHandler)
  .openapi(postApiKeysCreateRoute, postApiKeysCreateRouteHandler)
  .openapi(postApiKeysListRoute, postApiKeysListRouteHandler)
  .openapi(postApiKeysDeleteRoute, postApiKeysDeleteRouteHandler)
  .openapi(postAttachmentsCreateRoute, postAttachmentsCreateRouteHandler)
  .openapi(postAttachmentsRedirectRoute, postAttachmentsRedirectRouteHandler)
  .openapi(postAttachmentsDeleteRoute, postAttachmentsDeleteRouteHandler)
  .openapi(postAttachmentsListRoute, postAttachmentsListRouteHandler)
  .openapi(postAttachmentsCreateFromUrlRoute, postAttachmentsCreateFromUrlRouteHandler)
  .openapi(postAuthInfoRoute, postAuthInfoRouteHandler)
  .openapi(postAuthConfigRoute, postAuthConfigRouteHandler)
  .openapi(postAuthDeleteRoute, postAuthDeleteRouteHandler)
  .openapi(postCollectionsInfoRoute, postCollectionsInfoRouteHandler)
  .openapi(postCollectionsDocumentsRoute, postCollectionsDocumentsRouteHandler)
  .openapi(postCollectionsListRoute, postCollectionsListRouteHandler)
  .openapi(postCollectionsCreateRoute, postCollectionsCreateRouteHandler)
  .openapi(postCollectionsDuplicateRoute, postCollectionsDuplicateRouteHandler)
  .openapi(postCollectionsUpdateRoute, postCollectionsUpdateRouteHandler)
  .openapi(postCollectionsAddUserRoute, postCollectionsAddUserRouteHandler)
  .openapi(postCollectionsRemoveUserRoute, postCollectionsRemoveUserRouteHandler)
  .openapi(postCollectionsMembershipsRoute, postCollectionsMembershipsRouteHandler)
  .openapi(postCollectionsAddGroupRoute, postCollectionsAddGroupRouteHandler)
  .openapi(postCollectionsRemoveGroupRoute, postCollectionsRemoveGroupRouteHandler)
  .openapi(postCollectionsGroupMembershipsRoute, postCollectionsGroupMembershipsRouteHandler)
  .openapi(postCollectionsDeleteRoute, postCollectionsDeleteRouteHandler)
  .openapi(postCollectionsExportRoute, postCollectionsExportRouteHandler)
  .openapi(postCollectionsExportAllRoute, postCollectionsExportAllRouteHandler)
  .openapi(postCollectionsArchiveRoute, postCollectionsArchiveRouteHandler)
  .openapi(postCollectionsRestoreRoute, postCollectionsRestoreRouteHandler)
  .openapi(postCollectionsMoveRoute, postCollectionsMoveRouteHandler)
  .openapi(postCollectionsImportRoute, postCollectionsImportRouteHandler)
  .openapi(postCommentsCreateRoute, postCommentsCreateRouteHandler)
  .openapi(postCommentsInfoRoute, postCommentsInfoRouteHandler)
  .openapi(postCommentsUpdateRoute, postCommentsUpdateRouteHandler)
  .openapi(postCommentsDeleteRoute, postCommentsDeleteRouteHandler)
  .openapi(postCommentsListRoute, postCommentsListRouteHandler)
  .openapi(postCommentsResolveRoute, postCommentsResolveRouteHandler)
  .openapi(postCommentsUnresolveRoute, postCommentsUnresolveRouteHandler)
  .openapi(postCommentsAddReactionRoute, postCommentsAddReactionRouteHandler)
  .openapi(postCommentsRemoveReactionRoute, postCommentsRemoveReactionRouteHandler)
  .openapi(postDataAttributesInfoRoute, postDataAttributesInfoRouteHandler)
  .openapi(postDataAttributesListRoute, postDataAttributesListRouteHandler)
  .openapi(postDataAttributesCreateRoute, postDataAttributesCreateRouteHandler)
  .openapi(postDataAttributesUpdateRoute, postDataAttributesUpdateRouteHandler)
  .openapi(postDataAttributesDeleteRoute, postDataAttributesDeleteRouteHandler)
  .openapi(postDocumentsInfoRoute, postDocumentsInfoRouteHandler)
  .openapi(postDocumentsInsightsRoute, postDocumentsInsightsRouteHandler)
  .openapi(postDocumentsImportRoute, postDocumentsImportRouteHandler)
  .openapi(postDocumentsExportRoute, postDocumentsExportRouteHandler)
  .openapi(postDocumentsListRoute, postDocumentsListRouteHandler)
  .openapi(postDocumentsDocumentsRoute, postDocumentsDocumentsRouteHandler)
  .openapi(postDocumentsDraftsRoute, postDocumentsDraftsRouteHandler)
  .openapi(postDocumentsViewedRoute, postDocumentsViewedRouteHandler)
  .openapi(postDocumentsAnswerQuestionRoute, postDocumentsAnswerQuestionRouteHandler)
  .openapi(postDocumentsSearchTitlesRoute, postDocumentsSearchTitlesRouteHandler)
  .openapi(postDocumentsSearchRoute, postDocumentsSearchRouteHandler)
  .openapi(postDocumentsCreateRoute, postDocumentsCreateRouteHandler)
  .openapi(postDocumentsUpdateRoute, postDocumentsUpdateRouteHandler)
  .openapi(postDocumentsTemplatizeRoute, postDocumentsTemplatizeRouteHandler)
  .openapi(postDocumentsUnpublishRoute, postDocumentsUnpublishRouteHandler)
  .openapi(postDocumentsMoveRoute, postDocumentsMoveRouteHandler)
  .openapi(postDocumentsArchiveRoute, postDocumentsArchiveRouteHandler)
  .openapi(postDocumentsRestoreRoute, postDocumentsRestoreRouteHandler)
  .openapi(postDocumentsDeleteRoute, postDocumentsDeleteRouteHandler)
  .openapi(postDocumentsUsersRoute, postDocumentsUsersRouteHandler)
  .openapi(postDocumentsMembershipsRoute, postDocumentsMembershipsRouteHandler)
  .openapi(postDocumentsAddUserRoute, postDocumentsAddUserRouteHandler)
  .openapi(postDocumentsRemoveUserRoute, postDocumentsRemoveUserRouteHandler)
  .openapi(postDocumentsArchivedRoute, postDocumentsArchivedRouteHandler)
  .openapi(postDocumentsDeletedRoute, postDocumentsDeletedRouteHandler)
  .openapi(postDocumentsDuplicateRoute, postDocumentsDuplicateRouteHandler)
  .openapi(postDocumentsAddGroupRoute, postDocumentsAddGroupRouteHandler)
  .openapi(postDocumentsRemoveGroupRoute, postDocumentsRemoveGroupRouteHandler)
  .openapi(postDocumentsGroupMembershipsRoute, postDocumentsGroupMembershipsRouteHandler)
  .openapi(postDocumentsEmptyTrashRoute, postDocumentsEmptyTrashRouteHandler)
  .openapi(postEventsListRoute, postEventsListRouteHandler)
  .openapi(postFileOperationsInfoRoute, postFileOperationsInfoRouteHandler)
  .openapi(postFileOperationsDeleteRoute, postFileOperationsDeleteRouteHandler)
  .openapi(postFileOperationsRedirectRoute, postFileOperationsRedirectRouteHandler)
  .openapi(postFileOperationsListRoute, postFileOperationsListRouteHandler)
  .openapi(postGroupMembershipsListRoute, postGroupMembershipsListRouteHandler)
  .openapi(postGroupsInfoRoute, postGroupsInfoRouteHandler)
  .openapi(postGroupsListRoute, postGroupsListRouteHandler)
  .openapi(postGroupsCreateRoute, postGroupsCreateRouteHandler)
  .openapi(postGroupsUpdateRoute, postGroupsUpdateRouteHandler)
  .openapi(postGroupsDeleteRoute, postGroupsDeleteRouteHandler)
  .openapi(postGroupsMembershipsRoute, postGroupsMembershipsRouteHandler)
  .openapi(postGroupsAddUserRoute, postGroupsAddUserRouteHandler)
  .openapi(postGroupsRemoveUserRoute, postGroupsRemoveUserRouteHandler)
  .openapi(postGroupsUpdateUserRoute, postGroupsUpdateUserRouteHandler)
  .openapi(postNotificationsListRoute, postNotificationsListRouteHandler)
  .openapi(postNotificationsUpdateRoute, postNotificationsUpdateRouteHandler)
  .openapi(postNotificationsUpdateAllRoute, postNotificationsUpdateAllRouteHandler)
  .openapi(postOauthAuthenticationsListRoute, postOauthAuthenticationsListRouteHandler)
  .openapi(postOauthAuthenticationsDeleteRoute, postOauthAuthenticationsDeleteRouteHandler)
  .openapi(postOauthClientsInfoRoute, postOauthClientsInfoRouteHandler)
  .openapi(postOauthClientsListRoute, postOauthClientsListRouteHandler)
  .openapi(postOauthClientsCreateRoute, postOauthClientsCreateRouteHandler)
  .openapi(postOauthClientsUpdateRoute, postOauthClientsUpdateRouteHandler)
  .openapi(postOauthClientsRotateSecretRoute, postOauthClientsRotateSecretRouteHandler)
  .openapi(postOauthClientsDeleteRoute, postOauthClientsDeleteRouteHandler)
  .openapi(postPinsCreateRoute, postPinsCreateRouteHandler)
  .openapi(postPinsInfoRoute, postPinsInfoRouteHandler)
  .openapi(postPinsListRoute, postPinsListRouteHandler)
  .openapi(postPinsUpdateRoute, postPinsUpdateRouteHandler)
  .openapi(postPinsDeleteRoute, postPinsDeleteRouteHandler)
  .openapi(postReactionsListRoute, postReactionsListRouteHandler)
  .openapi(postRevisionsInfoRoute, postRevisionsInfoRouteHandler)
  .openapi(postRevisionsListRoute, postRevisionsListRouteHandler)
  .openapi(postRevisionsUpdateRoute, postRevisionsUpdateRouteHandler)
  .openapi(postRevisionsDeleteRoute, postRevisionsDeleteRouteHandler)
  .openapi(postRevisionsExportRoute, postRevisionsExportRouteHandler)
  .openapi(postSharesInfoRoute, postSharesInfoRouteHandler)
  .openapi(postSharesListRoute, postSharesListRouteHandler)
  .openapi(postSharesCreateRoute, postSharesCreateRouteHandler)
  .openapi(postSharesUpdateRoute, postSharesUpdateRouteHandler)
  .openapi(postSharesRevokeRoute, postSharesRevokeRouteHandler)
  .openapi(postStarsCreateRoute, postStarsCreateRouteHandler)
  .openapi(postStarsListRoute, postStarsListRouteHandler)
  .openapi(postStarsUpdateRoute, postStarsUpdateRouteHandler)
  .openapi(postStarsDeleteRoute, postStarsDeleteRouteHandler)
  .openapi(postSubscriptionsListRoute, postSubscriptionsListRouteHandler)
  .openapi(postSubscriptionsInfoRoute, postSubscriptionsInfoRouteHandler)
  .openapi(postSubscriptionsCreateRoute, postSubscriptionsCreateRouteHandler)
  .openapi(postSubscriptionsDeleteRoute, postSubscriptionsDeleteRouteHandler)
  .openapi(postTemplatesCreateRoute, postTemplatesCreateRouteHandler)
  .openapi(postTemplatesListRoute, postTemplatesListRouteHandler)
  .openapi(postTemplatesInfoRoute, postTemplatesInfoRouteHandler)
  .openapi(postTemplatesUpdateRoute, postTemplatesUpdateRouteHandler)
  .openapi(postTemplatesDeleteRoute, postTemplatesDeleteRouteHandler)
  .openapi(postTemplatesRestoreRoute, postTemplatesRestoreRouteHandler)
  .openapi(postTemplatesDuplicateRoute, postTemplatesDuplicateRouteHandler)
  .openapi(postUserMembershipsListRoute, postUserMembershipsListRouteHandler)
  .openapi(postUserMembershipsUpdateRoute, postUserMembershipsUpdateRouteHandler)
  .openapi(postUsersInviteRoute, postUsersInviteRouteHandler)
  .openapi(postUsersInfoRoute, postUsersInfoRouteHandler)
  .openapi(postUsersListRoute, postUsersListRouteHandler)
  .openapi(postUsersUpdateRoute, postUsersUpdateRouteHandler)
  .openapi(postUsersUpdateRoleRoute, postUsersUpdateRoleRouteHandler)
  .openapi(postUsersSuspendRoute, postUsersSuspendRouteHandler)
  .openapi(postUsersActivateRoute, postUsersActivateRouteHandler)
  .openapi(postUsersDeleteRoute, postUsersDeleteRouteHandler)
  .openapi(postUsersResendInviteRoute, postUsersResendInviteRouteHandler)
  .openapi(postUsersNotificationsSubscribeRoute, postUsersNotificationsSubscribeRouteHandler)
  .openapi(postUsersNotificationsUnsubscribeRoute, postUsersNotificationsUnsubscribeRouteHandler)
  .openapi(postViewsListRoute, postViewsListRouteHandler)
  .openapi(postWebhookSubscriptionsListRoute, postWebhookSubscriptionsListRouteHandler)
  .openapi(postWebhookSubscriptionsCreateRoute, postWebhookSubscriptionsCreateRouteHandler)
  .openapi(postWebhookSubscriptionsUpdateRoute, postWebhookSubscriptionsUpdateRouteHandler)
  .openapi(postWebhookSubscriptionsDeleteRoute, postWebhookSubscriptionsDeleteRouteHandler)

export default app
