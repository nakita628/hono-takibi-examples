import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApi(options?: ClientRequestOptions) {
  return await parseResponse(client.api.$get(undefined, options))
}

export async function getApiAbilityScoresIndex(
  args: InferRequestType<(typeof client.api)['ability-scores'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['ability-scores'][':index'].$get(args, options))
}

export async function getApiAlignmentsIndex(
  args: InferRequestType<(typeof client.api.alignments)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.alignments[':index'].$get(args, options))
}

export async function getApiBackgroundsIndex(
  args: InferRequestType<(typeof client.api.backgrounds)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.backgrounds[':index'].$get(args, options))
}

export async function getApiClassesIndex(
  args: InferRequestType<(typeof client.api.classes)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.classes[':index'].$get(args, options))
}

export async function getApiClassesIndexFeatures(
  args: InferRequestType<(typeof client.api.classes)[':index']['features']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.classes[':index'].features.$get(args, options))
}

export async function getApiClassesIndexLevels(
  args: InferRequestType<(typeof client.api.classes)[':index']['levels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.classes[':index'].levels.$get(args, options))
}

export async function getApiClassesIndexLevelsClassLevel(
  args: InferRequestType<(typeof client.api.classes)[':index']['levels'][':class_level']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.classes[':index'].levels[':class_level'].$get(args, options),
  )
}

export async function getApiClassesIndexLevelsClassLevelFeatures(
  args: InferRequestType<
    (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.classes[':index'].levels[':class_level'].features.$get(args, options),
  )
}

export async function getApiClassesIndexLevelsSpellLevelSpells(
  args: InferRequestType<
    (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.classes[':index'].levels[':spell_level'].spells.$get(args, options),
  )
}

export async function getApiClassesIndexMultiClassing(
  args: InferRequestType<(typeof client.api.classes)[':index']['multi-classing']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.classes[':index']['multi-classing'].$get(args, options))
}

export async function getApiClassesIndexProficiencies(
  args: InferRequestType<(typeof client.api.classes)[':index']['proficiencies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.classes[':index'].proficiencies.$get(args, options))
}

export async function getApiClassesIndexSpellcasting(
  args: InferRequestType<(typeof client.api.classes)[':index']['spellcasting']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.classes[':index'].spellcasting.$get(args, options))
}

export async function getApiClassesIndexSpells(
  args: InferRequestType<(typeof client.api.classes)[':index']['spells']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.classes[':index'].spells.$get(args, options))
}

export async function getApiClassesIndexSubclasses(
  args: InferRequestType<(typeof client.api.classes)[':index']['subclasses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.classes[':index'].subclasses.$get(args, options))
}

export async function getApiConditionsIndex(
  args: InferRequestType<(typeof client.api.conditions)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.conditions[':index'].$get(args, options))
}

export async function getApiDamageTypesIndex(
  args: InferRequestType<(typeof client.api)['damage-types'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['damage-types'][':index'].$get(args, options))
}

export async function getApiEquipmentCategoriesIndex(
  args: InferRequestType<(typeof client.api)['equipment-categories'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['equipment-categories'][':index'].$get(args, options))
}

export async function getApiEquipmentIndex(
  args: InferRequestType<(typeof client.api.equipment)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.equipment[':index'].$get(args, options))
}

export async function getApiFeatsIndex(
  args: InferRequestType<(typeof client.api.feats)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.feats[':index'].$get(args, options))
}

export async function getApiFeaturesIndex(
  args: InferRequestType<(typeof client.api.features)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.features[':index'].$get(args, options))
}

export async function getApiLanguagesIndex(
  args: InferRequestType<(typeof client.api.languages)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.languages[':index'].$get(args, options))
}

export async function getApiMagicItemsIndex(
  args: InferRequestType<(typeof client.api)['magic-items'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['magic-items'][':index'].$get(args, options))
}

export async function getApiMagicSchoolsIndex(
  args: InferRequestType<(typeof client.api)['magic-schools'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['magic-schools'][':index'].$get(args, options))
}

export async function getApiMonsters(
  args: InferRequestType<typeof client.api.monsters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.monsters.$get(args, options))
}

export async function getApiMonstersIndex(
  args: InferRequestType<(typeof client.api.monsters)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.monsters[':index'].$get(args, options))
}

export async function getApiProficienciesIndex(
  args: InferRequestType<(typeof client.api.proficiencies)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.proficiencies[':index'].$get(args, options))
}

export async function getApiRacesIndex(
  args: InferRequestType<(typeof client.api.races)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.races[':index'].$get(args, options))
}

export async function getApiRacesIndexProficiencies(
  args: InferRequestType<(typeof client.api.races)[':index']['proficiencies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.races[':index'].proficiencies.$get(args, options))
}

export async function getApiRacesIndexSubraces(
  args: InferRequestType<(typeof client.api.races)[':index']['subraces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.races[':index'].subraces.$get(args, options))
}

export async function getApiRacesIndexTraits(
  args: InferRequestType<(typeof client.api.races)[':index']['traits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.races[':index'].traits.$get(args, options))
}

export async function getApiRuleSectionsIndex(
  args: InferRequestType<(typeof client.api)['rule-sections'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['rule-sections'][':index'].$get(args, options))
}

export async function getApiRulesIndex(
  args: InferRequestType<(typeof client.api.rules)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rules[':index'].$get(args, options))
}

export async function getApiSkillsIndex(
  args: InferRequestType<(typeof client.api.skills)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.skills[':index'].$get(args, options))
}

export async function getApiSpells(
  args: InferRequestType<typeof client.api.spells.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.spells.$get(args, options))
}

export async function getApiSpellsIndex(
  args: InferRequestType<(typeof client.api.spells)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.spells[':index'].$get(args, options))
}

export async function getApiSubclassesIndex(
  args: InferRequestType<(typeof client.api.subclasses)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.subclasses[':index'].$get(args, options))
}

export async function getApiSubclassesIndexFeatures(
  args: InferRequestType<(typeof client.api.subclasses)[':index']['features']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.subclasses[':index'].features.$get(args, options))
}

export async function getApiSubclassesIndexLevels(
  args: InferRequestType<(typeof client.api.subclasses)[':index']['levels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.subclasses[':index'].levels.$get(args, options))
}

export async function getApiSubclassesIndexLevelsSubclassLevel(
  args: InferRequestType<
    (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.subclasses[':index'].levels[':subclass_level'].$get(args, options),
  )
}

export async function getApiSubclassesIndexLevelsSubclassLevelFeatures(
  args: InferRequestType<
    (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.subclasses[':index'].levels[':subclass_level'].features.$get(args, options),
  )
}

export async function getApiSubracesIndex(
  args: InferRequestType<(typeof client.api.subraces)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.subraces[':index'].$get(args, options))
}

export async function getApiSubracesIndexProficiencies(
  args: InferRequestType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.subraces[':index'].proficiencies.$get(args, options))
}

export async function getApiSubracesIndexTraits(
  args: InferRequestType<(typeof client.api.subraces)[':index']['traits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.subraces[':index'].traits.$get(args, options))
}

export async function getApiTraitsIndex(
  args: InferRequestType<(typeof client.api.traits)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.traits[':index'].$get(args, options))
}

export async function getApiWeaponPropertiesIndex(
  args: InferRequestType<(typeof client.api)['weapon-properties'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['weapon-properties'][':index'].$get(args, options))
}

export async function getApiEndpoint(
  args: InferRequestType<(typeof client.api)[':endpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api[':endpoint'].$get(args, options))
}
