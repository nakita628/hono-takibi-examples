import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteActionsIdActionReactionsIdRoute,
  deleteActionsIdRoute,
  deleteBoardsIdBoardPluginsIdPluginRoute,
  deleteBoardsIdExportsIdExportRoute,
  deleteBoardsIdMembersIdMemberRoute,
  deleteBoardsIdRoute,
  deleteCardsIdActionsIdActionCommentsRoute,
  deleteCardsIdAttachmentsIdAttachmentRoute,
  deleteCardsIdCheckItemIdCheckItemRoute,
  deleteCardsIdChecklistsIdChecklistRoute,
  deleteCardsIdIdLabelsIdLabelRoute,
  deleteCardsIdIdMembersIdMemberRoute,
  deleteCardsIdMembersVotedIdMemberRoute,
  deleteCardsIdRoute,
  deleteCardsIdStickersIdStickerRoute,
  deleteChecklistsIdCheckItemsIdCheckItemRoute,
  deleteChecklistsIdRoute,
  deleteCustomFieldsIdOptionsIdCustomFieldOptionRoute,
  deleteCustomFieldsIdRoute,
  deleteEnterprisesIdAdminsIdMemberRoute,
  deleteEnterprisesIdOrganizationsIdOrgRoute,
  deleteLabelsIdRoute,
  deleteMembersIdBoardBackgroundsIdBackgroundRoute,
  deleteMembersIdBoardStarsIdStarRoute,
  deleteMembersIdCustomBoardBackgroundsIdBackgroundRoute,
  deleteMembersIdCustomStickersIdStickerRoute,
  deleteMembersIdSavedSearchesIdSearchRoute,
  deleteOrganizationsIdLogoRoute,
  deleteOrganizationsIdMembersIdMemberAllRoute,
  deleteOrganizationsIdMembersIdMemberRoute,
  deleteOrganizationsIdPrefsAssociatedDomainRoute,
  deleteOrganizationsIdPrefsOrgInviteRestrictRoute,
  deleteOrganizationsIdRoute,
  deleteOrganizationsIdTagsIdTagRoute,
  deleteTokensTokenIndexRoute,
  deleteTokensTokenWebhooksIdWebhookRoute,
  deleteWebhooksIdRoute,
  getActionsIdActionReactionsIdRoute,
  getActionsIdActionReactionsRoute,
  getActionsIdActionReactionsSummaryRoute,
  getActionsIdBoardRoute,
  getActionsIdCardRoute,
  getActionsIdFieldRoute,
  getActionsIdListRoute,
  getActionsIdMemberCreatorRoute,
  getActionsIdMemberRoute,
  getActionsIdOrganizationRoute,
  getActionsIdRoute,
  getApplicationsKeyComplianceRoute,
  getBatchRoute,
  getBoardsBoardIdActionsRoute,
  getBoardsBoardIdBoardStarsRoute,
  getBoardsIdBoardPluginsRoute,
  getBoardsIdCardsFilterRoute,
  getBoardsIdCardsRoute,
  getBoardsIdChecklistsRoute,
  getBoardsIdCustomFieldsRoute,
  getBoardsIdExportsIdExportDownloadRoute,
  getBoardsIdExportsIdExportRoute,
  getBoardsIdExportsMostRecentRoute,
  getBoardsIdFieldRoute,
  getBoardsIdLabelsRoute,
  getBoardsIdListsFilterRoute,
  getBoardsIdListsRoute,
  getBoardsIdMembershipsRoute,
  getBoardsIdMembersRoute,
  getBoardsIdPluginsRoute,
  getBoardsIdRoute,
  getCardsIdActionsRoute,
  getCardsIdAttachmentsIdAttachmentRoute,
  getCardsIdAttachmentsRoute,
  getCardsIdBoardRoute,
  getCardsIdCheckItemIdCheckItemRoute,
  getCardsIdCheckItemStatesRoute,
  getCardsIdChecklistsRoute,
  getCardsIdCustomFieldItemsRoute,
  getCardsIdFieldRoute,
  getCardsIdListRoute,
  getCardsIdMembersRoute,
  getCardsIdMembersVotedRoute,
  getCardsIdPluginDataRoute,
  getCardsIdRoute,
  getCardsIdStickersIdStickerRoute,
  getCardsIdStickersRoute,
  getChecklistsIdBoardRoute,
  getChecklistsIdCardsRoute,
  getChecklistsIdCheckItemsIdCheckItemRoute,
  getChecklistsIdCheckItemsRoute,
  getChecklistsIdFieldRoute,
  getChecklistsIdRoute,
  getCustomFieldsIdOptionsIdCustomFieldOptionRoute,
  getCustomFieldsIdOptionsRoute,
  getCustomFieldsIdRoute,
  getEmojiRoute,
  getEnterprisesIdAdminsRoute,
  getEnterprisesIdAuditlogRoute,
  getEnterprisesIdClaimableOrganizationsRoute,
  getEnterprisesIdMembersIdMemberRoute,
  getEnterprisesIdMembersQueryRoute,
  getEnterprisesIdMembersRoute,
  getEnterprisesIdOrganizationsBulkIdOrganizationsRoute,
  getEnterprisesIdOrganizationsRoute,
  getEnterprisesIdPendingOrganizationsRoute,
  getEnterprisesIdRoute,
  getEnterprisesIdSignupUrlRoute,
  getEnterprisesIdTransferrableBulkIdOrganizationsRoute,
  getEnterprisesIdTransferrableOrganizationIdOrganizationRoute,
  getLabelsIdRoute,
  getListsIdActionsRoute,
  getListsIdBoardRoute,
  getListsIdCardsRoute,
  getListsIdRoute,
  getMembersIdActionsRoute,
  getMembersIdBoardBackgroundsIdBackgroundRoute,
  getMembersIdBoardBackgroundsRoute,
  getMembersIdBoardsInvitedRoute,
  getMembersIdBoardsRoute,
  getMembersIdBoardStarsIdStarRoute,
  getMembersIdBoardStarsRoute,
  getMembersIdCardsRoute,
  getMembersIdCustomBoardBackgroundsIdBackgroundRoute,
  getMembersIdCustomBoardBackgroundsRoute,
  getMembersIdCustomEmojiIdEmojiRoute,
  getMembersIdCustomEmojiRoute,
  getMembersIdCustomStickersIdStickerRoute,
  getMembersIdCustomStickersRoute,
  getMembersIdFieldRoute,
  getMembersIdNotificationChannelSettingsChannelRoute,
  getMembersIdNotificationChannelSettingsRoute,
  getMembersIdNotificationsRoute,
  getMembersIdOrganizationsInvitedRoute,
  getMembersIdOrganizationsRoute,
  getMembersIdRoute,
  getMembersIdSavedSearchesIdSearchRoute,
  getMembersIdSavedSearchesRoute,
  getMembersIdTokensRoute,
  getNotificationsIdBoardRoute,
  getNotificationsIdCardRoute,
  getNotificationsIdFieldRoute,
  getNotificationsIdListRoute,
  getNotificationsIdMemberCreatorRoute,
  getNotificationsIdMemberRoute,
  getNotificationsIdOrganizationRoute,
  getNotificationsIdRoute,
  getOrganizationsIdActionsRoute,
  getOrganizationsIdBoardsRoute,
  getOrganizationsIdExportsRoute,
  getOrganizationsIdFieldRoute,
  getOrganizationsIdMembershipsIdMembershipRoute,
  getOrganizationsIdMembershipsRoute,
  getOrganizationsIdMembersRoute,
  getOrganizationsIdNewBillableGuestsIdBoardRoute,
  getOrganizationsIdPluginDataRoute,
  getOrganizationsIdRoute,
  getOrganizationsIdTagsRoute,
  getPluginsIdComplianceMemberPrivacyRoute,
  getPluginsIdIndexRoute,
  getSearchMembersIndexRoute,
  getSearchRoute,
  getTokensTokenMemberRoute,
  getTokensTokenRoute,
  getTokensTokenWebhooksIdWebhookRoute,
  getTokensTokenWebhooksRoute,
  getWebhooksIdFieldRoute,
  getWebhooksIdRoute,
  postActionsIdActionReactionsRoute,
  postBoardsIdBoardPluginsRoute,
  postBoardsIdCalendarKeyGenerateRoute,
  postBoardsIdEmailKeyGenerateRoute,
  postBoardsIdExportsRoute,
  postBoardsIdIdTagsRoute,
  postBoardsIdLabelsRoute,
  postBoardsIdListsRoute,
  postBoardsIdMarkAsViewedRoute,
  postBoardsIndexRoute,
  postCardsIdActionsCommentsRoute,
  postCardsIdAttachmentsRoute,
  postCardsIdChecklistsRoute,
  postCardsIdIdLabelsRoute,
  postCardsIdIdMembersRoute,
  postCardsIdLabelsRoute,
  postCardsIdMarkAssociatedNotificationsReadRoute,
  postCardsIdMembersVotedRoute,
  postCardsIdStickersRoute,
  postCardsRoute,
  postChecklistsIdCheckItemsRoute,
  postChecklistsRoute,
  postCustomFieldsIdOptionsRoute,
  postCustomFieldsRoute,
  postEnterprisesIdTokensRoute,
  postLabelsRoute,
  postListsIdArchiveAllCardsRoute,
  postListsIdMoveAllCardsRoute,
  postListsRoute,
  postMembersIdAvatarRoute,
  postMembersIdBoardBackgroundsRoute,
  postMembersIdBoardStarsRoute,
  postMembersIdCustomBoardBackgroundsRoute,
  postMembersIdCustomEmojiRoute,
  postMembersIdCustomStickersRoute,
  postMembersIdOneTimeMessagesDismissedRoute,
  postMembersIdSavedSearchesRoute,
  postNotificationsAllReadRoute,
  postOrganizationsIdExportsRoute,
  postOrganizationsIdLogoRoute,
  postOrganizationsIdTagsRoute,
  postOrganizationsRoute,
  postPluginsIdPluginListingsRoute,
  postTokensTokenWebhooksRoute,
  postWebhooksIndexRoute,
  putActionsIdRoute,
  putActionsIdTextRoute,
  putBoardsIdMembershipsIdMembershipRoute,
  putBoardsIdMembersIdMemberRoute,
  putBoardsIdMembersRoute,
  putBoardsIdMyPrefsEmailPositionRoute,
  putBoardsIdMyPrefsIdEmailListRoute,
  putBoardsIdMyPrefsShowSidebarActivityRoute,
  putBoardsIdMyPrefsShowSidebarBoardActionsRoute,
  putBoardsIdMyPrefsShowSidebarMembersRoute,
  putBoardsIdMyPrefsShowSidebarRoute,
  putBoardsIdRoute,
  putCardsIdActionsIdActionCommentsRoute,
  putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemRoute,
  putCardsIdCardCustomFieldIdCustomFieldItemRoute,
  putCardsIdCardCustomFieldsRoute,
  putCardsIdCheckItemIdCheckItemRoute,
  putCardsIdRoute,
  putCardsIdStickersIdStickerRoute,
  putChecklistsIdFieldRoute,
  putChecklistsIdRoute,
  putCustomFieldsIdRoute,
  putEnterprisesIdAdminsIdMemberRoute,
  putEnterprisesIdEnterpriseJoinRequestBulkRoute,
  putEnterprisesIdMembersIdMemberDeactivatedRoute,
  putEnterprisesIdMembersIdMemberLicensedRoute,
  putEnterprisesIdOrganizationsRoute,
  putLabelsIdFieldRoute,
  putLabelsIdRoute,
  putListsIdClosedRoute,
  putListsIdFieldRoute,
  putListsIdIdBoardRoute,
  putListsIdRoute,
  putMembersIdBoardBackgroundsIdBackgroundRoute,
  putMembersIdBoardStarsIdStarRoute,
  putMembersIdCustomBoardBackgroundsIdBackgroundRoute,
  putMembersIdNotificationChannelSettingsChannelBlockedKeysRoute,
  putMembersIdNotificationChannelSettingsChannelRoute,
  putMembersIdNotificationChannelSettingsRoute,
  putMembersIdRoute,
  putMembersIdSavedSearchesIdSearchRoute,
  putNotificationsIdRoute,
  putNotificationsIdUnreadRoute,
  putOrganizationsIdMembersIdMemberDeactivatedRoute,
  putOrganizationsIdMembersIdMemberRoute,
  putOrganizationsIdMembersRoute,
  putOrganizationsIdRoute,
  putPluginsIdIndexRoute,
  putPluginsIdPluginListingsIdListingRoute,
  putTokensTokenWebhooksIdWebhookRoute,
  putWebhooksIdRoute,
} from './routes'
import {
  deleteActionsIdActionReactionsIdRouteHandler,
  deleteActionsIdRouteHandler,
  deleteBoardsIdBoardPluginsIdPluginRouteHandler,
  deleteBoardsIdExportsIdExportRouteHandler,
  deleteBoardsIdMembersIdMemberRouteHandler,
  deleteBoardsIdRouteHandler,
  deleteCardsIdActionsIdActionCommentsRouteHandler,
  deleteCardsIdAttachmentsIdAttachmentRouteHandler,
  deleteCardsIdCheckItemIdCheckItemRouteHandler,
  deleteCardsIdChecklistsIdChecklistRouteHandler,
  deleteCardsIdIdLabelsIdLabelRouteHandler,
  deleteCardsIdIdMembersIdMemberRouteHandler,
  deleteCardsIdMembersVotedIdMemberRouteHandler,
  deleteCardsIdRouteHandler,
  deleteCardsIdStickersIdStickerRouteHandler,
  deleteChecklistsIdCheckItemsIdCheckItemRouteHandler,
  deleteChecklistsIdRouteHandler,
  deleteCustomFieldsIdOptionsIdCustomFieldOptionRouteHandler,
  deleteCustomFieldsIdRouteHandler,
  deleteEnterprisesIdAdminsIdMemberRouteHandler,
  deleteEnterprisesIdOrganizationsIdOrgRouteHandler,
  deleteLabelsIdRouteHandler,
  deleteMembersIdBoardBackgroundsIdBackgroundRouteHandler,
  deleteMembersIdBoardStarsIdStarRouteHandler,
  deleteMembersIdCustomBoardBackgroundsIdBackgroundRouteHandler,
  deleteMembersIdCustomStickersIdStickerRouteHandler,
  deleteMembersIdSavedSearchesIdSearchRouteHandler,
  deleteOrganizationsIdLogoRouteHandler,
  deleteOrganizationsIdMembersIdMemberAllRouteHandler,
  deleteOrganizationsIdMembersIdMemberRouteHandler,
  deleteOrganizationsIdPrefsAssociatedDomainRouteHandler,
  deleteOrganizationsIdPrefsOrgInviteRestrictRouteHandler,
  deleteOrganizationsIdRouteHandler,
  deleteOrganizationsIdTagsIdTagRouteHandler,
  deleteTokensTokenIndexRouteHandler,
  deleteTokensTokenWebhooksIdWebhookRouteHandler,
  deleteWebhooksIdRouteHandler,
  getActionsIdActionReactionsIdRouteHandler,
  getActionsIdActionReactionsRouteHandler,
  getActionsIdActionReactionsSummaryRouteHandler,
  getActionsIdBoardRouteHandler,
  getActionsIdCardRouteHandler,
  getActionsIdFieldRouteHandler,
  getActionsIdListRouteHandler,
  getActionsIdMemberCreatorRouteHandler,
  getActionsIdMemberRouteHandler,
  getActionsIdOrganizationRouteHandler,
  getActionsIdRouteHandler,
  getApplicationsKeyComplianceRouteHandler,
  getBatchRouteHandler,
  getBoardsBoardIdActionsRouteHandler,
  getBoardsBoardIdBoardStarsRouteHandler,
  getBoardsIdBoardPluginsRouteHandler,
  getBoardsIdCardsFilterRouteHandler,
  getBoardsIdCardsRouteHandler,
  getBoardsIdChecklistsRouteHandler,
  getBoardsIdCustomFieldsRouteHandler,
  getBoardsIdExportsIdExportDownloadRouteHandler,
  getBoardsIdExportsIdExportRouteHandler,
  getBoardsIdExportsMostRecentRouteHandler,
  getBoardsIdFieldRouteHandler,
  getBoardsIdLabelsRouteHandler,
  getBoardsIdListsFilterRouteHandler,
  getBoardsIdListsRouteHandler,
  getBoardsIdMembershipsRouteHandler,
  getBoardsIdMembersRouteHandler,
  getBoardsIdPluginsRouteHandler,
  getBoardsIdRouteHandler,
  getCardsIdActionsRouteHandler,
  getCardsIdAttachmentsIdAttachmentRouteHandler,
  getCardsIdAttachmentsRouteHandler,
  getCardsIdBoardRouteHandler,
  getCardsIdCheckItemIdCheckItemRouteHandler,
  getCardsIdCheckItemStatesRouteHandler,
  getCardsIdChecklistsRouteHandler,
  getCardsIdCustomFieldItemsRouteHandler,
  getCardsIdFieldRouteHandler,
  getCardsIdListRouteHandler,
  getCardsIdMembersRouteHandler,
  getCardsIdMembersVotedRouteHandler,
  getCardsIdPluginDataRouteHandler,
  getCardsIdRouteHandler,
  getCardsIdStickersIdStickerRouteHandler,
  getCardsIdStickersRouteHandler,
  getChecklistsIdBoardRouteHandler,
  getChecklistsIdCardsRouteHandler,
  getChecklistsIdCheckItemsIdCheckItemRouteHandler,
  getChecklistsIdCheckItemsRouteHandler,
  getChecklistsIdFieldRouteHandler,
  getChecklistsIdRouteHandler,
  getCustomFieldsIdOptionsIdCustomFieldOptionRouteHandler,
  getCustomFieldsIdOptionsRouteHandler,
  getCustomFieldsIdRouteHandler,
  getEmojiRouteHandler,
  getEnterprisesIdAdminsRouteHandler,
  getEnterprisesIdAuditlogRouteHandler,
  getEnterprisesIdClaimableOrganizationsRouteHandler,
  getEnterprisesIdMembersIdMemberRouteHandler,
  getEnterprisesIdMembersQueryRouteHandler,
  getEnterprisesIdMembersRouteHandler,
  getEnterprisesIdOrganizationsBulkIdOrganizationsRouteHandler,
  getEnterprisesIdOrganizationsRouteHandler,
  getEnterprisesIdPendingOrganizationsRouteHandler,
  getEnterprisesIdRouteHandler,
  getEnterprisesIdSignupUrlRouteHandler,
  getEnterprisesIdTransferrableBulkIdOrganizationsRouteHandler,
  getEnterprisesIdTransferrableOrganizationIdOrganizationRouteHandler,
  getLabelsIdRouteHandler,
  getListsIdActionsRouteHandler,
  getListsIdBoardRouteHandler,
  getListsIdCardsRouteHandler,
  getListsIdRouteHandler,
  getMembersIdActionsRouteHandler,
  getMembersIdBoardBackgroundsIdBackgroundRouteHandler,
  getMembersIdBoardBackgroundsRouteHandler,
  getMembersIdBoardsInvitedRouteHandler,
  getMembersIdBoardsRouteHandler,
  getMembersIdBoardStarsIdStarRouteHandler,
  getMembersIdBoardStarsRouteHandler,
  getMembersIdCardsRouteHandler,
  getMembersIdCustomBoardBackgroundsIdBackgroundRouteHandler,
  getMembersIdCustomBoardBackgroundsRouteHandler,
  getMembersIdCustomEmojiIdEmojiRouteHandler,
  getMembersIdCustomEmojiRouteHandler,
  getMembersIdCustomStickersIdStickerRouteHandler,
  getMembersIdCustomStickersRouteHandler,
  getMembersIdFieldRouteHandler,
  getMembersIdNotificationChannelSettingsChannelRouteHandler,
  getMembersIdNotificationChannelSettingsRouteHandler,
  getMembersIdNotificationsRouteHandler,
  getMembersIdOrganizationsInvitedRouteHandler,
  getMembersIdOrganizationsRouteHandler,
  getMembersIdRouteHandler,
  getMembersIdSavedSearchesIdSearchRouteHandler,
  getMembersIdSavedSearchesRouteHandler,
  getMembersIdTokensRouteHandler,
  getNotificationsIdBoardRouteHandler,
  getNotificationsIdCardRouteHandler,
  getNotificationsIdFieldRouteHandler,
  getNotificationsIdListRouteHandler,
  getNotificationsIdMemberCreatorRouteHandler,
  getNotificationsIdMemberRouteHandler,
  getNotificationsIdOrganizationRouteHandler,
  getNotificationsIdRouteHandler,
  getOrganizationsIdActionsRouteHandler,
  getOrganizationsIdBoardsRouteHandler,
  getOrganizationsIdExportsRouteHandler,
  getOrganizationsIdFieldRouteHandler,
  getOrganizationsIdMembershipsIdMembershipRouteHandler,
  getOrganizationsIdMembershipsRouteHandler,
  getOrganizationsIdMembersRouteHandler,
  getOrganizationsIdNewBillableGuestsIdBoardRouteHandler,
  getOrganizationsIdPluginDataRouteHandler,
  getOrganizationsIdRouteHandler,
  getOrganizationsIdTagsRouteHandler,
  getPluginsIdComplianceMemberPrivacyRouteHandler,
  getPluginsIdIndexRouteHandler,
  getSearchMembersIndexRouteHandler,
  getSearchRouteHandler,
  getTokensTokenMemberRouteHandler,
  getTokensTokenRouteHandler,
  getTokensTokenWebhooksIdWebhookRouteHandler,
  getTokensTokenWebhooksRouteHandler,
  getWebhooksIdFieldRouteHandler,
  getWebhooksIdRouteHandler,
  postActionsIdActionReactionsRouteHandler,
  postBoardsIdBoardPluginsRouteHandler,
  postBoardsIdCalendarKeyGenerateRouteHandler,
  postBoardsIdEmailKeyGenerateRouteHandler,
  postBoardsIdExportsRouteHandler,
  postBoardsIdIdTagsRouteHandler,
  postBoardsIdLabelsRouteHandler,
  postBoardsIdListsRouteHandler,
  postBoardsIdMarkAsViewedRouteHandler,
  postBoardsIndexRouteHandler,
  postCardsIdActionsCommentsRouteHandler,
  postCardsIdAttachmentsRouteHandler,
  postCardsIdChecklistsRouteHandler,
  postCardsIdIdLabelsRouteHandler,
  postCardsIdIdMembersRouteHandler,
  postCardsIdLabelsRouteHandler,
  postCardsIdMarkAssociatedNotificationsReadRouteHandler,
  postCardsIdMembersVotedRouteHandler,
  postCardsIdStickersRouteHandler,
  postCardsRouteHandler,
  postChecklistsIdCheckItemsRouteHandler,
  postChecklistsRouteHandler,
  postCustomFieldsIdOptionsRouteHandler,
  postCustomFieldsRouteHandler,
  postEnterprisesIdTokensRouteHandler,
  postLabelsRouteHandler,
  postListsIdArchiveAllCardsRouteHandler,
  postListsIdMoveAllCardsRouteHandler,
  postListsRouteHandler,
  postMembersIdAvatarRouteHandler,
  postMembersIdBoardBackgroundsRouteHandler,
  postMembersIdBoardStarsRouteHandler,
  postMembersIdCustomBoardBackgroundsRouteHandler,
  postMembersIdCustomEmojiRouteHandler,
  postMembersIdCustomStickersRouteHandler,
  postMembersIdOneTimeMessagesDismissedRouteHandler,
  postMembersIdSavedSearchesRouteHandler,
  postNotificationsAllReadRouteHandler,
  postOrganizationsIdExportsRouteHandler,
  postOrganizationsIdLogoRouteHandler,
  postOrganizationsIdTagsRouteHandler,
  postOrganizationsRouteHandler,
  postPluginsIdPluginListingsRouteHandler,
  postTokensTokenWebhooksRouteHandler,
  postWebhooksIndexRouteHandler,
  putActionsIdRouteHandler,
  putActionsIdTextRouteHandler,
  putBoardsIdMembershipsIdMembershipRouteHandler,
  putBoardsIdMembersIdMemberRouteHandler,
  putBoardsIdMembersRouteHandler,
  putBoardsIdMyPrefsEmailPositionRouteHandler,
  putBoardsIdMyPrefsIdEmailListRouteHandler,
  putBoardsIdMyPrefsShowSidebarActivityRouteHandler,
  putBoardsIdMyPrefsShowSidebarBoardActionsRouteHandler,
  putBoardsIdMyPrefsShowSidebarMembersRouteHandler,
  putBoardsIdMyPrefsShowSidebarRouteHandler,
  putBoardsIdRouteHandler,
  putCardsIdActionsIdActionCommentsRouteHandler,
  putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemRouteHandler,
  putCardsIdCardCustomFieldIdCustomFieldItemRouteHandler,
  putCardsIdCardCustomFieldsRouteHandler,
  putCardsIdCheckItemIdCheckItemRouteHandler,
  putCardsIdRouteHandler,
  putCardsIdStickersIdStickerRouteHandler,
  putChecklistsIdFieldRouteHandler,
  putChecklistsIdRouteHandler,
  putCustomFieldsIdRouteHandler,
  putEnterprisesIdAdminsIdMemberRouteHandler,
  putEnterprisesIdEnterpriseJoinRequestBulkRouteHandler,
  putEnterprisesIdMembersIdMemberDeactivatedRouteHandler,
  putEnterprisesIdMembersIdMemberLicensedRouteHandler,
  putEnterprisesIdOrganizationsRouteHandler,
  putLabelsIdFieldRouteHandler,
  putLabelsIdRouteHandler,
  putListsIdClosedRouteHandler,
  putListsIdFieldRouteHandler,
  putListsIdIdBoardRouteHandler,
  putListsIdRouteHandler,
  putMembersIdBoardBackgroundsIdBackgroundRouteHandler,
  putMembersIdBoardStarsIdStarRouteHandler,
  putMembersIdCustomBoardBackgroundsIdBackgroundRouteHandler,
  putMembersIdNotificationChannelSettingsChannelBlockedKeysRouteHandler,
  putMembersIdNotificationChannelSettingsChannelRouteHandler,
  putMembersIdNotificationChannelSettingsRouteHandler,
  putMembersIdRouteHandler,
  putMembersIdSavedSearchesIdSearchRouteHandler,
  putNotificationsIdRouteHandler,
  putNotificationsIdUnreadRouteHandler,
  putOrganizationsIdMembersIdMemberDeactivatedRouteHandler,
  putOrganizationsIdMembersIdMemberRouteHandler,
  putOrganizationsIdMembersRouteHandler,
  putOrganizationsIdRouteHandler,
  putPluginsIdIndexRouteHandler,
  putPluginsIdPluginListingsIdListingRouteHandler,
  putTokensTokenWebhooksIdWebhookRouteHandler,
  putWebhooksIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActionsIdRoute, getActionsIdRouteHandler)
  .openapi(putActionsIdRoute, putActionsIdRouteHandler)
  .openapi(deleteActionsIdRoute, deleteActionsIdRouteHandler)
  .openapi(getActionsIdFieldRoute, getActionsIdFieldRouteHandler)
  .openapi(getActionsIdBoardRoute, getActionsIdBoardRouteHandler)
  .openapi(getActionsIdCardRoute, getActionsIdCardRouteHandler)
  .openapi(getActionsIdListRoute, getActionsIdListRouteHandler)
  .openapi(getActionsIdMemberRoute, getActionsIdMemberRouteHandler)
  .openapi(getActionsIdMemberCreatorRoute, getActionsIdMemberCreatorRouteHandler)
  .openapi(getActionsIdOrganizationRoute, getActionsIdOrganizationRouteHandler)
  .openapi(putActionsIdTextRoute, putActionsIdTextRouteHandler)
  .openapi(getActionsIdActionReactionsRoute, getActionsIdActionReactionsRouteHandler)
  .openapi(postActionsIdActionReactionsRoute, postActionsIdActionReactionsRouteHandler)
  .openapi(getActionsIdActionReactionsIdRoute, getActionsIdActionReactionsIdRouteHandler)
  .openapi(deleteActionsIdActionReactionsIdRoute, deleteActionsIdActionReactionsIdRouteHandler)
  .openapi(getActionsIdActionReactionsSummaryRoute, getActionsIdActionReactionsSummaryRouteHandler)
  .openapi(getApplicationsKeyComplianceRoute, getApplicationsKeyComplianceRouteHandler)
  .openapi(getBatchRoute, getBatchRouteHandler)
  .openapi(getBoardsIdMembershipsRoute, getBoardsIdMembershipsRouteHandler)
  .openapi(getBoardsIdRoute, getBoardsIdRouteHandler)
  .openapi(putBoardsIdRoute, putBoardsIdRouteHandler)
  .openapi(deleteBoardsIdRoute, deleteBoardsIdRouteHandler)
  .openapi(getBoardsIdFieldRoute, getBoardsIdFieldRouteHandler)
  .openapi(getBoardsBoardIdActionsRoute, getBoardsBoardIdActionsRouteHandler)
  .openapi(getBoardsBoardIdBoardStarsRoute, getBoardsBoardIdBoardStarsRouteHandler)
  .openapi(getBoardsIdChecklistsRoute, getBoardsIdChecklistsRouteHandler)
  .openapi(getBoardsIdCardsRoute, getBoardsIdCardsRouteHandler)
  .openapi(getBoardsIdCardsFilterRoute, getBoardsIdCardsFilterRouteHandler)
  .openapi(getBoardsIdCustomFieldsRoute, getBoardsIdCustomFieldsRouteHandler)
  .openapi(getBoardsIdLabelsRoute, getBoardsIdLabelsRouteHandler)
  .openapi(postBoardsIdLabelsRoute, postBoardsIdLabelsRouteHandler)
  .openapi(getBoardsIdListsRoute, getBoardsIdListsRouteHandler)
  .openapi(postBoardsIdListsRoute, postBoardsIdListsRouteHandler)
  .openapi(getBoardsIdListsFilterRoute, getBoardsIdListsFilterRouteHandler)
  .openapi(getBoardsIdMembersRoute, getBoardsIdMembersRouteHandler)
  .openapi(putBoardsIdMembersRoute, putBoardsIdMembersRouteHandler)
  .openapi(putBoardsIdMembersIdMemberRoute, putBoardsIdMembersIdMemberRouteHandler)
  .openapi(deleteBoardsIdMembersIdMemberRoute, deleteBoardsIdMembersIdMemberRouteHandler)
  .openapi(putBoardsIdMembershipsIdMembershipRoute, putBoardsIdMembershipsIdMembershipRouteHandler)
  .openapi(putBoardsIdMyPrefsEmailPositionRoute, putBoardsIdMyPrefsEmailPositionRouteHandler)
  .openapi(putBoardsIdMyPrefsIdEmailListRoute, putBoardsIdMyPrefsIdEmailListRouteHandler)
  .openapi(putBoardsIdMyPrefsShowSidebarRoute, putBoardsIdMyPrefsShowSidebarRouteHandler)
  .openapi(
    putBoardsIdMyPrefsShowSidebarActivityRoute,
    putBoardsIdMyPrefsShowSidebarActivityRouteHandler,
  )
  .openapi(
    putBoardsIdMyPrefsShowSidebarBoardActionsRoute,
    putBoardsIdMyPrefsShowSidebarBoardActionsRouteHandler,
  )
  .openapi(
    putBoardsIdMyPrefsShowSidebarMembersRoute,
    putBoardsIdMyPrefsShowSidebarMembersRouteHandler,
  )
  .openapi(postBoardsIndexRoute, postBoardsIndexRouteHandler)
  .openapi(postBoardsIdCalendarKeyGenerateRoute, postBoardsIdCalendarKeyGenerateRouteHandler)
  .openapi(postBoardsIdEmailKeyGenerateRoute, postBoardsIdEmailKeyGenerateRouteHandler)
  .openapi(postBoardsIdIdTagsRoute, postBoardsIdIdTagsRouteHandler)
  .openapi(postBoardsIdMarkAsViewedRoute, postBoardsIdMarkAsViewedRouteHandler)
  .openapi(getBoardsIdBoardPluginsRoute, getBoardsIdBoardPluginsRouteHandler)
  .openapi(postBoardsIdBoardPluginsRoute, postBoardsIdBoardPluginsRouteHandler)
  .openapi(deleteBoardsIdBoardPluginsIdPluginRoute, deleteBoardsIdBoardPluginsIdPluginRouteHandler)
  .openapi(getBoardsIdPluginsRoute, getBoardsIdPluginsRouteHandler)
  .openapi(postBoardsIdExportsRoute, postBoardsIdExportsRouteHandler)
  .openapi(getBoardsIdExportsIdExportRoute, getBoardsIdExportsIdExportRouteHandler)
  .openapi(deleteBoardsIdExportsIdExportRoute, deleteBoardsIdExportsIdExportRouteHandler)
  .openapi(getBoardsIdExportsIdExportDownloadRoute, getBoardsIdExportsIdExportDownloadRouteHandler)
  .openapi(getBoardsIdExportsMostRecentRoute, getBoardsIdExportsMostRecentRouteHandler)
  .openapi(postCardsRoute, postCardsRouteHandler)
  .openapi(getCardsIdRoute, getCardsIdRouteHandler)
  .openapi(putCardsIdRoute, putCardsIdRouteHandler)
  .openapi(deleteCardsIdRoute, deleteCardsIdRouteHandler)
  .openapi(getCardsIdFieldRoute, getCardsIdFieldRouteHandler)
  .openapi(getCardsIdActionsRoute, getCardsIdActionsRouteHandler)
  .openapi(getCardsIdAttachmentsRoute, getCardsIdAttachmentsRouteHandler)
  .openapi(postCardsIdAttachmentsRoute, postCardsIdAttachmentsRouteHandler)
  .openapi(getCardsIdAttachmentsIdAttachmentRoute, getCardsIdAttachmentsIdAttachmentRouteHandler)
  .openapi(
    deleteCardsIdAttachmentsIdAttachmentRoute,
    deleteCardsIdAttachmentsIdAttachmentRouteHandler,
  )
  .openapi(getCardsIdBoardRoute, getCardsIdBoardRouteHandler)
  .openapi(getCardsIdCheckItemStatesRoute, getCardsIdCheckItemStatesRouteHandler)
  .openapi(getCardsIdChecklistsRoute, getCardsIdChecklistsRouteHandler)
  .openapi(postCardsIdChecklistsRoute, postCardsIdChecklistsRouteHandler)
  .openapi(getCardsIdCheckItemIdCheckItemRoute, getCardsIdCheckItemIdCheckItemRouteHandler)
  .openapi(putCardsIdCheckItemIdCheckItemRoute, putCardsIdCheckItemIdCheckItemRouteHandler)
  .openapi(deleteCardsIdCheckItemIdCheckItemRoute, deleteCardsIdCheckItemIdCheckItemRouteHandler)
  .openapi(getCardsIdListRoute, getCardsIdListRouteHandler)
  .openapi(getCardsIdMembersRoute, getCardsIdMembersRouteHandler)
  .openapi(getCardsIdMembersVotedRoute, getCardsIdMembersVotedRouteHandler)
  .openapi(postCardsIdMembersVotedRoute, postCardsIdMembersVotedRouteHandler)
  .openapi(getCardsIdPluginDataRoute, getCardsIdPluginDataRouteHandler)
  .openapi(getCardsIdStickersRoute, getCardsIdStickersRouteHandler)
  .openapi(postCardsIdStickersRoute, postCardsIdStickersRouteHandler)
  .openapi(getCardsIdStickersIdStickerRoute, getCardsIdStickersIdStickerRouteHandler)
  .openapi(deleteCardsIdStickersIdStickerRoute, deleteCardsIdStickersIdStickerRouteHandler)
  .openapi(putCardsIdStickersIdStickerRoute, putCardsIdStickersIdStickerRouteHandler)
  .openapi(putCardsIdActionsIdActionCommentsRoute, putCardsIdActionsIdActionCommentsRouteHandler)
  .openapi(
    deleteCardsIdActionsIdActionCommentsRoute,
    deleteCardsIdActionsIdActionCommentsRouteHandler,
  )
  .openapi(
    putCardsIdCardCustomFieldIdCustomFieldItemRoute,
    putCardsIdCardCustomFieldIdCustomFieldItemRouteHandler,
  )
  .openapi(putCardsIdCardCustomFieldsRoute, putCardsIdCardCustomFieldsRouteHandler)
  .openapi(getCardsIdCustomFieldItemsRoute, getCardsIdCustomFieldItemsRouteHandler)
  .openapi(postCardsIdActionsCommentsRoute, postCardsIdActionsCommentsRouteHandler)
  .openapi(postCardsIdIdLabelsRoute, postCardsIdIdLabelsRouteHandler)
  .openapi(postCardsIdIdMembersRoute, postCardsIdIdMembersRouteHandler)
  .openapi(postCardsIdLabelsRoute, postCardsIdLabelsRouteHandler)
  .openapi(
    postCardsIdMarkAssociatedNotificationsReadRoute,
    postCardsIdMarkAssociatedNotificationsReadRouteHandler,
  )
  .openapi(deleteCardsIdIdLabelsIdLabelRoute, deleteCardsIdIdLabelsIdLabelRouteHandler)
  .openapi(deleteCardsIdIdMembersIdMemberRoute, deleteCardsIdIdMembersIdMemberRouteHandler)
  .openapi(deleteCardsIdMembersVotedIdMemberRoute, deleteCardsIdMembersVotedIdMemberRouteHandler)
  .openapi(
    putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemRoute,
    putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemRouteHandler,
  )
  .openapi(deleteCardsIdChecklistsIdChecklistRoute, deleteCardsIdChecklistsIdChecklistRouteHandler)
  .openapi(postChecklistsRoute, postChecklistsRouteHandler)
  .openapi(getChecklistsIdRoute, getChecklistsIdRouteHandler)
  .openapi(putChecklistsIdRoute, putChecklistsIdRouteHandler)
  .openapi(deleteChecklistsIdRoute, deleteChecklistsIdRouteHandler)
  .openapi(getChecklistsIdFieldRoute, getChecklistsIdFieldRouteHandler)
  .openapi(putChecklistsIdFieldRoute, putChecklistsIdFieldRouteHandler)
  .openapi(getChecklistsIdBoardRoute, getChecklistsIdBoardRouteHandler)
  .openapi(getChecklistsIdCardsRoute, getChecklistsIdCardsRouteHandler)
  .openapi(getChecklistsIdCheckItemsRoute, getChecklistsIdCheckItemsRouteHandler)
  .openapi(postChecklistsIdCheckItemsRoute, postChecklistsIdCheckItemsRouteHandler)
  .openapi(
    getChecklistsIdCheckItemsIdCheckItemRoute,
    getChecklistsIdCheckItemsIdCheckItemRouteHandler,
  )
  .openapi(
    deleteChecklistsIdCheckItemsIdCheckItemRoute,
    deleteChecklistsIdCheckItemsIdCheckItemRouteHandler,
  )
  .openapi(postCustomFieldsRoute, postCustomFieldsRouteHandler)
  .openapi(getCustomFieldsIdRoute, getCustomFieldsIdRouteHandler)
  .openapi(putCustomFieldsIdRoute, putCustomFieldsIdRouteHandler)
  .openapi(deleteCustomFieldsIdRoute, deleteCustomFieldsIdRouteHandler)
  .openapi(postCustomFieldsIdOptionsRoute, postCustomFieldsIdOptionsRouteHandler)
  .openapi(getCustomFieldsIdOptionsRoute, getCustomFieldsIdOptionsRouteHandler)
  .openapi(
    getCustomFieldsIdOptionsIdCustomFieldOptionRoute,
    getCustomFieldsIdOptionsIdCustomFieldOptionRouteHandler,
  )
  .openapi(
    deleteCustomFieldsIdOptionsIdCustomFieldOptionRoute,
    deleteCustomFieldsIdOptionsIdCustomFieldOptionRouteHandler,
  )
  .openapi(getEmojiRoute, getEmojiRouteHandler)
  .openapi(getEnterprisesIdRoute, getEnterprisesIdRouteHandler)
  .openapi(getEnterprisesIdAuditlogRoute, getEnterprisesIdAuditlogRouteHandler)
  .openapi(getEnterprisesIdAdminsRoute, getEnterprisesIdAdminsRouteHandler)
  .openapi(getEnterprisesIdSignupUrlRoute, getEnterprisesIdSignupUrlRouteHandler)
  .openapi(getEnterprisesIdMembersQueryRoute, getEnterprisesIdMembersQueryRouteHandler)
  .openapi(getEnterprisesIdMembersRoute, getEnterprisesIdMembersRouteHandler)
  .openapi(getEnterprisesIdMembersIdMemberRoute, getEnterprisesIdMembersIdMemberRouteHandler)
  .openapi(
    getEnterprisesIdTransferrableOrganizationIdOrganizationRoute,
    getEnterprisesIdTransferrableOrganizationIdOrganizationRouteHandler,
  )
  .openapi(
    getEnterprisesIdTransferrableBulkIdOrganizationsRoute,
    getEnterprisesIdTransferrableBulkIdOrganizationsRouteHandler,
  )
  .openapi(
    putEnterprisesIdEnterpriseJoinRequestBulkRoute,
    putEnterprisesIdEnterpriseJoinRequestBulkRouteHandler,
  )
  .openapi(
    getEnterprisesIdClaimableOrganizationsRoute,
    getEnterprisesIdClaimableOrganizationsRouteHandler,
  )
  .openapi(
    getEnterprisesIdPendingOrganizationsRoute,
    getEnterprisesIdPendingOrganizationsRouteHandler,
  )
  .openapi(postEnterprisesIdTokensRoute, postEnterprisesIdTokensRouteHandler)
  .openapi(getEnterprisesIdOrganizationsRoute, getEnterprisesIdOrganizationsRouteHandler)
  .openapi(putEnterprisesIdOrganizationsRoute, putEnterprisesIdOrganizationsRouteHandler)
  .openapi(
    putEnterprisesIdMembersIdMemberLicensedRoute,
    putEnterprisesIdMembersIdMemberLicensedRouteHandler,
  )
  .openapi(
    putEnterprisesIdMembersIdMemberDeactivatedRoute,
    putEnterprisesIdMembersIdMemberDeactivatedRouteHandler,
  )
  .openapi(putEnterprisesIdAdminsIdMemberRoute, putEnterprisesIdAdminsIdMemberRouteHandler)
  .openapi(deleteEnterprisesIdAdminsIdMemberRoute, deleteEnterprisesIdAdminsIdMemberRouteHandler)
  .openapi(
    deleteEnterprisesIdOrganizationsIdOrgRoute,
    deleteEnterprisesIdOrganizationsIdOrgRouteHandler,
  )
  .openapi(
    getEnterprisesIdOrganizationsBulkIdOrganizationsRoute,
    getEnterprisesIdOrganizationsBulkIdOrganizationsRouteHandler,
  )
  .openapi(getLabelsIdRoute, getLabelsIdRouteHandler)
  .openapi(putLabelsIdRoute, putLabelsIdRouteHandler)
  .openapi(deleteLabelsIdRoute, deleteLabelsIdRouteHandler)
  .openapi(putLabelsIdFieldRoute, putLabelsIdFieldRouteHandler)
  .openapi(postLabelsRoute, postLabelsRouteHandler)
  .openapi(getListsIdRoute, getListsIdRouteHandler)
  .openapi(putListsIdRoute, putListsIdRouteHandler)
  .openapi(postListsRoute, postListsRouteHandler)
  .openapi(postListsIdArchiveAllCardsRoute, postListsIdArchiveAllCardsRouteHandler)
  .openapi(postListsIdMoveAllCardsRoute, postListsIdMoveAllCardsRouteHandler)
  .openapi(putListsIdClosedRoute, putListsIdClosedRouteHandler)
  .openapi(putListsIdIdBoardRoute, putListsIdIdBoardRouteHandler)
  .openapi(putListsIdFieldRoute, putListsIdFieldRouteHandler)
  .openapi(getListsIdActionsRoute, getListsIdActionsRouteHandler)
  .openapi(getListsIdBoardRoute, getListsIdBoardRouteHandler)
  .openapi(getListsIdCardsRoute, getListsIdCardsRouteHandler)
  .openapi(getMembersIdRoute, getMembersIdRouteHandler)
  .openapi(putMembersIdRoute, putMembersIdRouteHandler)
  .openapi(getMembersIdFieldRoute, getMembersIdFieldRouteHandler)
  .openapi(getMembersIdActionsRoute, getMembersIdActionsRouteHandler)
  .openapi(getMembersIdBoardBackgroundsRoute, getMembersIdBoardBackgroundsRouteHandler)
  .openapi(postMembersIdBoardBackgroundsRoute, postMembersIdBoardBackgroundsRouteHandler)
  .openapi(
    getMembersIdBoardBackgroundsIdBackgroundRoute,
    getMembersIdBoardBackgroundsIdBackgroundRouteHandler,
  )
  .openapi(
    putMembersIdBoardBackgroundsIdBackgroundRoute,
    putMembersIdBoardBackgroundsIdBackgroundRouteHandler,
  )
  .openapi(
    deleteMembersIdBoardBackgroundsIdBackgroundRoute,
    deleteMembersIdBoardBackgroundsIdBackgroundRouteHandler,
  )
  .openapi(getMembersIdBoardStarsRoute, getMembersIdBoardStarsRouteHandler)
  .openapi(postMembersIdBoardStarsRoute, postMembersIdBoardStarsRouteHandler)
  .openapi(getMembersIdBoardStarsIdStarRoute, getMembersIdBoardStarsIdStarRouteHandler)
  .openapi(putMembersIdBoardStarsIdStarRoute, putMembersIdBoardStarsIdStarRouteHandler)
  .openapi(deleteMembersIdBoardStarsIdStarRoute, deleteMembersIdBoardStarsIdStarRouteHandler)
  .openapi(getMembersIdBoardsRoute, getMembersIdBoardsRouteHandler)
  .openapi(getMembersIdBoardsInvitedRoute, getMembersIdBoardsInvitedRouteHandler)
  .openapi(getMembersIdCardsRoute, getMembersIdCardsRouteHandler)
  .openapi(getMembersIdCustomBoardBackgroundsRoute, getMembersIdCustomBoardBackgroundsRouteHandler)
  .openapi(
    postMembersIdCustomBoardBackgroundsRoute,
    postMembersIdCustomBoardBackgroundsRouteHandler,
  )
  .openapi(
    getMembersIdCustomBoardBackgroundsIdBackgroundRoute,
    getMembersIdCustomBoardBackgroundsIdBackgroundRouteHandler,
  )
  .openapi(
    putMembersIdCustomBoardBackgroundsIdBackgroundRoute,
    putMembersIdCustomBoardBackgroundsIdBackgroundRouteHandler,
  )
  .openapi(
    deleteMembersIdCustomBoardBackgroundsIdBackgroundRoute,
    deleteMembersIdCustomBoardBackgroundsIdBackgroundRouteHandler,
  )
  .openapi(getMembersIdCustomEmojiRoute, getMembersIdCustomEmojiRouteHandler)
  .openapi(postMembersIdCustomEmojiRoute, postMembersIdCustomEmojiRouteHandler)
  .openapi(getMembersIdCustomEmojiIdEmojiRoute, getMembersIdCustomEmojiIdEmojiRouteHandler)
  .openapi(getMembersIdCustomStickersRoute, getMembersIdCustomStickersRouteHandler)
  .openapi(postMembersIdCustomStickersRoute, postMembersIdCustomStickersRouteHandler)
  .openapi(
    getMembersIdCustomStickersIdStickerRoute,
    getMembersIdCustomStickersIdStickerRouteHandler,
  )
  .openapi(
    deleteMembersIdCustomStickersIdStickerRoute,
    deleteMembersIdCustomStickersIdStickerRouteHandler,
  )
  .openapi(getMembersIdNotificationsRoute, getMembersIdNotificationsRouteHandler)
  .openapi(getMembersIdOrganizationsRoute, getMembersIdOrganizationsRouteHandler)
  .openapi(getMembersIdOrganizationsInvitedRoute, getMembersIdOrganizationsInvitedRouteHandler)
  .openapi(getMembersIdSavedSearchesRoute, getMembersIdSavedSearchesRouteHandler)
  .openapi(postMembersIdSavedSearchesRoute, postMembersIdSavedSearchesRouteHandler)
  .openapi(getMembersIdSavedSearchesIdSearchRoute, getMembersIdSavedSearchesIdSearchRouteHandler)
  .openapi(putMembersIdSavedSearchesIdSearchRoute, putMembersIdSavedSearchesIdSearchRouteHandler)
  .openapi(
    deleteMembersIdSavedSearchesIdSearchRoute,
    deleteMembersIdSavedSearchesIdSearchRouteHandler,
  )
  .openapi(getMembersIdTokensRoute, getMembersIdTokensRouteHandler)
  .openapi(postMembersIdAvatarRoute, postMembersIdAvatarRouteHandler)
  .openapi(
    postMembersIdOneTimeMessagesDismissedRoute,
    postMembersIdOneTimeMessagesDismissedRouteHandler,
  )
  .openapi(
    getMembersIdNotificationChannelSettingsRoute,
    getMembersIdNotificationChannelSettingsRouteHandler,
  )
  .openapi(
    putMembersIdNotificationChannelSettingsRoute,
    putMembersIdNotificationChannelSettingsRouteHandler,
  )
  .openapi(
    getMembersIdNotificationChannelSettingsChannelRoute,
    getMembersIdNotificationChannelSettingsChannelRouteHandler,
  )
  .openapi(
    putMembersIdNotificationChannelSettingsChannelRoute,
    putMembersIdNotificationChannelSettingsChannelRouteHandler,
  )
  .openapi(
    putMembersIdNotificationChannelSettingsChannelBlockedKeysRoute,
    putMembersIdNotificationChannelSettingsChannelBlockedKeysRouteHandler,
  )
  .openapi(getNotificationsIdRoute, getNotificationsIdRouteHandler)
  .openapi(putNotificationsIdRoute, putNotificationsIdRouteHandler)
  .openapi(getNotificationsIdFieldRoute, getNotificationsIdFieldRouteHandler)
  .openapi(postNotificationsAllReadRoute, postNotificationsAllReadRouteHandler)
  .openapi(putNotificationsIdUnreadRoute, putNotificationsIdUnreadRouteHandler)
  .openapi(getNotificationsIdBoardRoute, getNotificationsIdBoardRouteHandler)
  .openapi(getNotificationsIdCardRoute, getNotificationsIdCardRouteHandler)
  .openapi(getNotificationsIdListRoute, getNotificationsIdListRouteHandler)
  .openapi(getNotificationsIdMemberRoute, getNotificationsIdMemberRouteHandler)
  .openapi(getNotificationsIdMemberCreatorRoute, getNotificationsIdMemberCreatorRouteHandler)
  .openapi(getNotificationsIdOrganizationRoute, getNotificationsIdOrganizationRouteHandler)
  .openapi(postOrganizationsRoute, postOrganizationsRouteHandler)
  .openapi(getOrganizationsIdRoute, getOrganizationsIdRouteHandler)
  .openapi(putOrganizationsIdRoute, putOrganizationsIdRouteHandler)
  .openapi(deleteOrganizationsIdRoute, deleteOrganizationsIdRouteHandler)
  .openapi(getOrganizationsIdFieldRoute, getOrganizationsIdFieldRouteHandler)
  .openapi(getOrganizationsIdActionsRoute, getOrganizationsIdActionsRouteHandler)
  .openapi(getOrganizationsIdBoardsRoute, getOrganizationsIdBoardsRouteHandler)
  .openapi(postOrganizationsIdExportsRoute, postOrganizationsIdExportsRouteHandler)
  .openapi(getOrganizationsIdExportsRoute, getOrganizationsIdExportsRouteHandler)
  .openapi(getOrganizationsIdMembersRoute, getOrganizationsIdMembersRouteHandler)
  .openapi(putOrganizationsIdMembersRoute, putOrganizationsIdMembersRouteHandler)
  .openapi(getOrganizationsIdMembershipsRoute, getOrganizationsIdMembershipsRouteHandler)
  .openapi(
    getOrganizationsIdMembershipsIdMembershipRoute,
    getOrganizationsIdMembershipsIdMembershipRouteHandler,
  )
  .openapi(getOrganizationsIdPluginDataRoute, getOrganizationsIdPluginDataRouteHandler)
  .openapi(getOrganizationsIdTagsRoute, getOrganizationsIdTagsRouteHandler)
  .openapi(postOrganizationsIdTagsRoute, postOrganizationsIdTagsRouteHandler)
  .openapi(putOrganizationsIdMembersIdMemberRoute, putOrganizationsIdMembersIdMemberRouteHandler)
  .openapi(
    deleteOrganizationsIdMembersIdMemberRoute,
    deleteOrganizationsIdMembersIdMemberRouteHandler,
  )
  .openapi(
    putOrganizationsIdMembersIdMemberDeactivatedRoute,
    putOrganizationsIdMembersIdMemberDeactivatedRouteHandler,
  )
  .openapi(postOrganizationsIdLogoRoute, postOrganizationsIdLogoRouteHandler)
  .openapi(deleteOrganizationsIdLogoRoute, deleteOrganizationsIdLogoRouteHandler)
  .openapi(
    deleteOrganizationsIdMembersIdMemberAllRoute,
    deleteOrganizationsIdMembersIdMemberAllRouteHandler,
  )
  .openapi(
    deleteOrganizationsIdPrefsAssociatedDomainRoute,
    deleteOrganizationsIdPrefsAssociatedDomainRouteHandler,
  )
  .openapi(
    deleteOrganizationsIdPrefsOrgInviteRestrictRoute,
    deleteOrganizationsIdPrefsOrgInviteRestrictRouteHandler,
  )
  .openapi(deleteOrganizationsIdTagsIdTagRoute, deleteOrganizationsIdTagsIdTagRouteHandler)
  .openapi(
    getOrganizationsIdNewBillableGuestsIdBoardRoute,
    getOrganizationsIdNewBillableGuestsIdBoardRouteHandler,
  )
  .openapi(getPluginsIdIndexRoute, getPluginsIdIndexRouteHandler)
  .openapi(putPluginsIdIndexRoute, putPluginsIdIndexRouteHandler)
  .openapi(postPluginsIdPluginListingsRoute, postPluginsIdPluginListingsRouteHandler)
  .openapi(
    getPluginsIdComplianceMemberPrivacyRoute,
    getPluginsIdComplianceMemberPrivacyRouteHandler,
  )
  .openapi(
    putPluginsIdPluginListingsIdListingRoute,
    putPluginsIdPluginListingsIdListingRouteHandler,
  )
  .openapi(getSearchRoute, getSearchRouteHandler)
  .openapi(getSearchMembersIndexRoute, getSearchMembersIndexRouteHandler)
  .openapi(getTokensTokenRoute, getTokensTokenRouteHandler)
  .openapi(getTokensTokenMemberRoute, getTokensTokenMemberRouteHandler)
  .openapi(getTokensTokenWebhooksRoute, getTokensTokenWebhooksRouteHandler)
  .openapi(postTokensTokenWebhooksRoute, postTokensTokenWebhooksRouteHandler)
  .openapi(getTokensTokenWebhooksIdWebhookRoute, getTokensTokenWebhooksIdWebhookRouteHandler)
  .openapi(deleteTokensTokenWebhooksIdWebhookRoute, deleteTokensTokenWebhooksIdWebhookRouteHandler)
  .openapi(putTokensTokenWebhooksIdWebhookRoute, putTokensTokenWebhooksIdWebhookRouteHandler)
  .openapi(deleteTokensTokenIndexRoute, deleteTokensTokenIndexRouteHandler)
  .openapi(postWebhooksIndexRoute, postWebhooksIndexRouteHandler)
  .openapi(getWebhooksIdRoute, getWebhooksIdRouteHandler)
  .openapi(putWebhooksIdRoute, putWebhooksIdRouteHandler)
  .openapi(deleteWebhooksIdRoute, deleteWebhooksIdRouteHandler)
  .openapi(getWebhooksIdFieldRoute, getWebhooksIdFieldRouteHandler)

export default app
