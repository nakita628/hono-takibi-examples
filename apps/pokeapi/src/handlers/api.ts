import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2AbilityIdIndexRoute,
  getApiV2AbilityIndexRoute,
  getApiV2BerryFirmnessIdIndexRoute,
  getApiV2BerryFirmnessIndexRoute,
  getApiV2BerryFlavorIdIndexRoute,
  getApiV2BerryFlavorIndexRoute,
  getApiV2BerryIdIndexRoute,
  getApiV2BerryIndexRoute,
  getApiV2CharacteristicIdIndexRoute,
  getApiV2CharacteristicIndexRoute,
  getApiV2ContestEffectIdIndexRoute,
  getApiV2ContestEffectIndexRoute,
  getApiV2ContestTypeIdIndexRoute,
  getApiV2ContestTypeIndexRoute,
  getApiV2CurrencyIdIndexRoute,
  getApiV2CurrencyIndexRoute,
  getApiV2EggGroupIdIndexRoute,
  getApiV2EggGroupIndexRoute,
  getApiV2EncounterConditionIdIndexRoute,
  getApiV2EncounterConditionIndexRoute,
  getApiV2EncounterConditionValueIdIndexRoute,
  getApiV2EncounterConditionValueIndexRoute,
  getApiV2EncounterMethodIdIndexRoute,
  getApiV2EncounterMethodIndexRoute,
  getApiV2EvolutionChainIdIndexRoute,
  getApiV2EvolutionChainIndexRoute,
  getApiV2EvolutionTriggerIdIndexRoute,
  getApiV2EvolutionTriggerIndexRoute,
  getApiV2EvolutionVariableIdIndexRoute,
  getApiV2EvolutionVariableIndexRoute,
  getApiV2GenderIdIndexRoute,
  getApiV2GenderIndexRoute,
  getApiV2GenerationIdIndexRoute,
  getApiV2GenerationIndexRoute,
  getApiV2GrowthRateIdIndexRoute,
  getApiV2GrowthRateIndexRoute,
  getApiV2ItemAttributeIdIndexRoute,
  getApiV2ItemAttributeIndexRoute,
  getApiV2ItemCategoryIdIndexRoute,
  getApiV2ItemCategoryIndexRoute,
  getApiV2ItemFlingEffectIdIndexRoute,
  getApiV2ItemFlingEffectIndexRoute,
  getApiV2ItemIdIndexRoute,
  getApiV2ItemIndexRoute,
  getApiV2ItemPocketIdIndexRoute,
  getApiV2ItemPocketIndexRoute,
  getApiV2LanguageIdIndexRoute,
  getApiV2LanguageIndexRoute,
  getApiV2LocationAreaIdIndexRoute,
  getApiV2LocationAreaIndexRoute,
  getApiV2LocationIdIndexRoute,
  getApiV2LocationIndexRoute,
  getApiV2MachineIdIndexRoute,
  getApiV2MachineIndexRoute,
  getApiV2MetaIndexRoute,
  getApiV2MoveAilmentIdIndexRoute,
  getApiV2MoveAilmentIndexRoute,
  getApiV2MoveBattleStyleIdIndexRoute,
  getApiV2MoveBattleStyleIndexRoute,
  getApiV2MoveCategoryIdIndexRoute,
  getApiV2MoveCategoryIndexRoute,
  getApiV2MoveDamageClassIdIndexRoute,
  getApiV2MoveDamageClassIndexRoute,
  getApiV2MoveIdIndexRoute,
  getApiV2MoveIndexRoute,
  getApiV2MoveLearnMethodIdIndexRoute,
  getApiV2MoveLearnMethodIndexRoute,
  getApiV2MoveTargetIdIndexRoute,
  getApiV2MoveTargetIndexRoute,
  getApiV2NatureIdIndexRoute,
  getApiV2NatureIndexRoute,
  getApiV2PalParkAreaIdIndexRoute,
  getApiV2PalParkAreaIndexRoute,
  getApiV2PokeathlonStatIdIndexRoute,
  getApiV2PokeathlonStatIndexRoute,
  getApiV2PokedexIdIndexRoute,
  getApiV2PokedexIndexRoute,
  getApiV2PokemonColorIdIndexRoute,
  getApiV2PokemonColorIndexRoute,
  getApiV2PokemonFormIdIndexRoute,
  getApiV2PokemonFormIndexRoute,
  getApiV2PokemonHabitatIdIndexRoute,
  getApiV2PokemonHabitatIndexRoute,
  getApiV2PokemonIdIndexRoute,
  getApiV2PokemonIndexRoute,
  getApiV2PokemonPokemonIdEncountersRoute,
  getApiV2PokemonShapeIdIndexRoute,
  getApiV2PokemonShapeIndexRoute,
  getApiV2PokemonSpeciesIdIndexRoute,
  getApiV2PokemonSpeciesIndexRoute,
  getApiV2RegionIdIndexRoute,
  getApiV2RegionIndexRoute,
  getApiV2StatIdIndexRoute,
  getApiV2StatIndexRoute,
  getApiV2SuperContestEffectIdIndexRoute,
  getApiV2SuperContestEffectIndexRoute,
  getApiV2TypeIdIndexRoute,
  getApiV2TypeIndexRoute,
  getApiV2VersionGroupIdIndexRoute,
  getApiV2VersionGroupIndexRoute,
  getApiV2VersionIdIndexRoute,
  getApiV2VersionIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV2MetaIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AbilityIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AbilityIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BerryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BerryIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BerryFirmnessIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BerryFirmnessIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BerryFlavorIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BerryFlavorIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CharacteristicIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CharacteristicIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContestTypeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContestTypeIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContestEffectIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContestEffectIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EggGroupIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EggGroupIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EncounterMethodIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EncounterMethodIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EncounterConditionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EncounterConditionIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EncounterConditionValueIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EncounterConditionValueIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EvolutionChainIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EvolutionChainIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EvolutionTriggerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EvolutionTriggerIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EvolutionVariableIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EvolutionVariableIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GenerationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GenerationIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GenderIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GenderIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GrowthRateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GrowthRateIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItemIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItemIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItemCategoryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItemCategoryIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItemAttributeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItemAttributeIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItemFlingEffectIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItemFlingEffectIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItemPocketIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItemPocketIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CurrencyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CurrencyIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LanguageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LanguageIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LocationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LocationIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LocationAreaIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LocationAreaIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MachineIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MachineIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveAilmentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveAilmentIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveBattleStyleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveBattleStyleIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveCategoryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveCategoryIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveDamageClassIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveDamageClassIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveLearnMethodIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveLearnMethodIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveTargetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MoveTargetIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2NatureIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2NatureIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PalParkAreaIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PalParkAreaIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PokedexIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PokedexIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PokemonIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PokemonIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PokemonColorIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PokemonColorIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PokemonFormIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PokemonFormIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PokemonHabitatIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PokemonHabitatIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PokemonShapeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PokemonShapeIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PokemonSpeciesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PokemonSpeciesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PokeathlonStatIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PokeathlonStatIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RegionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RegionIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StatIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StatIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SuperContestEffectIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SuperContestEffectIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TypeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TypeIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2VersionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2VersionIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2VersionGroupIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2VersionGroupIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PokemonPokemonIdEncountersRoute, (c) => {
    throw new Error('Not implemented')
  })
