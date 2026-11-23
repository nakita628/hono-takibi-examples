import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVersionFlowIDRoute,
  deleteVersionGroupIdInviteLinkRoute,
  deleteVersionGroupIdJoinRequestsRoute,
  deleteVersionGroupIdParticipantsRoute,
  deleteVersionGroupIdRoute,
  deleteVersionMediaIDRoute,
  deleteVersionPhoneNumberIDBlockUsersRoute,
  deleteVersionPhoneNumberIDMessageQrdlsQRCodeIDRoute,
  deleteVersionPreVerifiedPhoneNumberIDRoute,
  deleteVersionWABAIDMessageTemplatesRoute,
  deleteVersionWABAIDSubscribedAppsRoute,
  deleteVersionWhatsAppBusinessAccountIDAssignedUsersRoute,
  getVersionApplicationIDConnectedClientBusinessesRoute,
  getVersionApplicationIDWhatsappBusinessSolutionsRoute,
  getVersionBusinessIDClientWhatsappBusinessAccountsRoute,
  getVersionBusinessIDExtendedcreditsRoute,
  getVersionBusinessIDOwnedWhatsappBusinessAccountsRoute,
  getVersionBusinessIDPreverifiedNumbersRoute,
  getVersionBusinessIDRoute,
  getVersionFlowIDAssetsRoute,
  getVersionFlowIDRoute,
  getVersionGroupIdJoinRequestsRoute,
  getVersionGroupIdRoute,
  getVersionMediaIDRoute,
  getVersionMediaURLRoute,
  getVersionMessageHistoryIDEventsRoute,
  getVersionMigrationIntentIDRoute,
  getVersionOBOMobilityIntentIDRoute,
  getVersionPhoneNumberIDBlockUsersRoute,
  getVersionPhoneNumberIDBusinessComplianceInfoRoute,
  getVersionPhoneNumberIDCallPermissionsRoute,
  getVersionPhoneNumberIDGroupsRoute,
  getVersionPhoneNumberIDMessageHistoryRoute,
  getVersionPhoneNumberIDMessageQrdlsQRCodeIDRoute,
  getVersionPhoneNumberIDMessageQrdlsRoute,
  getVersionPhoneNumberIDOfficialBusinessAccountRoute,
  getVersionPhoneNumberIDRoute,
  getVersionPhoneNumberIDSettingsRoute,
  getVersionPhoneNumberIDWhatsappBusinessEncryptionRoute,
  getVersionPhoneNumberIDWhatsappBusinessProfileRoute,
  getVersionPhoneNumberIDWhatsappCommerceSettingsRoute,
  getVersionPreVerifiedPhoneNumberIDPartnersRoute,
  getVersionPreVerifiedPhoneNumberIDRoute,
  getVersionSolutionIDAccessTokenRoute,
  getVersionSolutionIDRoute,
  getVersionTEMPLATEIDRoute,
  getVersionUserIDAssignedWhatsappBusinessAccountsRoute,
  getVersionWABABotIDRoute,
  getVersionWABAIDActivitiesRoute,
  getVersionWABAIDFlowsRoute,
  getVersionWABAIDInProgressOnbehalfRequestRoute,
  getVersionWABAIDMessageTemplatesRoute,
  getVersionWABAIDPhoneNumbersRoute,
  getVersionWABAIDRoute,
  getVersionWABAIDSchedulesRoute,
  getVersionWABAIDSolutionsRoute,
  getVersionWABAIDSubscribedAppsRoute,
  getVersionWhatsAppAccountNumberIDRoute,
  getVersionWhatsAppBusinessAccountIDAssignedUsersRoute,
  getVersionWhatsAppBusinessProfileIDRoute,
  postVersionApplicationIDWhatsappBusinessSolutionRoute,
  postVersionBusinessIDAddPhoneNumbersRoute,
  postVersionBusinessIDOnboardPartnersToMmLiteRoute,
  postVersionBusinessIDSharePreverifiedNumbersRoute,
  postVersionFlowIDAssetsRoute,
  postVersionFlowIDDeprecateRoute,
  postVersionFlowIDPublishRoute,
  postVersionFlowIDRoute,
  postVersionGroupIdInviteLinkRoute,
  postVersionGroupIdJoinRequestsRoute,
  postVersionGroupIdParticipantsRoute,
  postVersionGroupIdRoute,
  postVersionPhoneNumberIDBlockUsersRoute,
  postVersionPhoneNumberIDBusinessComplianceInfoRoute,
  postVersionPhoneNumberIDCallsRoute,
  postVersionPhoneNumberIDConversationalAutomationRoute,
  postVersionPhoneNumberIDDeregisterRoute,
  postVersionPhoneNumberIDGroupsRoute,
  postVersionPhoneNumberIDMarketingMessagesRoute,
  postVersionPhoneNumberIDMediaRoute,
  postVersionPhoneNumberIDMessageQrdlsRoute,
  postVersionPhoneNumberIDMessagesEncryptedRoute,
  postVersionPhoneNumberIDMessagesRoute,
  postVersionPhoneNumberIDOfficialBusinessAccountRoute,
  postVersionPhoneNumberIDRegisterRoute,
  postVersionPhoneNumberIDRequestCodeRoute,
  postVersionPhoneNumberIDRoute,
  postVersionPhoneNumberIDSettingsRoute,
  postVersionPhoneNumberIDVerifyCodeRoute,
  postVersionPhoneNumberIDWhatsappBusinessEncryptionRoute,
  postVersionPhoneNumberIDWhatsappBusinessProfileRoute,
  postVersionPhoneNumberIDWhatsappCommerceSettingsRoute,
  postVersionPreVerifiedPhoneNumberIDRequestCodeRoute,
  postVersionPreVerifiedPhoneNumberIDVerifyCodeRoute,
  postVersionSolutionIDAcceptDeactivationRequestRoute,
  postVersionSolutionIDAcceptRoute,
  postVersionSolutionIDRejectDeactivationRequestRoute,
  postVersionSolutionIDRejectRoute,
  postVersionSolutionIDSendDeactivationRequestRoute,
  postVersionTEMPLATEIDRoute,
  postVersionWABAIDFlowsRoute,
  postVersionWABAIDMessageTemplatesRoute,
  postVersionWABAIDMigrateFlowsRoute,
  postVersionWABAIDOboMobilityIntentRoute,
  postVersionWABAIDPhoneNumbersRoute,
  postVersionWABAIDRoute,
  postVersionWABAIDSchedulesRoute,
  postVersionWABAIDSetOboMobilityIntentRoute,
  postVersionWABAIDSetSolutionMigrationIntentRoute,
  postVersionWABAIDSubscribedAppsRoute,
  postVersionWhatsAppBusinessAccountIDAssignedUsersRoute,
  postVersionWhatsAppBusinessProfileIDRoute,
  postWhatsappWebhooksRoute,
} from './routes'
import {
  deleteVersionFlowIDRouteHandler,
  deleteVersionGroupIdInviteLinkRouteHandler,
  deleteVersionGroupIdJoinRequestsRouteHandler,
  deleteVersionGroupIdParticipantsRouteHandler,
  deleteVersionGroupIdRouteHandler,
  deleteVersionMediaIDRouteHandler,
  deleteVersionPhoneNumberIDBlockUsersRouteHandler,
  deleteVersionPhoneNumberIDMessageQrdlsQRCodeIDRouteHandler,
  deleteVersionPreVerifiedPhoneNumberIDRouteHandler,
  deleteVersionWABAIDMessageTemplatesRouteHandler,
  deleteVersionWABAIDSubscribedAppsRouteHandler,
  deleteVersionWhatsAppBusinessAccountIDAssignedUsersRouteHandler,
  getVersionApplicationIDConnectedClientBusinessesRouteHandler,
  getVersionApplicationIDWhatsappBusinessSolutionsRouteHandler,
  getVersionBusinessIDClientWhatsappBusinessAccountsRouteHandler,
  getVersionBusinessIDExtendedcreditsRouteHandler,
  getVersionBusinessIDOwnedWhatsappBusinessAccountsRouteHandler,
  getVersionBusinessIDPreverifiedNumbersRouteHandler,
  getVersionBusinessIDRouteHandler,
  getVersionFlowIDAssetsRouteHandler,
  getVersionFlowIDRouteHandler,
  getVersionGroupIdJoinRequestsRouteHandler,
  getVersionGroupIdRouteHandler,
  getVersionMediaIDRouteHandler,
  getVersionMediaURLRouteHandler,
  getVersionMessageHistoryIDEventsRouteHandler,
  getVersionMigrationIntentIDRouteHandler,
  getVersionOBOMobilityIntentIDRouteHandler,
  getVersionPhoneNumberIDBlockUsersRouteHandler,
  getVersionPhoneNumberIDBusinessComplianceInfoRouteHandler,
  getVersionPhoneNumberIDCallPermissionsRouteHandler,
  getVersionPhoneNumberIDGroupsRouteHandler,
  getVersionPhoneNumberIDMessageHistoryRouteHandler,
  getVersionPhoneNumberIDMessageQrdlsQRCodeIDRouteHandler,
  getVersionPhoneNumberIDMessageQrdlsRouteHandler,
  getVersionPhoneNumberIDOfficialBusinessAccountRouteHandler,
  getVersionPhoneNumberIDRouteHandler,
  getVersionPhoneNumberIDSettingsRouteHandler,
  getVersionPhoneNumberIDWhatsappBusinessEncryptionRouteHandler,
  getVersionPhoneNumberIDWhatsappBusinessProfileRouteHandler,
  getVersionPhoneNumberIDWhatsappCommerceSettingsRouteHandler,
  getVersionPreVerifiedPhoneNumberIDPartnersRouteHandler,
  getVersionPreVerifiedPhoneNumberIDRouteHandler,
  getVersionSolutionIDAccessTokenRouteHandler,
  getVersionSolutionIDRouteHandler,
  getVersionTEMPLATEIDRouteHandler,
  getVersionUserIDAssignedWhatsappBusinessAccountsRouteHandler,
  getVersionWABABotIDRouteHandler,
  getVersionWABAIDActivitiesRouteHandler,
  getVersionWABAIDFlowsRouteHandler,
  getVersionWABAIDInProgressOnbehalfRequestRouteHandler,
  getVersionWABAIDMessageTemplatesRouteHandler,
  getVersionWABAIDPhoneNumbersRouteHandler,
  getVersionWABAIDRouteHandler,
  getVersionWABAIDSchedulesRouteHandler,
  getVersionWABAIDSolutionsRouteHandler,
  getVersionWABAIDSubscribedAppsRouteHandler,
  getVersionWhatsAppAccountNumberIDRouteHandler,
  getVersionWhatsAppBusinessAccountIDAssignedUsersRouteHandler,
  getVersionWhatsAppBusinessProfileIDRouteHandler,
  postVersionApplicationIDWhatsappBusinessSolutionRouteHandler,
  postVersionBusinessIDAddPhoneNumbersRouteHandler,
  postVersionBusinessIDOnboardPartnersToMmLiteRouteHandler,
  postVersionBusinessIDSharePreverifiedNumbersRouteHandler,
  postVersionFlowIDAssetsRouteHandler,
  postVersionFlowIDDeprecateRouteHandler,
  postVersionFlowIDPublishRouteHandler,
  postVersionFlowIDRouteHandler,
  postVersionGroupIdInviteLinkRouteHandler,
  postVersionGroupIdJoinRequestsRouteHandler,
  postVersionGroupIdParticipantsRouteHandler,
  postVersionGroupIdRouteHandler,
  postVersionPhoneNumberIDBlockUsersRouteHandler,
  postVersionPhoneNumberIDBusinessComplianceInfoRouteHandler,
  postVersionPhoneNumberIDCallsRouteHandler,
  postVersionPhoneNumberIDConversationalAutomationRouteHandler,
  postVersionPhoneNumberIDDeregisterRouteHandler,
  postVersionPhoneNumberIDGroupsRouteHandler,
  postVersionPhoneNumberIDMarketingMessagesRouteHandler,
  postVersionPhoneNumberIDMediaRouteHandler,
  postVersionPhoneNumberIDMessageQrdlsRouteHandler,
  postVersionPhoneNumberIDMessagesEncryptedRouteHandler,
  postVersionPhoneNumberIDMessagesRouteHandler,
  postVersionPhoneNumberIDOfficialBusinessAccountRouteHandler,
  postVersionPhoneNumberIDRegisterRouteHandler,
  postVersionPhoneNumberIDRequestCodeRouteHandler,
  postVersionPhoneNumberIDRouteHandler,
  postVersionPhoneNumberIDSettingsRouteHandler,
  postVersionPhoneNumberIDVerifyCodeRouteHandler,
  postVersionPhoneNumberIDWhatsappBusinessEncryptionRouteHandler,
  postVersionPhoneNumberIDWhatsappBusinessProfileRouteHandler,
  postVersionPhoneNumberIDWhatsappCommerceSettingsRouteHandler,
  postVersionPreVerifiedPhoneNumberIDRequestCodeRouteHandler,
  postVersionPreVerifiedPhoneNumberIDVerifyCodeRouteHandler,
  postVersionSolutionIDAcceptDeactivationRequestRouteHandler,
  postVersionSolutionIDAcceptRouteHandler,
  postVersionSolutionIDRejectDeactivationRequestRouteHandler,
  postVersionSolutionIDRejectRouteHandler,
  postVersionSolutionIDSendDeactivationRequestRouteHandler,
  postVersionTEMPLATEIDRouteHandler,
  postVersionWABAIDFlowsRouteHandler,
  postVersionWABAIDMessageTemplatesRouteHandler,
  postVersionWABAIDMigrateFlowsRouteHandler,
  postVersionWABAIDOboMobilityIntentRouteHandler,
  postVersionWABAIDPhoneNumbersRouteHandler,
  postVersionWABAIDRouteHandler,
  postVersionWABAIDSchedulesRouteHandler,
  postVersionWABAIDSetOboMobilityIntentRouteHandler,
  postVersionWABAIDSetSolutionMigrationIntentRouteHandler,
  postVersionWABAIDSubscribedAppsRouteHandler,
  postVersionWhatsAppBusinessAccountIDAssignedUsersRouteHandler,
  postVersionWhatsAppBusinessProfileIDRouteHandler,
  postWhatsappWebhooksRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getVersionApplicationIDConnectedClientBusinessesRoute,
    getVersionApplicationIDConnectedClientBusinessesRouteHandler,
  )
  .openapi(
    postVersionApplicationIDWhatsappBusinessSolutionRoute,
    postVersionApplicationIDWhatsappBusinessSolutionRouteHandler,
  )
  .openapi(
    getVersionApplicationIDWhatsappBusinessSolutionsRoute,
    getVersionApplicationIDWhatsappBusinessSolutionsRouteHandler,
  )
  .openapi(
    postVersionBusinessIDAddPhoneNumbersRoute,
    postVersionBusinessIDAddPhoneNumbersRouteHandler,
  )
  .openapi(getVersionBusinessIDRoute, getVersionBusinessIDRouteHandler)
  .openapi(
    getVersionBusinessIDPreverifiedNumbersRoute,
    getVersionBusinessIDPreverifiedNumbersRouteHandler,
  )
  .openapi(
    getVersionBusinessIDClientWhatsappBusinessAccountsRoute,
    getVersionBusinessIDClientWhatsappBusinessAccountsRouteHandler,
  )
  .openapi(
    postVersionBusinessIDOnboardPartnersToMmLiteRoute,
    postVersionBusinessIDOnboardPartnersToMmLiteRouteHandler,
  )
  .openapi(
    getVersionBusinessIDOwnedWhatsappBusinessAccountsRoute,
    getVersionBusinessIDOwnedWhatsappBusinessAccountsRouteHandler,
  )
  .openapi(
    postVersionBusinessIDSharePreverifiedNumbersRoute,
    postVersionBusinessIDSharePreverifiedNumbersRouteHandler,
  )
  .openapi(getVersionPhoneNumberIDBlockUsersRoute, getVersionPhoneNumberIDBlockUsersRouteHandler)
  .openapi(postVersionPhoneNumberIDBlockUsersRoute, postVersionPhoneNumberIDBlockUsersRouteHandler)
  .openapi(
    deleteVersionPhoneNumberIDBlockUsersRoute,
    deleteVersionPhoneNumberIDBlockUsersRouteHandler,
  )
  .openapi(
    getVersionPhoneNumberIDCallPermissionsRoute,
    getVersionPhoneNumberIDCallPermissionsRouteHandler,
  )
  .openapi(postVersionPhoneNumberIDCallsRoute, postVersionPhoneNumberIDCallsRouteHandler)
  .openapi(postVersionPhoneNumberIDGroupsRoute, postVersionPhoneNumberIDGroupsRouteHandler)
  .openapi(getVersionPhoneNumberIDGroupsRoute, getVersionPhoneNumberIDGroupsRouteHandler)
  .openapi(
    postVersionPhoneNumberIDMarketingMessagesRoute,
    postVersionPhoneNumberIDMarketingMessagesRouteHandler,
  )
  .openapi(postVersionPhoneNumberIDMediaRoute, postVersionPhoneNumberIDMediaRouteHandler)
  .openapi(postVersionPhoneNumberIDMessagesRoute, postVersionPhoneNumberIDMessagesRouteHandler)
  .openapi(
    getVersionPhoneNumberIDMessageQrdlsRoute,
    getVersionPhoneNumberIDMessageQrdlsRouteHandler,
  )
  .openapi(
    postVersionPhoneNumberIDMessageQrdlsRoute,
    postVersionPhoneNumberIDMessageQrdlsRouteHandler,
  )
  .openapi(
    getVersionPhoneNumberIDMessageQrdlsQRCodeIDRoute,
    getVersionPhoneNumberIDMessageQrdlsQRCodeIDRouteHandler,
  )
  .openapi(
    deleteVersionPhoneNumberIDMessageQrdlsQRCodeIDRoute,
    deleteVersionPhoneNumberIDMessageQrdlsQRCodeIDRouteHandler,
  )
  .openapi(
    postVersionPhoneNumberIDMessagesEncryptedRoute,
    postVersionPhoneNumberIDMessagesEncryptedRouteHandler,
  )
  .openapi(
    getVersionPhoneNumberIDOfficialBusinessAccountRoute,
    getVersionPhoneNumberIDOfficialBusinessAccountRouteHandler,
  )
  .openapi(
    postVersionPhoneNumberIDOfficialBusinessAccountRoute,
    postVersionPhoneNumberIDOfficialBusinessAccountRouteHandler,
  )
  .openapi(getVersionPhoneNumberIDRoute, getVersionPhoneNumberIDRouteHandler)
  .openapi(postVersionPhoneNumberIDRoute, postVersionPhoneNumberIDRouteHandler)
  .openapi(postVersionPhoneNumberIDDeregisterRoute, postVersionPhoneNumberIDDeregisterRouteHandler)
  .openapi(
    getVersionPhoneNumberIDMessageHistoryRoute,
    getVersionPhoneNumberIDMessageHistoryRouteHandler,
  )
  .openapi(postVersionPhoneNumberIDRegisterRoute, postVersionPhoneNumberIDRegisterRouteHandler)
  .openapi(
    postVersionPhoneNumberIDRequestCodeRoute,
    postVersionPhoneNumberIDRequestCodeRouteHandler,
  )
  .openapi(getVersionPhoneNumberIDSettingsRoute, getVersionPhoneNumberIDSettingsRouteHandler)
  .openapi(postVersionPhoneNumberIDSettingsRoute, postVersionPhoneNumberIDSettingsRouteHandler)
  .openapi(postVersionPhoneNumberIDVerifyCodeRoute, postVersionPhoneNumberIDVerifyCodeRouteHandler)
  .openapi(
    getVersionPhoneNumberIDWhatsappBusinessEncryptionRoute,
    getVersionPhoneNumberIDWhatsappBusinessEncryptionRouteHandler,
  )
  .openapi(
    postVersionPhoneNumberIDWhatsappBusinessEncryptionRoute,
    postVersionPhoneNumberIDWhatsappBusinessEncryptionRouteHandler,
  )
  .openapi(
    getVersionPhoneNumberIDWhatsappBusinessProfileRoute,
    getVersionPhoneNumberIDWhatsappBusinessProfileRouteHandler,
  )
  .openapi(
    postVersionPhoneNumberIDWhatsappBusinessProfileRoute,
    postVersionPhoneNumberIDWhatsappBusinessProfileRouteHandler,
  )
  .openapi(
    getVersionPhoneNumberIDWhatsappCommerceSettingsRoute,
    getVersionPhoneNumberIDWhatsappCommerceSettingsRouteHandler,
  )
  .openapi(
    postVersionPhoneNumberIDWhatsappCommerceSettingsRoute,
    postVersionPhoneNumberIDWhatsappCommerceSettingsRouteHandler,
  )
  .openapi(
    getVersionPhoneNumberIDBusinessComplianceInfoRoute,
    getVersionPhoneNumberIDBusinessComplianceInfoRouteHandler,
  )
  .openapi(
    postVersionPhoneNumberIDBusinessComplianceInfoRoute,
    postVersionPhoneNumberIDBusinessComplianceInfoRouteHandler,
  )
  .openapi(postVersionGroupIdInviteLinkRoute, postVersionGroupIdInviteLinkRouteHandler)
  .openapi(deleteVersionGroupIdInviteLinkRoute, deleteVersionGroupIdInviteLinkRouteHandler)
  .openapi(getVersionGroupIdJoinRequestsRoute, getVersionGroupIdJoinRequestsRouteHandler)
  .openapi(postVersionGroupIdJoinRequestsRoute, postVersionGroupIdJoinRequestsRouteHandler)
  .openapi(deleteVersionGroupIdJoinRequestsRoute, deleteVersionGroupIdJoinRequestsRouteHandler)
  .openapi(postVersionGroupIdParticipantsRoute, postVersionGroupIdParticipantsRouteHandler)
  .openapi(deleteVersionGroupIdParticipantsRoute, deleteVersionGroupIdParticipantsRouteHandler)
  .openapi(getVersionGroupIdRoute, getVersionGroupIdRouteHandler)
  .openapi(deleteVersionGroupIdRoute, deleteVersionGroupIdRouteHandler)
  .openapi(postVersionGroupIdRoute, postVersionGroupIdRouteHandler)
  .openapi(getVersionMediaIDRoute, getVersionMediaIDRouteHandler)
  .openapi(deleteVersionMediaIDRoute, deleteVersionMediaIDRouteHandler)
  .openapi(getVersionMediaURLRoute, getVersionMediaURLRouteHandler)
  .openapi(getVersionMessageHistoryIDEventsRoute, getVersionMessageHistoryIDEventsRouteHandler)
  .openapi(getVersionMigrationIntentIDRoute, getVersionMigrationIntentIDRouteHandler)
  .openapi(getVersionPreVerifiedPhoneNumberIDRoute, getVersionPreVerifiedPhoneNumberIDRouteHandler)
  .openapi(
    deleteVersionPreVerifiedPhoneNumberIDRoute,
    deleteVersionPreVerifiedPhoneNumberIDRouteHandler,
  )
  .openapi(
    getVersionPreVerifiedPhoneNumberIDPartnersRoute,
    getVersionPreVerifiedPhoneNumberIDPartnersRouteHandler,
  )
  .openapi(
    postVersionPreVerifiedPhoneNumberIDRequestCodeRoute,
    postVersionPreVerifiedPhoneNumberIDRequestCodeRouteHandler,
  )
  .openapi(
    postVersionPreVerifiedPhoneNumberIDVerifyCodeRoute,
    postVersionPreVerifiedPhoneNumberIDVerifyCodeRouteHandler,
  )
  .openapi(getVersionSolutionIDAccessTokenRoute, getVersionSolutionIDAccessTokenRouteHandler)
  .openapi(
    postVersionSolutionIDAcceptDeactivationRequestRoute,
    postVersionSolutionIDAcceptDeactivationRequestRouteHandler,
  )
  .openapi(postVersionSolutionIDAcceptRoute, postVersionSolutionIDAcceptRouteHandler)
  .openapi(getVersionSolutionIDRoute, getVersionSolutionIDRouteHandler)
  .openapi(
    postVersionSolutionIDRejectDeactivationRequestRoute,
    postVersionSolutionIDRejectDeactivationRequestRouteHandler,
  )
  .openapi(postVersionSolutionIDRejectRoute, postVersionSolutionIDRejectRouteHandler)
  .openapi(
    postVersionSolutionIDSendDeactivationRequestRoute,
    postVersionSolutionIDSendDeactivationRequestRouteHandler,
  )
  .openapi(
    getVersionUserIDAssignedWhatsappBusinessAccountsRoute,
    getVersionUserIDAssignedWhatsappBusinessAccountsRouteHandler,
  )
  .openapi(getVersionWhatsAppAccountNumberIDRoute, getVersionWhatsAppAccountNumberIDRouteHandler)
  .openapi(
    getVersionWhatsAppBusinessAccountIDAssignedUsersRoute,
    getVersionWhatsAppBusinessAccountIDAssignedUsersRouteHandler,
  )
  .openapi(
    postVersionWhatsAppBusinessAccountIDAssignedUsersRoute,
    postVersionWhatsAppBusinessAccountIDAssignedUsersRouteHandler,
  )
  .openapi(
    deleteVersionWhatsAppBusinessAccountIDAssignedUsersRoute,
    deleteVersionWhatsAppBusinessAccountIDAssignedUsersRouteHandler,
  )
  .openapi(
    postVersionPhoneNumberIDConversationalAutomationRoute,
    postVersionPhoneNumberIDConversationalAutomationRouteHandler,
  )
  .openapi(
    getVersionBusinessIDExtendedcreditsRoute,
    getVersionBusinessIDExtendedcreditsRouteHandler,
  )
  .openapi(getVersionWABAIDFlowsRoute, getVersionWABAIDFlowsRouteHandler)
  .openapi(postVersionWABAIDFlowsRoute, postVersionWABAIDFlowsRouteHandler)
  .openapi(postVersionWABAIDMigrateFlowsRoute, postVersionWABAIDMigrateFlowsRouteHandler)
  .openapi(getVersionFlowIDRoute, getVersionFlowIDRouteHandler)
  .openapi(postVersionFlowIDRoute, postVersionFlowIDRouteHandler)
  .openapi(deleteVersionFlowIDRoute, deleteVersionFlowIDRouteHandler)
  .openapi(getVersionFlowIDAssetsRoute, getVersionFlowIDAssetsRouteHandler)
  .openapi(postVersionFlowIDAssetsRoute, postVersionFlowIDAssetsRouteHandler)
  .openapi(postVersionFlowIDPublishRoute, postVersionFlowIDPublishRouteHandler)
  .openapi(postVersionFlowIDDeprecateRoute, postVersionFlowIDDeprecateRouteHandler)
  .openapi(
    getVersionWABAIDInProgressOnbehalfRequestRoute,
    getVersionWABAIDInProgressOnbehalfRequestRouteHandler,
  )
  .openapi(getVersionOBOMobilityIntentIDRoute, getVersionOBOMobilityIntentIDRouteHandler)
  .openapi(postVersionWABAIDOboMobilityIntentRoute, postVersionWABAIDOboMobilityIntentRouteHandler)
  .openapi(getVersionWABAIDPhoneNumbersRoute, getVersionWABAIDPhoneNumbersRouteHandler)
  .openapi(postVersionWABAIDPhoneNumbersRoute, postVersionWABAIDPhoneNumbersRouteHandler)
  .openapi(getVersionWABAIDSchedulesRoute, getVersionWABAIDSchedulesRouteHandler)
  .openapi(postVersionWABAIDSchedulesRoute, postVersionWABAIDSchedulesRouteHandler)
  .openapi(
    postVersionWABAIDSetOboMobilityIntentRoute,
    postVersionWABAIDSetOboMobilityIntentRouteHandler,
  )
  .openapi(
    postVersionWABAIDSetSolutionMigrationIntentRoute,
    postVersionWABAIDSetSolutionMigrationIntentRouteHandler,
  )
  .openapi(getVersionWABAIDSolutionsRoute, getVersionWABAIDSolutionsRouteHandler)
  .openapi(getVersionWABAIDSubscribedAppsRoute, getVersionWABAIDSubscribedAppsRouteHandler)
  .openapi(postVersionWABAIDSubscribedAppsRoute, postVersionWABAIDSubscribedAppsRouteHandler)
  .openapi(deleteVersionWABAIDSubscribedAppsRoute, deleteVersionWABAIDSubscribedAppsRouteHandler)
  .openapi(getVersionTEMPLATEIDRoute, getVersionTEMPLATEIDRouteHandler)
  .openapi(postVersionTEMPLATEIDRoute, postVersionTEMPLATEIDRouteHandler)
  .openapi(getVersionWABAIDMessageTemplatesRoute, getVersionWABAIDMessageTemplatesRouteHandler)
  .openapi(postVersionWABAIDMessageTemplatesRoute, postVersionWABAIDMessageTemplatesRouteHandler)
  .openapi(
    deleteVersionWABAIDMessageTemplatesRoute,
    deleteVersionWABAIDMessageTemplatesRouteHandler,
  )
  .openapi(getVersionWABAIDActivitiesRoute, getVersionWABAIDActivitiesRouteHandler)
  .openapi(getVersionWABAIDRoute, getVersionWABAIDRouteHandler)
  .openapi(postVersionWABAIDRoute, postVersionWABAIDRouteHandler)
  .openapi(getVersionWABABotIDRoute, getVersionWABABotIDRouteHandler)
  .openapi(
    getVersionWhatsAppBusinessProfileIDRoute,
    getVersionWhatsAppBusinessProfileIDRouteHandler,
  )
  .openapi(
    postVersionWhatsAppBusinessProfileIDRoute,
    postVersionWhatsAppBusinessProfileIDRouteHandler,
  )
  .openapi(postWhatsappWebhooksRoute, postWhatsappWebhooksRouteHandler)

export default app
