import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV2MetaIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.meta.index.$get(undefined, options))
}

export async function getApiV2AbilityIndex(
  args: InferRequestType<typeof client.api.v2.ability.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ability.index.$get(args, options))
}

export async function getApiV2AbilityIdIndex(
  args: InferRequestType<(typeof client.api.v2.ability)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.ability[':id'].index.$get(args, options))
}

export async function getApiV2BerryIndex(
  args: InferRequestType<typeof client.api.v2.berry.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.berry.index.$get(args, options))
}

export async function getApiV2BerryIdIndex(
  args: InferRequestType<(typeof client.api.v2.berry)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.berry[':id'].index.$get(args, options))
}

export async function getApiV2BerryFirmnessIndex(
  args: InferRequestType<(typeof client.api.v2)['berry-firmness']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['berry-firmness'].index.$get(args, options))
}

export async function getApiV2BerryFirmnessIdIndex(
  args: InferRequestType<(typeof client.api.v2)['berry-firmness'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['berry-firmness'][':id'].index.$get(args, options))
}

export async function getApiV2BerryFlavorIndex(
  args: InferRequestType<(typeof client.api.v2)['berry-flavor']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['berry-flavor'].index.$get(args, options))
}

export async function getApiV2BerryFlavorIdIndex(
  args: InferRequestType<(typeof client.api.v2)['berry-flavor'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['berry-flavor'][':id'].index.$get(args, options))
}

export async function getApiV2CharacteristicIndex(
  args: InferRequestType<typeof client.api.v2.characteristic.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.characteristic.index.$get(args, options))
}

export async function getApiV2CharacteristicIdIndex(
  args: InferRequestType<(typeof client.api.v2.characteristic)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.characteristic[':id'].index.$get(args, options))
}

export async function getApiV2ContestTypeIndex(
  args: InferRequestType<(typeof client.api.v2)['contest-type']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['contest-type'].index.$get(args, options))
}

export async function getApiV2ContestTypeIdIndex(
  args: InferRequestType<(typeof client.api.v2)['contest-type'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['contest-type'][':id'].index.$get(args, options))
}

export async function getApiV2ContestEffectIndex(
  args: InferRequestType<(typeof client.api.v2)['contest-effect']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['contest-effect'].index.$get(args, options))
}

export async function getApiV2ContestEffectIdIndex(
  args: InferRequestType<(typeof client.api.v2)['contest-effect'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['contest-effect'][':id'].index.$get(args, options))
}

export async function getApiV2EggGroupIndex(
  args: InferRequestType<(typeof client.api.v2)['egg-group']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['egg-group'].index.$get(args, options))
}

export async function getApiV2EggGroupIdIndex(
  args: InferRequestType<(typeof client.api.v2)['egg-group'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['egg-group'][':id'].index.$get(args, options))
}

export async function getApiV2EncounterMethodIndex(
  args: InferRequestType<(typeof client.api.v2)['encounter-method']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['encounter-method'].index.$get(args, options))
}

export async function getApiV2EncounterMethodIdIndex(
  args: InferRequestType<(typeof client.api.v2)['encounter-method'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['encounter-method'][':id'].index.$get(args, options))
}

export async function getApiV2EncounterConditionIndex(
  args: InferRequestType<(typeof client.api.v2)['encounter-condition']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['encounter-condition'].index.$get(args, options))
}

export async function getApiV2EncounterConditionIdIndex(
  args: InferRequestType<(typeof client.api.v2)['encounter-condition'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['encounter-condition'][':id'].index.$get(args, options))
}

export async function getApiV2EncounterConditionValueIndex(
  args: InferRequestType<(typeof client.api.v2)['encounter-condition-value']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['encounter-condition-value'].index.$get(args, options))
}

export async function getApiV2EncounterConditionValueIdIndex(
  args: InferRequestType<
    (typeof client.api.v2)['encounter-condition-value'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2['encounter-condition-value'][':id'].index.$get(args, options),
  )
}

export async function getApiV2EvolutionChainIndex(
  args: InferRequestType<(typeof client.api.v2)['evolution-chain']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['evolution-chain'].index.$get(args, options))
}

export async function getApiV2EvolutionChainIdIndex(
  args: InferRequestType<(typeof client.api.v2)['evolution-chain'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['evolution-chain'][':id'].index.$get(args, options))
}

