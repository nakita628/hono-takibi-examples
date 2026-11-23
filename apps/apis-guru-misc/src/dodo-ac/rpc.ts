import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getNhArt(
  args: InferRequestType<typeof client.nh.art.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.art.$get(args, options))
}

export async function getNhArtArtwork(
  args: InferRequestType<(typeof client.nh.art)[':artwork']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.art[':artwork'].$get(args, options))
}

export async function getNhBugs(
  args: InferRequestType<typeof client.nh.bugs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.bugs.$get(args, options))
}

export async function getNhBugsBug(
  args: InferRequestType<(typeof client.nh.bugs)[':bug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.bugs[':bug'].$get(args, options))
}

export async function getNhClothing(
  args: InferRequestType<typeof client.nh.clothing.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.clothing.$get(args, options))
}

export async function getNhClothingClothing(
  args: InferRequestType<(typeof client.nh.clothing)[':clothing']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.clothing[':clothing'].$get(args, options))
}

export async function getNhEvents(
  args: InferRequestType<typeof client.nh.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.events.$get(args, options))
}

export async function getNhFish(
  args: InferRequestType<typeof client.nh.fish.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.fish.$get(args, options))
}

export async function getNhFishFish(
  args: InferRequestType<(typeof client.nh.fish)[':fish']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.fish[':fish'].$get(args, options))
}

export async function getNhFossilsAll(
  args: InferRequestType<typeof client.nh.fossils.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.fossils.all.$get(args, options))
}

export async function getNhFossilsAllFossil(
  args: InferRequestType<(typeof client.nh.fossils.all)[':fossil']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.fossils.all[':fossil'].$get(args, options))
}

export async function getNhFossilsGroups(
  args: InferRequestType<typeof client.nh.fossils.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.fossils.groups.$get(args, options))
}

export async function getNhFossilsGroupsFossilGroup(
  args: InferRequestType<(typeof client.nh.fossils.groups)[':fossil_group']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.fossils.groups[':fossil_group'].$get(args, options))
}

export async function getNhFossilsIndividuals(
  args: InferRequestType<typeof client.nh.fossils.individuals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.fossils.individuals.$get(args, options))
}

export async function getNhFossilsIndividualsFossil(
  args: InferRequestType<(typeof client.nh.fossils.individuals)[':fossil']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.fossils.individuals[':fossil'].$get(args, options))
}

export async function getNhFurniture(
  args: InferRequestType<typeof client.nh.furniture.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.furniture.$get(args, options))
}

export async function getNhFurnitureFurniture(
  args: InferRequestType<(typeof client.nh.furniture)[':furniture']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.furniture[':furniture'].$get(args, options))
}

export async function getNhInterior(
  args: InferRequestType<typeof client.nh.interior.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.interior.$get(args, options))
}

export async function getNhInteriorItem(
  args: InferRequestType<(typeof client.nh.interior)[':item']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.interior[':item'].$get(args, options))
}

export async function getNhItems(
  args: InferRequestType<typeof client.nh.items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.items.$get(args, options))
}

export async function getNhItemsItem(
  args: InferRequestType<(typeof client.nh.items)[':item']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.items[':item'].$get(args, options))
}

export async function getNhPhotos(
  args: InferRequestType<typeof client.nh.photos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.photos.$get(args, options))
}

export async function getNhPhotosItem(
  args: InferRequestType<(typeof client.nh.photos)[':item']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.photos[':item'].$get(args, options))
}

export async function getNhRecipes(
  args: InferRequestType<typeof client.nh.recipes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.recipes.$get(args, options))
}

export async function getNhRecipesItem(
  args: InferRequestType<(typeof client.nh.recipes)[':item']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.recipes[':item'].$get(args, options))
}

export async function getNhSea(
  args: InferRequestType<typeof client.nh.sea.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.sea.$get(args, options))
}

export async function getNhSeaSeaCreature(
  args: InferRequestType<(typeof client.nh.sea)[':sea_creature']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.sea[':sea_creature'].$get(args, options))
}

export async function getNhTools(
  args: InferRequestType<typeof client.nh.tools.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.tools.$get(args, options))
}

export async function getNhToolsTool(
  args: InferRequestType<(typeof client.nh.tools)[':tool']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nh.tools[':tool'].$get(args, options))
}

export async function getVillagers(
  args: InferRequestType<typeof client.villagers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.villagers.$get(args, options))
}
