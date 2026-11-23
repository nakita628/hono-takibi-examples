import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetCloudHsmFrontendServiceAddTagsToResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource'].$post(args, options),
  )
}

export async function postXAmzTargetCloudHsmFrontendServiceCreateHapg(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateHapg']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CloudHsmFrontendService.CreateHapg'].$post(args, options),
  )
}

export async function postXAmzTargetCloudHsmFrontendServiceCreateHsm(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateHsm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CloudHsmFrontendService.CreateHsm'].$post(args, options),
  )
}

export async function postXAmzTargetCloudHsmFrontendServiceCreateLunaClient(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient'].$post(args, options),
  )
}

export async function postXAmzTargetCloudHsmFrontendServiceDeleteHapg(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteHapg']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CloudHsmFrontendService.DeleteHapg'].$post(args, options),
  )
}

export async function postXAmzTargetCloudHsmFrontendServiceDeleteHsm(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteHsm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CloudHsmFrontendService.DeleteHsm'].$post(args, options),
  )
}

export async function postXAmzTargetCloudHsmFrontendServiceDeleteLunaClient(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient'].$post(args, options),
  )
}

export async function postXAmzTargetCloudHsmFrontendServiceDescribeHapg(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeHapg']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CloudHsmFrontendService.DescribeHapg'].$post(args, options),
  )
}

export async function postXAmzTargetCloudHsmFrontendServiceDescribeHsm(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeHsm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CloudHsmFrontendService.DescribeHsm'].$post(args, options),
  )
}

export async function postXAmzTargetCloudHsmFrontendServiceDescribeLunaClient(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient'].$post(args, options),
  )
}

export async function postXAmzTargetCloudHsmFrontendServiceGetConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CloudHsmFrontendService.GetConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CloudHsmFrontendService.GetConfig'].$post(args, options),
  )
}

export async function postXAmzTargetCloudHsmFrontendServiceListAvailableZones(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones'].$post(args, options),
  )
}

export async function postXAmzTargetCloudHsmFrontendServiceListHapgs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListHapgs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CloudHsmFrontendService.ListHapgs'].$post(args, options),
  )
}

export async function postXAmzTargetCloudHsmFrontendServiceListHsms(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListHsms']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CloudHsmFrontendService.ListHsms'].$post(args, options),
  )
}

export async function postXAmzTargetCloudHsmFrontendServiceListLunaClients(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListLunaClients']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CloudHsmFrontendService.ListLunaClients'].$post(args, options),
  )
}

export async function postXAmzTargetCloudHsmFrontendServiceListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetCloudHsmFrontendServiceModifyHapg(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyHapg']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CloudHsmFrontendService.ModifyHapg'].$post(args, options),
  )
}

export async function postXAmzTargetCloudHsmFrontendServiceModifyHsm(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyHsm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CloudHsmFrontendService.ModifyHsm'].$post(args, options),
  )
}

export async function postXAmzTargetCloudHsmFrontendServiceModifyLunaClient(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient'].$post(args, options),
  )
}

export async function postXAmzTargetCloudHsmFrontendServiceRemoveTagsFromResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource'].$post(args, options),
  )
}
