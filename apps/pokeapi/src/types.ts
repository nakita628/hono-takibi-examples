type PokeapiMetaResponse = { deploy_date: string | null; hash: string | null; tag: string | null }
type AbilitySummary = { name: string; url: string }
type PaginatedAbilitySummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: AbilitySummary[]
}
type AbilityName = { name: string; language: { name: string; url: string } }
type AbilityEffectText = {
  effect: string
  short_effect: string
  language: { name: string; url: string }
}
type AbilityChangeEffectText = { effect: string; language: { name: string; url: string } }
type AbilityChange = {
  version_group: { name: string; url: string }
  effect_entries: AbilityChangeEffectText[]
}
type AbilityFlavorText = {
  flavor_text: string
  language: { name: string; url: string }
  version_group: { name: string; url: string }
}
type AbilityPokemonDetail = {
  is_hidden?: boolean | undefined
  slot: number
  pokemon: { name: string; url: string }
}
type AbilityDetail = {
  id: number
  name: string
  is_main_series?: boolean | undefined
  generation: { name: string; url: string }
  names: AbilityName[]
  effect_entries: AbilityEffectText[]
  effect_changes: AbilityChange[]
  flavor_text_entries: AbilityFlavorText[]
  pokemon: AbilityPokemonDetail[]
}
type BerrySummary = { name: string; url: string }
type PaginatedBerrySummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: BerrySummary[]
}
type BerryFirmnessSummary = { name: string; url: string }
type BerryFlavorMap = { potency: number; flavor: { name: string; url: string } }
type TypeSummary = { name: string; url: string }
type BerryDetail = {
  id: number
  name: string
  growth_time?: (number | null) | undefined
  max_harvest?: (number | null) | undefined
  natural_gift_power?: (number | null) | undefined
  size?: (number | null) | undefined
  smoothness?: (number | null) | undefined
  soil_dryness?: (number | null) | undefined
  firmness: BerryFirmnessSummary | ({ [x: string]: unknown } | null)
  flavors: BerryFlavorMap[]
  item: { name: string; url: string }
  natural_gift_type: TypeSummary | ({ [x: string]: unknown } | null)
}
type PaginatedBerryFirmnessSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: BerryFirmnessSummary[]
}
type BerryFirmnessName = { name: string; language: { name: string; url: string } }
type BerryFirmnessDetail = {
  id: number
  name: string
  berries: BerrySummary[]
  names: BerryFirmnessName[]
}
type BerryFlavorSummary = { name: string; url: string }
type PaginatedBerryFlavorSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: BerryFlavorSummary[]
}
type BerryFlavorBerryMap = { potency: number; berry: { name: string; url: string } }
type BerryFlavorName = { name: string; language: { name: string; url: string } }
type BerryFlavorDetail = {
  id: number
  name: string
  berries: BerryFlavorBerryMap[]
  contest_type: { name: string; url: string }
  names: BerryFlavorName[]
}
type CharacteristicSummary = { url: string }
type PaginatedCharacteristicSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: CharacteristicSummary[]
}
type CharacteristicDescription = {
  description?: string | undefined
  language: { name: string; url: string }
}
type CharacteristicDetail = {
  id: number
  gene_modulo: number
  possible_values: number[]
  highest_stat: { name: string; url: string }
  descriptions: CharacteristicDescription[]
}
type ContestTypeSummary = { name: string; url: string }
type PaginatedContestTypeSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: ContestTypeSummary[]
}
type ContestTypeName = { name: string; color: string; language: { name: string; url: string } }
type ContestTypeDetail = {
  id: number
  name: string
  berry_flavor: { name: string; url: string }
  names: ContestTypeName[]
}
type ContestEffectSummary = { url: string }
type PaginatedContestEffectSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: ContestEffectSummary[]
}
type ContestEffectEffectText = { effect: string; language: { name: string; url: string } }
type ContestEffectFlavorText = { flavor_text: string; language: { name: string; url: string } }
type ContestEffectDetail = {
  id: number
  appeal: number
  jam: number
  effect_entries: ContestEffectEffectText[]
  flavor_text_entries: ContestEffectFlavorText[]
}
type EggGroupSummary = { name: string; url: string }
type PaginatedEggGroupSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: EggGroupSummary[]
}
type EggGroupName = { name: string; language: { name: string; url: string } }
type PokemonSpeciesSummary = { name: string; url: string }
type EggGroupDetail = {
  id: number
  name: string
  names: EggGroupName[]
  pokemon_species: PokemonSpeciesSummary[]
}
type EncounterMethodSummary = { name: string; url: string }
type PaginatedEncounterMethodSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: EncounterMethodSummary[]
}
type EncounterMethodName = { name: string; language: { name: string; url: string } }
type EncounterMethodDetail = {
  id: number
  name: string
  order?: (number | null) | undefined
  names: EncounterMethodName[]
}
type EncounterConditionSummary = { name: string; url: string }
type PaginatedEncounterConditionSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: EncounterConditionSummary[]
}
type EncounterConditionValueSummary = { name: string; url: string }
type EncounterConditionName = { name: string; language: { name: string; url: string } }
type EncounterConditionDetail = {
  id: number
  name: string
  values: EncounterConditionValueSummary[]
  names: EncounterConditionName[]
}
type PaginatedEncounterConditionValueSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: EncounterConditionValueSummary[]
}
type EncounterConditionValueName = { name: string; language: { name: string; url: string } }
type EncounterConditionValueDetail = {
  id: number
  name: string
  condition: { name: string; url: string }
  names: EncounterConditionValueName[]
}
type EvolutionChainSummary = { url: string }
type PaginatedEvolutionChainSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: EvolutionChainSummary[]
}
type ItemSummary = { name: string; url: string }
type MoveSummary = { name: string; url: string }
type LocationSummary = { name: string; url: string }
type RegionSummary = { name: string; url: string }
type PokemonFormSummary = { name: string; url: string }
type NatureSummary = { name: string; url: string }
type EvolutionVariableSummary = { name: string; url: string }
type EvolutionConditionExpression = {
  expression: string
  percentage_chance: number | null
  variables: EvolutionVariableSummary[]
}
type PokemonEvolution = {
  version_group: { name: string; url: string }
  is_default?: boolean | undefined
  item: ItemSummary | ({ [x: string]: unknown } | null)
  trigger: { name: string; url: string }
  gender?: (number | null) | undefined
  held_item: ItemSummary | ({ [x: string]: unknown } | null)
  known_move: MoveSummary | ({ [x: string]: unknown } | null)
  known_move_type: TypeSummary | ({ [x: string]: unknown } | null)
  location: LocationSummary | ({ [x: string]: unknown } | null)
  min_level?: (number | null) | undefined
  min_happiness?: (number | null) | undefined
  min_beauty?: (number | null) | undefined
  min_affection?: (number | null) | undefined
  near_special_rock?: boolean | undefined
  needs_multiplayer?: boolean | undefined
  needs_overworld_rain?: boolean | undefined
  party_species: PokemonSpeciesSummary | ({ [x: string]: unknown } | null)
  party_type: TypeSummary | ({ [x: string]: unknown } | null)
  relative_physical_stats?: (number | null) | undefined
  time_of_day?: string | undefined
  trade_species: PokemonSpeciesSummary | ({ [x: string]: unknown } | null)
  turn_upside_down?: boolean | undefined
  region: RegionSummary | ({ [x: string]: unknown } | null)
  required_pokemon_form: PokemonFormSummary | ({ [x: string]: unknown } | null)
  evolved_pokemon_form: PokemonFormSummary | ({ [x: string]: unknown } | null)
  used_move: MoveSummary | ({ [x: string]: unknown } | null)
  min_move_count?: (number | null) | undefined
  min_steps?: (number | null) | undefined
  min_damage_taken?: (number | null) | undefined
  allowed_natures: NatureSummary[] | null
  condition_expression: EvolutionConditionExpression | ({ [x: string]: unknown } | null)
}
type EvolutionChainLink = {
  is_baby: boolean
  species: { name: string; url: string }
  evolution_details: PokemonEvolution[]
  evolves_to: EvolutionChainLink[]
}
type EvolutionChainDetail = {
  id: number
  baby_trigger_item: ItemSummary | ({ [x: string]: unknown } | null)
  chain: {
    is_baby: boolean
    species: { name: string; url: string }
    evolution_details: PokemonEvolution[]
    evolves_to: EvolutionChainLink[]
  }
}
type EvolutionTriggerSummary = { name: string; url: string }
type PaginatedEvolutionTriggerSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: EvolutionTriggerSummary[]
}
type EvolutionTriggerName = { name: string; language: { name: string; url: string } }
type EvolutionTriggerDetail = {
  id: number
  name: string
  names: EvolutionTriggerName[]
  pokemon_species: PokemonSpeciesSummary[]
}
type PaginatedEvolutionVariableSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: EvolutionVariableSummary[]
}
type EvolutionVariableName = { name: string; language: { name: string; url: string } }
type EvolutionVariableDescription = {
  description?: string | undefined
  language: { name: string; url: string }
}
type EvolutionVariableDetail = {
  id: number
  name: string
  symbol: string
  data_type?: string | undefined
  source?: string | undefined
  version_group: { name: string; url: string }
  names: EvolutionVariableName[]
  descriptions: EvolutionVariableDescription[]
}
type GenerationSummary = { name: string; url: string }
type PaginatedGenerationSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: GenerationSummary[]
}
type GenerationName = { name: string; language: { name: string; url: string } }
type VersionGroupSummary = { name: string; url: string }
type GenerationDetail = {
  id: number
  name: string
  abilities: AbilitySummary[]
  main_region: { name: string; url: string }
  moves: MoveSummary[]
  names: GenerationName[]
  pokemon_species: PokemonSpeciesSummary[]
  types: TypeSummary[]
  version_groups: VersionGroupSummary[]
}
type GenderSummary = { name: string; url: string }
type PaginatedGenderSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: GenderSummary[]
}
type GenderPokemonSpecies = { rate: number; pokemon_species: { name: string; url: string } }
type GenderDetail = {
  id: number
  name: string
  pokemon_species_details: GenderPokemonSpecies[]
  required_for_evolution: PokemonSpeciesSummary[]
}
type GrowthRateSummary = { name: string; url: string }
type PaginatedGrowthRateSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: GrowthRateSummary[]
}
type GrowthRateDescription = {
  description?: string | undefined
  language: { name: string; url: string }
}
type Experience = { level: number; experience: number }
type GrowthRateDetail = {
  id: number
  name: string
  formula: string
  descriptions: GrowthRateDescription[]
  levels: Experience[]
  pokemon_species: PokemonSpeciesSummary[]
}
type PaginatedItemSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: ItemSummary[]
}
type ItemFlingEffectSummary = { name: string; url: string }
type ItemAttributeSummary = { name: string; url: string }
type ItemEffectText = {
  effect: string
  short_effect: string
  language: { name: string; url: string }
}
type ItemFlavorText = {
  text: string
  version_group: { name: string; url: string }
  language: { name: string; url: string }
}
type ItemGameIndex = { game_index: number; generation: { name: string; url: string } }
type ItemPrice = {
  purchase_price?: (number | null) | undefined
  sell_price?: (number | null) | undefined
  currency: { name: string; url: string }
  version_group: { name: string; url: string }
}
type ItemName = { name: string; language: { name: string; url: string } }
type PokemonHeldItemVersion = { rarity: number; version: { name: string; url: string } }
type PokemonHeldItem = {
  pokemon: { name: string; url: string }
  version_details: PokemonHeldItemVersion[]
}
type ItemMachine = { machine: { url: string }; version_group: { name: string; url: string } }
type ItemDetail = {
  id: number
  name: string
  fling_power?: (number | null) | undefined
  fling_effect: ItemFlingEffectSummary | ({ [x: string]: unknown } | null)
  attributes: ItemAttributeSummary[]
  category: { name: string; url: string }
  effect_entries: ItemEffectText[]
  flavor_text_entries: ItemFlavorText[]
  game_indices: ItemGameIndex[]
  prices: ItemPrice[]
  names: ItemName[]
  held_by_pokemon: PokemonHeldItem[]
  sprites: { default: string | null }
  baby_trigger_for: EvolutionChainSummary | ({ [x: string]: unknown } | null)
  machines: ItemMachine[]
}
type ItemCategorySummary = { name: string; url: string }
type PaginatedItemCategorySummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: ItemCategorySummary[]
}
type ItemCategoryName = { name: string; language: { name: string; url: string } }
type ItemCategoryDetail = {
  id: number
  name: string
  items: ItemSummary[]
  names: ItemCategoryName[]
  pocket: { name: string; url: string }
}
type PaginatedItemAttributeSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: ItemAttributeSummary[]
}
type ItemAttributeDescription = {
  description?: string | undefined
  language: { name: string; url: string }
}
type ItemAttributeName = { name: string; language: { name: string; url: string } }
type ItemAttributeDetail = {
  id: number
  name: string
  descriptions: ItemAttributeDescription[]
  items: ItemSummary[]
  names: ItemAttributeName[]
}
type PaginatedItemFlingEffectSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: ItemFlingEffectSummary[]
}
type ItemFlingEffectEffectText = { effect: string; language: { name: string; url: string } }
type ItemFlingEffectDetail = {
  id: number
  name: string
  effect_entries: ItemFlingEffectEffectText[]
  items: ItemSummary[]
}
type ItemPocketSummary = { name: string; url: string }
type PaginatedItemPocketSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: ItemPocketSummary[]
}
type ItemPocketName = { name: string; language: { name: string; url: string } }
type ItemPocketDetail = {
  id: number
  name: string
  categories: ItemCategorySummary[]
  names: ItemPocketName[]
}
type CurrencySummary = { name: string; url: string }
type PaginatedCurrencySummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: CurrencySummary[]
}
type CurrencyName = { name: string; language: { name: string; url: string } }
type CurrencyDetail = { id: number; name: string; names: CurrencyName[] }
type LanguageSummary = { name: string; url: string }
type PaginatedLanguageSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: LanguageSummary[]
}
type LanguageName = { name: string; language: { name: string; url: string } }
type LanguageDetail = {
  id: number
  name: string
  official?: boolean | undefined
  iso639: string
  iso3166: string
  names: LanguageName[]
}
type PaginatedLocationSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: LocationSummary[]
}
type LocationName = { name: string; language: { name: string; url: string } }
type LocationGameIndex = { game_index: number; generation: { name: string; url: string } }
type LocationAreaSummary = { name: string; url: string }
type LocationDetail = {
  id: number
  name: string
  region: RegionSummary | ({ [x: string]: unknown } | null)
  names: LocationName[]
  game_indices: LocationGameIndex[]
  areas: LocationAreaSummary[]
}
type PaginatedLocationAreaSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: LocationAreaSummary[]
}
type LocationAreaEncounterVersionDetail = { rate: number; version: { name: string; url: string } }
type LocationAreaEncounterRate = {
  encounter_method: { name: string; url: string }
  version_details: LocationAreaEncounterVersionDetail[]
}
type LocationAreaName = { name: string; language: { name: string; url: string } }
type EncounterPokemonDetail = {
  min_perfect_ivs?: (number | null) | undefined
  always_shiny?: boolean | undefined
  never_shiny?: boolean | undefined
  is_alpha?: boolean | undefined
}
type LocationAreaEncounterDetail = {
  min_level: number
  max_level: number
  chance?: number | undefined
  method?: { name: string; url: string } | undefined
  condition_values: EncounterConditionValueSummary[]
  pokemon_details: EncounterPokemonDetail | ({ [x: string]: unknown } | null)
}
type LocationAreaPokemonEncounterVersion = {
  version: { name: string; url: string }
  max_chance: number
  encounter_details: LocationAreaEncounterDetail[]
}
type LocationAreaPokemonEncounter = {
  pokemon: { name: string; url: string }
  version_details: LocationAreaPokemonEncounterVersion[]
}
type LocationAreaDetail = {
  id: number
  name: string
  game_index: number
  encounter_method_rates: LocationAreaEncounterRate[]
  location: { name: string; url: string }
  names: LocationAreaName[]
  pokemon_encounters: LocationAreaPokemonEncounter[]
}
type MachineSummary = { url: string }
type PaginatedMachineSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: MachineSummary[]
}
type MachineDetail = {
  id: number
  item: { name: string; url: string }
  version_group: { name: string; url: string }
  move: { name: string; url: string }
}
type PaginatedMoveSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: MoveSummary[]
}
type MoveCombos = {
  normal: { use_before: MoveSummary[] | null; use_after: MoveSummary[] | null }
  super: { use_before: MoveSummary[] | null; use_after: MoveSummary[] | null }
}
type MoveEffectEffectText = {
  effect: string
  short_effect: string
  language: { name: string; url: string }
}
type MoveEffectChangeEffectText = { effect: string; language: { name: string; url: string } }
type MoveEffectChange = {
  version_group: { name: string; url: string }
  effect_entries: MoveEffectChangeEffectText[]
}
type MoveMeta = {
  ailment: { name: string; url: string }
  category: { name: string; url: string }
  min_hits?: (number | null) | undefined
  max_hits?: (number | null) | undefined
  min_turns?: (number | null) | undefined
  max_turns?: (number | null) | undefined
  drain?: (number | null) | undefined
  healing?: (number | null) | undefined
  crit_rate?: (number | null) | undefined
  ailment_chance?: (number | null) | undefined
  flinch_chance?: (number | null) | undefined
  stat_chance?: (number | null) | undefined
}
type MoveName = { name: string; language: { name: string; url: string } }
type MoveChange = {
  accuracy?: (number | null) | undefined
  power?: (number | null) | undefined
  pp?: (number | null) | undefined
  effect_chance: number | null
  effect_entries: MoveEffectEffectText[]
  type: TypeSummary | ({ [x: string]: unknown } | null)
  version_group: { name: string; url: string }
}
type MoveMetaStatChange = { change: number; stat: { name: string; url: string } }
type SuperContestEffectSummary = { url: string }
type MoveFlavorText = {
  flavor_text: string
  language: { name: string; url: string }
  version_group: { name: string; url: string }
}
type PokemonSummary = { name: string; url: string }
type MoveDetail = {
  id: number
  name: string
  accuracy?: (number | null) | undefined
  effect_chance: number | null
  pp?: (number | null) | undefined
  priority?: (number | null) | undefined
  power?: (number | null) | undefined
  contest_combos: MoveCombos | ({ [x: string]: unknown } | null)
  contest_type: ContestTypeSummary | ({ [x: string]: unknown } | null)
  contest_effect: ContestEffectSummary | ({ [x: string]: unknown } | null)
  damage_class: { name: string; url: string }
  effect_entries: MoveEffectEffectText[]
  effect_changes: MoveEffectChange[]
  generation: { name: string; url: string }
  meta: MoveMeta | ({ [x: string]: unknown } | null)
  names: MoveName[]
  past_values: MoveChange[]
  stat_changes: MoveMetaStatChange[]
  super_contest_effect: SuperContestEffectSummary | ({ [x: string]: unknown } | null)
  target: { name: string; url: string }
  type: { name: string; url: string }
  machines: ItemMachine[]
  flavor_text_entries: MoveFlavorText[]
  learned_by_pokemon: PokemonSummary[]
}
type MoveMetaAilmentSummary = { name: string; url: string }
type PaginatedMoveMetaAilmentSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: MoveMetaAilmentSummary[]
}
type MoveMetaAilmentName = { name: string; language: { name: string; url: string } }
type MoveMetaAilmentDetail = {
  id: number
  name: string
  moves: MoveSummary[]
  names: MoveMetaAilmentName[]
}
type MoveBattleStyleSummary = { name: string; url: string }
type PaginatedMoveBattleStyleSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: MoveBattleStyleSummary[]
}
type MoveBattleStyleName = { name: string; language: { name: string; url: string } }
type MoveBattleStyleDetail = { id: number; name: string; names: MoveBattleStyleName[] }
type MoveMetaCategorySummary = { name: string; url: string }
type PaginatedMoveMetaCategorySummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: MoveMetaCategorySummary[]
}
type MoveMetaCategoryDescription = {
  description?: string | undefined
  language: { name: string; url: string }
}
type MoveMetaCategoryDetail = {
  id: number
  name: string
  descriptions: MoveMetaCategoryDescription[]
  moves: MoveSummary[]
}
type MoveDamageClassSummary = { name: string; url: string }
type PaginatedMoveDamageClassSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: MoveDamageClassSummary[]
}
type MoveDamageClassDescription = {
  description?: string | undefined
  language: { name: string; url: string }
}
type MoveDamageClassName = { name: string; language: { name: string; url: string } }
type MoveDamageClassDetail = {
  id: number
  name: string
  descriptions: MoveDamageClassDescription[]
  moves: MoveSummary[]
  names: MoveDamageClassName[]
}
type MoveLearnMethodSummary = { name: string; url: string }
type PaginatedMoveLearnMethodSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: MoveLearnMethodSummary[]
}
type MoveLearnMethodName = { name: string; language: { name: string; url: string } }
type MoveLearnMethodDescription = {
  description?: string | undefined
  language: { name: string; url: string }
}
type MoveLearnMethodDetail = {
  id: number
  name: string
  names: MoveLearnMethodName[]
  descriptions: MoveLearnMethodDescription[]
  version_groups: VersionGroupSummary[]
}
type MoveTargetSummary = { name: string; url: string }
type PaginatedMoveTargetSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: MoveTargetSummary[]
}
type MoveTargetDescription = {
  description?: string | undefined
  language: { name: string; url: string }
}
type MoveTargetName = { name: string; language: { name: string; url: string } }
type MoveTargetDetail = {
  id: number
  name: string
  descriptions: MoveTargetDescription[]
  moves: MoveSummary[]
  names: MoveTargetName[]
}
type PaginatedNatureSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: NatureSummary[]
}
type StatSummary = { name: string; url: string }
type NaturePokeathlonStat = { max_change: number; pokeathlon_stat: { name: string; url: string } }
type NatureBattleStylePreference = {
  low_hp_preference: number
  high_hp_preference: number
  move_battle_style: { name: string; url: string }
}
type NatureName = { name: string; language: { name: string; url: string } }
type NatureDetail = {
  id: number
  name: string
  decreased_stat: StatSummary | ({ [x: string]: unknown } | null)
  increased_stat: StatSummary | ({ [x: string]: unknown } | null)
  likes_flavor: BerryFlavorSummary | ({ [x: string]: unknown } | null)
  hates_flavor: BerryFlavorSummary | ({ [x: string]: unknown } | null)
  pokeathlon_stat_changes: NaturePokeathlonStat[]
  move_battle_style_preferences: NatureBattleStylePreference[]
  names: NatureName[]
}
type PalParkAreaSummary = { name: string; url: string }
type PaginatedPalParkAreaSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: PalParkAreaSummary[]
}
type PalParkAreaName = { name: string; language: { name: string; url: string } }
type PalParkEncounter = {
  base_score?: (number | null) | undefined
  rate: number
  pokemon_species: { name: string; url: string }
}
type PalParkAreaDetail = {
  id: number
  name: string
  names: PalParkAreaName[]
  pokemon_encounters: PalParkEncounter[]
}
type PokedexSummary = { name: string; url: string }
type PaginatedPokedexSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: PokedexSummary[]
}
type PokedexDescription = {
  description?: string | undefined
  language: { name: string; url: string }
}
type PokedexName = { name: string; language: { name: string; url: string } }
type PokemonDexNumber = { entry_number: number; pokemon_species: { name: string; url: string } }
type PokedexDetail = {
  id: number
  name: string
  is_main_series?: boolean | undefined
  descriptions: PokedexDescription[]
  names: PokedexName[]
  pokemon_entries: PokemonDexNumber[]
  region: RegionSummary | ({ [x: string]: unknown } | null)
  version_groups: VersionGroupSummary[]
}
type PaginatedPokemonSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: PokemonSummary[]
}
type PokemonAbility = {
  is_hidden?: boolean | undefined
  slot: number
  ability: { name: string; url: string }
}
type PokemonAbilityPast = {
  is_hidden?: boolean | undefined
  slot: number
  ability: AbilitySummary | ({ [x: string]: unknown } | null)
}
type PokemonPastAbility = {
  abilities: PokemonAbilityPast[]
  generation: { name: string; url: string }
}
type PokemonGameIndex = { game_index: number; version: { name: string; url: string } }
type PokemonHeldItemSummary = {
  item: { name: string; url: string }
  version_details: PokemonHeldItemVersion[]
}
type PokemonMoveVersionGroup = {
  level_learned_at: number
  move_learn_method: { name: string; url: string }
  version_group: { name: string; url: string }
  order?: (number | null) | undefined
  enhancement_level?: (number | null) | undefined
}
type PokemonMove = {
  move: { name: string; url: string }
  version_group_details: PokemonMoveVersionGroup[]
}
type PokemonStat = { base_stat: number; effort: number; stat: { name: string; url: string } }
type PokemonPastStat = { generation: { name: string; url: string }; stats: PokemonStat[] }
type PokemonType = { slot: number; type: { name: string; url: string } }
type PokemonPastType = { generation: { name: string; url: string }; types: PokemonType[] }
type PokemonDetail = {
  id: number
  name: string
  base_experience?: (number | null) | undefined
  height?: (number | null) | undefined
  is_default?: boolean | undefined
  order?: (number | null) | undefined
  weight?: (number | null) | undefined
  abilities: PokemonAbility[]
  past_abilities: PokemonPastAbility[]
  forms: PokemonFormSummary[]
  game_indices: PokemonGameIndex[]
  held_items: PokemonHeldItemSummary[]
  location_area_encounters: string
  moves: PokemonMove[]
  species: { name: string; url: string }
  sprites: {
    front_default: string | null
    front_shiny: string | null
    front_female: string | null
    front_shiny_female: string | null
    back_default: string | null
    back_shiny: string | null
    back_female: string | null
    back_shiny_female: string | null
    other?:
      | {
          dream_world?: { front_default: string | null; front_female: string | null } | undefined
          home?:
            | {
                front_default: string | null
                front_female: string | null
                front_shiny: string | null
                front_shiny_female: string | null
              }
            | undefined
          showdown?:
            | {
                front_default: string | null
                front_female: string | null
                front_shiny: string | null
                front_shiny_female: string | null
                back_default: string | null
                back_female: string | null
                back_shiny: string | null
                back_shiny_female: string | null
              }
            | undefined
          'official-artwork'?:
            | {
                front_default: string | null
                front_shiny: string | null
                versions?: { [x: string]: { [x: string]: { [x: string]: unknown } } } | undefined
              }
            | undefined
        }
      | undefined
    versions?: { [x: string]: { [x: string]: { [x: string]: unknown } } } | undefined
  }
  cries: { latest: string | null; legacy: string | null }
  stats: PokemonStat[]
  past_stats: PokemonPastStat[]
  types: PokemonType[]
  past_types: PokemonPastType[]
}
type PokemonColorSummary = { name: string; url: string }
type PaginatedPokemonColorSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: PokemonColorSummary[]
}
type PokemonColorName = { name: string; language: { name: string; url: string } }
type PokemonColorDetail = {
  id: number
  name: string
  names: PokemonColorName[]
  pokemon_species: PokemonSpeciesSummary[]
}
type PaginatedPokemonFormSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: PokemonFormSummary[]
}
type PokemonFormName = { name: string; language: { name: string; url: string } }
type PokemonFormType = { slot: number; type: { name: string; url: string } }
type PokemonFormTriggerCondition = {
  trigger: string
  name?: string | undefined
  url?: string | undefined
  base_form?: { name: string; url: string } | undefined
}
type PokemonFormFlavorText = {
  flavor_text: string
  language: { name: string; url: string }
  version: { name: string; url: string }
}
type PokemonFormDetail = {
  id: number
  name: string
  order?: (number | null) | undefined
  form_order?: (number | null) | undefined
  is_default?: boolean | undefined
  is_battle_only?: boolean | undefined
  is_mega?: boolean | undefined
  form_name: string
  pokemon: { name: string; url: string }
  sprites: {
    front_default: string | null
    front_shiny: string | null
    front_female: string | null
    front_shiny_female: string | null
    back_default: string | null
    back_shiny: string | null
    back_female: string | null
    back_shiny_female: string | null
    other?:
      | {
          dream_world?: { front_default: string | null; front_female: string | null } | undefined
          home?:
            | {
                front_default: string | null
                front_female: string | null
                front_shiny: string | null
                front_shiny_female: string | null
              }
            | undefined
          showdown?:
            | {
                front_default: string | null
                front_female: string | null
                front_shiny: string | null
                front_shiny_female: string | null
                back_default: string | null
                back_female: string | null
                back_shiny: string | null
                back_shiny_female: string | null
              }
            | undefined
          'official-artwork'?:
            | {
                front_default: string | null
                front_shiny: string | null
                versions?: { [x: string]: { [x: string]: { [x: string]: unknown } } } | undefined
              }
            | undefined
        }
      | undefined
    versions?: { [x: string]: { [x: string]: { [x: string]: unknown } } } | undefined
  }
  version_group: { name: string; url: string }
  form_names: PokemonFormName[]
  names: PokemonFormName[]
  types: PokemonFormType[]
  trigger_conditions: PokemonFormTriggerCondition[]
  flavor_text_entries: PokemonFormFlavorText[]
}
type PokemonHabitatSummary = { name: string; url: string }
type PaginatedPokemonHabitatSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: PokemonHabitatSummary[]
}
type PokemonHabitatName = { name: string; language: { name: string; url: string } }
type PokemonHabitatDetail = {
  id: number
  name: string
  names: PokemonHabitatName[]
  pokemon_species: PokemonSpeciesSummary[]
}
type PokemonShapeSummary = { name: string; url: string }
type PaginatedPokemonShapeSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: PokemonShapeSummary[]
}
type PokemonShapeAwesomeName = { awesome_name: string; language: { name: string; url: string } }
type PokemonShapeName = { name: string; language: { name: string; url: string } }
type PokemonShapeDetail = {
  id: number
  name: string
  awesome_names: PokemonShapeAwesomeName[]
  names: PokemonShapeName[]
  pokemon_species: PokemonSpeciesSummary[]
}
type PaginatedPokemonSpeciesSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: PokemonSpeciesSummary[]
}
type PokemonDexEntry = { entry_number: number; pokedex: { name: string; url: string } }
type PokemonSpeciesName = { name: string; language: { name: string; url: string } }
type PokemonSpeciesPalParkEncounter = {
  base_score?: (number | null) | undefined
  rate: number
  area: { name: string; url: string }
}
type PokemonSpeciesDescription = {
  description?: string | undefined
  language: { name: string; url: string }
}
type PokemonSpeciesFlavorText = {
  flavor_text: string
  language: { name: string; url: string }
  version: { name: string; url: string }
}
type PokemonSpeciesGenus = { genus: string; language: { name: string; url: string } }
type PokemonSpeciesVariety = { is_default: boolean; pokemon: { name: string; url: string } }
type PokemonSpeciesDetail = {
  id: number
  name: string
  order?: (number | null) | undefined
  gender_rate?: (number | null) | undefined
  capture_rate?: (number | null) | undefined
  base_happiness?: (number | null) | undefined
  is_baby?: boolean | undefined
  is_legendary?: boolean | undefined
  is_mythical?: boolean | undefined
  hatch_counter?: (number | null) | undefined
  has_gender_differences?: boolean | undefined
  forms_switchable?: boolean | undefined
  growth_rate: { name: string; url: string }
  pokedex_numbers: PokemonDexEntry[]
  egg_groups: EggGroupSummary[]
  color: { name: string; url: string }
  shape: { name: string; url: string }
  evolves_from_species: PokemonSpeciesSummary | ({ [x: string]: unknown } | null)
  evolution_chain: { url: string }
  habitat: PokemonHabitatSummary | ({ [x: string]: unknown } | null)
  generation: { name: string; url: string }
  names: PokemonSpeciesName[]
  pal_park_encounters: PokemonSpeciesPalParkEncounter[]
  form_descriptions: PokemonSpeciesDescription[]
  flavor_text_entries: PokemonSpeciesFlavorText[]
  genera: PokemonSpeciesGenus[]
  varieties: PokemonSpeciesVariety[]
}
type PokeathlonStatSummary = { name: string; url: string }
type PaginatedPokeathlonStatSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: PokeathlonStatSummary[]
}
type PokeathlonStatAffectingNature = { max_change: number; nature: { name: string; url: string } }
type PokeathlonStatName = { name: string; language: { name: string; url: string } }
type PokeathlonStatDetail = {
  id: number
  name: string
  affecting_natures: {
    increase: PokeathlonStatAffectingNature[]
    decrease: PokeathlonStatAffectingNature[]
  }
  names: PokeathlonStatName[]
}
type PaginatedRegionSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: RegionSummary[]
}
type RegionName = { name: string; language: { name: string; url: string } }
type RegionDetail = {
  id: number
  name: string
  locations: LocationSummary[]
  main_generation: GenerationSummary | ({ [x: string]: unknown } | null)
  names: RegionName[]
  pokedexes: PokedexSummary[]
  version_groups: VersionGroupSummary[]
}
type PaginatedStatSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: StatSummary[]
}
type MoveStatChange = { change: number; move: { name: string; url: string } }
type StatName = { name: string; language: { name: string; url: string } }
type StatDetail = {
  id: number
  name: string
  game_index: number
  is_battle_only?: boolean | undefined
  affecting_moves: { increase: MoveStatChange[]; decrease: MoveStatChange[] }
  affecting_natures: { increase: NatureSummary[]; decrease: NatureSummary[] }
  affecting_items: ItemSummary[]
  characteristics: CharacteristicSummary[]
  move_damage_class: MoveDamageClassSummary | ({ [x: string]: unknown } | null)
  names: StatName[]
}
type PaginatedSuperContestEffectSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: SuperContestEffectSummary[]
}
type SuperContestEffectFlavorText = { flavor_text: string; language: { name: string; url: string } }
type SuperContestEffectDetail = {
  id: number
  appeal: number
  flavor_text_entries: SuperContestEffectFlavorText[]
  moves: MoveSummary[]
}
type PaginatedTypeSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: TypeSummary[]
}
type TypePastRelationships = {
  generation: { name: string; url: string }
  damage_relations: {
    no_damage_to: TypeSummary[]
    half_damage_to: TypeSummary[]
    double_damage_to: TypeSummary[]
    no_damage_from: TypeSummary[]
    half_damage_from: TypeSummary[]
    double_damage_from: TypeSummary[]
  }
}
type TypeGameIndex = { game_index: number; generation: { name: string; url: string } }
type TypeName = { name: string; language: { name: string; url: string } }
type TypePokemon = { slot: number; pokemon: { name: string; url: string } }
type TypeGameSprite = {
  name_icon?: (string | null) | undefined
  symbol_icon?: (string | null) | undefined
}
type TypeDetail = {
  id: number
  name: string
  damage_relations: {
    no_damage_to: TypeSummary[]
    half_damage_to: TypeSummary[]
    double_damage_to: TypeSummary[]
    no_damage_from: TypeSummary[]
    half_damage_from: TypeSummary[]
    double_damage_from: TypeSummary[]
  }
  past_damage_relations: TypePastRelationships[]
  game_indices: TypeGameIndex[]
  generation: { name: string; url: string }
  move_damage_class: MoveDamageClassSummary | ({ [x: string]: unknown } | null)
  names: TypeName[]
  pokemon: TypePokemon[]
  moves: MoveSummary[]
  sprites: { [x: string]: { [x: string]: TypeGameSprite } }
}
type VersionSummary = { name: string; url: string }
type PaginatedVersionSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: VersionSummary[]
}
type VersionName = { name: string; language: { name: string; url: string } }
type VersionDetail = {
  id: number
  name: string
  names: VersionName[]
  version_group: { name: string; url: string }
}
type PaginatedVersionGroupSummaryList = {
  count: number
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
  results: VersionGroupSummary[]
}
type VersionGroupDetail = {
  id: number
  name: string
  order?: (number | null) | undefined
  generation: { name: string; url: string }
  move_learn_methods: MoveLearnMethodSummary[]
  pokedexes: PokedexSummary[]
  regions: RegionSummary[]
  versions: VersionSummary[]
}
type PokemonEncounterDetailResponse = {
  chance: number
  condition_values: EncounterConditionValueSummary[]
  max_level: number
  method: { name: string; url: string }
  min_level: number
}
type PokemonEncounterVersionDetailResponse = {
  version: { name: string; url: string }
  max_chance: number
  encounter_details: PokemonEncounterDetailResponse[]
}
type PokemonEncounterResponse = {
  location_area: { name: string; url: string }
  version_details: PokemonEncounterVersionDetailResponse[]
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v2/meta/': {
      $get: { input: {}; output: PokeapiMetaResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v2/ability/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedAbilitySummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/ability/:id/': {
      $get: {
        input: { param: { id: string } }
        output: AbilityDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/berry/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedBerrySummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/berry/:id/': {
      $get: {
        input: { param: { id: string } }
        output: BerryDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/berry-firmness/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedBerryFirmnessSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/berry-firmness/:id/': {
      $get: {
        input: { param: { id: string } }
        output: BerryFirmnessDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/berry-flavor/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedBerryFlavorSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/berry-flavor/:id/': {
      $get: {
        input: { param: { id: string } }
        output: BerryFlavorDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/characteristic/': {
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } }
        output: PaginatedCharacteristicSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/characteristic/:id/': {
      $get: {
        input: { param: { id: string } }
        output: CharacteristicDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/contest-type/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedContestTypeSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/contest-type/:id/': {
      $get: {
        input: { param: { id: string } }
        output: ContestTypeDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/contest-effect/': {
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } }
        output: PaginatedContestEffectSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/contest-effect/:id/': {
      $get: {
        input: { param: { id: string } }
        output: ContestEffectDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/egg-group/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedEggGroupSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/egg-group/:id/': {
      $get: {
        input: { param: { id: string } }
        output: EggGroupDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/encounter-method/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedEncounterMethodSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/encounter-method/:id/': {
      $get: {
        input: { param: { id: string } }
        output: EncounterMethodDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/encounter-condition/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedEncounterConditionSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/encounter-condition/:id/': {
      $get: {
        input: { param: { id: string } }
        output: EncounterConditionDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/encounter-condition-value/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedEncounterConditionValueSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/encounter-condition-value/:id/': {
      $get: {
        input: { param: { id: string } }
        output: EncounterConditionValueDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/evolution-chain/': {
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } }
        output: PaginatedEvolutionChainSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/evolution-chain/:id/': {
      $get: {
        input: { param: { id: string } }
        output: EvolutionChainDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/evolution-trigger/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedEvolutionTriggerSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/evolution-trigger/:id/': {
      $get: {
        input: { param: { id: string } }
        output: EvolutionTriggerDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/evolution-variable/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedEvolutionVariableSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/evolution-variable/:id/': {
      $get: {
        input: { param: { id: string } }
        output: EvolutionVariableDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/generation/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedGenerationSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/generation/:id/': {
      $get: {
        input: { param: { id: string } }
        output: GenerationDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/gender/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedGenderSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/gender/:id/': {
      $get: {
        input: { param: { id: string } }
        output: GenderDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/growth-rate/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedGrowthRateSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/growth-rate/:id/': {
      $get: {
        input: { param: { id: string } }
        output: GrowthRateDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/item/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedItemSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/item/:id/': {
      $get: {
        input: { param: { id: string } }
        output: ItemDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/item-category/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedItemCategorySummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/item-category/:id/': {
      $get: {
        input: { param: { id: string } }
        output: ItemCategoryDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/item-attribute/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedItemAttributeSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/item-attribute/:id/': {
      $get: {
        input: { param: { id: string } }
        output: ItemAttributeDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/item-fling-effect/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedItemFlingEffectSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/item-fling-effect/:id/': {
      $get: {
        input: { param: { id: string } }
        output: ItemFlingEffectDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/item-pocket/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedItemPocketSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/item-pocket/:id/': {
      $get: {
        input: { param: { id: string } }
        output: ItemPocketDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/currency/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedCurrencySummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/currency/:id/': {
      $get: {
        input: { param: { id: string } }
        output: CurrencyDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/language/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedLanguageSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/language/:id/': {
      $get: {
        input: { param: { id: string } }
        output: LanguageDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/location/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedLocationSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/location/:id/': {
      $get: {
        input: { param: { id: string } }
        output: LocationDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/location-area/': {
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } }
        output: PaginatedLocationAreaSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/location-area/:id/': {
      $get: {
        input: { param: { id: number } }
        output: LocationAreaDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/machine/': {
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } }
        output: PaginatedMachineSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/machine/:id/': {
      $get: {
        input: { param: { id: string } }
        output: MachineDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/move/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedMoveSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/move/:id/': {
      $get: {
        input: { param: { id: string } }
        output: MoveDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/move-ailment/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedMoveMetaAilmentSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/move-ailment/:id/': {
      $get: {
        input: { param: { id: string } }
        output: MoveMetaAilmentDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/move-battle-style/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedMoveBattleStyleSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/move-battle-style/:id/': {
      $get: {
        input: { param: { id: string } }
        output: MoveBattleStyleDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/move-category/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedMoveMetaCategorySummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/move-category/:id/': {
      $get: {
        input: { param: { id: string } }
        output: MoveMetaCategoryDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/move-damage-class/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedMoveDamageClassSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/move-damage-class/:id/': {
      $get: {
        input: { param: { id: string } }
        output: MoveDamageClassDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/move-learn-method/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedMoveLearnMethodSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/move-learn-method/:id/': {
      $get: {
        input: { param: { id: string } }
        output: MoveLearnMethodDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/move-target/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedMoveTargetSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/move-target/:id/': {
      $get: {
        input: { param: { id: string } }
        output: MoveTargetDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/nature/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedNatureSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/nature/:id/': {
      $get: {
        input: { param: { id: string } }
        output: NatureDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/pal-park-area/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedPalParkAreaSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/pal-park-area/:id/': {
      $get: {
        input: { param: { id: string } }
        output: PalParkAreaDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/pokedex/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedPokedexSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/pokedex/:id/': {
      $get: {
        input: { param: { id: string } }
        output: PokedexDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/pokemon/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedPokemonSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/pokemon/:id/': {
      $get: {
        input: { param: { id: string } }
        output: PokemonDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/pokemon-color/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedPokemonColorSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/pokemon-color/:id/': {
      $get: {
        input: { param: { id: string } }
        output: PokemonColorDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/pokemon-form/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedPokemonFormSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/pokemon-form/:id/': {
      $get: {
        input: { param: { id: string } }
        output: PokemonFormDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/pokemon-habitat/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedPokemonHabitatSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/pokemon-habitat/:id/': {
      $get: {
        input: { param: { id: string } }
        output: PokemonHabitatDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/pokemon-shape/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedPokemonShapeSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/pokemon-shape/:id/': {
      $get: {
        input: { param: { id: string } }
        output: PokemonShapeDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/pokemon-species/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedPokemonSpeciesSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/pokemon-species/:id/': {
      $get: {
        input: { param: { id: string } }
        output: PokemonSpeciesDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/pokeathlon-stat/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedPokeathlonStatSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/pokeathlon-stat/:id/': {
      $get: {
        input: { param: { id: string } }
        output: PokeathlonStatDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/region/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedRegionSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/region/:id/': {
      $get: {
        input: { param: { id: string } }
        output: RegionDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/stat/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedStatSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/stat/:id/': {
      $get: {
        input: { param: { id: string } }
        output: StatDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/super-contest-effect/': {
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } }
        output: PaginatedSuperContestEffectSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/super-contest-effect/:id/': {
      $get: {
        input: { param: { id: string } }
        output: SuperContestEffectDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/type/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedTypeSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/type/:id/': {
      $get: {
        input: { param: { id: string } }
        output: TypeDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/version/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedVersionSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/version/:id/': {
      $get: {
        input: { param: { id: string } }
        output: VersionDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/version-group/': {
      $get: {
        input: {
          query: { limit?: number | undefined; offset?: number | undefined; q?: string | undefined }
        }
        output: PaginatedVersionGroupSummaryList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/version-group/:id/': {
      $get: {
        input: { param: { id: string } }
        output: VersionGroupDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/pokemon/:pokemon_id/encounters': {
      $get: {
        input: { param: { pokemon_id: number } }
        output: PokemonEncounterResponse[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
