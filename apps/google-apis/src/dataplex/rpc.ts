import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function putV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$put(args, options))
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

export async function getV1NameLocations(
  args: InferRequestType<(typeof client.v1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].locations.$get(args, options))
}

export async function getV1NameOperations(
  args: InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].operations.$get(args, options))
}

export async function postV1NameCancel(
  args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:cancel'].$post(args, options))
}

export async function postV1NameRun(
  args: InferRequestType<(typeof client.v1)[':name:run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:run'].$post(args, options))
}

export async function getV1ParentActions(
  args: InferRequestType<(typeof client.v1)[':parent']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].actions.$get(args, options))
}

export async function getV1ParentAssets(
  args: InferRequestType<(typeof client.v1)[':parent']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].assets.$get(args, options))
}

export async function postV1ParentAssets(
  args: InferRequestType<(typeof client.v1)[':parent']['assets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].assets.$post(args, options))
}

export async function getV1ParentAttributes(
  args: InferRequestType<(typeof client.v1)[':parent']['attributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].attributes.$get(args, options))
}

export async function postV1ParentAttributes(
  args: InferRequestType<(typeof client.v1)[':parent']['attributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].attributes.$post(args, options))
}

export async function getV1ParentContent(
  args: InferRequestType<(typeof client.v1)[':parent']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].content.$get(args, options))
}

export async function postV1ParentContent(
  args: InferRequestType<(typeof client.v1)[':parent']['content']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].content.$post(args, options))
}

export async function getV1ParentContentitems(
  args: InferRequestType<(typeof client.v1)[':parent']['contentitems']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].contentitems.$get(args, options))
}

export async function postV1ParentContentitems(
  args: InferRequestType<(typeof client.v1)[':parent']['contentitems']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].contentitems.$post(args, options))
}

export async function getV1ParentDataAttributeBindings(
  args: InferRequestType<(typeof client.v1)[':parent']['dataAttributeBindings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].dataAttributeBindings.$get(args, options))
}

export async function postV1ParentDataAttributeBindings(
  args: InferRequestType<(typeof client.v1)[':parent']['dataAttributeBindings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].dataAttributeBindings.$post(args, options))
}

export async function getV1ParentDataScans(
  args: InferRequestType<(typeof client.v1)[':parent']['dataScans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].dataScans.$get(args, options))
}

export async function postV1ParentDataScans(
  args: InferRequestType<(typeof client.v1)[':parent']['dataScans']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].dataScans.$post(args, options))
}

export async function getV1ParentDataTaxonomies(
  args: InferRequestType<(typeof client.v1)[':parent']['dataTaxonomies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].dataTaxonomies.$get(args, options))
}

export async function postV1ParentDataTaxonomies(
  args: InferRequestType<(typeof client.v1)[':parent']['dataTaxonomies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].dataTaxonomies.$post(args, options))
}

export async function getV1ParentEntities(
  args: InferRequestType<(typeof client.v1)[':parent']['entities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].entities.$get(args, options))
}

export async function postV1ParentEntities(
  args: InferRequestType<(typeof client.v1)[':parent']['entities']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].entities.$post(args, options))
}

export async function getV1ParentEnvironments(
  args: InferRequestType<(typeof client.v1)[':parent']['environments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].environments.$get(args, options))
}

export async function postV1ParentEnvironments(
  args: InferRequestType<(typeof client.v1)[':parent']['environments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].environments.$post(args, options))
}

export async function getV1ParentJobs(
  args: InferRequestType<(typeof client.v1)[':parent']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].jobs.$get(args, options))
}

export async function getV1ParentLakes(
  args: InferRequestType<(typeof client.v1)[':parent']['lakes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].lakes.$get(args, options))
}

export async function postV1ParentLakes(
  args: InferRequestType<(typeof client.v1)[':parent']['lakes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].lakes.$post(args, options))
}

export async function getV1ParentPartitions(
  args: InferRequestType<(typeof client.v1)[':parent']['partitions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].partitions.$get(args, options))
}

export async function postV1ParentPartitions(
  args: InferRequestType<(typeof client.v1)[':parent']['partitions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].partitions.$post(args, options))
}

export async function getV1ParentSessions(
  args: InferRequestType<(typeof client.v1)[':parent']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].sessions.$get(args, options))
}

export async function getV1ParentTasks(
  args: InferRequestType<(typeof client.v1)[':parent']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].tasks.$get(args, options))
}

export async function postV1ParentTasks(
  args: InferRequestType<(typeof client.v1)[':parent']['tasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].tasks.$post(args, options))
}

export async function getV1ParentZones(
  args: InferRequestType<(typeof client.v1)[':parent']['zones']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].zones.$get(args, options))
}

export async function postV1ParentZones(
  args: InferRequestType<(typeof client.v1)[':parent']['zones']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].zones.$post(args, options))
}

export async function getV1ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:getIamPolicy'].$get(args, options))
}

export async function postV1ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:testIamPermissions'].$post(args, options))
}
