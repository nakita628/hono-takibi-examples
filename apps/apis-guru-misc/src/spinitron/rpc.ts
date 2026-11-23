import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getPersonas(
  args: InferRequestType<typeof client.personas.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.personas.$get(args, options))
}

export async function getPersonasId(
  args: InferRequestType<(typeof client.personas)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.personas[':id'].$get(args, options))
}

export async function getPlaylists(
  args: InferRequestType<typeof client.playlists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists.$get(args, options))
}

export async function getPlaylistsId(
  args: InferRequestType<(typeof client.playlists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists[':id'].$get(args, options))
}

export async function getShows(
  args: InferRequestType<typeof client.shows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows.$get(args, options))
}

export async function getShowsId(
  args: InferRequestType<(typeof client.shows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].$get(args, options))
}

export async function getSpins(
  args: InferRequestType<typeof client.spins.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spins.$get(args, options))
}

export async function postSpins(
  args: InferRequestType<typeof client.spins.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spins.$post(args, options))
}

export async function getSpinsId(
  args: InferRequestType<(typeof client.spins)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spins[':id'].$get(args, options))
}