export async function getApiV2EvolutionTriggerIndex(
  args: InferRequestType<(typeof client.api.v2)['evolution-trigger']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['evolution-trigger'].index.$get(args, options))
}

export async function getApiV2EvolutionTriggerIdIndex(
  args: InferRequestType<(typeof client.api.v2)['evolution-trigger'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['evolution-trigger'][':id'].index.$get(args, options))
}

export async function getApiV2EvolutionVariableIndex(
  args: InferRequestType<(typeof client.api.v2)['evolution-variable']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['evolution-variable'].index.$get(args, options))
}

export async function getApiV2EvolutionVariableIdIndex(
  args: InferRequestType<(typeof client.api.v2)['evolution-variable'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['evolution-variable'][':id'].index.$get(args, options))
}

export async function getApiV2GenerationIndex(
  args: InferRequestType<typeof client.api.v2.generation.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.generation.index.$get(args, options))
}

export async function getApiV2GenerationIdIndex(
  args: InferRequestType<(typeof client.api.v2.generation)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.generation[':id'].index.$get(args, options))
}

export async function getApiV2GenderIndex(
  args: InferRequestType<typeof client.api.v2.gender.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.gender.index.$get(args, options))
}

export async function getApiV2GenderIdIndex(
  args: InferRequestType<(typeof client.api.v2.gender)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.gender[':id'].index.$get(args, options))
}

export async function getApiV2GrowthRateIndex(
  args: InferRequestType<(typeof client.api.v2)['growth-rate']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['growth-rate'].index.$get(args, options))
}

export async function getApiV2GrowthRateIdIndex(
  args: InferRequestType<(typeof client.api.v2)['growth-rate'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['growth-rate'][':id'].index.$get(args, options))
}

export async function getApiV2ItemIndex(
  args: InferRequestType<typeof client.api.v2.item.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.item.index.$get(args, options))
}

export async function getApiV2ItemIdIndex(
  args: InferRequestType<(typeof client.api.v2.item)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.item[':id'].index.$get(args, options))
}

export async function getApiV2ItemCategoryIndex(
  args: InferRequestType<(typeof client.api.v2)['item-category']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['item-category'].index.$get(args, options))
}

export async function getApiV2ItemCategoryIdIndex(
  args: InferRequestType<(typeof client.api.v2)['item-category'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['item-category'][':id'].index.$get(args, options))
}

export async function getApiV2ItemAttributeIndex(
  args: InferRequestType<(typeof client.api.v2)['item-attribute']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['item-attribute'].index.$get(args, options))
}

export async function getApiV2ItemAttributeIdIndex(
  args: InferRequestType<(typeof client.api.v2)['item-attribute'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['item-attribute'][':id'].index.$get(args, options))
}

export async function getApiV2ItemFlingEffectIndex(
  args: InferRequestType<(typeof client.api.v2)['item-fling-effect']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['item-fling-effect'].index.$get(args, options))
}

export async function getApiV2ItemFlingEffectIdIndex(
  args: InferRequestType<(typeof client.api.v2)['item-fling-effect'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['item-fling-effect'][':id'].index.$get(args, options))
}

export async function getApiV2ItemPocketIndex(
  args: InferRequestType<(typeof client.api.v2)['item-pocket']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['item-pocket'].index.$get(args, options))
}

export async function getApiV2ItemPocketIdIndex(
  args: InferRequestType<(typeof client.api.v2)['item-pocket'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['item-pocket'][':id'].index.$get(args, options))
}

export async function getApiV2CurrencyIndex(
  args: InferRequestType<typeof client.api.v2.currency.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.currency.index.$get(args, options))
}

export async function getApiV2CurrencyIdIndex(
  args: InferRequestType<(typeof client.api.v2.currency)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.currency[':id'].index.$get(args, options))
}

export async function getApiV2LanguageIndex(
  args: InferRequestType<typeof client.api.v2.language.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.language.index.$get(args, options))
}

export async function getApiV2LanguageIdIndex(
  args: InferRequestType<(typeof client.api.v2.language)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.language[':id'].index.$get(args, options))
}

export async function getApiV2LocationIndex(
  args: InferRequestType<typeof client.api.v2.location.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.location.index.$get(args, options))
}

export async function getApiV2LocationIdIndex(
  args: InferRequestType<(typeof client.api.v2.location)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.location[':id'].index.$get(args, options))
}

export async function getApiV2LocationAreaIndex(
  args: InferRequestType<(typeof client.api.v2)['location-area']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['location-area'].index.$get(args, options))
}

