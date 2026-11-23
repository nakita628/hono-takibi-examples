import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionActivateOrganizationsAccessHandler,
  actionActivateTypeHandler,
  actionBatchDescribeTypeConfigurationsHandler,
  actionCancelUpdateStackHandler,
  actionContinueUpdateRollbackHandler,
  actionCreateChangeSetHandler,
  actionCreateStackHandler,
  actionCreateStackInstancesHandler,
  actionCreateStackSetHandler,
  actionDeactivateOrganizationsAccessHandler,
  actionDeactivateTypeHandler,
  actionDeleteChangeSetHandler,
  actionDeleteStackHandler,
  actionDeleteStackInstancesHandler,
  actionDeleteStackSetHandler,
  actionDeregisterTypeHandler,
  actionDescribeAccountLimitsHandler,
  actionDescribeChangeSetHandler,
  actionDescribeChangeSetHooksHandler,
  actionDescribeOrganizationsAccessHandler,
  actionDescribePublisherHandler,
  actionDescribeStackDriftDetectionStatusHandler,
  actionDescribeStackEventsHandler,
  actionDescribeStackInstanceHandler,
  actionDescribeStackResourceDriftsHandler,
  actionDescribeStackResourceHandler,
  actionDescribeStackResourcesHandler,
  actionDescribeStackSetHandler,
  actionDescribeStackSetOperationHandler,
  actionDescribeStacksHandler,
  actionDescribeTypeHandler,
  actionDescribeTypeRegistrationHandler,
  actionDetectStackDriftHandler,
  actionDetectStackResourceDriftHandler,
  actionDetectStackSetDriftHandler,
  actionEstimateTemplateCostHandler,
  actionExecuteChangeSetHandler,
  actionGetStackPolicyHandler,
  actionGetTemplateHandler,
  actionGetTemplateSummaryHandler,
  actionImportStacksToStackSetHandler,
  actionListChangeSetsHandler,
  actionListExportsHandler,
  actionListImportsHandler,
  actionListStackInstanceResourceDriftsHandler,
  actionListStackInstancesHandler,
  actionListStackResourcesHandler,
  actionListStackSetOperationResultsHandler,
  actionListStackSetOperationsHandler,
  actionListStackSetsHandler,
  actionListStacksHandler,
  actionListTypeRegistrationsHandler,
  actionListTypesHandler,
  actionListTypeVersionsHandler,
  actionPublishTypeHandler,
  actionRecordHandlerProgressHandler,
  actionRegisterPublisherHandler,
  actionRegisterTypeHandler,
  actionRollbackStackHandler,
  actionSetStackPolicyHandler,
  actionSetTypeConfigurationHandler,
  actionSetTypeDefaultVersionHandler,
  actionSignalResourceHandler,
  actionStopStackSetOperationHandler,
  actionTestTypeHandler,
  actionUpdateStackHandler,
  actionUpdateStackInstancesHandler,
  actionUpdateStackSetHandler,
  actionUpdateTerminationProtectionHandler,
  actionValidateTemplateHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionActivateOrganizationsAccessHandler)
  .route('/', actionActivateTypeHandler)
  .route('/', actionBatchDescribeTypeConfigurationsHandler)
  .route('/', actionCancelUpdateStackHandler)
  .route('/', actionContinueUpdateRollbackHandler)
  .route('/', actionCreateChangeSetHandler)
  .route('/', actionCreateStackHandler)
  .route('/', actionCreateStackInstancesHandler)
  .route('/', actionCreateStackSetHandler)
  .route('/', actionDeactivateOrganizationsAccessHandler)
  .route('/', actionDeactivateTypeHandler)
  .route('/', actionDeleteChangeSetHandler)
  .route('/', actionDeleteStackHandler)
  .route('/', actionDeleteStackInstancesHandler)
  .route('/', actionDeleteStackSetHandler)
  .route('/', actionDeregisterTypeHandler)
  .route('/', actionDescribeAccountLimitsHandler)
  .route('/', actionDescribeChangeSetHandler)
  .route('/', actionDescribeChangeSetHooksHandler)
  .route('/', actionDescribeOrganizationsAccessHandler)
  .route('/', actionDescribePublisherHandler)
  .route('/', actionDescribeStackDriftDetectionStatusHandler)
  .route('/', actionDescribeStackEventsHandler)
  .route('/', actionDescribeStackInstanceHandler)
  .route('/', actionDescribeStackResourceHandler)
  .route('/', actionDescribeStackResourceDriftsHandler)
  .route('/', actionDescribeStackResourcesHandler)
  .route('/', actionDescribeStackSetHandler)
  .route('/', actionDescribeStackSetOperationHandler)
  .route('/', actionDescribeStacksHandler)
  .route('/', actionDescribeTypeHandler)
  .route('/', actionDescribeTypeRegistrationHandler)
  .route('/', actionDetectStackDriftHandler)
  .route('/', actionDetectStackResourceDriftHandler)
  .route('/', actionDetectStackSetDriftHandler)
  .route('/', actionEstimateTemplateCostHandler)
  .route('/', actionExecuteChangeSetHandler)
  .route('/', actionGetStackPolicyHandler)
  .route('/', actionGetTemplateHandler)
  .route('/', actionGetTemplateSummaryHandler)
  .route('/', actionImportStacksToStackSetHandler)
  .route('/', actionListChangeSetsHandler)
  .route('/', actionListExportsHandler)
  .route('/', actionListImportsHandler)
  .route('/', actionListStackInstanceResourceDriftsHandler)
  .route('/', actionListStackInstancesHandler)
  .route('/', actionListStackResourcesHandler)
  .route('/', actionListStackSetOperationResultsHandler)
  .route('/', actionListStackSetOperationsHandler)
  .route('/', actionListStackSetsHandler)
  .route('/', actionListStacksHandler)
  .route('/', actionListTypeRegistrationsHandler)
  .route('/', actionListTypeVersionsHandler)
  .route('/', actionListTypesHandler)
  .route('/', actionPublishTypeHandler)
  .route('/', actionRecordHandlerProgressHandler)
  .route('/', actionRegisterPublisherHandler)
  .route('/', actionRegisterTypeHandler)
  .route('/', actionRollbackStackHandler)
  .route('/', actionSetStackPolicyHandler)
  .route('/', actionSetTypeConfigurationHandler)
  .route('/', actionSetTypeDefaultVersionHandler)
  .route('/', actionSignalResourceHandler)
  .route('/', actionStopStackSetOperationHandler)
  .route('/', actionTestTypeHandler)
  .route('/', actionUpdateStackHandler)
  .route('/', actionUpdateStackInstancesHandler)
  .route('/', actionUpdateStackSetHandler)
  .route('/', actionUpdateTerminationProtectionHandler)
  .route('/', actionValidateTemplateHandler)

export default app
