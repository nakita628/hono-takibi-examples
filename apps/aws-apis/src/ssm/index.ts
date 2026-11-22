import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAmazonSSMAddTagsToResourceHandler,
  XAmzTargetAmazonSSMAssociateOpsItemRelatedItemHandler,
  XAmzTargetAmazonSSMCancelCommandHandler,
  XAmzTargetAmazonSSMCancelMaintenanceWindowExecutionHandler,
  XAmzTargetAmazonSSMCreateActivationHandler,
  XAmzTargetAmazonSSMCreateAssociationBatchHandler,
  XAmzTargetAmazonSSMCreateAssociationHandler,
  XAmzTargetAmazonSSMCreateDocumentHandler,
  XAmzTargetAmazonSSMCreateMaintenanceWindowHandler,
  XAmzTargetAmazonSSMCreateOpsItemHandler,
  XAmzTargetAmazonSSMCreateOpsMetadataHandler,
  XAmzTargetAmazonSSMCreatePatchBaselineHandler,
  XAmzTargetAmazonSSMCreateResourceDataSyncHandler,
  XAmzTargetAmazonSSMDeleteActivationHandler,
  XAmzTargetAmazonSSMDeleteAssociationHandler,
  XAmzTargetAmazonSSMDeleteDocumentHandler,
  XAmzTargetAmazonSSMDeleteInventoryHandler,
  XAmzTargetAmazonSSMDeleteMaintenanceWindowHandler,
  XAmzTargetAmazonSSMDeleteOpsMetadataHandler,
  XAmzTargetAmazonSSMDeleteParameterHandler,
  XAmzTargetAmazonSSMDeleteParametersHandler,
  XAmzTargetAmazonSSMDeletePatchBaselineHandler,
  XAmzTargetAmazonSSMDeleteResourceDataSyncHandler,
  XAmzTargetAmazonSSMDeleteResourcePolicyHandler,
  XAmzTargetAmazonSSMDeregisterManagedInstanceHandler,
  XAmzTargetAmazonSSMDeregisterPatchBaselineForPatchGroupHandler,
  XAmzTargetAmazonSSMDeregisterTargetFromMaintenanceWindowHandler,
  XAmzTargetAmazonSSMDeregisterTaskFromMaintenanceWindowHandler,
  XAmzTargetAmazonSSMDescribeActivationsHandler,
  XAmzTargetAmazonSSMDescribeAssociationExecutionsHandler,
  XAmzTargetAmazonSSMDescribeAssociationExecutionTargetsHandler,
  XAmzTargetAmazonSSMDescribeAssociationHandler,
  XAmzTargetAmazonSSMDescribeAutomationExecutionsHandler,
  XAmzTargetAmazonSSMDescribeAutomationStepExecutionsHandler,
  XAmzTargetAmazonSSMDescribeAvailablePatchesHandler,
  XAmzTargetAmazonSSMDescribeDocumentHandler,
  XAmzTargetAmazonSSMDescribeDocumentPermissionHandler,
  XAmzTargetAmazonSSMDescribeEffectiveInstanceAssociationsHandler,
  XAmzTargetAmazonSSMDescribeEffectivePatchesForPatchBaselineHandler,
  XAmzTargetAmazonSSMDescribeInstanceAssociationsStatusHandler,
  XAmzTargetAmazonSSMDescribeInstanceInformationHandler,
  XAmzTargetAmazonSSMDescribeInstancePatchesHandler,
  XAmzTargetAmazonSSMDescribeInstancePatchStatesForPatchGroupHandler,
  XAmzTargetAmazonSSMDescribeInstancePatchStatesHandler,
  XAmzTargetAmazonSSMDescribeInventoryDeletionsHandler,
  XAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionsHandler,
  XAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTaskInvocationsHandler,
  XAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTasksHandler,
  XAmzTargetAmazonSSMDescribeMaintenanceWindowScheduleHandler,
  XAmzTargetAmazonSSMDescribeMaintenanceWindowsForTargetHandler,
  XAmzTargetAmazonSSMDescribeMaintenanceWindowsHandler,
  XAmzTargetAmazonSSMDescribeMaintenanceWindowTargetsHandler,
  XAmzTargetAmazonSSMDescribeMaintenanceWindowTasksHandler,
  XAmzTargetAmazonSSMDescribeOpsItemsHandler,
  XAmzTargetAmazonSSMDescribeParametersHandler,
  XAmzTargetAmazonSSMDescribePatchBaselinesHandler,
  XAmzTargetAmazonSSMDescribePatchGroupsHandler,
  XAmzTargetAmazonSSMDescribePatchGroupStateHandler,
  XAmzTargetAmazonSSMDescribePatchPropertiesHandler,
  XAmzTargetAmazonSSMDescribeSessionsHandler,
  XAmzTargetAmazonSSMDisassociateOpsItemRelatedItemHandler,
  XAmzTargetAmazonSSMGetAutomationExecutionHandler,
  XAmzTargetAmazonSSMGetCalendarStateHandler,
  XAmzTargetAmazonSSMGetCommandInvocationHandler,
  XAmzTargetAmazonSSMGetConnectionStatusHandler,
  XAmzTargetAmazonSSMGetDefaultPatchBaselineHandler,
  XAmzTargetAmazonSSMGetDeployablePatchSnapshotForInstanceHandler,
  XAmzTargetAmazonSSMGetDocumentHandler,
  XAmzTargetAmazonSSMGetInventoryHandler,
  XAmzTargetAmazonSSMGetInventorySchemaHandler,
  XAmzTargetAmazonSSMGetMaintenanceWindowExecutionHandler,
  XAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskHandler,
  XAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskInvocationHandler,
  XAmzTargetAmazonSSMGetMaintenanceWindowHandler,
  XAmzTargetAmazonSSMGetMaintenanceWindowTaskHandler,
  XAmzTargetAmazonSSMGetOpsItemHandler,
  XAmzTargetAmazonSSMGetOpsMetadataHandler,
  XAmzTargetAmazonSSMGetOpsSummaryHandler,
  XAmzTargetAmazonSSMGetParameterHandler,
  XAmzTargetAmazonSSMGetParameterHistoryHandler,
  XAmzTargetAmazonSSMGetParametersByPathHandler,
  XAmzTargetAmazonSSMGetParametersHandler,
  XAmzTargetAmazonSSMGetPatchBaselineForPatchGroupHandler,
  XAmzTargetAmazonSSMGetPatchBaselineHandler,
  XAmzTargetAmazonSSMGetResourcePoliciesHandler,
  XAmzTargetAmazonSSMGetServiceSettingHandler,
  XAmzTargetAmazonSSMLabelParameterVersionHandler,
  XAmzTargetAmazonSSMListAssociationsHandler,
  XAmzTargetAmazonSSMListAssociationVersionsHandler,
  XAmzTargetAmazonSSMListCommandInvocationsHandler,
  XAmzTargetAmazonSSMListCommandsHandler,
  XAmzTargetAmazonSSMListComplianceItemsHandler,
  XAmzTargetAmazonSSMListComplianceSummariesHandler,
  XAmzTargetAmazonSSMListDocumentMetadataHistoryHandler,
  XAmzTargetAmazonSSMListDocumentsHandler,
  XAmzTargetAmazonSSMListDocumentVersionsHandler,
  XAmzTargetAmazonSSMListInventoryEntriesHandler,
  XAmzTargetAmazonSSMListOpsItemEventsHandler,
  XAmzTargetAmazonSSMListOpsItemRelatedItemsHandler,
  XAmzTargetAmazonSSMListOpsMetadataHandler,
  XAmzTargetAmazonSSMListResourceComplianceSummariesHandler,
  XAmzTargetAmazonSSMListResourceDataSyncHandler,
  XAmzTargetAmazonSSMListTagsForResourceHandler,
  XAmzTargetAmazonSSMModifyDocumentPermissionHandler,
  XAmzTargetAmazonSSMPutComplianceItemsHandler,
  XAmzTargetAmazonSSMPutInventoryHandler,
  XAmzTargetAmazonSSMPutParameterHandler,
  XAmzTargetAmazonSSMPutResourcePolicyHandler,
  XAmzTargetAmazonSSMRegisterDefaultPatchBaselineHandler,
  XAmzTargetAmazonSSMRegisterPatchBaselineForPatchGroupHandler,
  XAmzTargetAmazonSSMRegisterTargetWithMaintenanceWindowHandler,
  XAmzTargetAmazonSSMRegisterTaskWithMaintenanceWindowHandler,
  XAmzTargetAmazonSSMRemoveTagsFromResourceHandler,
  XAmzTargetAmazonSSMResetServiceSettingHandler,
  XAmzTargetAmazonSSMResumeSessionHandler,
  XAmzTargetAmazonSSMSendAutomationSignalHandler,
  XAmzTargetAmazonSSMSendCommandHandler,
  XAmzTargetAmazonSSMStartAssociationsOnceHandler,
  XAmzTargetAmazonSSMStartAutomationExecutionHandler,
  XAmzTargetAmazonSSMStartChangeRequestExecutionHandler,
  XAmzTargetAmazonSSMStartSessionHandler,
  XAmzTargetAmazonSSMStopAutomationExecutionHandler,
  XAmzTargetAmazonSSMTerminateSessionHandler,
  XAmzTargetAmazonSSMUnlabelParameterVersionHandler,
  XAmzTargetAmazonSSMUpdateAssociationHandler,
  XAmzTargetAmazonSSMUpdateAssociationStatusHandler,
  XAmzTargetAmazonSSMUpdateDocumentDefaultVersionHandler,
  XAmzTargetAmazonSSMUpdateDocumentHandler,
  XAmzTargetAmazonSSMUpdateDocumentMetadataHandler,
  XAmzTargetAmazonSSMUpdateMaintenanceWindowHandler,
  XAmzTargetAmazonSSMUpdateMaintenanceWindowTargetHandler,
  XAmzTargetAmazonSSMUpdateMaintenanceWindowTaskHandler,
  XAmzTargetAmazonSSMUpdateManagedInstanceRoleHandler,
  XAmzTargetAmazonSSMUpdateOpsItemHandler,
  XAmzTargetAmazonSSMUpdateOpsMetadataHandler,
  XAmzTargetAmazonSSMUpdatePatchBaselineHandler,
  XAmzTargetAmazonSSMUpdateResourceDataSyncHandler,
  XAmzTargetAmazonSSMUpdateServiceSettingHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAmazonSSMAddTagsToResourceHandler)
  .route('/', XAmzTargetAmazonSSMAssociateOpsItemRelatedItemHandler)
  .route('/', XAmzTargetAmazonSSMCancelCommandHandler)
  .route('/', XAmzTargetAmazonSSMCancelMaintenanceWindowExecutionHandler)
  .route('/', XAmzTargetAmazonSSMCreateActivationHandler)
  .route('/', XAmzTargetAmazonSSMCreateAssociationHandler)
  .route('/', XAmzTargetAmazonSSMCreateAssociationBatchHandler)
  .route('/', XAmzTargetAmazonSSMCreateDocumentHandler)
  .route('/', XAmzTargetAmazonSSMCreateMaintenanceWindowHandler)
  .route('/', XAmzTargetAmazonSSMCreateOpsItemHandler)
  .route('/', XAmzTargetAmazonSSMCreateOpsMetadataHandler)
  .route('/', XAmzTargetAmazonSSMCreatePatchBaselineHandler)
  .route('/', XAmzTargetAmazonSSMCreateResourceDataSyncHandler)
  .route('/', XAmzTargetAmazonSSMDeleteActivationHandler)
  .route('/', XAmzTargetAmazonSSMDeleteAssociationHandler)
  .route('/', XAmzTargetAmazonSSMDeleteDocumentHandler)
  .route('/', XAmzTargetAmazonSSMDeleteInventoryHandler)
  .route('/', XAmzTargetAmazonSSMDeleteMaintenanceWindowHandler)
  .route('/', XAmzTargetAmazonSSMDeleteOpsMetadataHandler)
  .route('/', XAmzTargetAmazonSSMDeleteParameterHandler)
  .route('/', XAmzTargetAmazonSSMDeleteParametersHandler)
  .route('/', XAmzTargetAmazonSSMDeletePatchBaselineHandler)
  .route('/', XAmzTargetAmazonSSMDeleteResourceDataSyncHandler)
  .route('/', XAmzTargetAmazonSSMDeleteResourcePolicyHandler)
  .route('/', XAmzTargetAmazonSSMDeregisterManagedInstanceHandler)
  .route('/', XAmzTargetAmazonSSMDeregisterPatchBaselineForPatchGroupHandler)
  .route('/', XAmzTargetAmazonSSMDeregisterTargetFromMaintenanceWindowHandler)
  .route('/', XAmzTargetAmazonSSMDeregisterTaskFromMaintenanceWindowHandler)
  .route('/', XAmzTargetAmazonSSMDescribeActivationsHandler)
  .route('/', XAmzTargetAmazonSSMDescribeAssociationHandler)
  .route('/', XAmzTargetAmazonSSMDescribeAssociationExecutionTargetsHandler)
  .route('/', XAmzTargetAmazonSSMDescribeAssociationExecutionsHandler)
  .route('/', XAmzTargetAmazonSSMDescribeAutomationExecutionsHandler)
  .route('/', XAmzTargetAmazonSSMDescribeAutomationStepExecutionsHandler)
  .route('/', XAmzTargetAmazonSSMDescribeAvailablePatchesHandler)
  .route('/', XAmzTargetAmazonSSMDescribeDocumentHandler)
  .route('/', XAmzTargetAmazonSSMDescribeDocumentPermissionHandler)
  .route('/', XAmzTargetAmazonSSMDescribeEffectiveInstanceAssociationsHandler)
  .route('/', XAmzTargetAmazonSSMDescribeEffectivePatchesForPatchBaselineHandler)
  .route('/', XAmzTargetAmazonSSMDescribeInstanceAssociationsStatusHandler)
  .route('/', XAmzTargetAmazonSSMDescribeInstanceInformationHandler)
  .route('/', XAmzTargetAmazonSSMDescribeInstancePatchStatesHandler)
  .route('/', XAmzTargetAmazonSSMDescribeInstancePatchStatesForPatchGroupHandler)
  .route('/', XAmzTargetAmazonSSMDescribeInstancePatchesHandler)
  .route('/', XAmzTargetAmazonSSMDescribeInventoryDeletionsHandler)
  .route('/', XAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTaskInvocationsHandler)
  .route('/', XAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTasksHandler)
  .route('/', XAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionsHandler)
  .route('/', XAmzTargetAmazonSSMDescribeMaintenanceWindowScheduleHandler)
  .route('/', XAmzTargetAmazonSSMDescribeMaintenanceWindowTargetsHandler)
  .route('/', XAmzTargetAmazonSSMDescribeMaintenanceWindowTasksHandler)
  .route('/', XAmzTargetAmazonSSMDescribeMaintenanceWindowsHandler)
  .route('/', XAmzTargetAmazonSSMDescribeMaintenanceWindowsForTargetHandler)
  .route('/', XAmzTargetAmazonSSMDescribeOpsItemsHandler)
  .route('/', XAmzTargetAmazonSSMDescribeParametersHandler)
  .route('/', XAmzTargetAmazonSSMDescribePatchBaselinesHandler)
  .route('/', XAmzTargetAmazonSSMDescribePatchGroupStateHandler)
  .route('/', XAmzTargetAmazonSSMDescribePatchGroupsHandler)
  .route('/', XAmzTargetAmazonSSMDescribePatchPropertiesHandler)
  .route('/', XAmzTargetAmazonSSMDescribeSessionsHandler)
  .route('/', XAmzTargetAmazonSSMDisassociateOpsItemRelatedItemHandler)
  .route('/', XAmzTargetAmazonSSMGetAutomationExecutionHandler)
  .route('/', XAmzTargetAmazonSSMGetCalendarStateHandler)
  .route('/', XAmzTargetAmazonSSMGetCommandInvocationHandler)
  .route('/', XAmzTargetAmazonSSMGetConnectionStatusHandler)
  .route('/', XAmzTargetAmazonSSMGetDefaultPatchBaselineHandler)
  .route('/', XAmzTargetAmazonSSMGetDeployablePatchSnapshotForInstanceHandler)
  .route('/', XAmzTargetAmazonSSMGetDocumentHandler)
  .route('/', XAmzTargetAmazonSSMGetInventoryHandler)
  .route('/', XAmzTargetAmazonSSMGetInventorySchemaHandler)
  .route('/', XAmzTargetAmazonSSMGetMaintenanceWindowHandler)
  .route('/', XAmzTargetAmazonSSMGetMaintenanceWindowExecutionHandler)
  .route('/', XAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskHandler)
  .route('/', XAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskInvocationHandler)
  .route('/', XAmzTargetAmazonSSMGetMaintenanceWindowTaskHandler)
  .route('/', XAmzTargetAmazonSSMGetOpsItemHandler)
  .route('/', XAmzTargetAmazonSSMGetOpsMetadataHandler)
  .route('/', XAmzTargetAmazonSSMGetOpsSummaryHandler)
  .route('/', XAmzTargetAmazonSSMGetParameterHandler)
  .route('/', XAmzTargetAmazonSSMGetParameterHistoryHandler)
  .route('/', XAmzTargetAmazonSSMGetParametersHandler)
  .route('/', XAmzTargetAmazonSSMGetParametersByPathHandler)
  .route('/', XAmzTargetAmazonSSMGetPatchBaselineHandler)
  .route('/', XAmzTargetAmazonSSMGetPatchBaselineForPatchGroupHandler)
  .route('/', XAmzTargetAmazonSSMGetResourcePoliciesHandler)
  .route('/', XAmzTargetAmazonSSMGetServiceSettingHandler)
  .route('/', XAmzTargetAmazonSSMLabelParameterVersionHandler)
  .route('/', XAmzTargetAmazonSSMListAssociationVersionsHandler)
  .route('/', XAmzTargetAmazonSSMListAssociationsHandler)
  .route('/', XAmzTargetAmazonSSMListCommandInvocationsHandler)
  .route('/', XAmzTargetAmazonSSMListCommandsHandler)
  .route('/', XAmzTargetAmazonSSMListComplianceItemsHandler)
  .route('/', XAmzTargetAmazonSSMListComplianceSummariesHandler)
  .route('/', XAmzTargetAmazonSSMListDocumentMetadataHistoryHandler)
  .route('/', XAmzTargetAmazonSSMListDocumentVersionsHandler)
  .route('/', XAmzTargetAmazonSSMListDocumentsHandler)
  .route('/', XAmzTargetAmazonSSMListInventoryEntriesHandler)
  .route('/', XAmzTargetAmazonSSMListOpsItemEventsHandler)
  .route('/', XAmzTargetAmazonSSMListOpsItemRelatedItemsHandler)
  .route('/', XAmzTargetAmazonSSMListOpsMetadataHandler)
  .route('/', XAmzTargetAmazonSSMListResourceComplianceSummariesHandler)
  .route('/', XAmzTargetAmazonSSMListResourceDataSyncHandler)
  .route('/', XAmzTargetAmazonSSMListTagsForResourceHandler)
  .route('/', XAmzTargetAmazonSSMModifyDocumentPermissionHandler)
  .route('/', XAmzTargetAmazonSSMPutComplianceItemsHandler)
  .route('/', XAmzTargetAmazonSSMPutInventoryHandler)
  .route('/', XAmzTargetAmazonSSMPutParameterHandler)
  .route('/', XAmzTargetAmazonSSMPutResourcePolicyHandler)
  .route('/', XAmzTargetAmazonSSMRegisterDefaultPatchBaselineHandler)
  .route('/', XAmzTargetAmazonSSMRegisterPatchBaselineForPatchGroupHandler)
  .route('/', XAmzTargetAmazonSSMRegisterTargetWithMaintenanceWindowHandler)
  .route('/', XAmzTargetAmazonSSMRegisterTaskWithMaintenanceWindowHandler)
  .route('/', XAmzTargetAmazonSSMRemoveTagsFromResourceHandler)
  .route('/', XAmzTargetAmazonSSMResetServiceSettingHandler)
  .route('/', XAmzTargetAmazonSSMResumeSessionHandler)
  .route('/', XAmzTargetAmazonSSMSendAutomationSignalHandler)
  .route('/', XAmzTargetAmazonSSMSendCommandHandler)
  .route('/', XAmzTargetAmazonSSMStartAssociationsOnceHandler)
  .route('/', XAmzTargetAmazonSSMStartAutomationExecutionHandler)
  .route('/', XAmzTargetAmazonSSMStartChangeRequestExecutionHandler)
  .route('/', XAmzTargetAmazonSSMStartSessionHandler)
  .route('/', XAmzTargetAmazonSSMStopAutomationExecutionHandler)
  .route('/', XAmzTargetAmazonSSMTerminateSessionHandler)
  .route('/', XAmzTargetAmazonSSMUnlabelParameterVersionHandler)
  .route('/', XAmzTargetAmazonSSMUpdateAssociationHandler)
  .route('/', XAmzTargetAmazonSSMUpdateAssociationStatusHandler)
  .route('/', XAmzTargetAmazonSSMUpdateDocumentHandler)
  .route('/', XAmzTargetAmazonSSMUpdateDocumentDefaultVersionHandler)
  .route('/', XAmzTargetAmazonSSMUpdateDocumentMetadataHandler)
  .route('/', XAmzTargetAmazonSSMUpdateMaintenanceWindowHandler)
  .route('/', XAmzTargetAmazonSSMUpdateMaintenanceWindowTargetHandler)
  .route('/', XAmzTargetAmazonSSMUpdateMaintenanceWindowTaskHandler)
  .route('/', XAmzTargetAmazonSSMUpdateManagedInstanceRoleHandler)
  .route('/', XAmzTargetAmazonSSMUpdateOpsItemHandler)
  .route('/', XAmzTargetAmazonSSMUpdateOpsMetadataHandler)
  .route('/', XAmzTargetAmazonSSMUpdatePatchBaselineHandler)
  .route('/', XAmzTargetAmazonSSMUpdateResourceDataSyncHandler)
  .route('/', XAmzTargetAmazonSSMUpdateServiceSettingHandler)

export default app
