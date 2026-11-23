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
} from './routes'
import {
  getApiV2AbilityIdIndexRouteHandler,
  getApiV2AbilityIndexRouteHandler,
  getApiV2BerryFirmnessIdIndexRouteHandler,
  getApiV2BerryFirmnessIndexRouteHandler,
  getApiV2BerryFlavorIdIndexRouteHandler,
  getApiV2BerryFlavorIndexRouteHandler,
  getApiV2BerryIdIndexRouteHandler,
  getApiV2BerryIndexRouteHandler,
  getApiV2CharacteristicIdIndexRouteHandler,
  getApiV2CharacteristicIndexRouteHandler,
  getApiV2ContestEffectIdIndexRouteHandler,
  getApiV2ContestEffectIndexRouteHandler,
  getApiV2ContestTypeIdIndexRouteHandler,
  getApiV2ContestTypeIndexRouteHandler,
  getApiV2CurrencyIdIndexRouteHandler,
  getApiV2CurrencyIndexRouteHandler,
  getApiV2EggGroupIdIndexRouteHandler,
  getApiV2EggGroupIndexRouteHandler,
  getApiV2EncounterConditionIdIndexRouteHandler,
  getApiV2EncounterConditionIndexRouteHandler,
  getApiV2EncounterConditionValueIdIndexRouteHandler,
  getApiV2EncounterConditionValueIndexRouteHandler,
  getApiV2EncounterMethodIdIndexRouteHandler,
  getApiV2EncounterMethodIndexRouteHandler,
  getApiV2EvolutionChainIdIndexRouteHandler,
  getApiV2EvolutionChainIndexRouteHandler,
  getApiV2EvolutionTriggerIdIndexRouteHandler,
  getApiV2EvolutionTriggerIndexRouteHandler,
  getApiV2EvolutionVariableIdIndexRouteHandler,
  getApiV2EvolutionVariableIndexRouteHandler,
  getApiV2GenderIdIndexRouteHandler,
  getApiV2GenderIndexRouteHandler,
  getApiV2GenerationIdIndexRouteHandler,
  getApiV2GenerationIndexRouteHandler,
  getApiV2GrowthRateIdIndexRouteHandler,
  getApiV2GrowthRateIndexRouteHandler,
  getApiV2ItemAttributeIdIndexRouteHandler,
  getApiV2ItemAttributeIndexRouteHandler,
  getApiV2ItemCategoryIdIndexRouteHandler,
  getApiV2ItemCategoryIndexRouteHandler,
  getApiV2ItemFlingEffectIdIndexRouteHandler,
  getApiV2ItemFlingEffectIndexRouteHandler,
  getApiV2ItemIdIndexRouteHandler,
  getApiV2ItemIndexRouteHandler,
  getApiV2ItemPocketIdIndexRouteHandler,
  getApiV2ItemPocketIndexRouteHandler,
  getApiV2LanguageIdIndexRouteHandler,
  getApiV2LanguageIndexRouteHandler,
  getApiV2LocationAreaIdIndexRouteHandler,
  getApiV2LocationAreaIndexRouteHandler,
  getApiV2LocationIdIndexRouteHandler,
  getApiV2LocationIndexRouteHandler,
  getApiV2MachineIdIndexRouteHandler,
  getApiV2MachineIndexRouteHandler,
  getApiV2MetaIndexRouteHandler,
  getApiV2MoveAilmentIdIndexRouteHandler,
  getApiV2MoveAilmentIndexRouteHandler,
  getApiV2MoveBattleStyleIdIndexRouteHandler,
  getApiV2MoveBattleStyleIndexRouteHandler,
  getApiV2MoveCategoryIdIndexRouteHandler,
  getApiV2MoveCategoryIndexRouteHandler,
  getApiV2MoveDamageClassIdIndexRouteHandler,
  getApiV2MoveDamageClassIndexRouteHandler,
  getApiV2MoveIdIndexRouteHandler,
  getApiV2MoveIndexRouteHandler,
  getApiV2MoveLearnMethodIdIndexRouteHandler,
  getApiV2MoveLearnMethodIndexRouteHandler,
  getApiV2MoveTargetIdIndexRouteHandler,
  getApiV2MoveTargetIndexRouteHandler,
  getApiV2NatureIdIndexRouteHandler,
  getApiV2NatureIndexRouteHandler,
  getApiV2PalParkAreaIdIndexRouteHandler,
  getApiV2PalParkAreaIndexRouteHandler,
  getApiV2PokeathlonStatIdIndexRouteHandler,
  getApiV2PokeathlonStatIndexRouteHandler,
  getApiV2PokedexIdIndexRouteHandler,
  getApiV2PokedexIndexRouteHandler,
  getApiV2PokemonColorIdIndexRouteHandler,
  getApiV2PokemonColorIndexRouteHandler,
  getApiV2PokemonFormIdIndexRouteHandler,
  getApiV2PokemonFormIndexRouteHandler,
  getApiV2PokemonHabitatIdIndexRouteHandler,
  getApiV2PokemonHabitatIndexRouteHandler,
  getApiV2PokemonIdIndexRouteHandler,
  getApiV2PokemonIndexRouteHandler,
  getApiV2PokemonPokemonIdEncountersRouteHandler,
  getApiV2PokemonShapeIdIndexRouteHandler,
  getApiV2PokemonShapeIndexRouteHandler,
  getApiV2PokemonSpeciesIdIndexRouteHandler,
  getApiV2PokemonSpeciesIndexRouteHandler,
  getApiV2RegionIdIndexRouteHandler,
  getApiV2RegionIndexRouteHandler,
  getApiV2StatIdIndexRouteHandler,
  getApiV2StatIndexRouteHandler,
  getApiV2SuperContestEffectIdIndexRouteHandler,
  getApiV2SuperContestEffectIndexRouteHandler,
  getApiV2TypeIdIndexRouteHandler,
  getApiV2TypeIndexRouteHandler,
  getApiV2VersionGroupIdIndexRouteHandler,
  getApiV2VersionGroupIndexRouteHandler,
  getApiV2VersionIdIndexRouteHandler,
  getApiV2VersionIndexRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV2MetaIndexRoute, getApiV2MetaIndexRouteHandler)
  .openapi(getApiV2AbilityIndexRoute, getApiV2AbilityIndexRouteHandler)
  .openapi(getApiV2AbilityIdIndexRoute, getApiV2AbilityIdIndexRouteHandler)
  .openapi(getApiV2BerryIndexRoute, getApiV2BerryIndexRouteHandler)
  .openapi(getApiV2BerryIdIndexRoute, getApiV2BerryIdIndexRouteHandler)
  .openapi(getApiV2BerryFirmnessIndexRoute, getApiV2BerryFirmnessIndexRouteHandler)
  .openapi(getApiV2BerryFirmnessIdIndexRoute, getApiV2BerryFirmnessIdIndexRouteHandler)
  .openapi(getApiV2BerryFlavorIndexRoute, getApiV2BerryFlavorIndexRouteHandler)
  .openapi(getApiV2BerryFlavorIdIndexRoute, getApiV2BerryFlavorIdIndexRouteHandler)
  .openapi(getApiV2CharacteristicIndexRoute, getApiV2CharacteristicIndexRouteHandler)
  .openapi(getApiV2CharacteristicIdIndexRoute, getApiV2CharacteristicIdIndexRouteHandler)
  .openapi(getApiV2ContestTypeIndexRoute, getApiV2ContestTypeIndexRouteHandler)
  .openapi(getApiV2ContestTypeIdIndexRoute, getApiV2ContestTypeIdIndexRouteHandler)
  .openapi(getApiV2ContestEffectIndexRoute, getApiV2ContestEffectIndexRouteHandler)
  .openapi(getApiV2ContestEffectIdIndexRoute, getApiV2ContestEffectIdIndexRouteHandler)
  .openapi(getApiV2EggGroupIndexRoute, getApiV2EggGroupIndexRouteHandler)
  .openapi(getApiV2EggGroupIdIndexRoute, getApiV2EggGroupIdIndexRouteHandler)
  .openapi(getApiV2EncounterMethodIndexRoute, getApiV2EncounterMethodIndexRouteHandler)
  .openapi(getApiV2EncounterMethodIdIndexRoute, getApiV2EncounterMethodIdIndexRouteHandler)
  .openapi(getApiV2EncounterConditionIndexRoute, getApiV2EncounterConditionIndexRouteHandler)
  .openapi(getApiV2EncounterConditionIdIndexRoute, getApiV2EncounterConditionIdIndexRouteHandler)
  .openapi(
    getApiV2EncounterConditionValueIndexRoute,
    getApiV2EncounterConditionValueIndexRouteHandler,
  )
  .openapi(
    getApiV2EncounterConditionValueIdIndexRoute,
    getApiV2EncounterConditionValueIdIndexRouteHandler,
  )
  .openapi(getApiV2EvolutionChainIndexRoute, getApiV2EvolutionChainIndexRouteHandler)
  .openapi(getApiV2EvolutionChainIdIndexRoute, getApiV2EvolutionChainIdIndexRouteHandler)
  .openapi(getApiV2EvolutionTriggerIndexRoute, getApiV2EvolutionTriggerIndexRouteHandler)
  .openapi(getApiV2EvolutionTriggerIdIndexRoute, getApiV2EvolutionTriggerIdIndexRouteHandler)
  .openapi(getApiV2EvolutionVariableIndexRoute, getApiV2EvolutionVariableIndexRouteHandler)
  .openapi(getApiV2EvolutionVariableIdIndexRoute, getApiV2EvolutionVariableIdIndexRouteHandler)
  .openapi(getApiV2GenerationIndexRoute, getApiV2GenerationIndexRouteHandler)
  .openapi(getApiV2GenerationIdIndexRoute, getApiV2GenerationIdIndexRouteHandler)
  .openapi(getApiV2GenderIndexRoute, getApiV2GenderIndexRouteHandler)
  .openapi(getApiV2GenderIdIndexRoute, getApiV2GenderIdIndexRouteHandler)
  .openapi(getApiV2GrowthRateIndexRoute, getApiV2GrowthRateIndexRouteHandler)
  .openapi(getApiV2GrowthRateIdIndexRoute, getApiV2GrowthRateIdIndexRouteHandler)
  .openapi(getApiV2ItemIndexRoute, getApiV2ItemIndexRouteHandler)
  .openapi(getApiV2ItemIdIndexRoute, getApiV2ItemIdIndexRouteHandler)
  .openapi(getApiV2ItemCategoryIndexRoute, getApiV2ItemCategoryIndexRouteHandler)
  .openapi(getApiV2ItemCategoryIdIndexRoute, getApiV2ItemCategoryIdIndexRouteHandler)
  .openapi(getApiV2ItemAttributeIndexRoute, getApiV2ItemAttributeIndexRouteHandler)
  .openapi(getApiV2ItemAttributeIdIndexRoute, getApiV2ItemAttributeIdIndexRouteHandler)
  .openapi(getApiV2ItemFlingEffectIndexRoute, getApiV2ItemFlingEffectIndexRouteHandler)
  .openapi(getApiV2ItemFlingEffectIdIndexRoute, getApiV2ItemFlingEffectIdIndexRouteHandler)
  .openapi(getApiV2ItemPocketIndexRoute, getApiV2ItemPocketIndexRouteHandler)
  .openapi(getApiV2ItemPocketIdIndexRoute, getApiV2ItemPocketIdIndexRouteHandler)
  .openapi(getApiV2CurrencyIndexRoute, getApiV2CurrencyIndexRouteHandler)
  .openapi(getApiV2CurrencyIdIndexRoute, getApiV2CurrencyIdIndexRouteHandler)
  .openapi(getApiV2LanguageIndexRoute, getApiV2LanguageIndexRouteHandler)
  .openapi(getApiV2LanguageIdIndexRoute, getApiV2LanguageIdIndexRouteHandler)
  .openapi(getApiV2LocationIndexRoute, getApiV2LocationIndexRouteHandler)
  .openapi(getApiV2LocationIdIndexRoute, getApiV2LocationIdIndexRouteHandler)
  .openapi(getApiV2LocationAreaIndexRoute, getApiV2LocationAreaIndexRouteHandler)
  .openapi(getApiV2LocationAreaIdIndexRoute, getApiV2LocationAreaIdIndexRouteHandler)
  .openapi(getApiV2MachineIndexRoute, getApiV2MachineIndexRouteHandler)
  .openapi(getApiV2MachineIdIndexRoute, getApiV2MachineIdIndexRouteHandler)
  .openapi(getApiV2MoveIndexRoute, getApiV2MoveIndexRouteHandler)
  .openapi(getApiV2MoveIdIndexRoute, getApiV2MoveIdIndexRouteHandler)
  .openapi(getApiV2MoveAilmentIndexRoute, getApiV2MoveAilmentIndexRouteHandler)
  .openapi(getApiV2MoveAilmentIdIndexRoute, getApiV2MoveAilmentIdIndexRouteHandler)
  .openapi(getApiV2MoveBattleStyleIndexRoute, getApiV2MoveBattleStyleIndexRouteHandler)
  .openapi(getApiV2MoveBattleStyleIdIndexRoute, getApiV2MoveBattleStyleIdIndexRouteHandler)
  .openapi(getApiV2MoveCategoryIndexRoute, getApiV2MoveCategoryIndexRouteHandler)
  .openapi(getApiV2MoveCategoryIdIndexRoute, getApiV2MoveCategoryIdIndexRouteHandler)
  .openapi(getApiV2MoveDamageClassIndexRoute, getApiV2MoveDamageClassIndexRouteHandler)
  .openapi(getApiV2MoveDamageClassIdIndexRoute, getApiV2MoveDamageClassIdIndexRouteHandler)
  .openapi(getApiV2MoveLearnMethodIndexRoute, getApiV2MoveLearnMethodIndexRouteHandler)
  .openapi(getApiV2MoveLearnMethodIdIndexRoute, getApiV2MoveLearnMethodIdIndexRouteHandler)
  .openapi(getApiV2MoveTargetIndexRoute, getApiV2MoveTargetIndexRouteHandler)
  .openapi(getApiV2MoveTargetIdIndexRoute, getApiV2MoveTargetIdIndexRouteHandler)
  .openapi(getApiV2NatureIndexRoute, getApiV2NatureIndexRouteHandler)
  .openapi(getApiV2NatureIdIndexRoute, getApiV2NatureIdIndexRouteHandler)
  .openapi(getApiV2PalParkAreaIndexRoute, getApiV2PalParkAreaIndexRouteHandler)
  .openapi(getApiV2PalParkAreaIdIndexRoute, getApiV2PalParkAreaIdIndexRouteHandler)
  .openapi(getApiV2PokedexIndexRoute, getApiV2PokedexIndexRouteHandler)
  .openapi(getApiV2PokedexIdIndexRoute, getApiV2PokedexIdIndexRouteHandler)
  .openapi(getApiV2PokemonIndexRoute, getApiV2PokemonIndexRouteHandler)
  .openapi(getApiV2PokemonIdIndexRoute, getApiV2PokemonIdIndexRouteHandler)
  .openapi(getApiV2PokemonColorIndexRoute, getApiV2PokemonColorIndexRouteHandler)
  .openapi(getApiV2PokemonColorIdIndexRoute, getApiV2PokemonColorIdIndexRouteHandler)
  .openapi(getApiV2PokemonFormIndexRoute, getApiV2PokemonFormIndexRouteHandler)
  .openapi(getApiV2PokemonFormIdIndexRoute, getApiV2PokemonFormIdIndexRouteHandler)
  .openapi(getApiV2PokemonHabitatIndexRoute, getApiV2PokemonHabitatIndexRouteHandler)
  .openapi(getApiV2PokemonHabitatIdIndexRoute, getApiV2PokemonHabitatIdIndexRouteHandler)
  .openapi(getApiV2PokemonShapeIndexRoute, getApiV2PokemonShapeIndexRouteHandler)
  .openapi(getApiV2PokemonShapeIdIndexRoute, getApiV2PokemonShapeIdIndexRouteHandler)
  .openapi(getApiV2PokemonSpeciesIndexRoute, getApiV2PokemonSpeciesIndexRouteHandler)
  .openapi(getApiV2PokemonSpeciesIdIndexRoute, getApiV2PokemonSpeciesIdIndexRouteHandler)
  .openapi(getApiV2PokeathlonStatIndexRoute, getApiV2PokeathlonStatIndexRouteHandler)
  .openapi(getApiV2PokeathlonStatIdIndexRoute, getApiV2PokeathlonStatIdIndexRouteHandler)
  .openapi(getApiV2RegionIndexRoute, getApiV2RegionIndexRouteHandler)
  .openapi(getApiV2RegionIdIndexRoute, getApiV2RegionIdIndexRouteHandler)
  .openapi(getApiV2StatIndexRoute, getApiV2StatIndexRouteHandler)
  .openapi(getApiV2StatIdIndexRoute, getApiV2StatIdIndexRouteHandler)
  .openapi(getApiV2SuperContestEffectIndexRoute, getApiV2SuperContestEffectIndexRouteHandler)
  .openapi(getApiV2SuperContestEffectIdIndexRoute, getApiV2SuperContestEffectIdIndexRouteHandler)
  .openapi(getApiV2TypeIndexRoute, getApiV2TypeIndexRouteHandler)
  .openapi(getApiV2TypeIdIndexRoute, getApiV2TypeIdIndexRouteHandler)
  .openapi(getApiV2VersionIndexRoute, getApiV2VersionIndexRouteHandler)
  .openapi(getApiV2VersionIdIndexRoute, getApiV2VersionIdIndexRouteHandler)
  .openapi(getApiV2VersionGroupIndexRoute, getApiV2VersionGroupIndexRouteHandler)
  .openapi(getApiV2VersionGroupIdIndexRoute, getApiV2VersionGroupIdIndexRouteHandler)
  .openapi(getApiV2PokemonPokemonIdEncountersRoute, getApiV2PokemonPokemonIdEncountersRouteHandler)

export default app
