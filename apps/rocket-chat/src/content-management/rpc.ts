import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1EmojiCustomAll(
  args: InferRequestType<(typeof client.api.v1)['emoji-custom.all']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['emoji-custom.all'].$get(args, options))
}

export async function postApiV1EmojiCustomCreate(
  args: InferRequestType<(typeof client.api.v1)['emoji-custom.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['emoji-custom.create'].$post(args, options))
}

export async function postApiV1EmojiCustomDelete(
  args: InferRequestType<(typeof client.api.v1)['emoji-custom.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['emoji-custom.delete'].$post(args, options))
}

export async function getApiV1EmojiCustomList(
  args: InferRequestType<(typeof client.api.v1)['emoji-custom.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['emoji-custom.list'].$get(args, options))
}

export async function postApiV1EmojiCustomUpdate(
  args: InferRequestType<(typeof client.api.v1)['emoji-custom.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['emoji-custom.update'].$post(args, options))
}

export async function getApiV1CustomSoundsList(
  args: InferRequestType<(typeof client.api.v1)['custom-sounds.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['custom-sounds.list'].$get(args, options))
}

export async function postApiV1CustomSoundsCreate(
  args: InferRequestType<(typeof client.api.v1)['custom-sounds.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['custom-sounds.create'].$post(args, options))
}

export async function postApiV1CustomSoundsUpdate(
  args: InferRequestType<(typeof client.api.v1)['custom-sounds.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['custom-sounds.update'].$post(args, options))
}

export async function getApiV1CustomUserStatusList(
  args: InferRequestType<(typeof client.api.v1)['custom-user-status.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['custom-user-status.list'].$get(args, options))
}

export async function postApiV1CustomUserStatusCreate(
  args: InferRequestType<(typeof client.api.v1)['custom-user-status.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['custom-user-status.create'].$post(args, options))
}

export async function postApiV1CustomUserStatusUpdate(
  args: InferRequestType<(typeof client.api.v1)['custom-user-status.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['custom-user-status.update'].$post(args, options))
}

export async function postApiV1CustomUserStatusDelete(
  args: InferRequestType<(typeof client.api.v1)['custom-user-status.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['custom-user-status.delete'].$post(args, options))
}

export async function postApiV1AssetsSetAsset(
  args: InferRequestType<(typeof client.api.v1)['assets.setAsset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['assets.setAsset'].$post(args, options))
}

export async function postApiV1AssetsUnsetAsset(
  args: InferRequestType<(typeof client.api.v1)['assets.unsetAsset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['assets.unsetAsset'].$post(args, options))
}

export async function postApiV1CustomSoundsDelete(
  args: InferRequestType<(typeof client.api.v1)['custom-sounds.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['custom-sounds.delete'].$post(args, options))
}

export async function getApiV1CustomSoundsGetOne(
  args: InferRequestType<(typeof client.api.v1)['custom-sounds.getOne']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['custom-sounds.getOne'].$get(args, options))
}
