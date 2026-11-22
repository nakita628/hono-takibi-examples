import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ActionAbortEnvironmentUpdateHandler,
  ActionApplyEnvironmentManagedActionHandler,
  ActionAssociateEnvironmentOperationsRoleHandler,
  ActionCheckDNSAvailabilityHandler,
  ActionComposeEnvironmentsHandler,
  ActionCreateApplicationHandler,
  ActionCreateApplicationVersionHandler,
  ActionCreateConfigurationTemplateHandler,
  ActionCreateEnvironmentHandler,
  ActionCreatePlatformVersionHandler,
  ActionCreateStorageLocationHandler,
  ActionDeleteApplicationHandler,
  ActionDeleteApplicationVersionHandler,
  ActionDeleteConfigurationTemplateHandler,
  ActionDeleteEnvironmentConfigurationHandler,
  ActionDeletePlatformVersionHandler,
  ActionDescribeAccountAttributesHandler,
  ActionDescribeApplicationsHandler,
  ActionDescribeApplicationVersionsHandler,
  ActionDescribeConfigurationOptionsHandler,
  ActionDescribeConfigurationSettingsHandler,
  ActionDescribeEnvironmentHealthHandler,
  ActionDescribeEnvironmentManagedActionHistoryHandler,
  ActionDescribeEnvironmentManagedActionsHandler,
  ActionDescribeEnvironmentResourcesHandler,
  ActionDescribeEnvironmentsHandler,
  ActionDescribeEventsHandler,
  ActionDescribeInstancesHealthHandler,
  ActionDescribePlatformVersionHandler,
  ActionDisassociateEnvironmentOperationsRoleHandler,
  ActionListAvailableSolutionStacksHandler,
  ActionListPlatformBranchesHandler,
  ActionListPlatformVersionsHandler,
  ActionListTagsForResourceHandler,
  ActionRebuildEnvironmentHandler,
  ActionRequestEnvironmentInfoHandler,
  ActionRestartAppServerHandler,
  ActionRetrieveEnvironmentInfoHandler,
  ActionSwapEnvironmentCNAMEsHandler,
  ActionTerminateEnvironmentHandler,
  ActionUpdateApplicationHandler,
  ActionUpdateApplicationResourceLifecycleHandler,
  ActionUpdateApplicationVersionHandler,
  ActionUpdateConfigurationTemplateHandler,
  ActionUpdateEnvironmentHandler,
  ActionUpdateTagsForResourceHandler,
  ActionValidateConfigurationSettingsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ActionAbortEnvironmentUpdateHandler)
  .route('/', ActionApplyEnvironmentManagedActionHandler)
  .route('/', ActionAssociateEnvironmentOperationsRoleHandler)
  .route('/', ActionCheckDNSAvailabilityHandler)
  .route('/', ActionComposeEnvironmentsHandler)
  .route('/', ActionCreateApplicationHandler)
  .route('/', ActionCreateApplicationVersionHandler)
  .route('/', ActionCreateConfigurationTemplateHandler)
  .route('/', ActionCreateEnvironmentHandler)
  .route('/', ActionCreatePlatformVersionHandler)
  .route('/', ActionCreateStorageLocationHandler)
  .route('/', ActionDeleteApplicationHandler)
  .route('/', ActionDeleteApplicationVersionHandler)
  .route('/', ActionDeleteConfigurationTemplateHandler)
  .route('/', ActionDeleteEnvironmentConfigurationHandler)
  .route('/', ActionDeletePlatformVersionHandler)
  .route('/', ActionDescribeAccountAttributesHandler)
  .route('/', ActionDescribeApplicationVersionsHandler)
  .route('/', ActionDescribeApplicationsHandler)
  .route('/', ActionDescribeConfigurationOptionsHandler)
  .route('/', ActionDescribeConfigurationSettingsHandler)
  .route('/', ActionDescribeEnvironmentHealthHandler)
  .route('/', ActionDescribeEnvironmentManagedActionHistoryHandler)
  .route('/', ActionDescribeEnvironmentManagedActionsHandler)
  .route('/', ActionDescribeEnvironmentResourcesHandler)
  .route('/', ActionDescribeEnvironmentsHandler)
  .route('/', ActionDescribeEventsHandler)
  .route('/', ActionDescribeInstancesHealthHandler)
  .route('/', ActionDescribePlatformVersionHandler)
  .route('/', ActionDisassociateEnvironmentOperationsRoleHandler)
  .route('/', ActionListAvailableSolutionStacksHandler)
  .route('/', ActionListPlatformBranchesHandler)
  .route('/', ActionListPlatformVersionsHandler)
  .route('/', ActionListTagsForResourceHandler)
  .route('/', ActionRebuildEnvironmentHandler)
  .route('/', ActionRequestEnvironmentInfoHandler)
  .route('/', ActionRestartAppServerHandler)
  .route('/', ActionRetrieveEnvironmentInfoHandler)
  .route('/', ActionSwapEnvironmentCNAMEsHandler)
  .route('/', ActionTerminateEnvironmentHandler)
  .route('/', ActionUpdateApplicationHandler)
  .route('/', ActionUpdateApplicationResourceLifecycleHandler)
  .route('/', ActionUpdateApplicationVersionHandler)
  .route('/', ActionUpdateConfigurationTemplateHandler)
  .route('/', ActionUpdateEnvironmentHandler)
  .route('/', ActionUpdateTagsForResourceHandler)
  .route('/', ActionValidateConfigurationSettingsHandler)

export default app
