import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCards(options?: ClientRequestOptions) {
  return await parseResponse(client.cards.$get(undefined, options))
}

export async function getCardsCardId(
  args: InferRequestType<(typeof client.cards)[':cardId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':cardId'].$get(args, options))
}

export async function getCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.categories.$get(undefined, options))
}

export async function getCategoriesCategory(
  args: InferRequestType<(typeof client.categories)[':category']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':category'].$get(args, options))
}

export async function getDexIds(options?: ClientRequestOptions) {
  return await parseResponse(client['dex-ids'].$get(undefined, options))
}

export async function getDexIdsDexId(
  args: InferRequestType<(typeof client)['dex-ids'][':dexId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dex-ids'][':dexId'].$get(args, options))
}

export async function getEnergyTypes(options?: ClientRequestOptions) {
  return await parseResponse(client['energy-types'].$get(undefined, options))
}

export async function getEnergyTypesEnergyType(
  args: InferRequestType<(typeof client)['energy-types'][':energy-type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['energy-types'][':energy-type'].$get(args, options))
}

export async function getHp(options?: ClientRequestOptions) {
  return await parseResponse(client.hp.$get(undefined, options))
}

export async function getHpHp(
  args: InferRequestType<(typeof client.hp)[':hp']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hp[':hp'].$get(args, options))
}

export async function getIllustrators(options?: ClientRequestOptions) {
  return await parseResponse(client.illustrators.$get(undefined, options))
}

export async function getIllustratorsIllustrator(
  args: InferRequestType<(typeof client.illustrators)[':illustrator']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.illustrators[':illustrator'].$get(args, options))
}

export async function getRarities(options?: ClientRequestOptions) {
  return await parseResponse(client.rarities.$get(undefined, options))
}

export async function getRaritiesRarity(
  args: InferRequestType<(typeof client.rarities)[':rarity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rarities[':rarity'].$get(args, options))
}

export async function getRegulationMarks(options?: ClientRequestOptions) {
  return await parseResponse(client['regulation-marks'].$get(undefined, options))
}

export async function getRegulationMarksRegulationMark(
  args: InferRequestType<(typeof client)['regulation-marks'][':regulation-mark']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['regulation-marks'][':regulation-mark'].$get(args, options))
}

export async function getRetreats(options?: ClientRequestOptions) {
  return await parseResponse(client.retreats.$get(undefined, options))
}

export async function getRetreatsRetreat(
  args: InferRequestType<(typeof client.retreats)[':retreat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.retreats[':retreat'].$get(args, options))
}

export async function getSeries(options?: ClientRequestOptions) {
  return await parseResponse(client.series.$get(undefined, options))
}

export async function getSeriesSerie(
  args: InferRequestType<(typeof client.series)[':serie']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':serie'].$get(args, options))
}

export async function getSets(options?: ClientRequestOptions) {
  return await parseResponse(client.sets.$get(undefined, options))
}

export async function getSetsSet(
  args: InferRequestType<(typeof client.sets)[':set']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sets[':set'].$get(args, options))
}

export async function getSetsSetCardLocalId(
  args: InferRequestType<(typeof client.sets)[':set'][':cardLocalId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sets[':set'][':cardLocalId'].$get(args, options))
}

export async function getStages(options?: ClientRequestOptions) {
  return await parseResponse(client.stages.$get(undefined, options))
}

export async function getStagesStage(
  args: InferRequestType<(typeof client.stages)[':stage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stages[':stage'].$get(args, options))
}

export async function getSuffixes(options?: ClientRequestOptions) {
  return await parseResponse(client.suffixes.$get(undefined, options))
}

export async function getSuffixesSuffix(
  args: InferRequestType<(typeof client.suffixes)[':suffix']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.suffixes[':suffix'].$get(args, options))
}

export async function getTrainerTypes(options?: ClientRequestOptions) {
  return await parseResponse(client['trainer-types'].$get(undefined, options))
}

export async function getTrainerTypesTrainerType(
  args: InferRequestType<(typeof client)['trainer-types'][':trainer-type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['trainer-types'][':trainer-type'].$get(args, options))
}

export async function getTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.types.$get(undefined, options))
}

export async function getTypesType(
  args: InferRequestType<(typeof client.types)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.types[':type'].$get(args, options))
}

export async function getVariants(options?: ClientRequestOptions) {
  return await parseResponse(client.variants.$get(undefined, options))
}

export async function getVariantsVariant(
  args: InferRequestType<(typeof client.variants)[':variant']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.variants[':variant'].$get(args, options))
}
