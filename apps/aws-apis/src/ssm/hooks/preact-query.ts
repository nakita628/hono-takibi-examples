import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAmazonSSMAddTagsToResourceKey() {
  return ['#X-Amz-Target=AmazonSSM.AddTagsToResource'] as const
}

export function getXAmzTargetAmazonSSMAssociateOpsItemRelatedItemKey() {
  return ['#X-Amz-Target=AmazonSSM.AssociateOpsItemRelatedItem'] as const
}

export function getXAmzTargetAmazonSSMCancelCommandKey() {
  return ['#X-Amz-Target=AmazonSSM.CancelCommand'] as const
}

export function getXAmzTargetAmazonSSMCancelMaintenanceWindowExecutionKey() {
  return ['#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution'] as const
}

export function getXAmzTargetAmazonSSMCreateActivationKey() {
  return ['#X-Amz-Target=AmazonSSM.CreateActivation'] as const
}

export function getXAmzTargetAmazonSSMCreateAssociationKey() {
  return ['#X-Amz-Target=AmazonSSM.CreateAssociation'] as const
}

export function getXAmzTargetAmazonSSMCreateAssociationBatchKey() {
  return ['#X-Amz-Target=AmazonSSM.CreateAssociationBatch'] as const
}

export function getXAmzTargetAmazonSSMCreateDocumentKey() {
  return ['#X-Amz-Target=AmazonSSM.CreateDocument'] as const
}

export function getXAmzTargetAmazonSSMCreateMaintenanceWindowKey() {
  return ['#X-Amz-Target=AmazonSSM.CreateMaintenanceWindow'] as const
}

export function getXAmzTargetAmazonSSMCreateOpsItemKey() {
  return ['#X-Amz-Target=AmazonSSM.CreateOpsItem'] as const
}

export function getXAmzTargetAmazonSSMCreateOpsMetadataKey() {
  return ['#X-Amz-Target=AmazonSSM.CreateOpsMetadata'] as const
}

export function getXAmzTargetAmazonSSMCreatePatchBaselineKey() {
  return ['#X-Amz-Target=AmazonSSM.CreatePatchBaseline'] as const
}

export function getXAmzTargetAmazonSSMCreateResourceDataSyncKey() {
  return ['#X-Amz-Target=AmazonSSM.CreateResourceDataSync'] as const
}

export function getXAmzTargetAmazonSSMDeleteActivationKey() {
  return ['#X-Amz-Target=AmazonSSM.DeleteActivation'] as const
}

export function getXAmzTargetAmazonSSMDeleteAssociationKey() {
  return ['#X-Amz-Target=AmazonSSM.DeleteAssociation'] as const
}

export function getXAmzTargetAmazonSSMDeleteDocumentKey() {
  return ['#X-Amz-Target=AmazonSSM.DeleteDocument'] as const
}

export function getXAmzTargetAmazonSSMDeleteInventoryKey() {
  return ['#X-Amz-Target=AmazonSSM.DeleteInventory'] as const
}

export function getXAmzTargetAmazonSSMDeleteMaintenanceWindowKey() {
  return ['#X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow'] as const
}

export function getXAmzTargetAmazonSSMDeleteOpsMetadataKey() {
  return ['#X-Amz-Target=AmazonSSM.DeleteOpsMetadata'] as const
}

export function getXAmzTargetAmazonSSMDeleteParameterKey() {
  return ['#X-Amz-Target=AmazonSSM.DeleteParameter'] as const
}

export function getXAmzTargetAmazonSSMDeleteParametersKey() {
  return ['#X-Amz-Target=AmazonSSM.DeleteParameters'] as const
}

export function getXAmzTargetAmazonSSMDeletePatchBaselineKey() {
  return ['#X-Amz-Target=AmazonSSM.DeletePatchBaseline'] as const
}

export function getXAmzTargetAmazonSSMDeleteResourceDataSyncKey() {
  return ['#X-Amz-Target=AmazonSSM.DeleteResourceDataSync'] as const
}

export function getXAmzTargetAmazonSSMDeleteResourcePolicyKey() {
  return ['#X-Amz-Target=AmazonSSM.DeleteResourcePolicy'] as const
}

export function getXAmzTargetAmazonSSMDeregisterManagedInstanceKey() {
  return ['#X-Amz-Target=AmazonSSM.DeregisterManagedInstance'] as const
}

export function getXAmzTargetAmazonSSMDeregisterPatchBaselineForPatchGroupKey() {
  return ['#X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup'] as const
}

export function getXAmzTargetAmazonSSMDeregisterTargetFromMaintenanceWindowKey() {
  return ['#X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow'] as const
}

export function getXAmzTargetAmazonSSMDeregisterTaskFromMaintenanceWindowKey() {
  return ['#X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow'] as const
}

export function getXAmzTargetAmazonSSMDescribeActivationsKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeActivations'] as const
}

export function getXAmzTargetAmazonSSMDescribeAssociationKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeAssociation'] as const
}

export function getXAmzTargetAmazonSSMDescribeAssociationExecutionTargetsKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets'] as const
}

export function getXAmzTargetAmazonSSMDescribeAssociationExecutionsKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions'] as const
}

export function getXAmzTargetAmazonSSMDescribeAutomationExecutionsKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions'] as const
}

export function getXAmzTargetAmazonSSMDescribeAutomationStepExecutionsKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions'] as const
}

export function getXAmzTargetAmazonSSMDescribeAvailablePatchesKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeAvailablePatches'] as const
}

export function getXAmzTargetAmazonSSMDescribeDocumentKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeDocument'] as const
}

export function getXAmzTargetAmazonSSMDescribeDocumentPermissionKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeDocumentPermission'] as const
}

export function getXAmzTargetAmazonSSMDescribeEffectiveInstanceAssociationsKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations'] as const
}

export function getXAmzTargetAmazonSSMDescribeEffectivePatchesForPatchBaselineKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline'] as const
}

export function getXAmzTargetAmazonSSMDescribeInstanceAssociationsStatusKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus'] as const
}

export function getXAmzTargetAmazonSSMDescribeInstanceInformationKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeInstanceInformation'] as const
}

export function getXAmzTargetAmazonSSMDescribeInstancePatchStatesKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates'] as const
}

export function getXAmzTargetAmazonSSMDescribeInstancePatchStatesForPatchGroupKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup'] as const
}

export function getXAmzTargetAmazonSSMDescribeInstancePatchesKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeInstancePatches'] as const
}

export function getXAmzTargetAmazonSSMDescribeInventoryDeletionsKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions'] as const
}

export function getXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTaskInvocationsKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations'] as const
}

export function getXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTasksKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks'] as const
}

export function getXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionsKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions'] as const
}

export function getXAmzTargetAmazonSSMDescribeMaintenanceWindowScheduleKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule'] as const
}

export function getXAmzTargetAmazonSSMDescribeMaintenanceWindowTargetsKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets'] as const
}

export function getXAmzTargetAmazonSSMDescribeMaintenanceWindowTasksKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks'] as const
}

export function getXAmzTargetAmazonSSMDescribeMaintenanceWindowsKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows'] as const
}

export function getXAmzTargetAmazonSSMDescribeMaintenanceWindowsForTargetKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget'] as const
}

export function getXAmzTargetAmazonSSMDescribeOpsItemsKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeOpsItems'] as const
}

export function getXAmzTargetAmazonSSMDescribeParametersKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeParameters'] as const
}

export function getXAmzTargetAmazonSSMDescribePatchBaselinesKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribePatchBaselines'] as const
}

export function getXAmzTargetAmazonSSMDescribePatchGroupStateKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribePatchGroupState'] as const
}

export function getXAmzTargetAmazonSSMDescribePatchGroupsKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribePatchGroups'] as const
}

export function getXAmzTargetAmazonSSMDescribePatchPropertiesKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribePatchProperties'] as const
}

