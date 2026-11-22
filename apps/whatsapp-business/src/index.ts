import { OpenAPIHono } from '@hono/zod-openapi'
import {
  applicationBusinessConnectionsHandler,
  assignedWhatsAppBusinessAccountsHandler,
  billingHandler,
  blockUsersHandler,
  businessComplianceHandler,
  businessEncryptionHandler,
  businessPhoneNumbersHandler,
  businessPortfolioHandler,
  callPermissionsHandler,
  callsHandler,
  clientWhatsAppBusinessAccountsHandler,
  commerceSettingsHandler,
  conversationalAutomationHandler,
  encryptedMessagesHandler,
  flowsHandler,
  individualQRCodeHandler,
  marketingMessagesHandler,
  mediaHandler,
  messageHistoryEventsHandler,
  messageHistoryHandler,
  messagesHandler,
  migrationIntentHandler,
  mmLiteOnboardingHandler,
  multiPartnerSolutionsHandler,
  oboMobilityIntentHandler,
  officialBusinessAccountHandler,
  ownedWhatsAppBusinessAccountsHandler,
  phoneNumberManagementHandler,
  phoneNumberRegistrationHandler,
  phoneNumbersHandler,
  phoneNumberVerificationHandler,
  preVerifiedPhoneNumberPartnersHandler,
  preVerifiedPhoneNumbersHandler,
  preVerifiedPhoneNumberSharingHandler,
  qrCodeCollectionHandler,
  scheduleManagementHandler,
  settingsHandler,
  solutionMigrationHandler,
  templatesHandler,
  VersionHandler,
  webhookSubscriptionsHandler,
  whatsAppAccountNumbersHandler,
  whatsAppBusinessAccountActivitiesHandler,
  whatsAppBusinessAccountHandler,
  whatsAppBusinessAccountOnBehalfRequestsHandler,
  whatsAppBusinessAccountUsersHandler,
  whatsAppBusinessBotHandler,
  whatsAppBusinessProfileHandler,
  whatsAppBusinessProfilesHandler,
  whatsAppBusinessSolutionManagementHandler,
  whatsappHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', applicationBusinessConnectionsHandler)
  .route('/', multiPartnerSolutionsHandler)
  .route('/', businessPhoneNumbersHandler)
  .route('/', businessPortfolioHandler)
  .route('/', preVerifiedPhoneNumbersHandler)
  .route('/', clientWhatsAppBusinessAccountsHandler)
  .route('/', mmLiteOnboardingHandler)
  .route('/', ownedWhatsAppBusinessAccountsHandler)
  .route('/', preVerifiedPhoneNumberSharingHandler)
  .route('/', blockUsersHandler)
  .route('/', callPermissionsHandler)
  .route('/', callsHandler)
  .route('/', VersionHandler)
  .route('/', marketingMessagesHandler)
  .route('/', mediaHandler)
  .route('/', messagesHandler)
  .route('/', qrCodeCollectionHandler)
  .route('/', individualQRCodeHandler)
  .route('/', encryptedMessagesHandler)
  .route('/', officialBusinessAccountHandler)
  .route('/', phoneNumbersHandler)
  .route('/', phoneNumberManagementHandler)
  .route('/', messageHistoryHandler)
  .route('/', phoneNumberRegistrationHandler)
  .route('/', phoneNumberVerificationHandler)
  .route('/', settingsHandler)
  .route('/', flowsHandler)
  .route('/', businessEncryptionHandler)
  .route('/', whatsAppBusinessProfileHandler)
  .route('/', commerceSettingsHandler)
  .route('/', businessComplianceHandler)
  .route('/', messageHistoryEventsHandler)
  .route('/', migrationIntentHandler)
  .route('/', preVerifiedPhoneNumberPartnersHandler)
  .route('/', whatsAppBusinessSolutionManagementHandler)
  .route('/', assignedWhatsAppBusinessAccountsHandler)
  .route('/', whatsAppAccountNumbersHandler)
  .route('/', whatsAppBusinessAccountUsersHandler)
  .route('/', conversationalAutomationHandler)
  .route('/', billingHandler)
  .route('/', whatsAppBusinessAccountOnBehalfRequestsHandler)
  .route('/', oboMobilityIntentHandler)
  .route('/', scheduleManagementHandler)
  .route('/', solutionMigrationHandler)
  .route('/', webhookSubscriptionsHandler)
  .route('/', templatesHandler)
  .route('/', whatsAppBusinessAccountActivitiesHandler)
  .route('/', whatsAppBusinessAccountHandler)
  .route('/', whatsAppBusinessBotHandler)
  .route('/', whatsAppBusinessProfilesHandler)
  .route('/', whatsappHandler)

export default app
