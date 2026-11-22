import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSLicenseManagerAcceptGrantHandler,
  XAmzTargetAWSLicenseManagerCheckInLicenseHandler,
  XAmzTargetAWSLicenseManagerCheckoutBorrowLicenseHandler,
  XAmzTargetAWSLicenseManagerCheckoutLicenseHandler,
  XAmzTargetAWSLicenseManagerCreateGrantHandler,
  XAmzTargetAWSLicenseManagerCreateGrantVersionHandler,
  XAmzTargetAWSLicenseManagerCreateLicenseConfigurationHandler,
  XAmzTargetAWSLicenseManagerCreateLicenseConversionTaskForResourceHandler,
  XAmzTargetAWSLicenseManagerCreateLicenseHandler,
  XAmzTargetAWSLicenseManagerCreateLicenseManagerReportGeneratorHandler,
  XAmzTargetAWSLicenseManagerCreateLicenseVersionHandler,
  XAmzTargetAWSLicenseManagerCreateTokenHandler,
  XAmzTargetAWSLicenseManagerDeleteGrantHandler,
  XAmzTargetAWSLicenseManagerDeleteLicenseConfigurationHandler,
  XAmzTargetAWSLicenseManagerDeleteLicenseHandler,
  XAmzTargetAWSLicenseManagerDeleteLicenseManagerReportGeneratorHandler,
  XAmzTargetAWSLicenseManagerDeleteTokenHandler,
  XAmzTargetAWSLicenseManagerExtendLicenseConsumptionHandler,
  XAmzTargetAWSLicenseManagerGetAccessTokenHandler,
  XAmzTargetAWSLicenseManagerGetGrantHandler,
  XAmzTargetAWSLicenseManagerGetLicenseConfigurationHandler,
  XAmzTargetAWSLicenseManagerGetLicenseConversionTaskHandler,
  XAmzTargetAWSLicenseManagerGetLicenseHandler,
  XAmzTargetAWSLicenseManagerGetLicenseManagerReportGeneratorHandler,
  XAmzTargetAWSLicenseManagerGetLicenseUsageHandler,
  XAmzTargetAWSLicenseManagerGetServiceSettingsHandler,
  XAmzTargetAWSLicenseManagerListAssociationsForLicenseConfigurationHandler,
  XAmzTargetAWSLicenseManagerListDistributedGrantsHandler,
  XAmzTargetAWSLicenseManagerListFailuresForLicenseConfigurationOperationsHandler,
  XAmzTargetAWSLicenseManagerListLicenseConfigurationsHandler,
  XAmzTargetAWSLicenseManagerListLicenseConversionTasksHandler,
  XAmzTargetAWSLicenseManagerListLicenseManagerReportGeneratorsHandler,
  XAmzTargetAWSLicenseManagerListLicensesHandler,
  XAmzTargetAWSLicenseManagerListLicenseSpecificationsForResourceHandler,
  XAmzTargetAWSLicenseManagerListLicenseVersionsHandler,
  XAmzTargetAWSLicenseManagerListReceivedGrantsForOrganizationHandler,
  XAmzTargetAWSLicenseManagerListReceivedGrantsHandler,
  XAmzTargetAWSLicenseManagerListReceivedLicensesForOrganizationHandler,
  XAmzTargetAWSLicenseManagerListReceivedLicensesHandler,
  XAmzTargetAWSLicenseManagerListResourceInventoryHandler,
  XAmzTargetAWSLicenseManagerListTagsForResourceHandler,
  XAmzTargetAWSLicenseManagerListTokensHandler,
  XAmzTargetAWSLicenseManagerListUsageForLicenseConfigurationHandler,
  XAmzTargetAWSLicenseManagerRejectGrantHandler,
  XAmzTargetAWSLicenseManagerTagResourceHandler,
  XAmzTargetAWSLicenseManagerUntagResourceHandler,
  XAmzTargetAWSLicenseManagerUpdateLicenseConfigurationHandler,
  XAmzTargetAWSLicenseManagerUpdateLicenseManagerReportGeneratorHandler,
  XAmzTargetAWSLicenseManagerUpdateLicenseSpecificationsForResourceHandler,
  XAmzTargetAWSLicenseManagerUpdateServiceSettingsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSLicenseManagerAcceptGrantHandler)
  .route('/', XAmzTargetAWSLicenseManagerCheckInLicenseHandler)
  .route('/', XAmzTargetAWSLicenseManagerCheckoutBorrowLicenseHandler)
  .route('/', XAmzTargetAWSLicenseManagerCheckoutLicenseHandler)
  .route('/', XAmzTargetAWSLicenseManagerCreateGrantHandler)
  .route('/', XAmzTargetAWSLicenseManagerCreateGrantVersionHandler)
  .route('/', XAmzTargetAWSLicenseManagerCreateLicenseHandler)
  .route('/', XAmzTargetAWSLicenseManagerCreateLicenseConfigurationHandler)
  .route('/', XAmzTargetAWSLicenseManagerCreateLicenseConversionTaskForResourceHandler)
  .route('/', XAmzTargetAWSLicenseManagerCreateLicenseManagerReportGeneratorHandler)
  .route('/', XAmzTargetAWSLicenseManagerCreateLicenseVersionHandler)
  .route('/', XAmzTargetAWSLicenseManagerCreateTokenHandler)
  .route('/', XAmzTargetAWSLicenseManagerDeleteGrantHandler)
  .route('/', XAmzTargetAWSLicenseManagerDeleteLicenseHandler)
  .route('/', XAmzTargetAWSLicenseManagerDeleteLicenseConfigurationHandler)
  .route('/', XAmzTargetAWSLicenseManagerDeleteLicenseManagerReportGeneratorHandler)
  .route('/', XAmzTargetAWSLicenseManagerDeleteTokenHandler)
  .route('/', XAmzTargetAWSLicenseManagerExtendLicenseConsumptionHandler)
  .route('/', XAmzTargetAWSLicenseManagerGetAccessTokenHandler)
  .route('/', XAmzTargetAWSLicenseManagerGetGrantHandler)
  .route('/', XAmzTargetAWSLicenseManagerGetLicenseHandler)
  .route('/', XAmzTargetAWSLicenseManagerGetLicenseConfigurationHandler)
  .route('/', XAmzTargetAWSLicenseManagerGetLicenseConversionTaskHandler)
  .route('/', XAmzTargetAWSLicenseManagerGetLicenseManagerReportGeneratorHandler)
  .route('/', XAmzTargetAWSLicenseManagerGetLicenseUsageHandler)
  .route('/', XAmzTargetAWSLicenseManagerGetServiceSettingsHandler)
  .route('/', XAmzTargetAWSLicenseManagerListAssociationsForLicenseConfigurationHandler)
  .route('/', XAmzTargetAWSLicenseManagerListDistributedGrantsHandler)
  .route('/', XAmzTargetAWSLicenseManagerListFailuresForLicenseConfigurationOperationsHandler)
  .route('/', XAmzTargetAWSLicenseManagerListLicenseConfigurationsHandler)
  .route('/', XAmzTargetAWSLicenseManagerListLicenseConversionTasksHandler)
  .route('/', XAmzTargetAWSLicenseManagerListLicenseManagerReportGeneratorsHandler)
  .route('/', XAmzTargetAWSLicenseManagerListLicenseSpecificationsForResourceHandler)
  .route('/', XAmzTargetAWSLicenseManagerListLicenseVersionsHandler)
  .route('/', XAmzTargetAWSLicenseManagerListLicensesHandler)
  .route('/', XAmzTargetAWSLicenseManagerListReceivedGrantsHandler)
  .route('/', XAmzTargetAWSLicenseManagerListReceivedGrantsForOrganizationHandler)
  .route('/', XAmzTargetAWSLicenseManagerListReceivedLicensesHandler)
  .route('/', XAmzTargetAWSLicenseManagerListReceivedLicensesForOrganizationHandler)
  .route('/', XAmzTargetAWSLicenseManagerListResourceInventoryHandler)
  .route('/', XAmzTargetAWSLicenseManagerListTagsForResourceHandler)
  .route('/', XAmzTargetAWSLicenseManagerListTokensHandler)
  .route('/', XAmzTargetAWSLicenseManagerListUsageForLicenseConfigurationHandler)
  .route('/', XAmzTargetAWSLicenseManagerRejectGrantHandler)
  .route('/', XAmzTargetAWSLicenseManagerTagResourceHandler)
  .route('/', XAmzTargetAWSLicenseManagerUntagResourceHandler)
  .route('/', XAmzTargetAWSLicenseManagerUpdateLicenseConfigurationHandler)
  .route('/', XAmzTargetAWSLicenseManagerUpdateLicenseManagerReportGeneratorHandler)
  .route('/', XAmzTargetAWSLicenseManagerUpdateLicenseSpecificationsForResourceHandler)
  .route('/', XAmzTargetAWSLicenseManagerUpdateServiceSettingsHandler)

export default app
