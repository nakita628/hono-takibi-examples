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
} from '../routes'

const app = new OpenAPIHono()

export const versionHandler = app
  .openapi(getVersionApplicationIDConnectedClientBusinessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionApplicationIDWhatsappBusinessSolutionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionApplicationIDWhatsappBusinessSolutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionBusinessIDAddPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionBusinessIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionBusinessIDPreverifiedNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionBusinessIDClientWhatsappBusinessAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionBusinessIDOnboardPartnersToMmLiteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionBusinessIDOwnedWhatsappBusinessAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionBusinessIDSharePreverifiedNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionPhoneNumberIDBlockUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDBlockUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionPhoneNumberIDBlockUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionPhoneNumberIDCallPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionPhoneNumberIDGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDMarketingMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionPhoneNumberIDMessageQrdlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDMessageQrdlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionPhoneNumberIDMessageQrdlsQRCodeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionPhoneNumberIDMessageQrdlsQRCodeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDMessagesEncryptedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionPhoneNumberIDOfficialBusinessAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDOfficialBusinessAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionPhoneNumberIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDDeregisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionPhoneNumberIDMessageHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDRequestCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionPhoneNumberIDSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDVerifyCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionPhoneNumberIDWhatsappBusinessEncryptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDWhatsappBusinessEncryptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionPhoneNumberIDWhatsappBusinessProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDWhatsappBusinessProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionPhoneNumberIDWhatsappCommerceSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDWhatsappCommerceSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionPhoneNumberIDBusinessComplianceInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDBusinessComplianceInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionGroupIdInviteLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionGroupIdInviteLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionGroupIdJoinRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionGroupIdJoinRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionGroupIdJoinRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionGroupIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionGroupIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionMediaIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionMediaIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionMediaURLRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionMessageHistoryIDEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionMigrationIntentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionPreVerifiedPhoneNumberIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionPreVerifiedPhoneNumberIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionPreVerifiedPhoneNumberIDPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPreVerifiedPhoneNumberIDRequestCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPreVerifiedPhoneNumberIDVerifyCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionSolutionIDAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionSolutionIDAcceptDeactivationRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionSolutionIDAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionSolutionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionSolutionIDRejectDeactivationRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionSolutionIDRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionSolutionIDSendDeactivationRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionUserIDAssignedWhatsappBusinessAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionWhatsAppAccountNumberIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionWhatsAppBusinessAccountIDAssignedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionWhatsAppBusinessAccountIDAssignedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionWhatsAppBusinessAccountIDAssignedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDConversationalAutomationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionBusinessIDExtendedcreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionWABAIDFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionWABAIDFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionWABAIDMigrateFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionFlowIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionFlowIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionFlowIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionFlowIDAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionFlowIDAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionFlowIDPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionFlowIDDeprecateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionWABAIDInProgressOnbehalfRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionOBOMobilityIntentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionWABAIDOboMobilityIntentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionWABAIDPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionWABAIDPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionWABAIDSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionWABAIDSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionWABAIDSetOboMobilityIntentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionWABAIDSetSolutionMigrationIntentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionWABAIDSolutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionWABAIDSubscribedAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionWABAIDSubscribedAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionWABAIDSubscribedAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionTEMPLATEIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionTEMPLATEIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionWABAIDMessageTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionWABAIDMessageTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionWABAIDMessageTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionWABAIDActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionWABAIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionWABAIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionWABABotIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionWhatsAppBusinessProfileIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionWhatsAppBusinessProfileIDRoute, (c) => {
    throw new Error('Not implemented')
  })
