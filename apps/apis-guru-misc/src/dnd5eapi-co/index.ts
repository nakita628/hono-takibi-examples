import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAbilityScoresIndexRoute,
  getApiAlignmentsIndexRoute,
  getApiBackgroundsIndexRoute,
  getApiClassesIndexFeaturesRoute,
  getApiClassesIndexLevelsClassLevelFeaturesRoute,
  getApiClassesIndexLevelsClassLevelRoute,
  getApiClassesIndexLevelsRoute,
  getApiClassesIndexLevelsSpellLevelSpellsRoute,
  getApiClassesIndexMultiClassingRoute,
  getApiClassesIndexProficienciesRoute,
  getApiClassesIndexRoute,
  getApiClassesIndexSpellcastingRoute,
  getApiClassesIndexSpellsRoute,
  getApiClassesIndexSubclassesRoute,
  getApiConditionsIndexRoute,
  getApiDamageTypesIndexRoute,
  getApiEndpointRoute,
  getApiEquipmentCategoriesIndexRoute,
  getApiEquipmentIndexRoute,
  getApiFeatsIndexRoute,
  getApiFeaturesIndexRoute,
  getApiLanguagesIndexRoute,
  getApiMagicItemsIndexRoute,
  getApiMagicSchoolsIndexRoute,
  getApiMonstersIndexRoute,
  getApiMonstersRoute,
  getApiProficienciesIndexRoute,
  getApiRacesIndexProficienciesRoute,
  getApiRacesIndexRoute,
  getApiRacesIndexSubracesRoute,
  getApiRacesIndexTraitsRoute,
  getApiRoute,
  getApiRuleSectionsIndexRoute,
  getApiRulesIndexRoute,
  getApiSkillsIndexRoute,
  getApiSpellsIndexRoute,
  getApiSpellsRoute,
  getApiSubclassesIndexFeaturesRoute,
  getApiSubclassesIndexLevelsRoute,
  getApiSubclassesIndexLevelsSubclassLevelFeaturesRoute,
  getApiSubclassesIndexLevelsSubclassLevelRoute,
  getApiSubclassesIndexRoute,
  getApiSubracesIndexProficienciesRoute,
  getApiSubracesIndexRoute,
  getApiSubracesIndexTraitsRoute,
  getApiTraitsIndexRoute,
  getApiWeaponPropertiesIndexRoute,
} from './routes'
import {
  getApiAbilityScoresIndexRouteHandler,
  getApiAlignmentsIndexRouteHandler,
  getApiBackgroundsIndexRouteHandler,
  getApiClassesIndexFeaturesRouteHandler,
  getApiClassesIndexLevelsClassLevelFeaturesRouteHandler,
  getApiClassesIndexLevelsClassLevelRouteHandler,
  getApiClassesIndexLevelsRouteHandler,
  getApiClassesIndexLevelsSpellLevelSpellsRouteHandler,
  getApiClassesIndexMultiClassingRouteHandler,
  getApiClassesIndexProficienciesRouteHandler,
  getApiClassesIndexRouteHandler,
  getApiClassesIndexSpellcastingRouteHandler,
  getApiClassesIndexSpellsRouteHandler,
  getApiClassesIndexSubclassesRouteHandler,
  getApiConditionsIndexRouteHandler,
  getApiDamageTypesIndexRouteHandler,
  getApiEndpointRouteHandler,
  getApiEquipmentCategoriesIndexRouteHandler,
  getApiEquipmentIndexRouteHandler,
  getApiFeatsIndexRouteHandler,
  getApiFeaturesIndexRouteHandler,
  getApiLanguagesIndexRouteHandler,
  getApiMagicItemsIndexRouteHandler,
  getApiMagicSchoolsIndexRouteHandler,
  getApiMonstersIndexRouteHandler,
  getApiMonstersRouteHandler,
  getApiProficienciesIndexRouteHandler,
  getApiRacesIndexProficienciesRouteHandler,
  getApiRacesIndexRouteHandler,
  getApiRacesIndexSubracesRouteHandler,
  getApiRacesIndexTraitsRouteHandler,
  getApiRouteHandler,
  getApiRuleSectionsIndexRouteHandler,
  getApiRulesIndexRouteHandler,
  getApiSkillsIndexRouteHandler,
  getApiSpellsIndexRouteHandler,
  getApiSpellsRouteHandler,
  getApiSubclassesIndexFeaturesRouteHandler,
  getApiSubclassesIndexLevelsRouteHandler,
  getApiSubclassesIndexLevelsSubclassLevelFeaturesRouteHandler,
  getApiSubclassesIndexLevelsSubclassLevelRouteHandler,
  getApiSubclassesIndexRouteHandler,
  getApiSubracesIndexProficienciesRouteHandler,
  getApiSubracesIndexRouteHandler,
  getApiSubracesIndexTraitsRouteHandler,
  getApiTraitsIndexRouteHandler,
  getApiWeaponPropertiesIndexRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiRoute, getApiRouteHandler)
  .openapi(getApiAbilityScoresIndexRoute, getApiAbilityScoresIndexRouteHandler)
  .openapi(getApiAlignmentsIndexRoute, getApiAlignmentsIndexRouteHandler)
  .openapi(getApiBackgroundsIndexRoute, getApiBackgroundsIndexRouteHandler)
  .openapi(getApiClassesIndexRoute, getApiClassesIndexRouteHandler)
  .openapi(getApiClassesIndexFeaturesRoute, getApiClassesIndexFeaturesRouteHandler)
  .openapi(getApiClassesIndexLevelsRoute, getApiClassesIndexLevelsRouteHandler)
  .openapi(getApiClassesIndexLevelsClassLevelRoute, getApiClassesIndexLevelsClassLevelRouteHandler)
  .openapi(
    getApiClassesIndexLevelsClassLevelFeaturesRoute,
    getApiClassesIndexLevelsClassLevelFeaturesRouteHandler,
  )
  .openapi(
    getApiClassesIndexLevelsSpellLevelSpellsRoute,
    getApiClassesIndexLevelsSpellLevelSpellsRouteHandler,
  )
  .openapi(getApiClassesIndexMultiClassingRoute, getApiClassesIndexMultiClassingRouteHandler)
  .openapi(getApiClassesIndexProficienciesRoute, getApiClassesIndexProficienciesRouteHandler)
  .openapi(getApiClassesIndexSpellcastingRoute, getApiClassesIndexSpellcastingRouteHandler)
  .openapi(getApiClassesIndexSpellsRoute, getApiClassesIndexSpellsRouteHandler)
  .openapi(getApiClassesIndexSubclassesRoute, getApiClassesIndexSubclassesRouteHandler)
  .openapi(getApiConditionsIndexRoute, getApiConditionsIndexRouteHandler)
  .openapi(getApiDamageTypesIndexRoute, getApiDamageTypesIndexRouteHandler)
  .openapi(getApiEquipmentCategoriesIndexRoute, getApiEquipmentCategoriesIndexRouteHandler)
  .openapi(getApiEquipmentIndexRoute, getApiEquipmentIndexRouteHandler)
  .openapi(getApiFeatsIndexRoute, getApiFeatsIndexRouteHandler)
  .openapi(getApiFeaturesIndexRoute, getApiFeaturesIndexRouteHandler)
  .openapi(getApiLanguagesIndexRoute, getApiLanguagesIndexRouteHandler)
  .openapi(getApiMagicItemsIndexRoute, getApiMagicItemsIndexRouteHandler)
  .openapi(getApiMagicSchoolsIndexRoute, getApiMagicSchoolsIndexRouteHandler)
  .openapi(getApiMonstersRoute, getApiMonstersRouteHandler)
  .openapi(getApiMonstersIndexRoute, getApiMonstersIndexRouteHandler)
  .openapi(getApiProficienciesIndexRoute, getApiProficienciesIndexRouteHandler)
  .openapi(getApiRacesIndexRoute, getApiRacesIndexRouteHandler)
  .openapi(getApiRacesIndexProficienciesRoute, getApiRacesIndexProficienciesRouteHandler)
  .openapi(getApiRacesIndexSubracesRoute, getApiRacesIndexSubracesRouteHandler)
  .openapi(getApiRacesIndexTraitsRoute, getApiRacesIndexTraitsRouteHandler)
  .openapi(getApiRuleSectionsIndexRoute, getApiRuleSectionsIndexRouteHandler)
  .openapi(getApiRulesIndexRoute, getApiRulesIndexRouteHandler)
  .openapi(getApiSkillsIndexRoute, getApiSkillsIndexRouteHandler)
  .openapi(getApiSpellsRoute, getApiSpellsRouteHandler)
  .openapi(getApiSpellsIndexRoute, getApiSpellsIndexRouteHandler)
  .openapi(getApiSubclassesIndexRoute, getApiSubclassesIndexRouteHandler)
  .openapi(getApiSubclassesIndexFeaturesRoute, getApiSubclassesIndexFeaturesRouteHandler)
  .openapi(getApiSubclassesIndexLevelsRoute, getApiSubclassesIndexLevelsRouteHandler)
  .openapi(
    getApiSubclassesIndexLevelsSubclassLevelRoute,
    getApiSubclassesIndexLevelsSubclassLevelRouteHandler,
  )
  .openapi(
    getApiSubclassesIndexLevelsSubclassLevelFeaturesRoute,
    getApiSubclassesIndexLevelsSubclassLevelFeaturesRouteHandler,
  )
  .openapi(getApiSubracesIndexRoute, getApiSubracesIndexRouteHandler)
  .openapi(getApiSubracesIndexProficienciesRoute, getApiSubracesIndexProficienciesRouteHandler)
  .openapi(getApiSubracesIndexTraitsRoute, getApiSubracesIndexTraitsRouteHandler)
  .openapi(getApiTraitsIndexRoute, getApiTraitsIndexRouteHandler)
  .openapi(getApiWeaponPropertiesIndexRoute, getApiWeaponPropertiesIndexRouteHandler)
  .openapi(getApiEndpointRoute, getApiEndpointRouteHandler)

export default app
