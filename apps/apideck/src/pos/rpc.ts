import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getPosItems(
  args: InferRequestType<typeof client.pos.items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.items.$get(args, options))
}

export async function postPosItems(
  args: InferRequestType<typeof client.pos.items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.items.$post(args, options))
}

export async function getPosItemsId(
  args: InferRequestType<(typeof client.pos.items)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.items[':id'].$get(args, options))
}

export async function deletePosItemsId(
  args: InferRequestType<(typeof client.pos.items)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.items[':id'].$delete(args, options))
}

export async function patchPosItemsId(
  args: InferRequestType<(typeof client.pos.items)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.items[':id'].$patch(args, options))
}

export async function getPosLocations(
  args: InferRequestType<typeof client.pos.locations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.locations.$get(args, options))
}

export async function postPosLocations(
  args: InferRequestType<typeof client.pos.locations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.locations.$post(args, options))
}

export async function getPosLocationsId(
  args: InferRequestType<(typeof client.pos.locations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.locations[':id'].$get(args, options))
}

export async function deletePosLocationsId(
  args: InferRequestType<(typeof client.pos.locations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.locations[':id'].$delete(args, options))
}

export async function patchPosLocationsId(
  args: InferRequestType<(typeof client.pos.locations)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.locations[':id'].$patch(args, options))
}

export async function getPosMerchants(
  args: InferRequestType<typeof client.pos.merchants.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.merchants.$get(args, options))
}

export async function postPosMerchants(
  args: InferRequestType<typeof client.pos.merchants.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.merchants.$post(args, options))
}

export async function getPosMerchantsId(
  args: InferRequestType<(typeof client.pos.merchants)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.merchants[':id'].$get(args, options))
}

export async function deletePosMerchantsId(
  args: InferRequestType<(typeof client.pos.merchants)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.merchants[':id'].$delete(args, options))
}

export async function patchPosMerchantsId(
  args: InferRequestType<(typeof client.pos.merchants)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.merchants[':id'].$patch(args, options))
}

export async function getPosModifierGroups(
  args: InferRequestType<(typeof client.pos)['modifier-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos['modifier-groups'].$get(args, options))
}

export async function postPosModifierGroups(
  args: InferRequestType<(typeof client.pos)['modifier-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos['modifier-groups'].$post(args, options))
}

export async function getPosModifierGroupsId(
  args: InferRequestType<(typeof client.pos)['modifier-groups'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos['modifier-groups'][':id'].$get(args, options))
}

export async function deletePosModifierGroupsId(
  args: InferRequestType<(typeof client.pos)['modifier-groups'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos['modifier-groups'][':id'].$delete(args, options))
}

export async function patchPosModifierGroupsId(
  args: InferRequestType<(typeof client.pos)['modifier-groups'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos['modifier-groups'][':id'].$patch(args, options))
}

export async function getPosModifiers(
  args: InferRequestType<typeof client.pos.modifiers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.modifiers.$get(args, options))
}

export async function postPosModifiers(
  args: InferRequestType<typeof client.pos.modifiers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.modifiers.$post(args, options))
}

export async function getPosModifiersId(
  args: InferRequestType<(typeof client.pos.modifiers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.modifiers[':id'].$get(args, options))
}

export async function deletePosModifiersId(
  args: InferRequestType<(typeof client.pos.modifiers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.modifiers[':id'].$delete(args, options))
}

export async function patchPosModifiersId(
  args: InferRequestType<(typeof client.pos.modifiers)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.modifiers[':id'].$patch(args, options))
}

export async function getPosOrderTypes(
  args: InferRequestType<(typeof client.pos)['order-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos['order-types'].$get(args, options))
}

export async function postPosOrderTypes(
  args: InferRequestType<(typeof client.pos)['order-types']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos['order-types'].$post(args, options))
}

export async function getPosOrderTypesId(
  args: InferRequestType<(typeof client.pos)['order-types'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos['order-types'][':id'].$get(args, options))
}

export async function deletePosOrderTypesId(
  args: InferRequestType<(typeof client.pos)['order-types'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos['order-types'][':id'].$delete(args, options))
}

export async function patchPosOrderTypesId(
  args: InferRequestType<(typeof client.pos)['order-types'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos['order-types'][':id'].$patch(args, options))
}

export async function getPosOrders(
  args: InferRequestType<typeof client.pos.orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.orders.$get(args, options))
}

export async function postPosOrders(
  args: InferRequestType<typeof client.pos.orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.orders.$post(args, options))
}

export async function getPosOrdersId(
  args: InferRequestType<(typeof client.pos.orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.orders[':id'].$get(args, options))
}

export async function deletePosOrdersId(
  args: InferRequestType<(typeof client.pos.orders)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.orders[':id'].$delete(args, options))
}

export async function patchPosOrdersId(
  args: InferRequestType<(typeof client.pos.orders)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.orders[':id'].$patch(args, options))
}

export async function postPosOrdersIdPay(
  args: InferRequestType<(typeof client.pos.orders)[':id']['pay']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.orders[':id'].pay.$post(args, options))
}

export async function getPosPayments(
  args: InferRequestType<typeof client.pos.payments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.payments.$get(args, options))
}

export async function postPosPayments(
  args: InferRequestType<typeof client.pos.payments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.payments.$post(args, options))
}

export async function getPosPaymentsId(
  args: InferRequestType<(typeof client.pos.payments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.payments[':id'].$get(args, options))
}

export async function deletePosPaymentsId(
  args: InferRequestType<(typeof client.pos.payments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.payments[':id'].$delete(args, options))
}

export async function patchPosPaymentsId(
  args: InferRequestType<(typeof client.pos.payments)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.payments[':id'].$patch(args, options))
}

export async function getPosTenders(
  args: InferRequestType<typeof client.pos.tenders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.tenders.$get(args, options))
}

export async function postPosTenders(
  args: InferRequestType<typeof client.pos.tenders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.tenders.$post(args, options))
}

export async function getPosTendersId(
  args: InferRequestType<(typeof client.pos.tenders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.tenders[':id'].$get(args, options))
}

export async function deletePosTendersId(
  args: InferRequestType<(typeof client.pos.tenders)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.tenders[':id'].$delete(args, options))
}

export async function patchPosTendersId(
  args: InferRequestType<(typeof client.pos.tenders)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.tenders[':id'].$patch(args, options))
}
