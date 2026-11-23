import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetAmazonSSMAddTagsToResourceKey() {
  return [
    '#X-Amz-Target=AmazonSSM.AddTagsToResource',
    '/#X-Amz-Target=AmazonSSM.AddTagsToResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMAddTagsToResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.AddTagsToResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.AddTagsToResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMAddTagsToResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.AddTagsToResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.AddTagsToResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMAssociateOpsItemRelatedItemKey() {
  return [
    '#X-Amz-Target=AmazonSSM.AssociateOpsItemRelatedItem',
    '/#X-Amz-Target=AmazonSSM.AssociateOpsItemRelatedItem',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMAssociateOpsItemRelatedItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.AssociateOpsItemRelatedItem']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMAssociateOpsItemRelatedItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.AssociateOpsItemRelatedItem']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.AssociateOpsItemRelatedItem'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMCancelCommandKey() {
  return [
    '#X-Amz-Target=AmazonSSM.CancelCommand',
    '/#X-Amz-Target=AmazonSSM.CancelCommand',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMCancelCommand<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.CancelCommand']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CancelCommand']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMCancelCommandKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CancelCommand']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AmazonSSM.CancelCommand'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMCancelMaintenanceWindowExecutionKey() {
  return [
    '#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution',
    '/#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMCancelMaintenanceWindowExecution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMCancelMaintenanceWindowExecutionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMCreateActivationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.CreateActivation',
    '/#X-Amz-Target=AmazonSSM.CreateActivation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMCreateActivation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateActivation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateActivation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMCreateActivationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.CreateActivation']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonSSM.CreateActivation'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMCreateAssociationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.CreateAssociation',
    '/#X-Amz-Target=AmazonSSM.CreateAssociation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMCreateAssociation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateAssociation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateAssociation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMCreateAssociationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.CreateAssociation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.CreateAssociation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMCreateAssociationBatchKey() {
  return [
    '#X-Amz-Target=AmazonSSM.CreateAssociationBatch',
    '/#X-Amz-Target=AmazonSSM.CreateAssociationBatch',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMCreateAssociationBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateAssociationBatch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMCreateAssociationBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.CreateAssociationBatch']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.CreateAssociationBatch'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMCreateDocumentKey() {
  return [
    '#X-Amz-Target=AmazonSSM.CreateDocument',
    '/#X-Amz-Target=AmazonSSM.CreateDocument',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMCreateDocument<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateDocument']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateDocument']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMCreateDocumentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateDocument']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonSSM.CreateDocument'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMCreateMaintenanceWindowKey() {
  return [
    '#X-Amz-Target=AmazonSSM.CreateMaintenanceWindow',
    '/#X-Amz-Target=AmazonSSM.CreateMaintenanceWindow',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMCreateMaintenanceWindow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateMaintenanceWindow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMCreateMaintenanceWindowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.CreateMaintenanceWindow']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.CreateMaintenanceWindow'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMCreateOpsItemKey() {
  return [
    '#X-Amz-Target=AmazonSSM.CreateOpsItem',
    '/#X-Amz-Target=AmazonSSM.CreateOpsItem',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMCreateOpsItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateOpsItem']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateOpsItem']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMCreateOpsItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateOpsItem']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AmazonSSM.CreateOpsItem'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMCreateOpsMetadataKey() {
  return [
    '#X-Amz-Target=AmazonSSM.CreateOpsMetadata',
    '/#X-Amz-Target=AmazonSSM.CreateOpsMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMCreateOpsMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateOpsMetadata']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateOpsMetadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMCreateOpsMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.CreateOpsMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.CreateOpsMetadata'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMCreatePatchBaselineKey() {
  return [
    '#X-Amz-Target=AmazonSSM.CreatePatchBaseline',
    '/#X-Amz-Target=AmazonSSM.CreatePatchBaseline',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMCreatePatchBaseline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreatePatchBaseline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMCreatePatchBaselineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.CreatePatchBaseline']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.CreatePatchBaseline'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMCreateResourceDataSyncKey() {
  return [
    '#X-Amz-Target=AmazonSSM.CreateResourceDataSync',
    '/#X-Amz-Target=AmazonSSM.CreateResourceDataSync',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMCreateResourceDataSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateResourceDataSync']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMCreateResourceDataSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.CreateResourceDataSync']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.CreateResourceDataSync'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDeleteActivationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeleteActivation',
    '/#X-Amz-Target=AmazonSSM.DeleteActivation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDeleteActivation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteActivation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteActivation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDeleteActivationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DeleteActivation']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonSSM.DeleteActivation'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDeleteAssociationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeleteAssociation',
    '/#X-Amz-Target=AmazonSSM.DeleteAssociation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDeleteAssociation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteAssociation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteAssociation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDeleteAssociationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DeleteAssociation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DeleteAssociation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDeleteDocumentKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeleteDocument',
    '/#X-Amz-Target=AmazonSSM.DeleteDocument',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDeleteDocument<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteDocument']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteDocument']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDeleteDocumentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteDocument']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonSSM.DeleteDocument'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDeleteInventoryKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeleteInventory',
    '/#X-Amz-Target=AmazonSSM.DeleteInventory',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDeleteInventory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteInventory']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteInventory']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDeleteInventoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteInventory']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonSSM.DeleteInventory'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDeleteMaintenanceWindowKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow',
    '/#X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDeleteMaintenanceWindow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDeleteMaintenanceWindowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDeleteOpsMetadataKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeleteOpsMetadata',
    '/#X-Amz-Target=AmazonSSM.DeleteOpsMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDeleteOpsMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteOpsMetadata']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteOpsMetadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDeleteOpsMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DeleteOpsMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DeleteOpsMetadata'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDeleteParameterKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeleteParameter',
    '/#X-Amz-Target=AmazonSSM.DeleteParameter',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDeleteParameter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteParameter']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteParameter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDeleteParameterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteParameter']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonSSM.DeleteParameter'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDeleteParametersKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeleteParameters',
    '/#X-Amz-Target=AmazonSSM.DeleteParameters',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDeleteParameters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteParameters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteParameters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDeleteParametersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DeleteParameters']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonSSM.DeleteParameters'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDeletePatchBaselineKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeletePatchBaseline',
    '/#X-Amz-Target=AmazonSSM.DeletePatchBaseline',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDeletePatchBaseline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeletePatchBaseline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDeletePatchBaselineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DeletePatchBaseline']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DeletePatchBaseline'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDeleteResourceDataSyncKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeleteResourceDataSync',
    '/#X-Amz-Target=AmazonSSM.DeleteResourceDataSync',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDeleteResourceDataSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteResourceDataSync']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDeleteResourceDataSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DeleteResourceDataSync']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DeleteResourceDataSync'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDeleteResourcePolicyKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeleteResourcePolicy',
    '/#X-Amz-Target=AmazonSSM.DeleteResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDeleteResourcePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteResourcePolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDeleteResourcePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DeleteResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DeleteResourcePolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDeregisterManagedInstanceKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeregisterManagedInstance',
    '/#X-Amz-Target=AmazonSSM.DeregisterManagedInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDeregisterManagedInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeregisterManagedInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDeregisterManagedInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterManagedInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DeregisterManagedInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDeregisterPatchBaselineForPatchGroupKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup',
    '/#X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDeregisterPatchBaselineForPatchGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDeregisterPatchBaselineForPatchGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDeregisterTargetFromMaintenanceWindowKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow',
    '/#X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDeregisterTargetFromMaintenanceWindow<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDeregisterTargetFromMaintenanceWindowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDeregisterTaskFromMaintenanceWindowKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow',
    '/#X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDeregisterTaskFromMaintenanceWindow<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDeregisterTaskFromMaintenanceWindowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeActivationsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeActivations',
    '/#X-Amz-Target=AmazonSSM.DescribeActivations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeActivations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeActivations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeActivationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeActivations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeActivations'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeAssociationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeAssociation',
    '/#X-Amz-Target=AmazonSSM.DescribeAssociation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeAssociation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeAssociationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeAssociation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeAssociationExecutionTargetsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets',
    '/#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeAssociationExecutionTargets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeAssociationExecutionTargetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeAssociationExecutionsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions',
    '/#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeAssociationExecutions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeAssociationExecutionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeAutomationExecutionsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions',
    '/#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeAutomationExecutions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeAutomationExecutionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeAutomationStepExecutionsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions',
    '/#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeAutomationStepExecutions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeAutomationStepExecutionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeAvailablePatchesKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeAvailablePatches',
    '/#X-Amz-Target=AmazonSSM.DescribeAvailablePatches',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeAvailablePatches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeAvailablePatches']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeAvailablePatchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAvailablePatches']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeAvailablePatches'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeDocumentKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeDocument',
    '/#X-Amz-Target=AmazonSSM.DescribeDocument',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeDocument<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeDocument']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeDocument']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeDocumentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeDocument']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonSSM.DescribeDocument'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeDocumentPermissionKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeDocumentPermission',
    '/#X-Amz-Target=AmazonSSM.DescribeDocumentPermission',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeDocumentPermission<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeDocumentPermission']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeDocumentPermissionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeDocumentPermission']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeDocumentPermission'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeEffectiveInstanceAssociationsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations',
    '/#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeEffectiveInstanceAssociations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeEffectiveInstanceAssociationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeEffectivePatchesForPatchBaselineKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline',
    '/#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeEffectivePatchesForPatchBaseline<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonSSMDescribeEffectivePatchesForPatchBaselineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeInstanceAssociationsStatusKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus',
    '/#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeInstanceAssociationsStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeInstanceAssociationsStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeInstanceInformationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeInstanceInformation',
    '/#X-Amz-Target=AmazonSSM.DescribeInstanceInformation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeInstanceInformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstanceInformation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeInstanceInformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstanceInformation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeInstanceInformation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeInstancePatchStatesKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates',
    '/#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeInstancePatchStates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeInstancePatchStatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeInstancePatchStatesForPatchGroupKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup',
    '/#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeInstancePatchStatesForPatchGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonSSMDescribeInstancePatchStatesForPatchGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeInstancePatchesKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeInstancePatches',
    '/#X-Amz-Target=AmazonSSM.DescribeInstancePatches',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeInstancePatches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatches']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeInstancePatchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatches']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeInstancePatches'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeInventoryDeletionsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions',
    '/#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeInventoryDeletions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeInventoryDeletionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTaskInvocationsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations',
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTaskInvocations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTaskInvocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTasksKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks',
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTasks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions',
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowScheduleKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule',
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeMaintenanceWindowSchedule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowTargetsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets',
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeMaintenanceWindowTargets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowTargetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowTasksKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks',
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeMaintenanceWindowTasks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows',
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeMaintenanceWindows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowsForTargetKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget',
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeMaintenanceWindowsForTarget<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeMaintenanceWindowsForTargetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeOpsItemsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeOpsItems',
    '/#X-Amz-Target=AmazonSSM.DescribeOpsItems',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeOpsItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeOpsItems']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeOpsItems']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeOpsItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeOpsItems']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonSSM.DescribeOpsItems'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeParametersKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeParameters',
    '/#X-Amz-Target=AmazonSSM.DescribeParameters',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeParameters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeParameters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeParametersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeParameters']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribeParameters'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribePatchBaselinesKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribePatchBaselines',
    '/#X-Amz-Target=AmazonSSM.DescribePatchBaselines',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribePatchBaselines<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchBaselines']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribePatchBaselinesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchBaselines']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribePatchBaselines'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribePatchGroupStateKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribePatchGroupState',
    '/#X-Amz-Target=AmazonSSM.DescribePatchGroupState',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribePatchGroupState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchGroupState']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribePatchGroupStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchGroupState']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribePatchGroupState'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribePatchGroupsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribePatchGroups',
    '/#X-Amz-Target=AmazonSSM.DescribePatchGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribePatchGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribePatchGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribePatchGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribePatchPropertiesKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribePatchProperties',
    '/#X-Amz-Target=AmazonSSM.DescribePatchProperties',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribePatchProperties<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchProperties']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribePatchPropertiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchProperties']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DescribePatchProperties'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDescribeSessionsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DescribeSessions',
    '/#X-Amz-Target=AmazonSSM.DescribeSessions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDescribeSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeSessions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeSessions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDescribeSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DescribeSessions']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonSSM.DescribeSessions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMDisassociateOpsItemRelatedItemKey() {
  return [
    '#X-Amz-Target=AmazonSSM.DisassociateOpsItemRelatedItem',
    '/#X-Amz-Target=AmazonSSM.DisassociateOpsItemRelatedItem',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMDisassociateOpsItemRelatedItem<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.DisassociateOpsItemRelatedItem']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMDisassociateOpsItemRelatedItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.DisassociateOpsItemRelatedItem']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.DisassociateOpsItemRelatedItem'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetAutomationExecutionKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetAutomationExecution',
    '/#X-Amz-Target=AmazonSSM.GetAutomationExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetAutomationExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetAutomationExecution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetAutomationExecutionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.GetAutomationExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.GetAutomationExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetCalendarStateKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetCalendarState',
    '/#X-Amz-Target=AmazonSSM.GetCalendarState',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetCalendarState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetCalendarState']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetCalendarState']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetCalendarStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.GetCalendarState']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonSSM.GetCalendarState'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetCommandInvocationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetCommandInvocation',
    '/#X-Amz-Target=AmazonSSM.GetCommandInvocation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetCommandInvocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetCommandInvocation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetCommandInvocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.GetCommandInvocation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.GetCommandInvocation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetConnectionStatusKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetConnectionStatus',
    '/#X-Amz-Target=AmazonSSM.GetConnectionStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetConnectionStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetConnectionStatus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetConnectionStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.GetConnectionStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.GetConnectionStatus'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetDefaultPatchBaselineKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline',
    '/#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetDefaultPatchBaseline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetDefaultPatchBaselineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetDeployablePatchSnapshotForInstanceKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance',
    '/#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetDeployablePatchSnapshotForInstance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetDeployablePatchSnapshotForInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetDocumentKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetDocument',
    '/#X-Amz-Target=AmazonSSM.GetDocument',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetDocument<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetDocument']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetDocument']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetDocumentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetDocument']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AmazonSSM.GetDocument'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetInventoryKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetInventory',
    '/#X-Amz-Target=AmazonSSM.GetInventory',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetInventory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetInventory']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetInventory']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetInventoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetInventory']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AmazonSSM.GetInventory'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetInventorySchemaKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetInventorySchema',
    '/#X-Amz-Target=AmazonSSM.GetInventorySchema',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetInventorySchema<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetInventorySchema']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetInventorySchemaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.GetInventorySchema']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.GetInventorySchema'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetMaintenanceWindowKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetMaintenanceWindow',
    '/#X-Amz-Target=AmazonSSM.GetMaintenanceWindow',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetMaintenanceWindow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetMaintenanceWindowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindow']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.GetMaintenanceWindow'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetMaintenanceWindowExecutionKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution',
    '/#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetMaintenanceWindowExecution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetMaintenanceWindowExecutionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask',
    '/#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTask<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskInvocationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation',
    '/#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskInvocation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskInvocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetMaintenanceWindowTaskKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask',
    '/#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetMaintenanceWindowTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetMaintenanceWindowTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetOpsItemKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetOpsItem',
    '/#X-Amz-Target=AmazonSSM.GetOpsItem',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetOpsItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsItem']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsItem']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetOpsItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsItem']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AmazonSSM.GetOpsItem'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetOpsMetadataKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetOpsMetadata',
    '/#X-Amz-Target=AmazonSSM.GetOpsMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetOpsMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsMetadata']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsMetadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetOpsMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsMetadata']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonSSM.GetOpsMetadata'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetOpsSummaryKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetOpsSummary',
    '/#X-Amz-Target=AmazonSSM.GetOpsSummary',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetOpsSummary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsSummary']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsSummary']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetOpsSummaryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsSummary']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AmazonSSM.GetOpsSummary'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetParameterKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetParameter',
    '/#X-Amz-Target=AmazonSSM.GetParameter',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetParameter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameter']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetParameterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameter']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AmazonSSM.GetParameter'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetParameterHistoryKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetParameterHistory',
    '/#X-Amz-Target=AmazonSSM.GetParameterHistory',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetParameterHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameterHistory']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetParameterHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.GetParameterHistory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.GetParameterHistory'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetParametersKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetParameters',
    '/#X-Amz-Target=AmazonSSM.GetParameters',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetParameters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetParametersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameters']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AmazonSSM.GetParameters'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetParametersByPathKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetParametersByPath',
    '/#X-Amz-Target=AmazonSSM.GetParametersByPath',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetParametersByPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParametersByPath']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetParametersByPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.GetParametersByPath']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.GetParametersByPath'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetPatchBaselineKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetPatchBaseline',
    '/#X-Amz-Target=AmazonSSM.GetPatchBaseline',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetPatchBaseline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetPatchBaseline']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetPatchBaseline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetPatchBaselineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.GetPatchBaseline']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonSSM.GetPatchBaseline'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetPatchBaselineForPatchGroupKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup',
    '/#X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetPatchBaselineForPatchGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetPatchBaselineForPatchGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetResourcePoliciesKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetResourcePolicies',
    '/#X-Amz-Target=AmazonSSM.GetResourcePolicies',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetResourcePolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetResourcePolicies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetResourcePoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.GetResourcePolicies']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.GetResourcePolicies'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMGetServiceSettingKey() {
  return [
    '#X-Amz-Target=AmazonSSM.GetServiceSetting',
    '/#X-Amz-Target=AmazonSSM.GetServiceSetting',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMGetServiceSetting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.GetServiceSetting']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetServiceSetting']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMGetServiceSettingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.GetServiceSetting']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.GetServiceSetting'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMLabelParameterVersionKey() {
  return [
    '#X-Amz-Target=AmazonSSM.LabelParameterVersion',
    '/#X-Amz-Target=AmazonSSM.LabelParameterVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMLabelParameterVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.LabelParameterVersion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMLabelParameterVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.LabelParameterVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.LabelParameterVersion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMListAssociationVersionsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListAssociationVersions',
    '/#X-Amz-Target=AmazonSSM.ListAssociationVersions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMListAssociationVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListAssociationVersions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMListAssociationVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.ListAssociationVersions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.ListAssociationVersions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMListAssociationsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListAssociations',
    '/#X-Amz-Target=AmazonSSM.ListAssociations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMListAssociations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListAssociations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListAssociations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMListAssociationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.ListAssociations']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonSSM.ListAssociations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMListCommandInvocationsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListCommandInvocations',
    '/#X-Amz-Target=AmazonSSM.ListCommandInvocations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMListCommandInvocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListCommandInvocations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMListCommandInvocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.ListCommandInvocations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.ListCommandInvocations'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMListCommandsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListCommands',
    '/#X-Amz-Target=AmazonSSM.ListCommands',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMListCommands<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListCommands']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListCommands']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMListCommandsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListCommands']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AmazonSSM.ListCommands'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMListComplianceItemsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListComplianceItems',
    '/#X-Amz-Target=AmazonSSM.ListComplianceItems',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMListComplianceItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListComplianceItems']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMListComplianceItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.ListComplianceItems']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.ListComplianceItems'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMListComplianceSummariesKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListComplianceSummaries',
    '/#X-Amz-Target=AmazonSSM.ListComplianceSummaries',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMListComplianceSummaries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListComplianceSummaries']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMListComplianceSummariesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.ListComplianceSummaries']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.ListComplianceSummaries'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMListDocumentMetadataHistoryKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListDocumentMetadataHistory',
    '/#X-Amz-Target=AmazonSSM.ListDocumentMetadataHistory',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMListDocumentMetadataHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.ListDocumentMetadataHistory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMListDocumentMetadataHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.ListDocumentMetadataHistory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.ListDocumentMetadataHistory'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMListDocumentVersionsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListDocumentVersions',
    '/#X-Amz-Target=AmazonSSM.ListDocumentVersions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMListDocumentVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListDocumentVersions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMListDocumentVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.ListDocumentVersions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.ListDocumentVersions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMListDocumentsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListDocuments',
    '/#X-Amz-Target=AmazonSSM.ListDocuments',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMListDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListDocuments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListDocuments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMListDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListDocuments']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AmazonSSM.ListDocuments'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMListInventoryEntriesKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListInventoryEntries',
    '/#X-Amz-Target=AmazonSSM.ListInventoryEntries',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMListInventoryEntries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListInventoryEntries']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMListInventoryEntriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.ListInventoryEntries']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.ListInventoryEntries'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMListOpsItemEventsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListOpsItemEvents',
    '/#X-Amz-Target=AmazonSSM.ListOpsItemEvents',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMListOpsItemEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListOpsItemEvents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListOpsItemEvents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMListOpsItemEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.ListOpsItemEvents']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.ListOpsItemEvents'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMListOpsItemRelatedItemsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListOpsItemRelatedItems',
    '/#X-Amz-Target=AmazonSSM.ListOpsItemRelatedItems',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMListOpsItemRelatedItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListOpsItemRelatedItems']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMListOpsItemRelatedItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.ListOpsItemRelatedItems']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.ListOpsItemRelatedItems'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMListOpsMetadataKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListOpsMetadata',
    '/#X-Amz-Target=AmazonSSM.ListOpsMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMListOpsMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ListOpsMetadata']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListOpsMetadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMListOpsMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListOpsMetadata']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonSSM.ListOpsMetadata'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMListResourceComplianceSummariesKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries',
    '/#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMListResourceComplianceSummaries<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMListResourceComplianceSummariesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMListResourceDataSyncKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListResourceDataSync',
    '/#X-Amz-Target=AmazonSSM.ListResourceDataSync',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMListResourceDataSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListResourceDataSync']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMListResourceDataSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.ListResourceDataSync']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.ListResourceDataSync'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ListTagsForResource',
    '/#X-Amz-Target=AmazonSSM.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListTagsForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMModifyDocumentPermissionKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ModifyDocumentPermission',
    '/#X-Amz-Target=AmazonSSM.ModifyDocumentPermission',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMModifyDocumentPermission<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ModifyDocumentPermission']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMModifyDocumentPermissionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.ModifyDocumentPermission']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.ModifyDocumentPermission'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMPutComplianceItemsKey() {
  return [
    '#X-Amz-Target=AmazonSSM.PutComplianceItems',
    '/#X-Amz-Target=AmazonSSM.PutComplianceItems',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMPutComplianceItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.PutComplianceItems']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMPutComplianceItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.PutComplianceItems']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.PutComplianceItems'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMPutInventoryKey() {
  return [
    '#X-Amz-Target=AmazonSSM.PutInventory',
    '/#X-Amz-Target=AmazonSSM.PutInventory',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMPutInventory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.PutInventory']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.PutInventory']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMPutInventoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.PutInventory']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AmazonSSM.PutInventory'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMPutParameterKey() {
  return [
    '#X-Amz-Target=AmazonSSM.PutParameter',
    '/#X-Amz-Target=AmazonSSM.PutParameter',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMPutParameter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.PutParameter']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.PutParameter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMPutParameterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.PutParameter']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AmazonSSM.PutParameter'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMPutResourcePolicyKey() {
  return [
    '#X-Amz-Target=AmazonSSM.PutResourcePolicy',
    '/#X-Amz-Target=AmazonSSM.PutResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMPutResourcePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.PutResourcePolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.PutResourcePolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMPutResourcePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.PutResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.PutResourcePolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMRegisterDefaultPatchBaselineKey() {
  return [
    '#X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline',
    '/#X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMRegisterDefaultPatchBaseline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMRegisterDefaultPatchBaselineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMRegisterPatchBaselineForPatchGroupKey() {
  return [
    '#X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup',
    '/#X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMRegisterPatchBaselineForPatchGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMRegisterPatchBaselineForPatchGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMRegisterTargetWithMaintenanceWindowKey() {
  return [
    '#X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow',
    '/#X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMRegisterTargetWithMaintenanceWindow<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMRegisterTargetWithMaintenanceWindowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMRegisterTaskWithMaintenanceWindowKey() {
  return [
    '#X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow',
    '/#X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMRegisterTaskWithMaintenanceWindow<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMRegisterTaskWithMaintenanceWindowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMRemoveTagsFromResourceKey() {
  return [
    '#X-Amz-Target=AmazonSSM.RemoveTagsFromResource',
    '/#X-Amz-Target=AmazonSSM.RemoveTagsFromResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMRemoveTagsFromResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.RemoveTagsFromResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMRemoveTagsFromResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.RemoveTagsFromResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.RemoveTagsFromResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMResetServiceSettingKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ResetServiceSetting',
    '/#X-Amz-Target=AmazonSSM.ResetServiceSetting',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMResetServiceSetting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ResetServiceSetting']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMResetServiceSettingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.ResetServiceSetting']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.ResetServiceSetting'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMResumeSessionKey() {
  return [
    '#X-Amz-Target=AmazonSSM.ResumeSession',
    '/#X-Amz-Target=AmazonSSM.ResumeSession',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMResumeSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.ResumeSession']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ResumeSession']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMResumeSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ResumeSession']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AmazonSSM.ResumeSession'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMSendAutomationSignalKey() {
  return [
    '#X-Amz-Target=AmazonSSM.SendAutomationSignal',
    '/#X-Amz-Target=AmazonSSM.SendAutomationSignal',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMSendAutomationSignal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.SendAutomationSignal']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMSendAutomationSignalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.SendAutomationSignal']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.SendAutomationSignal'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMSendCommandKey() {
  return [
    '#X-Amz-Target=AmazonSSM.SendCommand',
    '/#X-Amz-Target=AmazonSSM.SendCommand',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMSendCommand<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.SendCommand']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.SendCommand']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMSendCommandKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.SendCommand']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AmazonSSM.SendCommand'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMStartAssociationsOnceKey() {
  return [
    '#X-Amz-Target=AmazonSSM.StartAssociationsOnce',
    '/#X-Amz-Target=AmazonSSM.StartAssociationsOnce',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMStartAssociationsOnce<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.StartAssociationsOnce']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMStartAssociationsOnceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.StartAssociationsOnce']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.StartAssociationsOnce'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMStartAutomationExecutionKey() {
  return [
    '#X-Amz-Target=AmazonSSM.StartAutomationExecution',
    '/#X-Amz-Target=AmazonSSM.StartAutomationExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMStartAutomationExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.StartAutomationExecution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMStartAutomationExecutionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.StartAutomationExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.StartAutomationExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMStartChangeRequestExecutionKey() {
  return [
    '#X-Amz-Target=AmazonSSM.StartChangeRequestExecution',
    '/#X-Amz-Target=AmazonSSM.StartChangeRequestExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMStartChangeRequestExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.StartChangeRequestExecution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMStartChangeRequestExecutionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.StartChangeRequestExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.StartChangeRequestExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMStartSessionKey() {
  return [
    '#X-Amz-Target=AmazonSSM.StartSession',
    '/#X-Amz-Target=AmazonSSM.StartSession',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMStartSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.StartSession']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.StartSession']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMStartSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.StartSession']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AmazonSSM.StartSession'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMStopAutomationExecutionKey() {
  return [
    '#X-Amz-Target=AmazonSSM.StopAutomationExecution',
    '/#X-Amz-Target=AmazonSSM.StopAutomationExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMStopAutomationExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.StopAutomationExecution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMStopAutomationExecutionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.StopAutomationExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.StopAutomationExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMTerminateSessionKey() {
  return [
    '#X-Amz-Target=AmazonSSM.TerminateSession',
    '/#X-Amz-Target=AmazonSSM.TerminateSession',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMTerminateSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.TerminateSession']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.TerminateSession']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMTerminateSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.TerminateSession']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonSSM.TerminateSession'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMUnlabelParameterVersionKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UnlabelParameterVersion',
    '/#X-Amz-Target=AmazonSSM.UnlabelParameterVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMUnlabelParameterVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UnlabelParameterVersion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMUnlabelParameterVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.UnlabelParameterVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.UnlabelParameterVersion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMUpdateAssociationKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateAssociation',
    '/#X-Amz-Target=AmazonSSM.UpdateAssociation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMUpdateAssociation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateAssociation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateAssociation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMUpdateAssociationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.UpdateAssociation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.UpdateAssociation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMUpdateAssociationStatusKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateAssociationStatus',
    '/#X-Amz-Target=AmazonSSM.UpdateAssociationStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMUpdateAssociationStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateAssociationStatus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMUpdateAssociationStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.UpdateAssociationStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.UpdateAssociationStatus'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMUpdateDocumentKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateDocument',
    '/#X-Amz-Target=AmazonSSM.UpdateDocument',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMUpdateDocument<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocument']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocument']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMUpdateDocumentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocument']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonSSM.UpdateDocument'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMUpdateDocumentDefaultVersionKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion',
    '/#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMUpdateDocumentDefaultVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMUpdateDocumentDefaultVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMUpdateDocumentMetadataKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateDocumentMetadata',
    '/#X-Amz-Target=AmazonSSM.UpdateDocumentMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMUpdateDocumentMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocumentMetadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMUpdateDocumentMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocumentMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.UpdateDocumentMetadata'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMUpdateMaintenanceWindowKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow',
    '/#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMUpdateMaintenanceWindow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMUpdateMaintenanceWindowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMUpdateMaintenanceWindowTargetKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget',
    '/#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMUpdateMaintenanceWindowTarget<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMUpdateMaintenanceWindowTargetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMUpdateMaintenanceWindowTaskKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask',
    '/#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMUpdateMaintenanceWindowTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMUpdateMaintenanceWindowTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMUpdateManagedInstanceRoleKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole',
    '/#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMUpdateManagedInstanceRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMUpdateManagedInstanceRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMUpdateOpsItemKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateOpsItem',
    '/#X-Amz-Target=AmazonSSM.UpdateOpsItem',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMUpdateOpsItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateOpsItem']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateOpsItem']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMUpdateOpsItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateOpsItem']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AmazonSSM.UpdateOpsItem'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMUpdateOpsMetadataKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateOpsMetadata',
    '/#X-Amz-Target=AmazonSSM.UpdateOpsMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMUpdateOpsMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateOpsMetadata']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateOpsMetadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMUpdateOpsMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.UpdateOpsMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.UpdateOpsMetadata'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMUpdatePatchBaselineKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdatePatchBaseline',
    '/#X-Amz-Target=AmazonSSM.UpdatePatchBaseline',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMUpdatePatchBaseline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdatePatchBaseline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMUpdatePatchBaselineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.UpdatePatchBaseline']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.UpdatePatchBaseline'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMUpdateResourceDataSyncKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateResourceDataSync',
    '/#X-Amz-Target=AmazonSSM.UpdateResourceDataSync',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMUpdateResourceDataSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateResourceDataSync']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMUpdateResourceDataSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.UpdateResourceDataSync']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.UpdateResourceDataSync'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonSSMUpdateServiceSettingKey() {
  return [
    '#X-Amz-Target=AmazonSSM.UpdateServiceSetting',
    '/#X-Amz-Target=AmazonSSM.UpdateServiceSetting',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonSSMUpdateServiceSetting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateServiceSetting']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonSSMUpdateServiceSettingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonSSM.UpdateServiceSetting']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonSSM.UpdateServiceSetting'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
