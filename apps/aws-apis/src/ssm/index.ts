import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAmazonSsmAddTagsToResourceHandler,
  xAmzTargetAmazonSsmAssociateOpsItemRelatedItemHandler,
  xAmzTargetAmazonSsmCancelCommandHandler,
  xAmzTargetAmazonSsmCancelMaintenanceWindowExecutionHandler,
  xAmzTargetAmazonSsmCreateActivationHandler,
  xAmzTargetAmazonSsmCreateAssociationBatchHandler,
  xAmzTargetAmazonSsmCreateAssociationHandler,
  xAmzTargetAmazonSsmCreateDocumentHandler,
  xAmzTargetAmazonSsmCreateMaintenanceWindowHandler,
  xAmzTargetAmazonSsmCreateOpsItemHandler,
  xAmzTargetAmazonSsmCreateOpsMetadataHandler,
  xAmzTargetAmazonSsmCreatePatchBaselineHandler,
  xAmzTargetAmazonSsmCreateResourceDataSyncHandler,
  xAmzTargetAmazonSsmDeleteActivationHandler,
  xAmzTargetAmazonSsmDeleteAssociationHandler,
  xAmzTargetAmazonSsmDeleteDocumentHandler,
  xAmzTargetAmazonSsmDeleteInventoryHandler,
  xAmzTargetAmazonSsmDeleteMaintenanceWindowHandler,
  xAmzTargetAmazonSsmDeleteOpsMetadataHandler,
  xAmzTargetAmazonSsmDeleteParameterHandler,
  xAmzTargetAmazonSsmDeleteParametersHandler,
  xAmzTargetAmazonSsmDeletePatchBaselineHandler,
  xAmzTargetAmazonSsmDeleteResourceDataSyncHandler,
  xAmzTargetAmazonSsmDeleteResourcePolicyHandler,
  xAmzTargetAmazonSsmDeregisterManagedInstanceHandler,
  xAmzTargetAmazonSsmDeregisterPatchBaselineForPatchGroupHandler,
  xAmzTargetAmazonSsmDeregisterTargetFromMaintenanceWindowHandler,
  xAmzTargetAmazonSsmDeregisterTaskFromMaintenanceWindowHandler,
  xAmzTargetAmazonSsmDescribeActivationsHandler,
  xAmzTargetAmazonSsmDescribeAssociationExecutionsHandler,
  xAmzTargetAmazonSsmDescribeAssociationExecutionTargetsHandler,
  xAmzTargetAmazonSsmDescribeAssociationHandler,
  xAmzTargetAmazonSsmDescribeAutomationExecutionsHandler,
  xAmzTargetAmazonSsmDescribeAutomationStepExecutionsHandler,
  xAmzTargetAmazonSsmDescribeAvailablePatchesHandler,
  xAmzTargetAmazonSsmDescribeDocumentHandler,
  xAmzTargetAmazonSsmDescribeDocumentPermissionHandler,
  xAmzTargetAmazonSsmDescribeEffectiveInstanceAssociationsHandler,
  xAmzTargetAmazonSsmDescribeEffectivePatchesForPatchBaselineHandler,
  xAmzTargetAmazonSsmDescribeInstanceAssociationsStatusHandler,
  xAmzTargetAmazonSsmDescribeInstanceInformationHandler,
  xAmzTargetAmazonSsmDescribeInstancePatchesHandler,
  xAmzTargetAmazonSsmDescribeInstancePatchStatesForPatchGroupHandler,
  xAmzTargetAmazonSsmDescribeInstancePatchStatesHandler,
  xAmzTargetAmazonSsmDescribeInventoryDeletionsHandler,
  xAmzTargetAmazonSsmDescribeMaintenanceWindowExecutionsHandler,
  xAmzTargetAmazonSsmDescribeMaintenanceWindowExecutionTaskInvocationsHandler,
  xAmzTargetAmazonSsmDescribeMaintenanceWindowExecutionTasksHandler,
  xAmzTargetAmazonSsmDescribeMaintenanceWindowScheduleHandler,
  xAmzTargetAmazonSsmDescribeMaintenanceWindowsForTargetHandler,
  xAmzTargetAmazonSsmDescribeMaintenanceWindowsHandler,
  xAmzTargetAmazonSsmDescribeMaintenanceWindowTargetsHandler,
  xAmzTargetAmazonSsmDescribeMaintenanceWindowTasksHandler,
  xAmzTargetAmazonSsmDescribeOpsItemsHandler,
  xAmzTargetAmazonSsmDescribeParametersHandler,
  xAmzTargetAmazonSsmDescribePatchBaselinesHandler,
  xAmzTargetAmazonSsmDescribePatchGroupsHandler,
  xAmzTargetAmazonSsmDescribePatchGroupStateHandler,
  xAmzTargetAmazonSsmDescribePatchPropertiesHandler,
  xAmzTargetAmazonSsmDescribeSessionsHandler,
  xAmzTargetAmazonSsmDisassociateOpsItemRelatedItemHandler,
  xAmzTargetAmazonSsmGetAutomationExecutionHandler,
  xAmzTargetAmazonSsmGetCalendarStateHandler,
  xAmzTargetAmazonSsmGetCommandInvocationHandler,
  xAmzTargetAmazonSsmGetConnectionStatusHandler,
  xAmzTargetAmazonSsmGetDefaultPatchBaselineHandler,
  xAmzTargetAmazonSsmGetDeployablePatchSnapshotForInstanceHandler,
  xAmzTargetAmazonSsmGetDocumentHandler,
  xAmzTargetAmazonSsmGetInventoryHandler,
  xAmzTargetAmazonSsmGetInventorySchemaHandler,
  xAmzTargetAmazonSsmGetMaintenanceWindowExecutionHandler,
  xAmzTargetAmazonSsmGetMaintenanceWindowExecutionTaskHandler,
  xAmzTargetAmazonSsmGetMaintenanceWindowExecutionTaskInvocationHandler,
  xAmzTargetAmazonSsmGetMaintenanceWindowHandler,
  xAmzTargetAmazonSsmGetMaintenanceWindowTaskHandler,
  xAmzTargetAmazonSsmGetOpsItemHandler,
  xAmzTargetAmazonSsmGetOpsMetadataHandler,
  xAmzTargetAmazonSsmGetOpsSummaryHandler,
  xAmzTargetAmazonSsmGetParameterHandler,
  xAmzTargetAmazonSsmGetParameterHistoryHandler,
  xAmzTargetAmazonSsmGetParametersByPathHandler,
  xAmzTargetAmazonSsmGetParametersHandler,
  xAmzTargetAmazonSsmGetPatchBaselineForPatchGroupHandler,
  xAmzTargetAmazonSsmGetPatchBaselineHandler,
  xAmzTargetAmazonSsmGetResourcePoliciesHandler,
  xAmzTargetAmazonSsmGetServiceSettingHandler,
  xAmzTargetAmazonSsmLabelParameterVersionHandler,
  xAmzTargetAmazonSsmListAssociationsHandler,
  xAmzTargetAmazonSsmListAssociationVersionsHandler,
  xAmzTargetAmazonSsmListCommandInvocationsHandler,
  xAmzTargetAmazonSsmListCommandsHandler,
  xAmzTargetAmazonSsmListComplianceItemsHandler,
  xAmzTargetAmazonSsmListComplianceSummariesHandler,
  xAmzTargetAmazonSsmListDocumentMetadataHistoryHandler,
  xAmzTargetAmazonSsmListDocumentsHandler,
  xAmzTargetAmazonSsmListDocumentVersionsHandler,
  xAmzTargetAmazonSsmListInventoryEntriesHandler,
  xAmzTargetAmazonSsmListOpsItemEventsHandler,
  xAmzTargetAmazonSsmListOpsItemRelatedItemsHandler,
  xAmzTargetAmazonSsmListOpsMetadataHandler,
  xAmzTargetAmazonSsmListResourceComplianceSummariesHandler,
  xAmzTargetAmazonSsmListResourceDataSyncHandler,
  xAmzTargetAmazonSsmListTagsForResourceHandler,
  xAmzTargetAmazonSsmModifyDocumentPermissionHandler,
  xAmzTargetAmazonSsmPutComplianceItemsHandler,
  xAmzTargetAmazonSsmPutInventoryHandler,
  xAmzTargetAmazonSsmPutParameterHandler,
  xAmzTargetAmazonSsmPutResourcePolicyHandler,
  xAmzTargetAmazonSsmRegisterDefaultPatchBaselineHandler,
  xAmzTargetAmazonSsmRegisterPatchBaselineForPatchGroupHandler,
  xAmzTargetAmazonSsmRegisterTargetWithMaintenanceWindowHandler,
  xAmzTargetAmazonSsmRegisterTaskWithMaintenanceWindowHandler,
  xAmzTargetAmazonSsmRemoveTagsFromResourceHandler,
  xAmzTargetAmazonSsmResetServiceSettingHandler,
  xAmzTargetAmazonSsmResumeSessionHandler,
  xAmzTargetAmazonSsmSendAutomationSignalHandler,
  xAmzTargetAmazonSsmSendCommandHandler,
  xAmzTargetAmazonSsmStartAssociationsOnceHandler,
  xAmzTargetAmazonSsmStartAutomationExecutionHandler,
  xAmzTargetAmazonSsmStartChangeRequestExecutionHandler,
  xAmzTargetAmazonSsmStartSessionHandler,
  xAmzTargetAmazonSsmStopAutomationExecutionHandler,
  xAmzTargetAmazonSsmTerminateSessionHandler,
  xAmzTargetAmazonSsmUnlabelParameterVersionHandler,
  xAmzTargetAmazonSsmUpdateAssociationHandler,
  xAmzTargetAmazonSsmUpdateAssociationStatusHandler,
  xAmzTargetAmazonSsmUpdateDocumentDefaultVersionHandler,
  xAmzTargetAmazonSsmUpdateDocumentHandler,
  xAmzTargetAmazonSsmUpdateDocumentMetadataHandler,
  xAmzTargetAmazonSsmUpdateMaintenanceWindowHandler,
  xAmzTargetAmazonSsmUpdateMaintenanceWindowTargetHandler,
  xAmzTargetAmazonSsmUpdateMaintenanceWindowTaskHandler,
  xAmzTargetAmazonSsmUpdateManagedInstanceRoleHandler,
  xAmzTargetAmazonSsmUpdateOpsItemHandler,
  xAmzTargetAmazonSsmUpdateOpsMetadataHandler,
  xAmzTargetAmazonSsmUpdatePatchBaselineHandler,
  xAmzTargetAmazonSsmUpdateResourceDataSyncHandler,
  xAmzTargetAmazonSsmUpdateServiceSettingHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAmazonSsmAddTagsToResourceHandler)
  .route('/', xAmzTargetAmazonSsmAssociateOpsItemRelatedItemHandler)
  .route('/', xAmzTargetAmazonSsmCancelCommandHandler)
  .route('/', xAmzTargetAmazonSsmCancelMaintenanceWindowExecutionHandler)
  .route('/', xAmzTargetAmazonSsmCreateActivationHandler)
  .route('/', xAmzTargetAmazonSsmCreateAssociationHandler)
  .route('/', xAmzTargetAmazonSsmCreateAssociationBatchHandler)
  .route('/', xAmzTargetAmazonSsmCreateDocumentHandler)
  .route('/', xAmzTargetAmazonSsmCreateMaintenanceWindowHandler)
  .route('/', xAmzTargetAmazonSsmCreateOpsItemHandler)
  .route('/', xAmzTargetAmazonSsmCreateOpsMetadataHandler)
  .route('/', xAmzTargetAmazonSsmCreatePatchBaselineHandler)
  .route('/', xAmzTargetAmazonSsmCreateResourceDataSyncHandler)
  .route('/', xAmzTargetAmazonSsmDeleteActivationHandler)
  .route('/', xAmzTargetAmazonSsmDeleteAssociationHandler)
  .route('/', xAmzTargetAmazonSsmDeleteDocumentHandler)
  .route('/', xAmzTargetAmazonSsmDeleteInventoryHandler)
  .route('/', xAmzTargetAmazonSsmDeleteMaintenanceWindowHandler)
  .route('/', xAmzTargetAmazonSsmDeleteOpsMetadataHandler)
  .route('/', xAmzTargetAmazonSsmDeleteParameterHandler)
  .route('/', xAmzTargetAmazonSsmDeleteParametersHandler)
  .route('/', xAmzTargetAmazonSsmDeletePatchBaselineHandler)
  .route('/', xAmzTargetAmazonSsmDeleteResourceDataSyncHandler)
  .route('/', xAmzTargetAmazonSsmDeleteResourcePolicyHandler)
  .route('/', xAmzTargetAmazonSsmDeregisterManagedInstanceHandler)
  .route('/', xAmzTargetAmazonSsmDeregisterPatchBaselineForPatchGroupHandler)
  .route('/', xAmzTargetAmazonSsmDeregisterTargetFromMaintenanceWindowHandler)
  .route('/', xAmzTargetAmazonSsmDeregisterTaskFromMaintenanceWindowHandler)
  .route('/', xAmzTargetAmazonSsmDescribeActivationsHandler)
  .route('/', xAmzTargetAmazonSsmDescribeAssociationHandler)
  .route('/', xAmzTargetAmazonSsmDescribeAssociationExecutionTargetsHandler)
  .route('/', xAmzTargetAmazonSsmDescribeAssociationExecutionsHandler)
  .route('/', xAmzTargetAmazonSsmDescribeAutomationExecutionsHandler)
  .route('/', xAmzTargetAmazonSsmDescribeAutomationStepExecutionsHandler)
  .route('/', xAmzTargetAmazonSsmDescribeAvailablePatchesHandler)
  .route('/', xAmzTargetAmazonSsmDescribeDocumentHandler)
  .route('/', xAmzTargetAmazonSsmDescribeDocumentPermissionHandler)
  .route('/', xAmzTargetAmazonSsmDescribeEffectiveInstanceAssociationsHandler)
  .route('/', xAmzTargetAmazonSsmDescribeEffectivePatchesForPatchBaselineHandler)
  .route('/', xAmzTargetAmazonSsmDescribeInstanceAssociationsStatusHandler)
  .route('/', xAmzTargetAmazonSsmDescribeInstanceInformationHandler)
  .route('/', xAmzTargetAmazonSsmDescribeInstancePatchStatesHandler)
  .route('/', xAmzTargetAmazonSsmDescribeInstancePatchStatesForPatchGroupHandler)
  .route('/', xAmzTargetAmazonSsmDescribeInstancePatchesHandler)
  .route('/', xAmzTargetAmazonSsmDescribeInventoryDeletionsHandler)
  .route('/', xAmzTargetAmazonSsmDescribeMaintenanceWindowExecutionTaskInvocationsHandler)
  .route('/', xAmzTargetAmazonSsmDescribeMaintenanceWindowExecutionTasksHandler)
  .route('/', xAmzTargetAmazonSsmDescribeMaintenanceWindowExecutionsHandler)
  .route('/', xAmzTargetAmazonSsmDescribeMaintenanceWindowScheduleHandler)
  .route('/', xAmzTargetAmazonSsmDescribeMaintenanceWindowTargetsHandler)
  .route('/', xAmzTargetAmazonSsmDescribeMaintenanceWindowTasksHandler)
  .route('/', xAmzTargetAmazonSsmDescribeMaintenanceWindowsHandler)
  .route('/', xAmzTargetAmazonSsmDescribeMaintenanceWindowsForTargetHandler)
  .route('/', xAmzTargetAmazonSsmDescribeOpsItemsHandler)
  .route('/', xAmzTargetAmazonSsmDescribeParametersHandler)
  .route('/', xAmzTargetAmazonSsmDescribePatchBaselinesHandler)
  .route('/', xAmzTargetAmazonSsmDescribePatchGroupStateHandler)
  .route('/', xAmzTargetAmazonSsmDescribePatchGroupsHandler)
  .route('/', xAmzTargetAmazonSsmDescribePatchPropertiesHandler)
  .route('/', xAmzTargetAmazonSsmDescribeSessionsHandler)
  .route('/', xAmzTargetAmazonSsmDisassociateOpsItemRelatedItemHandler)
  .route('/', xAmzTargetAmazonSsmGetAutomationExecutionHandler)
  .route('/', xAmzTargetAmazonSsmGetCalendarStateHandler)
  .route('/', xAmzTargetAmazonSsmGetCommandInvocationHandler)
  .route('/', xAmzTargetAmazonSsmGetConnectionStatusHandler)
  .route('/', xAmzTargetAmazonSsmGetDefaultPatchBaselineHandler)
  .route('/', xAmzTargetAmazonSsmGetDeployablePatchSnapshotForInstanceHandler)
  .route('/', xAmzTargetAmazonSsmGetDocumentHandler)
  .route('/', xAmzTargetAmazonSsmGetInventoryHandler)
  .route('/', xAmzTargetAmazonSsmGetInventorySchemaHandler)
  .route('/', xAmzTargetAmazonSsmGetMaintenanceWindowHandler)
  .route('/', xAmzTargetAmazonSsmGetMaintenanceWindowExecutionHandler)
  .route('/', xAmzTargetAmazonSsmGetMaintenanceWindowExecutionTaskHandler)
  .route('/', xAmzTargetAmazonSsmGetMaintenanceWindowExecutionTaskInvocationHandler)
  .route('/', xAmzTargetAmazonSsmGetMaintenanceWindowTaskHandler)
  .route('/', xAmzTargetAmazonSsmGetOpsItemHandler)
  .route('/', xAmzTargetAmazonSsmGetOpsMetadataHandler)
  .route('/', xAmzTargetAmazonSsmGetOpsSummaryHandler)
  .route('/', xAmzTargetAmazonSsmGetParameterHandler)
  .route('/', xAmzTargetAmazonSsmGetParameterHistoryHandler)
  .route('/', xAmzTargetAmazonSsmGetParametersHandler)
  .route('/', xAmzTargetAmazonSsmGetParametersByPathHandler)
  .route('/', xAmzTargetAmazonSsmGetPatchBaselineHandler)
  .route('/', xAmzTargetAmazonSsmGetPatchBaselineForPatchGroupHandler)
  .route('/', xAmzTargetAmazonSsmGetResourcePoliciesHandler)
  .route('/', xAmzTargetAmazonSsmGetServiceSettingHandler)
  .route('/', xAmzTargetAmazonSsmLabelParameterVersionHandler)
  .route('/', xAmzTargetAmazonSsmListAssociationVersionsHandler)
  .route('/', xAmzTargetAmazonSsmListAssociationsHandler)
  .route('/', xAmzTargetAmazonSsmListCommandInvocationsHandler)
  .route('/', xAmzTargetAmazonSsmListCommandsHandler)
  .route('/', xAmzTargetAmazonSsmListComplianceItemsHandler)
  .route('/', xAmzTargetAmazonSsmListComplianceSummariesHandler)
  .route('/', xAmzTargetAmazonSsmListDocumentMetadataHistoryHandler)
  .route('/', xAmzTargetAmazonSsmListDocumentVersionsHandler)
  .route('/', xAmzTargetAmazonSsmListDocumentsHandler)
  .route('/', xAmzTargetAmazonSsmListInventoryEntriesHandler)
  .route('/', xAmzTargetAmazonSsmListOpsItemEventsHandler)
  .route('/', xAmzTargetAmazonSsmListOpsItemRelatedItemsHandler)
  .route('/', xAmzTargetAmazonSsmListOpsMetadataHandler)
  .route('/', xAmzTargetAmazonSsmListResourceComplianceSummariesHandler)
  .route('/', xAmzTargetAmazonSsmListResourceDataSyncHandler)
  .route('/', xAmzTargetAmazonSsmListTagsForResourceHandler)
  .route('/', xAmzTargetAmazonSsmModifyDocumentPermissionHandler)
  .route('/', xAmzTargetAmazonSsmPutComplianceItemsHandler)
  .route('/', xAmzTargetAmazonSsmPutInventoryHandler)
  .route('/', xAmzTargetAmazonSsmPutParameterHandler)
  .route('/', xAmzTargetAmazonSsmPutResourcePolicyHandler)
  .route('/', xAmzTargetAmazonSsmRegisterDefaultPatchBaselineHandler)
  .route('/', xAmzTargetAmazonSsmRegisterPatchBaselineForPatchGroupHandler)
  .route('/', xAmzTargetAmazonSsmRegisterTargetWithMaintenanceWindowHandler)
  .route('/', xAmzTargetAmazonSsmRegisterTaskWithMaintenanceWindowHandler)
  .route('/', xAmzTargetAmazonSsmRemoveTagsFromResourceHandler)
  .route('/', xAmzTargetAmazonSsmResetServiceSettingHandler)
  .route('/', xAmzTargetAmazonSsmResumeSessionHandler)
  .route('/', xAmzTargetAmazonSsmSendAutomationSignalHandler)
  .route('/', xAmzTargetAmazonSsmSendCommandHandler)
  .route('/', xAmzTargetAmazonSsmStartAssociationsOnceHandler)
  .route('/', xAmzTargetAmazonSsmStartAutomationExecutionHandler)
  .route('/', xAmzTargetAmazonSsmStartChangeRequestExecutionHandler)
  .route('/', xAmzTargetAmazonSsmStartSessionHandler)
  .route('/', xAmzTargetAmazonSsmStopAutomationExecutionHandler)
  .route('/', xAmzTargetAmazonSsmTerminateSessionHandler)
  .route('/', xAmzTargetAmazonSsmUnlabelParameterVersionHandler)
  .route('/', xAmzTargetAmazonSsmUpdateAssociationHandler)
  .route('/', xAmzTargetAmazonSsmUpdateAssociationStatusHandler)
  .route('/', xAmzTargetAmazonSsmUpdateDocumentHandler)
  .route('/', xAmzTargetAmazonSsmUpdateDocumentDefaultVersionHandler)
  .route('/', xAmzTargetAmazonSsmUpdateDocumentMetadataHandler)
  .route('/', xAmzTargetAmazonSsmUpdateMaintenanceWindowHandler)
  .route('/', xAmzTargetAmazonSsmUpdateMaintenanceWindowTargetHandler)
  .route('/', xAmzTargetAmazonSsmUpdateMaintenanceWindowTaskHandler)
  .route('/', xAmzTargetAmazonSsmUpdateManagedInstanceRoleHandler)
  .route('/', xAmzTargetAmazonSsmUpdateOpsItemHandler)
  .route('/', xAmzTargetAmazonSsmUpdateOpsMetadataHandler)
  .route('/', xAmzTargetAmazonSsmUpdatePatchBaselineHandler)
  .route('/', xAmzTargetAmazonSsmUpdateResourceDataSyncHandler)
  .route('/', xAmzTargetAmazonSsmUpdateServiceSettingHandler)

export default app
