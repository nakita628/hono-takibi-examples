import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsLicenseManagerAcceptGrantHandler,
  xAmzTargetAwsLicenseManagerCheckInLicenseHandler,
  xAmzTargetAwsLicenseManagerCheckoutBorrowLicenseHandler,
  xAmzTargetAwsLicenseManagerCheckoutLicenseHandler,
  xAmzTargetAwsLicenseManagerCreateGrantHandler,
  xAmzTargetAwsLicenseManagerCreateGrantVersionHandler,
  xAmzTargetAwsLicenseManagerCreateLicenseConfigurationHandler,
  xAmzTargetAwsLicenseManagerCreateLicenseConversionTaskForResourceHandler,
  xAmzTargetAwsLicenseManagerCreateLicenseHandler,
  xAmzTargetAwsLicenseManagerCreateLicenseManagerReportGeneratorHandler,
  xAmzTargetAwsLicenseManagerCreateLicenseVersionHandler,
  xAmzTargetAwsLicenseManagerCreateTokenHandler,
  xAmzTargetAwsLicenseManagerDeleteGrantHandler,
  xAmzTargetAwsLicenseManagerDeleteLicenseConfigurationHandler,
  xAmzTargetAwsLicenseManagerDeleteLicenseHandler,
  xAmzTargetAwsLicenseManagerDeleteLicenseManagerReportGeneratorHandler,
  xAmzTargetAwsLicenseManagerDeleteTokenHandler,
  xAmzTargetAwsLicenseManagerExtendLicenseConsumptionHandler,
  xAmzTargetAwsLicenseManagerGetAccessTokenHandler,
  xAmzTargetAwsLicenseManagerGetGrantHandler,
  xAmzTargetAwsLicenseManagerGetLicenseConfigurationHandler,
  xAmzTargetAwsLicenseManagerGetLicenseConversionTaskHandler,
  xAmzTargetAwsLicenseManagerGetLicenseHandler,
  xAmzTargetAwsLicenseManagerGetLicenseManagerReportGeneratorHandler,
  xAmzTargetAwsLicenseManagerGetLicenseUsageHandler,
  xAmzTargetAwsLicenseManagerGetServiceSettingsHandler,
  xAmzTargetAwsLicenseManagerListAssociationsForLicenseConfigurationHandler,
  xAmzTargetAwsLicenseManagerListDistributedGrantsHandler,
  xAmzTargetAwsLicenseManagerListFailuresForLicenseConfigurationOperationsHandler,
  xAmzTargetAwsLicenseManagerListLicenseConfigurationsHandler,
  xAmzTargetAwsLicenseManagerListLicenseConversionTasksHandler,
  xAmzTargetAwsLicenseManagerListLicenseManagerReportGeneratorsHandler,
  xAmzTargetAwsLicenseManagerListLicensesHandler,
  xAmzTargetAwsLicenseManagerListLicenseSpecificationsForResourceHandler,
  xAmzTargetAwsLicenseManagerListLicenseVersionsHandler,
  xAmzTargetAwsLicenseManagerListReceivedGrantsForOrganizationHandler,
  xAmzTargetAwsLicenseManagerListReceivedGrantsHandler,
  xAmzTargetAwsLicenseManagerListReceivedLicensesForOrganizationHandler,
  xAmzTargetAwsLicenseManagerListReceivedLicensesHandler,
  xAmzTargetAwsLicenseManagerListResourceInventoryHandler,
  xAmzTargetAwsLicenseManagerListTagsForResourceHandler,
  xAmzTargetAwsLicenseManagerListTokensHandler,
  xAmzTargetAwsLicenseManagerListUsageForLicenseConfigurationHandler,
  xAmzTargetAwsLicenseManagerRejectGrantHandler,
  xAmzTargetAwsLicenseManagerTagResourceHandler,
  xAmzTargetAwsLicenseManagerUntagResourceHandler,
  xAmzTargetAwsLicenseManagerUpdateLicenseConfigurationHandler,
  xAmzTargetAwsLicenseManagerUpdateLicenseManagerReportGeneratorHandler,
  xAmzTargetAwsLicenseManagerUpdateLicenseSpecificationsForResourceHandler,
  xAmzTargetAwsLicenseManagerUpdateServiceSettingsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsLicenseManagerAcceptGrantHandler)
  .route('/', xAmzTargetAwsLicenseManagerCheckInLicenseHandler)
  .route('/', xAmzTargetAwsLicenseManagerCheckoutBorrowLicenseHandler)
  .route('/', xAmzTargetAwsLicenseManagerCheckoutLicenseHandler)
  .route('/', xAmzTargetAwsLicenseManagerCreateGrantHandler)
  .route('/', xAmzTargetAwsLicenseManagerCreateGrantVersionHandler)
  .route('/', xAmzTargetAwsLicenseManagerCreateLicenseHandler)
  .route('/', xAmzTargetAwsLicenseManagerCreateLicenseConfigurationHandler)
  .route('/', xAmzTargetAwsLicenseManagerCreateLicenseConversionTaskForResourceHandler)
  .route('/', xAmzTargetAwsLicenseManagerCreateLicenseManagerReportGeneratorHandler)
  .route('/', xAmzTargetAwsLicenseManagerCreateLicenseVersionHandler)
  .route('/', xAmzTargetAwsLicenseManagerCreateTokenHandler)
  .route('/', xAmzTargetAwsLicenseManagerDeleteGrantHandler)
  .route('/', xAmzTargetAwsLicenseManagerDeleteLicenseHandler)
  .route('/', xAmzTargetAwsLicenseManagerDeleteLicenseConfigurationHandler)
  .route('/', xAmzTargetAwsLicenseManagerDeleteLicenseManagerReportGeneratorHandler)
  .route('/', xAmzTargetAwsLicenseManagerDeleteTokenHandler)
  .route('/', xAmzTargetAwsLicenseManagerExtendLicenseConsumptionHandler)
  .route('/', xAmzTargetAwsLicenseManagerGetAccessTokenHandler)
  .route('/', xAmzTargetAwsLicenseManagerGetGrantHandler)
  .route('/', xAmzTargetAwsLicenseManagerGetLicenseHandler)
  .route('/', xAmzTargetAwsLicenseManagerGetLicenseConfigurationHandler)
  .route('/', xAmzTargetAwsLicenseManagerGetLicenseConversionTaskHandler)
  .route('/', xAmzTargetAwsLicenseManagerGetLicenseManagerReportGeneratorHandler)
  .route('/', xAmzTargetAwsLicenseManagerGetLicenseUsageHandler)
  .route('/', xAmzTargetAwsLicenseManagerGetServiceSettingsHandler)
  .route('/', xAmzTargetAwsLicenseManagerListAssociationsForLicenseConfigurationHandler)
  .route('/', xAmzTargetAwsLicenseManagerListDistributedGrantsHandler)
  .route('/', xAmzTargetAwsLicenseManagerListFailuresForLicenseConfigurationOperationsHandler)
  .route('/', xAmzTargetAwsLicenseManagerListLicenseConfigurationsHandler)
  .route('/', xAmzTargetAwsLicenseManagerListLicenseConversionTasksHandler)
  .route('/', xAmzTargetAwsLicenseManagerListLicenseManagerReportGeneratorsHandler)
  .route('/', xAmzTargetAwsLicenseManagerListLicenseSpecificationsForResourceHandler)
  .route('/', xAmzTargetAwsLicenseManagerListLicenseVersionsHandler)
  .route('/', xAmzTargetAwsLicenseManagerListLicensesHandler)
  .route('/', xAmzTargetAwsLicenseManagerListReceivedGrantsHandler)
  .route('/', xAmzTargetAwsLicenseManagerListReceivedGrantsForOrganizationHandler)
  .route('/', xAmzTargetAwsLicenseManagerListReceivedLicensesHandler)
  .route('/', xAmzTargetAwsLicenseManagerListReceivedLicensesForOrganizationHandler)
  .route('/', xAmzTargetAwsLicenseManagerListResourceInventoryHandler)
  .route('/', xAmzTargetAwsLicenseManagerListTagsForResourceHandler)
  .route('/', xAmzTargetAwsLicenseManagerListTokensHandler)
  .route('/', xAmzTargetAwsLicenseManagerListUsageForLicenseConfigurationHandler)
  .route('/', xAmzTargetAwsLicenseManagerRejectGrantHandler)
  .route('/', xAmzTargetAwsLicenseManagerTagResourceHandler)
  .route('/', xAmzTargetAwsLicenseManagerUntagResourceHandler)
  .route('/', xAmzTargetAwsLicenseManagerUpdateLicenseConfigurationHandler)
  .route('/', xAmzTargetAwsLicenseManagerUpdateLicenseManagerReportGeneratorHandler)
  .route('/', xAmzTargetAwsLicenseManagerUpdateLicenseSpecificationsForResourceHandler)
  .route('/', xAmzTargetAwsLicenseManagerUpdateServiceSettingsHandler)

export default app
