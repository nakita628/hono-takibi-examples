import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetBaldrApiServiceCopyBackupToRegion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=BaldrApiService.CopyBackupToRegion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=BaldrApiService.CopyBackupToRegion'].$post(args, options),
  )
}

export async function postXAmzTargetBaldrApiServiceCreateCluster(
  args: InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.CreateCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=BaldrApiService.CreateCluster'].$post(args, options),
  )
}

export async function postXAmzTargetBaldrApiServiceCreateHsm(
  args: InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.CreateHsm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=BaldrApiService.CreateHsm'].$post(args, options))
}

export async function postXAmzTargetBaldrApiServiceDeleteBackup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.DeleteBackup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=BaldrApiService.DeleteBackup'].$post(args, options),
  )
}

export async function postXAmzTargetBaldrApiServiceDeleteCluster(
  args: InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.DeleteCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=BaldrApiService.DeleteCluster'].$post(args, options),
  )
}

export async function postXAmzTargetBaldrApiServiceDeleteHsm(
  args: InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.DeleteHsm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=BaldrApiService.DeleteHsm'].$post(args, options))
}

export async function postXAmzTargetBaldrApiServiceDescribeBackups(
  args: InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.DescribeBackups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=BaldrApiService.DescribeBackups'].$post(args, options),
  )
}

export async function postXAmzTargetBaldrApiServiceDescribeClusters(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=BaldrApiService.DescribeClusters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=BaldrApiService.DescribeClusters'].$post(args, options),
  )
}

export async function postXAmzTargetBaldrApiServiceInitializeCluster(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=BaldrApiService.InitializeCluster']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=BaldrApiService.InitializeCluster'].$post(args, options),
  )
}

export async function postXAmzTargetBaldrApiServiceListTags(
  args: InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.ListTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=BaldrApiService.ListTags'].$post(args, options))
}

export async function postXAmzTargetBaldrApiServiceModifyBackupAttributes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=BaldrApiService.ModifyBackupAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=BaldrApiService.ModifyBackupAttributes'].$post(args, options),
  )
}

export async function postXAmzTargetBaldrApiServiceModifyCluster(
  args: InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.ModifyCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=BaldrApiService.ModifyCluster'].$post(args, options),
  )
}

export async function postXAmzTargetBaldrApiServiceRestoreBackup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.RestoreBackup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=BaldrApiService.RestoreBackup'].$post(args, options),
  )
}

export async function postXAmzTargetBaldrApiServiceTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=BaldrApiService.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetBaldrApiServiceUntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=BaldrApiService.UntagResource'].$post(args, options),
  )
}
