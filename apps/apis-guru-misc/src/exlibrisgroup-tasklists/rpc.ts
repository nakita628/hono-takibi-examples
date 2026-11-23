import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAlmawsV1TaskListsPrintouts(
  args: InferRequestType<(typeof client.almaws.v1)['task-lists']['printouts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.almaws.v1['task-lists'].printouts.$get(args, options))
}

export async function postAlmawsV1TaskListsPrintouts(
  args: InferRequestType<(typeof client.almaws.v1)['task-lists']['printouts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.almaws.v1['task-lists'].printouts.$post(args, options))
}

export async function getAlmawsV1TaskListsPrintoutsPrintoutId(
  args: InferRequestType<
    (typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.almaws.v1['task-lists'].printouts[':printout_id'].$get(args, options),
  )
}

export async function postAlmawsV1TaskListsPrintoutsPrintoutId(
  args: InferRequestType<
    (typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.almaws.v1['task-lists'].printouts[':printout_id'].$post(args, options),
  )
}

export async function getAlmawsV1TaskListsRequestedResources(
  args: InferRequestType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.almaws.v1['task-lists']['requested-resources'].$get(args, options),
  )
}

export async function postAlmawsV1TaskListsRequestedResources(
  args: InferRequestType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.almaws.v1['task-lists']['requested-resources'].$post(args, options),
  )
}

export async function getAlmawsV1TaskListsRsLendingRequests(
  args: InferRequestType<(typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.almaws.v1['task-lists'].rs['lending-requests'].$get(args, options),
  )
}

export async function postAlmawsV1TaskListsRsLendingRequests(
  args: InferRequestType<
    (typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.almaws.v1['task-lists'].rs['lending-requests'].$post(args, options),
  )
}

export async function getAlmawsV1TaskListsTest(options?: ClientRequestOptions) {
  return await parseResponse(client.almaws.v1['task-lists'].test.$get(undefined, options))
}

export async function postAlmawsV1TaskListsTest(options?: ClientRequestOptions) {
  return await parseResponse(client.almaws.v1['task-lists'].test.$post(undefined, options))
}
