import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAbortEnvironmentUpdateRoute,
  getActionApplyEnvironmentManagedActionRoute,
  getActionAssociateEnvironmentOperationsRoleRoute,
  getActionCheckDNSAvailabilityRoute,
  getActionComposeEnvironmentsRoute,
  getActionCreateApplicationRoute,
  getActionCreateApplicationVersionRoute,
  getActionCreateConfigurationTemplateRoute,
  getActionCreateEnvironmentRoute,
  getActionCreatePlatformVersionRoute,
  getActionCreateStorageLocationRoute,
  getActionDeleteApplicationRoute,
  getActionDeleteApplicationVersionRoute,
  getActionDeleteConfigurationTemplateRoute,
  getActionDeleteEnvironmentConfigurationRoute,
  getActionDeletePlatformVersionRoute,
  getActionDescribeAccountAttributesRoute,
  getActionDescribeApplicationsRoute,
  getActionDescribeApplicationVersionsRoute,
  getActionDescribeConfigurationOptionsRoute,
  getActionDescribeConfigurationSettingsRoute,
  getActionDescribeEnvironmentHealthRoute,
  getActionDescribeEnvironmentManagedActionHistoryRoute,
  getActionDescribeEnvironmentManagedActionsRoute,
  getActionDescribeEnvironmentResourcesRoute,
  getActionDescribeEnvironmentsRoute,
  getActionDescribeEventsRoute,
  getActionDescribeInstancesHealthRoute,
  getActionDescribePlatformVersionRoute,
  getActionDisassociateEnvironmentOperationsRoleRoute,
  getActionListAvailableSolutionStacksRoute,
  getActionListPlatformBranchesRoute,
  getActionListPlatformVersionsRoute,
  getActionListTagsForResourceRoute,
  getActionRebuildEnvironmentRoute,
  getActionRequestEnvironmentInfoRoute,
  getActionRestartAppServerRoute,
  getActionRetrieveEnvironmentInfoRoute,
  getActionSwapEnvironmentCNAMEsRoute,
  getActionTerminateEnvironmentRoute,
  getActionUpdateApplicationResourceLifecycleRoute,
  getActionUpdateApplicationRoute,
  getActionUpdateApplicationVersionRoute,
  getActionUpdateConfigurationTemplateRoute,
  getActionUpdateEnvironmentRoute,
  getActionUpdateTagsForResourceRoute,
  getActionValidateConfigurationSettingsRoute,
  postActionAbortEnvironmentUpdateRoute,
  postActionApplyEnvironmentManagedActionRoute,
  postActionAssociateEnvironmentOperationsRoleRoute,
  postActionCheckDNSAvailabilityRoute,
  postActionComposeEnvironmentsRoute,
  postActionCreateApplicationRoute,
  postActionCreateApplicationVersionRoute,
  postActionCreateConfigurationTemplateRoute,
  postActionCreateEnvironmentRoute,
  postActionCreatePlatformVersionRoute,
  postActionCreateStorageLocationRoute,
  postActionDeleteApplicationRoute,
  postActionDeleteApplicationVersionRoute,
  postActionDeleteConfigurationTemplateRoute,
  postActionDeleteEnvironmentConfigurationRoute,
  postActionDeletePlatformVersionRoute,
  postActionDescribeAccountAttributesRoute,
  postActionDescribeApplicationsRoute,
  postActionDescribeApplicationVersionsRoute,
  postActionDescribeConfigurationOptionsRoute,
  postActionDescribeConfigurationSettingsRoute,
  postActionDescribeEnvironmentHealthRoute,
  postActionDescribeEnvironmentManagedActionHistoryRoute,
  postActionDescribeEnvironmentManagedActionsRoute,
  postActionDescribeEnvironmentResourcesRoute,
  postActionDescribeEnvironmentsRoute,
  postActionDescribeEventsRoute,
  postActionDescribeInstancesHealthRoute,
  postActionDescribePlatformVersionRoute,
  postActionDisassociateEnvironmentOperationsRoleRoute,
  postActionListAvailableSolutionStacksRoute,
  postActionListPlatformBranchesRoute,
  postActionListPlatformVersionsRoute,
  postActionListTagsForResourceRoute,
  postActionRebuildEnvironmentRoute,
  postActionRequestEnvironmentInfoRoute,
  postActionRestartAppServerRoute,
  postActionRetrieveEnvironmentInfoRoute,
  postActionSwapEnvironmentCNAMEsRoute,
  postActionTerminateEnvironmentRoute,
  postActionUpdateApplicationResourceLifecycleRoute,
  postActionUpdateApplicationRoute,
  postActionUpdateApplicationVersionRoute,
  postActionUpdateConfigurationTemplateRoute,
  postActionUpdateEnvironmentRoute,
  postActionUpdateTagsForResourceRoute,
  postActionValidateConfigurationSettingsRoute,
} from './routes'
import {
  getActionAbortEnvironmentUpdateRouteHandler,
  getActionApplyEnvironmentManagedActionRouteHandler,
  getActionAssociateEnvironmentOperationsRoleRouteHandler,
  getActionCheckDNSAvailabilityRouteHandler,
  getActionComposeEnvironmentsRouteHandler,
  getActionCreateApplicationRouteHandler,
  getActionCreateApplicationVersionRouteHandler,
  getActionCreateConfigurationTemplateRouteHandler,
  getActionCreateEnvironmentRouteHandler,
  getActionCreatePlatformVersionRouteHandler,
  getActionCreateStorageLocationRouteHandler,
  getActionDeleteApplicationRouteHandler,
  getActionDeleteApplicationVersionRouteHandler,
  getActionDeleteConfigurationTemplateRouteHandler,
  getActionDeleteEnvironmentConfigurationRouteHandler,
  getActionDeletePlatformVersionRouteHandler,
  getActionDescribeAccountAttributesRouteHandler,
  getActionDescribeApplicationsRouteHandler,
  getActionDescribeApplicationVersionsRouteHandler,
  getActionDescribeConfigurationOptionsRouteHandler,
  getActionDescribeConfigurationSettingsRouteHandler,
  getActionDescribeEnvironmentHealthRouteHandler,
  getActionDescribeEnvironmentManagedActionHistoryRouteHandler,
  getActionDescribeEnvironmentManagedActionsRouteHandler,
  getActionDescribeEnvironmentResourcesRouteHandler,
  getActionDescribeEnvironmentsRouteHandler,
  getActionDescribeEventsRouteHandler,
  getActionDescribeInstancesHealthRouteHandler,
  getActionDescribePlatformVersionRouteHandler,
  getActionDisassociateEnvironmentOperationsRoleRouteHandler,
  getActionListAvailableSolutionStacksRouteHandler,
  getActionListPlatformBranchesRouteHandler,
  getActionListPlatformVersionsRouteHandler,
  getActionListTagsForResourceRouteHandler,
  getActionRebuildEnvironmentRouteHandler,
  getActionRequestEnvironmentInfoRouteHandler,
  getActionRestartAppServerRouteHandler,
  getActionRetrieveEnvironmentInfoRouteHandler,
  getActionSwapEnvironmentCNAMEsRouteHandler,
  getActionTerminateEnvironmentRouteHandler,
  getActionUpdateApplicationResourceLifecycleRouteHandler,
  getActionUpdateApplicationRouteHandler,
  getActionUpdateApplicationVersionRouteHandler,
  getActionUpdateConfigurationTemplateRouteHandler,
  getActionUpdateEnvironmentRouteHandler,
  getActionUpdateTagsForResourceRouteHandler,
  getActionValidateConfigurationSettingsRouteHandler,
  postActionAbortEnvironmentUpdateRouteHandler,
  postActionApplyEnvironmentManagedActionRouteHandler,
  postActionAssociateEnvironmentOperationsRoleRouteHandler,
  postActionCheckDNSAvailabilityRouteHandler,
  postActionComposeEnvironmentsRouteHandler,
  postActionCreateApplicationRouteHandler,
  postActionCreateApplicationVersionRouteHandler,
  postActionCreateConfigurationTemplateRouteHandler,
  postActionCreateEnvironmentRouteHandler,
  postActionCreatePlatformVersionRouteHandler,
  postActionCreateStorageLocationRouteHandler,
  postActionDeleteApplicationRouteHandler,
  postActionDeleteApplicationVersionRouteHandler,
  postActionDeleteConfigurationTemplateRouteHandler,
  postActionDeleteEnvironmentConfigurationRouteHandler,
  postActionDeletePlatformVersionRouteHandler,
  postActionDescribeAccountAttributesRouteHandler,
  postActionDescribeApplicationsRouteHandler,
  postActionDescribeApplicationVersionsRouteHandler,
  postActionDescribeConfigurationOptionsRouteHandler,
  postActionDescribeConfigurationSettingsRouteHandler,
  postActionDescribeEnvironmentHealthRouteHandler,
  postActionDescribeEnvironmentManagedActionHistoryRouteHandler,
  postActionDescribeEnvironmentManagedActionsRouteHandler,
  postActionDescribeEnvironmentResourcesRouteHandler,
  postActionDescribeEnvironmentsRouteHandler,
  postActionDescribeEventsRouteHandler,
  postActionDescribeInstancesHealthRouteHandler,
  postActionDescribePlatformVersionRouteHandler,
  postActionDisassociateEnvironmentOperationsRoleRouteHandler,
  postActionListAvailableSolutionStacksRouteHandler,
  postActionListPlatformBranchesRouteHandler,
  postActionListPlatformVersionsRouteHandler,
  postActionListTagsForResourceRouteHandler,
  postActionRebuildEnvironmentRouteHandler,
  postActionRequestEnvironmentInfoRouteHandler,
  postActionRestartAppServerRouteHandler,
  postActionRetrieveEnvironmentInfoRouteHandler,
  postActionSwapEnvironmentCNAMEsRouteHandler,
  postActionTerminateEnvironmentRouteHandler,
  postActionUpdateApplicationResourceLifecycleRouteHandler,
  postActionUpdateApplicationRouteHandler,
  postActionUpdateApplicationVersionRouteHandler,
  postActionUpdateConfigurationTemplateRouteHandler,
  postActionUpdateEnvironmentRouteHandler,
  postActionUpdateTagsForResourceRouteHandler,
  postActionValidateConfigurationSettingsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActionAbortEnvironmentUpdateRoute, getActionAbortEnvironmentUpdateRouteHandler)
  .openapi(postActionAbortEnvironmentUpdateRoute, postActionAbortEnvironmentUpdateRouteHandler)
  .openapi(
    getActionApplyEnvironmentManagedActionRoute,
    getActionApplyEnvironmentManagedActionRouteHandler,
  )
  .openapi(
    postActionApplyEnvironmentManagedActionRoute,
    postActionApplyEnvironmentManagedActionRouteHandler,
  )
  .openapi(
    getActionAssociateEnvironmentOperationsRoleRoute,
    getActionAssociateEnvironmentOperationsRoleRouteHandler,
  )
  .openapi(
    postActionAssociateEnvironmentOperationsRoleRoute,
    postActionAssociateEnvironmentOperationsRoleRouteHandler,
  )
  .openapi(getActionCheckDNSAvailabilityRoute, getActionCheckDNSAvailabilityRouteHandler)
  .openapi(postActionCheckDNSAvailabilityRoute, postActionCheckDNSAvailabilityRouteHandler)
  .openapi(getActionComposeEnvironmentsRoute, getActionComposeEnvironmentsRouteHandler)
  .openapi(postActionComposeEnvironmentsRoute, postActionComposeEnvironmentsRouteHandler)
  .openapi(getActionCreateApplicationRoute, getActionCreateApplicationRouteHandler)
  .openapi(postActionCreateApplicationRoute, postActionCreateApplicationRouteHandler)
  .openapi(getActionCreateApplicationVersionRoute, getActionCreateApplicationVersionRouteHandler)
  .openapi(postActionCreateApplicationVersionRoute, postActionCreateApplicationVersionRouteHandler)
  .openapi(
    getActionCreateConfigurationTemplateRoute,
    getActionCreateConfigurationTemplateRouteHandler,
  )
  .openapi(
    postActionCreateConfigurationTemplateRoute,
    postActionCreateConfigurationTemplateRouteHandler,
  )
  .openapi(getActionCreateEnvironmentRoute, getActionCreateEnvironmentRouteHandler)
  .openapi(postActionCreateEnvironmentRoute, postActionCreateEnvironmentRouteHandler)
  .openapi(getActionCreatePlatformVersionRoute, getActionCreatePlatformVersionRouteHandler)
  .openapi(postActionCreatePlatformVersionRoute, postActionCreatePlatformVersionRouteHandler)
  .openapi(getActionCreateStorageLocationRoute, getActionCreateStorageLocationRouteHandler)
  .openapi(postActionCreateStorageLocationRoute, postActionCreateStorageLocationRouteHandler)
  .openapi(getActionDeleteApplicationRoute, getActionDeleteApplicationRouteHandler)
  .openapi(postActionDeleteApplicationRoute, postActionDeleteApplicationRouteHandler)
  .openapi(getActionDeleteApplicationVersionRoute, getActionDeleteApplicationVersionRouteHandler)
  .openapi(postActionDeleteApplicationVersionRoute, postActionDeleteApplicationVersionRouteHandler)
  .openapi(
    getActionDeleteConfigurationTemplateRoute,
    getActionDeleteConfigurationTemplateRouteHandler,
  )
  .openapi(
    postActionDeleteConfigurationTemplateRoute,
    postActionDeleteConfigurationTemplateRouteHandler,
  )
  .openapi(
    getActionDeleteEnvironmentConfigurationRoute,
    getActionDeleteEnvironmentConfigurationRouteHandler,
  )
  .openapi(
    postActionDeleteEnvironmentConfigurationRoute,
    postActionDeleteEnvironmentConfigurationRouteHandler,
  )
  .openapi(getActionDeletePlatformVersionRoute, getActionDeletePlatformVersionRouteHandler)
  .openapi(postActionDeletePlatformVersionRoute, postActionDeletePlatformVersionRouteHandler)
  .openapi(getActionDescribeAccountAttributesRoute, getActionDescribeAccountAttributesRouteHandler)
  .openapi(
    postActionDescribeAccountAttributesRoute,
    postActionDescribeAccountAttributesRouteHandler,
  )
  .openapi(
    getActionDescribeApplicationVersionsRoute,
    getActionDescribeApplicationVersionsRouteHandler,
  )
  .openapi(
    postActionDescribeApplicationVersionsRoute,
    postActionDescribeApplicationVersionsRouteHandler,
  )
  .openapi(getActionDescribeApplicationsRoute, getActionDescribeApplicationsRouteHandler)
  .openapi(postActionDescribeApplicationsRoute, postActionDescribeApplicationsRouteHandler)
  .openapi(
    getActionDescribeConfigurationOptionsRoute,
    getActionDescribeConfigurationOptionsRouteHandler,
  )
  .openapi(
    postActionDescribeConfigurationOptionsRoute,
    postActionDescribeConfigurationOptionsRouteHandler,
  )
  .openapi(
    getActionDescribeConfigurationSettingsRoute,
    getActionDescribeConfigurationSettingsRouteHandler,
  )
  .openapi(
    postActionDescribeConfigurationSettingsRoute,
    postActionDescribeConfigurationSettingsRouteHandler,
  )
  .openapi(getActionDescribeEnvironmentHealthRoute, getActionDescribeEnvironmentHealthRouteHandler)
  .openapi(
    postActionDescribeEnvironmentHealthRoute,
    postActionDescribeEnvironmentHealthRouteHandler,
  )
  .openapi(
    getActionDescribeEnvironmentManagedActionHistoryRoute,
    getActionDescribeEnvironmentManagedActionHistoryRouteHandler,
  )
  .openapi(
    postActionDescribeEnvironmentManagedActionHistoryRoute,
    postActionDescribeEnvironmentManagedActionHistoryRouteHandler,
  )
  .openapi(
    getActionDescribeEnvironmentManagedActionsRoute,
    getActionDescribeEnvironmentManagedActionsRouteHandler,
  )
  .openapi(
    postActionDescribeEnvironmentManagedActionsRoute,
    postActionDescribeEnvironmentManagedActionsRouteHandler,
  )
  .openapi(
    getActionDescribeEnvironmentResourcesRoute,
    getActionDescribeEnvironmentResourcesRouteHandler,
  )
  .openapi(
    postActionDescribeEnvironmentResourcesRoute,
    postActionDescribeEnvironmentResourcesRouteHandler,
  )
  .openapi(getActionDescribeEnvironmentsRoute, getActionDescribeEnvironmentsRouteHandler)
  .openapi(postActionDescribeEnvironmentsRoute, postActionDescribeEnvironmentsRouteHandler)
  .openapi(getActionDescribeEventsRoute, getActionDescribeEventsRouteHandler)
  .openapi(postActionDescribeEventsRoute, postActionDescribeEventsRouteHandler)
  .openapi(getActionDescribeInstancesHealthRoute, getActionDescribeInstancesHealthRouteHandler)
  .openapi(postActionDescribeInstancesHealthRoute, postActionDescribeInstancesHealthRouteHandler)
  .openapi(getActionDescribePlatformVersionRoute, getActionDescribePlatformVersionRouteHandler)
  .openapi(postActionDescribePlatformVersionRoute, postActionDescribePlatformVersionRouteHandler)
  .openapi(
    getActionDisassociateEnvironmentOperationsRoleRoute,
    getActionDisassociateEnvironmentOperationsRoleRouteHandler,
  )
  .openapi(
    postActionDisassociateEnvironmentOperationsRoleRoute,
    postActionDisassociateEnvironmentOperationsRoleRouteHandler,
  )
  .openapi(
    getActionListAvailableSolutionStacksRoute,
    getActionListAvailableSolutionStacksRouteHandler,
  )
  .openapi(
    postActionListAvailableSolutionStacksRoute,
    postActionListAvailableSolutionStacksRouteHandler,
  )
  .openapi(getActionListPlatformBranchesRoute, getActionListPlatformBranchesRouteHandler)
  .openapi(postActionListPlatformBranchesRoute, postActionListPlatformBranchesRouteHandler)
  .openapi(getActionListPlatformVersionsRoute, getActionListPlatformVersionsRouteHandler)
  .openapi(postActionListPlatformVersionsRoute, postActionListPlatformVersionsRouteHandler)
  .openapi(getActionListTagsForResourceRoute, getActionListTagsForResourceRouteHandler)
  .openapi(postActionListTagsForResourceRoute, postActionListTagsForResourceRouteHandler)
  .openapi(getActionRebuildEnvironmentRoute, getActionRebuildEnvironmentRouteHandler)
  .openapi(postActionRebuildEnvironmentRoute, postActionRebuildEnvironmentRouteHandler)
  .openapi(getActionRequestEnvironmentInfoRoute, getActionRequestEnvironmentInfoRouteHandler)
  .openapi(postActionRequestEnvironmentInfoRoute, postActionRequestEnvironmentInfoRouteHandler)
  .openapi(getActionRestartAppServerRoute, getActionRestartAppServerRouteHandler)
  .openapi(postActionRestartAppServerRoute, postActionRestartAppServerRouteHandler)
  .openapi(getActionRetrieveEnvironmentInfoRoute, getActionRetrieveEnvironmentInfoRouteHandler)
  .openapi(postActionRetrieveEnvironmentInfoRoute, postActionRetrieveEnvironmentInfoRouteHandler)
  .openapi(getActionSwapEnvironmentCNAMEsRoute, getActionSwapEnvironmentCNAMEsRouteHandler)
  .openapi(postActionSwapEnvironmentCNAMEsRoute, postActionSwapEnvironmentCNAMEsRouteHandler)
  .openapi(getActionTerminateEnvironmentRoute, getActionTerminateEnvironmentRouteHandler)
  .openapi(postActionTerminateEnvironmentRoute, postActionTerminateEnvironmentRouteHandler)
  .openapi(getActionUpdateApplicationRoute, getActionUpdateApplicationRouteHandler)
  .openapi(postActionUpdateApplicationRoute, postActionUpdateApplicationRouteHandler)
  .openapi(
    getActionUpdateApplicationResourceLifecycleRoute,
    getActionUpdateApplicationResourceLifecycleRouteHandler,
  )
  .openapi(
    postActionUpdateApplicationResourceLifecycleRoute,
    postActionUpdateApplicationResourceLifecycleRouteHandler,
  )
  .openapi(getActionUpdateApplicationVersionRoute, getActionUpdateApplicationVersionRouteHandler)
  .openapi(postActionUpdateApplicationVersionRoute, postActionUpdateApplicationVersionRouteHandler)
  .openapi(
    getActionUpdateConfigurationTemplateRoute,
    getActionUpdateConfigurationTemplateRouteHandler,
  )
  .openapi(
    postActionUpdateConfigurationTemplateRoute,
    postActionUpdateConfigurationTemplateRouteHandler,
  )
  .openapi(getActionUpdateEnvironmentRoute, getActionUpdateEnvironmentRouteHandler)
  .openapi(postActionUpdateEnvironmentRoute, postActionUpdateEnvironmentRouteHandler)
  .openapi(getActionUpdateTagsForResourceRoute, getActionUpdateTagsForResourceRouteHandler)
  .openapi(postActionUpdateTagsForResourceRoute, postActionUpdateTagsForResourceRouteHandler)
  .openapi(
    getActionValidateConfigurationSettingsRoute,
    getActionValidateConfigurationSettingsRouteHandler,
  )
  .openapi(
    postActionValidateConfigurationSettingsRoute,
    postActionValidateConfigurationSettingsRouteHandler,
  )

export default app
