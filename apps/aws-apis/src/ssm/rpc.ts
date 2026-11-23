import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAmazonSSMAddTagsToResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.AddTagsToResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.AddTagsToResource'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMAssociateOpsItemRelatedItem(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.AssociateOpsItemRelatedItem']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.AssociateOpsItemRelatedItem'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMCancelCommand(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CancelCommand']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonSSM.CancelCommand'].$post(args, options))
}

export async function postXAmzTargetAmazonSSMCancelMaintenanceWindowExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMCreateActivation(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateActivation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.CreateActivation'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMCreateAssociation(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateAssociation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.CreateAssociation'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMCreateAssociationBatch(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.CreateAssociationBatch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.CreateAssociationBatch'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMCreateDocument(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateDocument']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonSSM.CreateDocument'].$post(args, options))
}

export async function postXAmzTargetAmazonSSMCreateMaintenanceWindow(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.CreateMaintenanceWindow']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.CreateMaintenanceWindow'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMCreateOpsItem(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateOpsItem']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonSSM.CreateOpsItem'].$post(args, options))
}

export async function postXAmzTargetAmazonSSMCreateOpsMetadata(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreateOpsMetadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.CreateOpsMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMCreatePatchBaseline(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.CreatePatchBaseline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.CreatePatchBaseline'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMCreateResourceDataSync(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.CreateResourceDataSync']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.CreateResourceDataSync'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDeleteActivation(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteActivation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DeleteActivation'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDeleteAssociation(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteAssociation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DeleteAssociation'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDeleteDocument(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteDocument']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonSSM.DeleteDocument'].$post(args, options))
}

export async function postXAmzTargetAmazonSSMDeleteInventory(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteInventory']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonSSM.DeleteInventory'].$post(args, options))
}