export async function getApiV2LocationAreaIdIndex(
  args: InferRequestType<(typeof client.api.v2)['location-area'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['location-area'][':id'].index.$get(args, options))
}

export async function getApiV2MachineIndex(
  args: InferRequestType<typeof client.api.v2.machine.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.machine.index.$get(args, options))
}

export async function getApiV2MachineIdIndex(
  args: InferRequestType<(typeof client.api.v2.machine)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.machine[':id'].index.$get(args, options))
}

export async function getApiV2MoveIndex(
  args: InferRequestType<typeof client.api.v2.move.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.move.index.$get(args, options))
}

export async function getApiV2MoveIdIndex(
  args: InferRequestType<(typeof client.api.v2.move)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.move[':id'].index.$get(args, options))
}

export async function getApiV2MoveAilmentIndex(
  args: InferRequestType<(typeof client.api.v2)['move-ailment']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['move-ailment'].index.$get(args, options))
}

export async function getApiV2MoveAilmentIdIndex(
  args: InferRequestType<(typeof client.api.v2)['move-ailment'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['move-ailment'][':id'].index.$get(args, options))
}

export async function getApiV2MoveBattleStyleIndex(
  args: InferRequestType<(typeof client.api.v2)['move-battle-style']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['move-battle-style'].index.$get(args, options))
}

export async function getApiV2MoveBattleStyleIdIndex(
  args: InferRequestType<(typeof client.api.v2)['move-battle-style'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['move-battle-style'][':id'].index.$get(args, options))
}

export async function getApiV2MoveCategoryIndex(
  args: InferRequestType<(typeof client.api.v2)['move-category']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['move-category'].index.$get(args, options))
}

export async function getApiV2MoveCategoryIdIndex(
  args: InferRequestType<(typeof client.api.v2)['move-category'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['move-category'][':id'].index.$get(args, options))
}

export async function getApiV2MoveDamageClassIndex(
  args: InferRequestType<(typeof client.api.v2)['move-damage-class']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['move-damage-class'].index.$get(args, options))
}

export async function getApiV2MoveDamageClassIdIndex(
  args: InferRequestType<(typeof client.api.v2)['move-damage-class'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['move-damage-class'][':id'].index.$get(args, options))
}

export async function getApiV2MoveLearnMethodIndex(
  args: InferRequestType<(typeof client.api.v2)['move-learn-method']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['move-learn-method'].index.$get(args, options))
}

export async function getApiV2MoveLearnMethodIdIndex(
  args: InferRequestType<(typeof client.api.v2)['move-learn-method'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['move-learn-method'][':id'].index.$get(args, options))
}

export async function getApiV2MoveTargetIndex(
  args: InferRequestType<(typeof client.api.v2)['move-target']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['move-target'].index.$get(args, options))
}

export async function getApiV2MoveTargetIdIndex(
  args: InferRequestType<(typeof client.api.v2)['move-target'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['move-target'][':id'].index.$get(args, options))
}

export async function getApiV2NatureIndex(
  args: InferRequestType<typeof client.api.v2.nature.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.nature.index.$get(args, options))
}

export async function getApiV2NatureIdIndex(
  args: InferRequestType<(typeof client.api.v2.nature)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.nature[':id'].index.$get(args, options))
}

export async function getApiV2PalParkAreaIndex(
  args: InferRequestType<(typeof client.api.v2)['pal-park-area']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['pal-park-area'].index.$get(args, options))
}

export async function getApiV2PalParkAreaIdIndex(
  args: InferRequestType<(typeof client.api.v2)['pal-park-area'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['pal-park-area'][':id'].index.$get(args, options))
}

export async function getApiV2PokedexIndex(
  args: InferRequestType<typeof client.api.v2.pokedex.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.pokedex.index.$get(args, options))
}

export async function getApiV2PokedexIdIndex(
  args: InferRequestType<(typeof client.api.v2.pokedex)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.pokedex[':id'].index.$get(args, options))
}

export async function getApiV2PokemonIndex(
  args: InferRequestType<typeof client.api.v2.pokemon.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.pokemon.index.$get(args, options))
}

export async function getApiV2PokemonIdIndex(
  args: InferRequestType<(typeof client.api.v2.pokemon)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.pokemon[':id'].index.$get(args, options))
}

