import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionAbortEnvironmentUpdateHandler,
  actionApplyEnvironmentManagedActionHandler,
  actionAssociateEnvironmentOperationsRoleHandler,
  actionCheckDnsAvailabilityHandler,
  actionComposeEnvironmentsHandler,
  actionCreateApplicationHandler,
  actionCreateApplicationVersionHandler,
  actionCreateConfigurationTemplateHandler,
  actionCreateEnvironmentHandler,
  actionCreatePlatformVersionHandler,
  actionCreateStorageLocationHandler,
  actionDeleteApplicationHandler,
  actionDeleteApplicationVersionHandler,
  actionDeleteConfigurationTemplateHandler,
  actionDeleteEnvironmentConfigurationHandler,
  actionDeletePlatformVersionHandler,
  actionDescribeAccountAttributesHandler,
  actionDescribeApplicationsHandler,
  actionDescribeApplicationVersionsHandler,
  actionDescribeConfigurationOptionsHandler,
  actionDescribeConfigurationSettingsHandler,
  actionDescribeEnvironmentHealthHandler,
  actionDescribeEnvironmentManagedActionHistoryHandler,
  actionDescribeEnvironmentManagedActionsHandler,
  actionDescribeEnvironmentResourcesHandler,
  actionDescribeEnvironmentsHandler,
  actionDescribeEventsHandler,
  actionDescribeInstancesHealthHandler,
  actionDescribePlatformVersionHandler,
  actionDisassociateEnvironmentOperationsRoleHandler,
  actionListAvailableSolutionStacksHandler,
  actionListPlatformBranchesHandler,
  actionListPlatformVersionsHandler,
  actionListTagsForResourceHandler,
  actionRebuildEnvironmentHandler,
  actionRequestEnvironmentInfoHandler,
  actionRestartAppServerHandler,
  actionRetrieveEnvironmentInfoHandler,
  actionSwapEnvironmentCnamEsHandler,
  actionTerminateEnvironmentHandler,
  actionUpdateApplicationHandler,
  actionUpdateApplicationResourceLifecycleHandler,
  actionUpdateApplicationVersionHandler,
  actionUpdateConfigurationTemplateHandler,
  actionUpdateEnvironmentHandler,
  actionUpdateTagsForResourceHandler,
  actionValidateConfigurationSettingsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionAbortEnvironmentUpdateHandler)
  .route('/', actionApplyEnvironmentManagedActionHandler)
  .route('/', actionAssociateEnvironmentOperationsRoleHandler)
  .route('/', actionCheckDnsAvailabilityHandler)
  .route('/', actionComposeEnvironmentsHandler)
  .route('/', actionCreateApplicationHandler)
  .route('/', actionCreateApplicationVersionHandler)
  .route('/', actionCreateConfigurationTemplateHandler)
  .route('/', actionCreateEnvironmentHandler)
  .route('/', actionCreatePlatformVersionHandler)
  .route('/', actionCreateStorageLocationHandler)
  .route('/', actionDeleteApplicationHandler)
  .route('/', actionDeleteApplicationVersionHandler)
  .route('/', actionDeleteConfigurationTemplateHandler)
  .route('/', actionDeleteEnvironmentConfigurationHandler)
  .route('/', actionDeletePlatformVersionHandler)
  .route('/', actionDescribeAccountAttributesHandler)
  .route('/', actionDescribeApplicationVersionsHandler)
  .route('/', actionDescribeApplicationsHandler)
  .route('/', actionDescribeConfigurationOptionsHandler)
  .route('/', actionDescribeConfigurationSettingsHandler)
  .route('/', actionDescribeEnvironmentHealthHandler)
  .route('/', actionDescribeEnvironmentManagedActionHistoryHandler)
  .route('/', actionDescribeEnvironmentManagedActionsHandler)
  .route('/', actionDescribeEnvironmentResourcesHandler)
  .route('/', actionDescribeEnvironmentsHandler)
  .route('/', actionDescribeEventsHandler)
  .route('/', actionDescribeInstancesHealthHandler)
  .route('/', actionDescribePlatformVersionHandler)
  .route('/', actionDisassociateEnvironmentOperationsRoleHandler)
  .route('/', actionListAvailableSolutionStacksHandler)
  .route('/', actionListPlatformBranchesHandler)
  .route('/', actionListPlatformVersionsHandler)
  .route('/', actionListTagsForResourceHandler)
  .route('/', actionRebuildEnvironmentHandler)
  .route('/', actionRequestEnvironmentInfoHandler)
  .route('/', actionRestartAppServerHandler)
  .route('/', actionRetrieveEnvironmentInfoHandler)
  .route('/', actionSwapEnvironmentCnamEsHandler)
  .route('/', actionTerminateEnvironmentHandler)
  .route('/', actionUpdateApplicationHandler)
  .route('/', actionUpdateApplicationResourceLifecycleHandler)
  .route('/', actionUpdateApplicationVersionHandler)
  .route('/', actionUpdateConfigurationTemplateHandler)
  .route('/', actionUpdateEnvironmentHandler)
  .route('/', actionUpdateTagsForResourceHandler)
  .route('/', actionValidateConfigurationSettingsHandler)

export default app
