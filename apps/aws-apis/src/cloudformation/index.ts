import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionActivateOrganizationsAccessRoute,
  getActionActivateTypeRoute,
  getActionBatchDescribeTypeConfigurationsRoute,
  getActionCancelUpdateStackRoute,
  getActionContinueUpdateRollbackRoute,
  getActionCreateChangeSetRoute,
  getActionCreateStackInstancesRoute,
  getActionCreateStackRoute,
  getActionCreateStackSetRoute,
  getActionDeactivateOrganizationsAccessRoute,
  getActionDeactivateTypeRoute,
  getActionDeleteChangeSetRoute,
  getActionDeleteStackInstancesRoute,
  getActionDeleteStackRoute,
  getActionDeleteStackSetRoute,
  getActionDeregisterTypeRoute,
  getActionDescribeAccountLimitsRoute,
  getActionDescribeChangeSetHooksRoute,
  getActionDescribeChangeSetRoute,
  getActionDescribeOrganizationsAccessRoute,
  getActionDescribePublisherRoute,
  getActionDescribeStackDriftDetectionStatusRoute,
  getActionDescribeStackEventsRoute,
  getActionDescribeStackInstanceRoute,
  getActionDescribeStackResourceDriftsRoute,
  getActionDescribeStackResourceRoute,
  getActionDescribeStackResourcesRoute,
  getActionDescribeStackSetOperationRoute,
  getActionDescribeStackSetRoute,
  getActionDescribeStacksRoute,
  getActionDescribeTypeRegistrationRoute,
  getActionDescribeTypeRoute,
  getActionDetectStackDriftRoute,
  getActionDetectStackResourceDriftRoute,
  getActionDetectStackSetDriftRoute,
  getActionEstimateTemplateCostRoute,
  getActionExecuteChangeSetRoute,
  getActionGetStackPolicyRoute,
  getActionGetTemplateRoute,
  getActionGetTemplateSummaryRoute,
  getActionImportStacksToStackSetRoute,
  getActionListChangeSetsRoute,
  getActionListExportsRoute,
  getActionListImportsRoute,
  getActionListStackInstanceResourceDriftsRoute,
  getActionListStackInstancesRoute,
  getActionListStackResourcesRoute,
  getActionListStackSetOperationResultsRoute,
  getActionListStackSetOperationsRoute,
  getActionListStackSetsRoute,
  getActionListStacksRoute,
  getActionListTypeRegistrationsRoute,
  getActionListTypesRoute,
  getActionListTypeVersionsRoute,
  getActionPublishTypeRoute,
  getActionRecordHandlerProgressRoute,
  getActionRegisterPublisherRoute,
  getActionRegisterTypeRoute,
  getActionRollbackStackRoute,
  getActionSetStackPolicyRoute,
  getActionSetTypeConfigurationRoute,
  getActionSetTypeDefaultVersionRoute,
  getActionSignalResourceRoute,
  getActionStopStackSetOperationRoute,
  getActionTestTypeRoute,
  getActionUpdateStackInstancesRoute,
  getActionUpdateStackRoute,
  getActionUpdateStackSetRoute,
  getActionUpdateTerminationProtectionRoute,
  getActionValidateTemplateRoute,
  postActionActivateOrganizationsAccessRoute,
  postActionActivateTypeRoute,
  postActionBatchDescribeTypeConfigurationsRoute,
  postActionCancelUpdateStackRoute,
  postActionContinueUpdateRollbackRoute,
  postActionCreateChangeSetRoute,
  postActionCreateStackInstancesRoute,
  postActionCreateStackRoute,
  postActionCreateStackSetRoute,
  postActionDeactivateOrganizationsAccessRoute,
  postActionDeactivateTypeRoute,
  postActionDeleteChangeSetRoute,
  postActionDeleteStackInstancesRoute,
  postActionDeleteStackRoute,
  postActionDeleteStackSetRoute,
  postActionDeregisterTypeRoute,
  postActionDescribeAccountLimitsRoute,
  postActionDescribeChangeSetHooksRoute,
  postActionDescribeChangeSetRoute,
  postActionDescribeOrganizationsAccessRoute,
  postActionDescribePublisherRoute,
  postActionDescribeStackDriftDetectionStatusRoute,
  postActionDescribeStackEventsRoute,
  postActionDescribeStackInstanceRoute,
  postActionDescribeStackResourceDriftsRoute,
  postActionDescribeStackResourceRoute,
  postActionDescribeStackResourcesRoute,
  postActionDescribeStackSetOperationRoute,
  postActionDescribeStackSetRoute,
  postActionDescribeStacksRoute,
  postActionDescribeTypeRegistrationRoute,
  postActionDescribeTypeRoute,
  postActionDetectStackDriftRoute,
  postActionDetectStackResourceDriftRoute,
  postActionDetectStackSetDriftRoute,
  postActionEstimateTemplateCostRoute,
  postActionExecuteChangeSetRoute,
  postActionGetStackPolicyRoute,
  postActionGetTemplateRoute,
  postActionGetTemplateSummaryRoute,
  postActionImportStacksToStackSetRoute,
  postActionListChangeSetsRoute,
  postActionListExportsRoute,
  postActionListImportsRoute,
  postActionListStackInstanceResourceDriftsRoute,
  postActionListStackInstancesRoute,
  postActionListStackResourcesRoute,
  postActionListStackSetOperationResultsRoute,
  postActionListStackSetOperationsRoute,
  postActionListStackSetsRoute,
  postActionListStacksRoute,
  postActionListTypeRegistrationsRoute,
  postActionListTypesRoute,
  postActionListTypeVersionsRoute,
  postActionPublishTypeRoute,
  postActionRecordHandlerProgressRoute,
  postActionRegisterPublisherRoute,
  postActionRegisterTypeRoute,
  postActionRollbackStackRoute,
  postActionSetStackPolicyRoute,
  postActionSetTypeConfigurationRoute,
  postActionSetTypeDefaultVersionRoute,
  postActionSignalResourceRoute,
  postActionStopStackSetOperationRoute,
  postActionTestTypeRoute,
  postActionUpdateStackInstancesRoute,
  postActionUpdateStackRoute,
  postActionUpdateStackSetRoute,
  postActionUpdateTerminationProtectionRoute,
  postActionValidateTemplateRoute,
} from './routes'
import {
  getActionActivateOrganizationsAccessRouteHandler,
  getActionActivateTypeRouteHandler,
  getActionBatchDescribeTypeConfigurationsRouteHandler,
  getActionCancelUpdateStackRouteHandler,
  getActionContinueUpdateRollbackRouteHandler,
  getActionCreateChangeSetRouteHandler,
  getActionCreateStackInstancesRouteHandler,
  getActionCreateStackRouteHandler,
  getActionCreateStackSetRouteHandler,
  getActionDeactivateOrganizationsAccessRouteHandler,
  getActionDeactivateTypeRouteHandler,
  getActionDeleteChangeSetRouteHandler,
  getActionDeleteStackInstancesRouteHandler,
  getActionDeleteStackRouteHandler,
  getActionDeleteStackSetRouteHandler,
  getActionDeregisterTypeRouteHandler,
  getActionDescribeAccountLimitsRouteHandler,
  getActionDescribeChangeSetHooksRouteHandler,
  getActionDescribeChangeSetRouteHandler,
  getActionDescribeOrganizationsAccessRouteHandler,
  getActionDescribePublisherRouteHandler,
  getActionDescribeStackDriftDetectionStatusRouteHandler,
  getActionDescribeStackEventsRouteHandler,
  getActionDescribeStackInstanceRouteHandler,
  getActionDescribeStackResourceDriftsRouteHandler,
  getActionDescribeStackResourceRouteHandler,
  getActionDescribeStackResourcesRouteHandler,
  getActionDescribeStackSetOperationRouteHandler,
  getActionDescribeStackSetRouteHandler,
  getActionDescribeStacksRouteHandler,
  getActionDescribeTypeRegistrationRouteHandler,
  getActionDescribeTypeRouteHandler,
  getActionDetectStackDriftRouteHandler,
  getActionDetectStackResourceDriftRouteHandler,
  getActionDetectStackSetDriftRouteHandler,
  getActionEstimateTemplateCostRouteHandler,
  getActionExecuteChangeSetRouteHandler,
  getActionGetStackPolicyRouteHandler,
  getActionGetTemplateRouteHandler,
  getActionGetTemplateSummaryRouteHandler,
  getActionImportStacksToStackSetRouteHandler,
  getActionListChangeSetsRouteHandler,
  getActionListExportsRouteHandler,
  getActionListImportsRouteHandler,
  getActionListStackInstanceResourceDriftsRouteHandler,
  getActionListStackInstancesRouteHandler,
  getActionListStackResourcesRouteHandler,
  getActionListStackSetOperationResultsRouteHandler,
  getActionListStackSetOperationsRouteHandler,
  getActionListStackSetsRouteHandler,
  getActionListStacksRouteHandler,
  getActionListTypeRegistrationsRouteHandler,
  getActionListTypesRouteHandler,
  getActionListTypeVersionsRouteHandler,
  getActionPublishTypeRouteHandler,
  getActionRecordHandlerProgressRouteHandler,
  getActionRegisterPublisherRouteHandler,
  getActionRegisterTypeRouteHandler,
  getActionRollbackStackRouteHandler,
  getActionSetStackPolicyRouteHandler,
  getActionSetTypeConfigurationRouteHandler,
  getActionSetTypeDefaultVersionRouteHandler,
  getActionSignalResourceRouteHandler,
  getActionStopStackSetOperationRouteHandler,
  getActionTestTypeRouteHandler,
  getActionUpdateStackInstancesRouteHandler,
  getActionUpdateStackRouteHandler,
  getActionUpdateStackSetRouteHandler,
  getActionUpdateTerminationProtectionRouteHandler,
  getActionValidateTemplateRouteHandler,
  postActionActivateOrganizationsAccessRouteHandler,
  postActionActivateTypeRouteHandler,
  postActionBatchDescribeTypeConfigurationsRouteHandler,
  postActionCancelUpdateStackRouteHandler,
  postActionContinueUpdateRollbackRouteHandler,
  postActionCreateChangeSetRouteHandler,
  postActionCreateStackInstancesRouteHandler,
  postActionCreateStackRouteHandler,
  postActionCreateStackSetRouteHandler,
  postActionDeactivateOrganizationsAccessRouteHandler,
  postActionDeactivateTypeRouteHandler,
  postActionDeleteChangeSetRouteHandler,
  postActionDeleteStackInstancesRouteHandler,
  postActionDeleteStackRouteHandler,
  postActionDeleteStackSetRouteHandler,
  postActionDeregisterTypeRouteHandler,
  postActionDescribeAccountLimitsRouteHandler,
  postActionDescribeChangeSetHooksRouteHandler,
  postActionDescribeChangeSetRouteHandler,
  postActionDescribeOrganizationsAccessRouteHandler,
  postActionDescribePublisherRouteHandler,
  postActionDescribeStackDriftDetectionStatusRouteHandler,
  postActionDescribeStackEventsRouteHandler,
  postActionDescribeStackInstanceRouteHandler,
  postActionDescribeStackResourceDriftsRouteHandler,
  postActionDescribeStackResourceRouteHandler,
  postActionDescribeStackResourcesRouteHandler,
  postActionDescribeStackSetOperationRouteHandler,
  postActionDescribeStackSetRouteHandler,
  postActionDescribeStacksRouteHandler,
  postActionDescribeTypeRegistrationRouteHandler,
  postActionDescribeTypeRouteHandler,
  postActionDetectStackDriftRouteHandler,
  postActionDetectStackResourceDriftRouteHandler,
  postActionDetectStackSetDriftRouteHandler,
  postActionEstimateTemplateCostRouteHandler,
  postActionExecuteChangeSetRouteHandler,
  postActionGetStackPolicyRouteHandler,
  postActionGetTemplateRouteHandler,
  postActionGetTemplateSummaryRouteHandler,
  postActionImportStacksToStackSetRouteHandler,
  postActionListChangeSetsRouteHandler,
  postActionListExportsRouteHandler,
  postActionListImportsRouteHandler,
  postActionListStackInstanceResourceDriftsRouteHandler,
  postActionListStackInstancesRouteHandler,
  postActionListStackResourcesRouteHandler,
  postActionListStackSetOperationResultsRouteHandler,
  postActionListStackSetOperationsRouteHandler,
  postActionListStackSetsRouteHandler,
  postActionListStacksRouteHandler,
  postActionListTypeRegistrationsRouteHandler,
  postActionListTypesRouteHandler,
  postActionListTypeVersionsRouteHandler,
  postActionPublishTypeRouteHandler,
  postActionRecordHandlerProgressRouteHandler,
  postActionRegisterPublisherRouteHandler,
  postActionRegisterTypeRouteHandler,
  postActionRollbackStackRouteHandler,
  postActionSetStackPolicyRouteHandler,
  postActionSetTypeConfigurationRouteHandler,
  postActionSetTypeDefaultVersionRouteHandler,
  postActionSignalResourceRouteHandler,
  postActionStopStackSetOperationRouteHandler,
  postActionTestTypeRouteHandler,
  postActionUpdateStackInstancesRouteHandler,
  postActionUpdateStackRouteHandler,
  postActionUpdateStackSetRouteHandler,
  postActionUpdateTerminationProtectionRouteHandler,
  postActionValidateTemplateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getActionActivateOrganizationsAccessRoute,
    getActionActivateOrganizationsAccessRouteHandler,
  )
  .openapi(
    postActionActivateOrganizationsAccessRoute,
    postActionActivateOrganizationsAccessRouteHandler,
  )
  .openapi(getActionActivateTypeRoute, getActionActivateTypeRouteHandler)
  .openapi(postActionActivateTypeRoute, postActionActivateTypeRouteHandler)
  .openapi(
    getActionBatchDescribeTypeConfigurationsRoute,
    getActionBatchDescribeTypeConfigurationsRouteHandler,
  )
  .openapi(
    postActionBatchDescribeTypeConfigurationsRoute,
    postActionBatchDescribeTypeConfigurationsRouteHandler,
  )
  .openapi(getActionCancelUpdateStackRoute, getActionCancelUpdateStackRouteHandler)
  .openapi(postActionCancelUpdateStackRoute, postActionCancelUpdateStackRouteHandler)
  .openapi(getActionContinueUpdateRollbackRoute, getActionContinueUpdateRollbackRouteHandler)
  .openapi(postActionContinueUpdateRollbackRoute, postActionContinueUpdateRollbackRouteHandler)
  .openapi(getActionCreateChangeSetRoute, getActionCreateChangeSetRouteHandler)
  .openapi(postActionCreateChangeSetRoute, postActionCreateChangeSetRouteHandler)
  .openapi(getActionCreateStackRoute, getActionCreateStackRouteHandler)
  .openapi(postActionCreateStackRoute, postActionCreateStackRouteHandler)
  .openapi(getActionCreateStackInstancesRoute, getActionCreateStackInstancesRouteHandler)
  .openapi(postActionCreateStackInstancesRoute, postActionCreateStackInstancesRouteHandler)
  .openapi(getActionCreateStackSetRoute, getActionCreateStackSetRouteHandler)
  .openapi(postActionCreateStackSetRoute, postActionCreateStackSetRouteHandler)
  .openapi(
    getActionDeactivateOrganizationsAccessRoute,
    getActionDeactivateOrganizationsAccessRouteHandler,
  )
  .openapi(
    postActionDeactivateOrganizationsAccessRoute,
    postActionDeactivateOrganizationsAccessRouteHandler,
  )
  .openapi(getActionDeactivateTypeRoute, getActionDeactivateTypeRouteHandler)
  .openapi(postActionDeactivateTypeRoute, postActionDeactivateTypeRouteHandler)
  .openapi(getActionDeleteChangeSetRoute, getActionDeleteChangeSetRouteHandler)
  .openapi(postActionDeleteChangeSetRoute, postActionDeleteChangeSetRouteHandler)
  .openapi(getActionDeleteStackRoute, getActionDeleteStackRouteHandler)
  .openapi(postActionDeleteStackRoute, postActionDeleteStackRouteHandler)
  .openapi(getActionDeleteStackInstancesRoute, getActionDeleteStackInstancesRouteHandler)
  .openapi(postActionDeleteStackInstancesRoute, postActionDeleteStackInstancesRouteHandler)
  .openapi(getActionDeleteStackSetRoute, getActionDeleteStackSetRouteHandler)
  .openapi(postActionDeleteStackSetRoute, postActionDeleteStackSetRouteHandler)
  .openapi(getActionDeregisterTypeRoute, getActionDeregisterTypeRouteHandler)
  .openapi(postActionDeregisterTypeRoute, postActionDeregisterTypeRouteHandler)
  .openapi(getActionDescribeAccountLimitsRoute, getActionDescribeAccountLimitsRouteHandler)
  .openapi(postActionDescribeAccountLimitsRoute, postActionDescribeAccountLimitsRouteHandler)
  .openapi(getActionDescribeChangeSetRoute, getActionDescribeChangeSetRouteHandler)
  .openapi(postActionDescribeChangeSetRoute, postActionDescribeChangeSetRouteHandler)
  .openapi(getActionDescribeChangeSetHooksRoute, getActionDescribeChangeSetHooksRouteHandler)
  .openapi(postActionDescribeChangeSetHooksRoute, postActionDescribeChangeSetHooksRouteHandler)
  .openapi(
    getActionDescribeOrganizationsAccessRoute,
    getActionDescribeOrganizationsAccessRouteHandler,
  )
  .openapi(
    postActionDescribeOrganizationsAccessRoute,
    postActionDescribeOrganizationsAccessRouteHandler,
  )
  .openapi(getActionDescribePublisherRoute, getActionDescribePublisherRouteHandler)
  .openapi(postActionDescribePublisherRoute, postActionDescribePublisherRouteHandler)
  .openapi(
    getActionDescribeStackDriftDetectionStatusRoute,
    getActionDescribeStackDriftDetectionStatusRouteHandler,
  )
  .openapi(
    postActionDescribeStackDriftDetectionStatusRoute,
    postActionDescribeStackDriftDetectionStatusRouteHandler,
  )
  .openapi(getActionDescribeStackEventsRoute, getActionDescribeStackEventsRouteHandler)
  .openapi(postActionDescribeStackEventsRoute, postActionDescribeStackEventsRouteHandler)
  .openapi(getActionDescribeStackInstanceRoute, getActionDescribeStackInstanceRouteHandler)
  .openapi(postActionDescribeStackInstanceRoute, postActionDescribeStackInstanceRouteHandler)
  .openapi(getActionDescribeStackResourceRoute, getActionDescribeStackResourceRouteHandler)
  .openapi(postActionDescribeStackResourceRoute, postActionDescribeStackResourceRouteHandler)
  .openapi(
    getActionDescribeStackResourceDriftsRoute,
    getActionDescribeStackResourceDriftsRouteHandler,
  )
  .openapi(
    postActionDescribeStackResourceDriftsRoute,
    postActionDescribeStackResourceDriftsRouteHandler,
  )
  .openapi(getActionDescribeStackResourcesRoute, getActionDescribeStackResourcesRouteHandler)
  .openapi(postActionDescribeStackResourcesRoute, postActionDescribeStackResourcesRouteHandler)
  .openapi(getActionDescribeStackSetRoute, getActionDescribeStackSetRouteHandler)
  .openapi(postActionDescribeStackSetRoute, postActionDescribeStackSetRouteHandler)
  .openapi(getActionDescribeStackSetOperationRoute, getActionDescribeStackSetOperationRouteHandler)
  .openapi(
    postActionDescribeStackSetOperationRoute,
    postActionDescribeStackSetOperationRouteHandler,
  )
  .openapi(getActionDescribeStacksRoute, getActionDescribeStacksRouteHandler)
  .openapi(postActionDescribeStacksRoute, postActionDescribeStacksRouteHandler)
  .openapi(getActionDescribeTypeRoute, getActionDescribeTypeRouteHandler)
  .openapi(postActionDescribeTypeRoute, postActionDescribeTypeRouteHandler)
  .openapi(getActionDescribeTypeRegistrationRoute, getActionDescribeTypeRegistrationRouteHandler)
  .openapi(postActionDescribeTypeRegistrationRoute, postActionDescribeTypeRegistrationRouteHandler)
  .openapi(getActionDetectStackDriftRoute, getActionDetectStackDriftRouteHandler)
  .openapi(postActionDetectStackDriftRoute, postActionDetectStackDriftRouteHandler)
  .openapi(getActionDetectStackResourceDriftRoute, getActionDetectStackResourceDriftRouteHandler)
  .openapi(postActionDetectStackResourceDriftRoute, postActionDetectStackResourceDriftRouteHandler)
  .openapi(getActionDetectStackSetDriftRoute, getActionDetectStackSetDriftRouteHandler)
  .openapi(postActionDetectStackSetDriftRoute, postActionDetectStackSetDriftRouteHandler)
  .openapi(getActionEstimateTemplateCostRoute, getActionEstimateTemplateCostRouteHandler)
  .openapi(postActionEstimateTemplateCostRoute, postActionEstimateTemplateCostRouteHandler)
  .openapi(getActionExecuteChangeSetRoute, getActionExecuteChangeSetRouteHandler)
  .openapi(postActionExecuteChangeSetRoute, postActionExecuteChangeSetRouteHandler)
  .openapi(getActionGetStackPolicyRoute, getActionGetStackPolicyRouteHandler)
  .openapi(postActionGetStackPolicyRoute, postActionGetStackPolicyRouteHandler)
  .openapi(getActionGetTemplateRoute, getActionGetTemplateRouteHandler)
  .openapi(postActionGetTemplateRoute, postActionGetTemplateRouteHandler)
  .openapi(getActionGetTemplateSummaryRoute, getActionGetTemplateSummaryRouteHandler)
  .openapi(postActionGetTemplateSummaryRoute, postActionGetTemplateSummaryRouteHandler)
  .openapi(getActionImportStacksToStackSetRoute, getActionImportStacksToStackSetRouteHandler)
  .openapi(postActionImportStacksToStackSetRoute, postActionImportStacksToStackSetRouteHandler)
  .openapi(getActionListChangeSetsRoute, getActionListChangeSetsRouteHandler)
  .openapi(postActionListChangeSetsRoute, postActionListChangeSetsRouteHandler)
  .openapi(getActionListExportsRoute, getActionListExportsRouteHandler)
  .openapi(postActionListExportsRoute, postActionListExportsRouteHandler)
  .openapi(getActionListImportsRoute, getActionListImportsRouteHandler)
  .openapi(postActionListImportsRoute, postActionListImportsRouteHandler)
  .openapi(
    getActionListStackInstanceResourceDriftsRoute,
    getActionListStackInstanceResourceDriftsRouteHandler,
  )
  .openapi(
    postActionListStackInstanceResourceDriftsRoute,
    postActionListStackInstanceResourceDriftsRouteHandler,
  )
  .openapi(getActionListStackInstancesRoute, getActionListStackInstancesRouteHandler)
  .openapi(postActionListStackInstancesRoute, postActionListStackInstancesRouteHandler)
  .openapi(getActionListStackResourcesRoute, getActionListStackResourcesRouteHandler)
  .openapi(postActionListStackResourcesRoute, postActionListStackResourcesRouteHandler)
  .openapi(
    getActionListStackSetOperationResultsRoute,
    getActionListStackSetOperationResultsRouteHandler,
  )
  .openapi(
    postActionListStackSetOperationResultsRoute,
    postActionListStackSetOperationResultsRouteHandler,
  )
  .openapi(getActionListStackSetOperationsRoute, getActionListStackSetOperationsRouteHandler)
  .openapi(postActionListStackSetOperationsRoute, postActionListStackSetOperationsRouteHandler)
  .openapi(getActionListStackSetsRoute, getActionListStackSetsRouteHandler)
  .openapi(postActionListStackSetsRoute, postActionListStackSetsRouteHandler)
  .openapi(getActionListStacksRoute, getActionListStacksRouteHandler)
  .openapi(postActionListStacksRoute, postActionListStacksRouteHandler)
  .openapi(getActionListTypeRegistrationsRoute, getActionListTypeRegistrationsRouteHandler)
  .openapi(postActionListTypeRegistrationsRoute, postActionListTypeRegistrationsRouteHandler)
  .openapi(getActionListTypeVersionsRoute, getActionListTypeVersionsRouteHandler)
  .openapi(postActionListTypeVersionsRoute, postActionListTypeVersionsRouteHandler)
  .openapi(getActionListTypesRoute, getActionListTypesRouteHandler)
  .openapi(postActionListTypesRoute, postActionListTypesRouteHandler)
  .openapi(getActionPublishTypeRoute, getActionPublishTypeRouteHandler)
  .openapi(postActionPublishTypeRoute, postActionPublishTypeRouteHandler)
  .openapi(getActionRecordHandlerProgressRoute, getActionRecordHandlerProgressRouteHandler)
  .openapi(postActionRecordHandlerProgressRoute, postActionRecordHandlerProgressRouteHandler)
  .openapi(getActionRegisterPublisherRoute, getActionRegisterPublisherRouteHandler)
  .openapi(postActionRegisterPublisherRoute, postActionRegisterPublisherRouteHandler)
  .openapi(getActionRegisterTypeRoute, getActionRegisterTypeRouteHandler)
  .openapi(postActionRegisterTypeRoute, postActionRegisterTypeRouteHandler)
  .openapi(getActionRollbackStackRoute, getActionRollbackStackRouteHandler)
  .openapi(postActionRollbackStackRoute, postActionRollbackStackRouteHandler)
  .openapi(getActionSetStackPolicyRoute, getActionSetStackPolicyRouteHandler)
  .openapi(postActionSetStackPolicyRoute, postActionSetStackPolicyRouteHandler)
  .openapi(getActionSetTypeConfigurationRoute, getActionSetTypeConfigurationRouteHandler)
  .openapi(postActionSetTypeConfigurationRoute, postActionSetTypeConfigurationRouteHandler)
  .openapi(getActionSetTypeDefaultVersionRoute, getActionSetTypeDefaultVersionRouteHandler)
  .openapi(postActionSetTypeDefaultVersionRoute, postActionSetTypeDefaultVersionRouteHandler)
  .openapi(getActionSignalResourceRoute, getActionSignalResourceRouteHandler)
  .openapi(postActionSignalResourceRoute, postActionSignalResourceRouteHandler)
  .openapi(getActionStopStackSetOperationRoute, getActionStopStackSetOperationRouteHandler)
  .openapi(postActionStopStackSetOperationRoute, postActionStopStackSetOperationRouteHandler)
  .openapi(getActionTestTypeRoute, getActionTestTypeRouteHandler)
  .openapi(postActionTestTypeRoute, postActionTestTypeRouteHandler)
  .openapi(getActionUpdateStackRoute, getActionUpdateStackRouteHandler)
  .openapi(postActionUpdateStackRoute, postActionUpdateStackRouteHandler)
  .openapi(getActionUpdateStackInstancesRoute, getActionUpdateStackInstancesRouteHandler)
  .openapi(postActionUpdateStackInstancesRoute, postActionUpdateStackInstancesRouteHandler)
  .openapi(getActionUpdateStackSetRoute, getActionUpdateStackSetRouteHandler)
  .openapi(postActionUpdateStackSetRoute, postActionUpdateStackSetRouteHandler)
  .openapi(
    getActionUpdateTerminationProtectionRoute,
    getActionUpdateTerminationProtectionRouteHandler,
  )
  .openapi(
    postActionUpdateTerminationProtectionRoute,
    postActionUpdateTerminationProtectionRouteHandler,
  )
  .openapi(getActionValidateTemplateRoute, getActionValidateTemplateRouteHandler)
  .openapi(postActionValidateTemplateRoute, postActionValidateTemplateRouteHandler)

export default app
