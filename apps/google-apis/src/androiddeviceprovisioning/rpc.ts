import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Customers(
  args: InferRequestType<typeof client.v1.customers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers.$get(args, options))
}

export async function postV1PartnersMetadataOwnerIdDevicesDeviceIdMetadata(
  args: InferRequestType<
    (typeof client.v1.partners)[':metadataOwnerId']['devices'][':deviceId']['metadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.partners[':metadataOwnerId'].devices[':deviceId'].metadata.$post(args, options),
  )
}

export async function getV1PartnersPartnerIdCustomers(
  args: InferRequestType<(typeof client.v1.partners)[':partnerId']['customers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.partners[':partnerId'].customers.$get(args, options))
}

export async function postV1PartnersPartnerIdDevicesClaim(
  args: InferRequestType<(typeof client.v1.partners)[':partnerId']['devices:claim']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.partners[':partnerId']['devices:claim'].$post(args, options))
}

export async function postV1PartnersPartnerIdDevicesClaimAsync(
  args: InferRequestType<(typeof client.v1.partners)[':partnerId']['devices:claimAsync']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.partners[':partnerId']['devices:claimAsync'].$post(args, options),
  )
}

export async function postV1PartnersPartnerIdDevicesFindByIdentifier(
  args: InferRequestType<
    (typeof client.v1.partners)[':partnerId']['devices:findByIdentifier']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.partners[':partnerId']['devices:findByIdentifier'].$post(args, options),
  )
}

export async function postV1PartnersPartnerIdDevicesFindByOwner(
  args: InferRequestType<(typeof client.v1.partners)[':partnerId']['devices:findByOwner']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.partners[':partnerId']['devices:findByOwner'].$post(args, options),
  )
}

export async function postV1PartnersPartnerIdDevicesUnclaim(
  args: InferRequestType<(typeof client.v1.partners)[':partnerId']['devices:unclaim']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.partners[':partnerId']['devices:unclaim'].$post(args, options),
  )
}

export async function postV1PartnersPartnerIdDevicesUnclaimAsync(
  args: InferRequestType<
    (typeof client.v1.partners)[':partnerId']['devices:unclaimAsync']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.partners[':partnerId']['devices:unclaimAsync'].$post(args, options),
  )
}

export async function postV1PartnersPartnerIdDevicesUpdateMetadataAsync(
  args: InferRequestType<
    (typeof client.v1.partners)[':partnerId']['devices:updateMetadataAsync']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.partners[':partnerId']['devices:updateMetadataAsync'].$post(args, options),
  )
}

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function deleteV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$delete(args, options))
}

export async function patchV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$patch(args, options))
}

export async function getV1ParentConfigurations(
  args: InferRequestType<(typeof client.v1)[':parent']['configurations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].configurations.$get(args, options))
}

export async function postV1ParentConfigurations(
  args: InferRequestType<(typeof client.v1)[':parent']['configurations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].configurations.$post(args, options))
}

export async function getV1ParentCustomers(
  args: InferRequestType<(typeof client.v1)[':parent']['customers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].customers.$get(args, options))
}

export async function postV1ParentCustomers(
  args: InferRequestType<(typeof client.v1)[':parent']['customers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].customers.$post(args, options))
}

export async function getV1ParentDevices(
  args: InferRequestType<(typeof client.v1)[':parent']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].devices.$get(args, options))
}

export async function postV1ParentDevicesApplyConfiguration(
  args: InferRequestType<(typeof client.v1)[':parent']['devices:applyConfiguration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':parent']['devices:applyConfiguration'].$post(args, options),
  )
}

export async function postV1ParentDevicesRemoveConfiguration(
  args: InferRequestType<(typeof client.v1)[':parent']['devices:removeConfiguration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':parent']['devices:removeConfiguration'].$post(args, options),
  )
}

export async function postV1ParentDevicesUnclaim(
  args: InferRequestType<(typeof client.v1)[':parent']['devices:unclaim']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['devices:unclaim'].$post(args, options))
}

export async function getV1ParentDpcs(
  args: InferRequestType<(typeof client.v1)[':parent']['dpcs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].dpcs.$get(args, options))
}

export async function getV1ParentVendors(
  args: InferRequestType<(typeof client.v1)[':parent']['vendors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].vendors.$get(args, options))
}
