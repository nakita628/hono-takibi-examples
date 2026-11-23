import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putPet(
  args: InferRequestType<typeof client.pet.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pet.$put(args, options))
}

export async function postPet(
  args: InferRequestType<typeof client.pet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pet.$post(args, options))
}

export async function getPetFindByStatus(
  args: InferRequestType<typeof client.pet.findByStatus.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pet.findByStatus.$get(args, options))
}

export async function getPetFindByTags(
  args: InferRequestType<typeof client.pet.findByTags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pet.findByTags.$get(args, options))
}

export async function getPetPetId(
  args: InferRequestType<(typeof client.pet)[':petId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pet[':petId'].$get(args, options))
}

export async function postPetPetId(
  args: InferRequestType<(typeof client.pet)[':petId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pet[':petId'].$post(args, options))
}

export async function deletePetPetId(
  args: InferRequestType<(typeof client.pet)[':petId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pet[':petId'].$delete(args, options))
}

export async function postPetPetIdUploadImage(
  args: InferRequestType<(typeof client.pet)[':petId']['uploadImage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pet[':petId'].uploadImage.$post(args, options))
}

export async function getStoreInventory(options?: ClientRequestOptions) {
  return await parseResponse(client.store.inventory.$get(undefined, options))
}

export async function postStoreOrder(
  args: InferRequestType<typeof client.store.order.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.order.$post(args, options))
}

export async function getStoreOrderOrderId(
  args: InferRequestType<(typeof client.store.order)[':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.order[':orderId'].$get(args, options))
}

export async function deleteStoreOrderOrderId(
  args: InferRequestType<(typeof client.store.order)[':orderId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.store.order[':orderId'].$delete(args, options))
}

export async function postUser(
  args: InferRequestType<typeof client.user.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.$post(args, options))
}

export async function postUserCreateWithList(
  args: InferRequestType<typeof client.user.createWithList.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.createWithList.$post(args, options))
}

export async function getUserLogin(
  args: InferRequestType<typeof client.user.login.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.login.$get(args, options))
}

export async function getUserLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.user.logout.$get(undefined, options))
}

export async function getUserUsername(
  args: InferRequestType<(typeof client.user)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':username'].$get(args, options))
}

export async function putUserUsername(
  args: InferRequestType<(typeof client.user)[':username']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':username'].$put(args, options))
}

export async function deleteUserUsername(
  args: InferRequestType<(typeof client.user)[':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':username'].$delete(args, options))
}