export async function getApiV2PokemonColorIndex(
  args: InferRequestType<(typeof client.api.v2)['pokemon-color']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['pokemon-color'].index.$get(args, options))
}

export async function getApiV2PokemonColorIdIndex(
  args: InferRequestType<(typeof client.api.v2)['pokemon-color'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['pokemon-color'][':id'].index.$get(args, options))
}

export async function getApiV2PokemonFormIndex(
  args: InferRequestType<(typeof client.api.v2)['pokemon-form']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['pokemon-form'].index.$get(args, options))
}

export async function getApiV2PokemonFormIdIndex(
  args: InferRequestType<(typeof client.api.v2)['pokemon-form'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['pokemon-form'][':id'].index.$get(args, options))
}

export async function getApiV2PokemonHabitatIndex(
  args: InferRequestType<(typeof client.api.v2)['pokemon-habitat']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['pokemon-habitat'].index.$get(args, options))
}

export async function getApiV2PokemonHabitatIdIndex(
  args: InferRequestType<(typeof client.api.v2)['pokemon-habitat'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['pokemon-habitat'][':id'].index.$get(args, options))
}

export async function getApiV2PokemonShapeIndex(
  args: InferRequestType<(typeof client.api.v2)['pokemon-shape']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['pokemon-shape'].index.$get(args, options))
}

export async function getApiV2PokemonShapeIdIndex(
  args: InferRequestType<(typeof client.api.v2)['pokemon-shape'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['pokemon-shape'][':id'].index.$get(args, options))
}

export async function getApiV2PokemonSpeciesIndex(
  args: InferRequestType<(typeof client.api.v2)['pokemon-species']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['pokemon-species'].index.$get(args, options))
}

export async function getApiV2PokemonSpeciesIdIndex(
  args: InferRequestType<(typeof client.api.v2)['pokemon-species'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['pokemon-species'][':id'].index.$get(args, options))
}

export async function getApiV2PokeathlonStatIndex(
  args: InferRequestType<(typeof client.api.v2)['pokeathlon-stat']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['pokeathlon-stat'].index.$get(args, options))
}

export async function getApiV2PokeathlonStatIdIndex(
  args: InferRequestType<(typeof client.api.v2)['pokeathlon-stat'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['pokeathlon-stat'][':id'].index.$get(args, options))
}

export async function getApiV2RegionIndex(
  args: InferRequestType<typeof client.api.v2.region.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.region.index.$get(args, options))
}

export async function getApiV2RegionIdIndex(
  args: InferRequestType<(typeof client.api.v2.region)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.region[':id'].index.$get(args, options))
}

export async function getApiV2StatIndex(
  args: InferRequestType<typeof client.api.v2.stat.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.stat.index.$get(args, options))
}

export async function getApiV2StatIdIndex(
  args: InferRequestType<(typeof client.api.v2.stat)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.stat[':id'].index.$get(args, options))
}

export async function getApiV2SuperContestEffectIndex(
  args: InferRequestType<(typeof client.api.v2)['super-contest-effect']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['super-contest-effect'].index.$get(args, options))
}

export async function getApiV2SuperContestEffectIdIndex(
  args: InferRequestType<(typeof client.api.v2)['super-contest-effect'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['super-contest-effect'][':id'].index.$get(args, options))
}

export async function getApiV2TypeIndex(
  args: InferRequestType<typeof client.api.v2.type.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.type.index.$get(args, options))
}

export async function getApiV2TypeIdIndex(
  args: InferRequestType<(typeof client.api.v2.type)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.type[':id'].index.$get(args, options))
}

export async function getApiV2VersionIndex(
  args: InferRequestType<typeof client.api.v2.version.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.version.index.$get(args, options))
}

export async function getApiV2VersionIdIndex(
  args: InferRequestType<(typeof client.api.v2.version)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.version[':id'].index.$get(args, options))
}

export async function getApiV2VersionGroupIndex(
  args: InferRequestType<(typeof client.api.v2)['version-group']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['version-group'].index.$get(args, options))
}

export async function getApiV2VersionGroupIdIndex(
  args: InferRequestType<(typeof client.api.v2)['version-group'][':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2['version-group'][':id'].index.$get(args, options))
}

export async function getApiV2PokemonPokemonIdEncounters(
  args: InferRequestType<(typeof client.api.v2.pokemon)[':pokemon_id']['encounters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.pokemon[':pokemon_id'].encounters.$get(args, options))
}
