import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Matters(
  args: InferRequestType<typeof client.v1.matters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.matters.$get(args, options))
}

export async function postV1Matters(
  args: InferRequestType<typeof client.v1.matters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.matters.$post(args, options))
}

export async function getV1MattersMatterId(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.matters[':matterId'].$get(args, options))
}

export async function putV1MattersMatterId(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.matters[':matterId'].$put(args, options))
}

export async function deleteV1MattersMatterId(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.matters[':matterId'].$delete(args, options))
}

export async function getV1MattersMatterIdExports(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['exports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.matters[':matterId'].exports.$get(args, options))
}

export async function postV1MattersMatterIdExports(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['exports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.matters[':matterId'].exports.$post(args, options))
}

export async function getV1MattersMatterIdExportsExportId(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['exports'][':exportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.matters[':matterId'].exports[':exportId'].$get(args, options),
  )
}

export async function deleteV1MattersMatterIdExportsExportId(
  args: InferRequestType<
    (typeof client.v1.matters)[':matterId']['exports'][':exportId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.matters[':matterId'].exports[':exportId'].$delete(args, options),
  )
}

export async function getV1MattersMatterIdHolds(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['holds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.matters[':matterId'].holds.$get(args, options))
}

export async function postV1MattersMatterIdHolds(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['holds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.matters[':matterId'].holds.$post(args, options))
}

export async function getV1MattersMatterIdHoldsHoldId(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.matters[':matterId'].holds[':holdId'].$get(args, options))
}

export async function putV1MattersMatterIdHoldsHoldId(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.matters[':matterId'].holds[':holdId'].$put(args, options))
}

export async function deleteV1MattersMatterIdHoldsHoldId(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['holds'][':holdId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.matters[':matterId'].holds[':holdId'].$delete(args, options))
}

export async function getV1MattersMatterIdHoldsHoldIdAccounts(
  args: InferRequestType<
    (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.matters[':matterId'].holds[':holdId'].accounts.$get(args, options),
  )
}

export async function postV1MattersMatterIdHoldsHoldIdAccounts(
  args: InferRequestType<
    (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.matters[':matterId'].holds[':holdId'].accounts.$post(args, options),
  )
}

export async function deleteV1MattersMatterIdHoldsHoldIdAccountsAccountId(
  args: InferRequestType<
    (typeof client.v1.matters)[':matterId']['holds'][':holdId']['accounts'][':accountId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.matters[':matterId'].holds[':holdId'].accounts[':accountId'].$delete(args, options),
  )
}

export async function postV1MattersMatterIdHoldsHoldIdAddHeldAccounts(
  args: InferRequestType<
    (typeof client.v1.matters)[':matterId']['holds'][':holdId:addHeldAccounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.matters[':matterId'].holds[':holdId:addHeldAccounts'].$post(args, options),
  )
}

export async function postV1MattersMatterIdHoldsHoldIdRemoveHeldAccounts(
  args: InferRequestType<
    (typeof client.v1.matters)[':matterId']['holds'][':holdId:removeHeldAccounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.matters[':matterId'].holds[':holdId:removeHeldAccounts'].$post(args, options),
  )
}

export async function getV1MattersMatterIdSavedQueries(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['savedQueries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.matters[':matterId'].savedQueries.$get(args, options))
}

export async function postV1MattersMatterIdSavedQueries(
  args: InferRequestType<(typeof client.v1.matters)[':matterId']['savedQueries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.matters[':matterId'].savedQueries.$post(args, options))
}

export async function getV1MattersMatterIdSavedQueriesSavedQueryId(
  args: InferRequestType<
    (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.matters[':matterId'].savedQueries[':savedQueryId'].$get(args, options),
  )
}

export async function deleteV1MattersMatterIdSavedQueriesSavedQueryId(
  args: InferRequestType<
    (typeof client.v1.matters)[':matterId']['savedQueries'][':savedQueryId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.matters[':matterId'].savedQueries[':savedQueryId'].$delete(args, options),
  )
}

export async function postV1MattersMatterIdAddPermissions(
  args: InferRequestType<(typeof client.v1.matters)[':matterId:addPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.matters[':matterId:addPermissions'].$post(args, options))
}

export async function postV1MattersMatterIdClose(
  args: InferRequestType<(typeof client.v1.matters)[':matterId:close']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.matters[':matterId:close'].$post(args, options))
}

export async function postV1MattersMatterIdCount(
  args: InferRequestType<(typeof client.v1.matters)[':matterId:count']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.matters[':matterId:count'].$post(args, options))
}

export async function postV1MattersMatterIdRemovePermissions(
  args: InferRequestType<(typeof client.v1.matters)[':matterId:removePermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.matters[':matterId:removePermissions'].$post(args, options))
}

export async function postV1MattersMatterIdReopen(
  args: InferRequestType<(typeof client.v1.matters)[':matterId:reopen']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.matters[':matterId:reopen'].$post(args, options))
}

export async function postV1MattersMatterIdUndelete(
  args: InferRequestType<(typeof client.v1.matters)[':matterId:undelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.matters[':matterId:undelete'].$post(args, options))
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

export async function postV1NameCancel(
  args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:cancel'].$post(args, options))
}