export function getXAmzTargetAmazonSSMDescribeSessionsKey() {
  return ['#X-Amz-Target=AmazonSSM.DescribeSessions'] as const
}

export function getXAmzTargetAmazonSSMDisassociateOpsItemRelatedItemKey() {
  return ['#X-Amz-Target=AmazonSSM.DisassociateOpsItemRelatedItem'] as const
}

export function getXAmzTargetAmazonSSMGetAutomationExecutionKey() {
  return ['#X-Amz-Target=AmazonSSM.GetAutomationExecution'] as const
}

export function getXAmzTargetAmazonSSMGetCalendarStateKey() {
  return ['#X-Amz-Target=AmazonSSM.GetCalendarState'] as const
}

export function getXAmzTargetAmazonSSMGetCommandInvocationKey() {
  return ['#X-Amz-Target=AmazonSSM.GetCommandInvocation'] as const
}

export function getXAmzTargetAmazonSSMGetConnectionStatusKey() {
  return ['#X-Amz-Target=AmazonSSM.GetConnectionStatus'] as const
}

export function getXAmzTargetAmazonSSMGetDefaultPatchBaselineKey() {
  return ['#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline'] as const
}

export function getXAmzTargetAmazonSSMGetDeployablePatchSnapshotForInstanceKey() {
  return ['#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance'] as const
}

export function getXAmzTargetAmazonSSMGetDocumentKey() {
  return ['#X-Amz-Target=AmazonSSM.GetDocument'] as const
}

export function getXAmzTargetAmazonSSMGetInventoryKey() {
  return ['#X-Amz-Target=AmazonSSM.GetInventory'] as const
}

export function getXAmzTargetAmazonSSMGetInventorySchemaKey() {
  return ['#X-Amz-Target=AmazonSSM.GetInventorySchema'] as const
}

export function getXAmzTargetAmazonSSMGetMaintenanceWindowKey() {
  return ['#X-Amz-Target=AmazonSSM.GetMaintenanceWindow'] as const
}

export function getXAmzTargetAmazonSSMGetMaintenanceWindowExecutionKey() {
  return ['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution'] as const
}

export function getXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskKey() {
  return ['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask'] as const
}

export function getXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskInvocationKey() {
  return ['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation'] as const
}

export function getXAmzTargetAmazonSSMGetMaintenanceWindowTaskKey() {
  return ['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask'] as const
}

export function getXAmzTargetAmazonSSMGetOpsItemKey() {
  return ['#X-Amz-Target=AmazonSSM.GetOpsItem'] as const
}

export function getXAmzTargetAmazonSSMGetOpsMetadataKey() {
  return ['#X-Amz-Target=AmazonSSM.GetOpsMetadata'] as const
}

export function getXAmzTargetAmazonSSMGetOpsSummaryKey() {
  return ['#X-Amz-Target=AmazonSSM.GetOpsSummary'] as const
}

export function getXAmzTargetAmazonSSMGetParameterKey() {
  return ['#X-Amz-Target=AmazonSSM.GetParameter'] as const
}

export function getXAmzTargetAmazonSSMGetParameterHistoryKey() {
  return ['#X-Amz-Target=AmazonSSM.GetParameterHistory'] as const
}

export function getXAmzTargetAmazonSSMGetParametersKey() {
  return ['#X-Amz-Target=AmazonSSM.GetParameters'] as const
}

export function getXAmzTargetAmazonSSMGetParametersByPathKey() {
  return ['#X-Amz-Target=AmazonSSM.GetParametersByPath'] as const
}

export function getXAmzTargetAmazonSSMGetPatchBaselineKey() {
  return ['#X-Amz-Target=AmazonSSM.GetPatchBaseline'] as const
}

export function getXAmzTargetAmazonSSMGetPatchBaselineForPatchGroupKey() {
  return ['#X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup'] as const
}

export function getXAmzTargetAmazonSSMGetResourcePoliciesKey() {
  return ['#X-Amz-Target=AmazonSSM.GetResourcePolicies'] as const
}

export function getXAmzTargetAmazonSSMGetServiceSettingKey() {
  return ['#X-Amz-Target=AmazonSSM.GetServiceSetting'] as const
}

export function getXAmzTargetAmazonSSMLabelParameterVersionKey() {
  return ['#X-Amz-Target=AmazonSSM.LabelParameterVersion'] as const
}

export function getXAmzTargetAmazonSSMListAssociationVersionsKey() {
  return ['#X-Amz-Target=AmazonSSM.ListAssociationVersions'] as const
}

export function getXAmzTargetAmazonSSMListAssociationsKey() {
  return ['#X-Amz-Target=AmazonSSM.ListAssociations'] as const
}

export function getXAmzTargetAmazonSSMListCommandInvocationsKey() {
  return ['#X-Amz-Target=AmazonSSM.ListCommandInvocations'] as const
}

export function getXAmzTargetAmazonSSMListCommandsKey() {
  return ['#X-Amz-Target=AmazonSSM.ListCommands'] as const
}

export function getXAmzTargetAmazonSSMListComplianceItemsKey() {
  return ['#X-Amz-Target=AmazonSSM.ListComplianceItems'] as const
}

export function getXAmzTargetAmazonSSMListComplianceSummariesKey() {
  return ['#X-Amz-Target=AmazonSSM.ListComplianceSummaries'] as const
}

export function getXAmzTargetAmazonSSMListDocumentMetadataHistoryKey() {
  return ['#X-Amz-Target=AmazonSSM.ListDocumentMetadataHistory'] as const
}

export function getXAmzTargetAmazonSSMListDocumentVersionsKey() {
  return ['#X-Amz-Target=AmazonSSM.ListDocumentVersions'] as const
}

export function getXAmzTargetAmazonSSMListDocumentsKey() {
  return ['#X-Amz-Target=AmazonSSM.ListDocuments'] as const
}

export function getXAmzTargetAmazonSSMListInventoryEntriesKey() {
  return ['#X-Amz-Target=AmazonSSM.ListInventoryEntries'] as const
}

export function getXAmzTargetAmazonSSMListOpsItemEventsKey() {
  return ['#X-Amz-Target=AmazonSSM.ListOpsItemEvents'] as const
}

export function getXAmzTargetAmazonSSMListOpsItemRelatedItemsKey() {
  return ['#X-Amz-Target=AmazonSSM.ListOpsItemRelatedItems'] as const
}

export function getXAmzTargetAmazonSSMListOpsMetadataKey() {
  return ['#X-Amz-Target=AmazonSSM.ListOpsMetadata'] as const
}

export function getXAmzTargetAmazonSSMListResourceComplianceSummariesKey() {
  return ['#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries'] as const
}

export function getXAmzTargetAmazonSSMListResourceDataSyncKey() {
  return ['#X-Amz-Target=AmazonSSM.ListResourceDataSync'] as const
}

export function getXAmzTargetAmazonSSMListTagsForResourceKey() {
  return ['#X-Amz-Target=AmazonSSM.ListTagsForResource'] as const
}

export function getXAmzTargetAmazonSSMModifyDocumentPermissionKey() {
  return ['#X-Amz-Target=AmazonSSM.ModifyDocumentPermission'] as const
}

export function getXAmzTargetAmazonSSMPutComplianceItemsKey() {
  return ['#X-Amz-Target=AmazonSSM.PutComplianceItems'] as const
}

export function getXAmzTargetAmazonSSMPutInventoryKey() {
  return ['#X-Amz-Target=AmazonSSM.PutInventory'] as const
}

export function getXAmzTargetAmazonSSMPutParameterKey() {
  return ['#X-Amz-Target=AmazonSSM.PutParameter'] as const
}

export function getXAmzTargetAmazonSSMPutResourcePolicyKey() {
  return ['#X-Amz-Target=AmazonSSM.PutResourcePolicy'] as const
}

export function getXAmzTargetAmazonSSMRegisterDefaultPatchBaselineKey() {
  return ['#X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline'] as const
}

