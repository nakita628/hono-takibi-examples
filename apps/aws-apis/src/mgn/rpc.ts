import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postArchiveApplication(
  args: InferRequestType<typeof client.ArchiveApplication.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ArchiveApplication.$post(args, options))
}

export async function postArchiveWave(
  args: InferRequestType<typeof client.ArchiveWave.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ArchiveWave.$post(args, options))
}

export async function postAssociateApplications(
  args: InferRequestType<typeof client.AssociateApplications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.AssociateApplications.$post(args, options))
}

export async function postAssociateSourceServers(
  args: InferRequestType<typeof client.AssociateSourceServers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.AssociateSourceServers.$post(args, options))
}

export async function postChangeServerLifeCycleState(
  args: InferRequestType<typeof client.ChangeServerLifeCycleState.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ChangeServerLifeCycleState.$post(args, options))
}

export async function postCreateApplication(
  args: InferRequestType<typeof client.CreateApplication.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreateApplication.$post(args, options))
}

export async function postCreateLaunchConfigurationTemplate(
  args: InferRequestType<typeof client.CreateLaunchConfigurationTemplate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreateLaunchConfigurationTemplate.$post(args, options))
}

export async function postCreateReplicationConfigurationTemplate(
  args: InferRequestType<typeof client.CreateReplicationConfigurationTemplate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreateReplicationConfigurationTemplate.$post(args, options))
}

export async function postCreateWave(
  args: InferRequestType<typeof client.CreateWave.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreateWave.$post(args, options))
}

export async function postDeleteApplication(
  args: InferRequestType<typeof client.DeleteApplication.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DeleteApplication.$post(args, options))
}

export async function postDeleteJob(
  args: InferRequestType<typeof client.DeleteJob.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DeleteJob.$post(args, options))
}

export async function postDeleteLaunchConfigurationTemplate(
  args: InferRequestType<typeof client.DeleteLaunchConfigurationTemplate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DeleteLaunchConfigurationTemplate.$post(args, options))
}

export async function postDeleteReplicationConfigurationTemplate(
  args: InferRequestType<typeof client.DeleteReplicationConfigurationTemplate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DeleteReplicationConfigurationTemplate.$post(args, options))
}

export async function postDeleteSourceServer(
  args: InferRequestType<typeof client.DeleteSourceServer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DeleteSourceServer.$post(args, options))
}

export async function postDeleteVcenterClient(
  args: InferRequestType<typeof client.DeleteVcenterClient.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DeleteVcenterClient.$post(args, options))
}

export async function postDeleteWave(
  args: InferRequestType<typeof client.DeleteWave.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DeleteWave.$post(args, options))
}

export async function postDescribeJobLogItems(
  args: InferRequestType<typeof client.DescribeJobLogItems.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DescribeJobLogItems.$post(args, options))
}

export async function postDescribeJobs(
  args: InferRequestType<typeof client.DescribeJobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DescribeJobs.$post(args, options))
}

export async function postDescribeLaunchConfigurationTemplates(
  args: InferRequestType<typeof client.DescribeLaunchConfigurationTemplates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DescribeLaunchConfigurationTemplates.$post(args, options))
}

export async function postDescribeReplicationConfigurationTemplates(
  args: InferRequestType<typeof client.DescribeReplicationConfigurationTemplates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DescribeReplicationConfigurationTemplates.$post(args, options))
}

export async function postDescribeSourceServers(
  args: InferRequestType<typeof client.DescribeSourceServers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DescribeSourceServers.$post(args, options))
}

export async function getDescribeVcenterClients(
  args: InferRequestType<typeof client.DescribeVcenterClients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DescribeVcenterClients.$get(args, options))
}

export async function postDisassociateApplications(
  args: InferRequestType<typeof client.DisassociateApplications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DisassociateApplications.$post(args, options))
}

export async function postDisassociateSourceServers(
  args: InferRequestType<typeof client.DisassociateSourceServers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DisassociateSourceServers.$post(args, options))
}

export async function postDisconnectFromService(
  args: InferRequestType<typeof client.DisconnectFromService.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DisconnectFromService.$post(args, options))
}

export async function postFinalizeCutover(
  args: InferRequestType<typeof client.FinalizeCutover.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.FinalizeCutover.$post(args, options))
}

export async function postGetLaunchConfiguration(
  args: InferRequestType<typeof client.GetLaunchConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetLaunchConfiguration.$post(args, options))
}

