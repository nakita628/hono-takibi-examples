import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ageRatingDeclarationsHandler,
  appCategoriesHandler,
  appEncryptionDeclarationsHandler,
  appInfoLocalizationsHandler,
  appInfosHandler,
  appPreOrdersHandler,
  appPreviewSetsHandler,
  appPreviewsHandler,
  appPricePointsHandler,
  appPricesHandler,
  appPriceTiersHandler,
  appScreenshotSetsHandler,
  appScreenshotsHandler,
  appsHandler,
  appStoreReviewAttachmentsHandler,
  appStoreReviewDetailsHandler,
  appStoreVersionLocalizationsHandler,
  appStoreVersionPhasedReleasesHandler,
  appStoreVersionsHandler,
  appStoreVersionSubmissionsHandler,
  betaAppLocalizationsHandler,
  betaAppReviewDetailsHandler,
  betaAppReviewSubmissionsHandler,
  betaBuildLocalizationsHandler,
  betaGroupsHandler,
  betaLicenseAgreementsHandler,
  betaTesterInvitationsHandler,
  betaTestersHandler,
  buildBetaDetailsHandler,
  buildBetaNotificationsHandler,
  buildsHandler,
  bundleIdCapabilitiesHandler,
  bundleIdsHandler,
  certificatesHandler,
  devicesHandler,
  diagnosticSignaturesHandler,
  endUserLicenseAgreementsHandler,
  financeReportsHandler,
  gameCenterEnabledVersionsHandler,
  idfaDeclarationsHandler,
  inAppPurchasesHandler,
  preReleaseVersionsHandler,
  profilesHandler,
  routingAppCoveragesHandler,
  salesReportsHandler,
  territoriesHandler,
  userInvitationsHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ageRatingDeclarationsHandler)
  .route('/', appCategoriesHandler)
  .route('/', appEncryptionDeclarationsHandler)
  .route('/', appInfoLocalizationsHandler)
  .route('/', appInfosHandler)
  .route('/', appPreOrdersHandler)
  .route('/', appPreviewSetsHandler)
  .route('/', appPreviewsHandler)
  .route('/', appPricePointsHandler)
  .route('/', appPriceTiersHandler)
  .route('/', appPricesHandler)
  .route('/', appScreenshotSetsHandler)
  .route('/', appScreenshotsHandler)
  .route('/', appStoreReviewAttachmentsHandler)
  .route('/', appStoreReviewDetailsHandler)
  .route('/', appStoreVersionLocalizationsHandler)
  .route('/', appStoreVersionPhasedReleasesHandler)
  .route('/', appStoreVersionSubmissionsHandler)
  .route('/', appStoreVersionsHandler)
  .route('/', appsHandler)
  .route('/', betaAppLocalizationsHandler)
  .route('/', betaAppReviewDetailsHandler)
  .route('/', betaAppReviewSubmissionsHandler)
  .route('/', betaBuildLocalizationsHandler)
  .route('/', betaGroupsHandler)
  .route('/', betaLicenseAgreementsHandler)
  .route('/', betaTesterInvitationsHandler)
  .route('/', betaTestersHandler)
  .route('/', buildBetaDetailsHandler)
  .route('/', buildBetaNotificationsHandler)
  .route('/', buildsHandler)
  .route('/', bundleIdCapabilitiesHandler)
  .route('/', bundleIdsHandler)
  .route('/', certificatesHandler)
  .route('/', devicesHandler)
  .route('/', diagnosticSignaturesHandler)
  .route('/', endUserLicenseAgreementsHandler)
  .route('/', financeReportsHandler)
  .route('/', gameCenterEnabledVersionsHandler)
  .route('/', idfaDeclarationsHandler)
  .route('/', inAppPurchasesHandler)
  .route('/', preReleaseVersionsHandler)
  .route('/', profilesHandler)
  .route('/', routingAppCoveragesHandler)
  .route('/', salesReportsHandler)
  .route('/', territoriesHandler)
  .route('/', userInvitationsHandler)
  .route('/', usersHandler)

export default app