export function getXAmzTargetAmazonSSMRegisterPatchBaselineForPatchGroupKey() {
  return ['#X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup'] as const
}

export function getXAmzTargetAmazonSSMRegisterTargetWithMaintenanceWindowKey() {
  return ['#X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow'] as const
}

export function getXAmzTargetAmazonSSMRegisterTaskWithMaintenanceWindowKey() {
  return ['#X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow'] as const
}

export function getXAmzTargetAmazonSSMRemoveTagsFromResourceKey() {
  return ['#X-Amz-Target=AmazonSSM.RemoveTagsFromResource'] as const
}

export function getXAmzTargetAmazonSSMResetServiceSettingKey() {
  return ['#X-Amz-Target=AmazonSSM.ResetServiceSetting'] as const
}

export function getXAmzTargetAmazonSSMResumeSessionKey() {
  return ['#X-Amz-Target=AmazonSSM.ResumeSession'] as const
}

export function getXAmzTargetAmazonSSMSendAutomationSignalKey() {
  return ['#X-Amz-Target=AmazonSSM.SendAutomationSignal'] as const
}

export function getXAmzTargetAmazonSSMSendCommandKey() {
  return ['#X-Amz-Target=AmazonSSM.SendCommand'] as const
}

export function getXAmzTargetAmazonSSMStartAssociationsOnceKey() {
  return ['#X-Amz-Target=AmazonSSM.StartAssociationsOnce'] as const
}

export function getXAmzTargetAmazonSSMStartAutomationExecutionKey() {
  return ['#X-Amz-Target=AmazonSSM.StartAutomationExecution'] as const
}

export function getXAmzTargetAmazonSSMStartChangeRequestExecutionKey() {
  return ['#X-Amz-Target=AmazonSSM.StartChangeRequestExecution'] as const
}

export function getXAmzTargetAmazonSSMStartSessionKey() {
  return ['#X-Amz-Target=AmazonSSM.StartSession'] as const
}

export function getXAmzTargetAmazonSSMStopAutomationExecutionKey() {
  return ['#X-Amz-Target=AmazonSSM.StopAutomationExecution'] as const
}

export function getXAmzTargetAmazonSSMTerminateSessionKey() {
  return ['#X-Amz-Target=AmazonSSM.TerminateSession'] as const
}

export function getXAmzTargetAmazonSSMUnlabelParameterVersionKey() {
  return ['#X-Amz-Target=AmazonSSM.UnlabelParameterVersion'] as const
}

export function getXAmzTargetAmazonSSMUpdateAssociationKey() {
  return ['#X-Amz-Target=AmazonSSM.UpdateAssociation'] as const
}

export function getXAmzTargetAmazonSSMUpdateAssociationStatusKey() {
  return ['#X-Amz-Target=AmazonSSM.UpdateAssociationStatus'] as const
}

export function getXAmzTargetAmazonSSMUpdateDocumentKey() {
  return ['#X-Amz-Target=AmazonSSM.UpdateDocument'] as const
}

export function getXAmzTargetAmazonSSMUpdateDocumentDefaultVersionKey() {
  return ['#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion'] as const
}

export function getXAmzTargetAmazonSSMUpdateDocumentMetadataKey() {
  return ['#X-Amz-Target=AmazonSSM.UpdateDocumentMetadata'] as const
}

export function getXAmzTargetAmazonSSMUpdateMaintenanceWindowKey() {
  return ['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow'] as const
}

export function getXAmzTargetAmazonSSMUpdateMaintenanceWindowTargetKey() {
  return ['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget'] as const
}

export function getXAmzTargetAmazonSSMUpdateMaintenanceWindowTaskKey() {
  return ['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask'] as const
}

export function getXAmzTargetAmazonSSMUpdateManagedInstanceRoleKey() {
  return ['#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole'] as const
}

export function getXAmzTargetAmazonSSMUpdateOpsItemKey() {
  return ['#X-Amz-Target=AmazonSSM.UpdateOpsItem'] as const
}

export function getXAmzTargetAmazonSSMUpdateOpsMetadataKey() {
  return ['#X-Amz-Target=AmazonSSM.UpdateOpsMetadata'] as const
}

export function getXAmzTargetAmazonSSMUpdatePatchBaselineKey() {
  return ['#X-Amz-Target=AmazonSSM.UpdatePatchBaseline'] as const
}

export function getXAmzTargetAmazonSSMUpdateResourceDataSyncKey() {
  return ['#X-Amz-Target=AmazonSSM.UpdateResourceDataSync'] as const
}

export function getXAmzTargetAmazonSSMUpdateServiceSettingKey() {
  return ['#X-Amz-Target=AmazonSSM.UpdateServiceSetting'] as const
}