export async function postGetReplicationConfiguration(
  args: InferRequestType<typeof client.GetReplicationConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetReplicationConfiguration.$post(args, options))
}

export async function postInitializeService(
  args: InferRequestType<typeof client.InitializeService.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.InitializeService.$post(args, options))
}

export async function postListApplications(
  args: InferRequestType<typeof client.ListApplications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListApplications.$post(args, options))
}

export async function postListExportErrors(
  args: InferRequestType<typeof client.ListExportErrors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListExportErrors.$post(args, options))
}

export async function postListExports(
  args: InferRequestType<typeof client.ListExports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListExports.$post(args, options))
}

export async function postListImportErrors(
  args: InferRequestType<typeof client.ListImportErrors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListImportErrors.$post(args, options))
}

export async function postListImports(
  args: InferRequestType<typeof client.ListImports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListImports.$post(args, options))
}

export async function postListSourceServerActions(
  args: InferRequestType<typeof client.ListSourceServerActions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListSourceServerActions.$post(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function postListTemplateActions(
  args: InferRequestType<typeof client.ListTemplateActions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListTemplateActions.$post(args, options))
}

export async function postListWaves(
  args: InferRequestType<typeof client.ListWaves.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListWaves.$post(args, options))
}

export async function postMarkAsArchived(
  args: InferRequestType<typeof client.MarkAsArchived.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.MarkAsArchived.$post(args, options))
}

export async function postPutSourceServerAction(
  args: InferRequestType<typeof client.PutSourceServerAction.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PutSourceServerAction.$post(args, options))
}

export async function postPutTemplateAction(
  args: InferRequestType<typeof client.PutTemplateAction.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PutTemplateAction.$post(args, options))
}

export async function postRemoveSourceServerAction(
  args: InferRequestType<typeof client.RemoveSourceServerAction.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.RemoveSourceServerAction.$post(args, options))
}

export async function postRemoveTemplateAction(
  args: InferRequestType<typeof client.RemoveTemplateAction.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.RemoveTemplateAction.$post(args, options))
}

export async function postRetryDataReplication(
  args: InferRequestType<typeof client.RetryDataReplication.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.RetryDataReplication.$post(args, options))
}

export async function postStartCutover(
  args: InferRequestType<typeof client.StartCutover.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StartCutover.$post(args, options))
}

export async function postStartExport(
  args: InferRequestType<typeof client.StartExport.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StartExport.$post(args, options))
}

export async function postStartImport(
  args: InferRequestType<typeof client.StartImport.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StartImport.$post(args, options))
}

export async function postStartReplication(
  args: InferRequestType<typeof client.StartReplication.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StartReplication.$post(args, options))
}

export async function postStartTest(
  args: InferRequestType<typeof client.StartTest.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StartTest.$post(args, options))
}

export async function postTerminateTargetInstances(
  args: InferRequestType<typeof client.TerminateTargetInstances.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.TerminateTargetInstances.$post(args, options))
}

export async function postUnarchiveApplication(
  args: InferRequestType<typeof client.UnarchiveApplication.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UnarchiveApplication.$post(args, options))
}

export async function postUnarchiveWave(
  args: InferRequestType<typeof client.UnarchiveWave.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UnarchiveWave.$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}

export async function postUpdateApplication(
  args: InferRequestType<typeof client.UpdateApplication.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UpdateApplication.$post(args, options))
}

export async function postUpdateLaunchConfiguration(
  args: InferRequestType<typeof client.UpdateLaunchConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UpdateLaunchConfiguration.$post(args, options))
}

export async function postUpdateLaunchConfigurationTemplate(
  args: InferRequestType<typeof client.UpdateLaunchConfigurationTemplate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UpdateLaunchConfigurationTemplate.$post(args, options))
}

export async function postUpdateReplicationConfiguration(
  args: InferRequestType<typeof client.UpdateReplicationConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UpdateReplicationConfiguration.$post(args, options))
}

export async function postUpdateReplicationConfigurationTemplate(
  args: InferRequestType<typeof client.UpdateReplicationConfigurationTemplate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UpdateReplicationConfigurationTemplate.$post(args, options))
}

export async function postUpdateSourceServerReplicationType(
  args: InferRequestType<typeof client.UpdateSourceServerReplicationType.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UpdateSourceServerReplicationType.$post(args, options))
}

export async function postUpdateWave(
  args: InferRequestType<typeof client.UpdateWave.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UpdateWave.$post(args, options))
}
