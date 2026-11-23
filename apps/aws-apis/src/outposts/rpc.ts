import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postOrdersOrderIdCancel(
  args: InferRequestType<(typeof client.orders)[':OrderId']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':OrderId'].cancel.$post(args, options))
}

export async function postOrders(
  args: InferRequestType<typeof client.orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.$post(args, options))
}

export async function getOutposts(
  args: InferRequestType<typeof client.outposts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outposts.$get(args, options))
}

export async function postOutposts(
  args: InferRequestType<typeof client.outposts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outposts.$post(args, options))
}

export async function getSites(
  args: InferRequestType<typeof client.sites.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites.$get(args, options))
}

export async function postSites(
  args: InferRequestType<typeof client.sites.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites.$post(args, options))
}

export async function getOutpostsOutpostId(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outposts[':OutpostId'].$get(args, options))
}

export async function deleteOutpostsOutpostId(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outposts[':OutpostId'].$delete(args, options))
}

export async function patchOutpostsOutpostId(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outposts[':OutpostId'].$patch(args, options))
}

export async function getSitesSiteId(
  args: InferRequestType<(typeof client.sites)[':SiteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':SiteId'].$get(args, options))
}

export async function deleteSitesSiteId(
  args: InferRequestType<(typeof client.sites)[':SiteId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':SiteId'].$delete(args, options))
}

export async function patchSitesSiteId(
  args: InferRequestType<(typeof client.sites)[':SiteId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':SiteId'].$patch(args, options))
}

export async function getCatalogItemCatalogItemId(
  args: InferRequestType<(typeof client.catalog.item)[':CatalogItemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalog.item[':CatalogItemId'].$get(args, options))
}

export async function getConnectionsConnectionId(
  args: InferRequestType<(typeof client.connections)[':ConnectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':ConnectionId'].$get(args, options))
}

export async function getOrdersOrderId(
  args: InferRequestType<(typeof client.orders)[':OrderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':OrderId'].$get(args, options))
}

export async function getOutpostsOutpostIdInstanceTypes(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['instanceTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outposts[':OutpostId'].instanceTypes.$get(args, options))
}

export async function getSitesSiteIdAddressAddressType(
  args: InferRequestType<(typeof client.sites)[':SiteId']['address#AddressType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':SiteId']['address#AddressType'].$get(args, options))
}

export async function getOutpostsOutpostIdAssets(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outposts[':OutpostId'].assets.$get(args, options))
}

export async function getCatalogItems(
  args: InferRequestType<typeof client.catalog.items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalog.items.$get(args, options))
}

export async function getListOrders(
  args: InferRequestType<(typeof client)['list-orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['list-orders'].$get(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn'].$post(args, options))
}

export async function postConnections(
  args: InferRequestType<typeof client.connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections.$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(args, options))
}

export async function putSitesSiteIdAddress(
  args: InferRequestType<(typeof client.sites)[':SiteId']['address']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':SiteId'].address.$put(args, options))
}

export async function patchSitesSiteIdRackPhysicalProperties(
  args: InferRequestType<(typeof client.sites)[':SiteId']['rackPhysicalProperties']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':SiteId'].rackPhysicalProperties.$patch(args, options))
}