export function getPostXAmzTargetAmazonSSMAddTagsToResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.AddTagsToResource',
    '/#X-Amz-Target=AmazonSSM.AddTagsToResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMAddTagsToResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.AddTagsToResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.AddTagsToResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMAddTagsToResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.AddTagsToResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.AddTagsToResource'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMAddTagsToResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.AddTagsToResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.AddTagsToResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMAddTagsToResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMAssociateOpsItemRelatedItemMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.AssociateOpsItemRelatedItem',
    '/#X-Amz-Target=AmazonSSM.AssociateOpsItemRelatedItem',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMAssociateOpsItemRelatedItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.AssociateOpsItemRelatedItem']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.AssociateOpsItemRelatedItem']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMAssociateOpsItemRelatedItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.AssociateOpsItemRelatedItem']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.AssociateOpsItemRelatedItem'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMAssociateOpsItemRelatedItem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.AssociateOpsItemRelatedItem']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.AssociateOpsItemRelatedItem']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMAssociateOpsItemRelatedItemMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMCancelCommandMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.CancelCommand',
    '/#X-Amz-Target=AmazonSSM.CancelCommand',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMCancelCommandMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.CancelCommand']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CancelCommand']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMCancelCommandMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CancelCommand']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.CancelCommand'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMCancelCommand<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.CancelCommand']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CancelCommand']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMCancelCommandMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMCancelMaintenanceWindowExecutionMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution',
    '/#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMCancelMaintenanceWindowExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMCancelMaintenanceWindowExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMCancelMaintenanceWindowExecution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonSSMCancelMaintenanceWindowExecutionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMCreateActivationMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.CreateActivation',
    '/#X-Amz-Target=AmazonSSM.CreateActivation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMCreateActivationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateActivation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateActivation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMCreateActivationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateActivation']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.CreateActivation'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMCreateActivation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateActivation']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateActivation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMCreateActivationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMCreateAssociationMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.CreateAssociation',
    '/#X-Amz-Target=AmazonSSM.CreateAssociation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMCreateAssociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateAssociation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateAssociation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMCreateAssociationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateAssociation']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.CreateAssociation'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMCreateAssociation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateAssociation']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateAssociation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMCreateAssociationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMCreateAssociationBatchMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.CreateAssociationBatch',
    '/#X-Amz-Target=AmazonSSM.CreateAssociationBatch',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMCreateAssociationBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateAssociationBatch']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateAssociationBatch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMCreateAssociationBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.CreateAssociationBatch']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.CreateAssociationBatch'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMCreateAssociationBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.CreateAssociationBatch']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.CreateAssociationBatch']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMCreateAssociationBatchMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMCreateDocumentMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.CreateDocument',
    '/#X-Amz-Target=AmazonSSM.CreateDocument',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMCreateDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateDocument']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateDocument']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMCreateDocumentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateDocument']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.CreateDocument'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMCreateDocument<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateDocument']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateDocument']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMCreateDocumentMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMCreateMaintenanceWindowMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.CreateMaintenanceWindow',
    '/#X-Amz-Target=AmazonSSM.CreateMaintenanceWindow',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMCreateMaintenanceWindowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateMaintenanceWindow']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateMaintenanceWindow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMCreateMaintenanceWindowMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.CreateMaintenanceWindow']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.CreateMaintenanceWindow'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMCreateMaintenanceWindow<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.CreateMaintenanceWindow']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.CreateMaintenanceWindow']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMCreateMaintenanceWindowMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMCreateOpsItemMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.CreateOpsItem',
    '/#X-Amz-Target=AmazonSSM.CreateOpsItem',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMCreateOpsItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateOpsItem']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateOpsItem']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMCreateOpsItemMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateOpsItem']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.CreateOpsItem'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMCreateOpsItem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateOpsItem']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateOpsItem']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMCreateOpsItemMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMCreateOpsMetadataMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.CreateOpsMetadata',
    '/#X-Amz-Target=AmazonSSM.CreateOpsMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMCreateOpsMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateOpsMetadata']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateOpsMetadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMCreateOpsMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateOpsMetadata']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.CreateOpsMetadata'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMCreateOpsMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateOpsMetadata']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateOpsMetadata']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMCreateOpsMetadataMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMCreatePatchBaselineMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.CreatePatchBaseline',
    '/#X-Amz-Target=AmazonSSM.CreatePatchBaseline',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMCreatePatchBaselineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.CreatePatchBaseline']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreatePatchBaseline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMCreatePatchBaselineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.CreatePatchBaseline']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.CreatePatchBaseline'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMCreatePatchBaseline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.CreatePatchBaseline']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreatePatchBaseline']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMCreatePatchBaselineMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMCreateResourceDataSyncMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.CreateResourceDataSync',
    '/#X-Amz-Target=AmazonSSM.CreateResourceDataSync',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMCreateResourceDataSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateResourceDataSync']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateResourceDataSync']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMCreateResourceDataSyncMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.CreateResourceDataSync']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.CreateResourceDataSync'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMCreateResourceDataSync<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.CreateResourceDataSync']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.CreateResourceDataSync']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMCreateResourceDataSyncMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDeleteActivationMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeleteActivation',
    '/#X-Amz-Target=AmazonSSM.DeleteActivation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDeleteActivationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteActivation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteActivation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDeleteActivationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteActivation']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.DeleteActivation'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMDeleteActivation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteActivation']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteActivation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDeleteActivationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDeleteAssociationMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeleteAssociation',
    '/#X-Amz-Target=AmazonSSM.DeleteAssociation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDeleteAssociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteAssociation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteAssociation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDeleteAssociationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteAssociation']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.DeleteAssociation'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMDeleteAssociation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteAssociation']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteAssociation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDeleteAssociationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDeleteDocumentMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeleteDocument',
    '/#X-Amz-Target=AmazonSSM.DeleteDocument',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDeleteDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteDocument']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteDocument']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDeleteDocumentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteDocument']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.DeleteDocument'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMDeleteDocument<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteDocument']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteDocument']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDeleteDocumentMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDeleteInventoryMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeleteInventory',
    '/#X-Amz-Target=AmazonSSM.DeleteInventory',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDeleteInventoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteInventory']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteInventory']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDeleteInventoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteInventory']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.DeleteInventory'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMDeleteInventory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteInventory']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteInventory']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDeleteInventoryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDeleteMaintenanceWindowMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow',
    '/#X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDeleteMaintenanceWindowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDeleteMaintenanceWindowMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDeleteMaintenanceWindow<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDeleteMaintenanceWindowMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDeleteOpsMetadataMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeleteOpsMetadata',
    '/#X-Amz-Target=AmazonSSM.DeleteOpsMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDeleteOpsMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteOpsMetadata']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteOpsMetadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDeleteOpsMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteOpsMetadata']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.DeleteOpsMetadata'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMDeleteOpsMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteOpsMetadata']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteOpsMetadata']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDeleteOpsMetadataMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDeleteParameterMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeleteParameter',
    '/#X-Amz-Target=AmazonSSM.DeleteParameter',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDeleteParameterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteParameter']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteParameter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDeleteParameterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteParameter']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.DeleteParameter'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMDeleteParameter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteParameter']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteParameter']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDeleteParameterMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDeleteParametersMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeleteParameters',
    '/#X-Amz-Target=AmazonSSM.DeleteParameters',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDeleteParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteParameters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteParameters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDeleteParametersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteParameters']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.DeleteParameters'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMDeleteParameters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteParameters']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteParameters']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDeleteParametersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDeletePatchBaselineMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeletePatchBaseline',
    '/#X-Amz-Target=AmazonSSM.DeletePatchBaseline',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDeletePatchBaselineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeletePatchBaseline']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeletePatchBaseline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDeletePatchBaselineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DeletePatchBaseline']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DeletePatchBaseline'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDeletePatchBaseline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeletePatchBaseline']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeletePatchBaseline']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDeletePatchBaselineMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDeleteResourceDataSyncMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeleteResourceDataSync',
    '/#X-Amz-Target=AmazonSSM.DeleteResourceDataSync',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDeleteResourceDataSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteResourceDataSync']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteResourceDataSync']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDeleteResourceDataSyncMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DeleteResourceDataSync']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DeleteResourceDataSync'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDeleteResourceDataSync<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DeleteResourceDataSync']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DeleteResourceDataSync']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDeleteResourceDataSyncMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDeleteResourcePolicyMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeleteResourcePolicy',
    '/#X-Amz-Target=AmazonSSM.DeleteResourcePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDeleteResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteResourcePolicy']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteResourcePolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDeleteResourcePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DeleteResourcePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DeleteResourcePolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDeleteResourcePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteResourcePolicy']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteResourcePolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDeleteResourcePolicyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDeregisterManagedInstanceMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeregisterManagedInstance',
    '/#X-Amz-Target=AmazonSSM.DeregisterManagedInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDeregisterManagedInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterManagedInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeregisterManagedInstance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDeregisterManagedInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterManagedInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DeregisterManagedInstance'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDeregisterManagedInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterManagedInstance']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterManagedInstance']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDeregisterManagedInstanceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDeregisterPatchBaselineForPatchGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup',
    '/#X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDeregisterPatchBaselineForPatchGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDeregisterPatchBaselineForPatchGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDeregisterPatchBaselineForPatchGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonSSMDeregisterPatchBaselineForPatchGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDeregisterTargetFromMaintenanceWindowMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow',
    '/#X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDeregisterTargetFromMaintenanceWindowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDeregisterTargetFromMaintenanceWindowMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDeregisterTargetFromMaintenanceWindow<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonSSMDeregisterTargetFromMaintenanceWindowMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDeregisterTaskFromMaintenanceWindowMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow',
    '/#X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDeregisterTaskFromMaintenanceWindowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDeregisterTaskFromMaintenanceWindowMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDeregisterTaskFromMaintenanceWindow<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonSSMDeregisterTaskFromMaintenanceWindowMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeActivationsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeActivations',
    '/#X-Amz-Target=AmazonSSM.DescribeActivations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeActivationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeActivations']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeActivations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeActivationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeActivations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeActivations'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeActivations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeActivations']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeActivations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDescribeActivationsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeAssociationMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeAssociation',
    '/#X-Amz-Target=AmazonSSM.DescribeAssociation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeAssociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociation']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeAssociationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeAssociation'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeAssociation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociation']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDescribeAssociationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeAssociationExecutionTargetsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets',
    '/#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeAssociationExecutionTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeAssociationExecutionTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeAssociationExecutionTargets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonSSMDescribeAssociationExecutionTargetsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeAssociationExecutionsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions',
    '/#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeAssociationExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeAssociationExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeAssociationExecutions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDescribeAssociationExecutionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeAutomationExecutionsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions',
    '/#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeAutomationExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeAutomationExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeAutomationExecutions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDescribeAutomationExecutionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeAutomationStepExecutionsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions',
    '/#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeAutomationStepExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeAutomationStepExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeAutomationStepExecutions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonSSMDescribeAutomationStepExecutionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeAvailablePatchesMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeAvailablePatches',
    '/#X-Amz-Target=AmazonSSM.DescribeAvailablePatches',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeAvailablePatchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeAvailablePatches']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeAvailablePatches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeAvailablePatchesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAvailablePatches']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeAvailablePatches'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeAvailablePatches<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAvailablePatches']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAvailablePatches']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDescribeAvailablePatchesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeDocumentMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeDocument',
    '/#X-Amz-Target=AmazonSSM.DescribeDocument',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeDocument']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeDocument']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeDocumentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeDocument']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.DescribeDocument'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeDocument<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeDocument']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeDocument']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDescribeDocumentMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeDocumentPermissionMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeDocumentPermission',
    '/#X-Amz-Target=AmazonSSM.DescribeDocumentPermission',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeDocumentPermissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DescribeDocumentPermission']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeDocumentPermission']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeDocumentPermissionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeDocumentPermission']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeDocumentPermission'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeDocumentPermission<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribeDocumentPermission']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribeDocumentPermission']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDescribeDocumentPermissionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeEffectiveInstanceAssociationsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations',
    '/#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeEffectiveInstanceAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeEffectiveInstanceAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeEffectiveInstanceAssociations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonSSMDescribeEffectiveInstanceAssociationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeEffectivePatchesForPatchBaselineMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline',
    '/#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeEffectivePatchesForPatchBaselineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeEffectivePatchesForPatchBaselineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeEffectivePatchesForPatchBaseline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonSSMDescribeEffectivePatchesForPatchBaselineMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeInstanceAssociationsStatusMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus',
    '/#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeInstanceAssociationsStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeInstanceAssociationsStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeInstanceAssociationsStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonSSMDescribeInstanceAssociationsStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeInstanceInformationMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeInstanceInformation',
    '/#X-Amz-Target=AmazonSSM.DescribeInstanceInformation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeInstanceInformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstanceInformation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstanceInformation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeInstanceInformationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstanceInformation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeInstanceInformation'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeInstanceInformation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstanceInformation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstanceInformation']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDescribeInstanceInformationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeInstancePatchStatesMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates',
    '/#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeInstancePatchStatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeInstancePatchStatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeInstancePatchStates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDescribeInstancePatchStatesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeInstancePatchStatesForPatchGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup',
    '/#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeInstancePatchStatesForPatchGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeInstancePatchStatesForPatchGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeInstancePatchStatesForPatchGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonSSMDescribeInstancePatchStatesForPatchGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeInstancePatchesMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeInstancePatches',
    '/#X-Amz-Target=AmazonSSM.DescribeInstancePatches',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeInstancePatchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatches']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeInstancePatchesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatches']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeInstancePatches'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeInstancePatches<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatches']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatches']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDescribeInstancePatchesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeInventoryDeletionsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions',
    '/#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeInventoryDeletionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeInventoryDeletionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeInventoryDeletions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDescribeInventoryDeletionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTaskInvocationsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations',
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTaskInvocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTaskInvocationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTaskInvocations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTaskInvocationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTasksMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks',
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTasks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTasksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions',
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowScheduleMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule',
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeMaintenanceWindowSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowScheduleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowTargetsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets',
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeMaintenanceWindowTargets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowTargetsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowTasksMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks',
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeMaintenanceWindowTasks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowTasksMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows',
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeMaintenanceWindows<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowsForTargetMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget',
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowsForTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowsForTargetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeMaintenanceWindowsForTarget<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowsForTargetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeOpsItemsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeOpsItems',
    '/#X-Amz-Target=AmazonSSM.DescribeOpsItems',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeOpsItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeOpsItems']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeOpsItems']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeOpsItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeOpsItems']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.DescribeOpsItems'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeOpsItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeOpsItems']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeOpsItems']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDescribeOpsItemsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeParametersMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeParameters',
    '/#X-Amz-Target=AmazonSSM.DescribeParameters',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeParameters']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeParameters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeParametersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribeParameters']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribeParameters'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeParameters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeParameters']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeParameters']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDescribeParametersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribePatchBaselinesMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribePatchBaselines',
    '/#X-Amz-Target=AmazonSSM.DescribePatchBaselines',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribePatchBaselinesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchBaselines']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchBaselines']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribePatchBaselinesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchBaselines']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribePatchBaselines'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribePatchBaselines<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchBaselines']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchBaselines']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDescribePatchBaselinesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribePatchGroupStateMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribePatchGroupState',
    '/#X-Amz-Target=AmazonSSM.DescribePatchGroupState',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribePatchGroupStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchGroupState']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchGroupState']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribePatchGroupStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchGroupState']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribePatchGroupState'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribePatchGroupState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchGroupState']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchGroupState']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDescribePatchGroupStateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribePatchGroupsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribePatchGroups',
    '/#X-Amz-Target=AmazonSSM.DescribePatchGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribePatchGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchGroups']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribePatchGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribePatchGroups'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribePatchGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchGroups']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchGroups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDescribePatchGroupsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribePatchPropertiesMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribePatchProperties',
    '/#X-Amz-Target=AmazonSSM.DescribePatchProperties',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribePatchPropertiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchProperties']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchProperties']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribePatchPropertiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchProperties']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DescribePatchProperties'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribePatchProperties<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchProperties']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchProperties']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDescribePatchPropertiesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDescribeSessionsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeSessions',
    '/#X-Amz-Target=AmazonSSM.DescribeSessions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDescribeSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeSessions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeSessions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDescribeSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeSessions']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.DescribeSessions'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMDescribeSessions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeSessions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeSessions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDescribeSessionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMDisassociateOpsItemRelatedItemMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DisassociateOpsItemRelatedItem',
    '/#X-Amz-Target=AmazonSSM.DisassociateOpsItemRelatedItem',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMDisassociateOpsItemRelatedItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.DisassociateOpsItemRelatedItem']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DisassociateOpsItemRelatedItem']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMDisassociateOpsItemRelatedItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.DisassociateOpsItemRelatedItem']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.DisassociateOpsItemRelatedItem'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMDisassociateOpsItemRelatedItem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.DisassociateOpsItemRelatedItem']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.DisassociateOpsItemRelatedItem']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMDisassociateOpsItemRelatedItemMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetAutomationExecutionMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetAutomationExecution',
    '/#X-Amz-Target=AmazonSSM.GetAutomationExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetAutomationExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetAutomationExecution']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetAutomationExecution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetAutomationExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.GetAutomationExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.GetAutomationExecution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetAutomationExecution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.GetAutomationExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.GetAutomationExecution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMGetAutomationExecutionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetCalendarStateMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetCalendarState',
    '/#X-Amz-Target=AmazonSSM.GetCalendarState',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetCalendarStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetCalendarState']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetCalendarState']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetCalendarStateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetCalendarState']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.GetCalendarState'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetCalendarState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetCalendarState']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetCalendarState']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMGetCalendarStateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetCommandInvocationMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetCommandInvocation',
    '/#X-Amz-Target=AmazonSSM.GetCommandInvocation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetCommandInvocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetCommandInvocation']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetCommandInvocation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetCommandInvocationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.GetCommandInvocation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.GetCommandInvocation'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetCommandInvocation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetCommandInvocation']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetCommandInvocation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMGetCommandInvocationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetConnectionStatusMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetConnectionStatus',
    '/#X-Amz-Target=AmazonSSM.GetConnectionStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetConnectionStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetConnectionStatus']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetConnectionStatus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetConnectionStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.GetConnectionStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.GetConnectionStatus'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetConnectionStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetConnectionStatus']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetConnectionStatus']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMGetConnectionStatusMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetDefaultPatchBaselineMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline',
    '/#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetDefaultPatchBaselineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetDefaultPatchBaselineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetDefaultPatchBaseline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMGetDefaultPatchBaselineMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetDeployablePatchSnapshotForInstanceMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance',
    '/#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetDeployablePatchSnapshotForInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetDeployablePatchSnapshotForInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetDeployablePatchSnapshotForInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonSSMGetDeployablePatchSnapshotForInstanceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetDocumentMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetDocument',
    '/#X-Amz-Target=AmazonSSM.GetDocument',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetDocument']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetDocument']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetDocumentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetDocument']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.GetDocument'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetDocument<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetDocument']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetDocument']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMGetDocumentMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetInventoryMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetInventory',
    '/#X-Amz-Target=AmazonSSM.GetInventory',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetInventoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetInventory']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetInventory']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetInventoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetInventory']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.GetInventory'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetInventory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetInventory']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetInventory']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMGetInventoryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetInventorySchemaMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetInventorySchema',
    '/#X-Amz-Target=AmazonSSM.GetInventorySchema',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetInventorySchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetInventorySchema']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetInventorySchema']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetInventorySchemaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.GetInventorySchema']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.GetInventorySchema'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetInventorySchema<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetInventorySchema']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetInventorySchema']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMGetInventorySchemaMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetMaintenanceWindowMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetMaintenanceWindow',
    '/#X-Amz-Target=AmazonSSM.GetMaintenanceWindow',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetMaintenanceWindowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindow']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetMaintenanceWindowMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindow']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.GetMaintenanceWindow'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetMaintenanceWindow<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindow']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindow']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMGetMaintenanceWindowMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetMaintenanceWindowExecutionMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution',
    '/#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetMaintenanceWindowExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetMaintenanceWindowExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetMaintenanceWindowExecution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMGetMaintenanceWindowExecutionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask',
    '/#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskInvocationMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation',
    '/#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskInvocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskInvocationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskInvocation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskInvocationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetMaintenanceWindowTaskMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask',
    '/#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetMaintenanceWindowTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetMaintenanceWindowTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetMaintenanceWindowTask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMGetMaintenanceWindowTaskMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetOpsItemMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetOpsItem',
    '/#X-Amz-Target=AmazonSSM.GetOpsItem',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetOpsItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsItem']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsItem']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetOpsItemMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsItem']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.GetOpsItem'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetOpsItem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsItem']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsItem']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMGetOpsItemMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetOpsMetadataMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetOpsMetadata',
    '/#X-Amz-Target=AmazonSSM.GetOpsMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetOpsMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsMetadata']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsMetadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetOpsMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsMetadata']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.GetOpsMetadata'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetOpsMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsMetadata']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsMetadata']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMGetOpsMetadataMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetOpsSummaryMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetOpsSummary',
    '/#X-Amz-Target=AmazonSSM.GetOpsSummary',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetOpsSummaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsSummary']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsSummary']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetOpsSummaryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsSummary']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.GetOpsSummary'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetOpsSummary<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsSummary']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsSummary']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMGetOpsSummaryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetParameterMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetParameter',
    '/#X-Amz-Target=AmazonSSM.GetParameter',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetParameterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameter']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetParameterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameter']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.GetParameter'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetParameter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameter']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameter']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMGetParameterMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetParameterHistoryMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetParameterHistory',
    '/#X-Amz-Target=AmazonSSM.GetParameterHistory',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetParameterHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameterHistory']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameterHistory']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetParameterHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.GetParameterHistory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.GetParameterHistory'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetParameterHistory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameterHistory']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameterHistory']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMGetParameterHistoryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetParametersMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetParameters',
    '/#X-Amz-Target=AmazonSSM.GetParameters',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetParametersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameters']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.GetParameters'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetParameters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameters']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameters']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMGetParametersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetParametersByPathMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetParametersByPath',
    '/#X-Amz-Target=AmazonSSM.GetParametersByPath',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetParametersByPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParametersByPath']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParametersByPath']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetParametersByPathMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.GetParametersByPath']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.GetParametersByPath'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetParametersByPath<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParametersByPath']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParametersByPath']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMGetParametersByPathMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetPatchBaselineMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetPatchBaseline',
    '/#X-Amz-Target=AmazonSSM.GetPatchBaseline',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetPatchBaselineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetPatchBaseline']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetPatchBaseline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetPatchBaselineMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetPatchBaseline']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.GetPatchBaseline'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetPatchBaseline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetPatchBaseline']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetPatchBaseline']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMGetPatchBaselineMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetPatchBaselineForPatchGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup',
    '/#X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetPatchBaselineForPatchGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetPatchBaselineForPatchGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetPatchBaselineForPatchGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMGetPatchBaselineForPatchGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetResourcePoliciesMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetResourcePolicies',
    '/#X-Amz-Target=AmazonSSM.GetResourcePolicies',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetResourcePoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetResourcePolicies']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetResourcePolicies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetResourcePoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.GetResourcePolicies']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.GetResourcePolicies'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetResourcePolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetResourcePolicies']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetResourcePolicies']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMGetResourcePoliciesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMGetServiceSettingMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetServiceSetting',
    '/#X-Amz-Target=AmazonSSM.GetServiceSetting',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMGetServiceSettingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetServiceSetting']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetServiceSetting']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMGetServiceSettingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetServiceSetting']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.GetServiceSetting'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMGetServiceSetting<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetServiceSetting']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetServiceSetting']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMGetServiceSettingMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMLabelParameterVersionMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.LabelParameterVersion',
    '/#X-Amz-Target=AmazonSSM.LabelParameterVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMLabelParameterVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.LabelParameterVersion']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.LabelParameterVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMLabelParameterVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.LabelParameterVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.LabelParameterVersion'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMLabelParameterVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.LabelParameterVersion']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.LabelParameterVersion']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMLabelParameterVersionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMListAssociationVersionsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListAssociationVersions',
    '/#X-Amz-Target=AmazonSSM.ListAssociationVersions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMListAssociationVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListAssociationVersions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListAssociationVersions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMListAssociationVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.ListAssociationVersions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.ListAssociationVersions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMListAssociationVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.ListAssociationVersions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.ListAssociationVersions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMListAssociationVersionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMListAssociationsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListAssociations',
    '/#X-Amz-Target=AmazonSSM.ListAssociations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMListAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListAssociations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListAssociations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMListAssociationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListAssociations']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.ListAssociations'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMListAssociations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListAssociations']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListAssociations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMListAssociationsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMListCommandInvocationsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListCommandInvocations',
    '/#X-Amz-Target=AmazonSSM.ListCommandInvocations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMListCommandInvocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListCommandInvocations']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListCommandInvocations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMListCommandInvocationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.ListCommandInvocations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.ListCommandInvocations'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMListCommandInvocations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.ListCommandInvocations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.ListCommandInvocations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMListCommandInvocationsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMListCommandsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListCommands',
    '/#X-Amz-Target=AmazonSSM.ListCommands',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMListCommandsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListCommands']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListCommands']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMListCommandsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListCommands']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.ListCommands'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMListCommands<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListCommands']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListCommands']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMListCommandsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMListComplianceItemsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListComplianceItems',
    '/#X-Amz-Target=AmazonSSM.ListComplianceItems',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMListComplianceItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListComplianceItems']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListComplianceItems']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMListComplianceItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.ListComplianceItems']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.ListComplianceItems'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMListComplianceItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListComplianceItems']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListComplianceItems']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMListComplianceItemsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMListComplianceSummariesMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListComplianceSummaries',
    '/#X-Amz-Target=AmazonSSM.ListComplianceSummaries',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMListComplianceSummariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListComplianceSummaries']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListComplianceSummaries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMListComplianceSummariesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.ListComplianceSummaries']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.ListComplianceSummaries'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMListComplianceSummaries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.ListComplianceSummaries']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.ListComplianceSummaries']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMListComplianceSummariesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMListDocumentMetadataHistoryMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListDocumentMetadataHistory',
    '/#X-Amz-Target=AmazonSSM.ListDocumentMetadataHistory',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMListDocumentMetadataHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.ListDocumentMetadataHistory']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.ListDocumentMetadataHistory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMListDocumentMetadataHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.ListDocumentMetadataHistory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.ListDocumentMetadataHistory'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMListDocumentMetadataHistory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.ListDocumentMetadataHistory']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.ListDocumentMetadataHistory']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMListDocumentMetadataHistoryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMListDocumentVersionsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListDocumentVersions',
    '/#X-Amz-Target=AmazonSSM.ListDocumentVersions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMListDocumentVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListDocumentVersions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListDocumentVersions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMListDocumentVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.ListDocumentVersions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.ListDocumentVersions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMListDocumentVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListDocumentVersions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListDocumentVersions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMListDocumentVersionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMListDocumentsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListDocuments',
    '/#X-Amz-Target=AmazonSSM.ListDocuments',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMListDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListDocuments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListDocuments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMListDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListDocuments']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.ListDocuments'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMListDocuments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListDocuments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListDocuments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMListDocumentsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMListInventoryEntriesMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListInventoryEntries',
    '/#X-Amz-Target=AmazonSSM.ListInventoryEntries',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMListInventoryEntriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListInventoryEntries']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListInventoryEntries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMListInventoryEntriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.ListInventoryEntries']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.ListInventoryEntries'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMListInventoryEntries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListInventoryEntries']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListInventoryEntries']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMListInventoryEntriesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMListOpsItemEventsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListOpsItemEvents',
    '/#X-Amz-Target=AmazonSSM.ListOpsItemEvents',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMListOpsItemEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListOpsItemEvents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListOpsItemEvents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMListOpsItemEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListOpsItemEvents']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.ListOpsItemEvents'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMListOpsItemEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListOpsItemEvents']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListOpsItemEvents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMListOpsItemEventsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMListOpsItemRelatedItemsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListOpsItemRelatedItems',
    '/#X-Amz-Target=AmazonSSM.ListOpsItemRelatedItems',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMListOpsItemRelatedItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListOpsItemRelatedItems']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListOpsItemRelatedItems']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMListOpsItemRelatedItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.ListOpsItemRelatedItems']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.ListOpsItemRelatedItems'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMListOpsItemRelatedItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.ListOpsItemRelatedItems']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.ListOpsItemRelatedItems']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMListOpsItemRelatedItemsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMListOpsMetadataMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListOpsMetadata',
    '/#X-Amz-Target=AmazonSSM.ListOpsMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMListOpsMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListOpsMetadata']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListOpsMetadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMListOpsMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListOpsMetadata']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.ListOpsMetadata'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMListOpsMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListOpsMetadata']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListOpsMetadata']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMListOpsMetadataMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMListResourceComplianceSummariesMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries',
    '/#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMListResourceComplianceSummariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMListResourceComplianceSummariesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMListResourceComplianceSummaries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMListResourceComplianceSummariesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMListResourceDataSyncMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListResourceDataSync',
    '/#X-Amz-Target=AmazonSSM.ListResourceDataSync',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMListResourceDataSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListResourceDataSync']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListResourceDataSync']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMListResourceDataSyncMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.ListResourceDataSync']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.ListResourceDataSync'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMListResourceDataSync<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListResourceDataSync']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListResourceDataSync']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMListResourceDataSyncMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListTagsForResource',
    '/#X-Amz-Target=AmazonSSM.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListTagsForResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListTagsForResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListTagsForResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListTagsForResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMListTagsForResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMModifyDocumentPermissionMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ModifyDocumentPermission',
    '/#X-Amz-Target=AmazonSSM.ModifyDocumentPermission',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMModifyDocumentPermissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ModifyDocumentPermission']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ModifyDocumentPermission']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMModifyDocumentPermissionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.ModifyDocumentPermission']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.ModifyDocumentPermission'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMModifyDocumentPermission<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.ModifyDocumentPermission']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.ModifyDocumentPermission']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMModifyDocumentPermissionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMPutComplianceItemsMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.PutComplianceItems',
    '/#X-Amz-Target=AmazonSSM.PutComplianceItems',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMPutComplianceItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.PutComplianceItems']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.PutComplianceItems']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMPutComplianceItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.PutComplianceItems']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.PutComplianceItems'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMPutComplianceItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.PutComplianceItems']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.PutComplianceItems']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMPutComplianceItemsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMPutInventoryMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.PutInventory',
    '/#X-Amz-Target=AmazonSSM.PutInventory',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMPutInventoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.PutInventory']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.PutInventory']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMPutInventoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.PutInventory']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.PutInventory'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMPutInventory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.PutInventory']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.PutInventory']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMPutInventoryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMPutParameterMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.PutParameter',
    '/#X-Amz-Target=AmazonSSM.PutParameter',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMPutParameterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.PutParameter']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.PutParameter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMPutParameterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.PutParameter']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.PutParameter'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMPutParameter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.PutParameter']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.PutParameter']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMPutParameterMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMPutResourcePolicyMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.PutResourcePolicy',
    '/#X-Amz-Target=AmazonSSM.PutResourcePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMPutResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.PutResourcePolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.PutResourcePolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMPutResourcePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.PutResourcePolicy']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.PutResourcePolicy'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMPutResourcePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.PutResourcePolicy']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.PutResourcePolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMPutResourcePolicyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMRegisterDefaultPatchBaselineMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline',
    '/#X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMRegisterDefaultPatchBaselineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMRegisterDefaultPatchBaselineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMRegisterDefaultPatchBaseline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMRegisterDefaultPatchBaselineMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMRegisterPatchBaselineForPatchGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup',
    '/#X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMRegisterPatchBaselineForPatchGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMRegisterPatchBaselineForPatchGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMRegisterPatchBaselineForPatchGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonSSMRegisterPatchBaselineForPatchGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMRegisterTargetWithMaintenanceWindowMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow',
    '/#X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMRegisterTargetWithMaintenanceWindowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMRegisterTargetWithMaintenanceWindowMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMRegisterTargetWithMaintenanceWindow<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonSSMRegisterTargetWithMaintenanceWindowMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMRegisterTaskWithMaintenanceWindowMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow',
    '/#X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMRegisterTaskWithMaintenanceWindowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMRegisterTaskWithMaintenanceWindowMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMRegisterTaskWithMaintenanceWindow<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAmazonSSMRegisterTaskWithMaintenanceWindowMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMRemoveTagsFromResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.RemoveTagsFromResource',
    '/#X-Amz-Target=AmazonSSM.RemoveTagsFromResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMRemoveTagsFromResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.RemoveTagsFromResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.RemoveTagsFromResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMRemoveTagsFromResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.RemoveTagsFromResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.RemoveTagsFromResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMRemoveTagsFromResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.RemoveTagsFromResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.RemoveTagsFromResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMRemoveTagsFromResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMResetServiceSettingMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ResetServiceSetting',
    '/#X-Amz-Target=AmazonSSM.ResetServiceSetting',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMResetServiceSettingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ResetServiceSetting']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ResetServiceSetting']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMResetServiceSettingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.ResetServiceSetting']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.ResetServiceSetting'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMResetServiceSetting<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ResetServiceSetting']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ResetServiceSetting']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMResetServiceSettingMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMResumeSessionMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ResumeSession',
    '/#X-Amz-Target=AmazonSSM.ResumeSession',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMResumeSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ResumeSession']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ResumeSession']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMResumeSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ResumeSession']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.ResumeSession'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMResumeSession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ResumeSession']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ResumeSession']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMResumeSessionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMSendAutomationSignalMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.SendAutomationSignal',
    '/#X-Amz-Target=AmazonSSM.SendAutomationSignal',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMSendAutomationSignalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.SendAutomationSignal']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.SendAutomationSignal']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMSendAutomationSignalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.SendAutomationSignal']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.SendAutomationSignal'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMSendAutomationSignal<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.SendAutomationSignal']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.SendAutomationSignal']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMSendAutomationSignalMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMSendCommandMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.SendCommand',
    '/#X-Amz-Target=AmazonSSM.SendCommand',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMSendCommandMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.SendCommand']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.SendCommand']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMSendCommandMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.SendCommand']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.SendCommand'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMSendCommand<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.SendCommand']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.SendCommand']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMSendCommandMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMStartAssociationsOnceMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.StartAssociationsOnce',
    '/#X-Amz-Target=AmazonSSM.StartAssociationsOnce',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMStartAssociationsOnceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.StartAssociationsOnce']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.StartAssociationsOnce']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMStartAssociationsOnceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.StartAssociationsOnce']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.StartAssociationsOnce'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMStartAssociationsOnce<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.StartAssociationsOnce']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.StartAssociationsOnce']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMStartAssociationsOnceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMStartAutomationExecutionMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.StartAutomationExecution',
    '/#X-Amz-Target=AmazonSSM.StartAutomationExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMStartAutomationExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.StartAutomationExecution']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.StartAutomationExecution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMStartAutomationExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.StartAutomationExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.StartAutomationExecution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMStartAutomationExecution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.StartAutomationExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.StartAutomationExecution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMStartAutomationExecutionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMStartChangeRequestExecutionMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.StartChangeRequestExecution',
    '/#X-Amz-Target=AmazonSSM.StartChangeRequestExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMStartChangeRequestExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.StartChangeRequestExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.StartChangeRequestExecution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMStartChangeRequestExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.StartChangeRequestExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.StartChangeRequestExecution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMStartChangeRequestExecution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.StartChangeRequestExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.StartChangeRequestExecution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMStartChangeRequestExecutionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMStartSessionMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.StartSession',
    '/#X-Amz-Target=AmazonSSM.StartSession',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMStartSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.StartSession']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.StartSession']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMStartSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.StartSession']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.StartSession'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMStartSession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.StartSession']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.StartSession']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMStartSessionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMStopAutomationExecutionMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.StopAutomationExecution',
    '/#X-Amz-Target=AmazonSSM.StopAutomationExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMStopAutomationExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.StopAutomationExecution']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.StopAutomationExecution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMStopAutomationExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.StopAutomationExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.StopAutomationExecution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMStopAutomationExecution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.StopAutomationExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.StopAutomationExecution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMStopAutomationExecutionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMTerminateSessionMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.TerminateSession',
    '/#X-Amz-Target=AmazonSSM.TerminateSession',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMTerminateSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.TerminateSession']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.TerminateSession']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMTerminateSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.TerminateSession']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.TerminateSession'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMTerminateSession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.TerminateSession']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.TerminateSession']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMTerminateSessionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMUnlabelParameterVersionMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UnlabelParameterVersion',
    '/#X-Amz-Target=AmazonSSM.UnlabelParameterVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMUnlabelParameterVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.UnlabelParameterVersion']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UnlabelParameterVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMUnlabelParameterVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.UnlabelParameterVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.UnlabelParameterVersion'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMUnlabelParameterVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.UnlabelParameterVersion']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.UnlabelParameterVersion']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMUnlabelParameterVersionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMUpdateAssociationMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateAssociation',
    '/#X-Amz-Target=AmazonSSM.UpdateAssociation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMUpdateAssociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateAssociation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateAssociation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMUpdateAssociationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateAssociation']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.UpdateAssociation'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMUpdateAssociation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateAssociation']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateAssociation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMUpdateAssociationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMUpdateAssociationStatusMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateAssociationStatus',
    '/#X-Amz-Target=AmazonSSM.UpdateAssociationStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMUpdateAssociationStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateAssociationStatus']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateAssociationStatus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMUpdateAssociationStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.UpdateAssociationStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.UpdateAssociationStatus'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMUpdateAssociationStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.UpdateAssociationStatus']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.UpdateAssociationStatus']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMUpdateAssociationStatusMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMUpdateDocumentMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateDocument',
    '/#X-Amz-Target=AmazonSSM.UpdateDocument',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMUpdateDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocument']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocument']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMUpdateDocumentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocument']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.UpdateDocument'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMUpdateDocument<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocument']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocument']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMUpdateDocumentMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMUpdateDocumentDefaultVersionMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion',
    '/#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMUpdateDocumentDefaultVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMUpdateDocumentDefaultVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMUpdateDocumentDefaultVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMUpdateDocumentDefaultVersionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMUpdateDocumentMetadataMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateDocumentMetadata',
    '/#X-Amz-Target=AmazonSSM.UpdateDocumentMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMUpdateDocumentMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocumentMetadata']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocumentMetadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMUpdateDocumentMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocumentMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.UpdateDocumentMetadata'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMUpdateDocumentMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocumentMetadata']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocumentMetadata']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMUpdateDocumentMetadataMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMUpdateMaintenanceWindowMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow',
    '/#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMUpdateMaintenanceWindowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMUpdateMaintenanceWindowMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMUpdateMaintenanceWindow<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMUpdateMaintenanceWindowMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMUpdateMaintenanceWindowTargetMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget',
    '/#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMUpdateMaintenanceWindowTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMUpdateMaintenanceWindowTargetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMUpdateMaintenanceWindowTarget<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMUpdateMaintenanceWindowTargetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMUpdateMaintenanceWindowTaskMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask',
    '/#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMUpdateMaintenanceWindowTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMUpdateMaintenanceWindowTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMUpdateMaintenanceWindowTask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMUpdateMaintenanceWindowTaskMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMUpdateManagedInstanceRoleMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole',
    '/#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMUpdateManagedInstanceRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMUpdateManagedInstanceRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMUpdateManagedInstanceRole<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMUpdateManagedInstanceRoleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMUpdateOpsItemMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateOpsItem',
    '/#X-Amz-Target=AmazonSSM.UpdateOpsItem',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMUpdateOpsItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateOpsItem']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateOpsItem']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMUpdateOpsItemMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateOpsItem']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.UpdateOpsItem'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMUpdateOpsItem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateOpsItem']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateOpsItem']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMUpdateOpsItemMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMUpdateOpsMetadataMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateOpsMetadata',
    '/#X-Amz-Target=AmazonSSM.UpdateOpsMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMUpdateOpsMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateOpsMetadata']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateOpsMetadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMUpdateOpsMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateOpsMetadata']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonSSM.UpdateOpsMetadata'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonSSMUpdateOpsMetadata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateOpsMetadata']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateOpsMetadata']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMUpdateOpsMetadataMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMUpdatePatchBaselineMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdatePatchBaseline',
    '/#X-Amz-Target=AmazonSSM.UpdatePatchBaseline',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMUpdatePatchBaselineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdatePatchBaseline']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdatePatchBaseline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMUpdatePatchBaselineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.UpdatePatchBaseline']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.UpdatePatchBaseline'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMUpdatePatchBaseline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdatePatchBaseline']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdatePatchBaseline']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMUpdatePatchBaselineMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMUpdateResourceDataSyncMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateResourceDataSync',
    '/#X-Amz-Target=AmazonSSM.UpdateResourceDataSync',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMUpdateResourceDataSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateResourceDataSync']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateResourceDataSync']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMUpdateResourceDataSyncMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.UpdateResourceDataSync']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.UpdateResourceDataSync'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMUpdateResourceDataSync<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonSSM.UpdateResourceDataSync']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonSSM.UpdateResourceDataSync']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMUpdateResourceDataSyncMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAmazonSSMUpdateServiceSettingMutationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateServiceSetting',
    '/#X-Amz-Target=AmazonSSM.UpdateServiceSetting',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonSSMUpdateServiceSettingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateServiceSetting']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateServiceSetting']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonSSMUpdateServiceSettingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonSSM.UpdateServiceSetting']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonSSM.UpdateServiceSetting'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonSSMUpdateServiceSetting<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateServiceSetting']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateServiceSetting']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAmazonSSMUpdateServiceSettingMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
