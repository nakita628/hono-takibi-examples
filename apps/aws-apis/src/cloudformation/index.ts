import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ActionActivateOrganizationsAccessHandler,
  ActionActivateTypeHandler,
  ActionBatchDescribeTypeConfigurationsHandler,
  ActionCancelUpdateStackHandler,
  ActionContinueUpdateRollbackHandler,
  ActionCreateChangeSetHandler,
  ActionCreateStackHandler,
  ActionCreateStackInstancesHandler,
  ActionCreateStackSetHandler,
  ActionDeactivateOrganizationsAccessHandler,
  ActionDeactivateTypeHandler,
  ActionDeleteChangeSetHandler,
  ActionDeleteStackHandler,
  ActionDeleteStackInstancesHandler,
  ActionDeleteStackSetHandler,
  ActionDeregisterTypeHandler,
  ActionDescribeAccountLimitsHandler,
  ActionDescribeChangeSetHandler,
  ActionDescribeChangeSetHooksHandler,
  ActionDescribeOrganizationsAccessHandler,
  ActionDescribePublisherHandler,
  ActionDescribeStackDriftDetectionStatusHandler,
  ActionDescribeStackEventsHandler,
  ActionDescribeStackInstanceHandler,
  ActionDescribeStackResourceDriftsHandler,
  ActionDescribeStackResourceHandler,
  ActionDescribeStackResourcesHandler,
  ActionDescribeStackSetHandler,
  ActionDescribeStackSetOperationHandler,
  ActionDescribeStacksHandler,
  ActionDescribeTypeHandler,
  ActionDescribeTypeRegistrationHandler,
  ActionDetectStackDriftHandler,
  ActionDetectStackResourceDriftHandler,
  ActionDetectStackSetDriftHandler,
  ActionEstimateTemplateCostHandler,
  ActionExecuteChangeSetHandler,
  ActionGetStackPolicyHandler,
  ActionGetTemplateHandler,
  ActionGetTemplateSummaryHandler,
  ActionImportStacksToStackSetHandler,
  ActionListChangeSetsHandler,
  ActionListExportsHandler,
  ActionListImportsHandler,
  ActionListStackInstanceResourceDriftsHandler,
  ActionListStackInstancesHandler,
  ActionListStackResourcesHandler,
  ActionListStackSetOperationResultsHandler,
  ActionListStackSetOperationsHandler,
  ActionListStackSetsHandler,
  ActionListStacksHandler,
  ActionListTypeRegistrationsHandler,
  ActionListTypesHandler,
  ActionListTypeVersionsHandler,
  ActionPublishTypeHandler,
  ActionRecordHandlerProgressHandler,
  ActionRegisterPublisherHandler,
  ActionRegisterTypeHandler,
  ActionRollbackStackHandler,
  ActionSetStackPolicyHandler,
  ActionSetTypeConfigurationHandler,
  ActionSetTypeDefaultVersionHandler,
  ActionSignalResourceHandler,
  ActionStopStackSetOperationHandler,
  ActionTestTypeHandler,
  ActionUpdateStackHandler,
  ActionUpdateStackInstancesHandler,
  ActionUpdateStackSetHandler,
  ActionUpdateTerminationProtectionHandler,
  ActionValidateTemplateHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ActionActivateOrganizationsAccessHandler)
  .route('/', ActionActivateTypeHandler)
  .route('/', ActionBatchDescribeTypeConfigurationsHandler)
  .route('/', ActionCancelUpdateStackHandler)
  .route('/', ActionContinueUpdateRollbackHandler)
  .route('/', ActionCreateChangeSetHandler)
  .route('/', ActionCreateStackHandler)
  .route('/', ActionCreateStackInstancesHandler)
  .route('/', ActionCreateStackSetHandler)
  .route('/', ActionDeactivateOrganizationsAccessHandler)
  .route('/', ActionDeactivateTypeHandler)
  .route('/', ActionDeleteChangeSetHandler)
  .route('/', ActionDeleteStackHandler)
  .route('/', ActionDeleteStackInstancesHandler)
  .route('/', ActionDeleteStackSetHandler)
  .route('/', ActionDeregisterTypeHandler)
  .route('/', ActionDescribeAccountLimitsHandler)
  .route('/', ActionDescribeChangeSetHandler)
  .route('/', ActionDescribeChangeSetHooksHandler)
  .route('/', ActionDescribeOrganizationsAccessHandler)
  .route('/', ActionDescribePublisherHandler)
  .route('/', ActionDescribeStackDriftDetectionStatusHandler)
  .route('/', ActionDescribeStackEventsHandler)
  .route('/', ActionDescribeStackInstanceHandler)
  .route('/', ActionDescribeStackResourceHandler)
  .route('/', ActionDescribeStackResourceDriftsHandler)
  .route('/', ActionDescribeStackResourcesHandler)
  .route('/', ActionDescribeStackSetHandler)
  .route('/', ActionDescribeStackSetOperationHandler)
  .route('/', ActionDescribeStacksHandler)
  .route('/', ActionDescribeTypeHandler)
  .route('/', ActionDescribeTypeRegistrationHandler)
  .route('/', ActionDetectStackDriftHandler)
  .route('/', ActionDetectStackResourceDriftHandler)
  .route('/', ActionDetectStackSetDriftHandler)
  .route('/', ActionEstimateTemplateCostHandler)
  .route('/', ActionExecuteChangeSetHandler)
  .route('/', ActionGetStackPolicyHandler)
  .route('/', ActionGetTemplateHandler)
  .route('/', ActionGetTemplateSummaryHandler)
  .route('/', ActionImportStacksToStackSetHandler)
  .route('/', ActionListChangeSetsHandler)
  .route('/', ActionListExportsHandler)
  .route('/', ActionListImportsHandler)
  .route('/', ActionListStackInstanceResourceDriftsHandler)
  .route('/', ActionListStackInstancesHandler)
  .route('/', ActionListStackResourcesHandler)
  .route('/', ActionListStackSetOperationResultsHandler)
  .route('/', ActionListStackSetOperationsHandler)
  .route('/', ActionListStackSetsHandler)
  .route('/', ActionListStacksHandler)
  .route('/', ActionListTypeRegistrationsHandler)
  .route('/', ActionListTypeVersionsHandler)
  .route('/', ActionListTypesHandler)
  .route('/', ActionPublishTypeHandler)
  .route('/', ActionRecordHandlerProgressHandler)
  .route('/', ActionRegisterPublisherHandler)
  .route('/', ActionRegisterTypeHandler)
  .route('/', ActionRollbackStackHandler)
  .route('/', ActionSetStackPolicyHandler)
  .route('/', ActionSetTypeConfigurationHandler)
  .route('/', ActionSetTypeDefaultVersionHandler)
  .route('/', ActionSignalResourceHandler)
  .route('/', ActionStopStackSetOperationHandler)
  .route('/', ActionTestTypeHandler)
  .route('/', ActionUpdateStackHandler)
  .route('/', ActionUpdateStackInstancesHandler)
  .route('/', ActionUpdateStackSetHandler)
  .route('/', ActionUpdateTerminationProtectionHandler)
  .route('/', ActionValidateTemplateHandler)

export default app
