import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteActionsIdActionRoute,
  deleteBoardsIdBoardMembersIdMemberRoute,
  deleteBoardsIdBoardPowerUpsPowerUpRoute,
  deleteCardsIdCardActionsIdActionCommentsRoute,
  deleteCardsIdCardAttachmentsIdAttachmentRoute,
  deleteCardsIdCardChecklistIdChecklistCheckItemIdCheckItemRoute,
  deleteCardsIdCardChecklistsIdChecklistRoute,
  deleteCardsIdCardIdLabelsIdLabelRoute,
  deleteCardsIdCardIdMembersIdMemberRoute,
  deleteCardsIdCardLabelsColorRoute,
  deleteCardsIdCardMembersVotedIdMemberRoute,
  deleteCardsIdCardRoute,
  deleteCardsIdCardStickersIdStickerRoute,
  deleteChecklistsIdChecklistCheckItemsIdCheckItemRoute,
  deleteChecklistsIdChecklistRoute,
  deleteLabelsIdLabelRoute,
  deleteMembersIdMemberBoardBackgroundsIdBoardBackgroundRoute,
  deleteMembersIdMemberBoardStarsIdBoardStarRoute,
  deleteMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundRoute,
  deleteMembersIdMemberCustomStickersIdCustomStickerRoute,
  deleteMembersIdMemberSavedSearchesIdSavedSearchRoute,
  deleteOrganizationsIdOrgLogoRoute,
  deleteOrganizationsIdOrgMembersIdMemberAllRoute,
  deleteOrganizationsIdOrgMembersIdMemberRoute,
  deleteOrganizationsIdOrgPrefsAssociatedDomainRoute,
  deleteOrganizationsIdOrgPrefsOrgInviteRestrictRoute,
  deleteOrganizationsIdOrgRoute,
  deleteTokensTokenRoute,
  deleteTokensTokenWebhooksIdWebhookRoute,
  deleteWebhooksIdWebhookRoute,
  getActionsIdActionBoardFieldRoute,
  getActionsIdActionBoardRoute,
  getActionsIdActionCardFieldRoute,
  getActionsIdActionCardRoute,
  getActionsIdActionDisplayRoute,
  getActionsIdActionEntitiesRoute,
  getActionsIdActionFieldRoute,
  getActionsIdActionListFieldRoute,
  getActionsIdActionListRoute,
  getActionsIdActionMemberCreatorFieldRoute,
  getActionsIdActionMemberCreatorRoute,
  getActionsIdActionMemberFieldRoute,
  getActionsIdActionMemberRoute,
  getActionsIdActionOrganizationFieldRoute,
  getActionsIdActionOrganizationRoute,
  getActionsIdActionRoute,
  getBatchRoute,
  getBoardsIdBoardActionsRoute,
  getBoardsIdBoardBoardStarsRoute,
  getBoardsIdBoardCardsFilterRoute,
  getBoardsIdBoardCardsIdCardRoute,
  getBoardsIdBoardCardsRoute,
  getBoardsIdBoardChecklistsRoute,
  getBoardsIdBoardDeltasRoute,
  getBoardsIdBoardFieldRoute,
  getBoardsIdBoardLabelsIdLabelRoute,
  getBoardsIdBoardLabelsRoute,
  getBoardsIdBoardListsFilterRoute,
  getBoardsIdBoardListsRoute,
  getBoardsIdBoardMembersFilterRoute,
  getBoardsIdBoardMembershipsIdMembershipRoute,
  getBoardsIdBoardMembershipsRoute,
  getBoardsIdBoardMembersIdMemberCardsRoute,
  getBoardsIdBoardMembersInvitedFieldRoute,
  getBoardsIdBoardMembersInvitedRoute,
  getBoardsIdBoardMembersRoute,
  getBoardsIdBoardMyPrefsRoute,
  getBoardsIdBoardOrganizationFieldRoute,
  getBoardsIdBoardOrganizationRoute,
  getBoardsIdBoardRoute,
  getCardsIdCardActionsRoute,
  getCardsIdCardAttachmentsIdAttachmentRoute,
  getCardsIdCardAttachmentsRoute,
  getCardsIdCardBoardFieldRoute,
  getCardsIdCardBoardRoute,
  getCardsIdCardCheckItemStatesRoute,
  getCardsIdCardChecklistsRoute,
  getCardsIdCardFieldRoute,
  getCardsIdCardListFieldRoute,
  getCardsIdCardListRoute,
  getCardsIdCardMembersRoute,
  getCardsIdCardMembersVotedRoute,
  getCardsIdCardRoute,
  getCardsIdCardStickersIdStickerRoute,
  getCardsIdCardStickersRoute,
  getChecklistsIdChecklistBoardFieldRoute,
  getChecklistsIdChecklistBoardRoute,
  getChecklistsIdChecklistCardsFilterRoute,
  getChecklistsIdChecklistCardsRoute,
  getChecklistsIdChecklistCheckItemsIdCheckItemRoute,
  getChecklistsIdChecklistCheckItemsRoute,
  getChecklistsIdChecklistFieldRoute,
  getChecklistsIdChecklistRoute,
  getLabelsIdLabelBoardFieldRoute,
  getLabelsIdLabelBoardRoute,
  getLabelsIdLabelRoute,
  getListsIdListActionsRoute,
  getListsIdListBoardFieldRoute,
  getListsIdListBoardRoute,
  getListsIdListCardsFilterRoute,
  getListsIdListCardsRoute,
  getListsIdListFieldRoute,
  getListsIdListRoute,
  getMembersIdMemberActionsRoute,
  getMembersIdMemberBoardBackgroundsIdBoardBackgroundRoute,
  getMembersIdMemberBoardBackgroundsRoute,
  getMembersIdMemberBoardsFilterRoute,
  getMembersIdMemberBoardsInvitedFieldRoute,
  getMembersIdMemberBoardsInvitedRoute,
  getMembersIdMemberBoardsRoute,
  getMembersIdMemberBoardStarsIdBoardStarRoute,
  getMembersIdMemberBoardStarsRoute,
  getMembersIdMemberCardsFilterRoute,
  getMembersIdMemberCardsRoute,
  getMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundRoute,
  getMembersIdMemberCustomBoardBackgroundsRoute,
  getMembersIdMemberCustomEmojiIdCustomEmojiRoute,
  getMembersIdMemberCustomEmojiRoute,
  getMembersIdMemberCustomStickersIdCustomStickerRoute,
  getMembersIdMemberCustomStickersRoute,
  getMembersIdMemberDeltasRoute,
  getMembersIdMemberFieldRoute,
  getMembersIdMemberNotificationsFilterRoute,
  getMembersIdMemberNotificationsRoute,
  getMembersIdMemberOrganizationsFilterRoute,
  getMembersIdMemberOrganizationsInvitedFieldRoute,
  getMembersIdMemberOrganizationsInvitedRoute,
  getMembersIdMemberOrganizationsRoute,
  getMembersIdMemberRoute,
  getMembersIdMemberSavedSearchesIdSavedSearchRoute,
  getMembersIdMemberSavedSearchesRoute,
  getMembersIdMemberTokensRoute,
  getNotificationsIdNotificationBoardFieldRoute,
  getNotificationsIdNotificationBoardRoute,
  getNotificationsIdNotificationCardFieldRoute,
  getNotificationsIdNotificationCardRoute,
  getNotificationsIdNotificationDisplayRoute,
  getNotificationsIdNotificationEntitiesRoute,
  getNotificationsIdNotificationFieldRoute,
  getNotificationsIdNotificationListFieldRoute,
  getNotificationsIdNotificationListRoute,
  getNotificationsIdNotificationMemberCreatorFieldRoute,
  getNotificationsIdNotificationMemberCreatorRoute,
  getNotificationsIdNotificationMemberFieldRoute,
  getNotificationsIdNotificationMemberRoute,
  getNotificationsIdNotificationOrganizationFieldRoute,
  getNotificationsIdNotificationOrganizationRoute,
  getNotificationsIdNotificationRoute,
  getOrganizationsIdOrgActionsRoute,
  getOrganizationsIdOrgBoardsFilterRoute,
  getOrganizationsIdOrgBoardsRoute,
  getOrganizationsIdOrgDeltasRoute,
  getOrganizationsIdOrgFieldRoute,
  getOrganizationsIdOrgMembersFilterRoute,
  getOrganizationsIdOrgMembershipsIdMembershipRoute,
  getOrganizationsIdOrgMembershipsRoute,
  getOrganizationsIdOrgMembersIdMemberCardsRoute,
  getOrganizationsIdOrgMembersInvitedFieldRoute,
  getOrganizationsIdOrgMembersInvitedRoute,
  getOrganizationsIdOrgMembersRoute,
  getOrganizationsIdOrgRoute,
  getSearchMembersRoute,
  getSearchRoute,
  getSessionsSocketRoute,
  getTokensTokenFieldRoute,
  getTokensTokenMemberFieldRoute,
  getTokensTokenMemberRoute,
  getTokensTokenRoute,
  getTokensTokenWebhooksIdWebhookRoute,
  getTokensTokenWebhooksRoute,
  getTypesIdRoute,
  getWebhooksIdWebhookFieldRoute,
  getWebhooksIdWebhookRoute,
  postBoardsIdBoardCalendarKeyGenerateRoute,
  postBoardsIdBoardChecklistsRoute,
  postBoardsIdBoardEmailKeyGenerateRoute,
  postBoardsIdBoardLabelsRoute,
  postBoardsIdBoardListsRoute,
  postBoardsIdBoardMarkAsViewedRoute,
  postBoardsIdBoardPowerUpsRoute,
  postBoardsRoute,
  postCardsIdCardActionsCommentsRoute,
  postCardsIdCardAttachmentsRoute,
  postCardsIdCardChecklistIdChecklistCheckItemIdCheckItemConvertToCardRoute,
  postCardsIdCardChecklistIdChecklistCheckItemRoute,
  postCardsIdCardChecklistsRoute,
  postCardsIdCardIdLabelsRoute,
  postCardsIdCardIdMembersRoute,
  postCardsIdCardLabelsRoute,
  postCardsIdCardMarkAssociatedNotificationsReadRoute,
  postCardsIdCardMembersVotedRoute,
  postCardsIdCardStickersRoute,
  postCardsRoute,
  postChecklistsIdChecklistCheckItemsRoute,
  postChecklistsRoute,
  postLabelsRoute,
  postListsIdListArchiveAllCardsRoute,
  postListsIdListCardsRoute,
  postListsIdListMoveAllCardsRoute,
  postListsRoute,
  postMembersIdMemberAvatarRoute,
  postMembersIdMemberBoardBackgroundsRoute,
  postMembersIdMemberBoardStarsRoute,
  postMembersIdMemberCustomBoardBackgroundsRoute,
  postMembersIdMemberCustomEmojiRoute,
  postMembersIdMemberCustomStickersRoute,
  postMembersIdMemberOneTimeMessagesDismissedRoute,
  postMembersIdMemberSavedSearchesRoute,
  postNotificationsAllReadRoute,
  postOrganizationsIdOrgLogoRoute,
  postOrganizationsRoute,
  postSessionsRoute,
  postTokensTokenWebhooksRoute,
  postWebhooksRoute,
  putActionsIdActionRoute,
  putActionsIdActionTextRoute,
  putBoardsIdBoardClosedRoute,
  putBoardsIdBoardDescRoute,
  putBoardsIdBoardIdOrganizationRoute,
  putBoardsIdBoardLabelNamesBlueRoute,
  putBoardsIdBoardLabelNamesGreenRoute,
  putBoardsIdBoardLabelNamesOrangeRoute,
  putBoardsIdBoardLabelNamesPurpleRoute,
  putBoardsIdBoardLabelNamesRedRoute,
  putBoardsIdBoardLabelNamesYellowRoute,
  putBoardsIdBoardMembershipsIdMembershipRoute,
  putBoardsIdBoardMembersIdMemberRoute,
  putBoardsIdBoardMembersRoute,
  putBoardsIdBoardMyPrefsEmailPositionRoute,
  putBoardsIdBoardMyPrefsIdEmailListRoute,
  putBoardsIdBoardMyPrefsShowListGuideRoute,
  putBoardsIdBoardMyPrefsShowSidebarActivityRoute,
  putBoardsIdBoardMyPrefsShowSidebarBoardActionsRoute,
  putBoardsIdBoardMyPrefsShowSidebarMembersRoute,
  putBoardsIdBoardMyPrefsShowSidebarRoute,
  putBoardsIdBoardNameRoute,
  putBoardsIdBoardPrefsBackgroundRoute,
  putBoardsIdBoardPrefsCalendarFeedEnabledRoute,
  putBoardsIdBoardPrefsCardAgingRoute,
  putBoardsIdBoardPrefsCardCoversRoute,
  putBoardsIdBoardPrefsCommentsRoute,
  putBoardsIdBoardPrefsInvitationsRoute,
  putBoardsIdBoardPrefsPermissionLevelRoute,
  putBoardsIdBoardPrefsSelfJoinRoute,
  putBoardsIdBoardPrefsVotingRoute,
  putBoardsIdBoardRoute,
  putBoardsIdBoardSubscribedRoute,
  putCardsIdCardActionsIdActionCommentsRoute,
  putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemNameRoute,
  putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemPosRoute,
  putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemStateRoute,
  putCardsIdCardChecklistIdChecklistCurrentCheckItemIdCheckItemRoute,
  putCardsIdCardClosedRoute,
  putCardsIdCardDescRoute,
  putCardsIdCardDueRoute,
  putCardsIdCardIdAttachmentCoverRoute,
  putCardsIdCardIdBoardRoute,
  putCardsIdCardIdListRoute,
  putCardsIdCardIdMembersRoute,
  putCardsIdCardLabelsRoute,
  putCardsIdCardNameRoute,
  putCardsIdCardPosRoute,
  putCardsIdCardRoute,
  putCardsIdCardStickersIdStickerRoute,
  putCardsIdCardSubscribedRoute,
  putChecklistsIdChecklistIdCardRoute,
  putChecklistsIdChecklistNameRoute,
  putChecklistsIdChecklistPosRoute,
  putChecklistsIdChecklistRoute,
  putLabelsIdLabelColorRoute,
  putLabelsIdLabelNameRoute,
  putLabelsIdLabelRoute,
  putListsIdListClosedRoute,
  putListsIdListIdBoardRoute,
  putListsIdListNameRoute,
  putListsIdListPosRoute,
  putListsIdListRoute,
  putListsIdListSubscribedRoute,
  putMembersIdMemberAvatarSourceRoute,
  putMembersIdMemberBioRoute,
  putMembersIdMemberBoardBackgroundsIdBoardBackgroundRoute,
  putMembersIdMemberBoardStarsIdBoardStarIdBoardRoute,
  putMembersIdMemberBoardStarsIdBoardStarPosRoute,
  putMembersIdMemberBoardStarsIdBoardStarRoute,
  putMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundRoute,
  putMembersIdMemberFullNameRoute,
  putMembersIdMemberInitialsRoute,
  putMembersIdMemberPrefsColorBlindRoute,
  putMembersIdMemberPrefsLocaleRoute,
  putMembersIdMemberPrefsMinutesBetweenSummariesRoute,
  putMembersIdMemberRoute,
  putMembersIdMemberSavedSearchesIdSavedSearchNameRoute,
  putMembersIdMemberSavedSearchesIdSavedSearchPosRoute,
  putMembersIdMemberSavedSearchesIdSavedSearchQueryRoute,
  putMembersIdMemberSavedSearchesIdSavedSearchRoute,
  putMembersIdMemberUsernameRoute,
  putNotificationsIdNotificationRoute,
  putNotificationsIdNotificationUnreadRoute,
  putOrganizationsIdOrgDescRoute,
  putOrganizationsIdOrgDisplayNameRoute,
  putOrganizationsIdOrgMembershipsIdMembershipRoute,
  putOrganizationsIdOrgMembersIdMemberDeactivatedRoute,
  putOrganizationsIdOrgMembersIdMemberRoute,
  putOrganizationsIdOrgMembersRoute,
  putOrganizationsIdOrgNameRoute,
  putOrganizationsIdOrgPrefsAssociatedDomainRoute,
  putOrganizationsIdOrgPrefsBoardVisibilityRestrictOrgRoute,
  putOrganizationsIdOrgPrefsBoardVisibilityRestrictPrivateRoute,
  putOrganizationsIdOrgPrefsBoardVisibilityRestrictPublicRoute,
  putOrganizationsIdOrgPrefsExternalMembersDisabledRoute,
  putOrganizationsIdOrgPrefsGoogleAppsVersionRoute,
  putOrganizationsIdOrgPrefsOrgInviteRestrictRoute,
  putOrganizationsIdOrgPrefsPermissionLevelRoute,
  putOrganizationsIdOrgRoute,
  putOrganizationsIdOrgWebsiteRoute,
  putSessionsIdSessionRoute,
  putSessionsIdSessionStatusRoute,
  putTokensTokenWebhooksRoute,
  putWebhooksIdWebhookActiveRoute,
  putWebhooksIdWebhookCallbackURLRoute,
  putWebhooksIdWebhookDescriptionRoute,
  putWebhooksIdWebhookIdModelRoute,
  putWebhooksIdWebhookRoute,
  putWebhooksIndexRoute,
} from './routes'
import {
  deleteActionsIdActionRouteHandler,
  deleteBoardsIdBoardMembersIdMemberRouteHandler,
  deleteBoardsIdBoardPowerUpsPowerUpRouteHandler,
  deleteCardsIdCardActionsIdActionCommentsRouteHandler,
  deleteCardsIdCardAttachmentsIdAttachmentRouteHandler,
  deleteCardsIdCardChecklistIdChecklistCheckItemIdCheckItemRouteHandler,
  deleteCardsIdCardChecklistsIdChecklistRouteHandler,
  deleteCardsIdCardIdLabelsIdLabelRouteHandler,
  deleteCardsIdCardIdMembersIdMemberRouteHandler,
  deleteCardsIdCardLabelsColorRouteHandler,
  deleteCardsIdCardMembersVotedIdMemberRouteHandler,
  deleteCardsIdCardRouteHandler,
  deleteCardsIdCardStickersIdStickerRouteHandler,
  deleteChecklistsIdChecklistCheckItemsIdCheckItemRouteHandler,
  deleteChecklistsIdChecklistRouteHandler,
  deleteLabelsIdLabelRouteHandler,
  deleteMembersIdMemberBoardBackgroundsIdBoardBackgroundRouteHandler,
  deleteMembersIdMemberBoardStarsIdBoardStarRouteHandler,
  deleteMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundRouteHandler,
  deleteMembersIdMemberCustomStickersIdCustomStickerRouteHandler,
  deleteMembersIdMemberSavedSearchesIdSavedSearchRouteHandler,
  deleteOrganizationsIdOrgLogoRouteHandler,
  deleteOrganizationsIdOrgMembersIdMemberAllRouteHandler,
  deleteOrganizationsIdOrgMembersIdMemberRouteHandler,
  deleteOrganizationsIdOrgPrefsAssociatedDomainRouteHandler,
  deleteOrganizationsIdOrgPrefsOrgInviteRestrictRouteHandler,
  deleteOrganizationsIdOrgRouteHandler,
  deleteTokensTokenRouteHandler,
  deleteTokensTokenWebhooksIdWebhookRouteHandler,
  deleteWebhooksIdWebhookRouteHandler,
  getActionsIdActionBoardFieldRouteHandler,
  getActionsIdActionBoardRouteHandler,
  getActionsIdActionCardFieldRouteHandler,
  getActionsIdActionCardRouteHandler,
  getActionsIdActionDisplayRouteHandler,
  getActionsIdActionEntitiesRouteHandler,
  getActionsIdActionFieldRouteHandler,
  getActionsIdActionListFieldRouteHandler,
  getActionsIdActionListRouteHandler,
  getActionsIdActionMemberCreatorFieldRouteHandler,
  getActionsIdActionMemberCreatorRouteHandler,
  getActionsIdActionMemberFieldRouteHandler,
  getActionsIdActionMemberRouteHandler,
  getActionsIdActionOrganizationFieldRouteHandler,
  getActionsIdActionOrganizationRouteHandler,
  getActionsIdActionRouteHandler,
  getBatchRouteHandler,
  getBoardsIdBoardActionsRouteHandler,
  getBoardsIdBoardBoardStarsRouteHandler,
  getBoardsIdBoardCardsFilterRouteHandler,
  getBoardsIdBoardCardsIdCardRouteHandler,
  getBoardsIdBoardCardsRouteHandler,
  getBoardsIdBoardChecklistsRouteHandler,
  getBoardsIdBoardDeltasRouteHandler,
  getBoardsIdBoardFieldRouteHandler,
  getBoardsIdBoardLabelsIdLabelRouteHandler,
  getBoardsIdBoardLabelsRouteHandler,
  getBoardsIdBoardListsFilterRouteHandler,
  getBoardsIdBoardListsRouteHandler,
  getBoardsIdBoardMembersFilterRouteHandler,
  getBoardsIdBoardMembershipsIdMembershipRouteHandler,
  getBoardsIdBoardMembershipsRouteHandler,
  getBoardsIdBoardMembersIdMemberCardsRouteHandler,
  getBoardsIdBoardMembersInvitedFieldRouteHandler,
  getBoardsIdBoardMembersInvitedRouteHandler,
  getBoardsIdBoardMembersRouteHandler,
  getBoardsIdBoardMyPrefsRouteHandler,
  getBoardsIdBoardOrganizationFieldRouteHandler,
  getBoardsIdBoardOrganizationRouteHandler,
  getBoardsIdBoardRouteHandler,
  getCardsIdCardActionsRouteHandler,
  getCardsIdCardAttachmentsIdAttachmentRouteHandler,
  getCardsIdCardAttachmentsRouteHandler,
  getCardsIdCardBoardFieldRouteHandler,
  getCardsIdCardBoardRouteHandler,
  getCardsIdCardCheckItemStatesRouteHandler,
  getCardsIdCardChecklistsRouteHandler,
  getCardsIdCardFieldRouteHandler,
  getCardsIdCardListFieldRouteHandler,
  getCardsIdCardListRouteHandler,
  getCardsIdCardMembersRouteHandler,
  getCardsIdCardMembersVotedRouteHandler,
  getCardsIdCardRouteHandler,
  getCardsIdCardStickersIdStickerRouteHandler,
  getCardsIdCardStickersRouteHandler,
  getChecklistsIdChecklistBoardFieldRouteHandler,
  getChecklistsIdChecklistBoardRouteHandler,
  getChecklistsIdChecklistCardsFilterRouteHandler,
  getChecklistsIdChecklistCardsRouteHandler,
  getChecklistsIdChecklistCheckItemsIdCheckItemRouteHandler,
  getChecklistsIdChecklistCheckItemsRouteHandler,
  getChecklistsIdChecklistFieldRouteHandler,
  getChecklistsIdChecklistRouteHandler,
  getLabelsIdLabelBoardFieldRouteHandler,
  getLabelsIdLabelBoardRouteHandler,
  getLabelsIdLabelRouteHandler,
  getListsIdListActionsRouteHandler,
  getListsIdListBoardFieldRouteHandler,
  getListsIdListBoardRouteHandler,
  getListsIdListCardsFilterRouteHandler,
  getListsIdListCardsRouteHandler,
  getListsIdListFieldRouteHandler,
  getListsIdListRouteHandler,
  getMembersIdMemberActionsRouteHandler,
  getMembersIdMemberBoardBackgroundsIdBoardBackgroundRouteHandler,
  getMembersIdMemberBoardBackgroundsRouteHandler,
  getMembersIdMemberBoardsFilterRouteHandler,
  getMembersIdMemberBoardsInvitedFieldRouteHandler,
  getMembersIdMemberBoardsInvitedRouteHandler,
  getMembersIdMemberBoardsRouteHandler,
  getMembersIdMemberBoardStarsIdBoardStarRouteHandler,
  getMembersIdMemberBoardStarsRouteHandler,
  getMembersIdMemberCardsFilterRouteHandler,
  getMembersIdMemberCardsRouteHandler,
  getMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundRouteHandler,
  getMembersIdMemberCustomBoardBackgroundsRouteHandler,
  getMembersIdMemberCustomEmojiIdCustomEmojiRouteHandler,
  getMembersIdMemberCustomEmojiRouteHandler,
  getMembersIdMemberCustomStickersIdCustomStickerRouteHandler,
  getMembersIdMemberCustomStickersRouteHandler,
  getMembersIdMemberDeltasRouteHandler,
  getMembersIdMemberFieldRouteHandler,
  getMembersIdMemberNotificationsFilterRouteHandler,
  getMembersIdMemberNotificationsRouteHandler,
  getMembersIdMemberOrganizationsFilterRouteHandler,
  getMembersIdMemberOrganizationsInvitedFieldRouteHandler,
  getMembersIdMemberOrganizationsInvitedRouteHandler,
  getMembersIdMemberOrganizationsRouteHandler,
  getMembersIdMemberRouteHandler,
  getMembersIdMemberSavedSearchesIdSavedSearchRouteHandler,
  getMembersIdMemberSavedSearchesRouteHandler,
  getMembersIdMemberTokensRouteHandler,
  getNotificationsIdNotificationBoardFieldRouteHandler,
  getNotificationsIdNotificationBoardRouteHandler,
  getNotificationsIdNotificationCardFieldRouteHandler,
  getNotificationsIdNotificationCardRouteHandler,
  getNotificationsIdNotificationDisplayRouteHandler,
  getNotificationsIdNotificationEntitiesRouteHandler,
  getNotificationsIdNotificationFieldRouteHandler,
  getNotificationsIdNotificationListFieldRouteHandler,
  getNotificationsIdNotificationListRouteHandler,
  getNotificationsIdNotificationMemberCreatorFieldRouteHandler,
  getNotificationsIdNotificationMemberCreatorRouteHandler,
  getNotificationsIdNotificationMemberFieldRouteHandler,
  getNotificationsIdNotificationMemberRouteHandler,
  getNotificationsIdNotificationOrganizationFieldRouteHandler,
  getNotificationsIdNotificationOrganizationRouteHandler,
  getNotificationsIdNotificationRouteHandler,
  getOrganizationsIdOrgActionsRouteHandler,
  getOrganizationsIdOrgBoardsFilterRouteHandler,
  getOrganizationsIdOrgBoardsRouteHandler,
  getOrganizationsIdOrgDeltasRouteHandler,
  getOrganizationsIdOrgFieldRouteHandler,
  getOrganizationsIdOrgMembersFilterRouteHandler,
  getOrganizationsIdOrgMembershipsIdMembershipRouteHandler,
  getOrganizationsIdOrgMembershipsRouteHandler,
  getOrganizationsIdOrgMembersIdMemberCardsRouteHandler,
  getOrganizationsIdOrgMembersInvitedFieldRouteHandler,
  getOrganizationsIdOrgMembersInvitedRouteHandler,
  getOrganizationsIdOrgMembersRouteHandler,
  getOrganizationsIdOrgRouteHandler,
  getSearchMembersRouteHandler,
  getSearchRouteHandler,
  getSessionsSocketRouteHandler,
  getTokensTokenFieldRouteHandler,
  getTokensTokenMemberFieldRouteHandler,
  getTokensTokenMemberRouteHandler,
  getTokensTokenRouteHandler,
  getTokensTokenWebhooksIdWebhookRouteHandler,
  getTokensTokenWebhooksRouteHandler,
  getTypesIdRouteHandler,
  getWebhooksIdWebhookFieldRouteHandler,
  getWebhooksIdWebhookRouteHandler,
  postBoardsIdBoardCalendarKeyGenerateRouteHandler,
  postBoardsIdBoardChecklistsRouteHandler,
  postBoardsIdBoardEmailKeyGenerateRouteHandler,
  postBoardsIdBoardLabelsRouteHandler,
  postBoardsIdBoardListsRouteHandler,
  postBoardsIdBoardMarkAsViewedRouteHandler,
  postBoardsIdBoardPowerUpsRouteHandler,
  postBoardsRouteHandler,
  postCardsIdCardActionsCommentsRouteHandler,
  postCardsIdCardAttachmentsRouteHandler,
  postCardsIdCardChecklistIdChecklistCheckItemIdCheckItemConvertToCardRouteHandler,
  postCardsIdCardChecklistIdChecklistCheckItemRouteHandler,
  postCardsIdCardChecklistsRouteHandler,
  postCardsIdCardIdLabelsRouteHandler,
  postCardsIdCardIdMembersRouteHandler,
  postCardsIdCardLabelsRouteHandler,
  postCardsIdCardMarkAssociatedNotificationsReadRouteHandler,
  postCardsIdCardMembersVotedRouteHandler,
  postCardsIdCardStickersRouteHandler,
  postCardsRouteHandler,
  postChecklistsIdChecklistCheckItemsRouteHandler,
  postChecklistsRouteHandler,
  postLabelsRouteHandler,
  postListsIdListArchiveAllCardsRouteHandler,
  postListsIdListCardsRouteHandler,
  postListsIdListMoveAllCardsRouteHandler,
  postListsRouteHandler,
  postMembersIdMemberAvatarRouteHandler,
  postMembersIdMemberBoardBackgroundsRouteHandler,
  postMembersIdMemberBoardStarsRouteHandler,
  postMembersIdMemberCustomBoardBackgroundsRouteHandler,
  postMembersIdMemberCustomEmojiRouteHandler,
  postMembersIdMemberCustomStickersRouteHandler,
  postMembersIdMemberOneTimeMessagesDismissedRouteHandler,
  postMembersIdMemberSavedSearchesRouteHandler,
  postNotificationsAllReadRouteHandler,
  postOrganizationsIdOrgLogoRouteHandler,
  postOrganizationsRouteHandler,
  postSessionsRouteHandler,
  postTokensTokenWebhooksRouteHandler,
  postWebhooksRouteHandler,
  putActionsIdActionRouteHandler,
  putActionsIdActionTextRouteHandler,
  putBoardsIdBoardClosedRouteHandler,
  putBoardsIdBoardDescRouteHandler,
  putBoardsIdBoardIdOrganizationRouteHandler,
  putBoardsIdBoardLabelNamesBlueRouteHandler,
  putBoardsIdBoardLabelNamesGreenRouteHandler,
  putBoardsIdBoardLabelNamesOrangeRouteHandler,
  putBoardsIdBoardLabelNamesPurpleRouteHandler,
  putBoardsIdBoardLabelNamesRedRouteHandler,
  putBoardsIdBoardLabelNamesYellowRouteHandler,
  putBoardsIdBoardMembershipsIdMembershipRouteHandler,
  putBoardsIdBoardMembersIdMemberRouteHandler,
  putBoardsIdBoardMembersRouteHandler,
  putBoardsIdBoardMyPrefsEmailPositionRouteHandler,
  putBoardsIdBoardMyPrefsIdEmailListRouteHandler,
  putBoardsIdBoardMyPrefsShowListGuideRouteHandler,
  putBoardsIdBoardMyPrefsShowSidebarActivityRouteHandler,
  putBoardsIdBoardMyPrefsShowSidebarBoardActionsRouteHandler,
  putBoardsIdBoardMyPrefsShowSidebarMembersRouteHandler,
  putBoardsIdBoardMyPrefsShowSidebarRouteHandler,
  putBoardsIdBoardNameRouteHandler,
  putBoardsIdBoardPrefsBackgroundRouteHandler,
  putBoardsIdBoardPrefsCalendarFeedEnabledRouteHandler,
  putBoardsIdBoardPrefsCardAgingRouteHandler,
  putBoardsIdBoardPrefsCardCoversRouteHandler,
  putBoardsIdBoardPrefsCommentsRouteHandler,
  putBoardsIdBoardPrefsInvitationsRouteHandler,
  putBoardsIdBoardPrefsPermissionLevelRouteHandler,
  putBoardsIdBoardPrefsSelfJoinRouteHandler,
  putBoardsIdBoardPrefsVotingRouteHandler,
  putBoardsIdBoardRouteHandler,
  putBoardsIdBoardSubscribedRouteHandler,
  putCardsIdCardActionsIdActionCommentsRouteHandler,
  putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemNameRouteHandler,
  putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemPosRouteHandler,
  putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemStateRouteHandler,
  putCardsIdCardChecklistIdChecklistCurrentCheckItemIdCheckItemRouteHandler,
  putCardsIdCardClosedRouteHandler,
  putCardsIdCardDescRouteHandler,
  putCardsIdCardDueRouteHandler,
  putCardsIdCardIdAttachmentCoverRouteHandler,
  putCardsIdCardIdBoardRouteHandler,
  putCardsIdCardIdListRouteHandler,
  putCardsIdCardIdMembersRouteHandler,
  putCardsIdCardLabelsRouteHandler,
  putCardsIdCardNameRouteHandler,
  putCardsIdCardPosRouteHandler,
  putCardsIdCardRouteHandler,
  putCardsIdCardStickersIdStickerRouteHandler,
  putCardsIdCardSubscribedRouteHandler,
  putChecklistsIdChecklistIdCardRouteHandler,
  putChecklistsIdChecklistNameRouteHandler,
  putChecklistsIdChecklistPosRouteHandler,
  putChecklistsIdChecklistRouteHandler,
  putLabelsIdLabelColorRouteHandler,
  putLabelsIdLabelNameRouteHandler,
  putLabelsIdLabelRouteHandler,
  putListsIdListClosedRouteHandler,
  putListsIdListIdBoardRouteHandler,
  putListsIdListNameRouteHandler,
  putListsIdListPosRouteHandler,
  putListsIdListRouteHandler,
  putListsIdListSubscribedRouteHandler,
  putMembersIdMemberAvatarSourceRouteHandler,
  putMembersIdMemberBioRouteHandler,
  putMembersIdMemberBoardBackgroundsIdBoardBackgroundRouteHandler,
  putMembersIdMemberBoardStarsIdBoardStarIdBoardRouteHandler,
  putMembersIdMemberBoardStarsIdBoardStarPosRouteHandler,
  putMembersIdMemberBoardStarsIdBoardStarRouteHandler,
  putMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundRouteHandler,
  putMembersIdMemberFullNameRouteHandler,
  putMembersIdMemberInitialsRouteHandler,
  putMembersIdMemberPrefsColorBlindRouteHandler,
  putMembersIdMemberPrefsLocaleRouteHandler,
  putMembersIdMemberPrefsMinutesBetweenSummariesRouteHandler,
  putMembersIdMemberRouteHandler,
  putMembersIdMemberSavedSearchesIdSavedSearchNameRouteHandler,
  putMembersIdMemberSavedSearchesIdSavedSearchPosRouteHandler,
  putMembersIdMemberSavedSearchesIdSavedSearchQueryRouteHandler,
  putMembersIdMemberSavedSearchesIdSavedSearchRouteHandler,
  putMembersIdMemberUsernameRouteHandler,
  putNotificationsIdNotificationRouteHandler,
  putNotificationsIdNotificationUnreadRouteHandler,
  putOrganizationsIdOrgDescRouteHandler,
  putOrganizationsIdOrgDisplayNameRouteHandler,
  putOrganizationsIdOrgMembershipsIdMembershipRouteHandler,
  putOrganizationsIdOrgMembersIdMemberDeactivatedRouteHandler,
  putOrganizationsIdOrgMembersIdMemberRouteHandler,
  putOrganizationsIdOrgMembersRouteHandler,
  putOrganizationsIdOrgNameRouteHandler,
  putOrganizationsIdOrgPrefsAssociatedDomainRouteHandler,
  putOrganizationsIdOrgPrefsBoardVisibilityRestrictOrgRouteHandler,
  putOrganizationsIdOrgPrefsBoardVisibilityRestrictPrivateRouteHandler,
  putOrganizationsIdOrgPrefsBoardVisibilityRestrictPublicRouteHandler,
  putOrganizationsIdOrgPrefsExternalMembersDisabledRouteHandler,
  putOrganizationsIdOrgPrefsGoogleAppsVersionRouteHandler,
  putOrganizationsIdOrgPrefsOrgInviteRestrictRouteHandler,
  putOrganizationsIdOrgPrefsPermissionLevelRouteHandler,
  putOrganizationsIdOrgRouteHandler,
  putOrganizationsIdOrgWebsiteRouteHandler,
  putSessionsIdSessionRouteHandler,
  putSessionsIdSessionStatusRouteHandler,
  putTokensTokenWebhooksRouteHandler,
  putWebhooksIdWebhookActiveRouteHandler,
  putWebhooksIdWebhookCallbackURLRouteHandler,
  putWebhooksIdWebhookDescriptionRouteHandler,
  putWebhooksIdWebhookIdModelRouteHandler,
  putWebhooksIdWebhookRouteHandler,
  putWebhooksIndexRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteActionsIdActionRoute, deleteActionsIdActionRouteHandler)
  .openapi(getActionsIdActionRoute, getActionsIdActionRouteHandler)
  .openapi(putActionsIdActionRoute, putActionsIdActionRouteHandler)
  .openapi(getActionsIdActionBoardRoute, getActionsIdActionBoardRouteHandler)
  .openapi(getActionsIdActionBoardFieldRoute, getActionsIdActionBoardFieldRouteHandler)
  .openapi(getActionsIdActionCardRoute, getActionsIdActionCardRouteHandler)
  .openapi(getActionsIdActionCardFieldRoute, getActionsIdActionCardFieldRouteHandler)
  .openapi(getActionsIdActionDisplayRoute, getActionsIdActionDisplayRouteHandler)
  .openapi(getActionsIdActionEntitiesRoute, getActionsIdActionEntitiesRouteHandler)
  .openapi(getActionsIdActionListRoute, getActionsIdActionListRouteHandler)
  .openapi(getActionsIdActionListFieldRoute, getActionsIdActionListFieldRouteHandler)
  .openapi(getActionsIdActionMemberRoute, getActionsIdActionMemberRouteHandler)
  .openapi(getActionsIdActionMemberFieldRoute, getActionsIdActionMemberFieldRouteHandler)
  .openapi(getActionsIdActionMemberCreatorRoute, getActionsIdActionMemberCreatorRouteHandler)
  .openapi(
    getActionsIdActionMemberCreatorFieldRoute,
    getActionsIdActionMemberCreatorFieldRouteHandler,
  )
  .openapi(getActionsIdActionOrganizationRoute, getActionsIdActionOrganizationRouteHandler)
  .openapi(
    getActionsIdActionOrganizationFieldRoute,
    getActionsIdActionOrganizationFieldRouteHandler,
  )
  .openapi(putActionsIdActionTextRoute, putActionsIdActionTextRouteHandler)
  .openapi(getActionsIdActionFieldRoute, getActionsIdActionFieldRouteHandler)
  .openapi(getBatchRoute, getBatchRouteHandler)
  .openapi(postBoardsRoute, postBoardsRouteHandler)
  .openapi(getBoardsIdBoardRoute, getBoardsIdBoardRouteHandler)
  .openapi(putBoardsIdBoardRoute, putBoardsIdBoardRouteHandler)
  .openapi(getBoardsIdBoardActionsRoute, getBoardsIdBoardActionsRouteHandler)
  .openapi(getBoardsIdBoardBoardStarsRoute, getBoardsIdBoardBoardStarsRouteHandler)
  .openapi(
    postBoardsIdBoardCalendarKeyGenerateRoute,
    postBoardsIdBoardCalendarKeyGenerateRouteHandler,
  )
  .openapi(getBoardsIdBoardCardsRoute, getBoardsIdBoardCardsRouteHandler)
  .openapi(getBoardsIdBoardCardsFilterRoute, getBoardsIdBoardCardsFilterRouteHandler)
  .openapi(getBoardsIdBoardCardsIdCardRoute, getBoardsIdBoardCardsIdCardRouteHandler)
  .openapi(getBoardsIdBoardChecklistsRoute, getBoardsIdBoardChecklistsRouteHandler)
  .openapi(postBoardsIdBoardChecklistsRoute, postBoardsIdBoardChecklistsRouteHandler)
  .openapi(putBoardsIdBoardClosedRoute, putBoardsIdBoardClosedRouteHandler)
  .openapi(getBoardsIdBoardDeltasRoute, getBoardsIdBoardDeltasRouteHandler)
  .openapi(putBoardsIdBoardDescRoute, putBoardsIdBoardDescRouteHandler)
  .openapi(postBoardsIdBoardEmailKeyGenerateRoute, postBoardsIdBoardEmailKeyGenerateRouteHandler)
  .openapi(putBoardsIdBoardIdOrganizationRoute, putBoardsIdBoardIdOrganizationRouteHandler)
  .openapi(putBoardsIdBoardLabelNamesBlueRoute, putBoardsIdBoardLabelNamesBlueRouteHandler)
  .openapi(putBoardsIdBoardLabelNamesGreenRoute, putBoardsIdBoardLabelNamesGreenRouteHandler)
  .openapi(putBoardsIdBoardLabelNamesOrangeRoute, putBoardsIdBoardLabelNamesOrangeRouteHandler)
  .openapi(putBoardsIdBoardLabelNamesPurpleRoute, putBoardsIdBoardLabelNamesPurpleRouteHandler)
  .openapi(putBoardsIdBoardLabelNamesRedRoute, putBoardsIdBoardLabelNamesRedRouteHandler)
  .openapi(putBoardsIdBoardLabelNamesYellowRoute, putBoardsIdBoardLabelNamesYellowRouteHandler)
  .openapi(getBoardsIdBoardLabelsRoute, getBoardsIdBoardLabelsRouteHandler)
  .openapi(postBoardsIdBoardLabelsRoute, postBoardsIdBoardLabelsRouteHandler)
  .openapi(getBoardsIdBoardLabelsIdLabelRoute, getBoardsIdBoardLabelsIdLabelRouteHandler)
  .openapi(getBoardsIdBoardListsRoute, getBoardsIdBoardListsRouteHandler)
  .openapi(postBoardsIdBoardListsRoute, postBoardsIdBoardListsRouteHandler)
  .openapi(getBoardsIdBoardListsFilterRoute, getBoardsIdBoardListsFilterRouteHandler)
  .openapi(postBoardsIdBoardMarkAsViewedRoute, postBoardsIdBoardMarkAsViewedRouteHandler)
  .openapi(getBoardsIdBoardMembersRoute, getBoardsIdBoardMembersRouteHandler)
  .openapi(putBoardsIdBoardMembersRoute, putBoardsIdBoardMembersRouteHandler)
  .openapi(getBoardsIdBoardMembersFilterRoute, getBoardsIdBoardMembersFilterRouteHandler)
  .openapi(deleteBoardsIdBoardMembersIdMemberRoute, deleteBoardsIdBoardMembersIdMemberRouteHandler)
  .openapi(putBoardsIdBoardMembersIdMemberRoute, putBoardsIdBoardMembersIdMemberRouteHandler)
  .openapi(
    getBoardsIdBoardMembersIdMemberCardsRoute,
    getBoardsIdBoardMembersIdMemberCardsRouteHandler,
  )
  .openapi(getBoardsIdBoardMembersInvitedRoute, getBoardsIdBoardMembersInvitedRouteHandler)
  .openapi(
    getBoardsIdBoardMembersInvitedFieldRoute,
    getBoardsIdBoardMembersInvitedFieldRouteHandler,
  )
  .openapi(getBoardsIdBoardMembershipsRoute, getBoardsIdBoardMembershipsRouteHandler)
  .openapi(
    getBoardsIdBoardMembershipsIdMembershipRoute,
    getBoardsIdBoardMembershipsIdMembershipRouteHandler,
  )
  .openapi(
    putBoardsIdBoardMembershipsIdMembershipRoute,
    putBoardsIdBoardMembershipsIdMembershipRouteHandler,
  )
  .openapi(getBoardsIdBoardMyPrefsRoute, getBoardsIdBoardMyPrefsRouteHandler)
  .openapi(
    putBoardsIdBoardMyPrefsEmailPositionRoute,
    putBoardsIdBoardMyPrefsEmailPositionRouteHandler,
  )
  .openapi(putBoardsIdBoardMyPrefsIdEmailListRoute, putBoardsIdBoardMyPrefsIdEmailListRouteHandler)
  .openapi(
    putBoardsIdBoardMyPrefsShowListGuideRoute,
    putBoardsIdBoardMyPrefsShowListGuideRouteHandler,
  )
  .openapi(putBoardsIdBoardMyPrefsShowSidebarRoute, putBoardsIdBoardMyPrefsShowSidebarRouteHandler)
  .openapi(
    putBoardsIdBoardMyPrefsShowSidebarActivityRoute,
    putBoardsIdBoardMyPrefsShowSidebarActivityRouteHandler,
  )
  .openapi(
    putBoardsIdBoardMyPrefsShowSidebarBoardActionsRoute,
    putBoardsIdBoardMyPrefsShowSidebarBoardActionsRouteHandler,
  )
  .openapi(
    putBoardsIdBoardMyPrefsShowSidebarMembersRoute,
    putBoardsIdBoardMyPrefsShowSidebarMembersRouteHandler,
  )
  .openapi(putBoardsIdBoardNameRoute, putBoardsIdBoardNameRouteHandler)
  .openapi(getBoardsIdBoardOrganizationRoute, getBoardsIdBoardOrganizationRouteHandler)
  .openapi(getBoardsIdBoardOrganizationFieldRoute, getBoardsIdBoardOrganizationFieldRouteHandler)
  .openapi(postBoardsIdBoardPowerUpsRoute, postBoardsIdBoardPowerUpsRouteHandler)
  .openapi(deleteBoardsIdBoardPowerUpsPowerUpRoute, deleteBoardsIdBoardPowerUpsPowerUpRouteHandler)
  .openapi(putBoardsIdBoardPrefsBackgroundRoute, putBoardsIdBoardPrefsBackgroundRouteHandler)
  .openapi(
    putBoardsIdBoardPrefsCalendarFeedEnabledRoute,
    putBoardsIdBoardPrefsCalendarFeedEnabledRouteHandler,
  )
  .openapi(putBoardsIdBoardPrefsCardAgingRoute, putBoardsIdBoardPrefsCardAgingRouteHandler)
  .openapi(putBoardsIdBoardPrefsCardCoversRoute, putBoardsIdBoardPrefsCardCoversRouteHandler)
  .openapi(putBoardsIdBoardPrefsCommentsRoute, putBoardsIdBoardPrefsCommentsRouteHandler)
  .openapi(putBoardsIdBoardPrefsInvitationsRoute, putBoardsIdBoardPrefsInvitationsRouteHandler)
  .openapi(
    putBoardsIdBoardPrefsPermissionLevelRoute,
    putBoardsIdBoardPrefsPermissionLevelRouteHandler,
  )
  .openapi(putBoardsIdBoardPrefsSelfJoinRoute, putBoardsIdBoardPrefsSelfJoinRouteHandler)
  .openapi(putBoardsIdBoardPrefsVotingRoute, putBoardsIdBoardPrefsVotingRouteHandler)
  .openapi(putBoardsIdBoardSubscribedRoute, putBoardsIdBoardSubscribedRouteHandler)
  .openapi(getBoardsIdBoardFieldRoute, getBoardsIdBoardFieldRouteHandler)
  .openapi(postCardsRoute, postCardsRouteHandler)
  .openapi(deleteCardsIdCardRoute, deleteCardsIdCardRouteHandler)
  .openapi(getCardsIdCardRoute, getCardsIdCardRouteHandler)
  .openapi(putCardsIdCardRoute, putCardsIdCardRouteHandler)
  .openapi(getCardsIdCardActionsRoute, getCardsIdCardActionsRouteHandler)
  .openapi(postCardsIdCardActionsCommentsRoute, postCardsIdCardActionsCommentsRouteHandler)
  .openapi(
    deleteCardsIdCardActionsIdActionCommentsRoute,
    deleteCardsIdCardActionsIdActionCommentsRouteHandler,
  )
  .openapi(
    putCardsIdCardActionsIdActionCommentsRoute,
    putCardsIdCardActionsIdActionCommentsRouteHandler,
  )
  .openapi(getCardsIdCardAttachmentsRoute, getCardsIdCardAttachmentsRouteHandler)
  .openapi(postCardsIdCardAttachmentsRoute, postCardsIdCardAttachmentsRouteHandler)
  .openapi(
    deleteCardsIdCardAttachmentsIdAttachmentRoute,
    deleteCardsIdCardAttachmentsIdAttachmentRouteHandler,
  )
  .openapi(
    getCardsIdCardAttachmentsIdAttachmentRoute,
    getCardsIdCardAttachmentsIdAttachmentRouteHandler,
  )
  .openapi(getCardsIdCardBoardRoute, getCardsIdCardBoardRouteHandler)
  .openapi(getCardsIdCardBoardFieldRoute, getCardsIdCardBoardFieldRouteHandler)
  .openapi(getCardsIdCardCheckItemStatesRoute, getCardsIdCardCheckItemStatesRouteHandler)
  .openapi(
    putCardsIdCardChecklistIdChecklistCurrentCheckItemIdCheckItemRoute,
    putCardsIdCardChecklistIdChecklistCurrentCheckItemIdCheckItemRouteHandler,
  )
  .openapi(
    postCardsIdCardChecklistIdChecklistCheckItemRoute,
    postCardsIdCardChecklistIdChecklistCheckItemRouteHandler,
  )
  .openapi(
    deleteCardsIdCardChecklistIdChecklistCheckItemIdCheckItemRoute,
    deleteCardsIdCardChecklistIdChecklistCheckItemIdCheckItemRouteHandler,
  )
  .openapi(
    postCardsIdCardChecklistIdChecklistCheckItemIdCheckItemConvertToCardRoute,
    postCardsIdCardChecklistIdChecklistCheckItemIdCheckItemConvertToCardRouteHandler,
  )
  .openapi(
    putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemNameRoute,
    putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemNameRouteHandler,
  )
  .openapi(
    putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemPosRoute,
    putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemPosRouteHandler,
  )
  .openapi(
    putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemStateRoute,
    putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemStateRouteHandler,
  )
  .openapi(getCardsIdCardChecklistsRoute, getCardsIdCardChecklistsRouteHandler)
  .openapi(postCardsIdCardChecklistsRoute, postCardsIdCardChecklistsRouteHandler)
  .openapi(
    deleteCardsIdCardChecklistsIdChecklistRoute,
    deleteCardsIdCardChecklistsIdChecklistRouteHandler,
  )
  .openapi(putCardsIdCardClosedRoute, putCardsIdCardClosedRouteHandler)
  .openapi(putCardsIdCardDescRoute, putCardsIdCardDescRouteHandler)
  .openapi(putCardsIdCardDueRoute, putCardsIdCardDueRouteHandler)
  .openapi(putCardsIdCardIdAttachmentCoverRoute, putCardsIdCardIdAttachmentCoverRouteHandler)
  .openapi(putCardsIdCardIdBoardRoute, putCardsIdCardIdBoardRouteHandler)
  .openapi(postCardsIdCardIdLabelsRoute, postCardsIdCardIdLabelsRouteHandler)
  .openapi(deleteCardsIdCardIdLabelsIdLabelRoute, deleteCardsIdCardIdLabelsIdLabelRouteHandler)
  .openapi(putCardsIdCardIdListRoute, putCardsIdCardIdListRouteHandler)
  .openapi(postCardsIdCardIdMembersRoute, postCardsIdCardIdMembersRouteHandler)
  .openapi(putCardsIdCardIdMembersRoute, putCardsIdCardIdMembersRouteHandler)
  .openapi(deleteCardsIdCardIdMembersIdMemberRoute, deleteCardsIdCardIdMembersIdMemberRouteHandler)
  .openapi(postCardsIdCardLabelsRoute, postCardsIdCardLabelsRouteHandler)
  .openapi(putCardsIdCardLabelsRoute, putCardsIdCardLabelsRouteHandler)
  .openapi(deleteCardsIdCardLabelsColorRoute, deleteCardsIdCardLabelsColorRouteHandler)
  .openapi(getCardsIdCardListRoute, getCardsIdCardListRouteHandler)
  .openapi(getCardsIdCardListFieldRoute, getCardsIdCardListFieldRouteHandler)
  .openapi(
    postCardsIdCardMarkAssociatedNotificationsReadRoute,
    postCardsIdCardMarkAssociatedNotificationsReadRouteHandler,
  )
  .openapi(getCardsIdCardMembersRoute, getCardsIdCardMembersRouteHandler)
  .openapi(getCardsIdCardMembersVotedRoute, getCardsIdCardMembersVotedRouteHandler)
  .openapi(postCardsIdCardMembersVotedRoute, postCardsIdCardMembersVotedRouteHandler)
  .openapi(
    deleteCardsIdCardMembersVotedIdMemberRoute,
    deleteCardsIdCardMembersVotedIdMemberRouteHandler,
  )
  .openapi(putCardsIdCardNameRoute, putCardsIdCardNameRouteHandler)
  .openapi(putCardsIdCardPosRoute, putCardsIdCardPosRouteHandler)
  .openapi(getCardsIdCardStickersRoute, getCardsIdCardStickersRouteHandler)
  .openapi(postCardsIdCardStickersRoute, postCardsIdCardStickersRouteHandler)
  .openapi(deleteCardsIdCardStickersIdStickerRoute, deleteCardsIdCardStickersIdStickerRouteHandler)
  .openapi(getCardsIdCardStickersIdStickerRoute, getCardsIdCardStickersIdStickerRouteHandler)
  .openapi(putCardsIdCardStickersIdStickerRoute, putCardsIdCardStickersIdStickerRouteHandler)
  .openapi(putCardsIdCardSubscribedRoute, putCardsIdCardSubscribedRouteHandler)
  .openapi(getCardsIdCardFieldRoute, getCardsIdCardFieldRouteHandler)
  .openapi(postChecklistsRoute, postChecklistsRouteHandler)
  .openapi(deleteChecklistsIdChecklistRoute, deleteChecklistsIdChecklistRouteHandler)
  .openapi(getChecklistsIdChecklistRoute, getChecklistsIdChecklistRouteHandler)
  .openapi(putChecklistsIdChecklistRoute, putChecklistsIdChecklistRouteHandler)
  .openapi(getChecklistsIdChecklistBoardRoute, getChecklistsIdChecklistBoardRouteHandler)
  .openapi(getChecklistsIdChecklistBoardFieldRoute, getChecklistsIdChecklistBoardFieldRouteHandler)
  .openapi(getChecklistsIdChecklistCardsRoute, getChecklistsIdChecklistCardsRouteHandler)
  .openapi(
    getChecklistsIdChecklistCardsFilterRoute,
    getChecklistsIdChecklistCardsFilterRouteHandler,
  )
  .openapi(getChecklistsIdChecklistCheckItemsRoute, getChecklistsIdChecklistCheckItemsRouteHandler)
  .openapi(
    postChecklistsIdChecklistCheckItemsRoute,
    postChecklistsIdChecklistCheckItemsRouteHandler,
  )
  .openapi(
    deleteChecklistsIdChecklistCheckItemsIdCheckItemRoute,
    deleteChecklistsIdChecklistCheckItemsIdCheckItemRouteHandler,
  )
  .openapi(
    getChecklistsIdChecklistCheckItemsIdCheckItemRoute,
    getChecklistsIdChecklistCheckItemsIdCheckItemRouteHandler,
  )
  .openapi(putChecklistsIdChecklistIdCardRoute, putChecklistsIdChecklistIdCardRouteHandler)
  .openapi(putChecklistsIdChecklistNameRoute, putChecklistsIdChecklistNameRouteHandler)
  .openapi(putChecklistsIdChecklistPosRoute, putChecklistsIdChecklistPosRouteHandler)
  .openapi(getChecklistsIdChecklistFieldRoute, getChecklistsIdChecklistFieldRouteHandler)
  .openapi(postLabelsRoute, postLabelsRouteHandler)
  .openapi(deleteLabelsIdLabelRoute, deleteLabelsIdLabelRouteHandler)
  .openapi(getLabelsIdLabelRoute, getLabelsIdLabelRouteHandler)
  .openapi(putLabelsIdLabelRoute, putLabelsIdLabelRouteHandler)
  .openapi(getLabelsIdLabelBoardRoute, getLabelsIdLabelBoardRouteHandler)
  .openapi(getLabelsIdLabelBoardFieldRoute, getLabelsIdLabelBoardFieldRouteHandler)
  .openapi(putLabelsIdLabelColorRoute, putLabelsIdLabelColorRouteHandler)
  .openapi(putLabelsIdLabelNameRoute, putLabelsIdLabelNameRouteHandler)
  .openapi(postListsRoute, postListsRouteHandler)
  .openapi(getListsIdListRoute, getListsIdListRouteHandler)
  .openapi(putListsIdListRoute, putListsIdListRouteHandler)
  .openapi(getListsIdListActionsRoute, getListsIdListActionsRouteHandler)
  .openapi(postListsIdListArchiveAllCardsRoute, postListsIdListArchiveAllCardsRouteHandler)
  .openapi(getListsIdListBoardRoute, getListsIdListBoardRouteHandler)
  .openapi(getListsIdListBoardFieldRoute, getListsIdListBoardFieldRouteHandler)
  .openapi(getListsIdListCardsRoute, getListsIdListCardsRouteHandler)
  .openapi(postListsIdListCardsRoute, postListsIdListCardsRouteHandler)
  .openapi(getListsIdListCardsFilterRoute, getListsIdListCardsFilterRouteHandler)
  .openapi(putListsIdListClosedRoute, putListsIdListClosedRouteHandler)
  .openapi(putListsIdListIdBoardRoute, putListsIdListIdBoardRouteHandler)
  .openapi(postListsIdListMoveAllCardsRoute, postListsIdListMoveAllCardsRouteHandler)
  .openapi(putListsIdListNameRoute, putListsIdListNameRouteHandler)
  .openapi(putListsIdListPosRoute, putListsIdListPosRouteHandler)
  .openapi(putListsIdListSubscribedRoute, putListsIdListSubscribedRouteHandler)
  .openapi(getListsIdListFieldRoute, getListsIdListFieldRouteHandler)
  .openapi(getMembersIdMemberRoute, getMembersIdMemberRouteHandler)
  .openapi(putMembersIdMemberRoute, putMembersIdMemberRouteHandler)
  .openapi(getMembersIdMemberActionsRoute, getMembersIdMemberActionsRouteHandler)
  .openapi(postMembersIdMemberAvatarRoute, postMembersIdMemberAvatarRouteHandler)
  .openapi(putMembersIdMemberAvatarSourceRoute, putMembersIdMemberAvatarSourceRouteHandler)
  .openapi(putMembersIdMemberBioRoute, putMembersIdMemberBioRouteHandler)
  .openapi(getMembersIdMemberBoardBackgroundsRoute, getMembersIdMemberBoardBackgroundsRouteHandler)
  .openapi(
    postMembersIdMemberBoardBackgroundsRoute,
    postMembersIdMemberBoardBackgroundsRouteHandler,
  )
  .openapi(
    deleteMembersIdMemberBoardBackgroundsIdBoardBackgroundRoute,
    deleteMembersIdMemberBoardBackgroundsIdBoardBackgroundRouteHandler,
  )
  .openapi(
    getMembersIdMemberBoardBackgroundsIdBoardBackgroundRoute,
    getMembersIdMemberBoardBackgroundsIdBoardBackgroundRouteHandler,
  )
  .openapi(
    putMembersIdMemberBoardBackgroundsIdBoardBackgroundRoute,
    putMembersIdMemberBoardBackgroundsIdBoardBackgroundRouteHandler,
  )
  .openapi(getMembersIdMemberBoardStarsRoute, getMembersIdMemberBoardStarsRouteHandler)
  .openapi(postMembersIdMemberBoardStarsRoute, postMembersIdMemberBoardStarsRouteHandler)
  .openapi(
    deleteMembersIdMemberBoardStarsIdBoardStarRoute,
    deleteMembersIdMemberBoardStarsIdBoardStarRouteHandler,
  )
  .openapi(
    getMembersIdMemberBoardStarsIdBoardStarRoute,
    getMembersIdMemberBoardStarsIdBoardStarRouteHandler,
  )
  .openapi(
    putMembersIdMemberBoardStarsIdBoardStarRoute,
    putMembersIdMemberBoardStarsIdBoardStarRouteHandler,
  )
  .openapi(
    putMembersIdMemberBoardStarsIdBoardStarIdBoardRoute,
    putMembersIdMemberBoardStarsIdBoardStarIdBoardRouteHandler,
  )
  .openapi(
    putMembersIdMemberBoardStarsIdBoardStarPosRoute,
    putMembersIdMemberBoardStarsIdBoardStarPosRouteHandler,
  )
  .openapi(getMembersIdMemberBoardsRoute, getMembersIdMemberBoardsRouteHandler)
  .openapi(getMembersIdMemberBoardsFilterRoute, getMembersIdMemberBoardsFilterRouteHandler)
  .openapi(getMembersIdMemberBoardsInvitedRoute, getMembersIdMemberBoardsInvitedRouteHandler)
  .openapi(
    getMembersIdMemberBoardsInvitedFieldRoute,
    getMembersIdMemberBoardsInvitedFieldRouteHandler,
  )
  .openapi(getMembersIdMemberCardsRoute, getMembersIdMemberCardsRouteHandler)
  .openapi(getMembersIdMemberCardsFilterRoute, getMembersIdMemberCardsFilterRouteHandler)
  .openapi(
    getMembersIdMemberCustomBoardBackgroundsRoute,
    getMembersIdMemberCustomBoardBackgroundsRouteHandler,
  )
  .openapi(
    postMembersIdMemberCustomBoardBackgroundsRoute,
    postMembersIdMemberCustomBoardBackgroundsRouteHandler,
  )
  .openapi(
    deleteMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundRoute,
    deleteMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundRouteHandler,
  )
  .openapi(
    getMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundRoute,
    getMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundRouteHandler,
  )
  .openapi(
    putMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundRoute,
    putMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundRouteHandler,
  )
  .openapi(getMembersIdMemberCustomEmojiRoute, getMembersIdMemberCustomEmojiRouteHandler)
  .openapi(postMembersIdMemberCustomEmojiRoute, postMembersIdMemberCustomEmojiRouteHandler)
  .openapi(
    getMembersIdMemberCustomEmojiIdCustomEmojiRoute,
    getMembersIdMemberCustomEmojiIdCustomEmojiRouteHandler,
  )
  .openapi(getMembersIdMemberCustomStickersRoute, getMembersIdMemberCustomStickersRouteHandler)
  .openapi(postMembersIdMemberCustomStickersRoute, postMembersIdMemberCustomStickersRouteHandler)
  .openapi(
    deleteMembersIdMemberCustomStickersIdCustomStickerRoute,
    deleteMembersIdMemberCustomStickersIdCustomStickerRouteHandler,
  )
  .openapi(
    getMembersIdMemberCustomStickersIdCustomStickerRoute,
    getMembersIdMemberCustomStickersIdCustomStickerRouteHandler,
  )
  .openapi(getMembersIdMemberDeltasRoute, getMembersIdMemberDeltasRouteHandler)
  .openapi(putMembersIdMemberFullNameRoute, putMembersIdMemberFullNameRouteHandler)
  .openapi(putMembersIdMemberInitialsRoute, putMembersIdMemberInitialsRouteHandler)
  .openapi(getMembersIdMemberNotificationsRoute, getMembersIdMemberNotificationsRouteHandler)
  .openapi(
    getMembersIdMemberNotificationsFilterRoute,
    getMembersIdMemberNotificationsFilterRouteHandler,
  )
  .openapi(
    postMembersIdMemberOneTimeMessagesDismissedRoute,
    postMembersIdMemberOneTimeMessagesDismissedRouteHandler,
  )
  .openapi(getMembersIdMemberOrganizationsRoute, getMembersIdMemberOrganizationsRouteHandler)
  .openapi(
    getMembersIdMemberOrganizationsFilterRoute,
    getMembersIdMemberOrganizationsFilterRouteHandler,
  )
  .openapi(
    getMembersIdMemberOrganizationsInvitedRoute,
    getMembersIdMemberOrganizationsInvitedRouteHandler,
  )
  .openapi(
    getMembersIdMemberOrganizationsInvitedFieldRoute,
    getMembersIdMemberOrganizationsInvitedFieldRouteHandler,
  )
  .openapi(putMembersIdMemberPrefsColorBlindRoute, putMembersIdMemberPrefsColorBlindRouteHandler)
  .openapi(putMembersIdMemberPrefsLocaleRoute, putMembersIdMemberPrefsLocaleRouteHandler)
  .openapi(
    putMembersIdMemberPrefsMinutesBetweenSummariesRoute,
    putMembersIdMemberPrefsMinutesBetweenSummariesRouteHandler,
  )
  .openapi(getMembersIdMemberSavedSearchesRoute, getMembersIdMemberSavedSearchesRouteHandler)
  .openapi(postMembersIdMemberSavedSearchesRoute, postMembersIdMemberSavedSearchesRouteHandler)
  .openapi(
    deleteMembersIdMemberSavedSearchesIdSavedSearchRoute,
    deleteMembersIdMemberSavedSearchesIdSavedSearchRouteHandler,
  )
  .openapi(
    getMembersIdMemberSavedSearchesIdSavedSearchRoute,
    getMembersIdMemberSavedSearchesIdSavedSearchRouteHandler,
  )
  .openapi(
    putMembersIdMemberSavedSearchesIdSavedSearchRoute,
    putMembersIdMemberSavedSearchesIdSavedSearchRouteHandler,
  )
  .openapi(
    putMembersIdMemberSavedSearchesIdSavedSearchNameRoute,
    putMembersIdMemberSavedSearchesIdSavedSearchNameRouteHandler,
  )
  .openapi(
    putMembersIdMemberSavedSearchesIdSavedSearchPosRoute,
    putMembersIdMemberSavedSearchesIdSavedSearchPosRouteHandler,
  )
  .openapi(
    putMembersIdMemberSavedSearchesIdSavedSearchQueryRoute,
    putMembersIdMemberSavedSearchesIdSavedSearchQueryRouteHandler,
  )
  .openapi(getMembersIdMemberTokensRoute, getMembersIdMemberTokensRouteHandler)
  .openapi(putMembersIdMemberUsernameRoute, putMembersIdMemberUsernameRouteHandler)
  .openapi(getMembersIdMemberFieldRoute, getMembersIdMemberFieldRouteHandler)
  .openapi(postNotificationsAllReadRoute, postNotificationsAllReadRouteHandler)
  .openapi(getNotificationsIdNotificationRoute, getNotificationsIdNotificationRouteHandler)
  .openapi(putNotificationsIdNotificationRoute, putNotificationsIdNotificationRouteHandler)
  .openapi(
    getNotificationsIdNotificationBoardRoute,
    getNotificationsIdNotificationBoardRouteHandler,
  )
  .openapi(
    getNotificationsIdNotificationBoardFieldRoute,
    getNotificationsIdNotificationBoardFieldRouteHandler,
  )
  .openapi(getNotificationsIdNotificationCardRoute, getNotificationsIdNotificationCardRouteHandler)
  .openapi(
    getNotificationsIdNotificationCardFieldRoute,
    getNotificationsIdNotificationCardFieldRouteHandler,
  )
  .openapi(
    getNotificationsIdNotificationDisplayRoute,
    getNotificationsIdNotificationDisplayRouteHandler,
  )
  .openapi(
    getNotificationsIdNotificationEntitiesRoute,
    getNotificationsIdNotificationEntitiesRouteHandler,
  )
  .openapi(getNotificationsIdNotificationListRoute, getNotificationsIdNotificationListRouteHandler)
  .openapi(
    getNotificationsIdNotificationListFieldRoute,
    getNotificationsIdNotificationListFieldRouteHandler,
  )
  .openapi(
    getNotificationsIdNotificationMemberRoute,
    getNotificationsIdNotificationMemberRouteHandler,
  )
  .openapi(
    getNotificationsIdNotificationMemberFieldRoute,
    getNotificationsIdNotificationMemberFieldRouteHandler,
  )
  .openapi(
    getNotificationsIdNotificationMemberCreatorRoute,
    getNotificationsIdNotificationMemberCreatorRouteHandler,
  )
  .openapi(
    getNotificationsIdNotificationMemberCreatorFieldRoute,
    getNotificationsIdNotificationMemberCreatorFieldRouteHandler,
  )
  .openapi(
    getNotificationsIdNotificationOrganizationRoute,
    getNotificationsIdNotificationOrganizationRouteHandler,
  )
  .openapi(
    getNotificationsIdNotificationOrganizationFieldRoute,
    getNotificationsIdNotificationOrganizationFieldRouteHandler,
  )
  .openapi(
    putNotificationsIdNotificationUnreadRoute,
    putNotificationsIdNotificationUnreadRouteHandler,
  )
  .openapi(
    getNotificationsIdNotificationFieldRoute,
    getNotificationsIdNotificationFieldRouteHandler,
  )
  .openapi(postOrganizationsRoute, postOrganizationsRouteHandler)
  .openapi(deleteOrganizationsIdOrgRoute, deleteOrganizationsIdOrgRouteHandler)
  .openapi(getOrganizationsIdOrgRoute, getOrganizationsIdOrgRouteHandler)
  .openapi(putOrganizationsIdOrgRoute, putOrganizationsIdOrgRouteHandler)
  .openapi(getOrganizationsIdOrgActionsRoute, getOrganizationsIdOrgActionsRouteHandler)
  .openapi(getOrganizationsIdOrgBoardsRoute, getOrganizationsIdOrgBoardsRouteHandler)
  .openapi(getOrganizationsIdOrgBoardsFilterRoute, getOrganizationsIdOrgBoardsFilterRouteHandler)
  .openapi(getOrganizationsIdOrgDeltasRoute, getOrganizationsIdOrgDeltasRouteHandler)
  .openapi(putOrganizationsIdOrgDescRoute, putOrganizationsIdOrgDescRouteHandler)
  .openapi(putOrganizationsIdOrgDisplayNameRoute, putOrganizationsIdOrgDisplayNameRouteHandler)
  .openapi(deleteOrganizationsIdOrgLogoRoute, deleteOrganizationsIdOrgLogoRouteHandler)
  .openapi(postOrganizationsIdOrgLogoRoute, postOrganizationsIdOrgLogoRouteHandler)
  .openapi(getOrganizationsIdOrgMembersRoute, getOrganizationsIdOrgMembersRouteHandler)
  .openapi(putOrganizationsIdOrgMembersRoute, putOrganizationsIdOrgMembersRouteHandler)
  .openapi(getOrganizationsIdOrgMembersFilterRoute, getOrganizationsIdOrgMembersFilterRouteHandler)
  .openapi(
    deleteOrganizationsIdOrgMembersIdMemberRoute,
    deleteOrganizationsIdOrgMembersIdMemberRouteHandler,
  )
  .openapi(
    putOrganizationsIdOrgMembersIdMemberRoute,
    putOrganizationsIdOrgMembersIdMemberRouteHandler,
  )
  .openapi(
    deleteOrganizationsIdOrgMembersIdMemberAllRoute,
    deleteOrganizationsIdOrgMembersIdMemberAllRouteHandler,
  )
  .openapi(
    getOrganizationsIdOrgMembersIdMemberCardsRoute,
    getOrganizationsIdOrgMembersIdMemberCardsRouteHandler,
  )
  .openapi(
    putOrganizationsIdOrgMembersIdMemberDeactivatedRoute,
    putOrganizationsIdOrgMembersIdMemberDeactivatedRouteHandler,
  )
  .openapi(
    getOrganizationsIdOrgMembersInvitedRoute,
    getOrganizationsIdOrgMembersInvitedRouteHandler,
  )
  .openapi(
    getOrganizationsIdOrgMembersInvitedFieldRoute,
    getOrganizationsIdOrgMembersInvitedFieldRouteHandler,
  )
  .openapi(getOrganizationsIdOrgMembershipsRoute, getOrganizationsIdOrgMembershipsRouteHandler)
  .openapi(
    getOrganizationsIdOrgMembershipsIdMembershipRoute,
    getOrganizationsIdOrgMembershipsIdMembershipRouteHandler,
  )
  .openapi(
    putOrganizationsIdOrgMembershipsIdMembershipRoute,
    putOrganizationsIdOrgMembershipsIdMembershipRouteHandler,
  )
  .openapi(putOrganizationsIdOrgNameRoute, putOrganizationsIdOrgNameRouteHandler)
  .openapi(
    deleteOrganizationsIdOrgPrefsAssociatedDomainRoute,
    deleteOrganizationsIdOrgPrefsAssociatedDomainRouteHandler,
  )
  .openapi(
    putOrganizationsIdOrgPrefsAssociatedDomainRoute,
    putOrganizationsIdOrgPrefsAssociatedDomainRouteHandler,
  )
  .openapi(
    putOrganizationsIdOrgPrefsBoardVisibilityRestrictOrgRoute,
    putOrganizationsIdOrgPrefsBoardVisibilityRestrictOrgRouteHandler,
  )
  .openapi(
    putOrganizationsIdOrgPrefsBoardVisibilityRestrictPrivateRoute,
    putOrganizationsIdOrgPrefsBoardVisibilityRestrictPrivateRouteHandler,
  )
  .openapi(
    putOrganizationsIdOrgPrefsBoardVisibilityRestrictPublicRoute,
    putOrganizationsIdOrgPrefsBoardVisibilityRestrictPublicRouteHandler,
  )
  .openapi(
    putOrganizationsIdOrgPrefsExternalMembersDisabledRoute,
    putOrganizationsIdOrgPrefsExternalMembersDisabledRouteHandler,
  )
  .openapi(
    putOrganizationsIdOrgPrefsGoogleAppsVersionRoute,
    putOrganizationsIdOrgPrefsGoogleAppsVersionRouteHandler,
  )
  .openapi(
    deleteOrganizationsIdOrgPrefsOrgInviteRestrictRoute,
    deleteOrganizationsIdOrgPrefsOrgInviteRestrictRouteHandler,
  )
  .openapi(
    putOrganizationsIdOrgPrefsOrgInviteRestrictRoute,
    putOrganizationsIdOrgPrefsOrgInviteRestrictRouteHandler,
  )
  .openapi(
    putOrganizationsIdOrgPrefsPermissionLevelRoute,
    putOrganizationsIdOrgPrefsPermissionLevelRouteHandler,
  )
  .openapi(putOrganizationsIdOrgWebsiteRoute, putOrganizationsIdOrgWebsiteRouteHandler)
  .openapi(getOrganizationsIdOrgFieldRoute, getOrganizationsIdOrgFieldRouteHandler)
  .openapi(getSearchRoute, getSearchRouteHandler)
  .openapi(getSearchMembersRoute, getSearchMembersRouteHandler)
  .openapi(postSessionsRoute, postSessionsRouteHandler)
  .openapi(getSessionsSocketRoute, getSessionsSocketRouteHandler)
  .openapi(putSessionsIdSessionRoute, putSessionsIdSessionRouteHandler)
  .openapi(putSessionsIdSessionStatusRoute, putSessionsIdSessionStatusRouteHandler)
  .openapi(deleteTokensTokenRoute, deleteTokensTokenRouteHandler)
  .openapi(getTokensTokenRoute, getTokensTokenRouteHandler)
  .openapi(getTokensTokenMemberRoute, getTokensTokenMemberRouteHandler)
  .openapi(getTokensTokenMemberFieldRoute, getTokensTokenMemberFieldRouteHandler)
  .openapi(getTokensTokenWebhooksRoute, getTokensTokenWebhooksRouteHandler)
  .openapi(postTokensTokenWebhooksRoute, postTokensTokenWebhooksRouteHandler)
  .openapi(putTokensTokenWebhooksRoute, putTokensTokenWebhooksRouteHandler)
  .openapi(deleteTokensTokenWebhooksIdWebhookRoute, deleteTokensTokenWebhooksIdWebhookRouteHandler)
  .openapi(getTokensTokenWebhooksIdWebhookRoute, getTokensTokenWebhooksIdWebhookRouteHandler)
  .openapi(getTokensTokenFieldRoute, getTokensTokenFieldRouteHandler)
  .openapi(getTypesIdRoute, getTypesIdRouteHandler)
  .openapi(postWebhooksRoute, postWebhooksRouteHandler)
  .openapi(putWebhooksIndexRoute, putWebhooksIndexRouteHandler)
  .openapi(deleteWebhooksIdWebhookRoute, deleteWebhooksIdWebhookRouteHandler)
  .openapi(getWebhooksIdWebhookRoute, getWebhooksIdWebhookRouteHandler)
  .openapi(putWebhooksIdWebhookRoute, putWebhooksIdWebhookRouteHandler)
  .openapi(putWebhooksIdWebhookActiveRoute, putWebhooksIdWebhookActiveRouteHandler)
  .openapi(putWebhooksIdWebhookCallbackURLRoute, putWebhooksIdWebhookCallbackURLRouteHandler)
  .openapi(putWebhooksIdWebhookDescriptionRoute, putWebhooksIdWebhookDescriptionRouteHandler)
  .openapi(putWebhooksIdWebhookIdModelRoute, putWebhooksIdWebhookIdModelRouteHandler)
  .openapi(getWebhooksIdWebhookFieldRoute, getWebhooksIdWebhookFieldRouteHandler)

export default app