export async function postXAmzTargetAmazonSSMDeleteMaintenanceWindow(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDeleteOpsMetadata(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteOpsMetadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DeleteOpsMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDeleteParameter(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteParameter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonSSM.DeleteParameter'].$post(args, options))
}

export async function postXAmzTargetAmazonSSMDeleteParameters(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteParameters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DeleteParameters'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDeletePatchBaseline(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeletePatchBaseline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DeletePatchBaseline'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDeleteResourceDataSync(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DeleteResourceDataSync']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DeleteResourceDataSync'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDeleteResourcePolicy(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DeleteResourcePolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DeleteResourcePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDeregisterManagedInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterManagedInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DeregisterManagedInstance'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDeregisterPatchBaselineForPatchGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDeregisterTargetFromMaintenanceWindow(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDeregisterTaskFromMaintenanceWindow(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeActivations(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeActivations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeActivations'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeAssociation(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeAssociation'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeAssociationExecutionTargets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeAssociationExecutions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeAutomationExecutions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeAutomationStepExecutions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeAvailablePatches(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribeAvailablePatches']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeAvailablePatches'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeDocument(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeDocument']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeDocument'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeDocumentPermission(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribeDocumentPermission']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeDocumentPermission'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeEffectiveInstanceAssociations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeEffectivePatchesForPatchBaseline(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeInstanceAssociationsStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeInstanceInformation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstanceInformation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeInstanceInformation'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeInstancePatchStates(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeInstancePatchStatesForPatchGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeInstancePatches(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInstancePatches']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeInstancePatches'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeInventoryDeletions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTaskInvocations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutionTasks(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeMaintenanceWindowExecutions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeMaintenanceWindowSchedule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeMaintenanceWindowTargets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeMaintenanceWindowTasks(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeMaintenanceWindows(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeMaintenanceWindowsForTarget(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeOpsItems(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeOpsItems']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeOpsItems'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeParameters(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeParameters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeParameters'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribePatchBaselines(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchBaselines']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribePatchBaselines'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribePatchGroupState(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchGroupState']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribePatchGroupState'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribePatchGroups(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribePatchGroups'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribePatchProperties(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DescribePatchProperties']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribePatchProperties'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDescribeSessions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.DescribeSessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DescribeSessions'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMDisassociateOpsItemRelatedItem(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.DisassociateOpsItemRelatedItem']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.DisassociateOpsItemRelatedItem'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMGetAutomationExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.GetAutomationExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.GetAutomationExecution'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMGetCalendarState(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetCalendarState']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.GetCalendarState'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMGetCommandInvocation(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetCommandInvocation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.GetCommandInvocation'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMGetConnectionStatus(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetConnectionStatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.GetConnectionStatus'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMGetDefaultPatchBaseline(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMGetDeployablePatchSnapshotForInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMGetDocument(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetDocument']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonSSM.GetDocument'].$post(args, options))
}

export async function postXAmzTargetAmazonSSMGetInventory(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetInventory']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonSSM.GetInventory'].$post(args, options))
}

export async function postXAmzTargetAmazonSSMGetInventorySchema(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetInventorySchema']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.GetInventorySchema'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMGetMaintenanceWindow(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.GetMaintenanceWindow'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMGetMaintenanceWindowExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMGetMaintenanceWindowExecutionTaskInvocation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonSSMGetMaintenanceWindowTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMGetOpsItem(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsItem']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonSSM.GetOpsItem'].$post(args, options))
}

export async function postXAmzTargetAmazonSSMGetOpsMetadata(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsMetadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonSSM.GetOpsMetadata'].$post(args, options))
}

export async function postXAmzTargetAmazonSSMGetOpsSummary(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetOpsSummary']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonSSM.GetOpsSummary'].$post(args, options))
}

export async function postXAmzTargetAmazonSSMGetParameter(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonSSM.GetParameter'].$post(args, options))
}

export async function postXAmzTargetAmazonSSMGetParameterHistory(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameterHistory']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.GetParameterHistory'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMGetParameters(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParameters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonSSM.GetParameters'].$post(args, options))
}

export async function postXAmzTargetAmazonSSMGetParametersByPath(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetParametersByPath']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.GetParametersByPath'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMGetPatchBaseline(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetPatchBaseline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.GetPatchBaseline'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMGetPatchBaselineForPatchGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMGetResourcePolicies(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetResourcePolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.GetResourcePolicies'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMGetServiceSetting(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.GetServiceSetting']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.GetServiceSetting'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMLabelParameterVersion(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.LabelParameterVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.LabelParameterVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMListAssociationVersions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.ListAssociationVersions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.ListAssociationVersions'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMListAssociations(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListAssociations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.ListAssociations'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMListCommandInvocations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.ListCommandInvocations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.ListCommandInvocations'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMListCommands(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListCommands']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonSSM.ListCommands'].$post(args, options))
}

export async function postXAmzTargetAmazonSSMListComplianceItems(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListComplianceItems']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.ListComplianceItems'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMListComplianceSummaries(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.ListComplianceSummaries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.ListComplianceSummaries'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMListDocumentMetadataHistory(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.ListDocumentMetadataHistory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.ListDocumentMetadataHistory'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMListDocumentVersions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListDocumentVersions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.ListDocumentVersions'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMListDocuments(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListDocuments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonSSM.ListDocuments'].$post(args, options))
}

export async function postXAmzTargetAmazonSSMListInventoryEntries(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListInventoryEntries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.ListInventoryEntries'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMListOpsItemEvents(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListOpsItemEvents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.ListOpsItemEvents'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMListOpsItemRelatedItems(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.ListOpsItemRelatedItems']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.ListOpsItemRelatedItems'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMListOpsMetadata(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListOpsMetadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonSSM.ListOpsMetadata'].$post(args, options))
}

export async function postXAmzTargetAmazonSSMListResourceComplianceSummaries(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMListResourceDataSync(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListResourceDataSync']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.ListResourceDataSync'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMListTagsForResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ListTagsForResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMModifyDocumentPermission(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.ModifyDocumentPermission']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.ModifyDocumentPermission'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMPutComplianceItems(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.PutComplianceItems']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.PutComplianceItems'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMPutInventory(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.PutInventory']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonSSM.PutInventory'].$post(args, options))
}

export async function postXAmzTargetAmazonSSMPutParameter(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.PutParameter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonSSM.PutParameter'].$post(args, options))
}

export async function postXAmzTargetAmazonSSMPutResourcePolicy(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.PutResourcePolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.PutResourcePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMRegisterDefaultPatchBaseline(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMRegisterPatchBaselineForPatchGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMRegisterTargetWithMaintenanceWindow(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMRegisterTaskWithMaintenanceWindow(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMRemoveTagsFromResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.RemoveTagsFromResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.RemoveTagsFromResource'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMResetServiceSetting(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ResetServiceSetting']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.ResetServiceSetting'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMResumeSession(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.ResumeSession']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonSSM.ResumeSession'].$post(args, options))
}

export async function postXAmzTargetAmazonSSMSendAutomationSignal(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.SendAutomationSignal']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.SendAutomationSignal'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMSendCommand(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.SendCommand']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonSSM.SendCommand'].$post(args, options))
}

export async function postXAmzTargetAmazonSSMStartAssociationsOnce(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.StartAssociationsOnce']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.StartAssociationsOnce'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMStartAutomationExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.StartAutomationExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.StartAutomationExecution'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMStartChangeRequestExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.StartChangeRequestExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.StartChangeRequestExecution'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMStartSession(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.StartSession']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonSSM.StartSession'].$post(args, options))
}

export async function postXAmzTargetAmazonSSMStopAutomationExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.StopAutomationExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.StopAutomationExecution'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMTerminateSession(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.TerminateSession']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.TerminateSession'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMUnlabelParameterVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.UnlabelParameterVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.UnlabelParameterVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMUpdateAssociation(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateAssociation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.UpdateAssociation'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMUpdateAssociationStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.UpdateAssociationStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.UpdateAssociationStatus'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMUpdateDocument(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocument']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonSSM.UpdateDocument'].$post(args, options))
}

export async function postXAmzTargetAmazonSSMUpdateDocumentDefaultVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMUpdateDocumentMetadata(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.UpdateDocumentMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.UpdateDocumentMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMUpdateMaintenanceWindow(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMUpdateMaintenanceWindowTarget(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMUpdateMaintenanceWindowTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMUpdateManagedInstanceRole(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMUpdateOpsItem(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateOpsItem']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonSSM.UpdateOpsItem'].$post(args, options))
}

export async function postXAmzTargetAmazonSSMUpdateOpsMetadata(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateOpsMetadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.UpdateOpsMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMUpdatePatchBaseline(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdatePatchBaseline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.UpdatePatchBaseline'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMUpdateResourceDataSync(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonSSM.UpdateResourceDataSync']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.UpdateResourceDataSync'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonSSMUpdateServiceSetting(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonSSM.UpdateServiceSetting']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonSSM.UpdateServiceSetting'].$post(args, options),
  )
}
