import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAddLFTagsToResource(
  args: InferRequestType<typeof client.AddLFTagsToResource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.AddLFTagsToResource.$post(args, options))
}

export async function postAssumeDecoratedRoleWithSAML(
  args: InferRequestType<typeof client.AssumeDecoratedRoleWithSAML.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.AssumeDecoratedRoleWithSAML.$post(args, options))
}

export async function postBatchGrantPermissions(
  args: InferRequestType<typeof client.BatchGrantPermissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BatchGrantPermissions.$post(args, options))
}

export async function postBatchRevokePermissions(
  args: InferRequestType<typeof client.BatchRevokePermissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BatchRevokePermissions.$post(args, options))
}

export async function postCancelTransaction(
  args: InferRequestType<typeof client.CancelTransaction.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CancelTransaction.$post(args, options))
}

export async function postCommitTransaction(
  args: InferRequestType<typeof client.CommitTransaction.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CommitTransaction.$post(args, options))
}

export async function postCreateDataCellsFilter(
  args: InferRequestType<typeof client.CreateDataCellsFilter.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreateDataCellsFilter.$post(args, options))
}

export async function postCreateLFTag(
  args: InferRequestType<typeof client.CreateLFTag.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreateLFTag.$post(args, options))
}

export async function postDeleteDataCellsFilter(
  args: InferRequestType<typeof client.DeleteDataCellsFilter.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DeleteDataCellsFilter.$post(args, options))
}

export async function postDeleteLFTag(
  args: InferRequestType<typeof client.DeleteLFTag.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DeleteLFTag.$post(args, options))
}

export async function postDeleteObjectsOnCancel(
  args: InferRequestType<typeof client.DeleteObjectsOnCancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DeleteObjectsOnCancel.$post(args, options))
}

export async function postDeregisterResource(
  args: InferRequestType<typeof client.DeregisterResource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DeregisterResource.$post(args, options))
}

export async function postDescribeResource(
  args: InferRequestType<typeof client.DescribeResource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DescribeResource.$post(args, options))
}

export async function postDescribeTransaction(
  args: InferRequestType<typeof client.DescribeTransaction.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.DescribeTransaction.$post(args, options))
}

export async function postExtendTransaction(
  args: InferRequestType<typeof client.ExtendTransaction.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ExtendTransaction.$post(args, options))
}

export async function postGetDataCellsFilter(
  args: InferRequestType<typeof client.GetDataCellsFilter.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetDataCellsFilter.$post(args, options))
}

export async function postGetDataLakeSettings(
  args: InferRequestType<typeof client.GetDataLakeSettings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetDataLakeSettings.$post(args, options))
}

export async function postGetEffectivePermissionsForPath(
  args: InferRequestType<typeof client.GetEffectivePermissionsForPath.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetEffectivePermissionsForPath.$post(args, options))
}

export async function postGetLFTag(
  args: InferRequestType<typeof client.GetLFTag.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetLFTag.$post(args, options))
}

export async function postGetQueryState(
  args: InferRequestType<typeof client.GetQueryState.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetQueryState.$post(args, options))
}

export async function postGetQueryStatistics(
  args: InferRequestType<typeof client.GetQueryStatistics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetQueryStatistics.$post(args, options))
}

export async function postGetResourceLFTags(
  args: InferRequestType<typeof client.GetResourceLFTags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetResourceLFTags.$post(args, options))
}

export async function postGetTableObjects(
  args: InferRequestType<typeof client.GetTableObjects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetTableObjects.$post(args, options))
}

export async function postGetTemporaryGluePartitionCredentials(
  args: InferRequestType<typeof client.GetTemporaryGluePartitionCredentials.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetTemporaryGluePartitionCredentials.$post(args, options))
}

export async function postGetTemporaryGlueTableCredentials(
  args: InferRequestType<typeof client.GetTemporaryGlueTableCredentials.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetTemporaryGlueTableCredentials.$post(args, options))
}

export async function postGetWorkUnitResults(
  args: InferRequestType<typeof client.GetWorkUnitResults.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetWorkUnitResults.$post(args, options))
}

export async function postGetWorkUnits(
  args: InferRequestType<typeof client.GetWorkUnits.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GetWorkUnits.$post(args, options))
}

export async function postGrantPermissions(
  args: InferRequestType<typeof client.GrantPermissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GrantPermissions.$post(args, options))
}

export async function postListDataCellsFilter(
  args: InferRequestType<typeof client.ListDataCellsFilter.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListDataCellsFilter.$post(args, options))
}

export async function postListLFTags(
  args: InferRequestType<typeof client.ListLFTags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListLFTags.$post(args, options))
}

export async function postListPermissions(
  args: InferRequestType<typeof client.ListPermissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListPermissions.$post(args, options))
}

export async function postListResources(
  args: InferRequestType<typeof client.ListResources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListResources.$post(args, options))
}

export async function postListTableStorageOptimizers(
  args: InferRequestType<typeof client.ListTableStorageOptimizers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListTableStorageOptimizers.$post(args, options))
}

export async function postListTransactions(
  args: InferRequestType<typeof client.ListTransactions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListTransactions.$post(args, options))
}

export async function postPutDataLakeSettings(
  args: InferRequestType<typeof client.PutDataLakeSettings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PutDataLakeSettings.$post(args, options))
}

export async function postRegisterResource(
  args: InferRequestType<typeof client.RegisterResource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.RegisterResource.$post(args, options))
}

export async function postRemoveLFTagsFromResource(
  args: InferRequestType<typeof client.RemoveLFTagsFromResource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.RemoveLFTagsFromResource.$post(args, options))
}

export async function postRevokePermissions(
  args: InferRequestType<typeof client.RevokePermissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.RevokePermissions.$post(args, options))
}

export async function postSearchDatabasesByLFTags(
  args: InferRequestType<typeof client.SearchDatabasesByLFTags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SearchDatabasesByLFTags.$post(args, options))
}

export async function postSearchTablesByLFTags(
  args: InferRequestType<typeof client.SearchTablesByLFTags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.SearchTablesByLFTags.$post(args, options))
}

export async function postStartQueryPlanning(
  args: InferRequestType<typeof client.StartQueryPlanning.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StartQueryPlanning.$post(args, options))
}

export async function postStartTransaction(
  args: InferRequestType<typeof client.StartTransaction.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StartTransaction.$post(args, options))
}

export async function postUpdateDataCellsFilter(
  args: InferRequestType<typeof client.UpdateDataCellsFilter.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UpdateDataCellsFilter.$post(args, options))
}

export async function postUpdateLFTag(
  args: InferRequestType<typeof client.UpdateLFTag.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UpdateLFTag.$post(args, options))
}

export async function postUpdateResource(
  args: InferRequestType<typeof client.UpdateResource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UpdateResource.$post(args, options))
}

export async function postUpdateTableObjects(
  args: InferRequestType<typeof client.UpdateTableObjects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UpdateTableObjects.$post(args, options))
}

export async function postUpdateTableStorageOptimizer(
  args: InferRequestType<typeof client.UpdateTableStorageOptimizer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UpdateTableStorageOptimizer.$post(args, options))
}
