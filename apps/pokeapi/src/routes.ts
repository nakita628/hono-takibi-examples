import { createRoute, z } from '@hono/zod-openapi'

const VersionGroupSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('VersionGroupSummary')

const LanguageSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('LanguageSummary')

const AbilityChangeEffectTextSchema = z
  .object({ effect: z.string().max(6000), language: LanguageSummarySchema })
  .openapi({ required: ['effect', 'language'] })
  .openapi('AbilityChangeEffectText')

const AbilityChangeSchema = z
  .object({
    version_group: VersionGroupSummarySchema,
    effect_entries: z.array(AbilityChangeEffectTextSchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['effect_entries', 'version_group'] })
  .openapi('AbilityChange')

const GenerationSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('GenerationSummary')

const AbilityNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('AbilityName')

const AbilityEffectTextSchema = z
  .object({
    effect: z.string().max(6000),
    short_effect: z.string().max(300),
    language: LanguageSummarySchema,
  })
  .openapi({ required: ['effect', 'language', 'short_effect'] })
  .openapi('AbilityEffectText')

const AbilityFlavorTextSchema = z
  .object({
    flavor_text: z.string(),
    language: LanguageSummarySchema,
    version_group: VersionGroupSummarySchema,
  })
  .openapi({ required: ['flavor_text', 'language', 'version_group'] })
  .openapi('AbilityFlavorText')

const PokemonSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('PokemonSummary')

const AbilityPokemonDetailSchema = z
  .object({
    is_hidden: z.boolean().exactOptional(),
    slot: z.int().min(-2147483648).max(2147483647),
    pokemon: PokemonSummarySchema,
  })
  .openapi({ required: ['pokemon', 'slot'] })
  .openapi('AbilityPokemonDetail')

const AbilityDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    is_main_series: z.boolean().exactOptional(),
    generation: GenerationSummarySchema,
    names: z.array(AbilityNameSchema).openapi({ readOnly: true }),
    effect_entries: z.array(AbilityEffectTextSchema).openapi({ readOnly: true }),
    effect_changes: z.array(AbilityChangeSchema).openapi({ readOnly: true }),
    flavor_text_entries: z.array(AbilityFlavorTextSchema).openapi({ readOnly: true }),
    pokemon: z.array(AbilityPokemonDetailSchema).openapi({ readOnly: true }),
  })
  .openapi({
    required: [
      'effect_changes',
      'effect_entries',
      'flavor_text_entries',
      'generation',
      'id',
      'name',
      'names',
      'pokemon',
    ],
  })
  .openapi('AbilityDetail')

const AbilitySummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('AbilitySummary')

const BerryFirmnessSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('BerryFirmnessSummary')

const BerryFlavorSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('BerryFlavorSummary')

const BerryFlavorMapSchema = z
  .object({ potency: z.int().min(-2147483648).max(2147483647), flavor: BerryFlavorSummarySchema })
  .openapi({ required: ['flavor', 'potency'] })
  .openapi('BerryFlavorMap')

const ItemSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('ItemSummary')

const TypeSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('TypeSummary')

const BerryDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    growth_time: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    max_harvest: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    natural_gift_power: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    size: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    smoothness: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    soil_dryness: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    firmness: BerryFirmnessSummarySchema,
    flavors: z.array(BerryFlavorMapSchema).openapi({ readOnly: true }),
    item: ItemSummarySchema,
    natural_gift_type: TypeSummarySchema,
  })
  .openapi({ required: ['firmness', 'flavors', 'id', 'item', 'name', 'natural_gift_type'] })
  .openapi('BerryDetail')

const BerrySummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('BerrySummary')

const BerryFirmnessNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('BerryFirmnessName')

const BerryFirmnessDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    berries: z.array(BerrySummarySchema).openapi({ readOnly: true }),
    names: z.array(BerryFirmnessNameSchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['berries', 'id', 'name', 'names'] })
  .openapi('BerryFirmnessDetail')

const BerryFlavorBerryMapSchema = z
  .object({ potency: z.int().min(-2147483648).max(2147483647), berry: BerrySummarySchema })
  .openapi({ required: ['berry', 'potency'] })
  .openapi('BerryFlavorBerryMap')

const ContestTypeSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('ContestTypeSummary')

const BerryFlavorNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('BerryFlavorName')

const BerryFlavorDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    berries: z.array(BerryFlavorBerryMapSchema).openapi({ readOnly: true }),
    contest_type: ContestTypeSummarySchema,
    names: z.array(BerryFlavorNameSchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['berries', 'contest_type', 'id', 'name', 'names'] })
  .openapi('BerryFlavorDetail')

const CharacteristicDescriptionSchema = z
  .object({ description: z.string().max(2000).exactOptional(), language: LanguageSummarySchema })
  .openapi({ required: ['language'] })
  .openapi('CharacteristicDescription')

const StatSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('StatSummary')

const CharacteristicDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    gene_modulo: z.int(),
    possible_values: z.array(z.int()).openapi({ readOnly: true }),
    highest_stat: StatSummarySchema,
    descriptions: z.array(CharacteristicDescriptionSchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['descriptions', 'gene_modulo', 'highest_stat', 'id', 'possible_values'] })
  .openapi('CharacteristicDetail')

const CharacteristicSummarySchema = z
  .object({ url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['url'] })
  .openapi('CharacteristicSummary')

const ContestEffectEffectTextSchema = z
  .object({ effect: z.string().max(6000), language: LanguageSummarySchema })
  .openapi({ required: ['effect', 'language'] })
  .openapi('ContestEffectEffectText')

const ContestEffectFlavorTextSchema = z
  .object({ flavor_text: z.string().max(500), language: LanguageSummarySchema })
  .openapi({ required: ['flavor_text', 'language'] })
  .openapi('ContestEffectFlavorText')

const ContestEffectDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    appeal: z.int().min(-2147483648).max(2147483647),
    jam: z.int().min(-2147483648).max(2147483647),
    effect_entries: z.array(ContestEffectEffectTextSchema).openapi({ readOnly: true }),
    flavor_text_entries: z.array(ContestEffectFlavorTextSchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['appeal', 'effect_entries', 'flavor_text_entries', 'id', 'jam'] })
  .openapi('ContestEffectDetail')

const ContestEffectSummarySchema = z
  .object({ url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['url'] })
  .openapi('ContestEffectSummary')

const ContestTypeNameSchema = z
  .object({ name: z.string().max(200), color: z.string().max(10), language: LanguageSummarySchema })
  .openapi({ required: ['color', 'language', 'name'] })
  .openapi('ContestTypeName')

const ContestTypeDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    berry_flavor: BerryFlavorSummarySchema.openapi({ readOnly: true }),
    names: z.array(ContestTypeNameSchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['berry_flavor', 'id', 'name', 'names'] })
  .openapi('ContestTypeDetail')

const CurrencyNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('CurrencyName')

const CurrencyDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    names: z.array(CurrencyNameSchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['id', 'name', 'names'] })
  .openapi('CurrencyDetail')

const CurrencySummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('CurrencySummary')

const EggGroupNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('EggGroupName')

const PokemonSpeciesSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('PokemonSpeciesSummary')

const EggGroupDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    names: z.array(EggGroupNameSchema).openapi({ readOnly: true }),
    pokemon_species: z.array(PokemonSpeciesSummarySchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['id', 'name', 'names', 'pokemon_species'] })
  .openapi('EggGroupDetail')

const EggGroupSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('EggGroupSummary')

const EncounterConditionValueSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('EncounterConditionValueSummary')

const EncounterConditionNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('EncounterConditionName')

const EncounterConditionDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    values: z.array(EncounterConditionValueSummarySchema).openapi({ readOnly: true }),
    names: z.array(EncounterConditionNameSchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['id', 'name', 'names', 'values'] })
  .openapi('EncounterConditionDetail')

const EncounterConditionSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('EncounterConditionSummary')

const EncounterConditionValueNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('EncounterConditionValueName')

const EncounterConditionValueDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    condition: EncounterConditionSummarySchema,
    names: z.array(EncounterConditionValueNameSchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['condition', 'id', 'name', 'names'] })
  .openapi('EncounterConditionValueDetail')

const EncounterMethodNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('EncounterMethodName')

const EncounterMethodDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    order: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    names: z.array(EncounterMethodNameSchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['id', 'name', 'names'] })
  .openapi('EncounterMethodDetail')

const EncounterMethodSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('EncounterMethodSummary')

const EncounterPokemonDetailSchema = z
  .object({
    min_perfect_ivs: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    always_shiny: z.boolean().exactOptional(),
    never_shiny: z.boolean().exactOptional(),
    is_alpha: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EncounterPokemonDetail')

const EvolutionTriggerSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('EvolutionTriggerSummary')

const MoveSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('MoveSummary')

const LocationSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('LocationSummary')

const RegionSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('RegionSummary')

const PokemonFormSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('PokemonFormSummary')

const NatureSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('NatureSummary')

const EvolutionVariableSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('EvolutionVariableSummary')

const EvolutionConditionExpressionSchema = z
  .object({
    expression: z
      .string()
      .openapi({
        description:
          "Evaluatable RPN condition expression using evolution variables (e.g. 'EC 100 % 0 ==')",
      }),
    percentage_chance: z
      .float64()
      .nullable()
      .openapi({ description: 'Percentage chance of evolution under this condition (0-100)' }),
    variables: z
      .array(EvolutionVariableSummarySchema)
      .openapi({ description: 'Evolution variables referenced in the expression' }),
  })
  .openapi({ required: ['expression', 'percentage_chance', 'variables'] })
  .openapi('EvolutionConditionExpression')

const PokemonEvolutionSchema = z
  .object({
    version_group: VersionGroupSummarySchema,
    is_default: z.boolean().exactOptional(),
    item: ItemSummarySchema,
    trigger: EvolutionTriggerSummarySchema,
    gender: z.int().nullable().exactOptional(),
    held_item: ItemSummarySchema,
    known_move: MoveSummarySchema,
    known_move_type: TypeSummarySchema,
    location: LocationSummarySchema,
    min_level: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    min_happiness: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    min_beauty: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    min_affection: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    near_special_rock: z.boolean().exactOptional(),
    needs_multiplayer: z.boolean().exactOptional(),
    needs_overworld_rain: z.boolean().exactOptional(),
    party_species: PokemonSpeciesSummarySchema,
    party_type: TypeSummarySchema,
    relative_physical_stats: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    time_of_day: z.string().max(10).exactOptional(),
    trade_species: PokemonSpeciesSummarySchema,
    turn_upside_down: z.boolean().exactOptional(),
    region: RegionSummarySchema,
    required_pokemon_form: PokemonFormSummarySchema,
    evolved_pokemon_form: PokemonFormSummarySchema,
    used_move: MoveSummarySchema,
    min_move_count: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    min_steps: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    min_damage_taken: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    allowed_natures: z.array(NatureSummarySchema).openapi({ readOnly: true }),
    condition_expression: z
      .xor([EvolutionConditionExpressionSchema, z.null().nullable()])
      .openapi({ readOnly: true }),
  })
  .openapi({
    required: [
      'allowed_natures',
      'condition_expression',
      'evolved_pokemon_form',
      'held_item',
      'item',
      'known_move',
      'known_move_type',
      'location',
      'party_species',
      'party_type',
      'region',
      'required_pokemon_form',
      'trade_species',
      'trigger',
      'used_move',
      'version_group',
    ],
  })
  .openapi('PokemonEvolution')

const EvolutionChainLinkSchema = z
  .object({
    is_baby: z.boolean(),
    species: PokemonSpeciesSummarySchema,
    evolution_details: z.array(PokemonEvolutionSchema),
    evolves_to: z.array(z.record(z.string(), z.any())),
  })
  .openapi({ required: ['evolution_details', 'evolves_to', 'is_baby', 'species'] })
  .openapi('EvolutionChainLink')

const EvolutionChainDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    baby_trigger_item: ItemSummarySchema,
    chain: EvolutionChainLinkSchema.openapi({ readOnly: true }),
  })
  .openapi({ required: ['baby_trigger_item', 'chain', 'id'] })
  .openapi('EvolutionChainDetail')

const EvolutionChainSummarySchema = z
  .object({ url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['url'] })
  .openapi('EvolutionChainSummary')

const EvolutionTriggerNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('EvolutionTriggerName')

const EvolutionTriggerDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    names: z.array(EvolutionTriggerNameSchema).openapi({ readOnly: true }),
    pokemon_species: z.array(PokemonSpeciesSummarySchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['id', 'name', 'names', 'pokemon_species'] })
  .openapi('EvolutionTriggerDetail')

const EvolutionVariableDescriptionSchema = z
  .object({ description: z.string().max(2000).exactOptional(), language: LanguageSummarySchema })
  .openapi({ required: ['language'] })
  .openapi('EvolutionVariableDescription')

const EvolutionVariableNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('EvolutionVariableName')

const EvolutionVariableDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    symbol: z.string().max(10),
    data_type: z.string().max(20).exactOptional(),
    source: z
      .string()
      .max(20)
      .exactOptional()
      .openapi({
        description:
          "Where the value comes from: 'pokemon' for data stored on the Pokemon (e.g. EC, PID), 'player-input' for an action taken by the player while evolving (e.g. SPIN_DIR, SPIN_SEC)",
      }),
    version_group: VersionGroupSummarySchema,
    names: z.array(EvolutionVariableNameSchema).openapi({ readOnly: true }),
    descriptions: z.array(EvolutionVariableDescriptionSchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['descriptions', 'id', 'name', 'names', 'symbol', 'version_group'] })
  .openapi('EvolutionVariableDetail')

const ExperienceSchema = z
  .object({
    level: z.int().min(-2147483648).max(2147483647),
    experience: z.int().min(-2147483648).max(2147483647),
  })
  .openapi({ required: ['experience', 'level'] })
  .openapi('Experience')

const GenderPokemonSpeciesSchema = z
  .object({ rate: z.int(), pokemon_species: PokemonSpeciesSummarySchema })
  .openapi({ required: ['pokemon_species', 'rate'] })
  .openapi('GenderPokemonSpecies')

const GenderDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    pokemon_species_details: z.array(GenderPokemonSpeciesSchema).openapi({ readOnly: true }),
    required_for_evolution: z.array(PokemonSpeciesSummarySchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['id', 'name', 'pokemon_species_details', 'required_for_evolution'] })
  .openapi('GenderDetail')

const GenderSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('GenderSummary')

const GenerationNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('GenerationName')

const GenerationDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    abilities: z.array(AbilitySummarySchema).openapi({ readOnly: true }),
    main_region: RegionSummarySchema,
    moves: z.array(MoveSummarySchema).openapi({ readOnly: true }),
    names: z.array(GenerationNameSchema).openapi({ readOnly: true }),
    pokemon_species: z.array(PokemonSpeciesSummarySchema).openapi({ readOnly: true }),
    types: z.array(TypeSummarySchema).openapi({ readOnly: true }),
    version_groups: z.array(VersionGroupSummarySchema).openapi({ readOnly: true }),
  })
  .openapi({
    required: [
      'abilities',
      'id',
      'main_region',
      'moves',
      'name',
      'names',
      'pokemon_species',
      'types',
      'version_groups',
    ],
  })
  .openapi('GenerationDetail')

const GrowthRateDescriptionSchema = z
  .object({ description: z.string().max(2000).exactOptional(), language: LanguageSummarySchema })
  .openapi({ required: ['language'] })
  .openapi('GrowthRateDescription')

const GrowthRateDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    formula: z.string().max(500),
    descriptions: z.array(GrowthRateDescriptionSchema).openapi({ readOnly: true }),
    levels: z.array(ExperienceSchema).openapi({ readOnly: true }),
    pokemon_species: z.array(PokemonSpeciesSummarySchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['descriptions', 'formula', 'id', 'levels', 'name', 'pokemon_species'] })
  .openapi('GrowthRateDetail')

const GrowthRateSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('GrowthRateSummary')

const ItemAttributeDescriptionSchema = z
  .object({ description: z.string().max(2000).exactOptional(), language: LanguageSummarySchema })
  .openapi({ required: ['language'] })
  .openapi('ItemAttributeDescription')

const ItemAttributeNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('ItemAttributeName')

const ItemAttributeDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    descriptions: z.array(ItemAttributeDescriptionSchema).openapi({ readOnly: true }),
    items: z.array(ItemSummarySchema).openapi({ readOnly: true }),
    names: z.array(ItemAttributeNameSchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['descriptions', 'id', 'items', 'name', 'names'] })
  .openapi('ItemAttributeDetail')

const ItemAttributeSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('ItemAttributeSummary')

const ItemCategoryNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('ItemCategoryName')

const ItemPocketSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('ItemPocketSummary')

const ItemCategoryDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    items: z.array(ItemSummarySchema).openapi({ readOnly: true }),
    names: z.array(ItemCategoryNameSchema).openapi({ readOnly: true }),
    pocket: ItemPocketSummarySchema,
  })
  .openapi({ required: ['id', 'items', 'name', 'names', 'pocket'] })
  .openapi('ItemCategoryDetail')

const ItemCategorySummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('ItemCategorySummary')

const ItemFlingEffectSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('ItemFlingEffectSummary')

const ItemEffectTextSchema = z
  .object({
    effect: z.string().max(6000),
    short_effect: z.string().max(300),
    language: LanguageSummarySchema,
  })
  .openapi({ required: ['effect', 'language', 'short_effect'] })
  .openapi('ItemEffectText')

const ItemFlavorTextSchema = z
  .object({
    text: z.string(),
    version_group: VersionGroupSummarySchema,
    language: LanguageSummarySchema,
  })
  .openapi({ required: ['language', 'text', 'version_group'] })
  .openapi('ItemFlavorText')

const ItemGameIndexSchema = z
  .object({
    game_index: z.int().min(-2147483648).max(2147483647),
    generation: GenerationSummarySchema,
  })
  .openapi({ required: ['game_index', 'generation'] })
  .openapi('ItemGameIndex')

const ItemPriceSchema = z
  .object({
    purchase_price: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    sell_price: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    currency: CurrencySummarySchema,
    version_group: VersionGroupSummarySchema,
  })
  .openapi({ required: ['currency', 'version_group'] })
  .openapi('ItemPrice')

const ItemNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('ItemName')

const VersionSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('VersionSummary')

const PokemonHeldItemVersionSchema = z
  .object({ rarity: z.int(), version: VersionSummarySchema })
  .openapi({ required: ['rarity', 'version'] })
  .openapi('PokemonHeldItemVersion')

const PokemonHeldItemSchema = z
  .object({ pokemon: PokemonSummarySchema, version_details: z.array(PokemonHeldItemVersionSchema) })
  .openapi({ required: ['pokemon', 'version_details'] })
  .openapi('PokemonHeldItem')

const ItemSpritesSchema = z
  .object({ default: z.string().nullable() })
  .openapi({ required: ['default'] })
  .openapi('ItemSprites')

const MachineSummarySchema = z
  .object({ url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['url'] })
  .openapi('MachineSummary')

const ItemMachineSchema = z
  .object({ machine: MachineSummarySchema, version_group: VersionGroupSummarySchema })
  .openapi({ required: ['machine', 'version_group'] })
  .openapi('ItemMachine')

const ItemDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    fling_power: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    fling_effect: ItemFlingEffectSummarySchema,
    attributes: z.array(ItemAttributeSummarySchema).openapi({ readOnly: true }),
    category: ItemCategorySummarySchema,
    effect_entries: z.array(ItemEffectTextSchema).openapi({ readOnly: true }),
    flavor_text_entries: z.array(ItemFlavorTextSchema).openapi({ readOnly: true }),
    game_indices: z.array(ItemGameIndexSchema).openapi({ readOnly: true }),
    prices: z.array(ItemPriceSchema).openapi({ readOnly: true }),
    names: z.array(ItemNameSchema).openapi({ readOnly: true }),
    held_by_pokemon: z.array(PokemonHeldItemSchema).openapi({ readOnly: true }),
    sprites: ItemSpritesSchema.openapi({ readOnly: true }),
    baby_trigger_for: z
      .xor([EvolutionChainSummarySchema, z.null().nullable()])
      .openapi({ readOnly: true }),
    machines: z.array(ItemMachineSchema).openapi({ readOnly: true }),
  })
  .openapi({
    required: [
      'attributes',
      'baby_trigger_for',
      'category',
      'effect_entries',
      'flavor_text_entries',
      'fling_effect',
      'game_indices',
      'held_by_pokemon',
      'id',
      'machines',
      'name',
      'names',
      'prices',
      'sprites',
    ],
  })
  .openapi('ItemDetail')

const ItemFlingEffectEffectTextSchema = z
  .object({ effect: z.string().max(6000), language: LanguageSummarySchema })
  .openapi({ required: ['effect', 'language'] })
  .openapi('ItemFlingEffectEffectText')

const ItemFlingEffectDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    effect_entries: z.array(ItemFlingEffectEffectTextSchema).openapi({ readOnly: true }),
    items: z.array(ItemSummarySchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['effect_entries', 'id', 'items', 'name'] })
  .openapi('ItemFlingEffectDetail')

const ItemPocketNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('ItemPocketName')

const ItemPocketDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    categories: z.array(ItemCategorySummarySchema).openapi({ readOnly: true }),
    names: z.array(ItemPocketNameSchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['categories', 'id', 'name', 'names'] })
  .openapi('ItemPocketDetail')

const LanguageNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('LanguageName')

const LanguageDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    official: z.boolean().exactOptional(),
    iso639: z.string().max(10),
    iso3166: z.string().max(2),
    names: z.array(LanguageNameSchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['id', 'iso3166', 'iso639', 'name', 'names'] })
  .openapi('LanguageDetail')

const LocationAreaEncounterVersionDetailSchema = z
  .object({ rate: z.int(), version: VersionSummarySchema })
  .openapi({ required: ['rate', 'version'] })
  .openapi('LocationAreaEncounterVersionDetail')

const LocationAreaEncounterRateSchema = z
  .object({
    encounter_method: EncounterMethodSummarySchema,
    version_details: z.array(LocationAreaEncounterVersionDetailSchema),
  })
  .openapi({ required: ['encounter_method', 'version_details'] })
  .openapi('LocationAreaEncounterRate')

const LocationAreaNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('LocationAreaName')

const LocationAreaEncounterDetailSchema = z
  .object({
    min_level: z.int(),
    max_level: z.int(),
    chance: z.int().default(0).exactOptional(),
    method: EncounterMethodSummarySchema.exactOptional(),
    condition_values: z.array(EncounterConditionValueSummarySchema).openapi({ readOnly: true }),
    pokemon_details: z
      .xor([EncounterPokemonDetailSchema, z.null().nullable()])
      .openapi({ readOnly: true }),
  })
  .openapi({ required: ['condition_values', 'max_level', 'min_level', 'pokemon_details'] })
  .openapi('LocationAreaEncounterDetail')

const LocationAreaPokemonEncounterVersionSchema = z
  .object({
    version: VersionSummarySchema,
    max_chance: z.int(),
    encounter_details: z.array(LocationAreaEncounterDetailSchema),
  })
  .openapi({ required: ['encounter_details', 'max_chance', 'version'] })
  .openapi('LocationAreaPokemonEncounterVersion')

const LocationAreaPokemonEncounterSchema = z
  .object({
    pokemon: PokemonSummarySchema,
    version_details: z.array(LocationAreaPokemonEncounterVersionSchema),
  })
  .openapi({ required: ['pokemon', 'version_details'] })
  .openapi('LocationAreaPokemonEncounter')

const LocationAreaDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    game_index: z.int().min(-2147483648).max(2147483647),
    encounter_method_rates: z.array(LocationAreaEncounterRateSchema).openapi({ readOnly: true }),
    location: LocationSummarySchema,
    names: z.array(LocationAreaNameSchema).openapi({ readOnly: true }),
    pokemon_encounters: z.array(LocationAreaPokemonEncounterSchema).openapi({ readOnly: true }),
  })
  .openapi({
    required: [
      'encounter_method_rates',
      'game_index',
      'id',
      'location',
      'name',
      'names',
      'pokemon_encounters',
    ],
  })
  .openapi('LocationAreaDetail')

const LocationAreaSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('LocationAreaSummary')

const LocationNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('LocationName')

const LocationGameIndexSchema = z
  .object({
    game_index: z.int().min(-2147483648).max(2147483647),
    generation: GenerationSummarySchema,
  })
  .openapi({ required: ['game_index', 'generation'] })
  .openapi('LocationGameIndex')

const LocationDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    region: z.xor([RegionSummarySchema, z.null().nullable()]),
    names: z.array(LocationNameSchema).openapi({ readOnly: true }),
    game_indices: z.array(LocationGameIndexSchema).openapi({ readOnly: true }),
    areas: z.array(LocationAreaSummarySchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['areas', 'game_indices', 'id', 'name', 'names', 'region'] })
  .openapi('LocationDetail')

const MachineDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    item: ItemSummarySchema,
    version_group: VersionGroupSummarySchema,
    move: MoveSummarySchema,
  })
  .openapi({ required: ['id', 'item', 'move', 'version_group'] })
  .openapi('MachineDetail')

const MoveBattleStyleNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('MoveBattleStyleName')

const MoveBattleStyleDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    names: z.array(MoveBattleStyleNameSchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['id', 'name', 'names'] })
  .openapi('MoveBattleStyleDetail')

const MoveBattleStyleSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('MoveBattleStyleSummary')

const MoveEffectEffectTextSchema = z
  .object({
    effect: z.string().max(6000),
    short_effect: z.string().max(300),
    language: LanguageSummarySchema,
  })
  .openapi({ required: ['effect', 'language', 'short_effect'] })
  .openapi('MoveEffectEffectText')

const MoveChangeSchema = z
  .object({
    accuracy: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    power: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    pp: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    effect_chance: z.int(),
    effect_entries: z.array(MoveEffectEffectTextSchema).openapi({ readOnly: true }),
    type: TypeSummarySchema,
    version_group: VersionGroupSummarySchema,
  })
  .openapi({ required: ['effect_chance', 'effect_entries', 'type', 'version_group'] })
  .openapi('MoveChange')

const MoveComboUsageSchema = z
  .object({
    use_before: z.array(MoveSummarySchema).nullable(),
    use_after: z.array(MoveSummarySchema).nullable(),
  })
  .openapi({ required: ['use_after', 'use_before'] })
  .openapi('MoveComboUsage')

const MoveCombosSchema = z
  .object({ normal: MoveComboUsageSchema, super: MoveComboUsageSchema })
  .openapi({ required: ['normal', 'super'] })
  .openapi('MoveCombos')

const MoveDamageClassDescriptionSchema = z
  .object({ description: z.string().max(2000).exactOptional(), language: LanguageSummarySchema })
  .openapi({ required: ['language'] })
  .openapi('MoveDamageClassDescription')

const MoveDamageClassNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('MoveDamageClassName')

const MoveDamageClassDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    descriptions: z.array(MoveDamageClassDescriptionSchema).openapi({ readOnly: true }),
    moves: z.array(MoveSummarySchema).openapi({ readOnly: true }),
    names: z.array(MoveDamageClassNameSchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['descriptions', 'id', 'moves', 'name', 'names'] })
  .openapi('MoveDamageClassDetail')

const MoveDamageClassSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('MoveDamageClassSummary')

const MoveEffectChangeEffectTextSchema = z
  .object({ effect: z.string().max(6000), language: LanguageSummarySchema })
  .openapi({ required: ['effect', 'language'] })
  .openapi('MoveEffectChangeEffectText')

const MoveEffectChangeSchema = z
  .object({
    version_group: VersionGroupSummarySchema,
    effect_entries: z.array(MoveEffectChangeEffectTextSchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['effect_entries', 'version_group'] })
  .openapi('MoveEffectChange')

const MoveMetaAilmentSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('MoveMetaAilmentSummary')

const MoveMetaCategorySummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('MoveMetaCategorySummary')

const MoveMetaSchema = z
  .object({
    ailment: MoveMetaAilmentSummarySchema,
    category: MoveMetaCategorySummarySchema,
    min_hits: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    max_hits: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    min_turns: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    max_turns: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    drain: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    healing: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    crit_rate: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    ailment_chance: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    flinch_chance: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    stat_chance: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
  })
  .openapi({ required: ['ailment', 'category'] })
  .openapi('MoveMeta')

const MoveNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('MoveName')

const MoveMetaStatChangeSchema = z
  .object({ change: z.int().min(-2147483648).max(2147483647), stat: StatSummarySchema })
  .openapi({ required: ['change', 'stat'] })
  .openapi('MoveMetaStatChange')

const SuperContestEffectSummarySchema = z
  .object({ url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['url'] })
  .openapi('SuperContestEffectSummary')

const MoveTargetSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('MoveTargetSummary')

const MoveFlavorTextSchema = z
  .object({
    flavor_text: z.string(),
    language: LanguageSummarySchema,
    version_group: VersionGroupSummarySchema,
  })
  .openapi({ required: ['flavor_text', 'language', 'version_group'] })
  .openapi('MoveFlavorText')

const MoveDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    accuracy: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    effect_chance: z.int(),
    pp: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    priority: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    power: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    contest_combos: z.xor([MoveCombosSchema, z.null().nullable()]).openapi({ readOnly: true }),
    contest_type: ContestTypeSummarySchema,
    contest_effect: ContestEffectSummarySchema,
    damage_class: MoveDamageClassSummarySchema,
    effect_entries: z.array(MoveEffectEffectTextSchema).openapi({ readOnly: true }),
    effect_changes: z.array(MoveEffectChangeSchema).openapi({ readOnly: true }),
    generation: GenerationSummarySchema,
    meta: MoveMetaSchema.openapi({ readOnly: true }),
    names: z.array(MoveNameSchema).openapi({ readOnly: true }),
    past_values: z.array(MoveChangeSchema).openapi({ readOnly: true }),
    stat_changes: z.array(MoveMetaStatChangeSchema).openapi({ readOnly: true }),
    super_contest_effect: SuperContestEffectSummarySchema,
    target: MoveTargetSummarySchema,
    type: TypeSummarySchema,
    machines: z.array(ItemMachineSchema).openapi({ readOnly: true }),
    flavor_text_entries: z.array(MoveFlavorTextSchema).openapi({ readOnly: true }),
    learned_by_pokemon: z.array(PokemonSummarySchema).openapi({ readOnly: true }),
  })
  .openapi({
    required: [
      'contest_combos',
      'contest_effect',
      'contest_type',
      'damage_class',
      'effect_chance',
      'effect_changes',
      'effect_entries',
      'flavor_text_entries',
      'generation',
      'id',
      'learned_by_pokemon',
      'machines',
      'meta',
      'name',
      'names',
      'past_values',
      'stat_changes',
      'super_contest_effect',
      'target',
      'type',
    ],
  })
  .openapi('MoveDetail')

const MoveLearnMethodDescriptionSchema = z
  .object({ description: z.string().max(2000).exactOptional(), language: LanguageSummarySchema })
  .openapi({ required: ['language'] })
  .openapi('MoveLearnMethodDescription')

const MoveLearnMethodNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('MoveLearnMethodName')

const MoveLearnMethodDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    names: z.array(MoveLearnMethodNameSchema).openapi({ readOnly: true }),
    descriptions: z.array(MoveLearnMethodDescriptionSchema).openapi({ readOnly: true }),
    version_groups: z.array(VersionGroupSummarySchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['descriptions', 'id', 'name', 'names', 'version_groups'] })
  .openapi('MoveLearnMethodDetail')

const MoveLearnMethodSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('MoveLearnMethodSummary')

const MoveMetaAilmentNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('MoveMetaAilmentName')

const MoveMetaAilmentDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    moves: z.array(MoveSummarySchema).openapi({ readOnly: true }),
    names: z.array(MoveMetaAilmentNameSchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['id', 'moves', 'name', 'names'] })
  .openapi('MoveMetaAilmentDetail')

const MoveMetaCategoryDescriptionSchema = z
  .object({ description: z.string().max(2000).exactOptional(), language: LanguageSummarySchema })
  .openapi({ required: ['language'] })
  .openapi('MoveMetaCategoryDescription')

const MoveMetaCategoryDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    descriptions: z.array(MoveMetaCategoryDescriptionSchema).openapi({ readOnly: true }),
    moves: z.array(MoveSummarySchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['descriptions', 'id', 'moves', 'name'] })
  .openapi('MoveMetaCategoryDetail')

const MoveStatChangeSchema = z
  .object({ change: z.int().min(-2147483648).max(2147483647), move: MoveSummarySchema })
  .openapi({ required: ['change', 'move'] })
  .openapi('MoveStatChange')

const MoveTargetDescriptionSchema = z
  .object({ description: z.string().max(2000).exactOptional(), language: LanguageSummarySchema })
  .openapi({ required: ['language'] })
  .openapi('MoveTargetDescription')

const MoveTargetNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('MoveTargetName')

const MoveTargetDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    descriptions: z.array(MoveTargetDescriptionSchema).openapi({ readOnly: true }),
    moves: z.array(MoveSummarySchema).openapi({ readOnly: true }),
    names: z.array(MoveTargetNameSchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['descriptions', 'id', 'moves', 'name', 'names'] })
  .openapi('MoveTargetDetail')

const NatureBattleStylePreferenceSchema = z
  .object({
    low_hp_preference: z.int().min(-2147483648).max(2147483647),
    high_hp_preference: z.int().min(-2147483648).max(2147483647),
    move_battle_style: MoveBattleStyleSummarySchema,
  })
  .openapi({ required: ['high_hp_preference', 'low_hp_preference', 'move_battle_style'] })
  .openapi('NatureBattleStylePreference')

const PokeathlonStatSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('PokeathlonStatSummary')

const NaturePokeathlonStatSchema = z
  .object({
    max_change: z.int().min(-2147483648).max(2147483647),
    pokeathlon_stat: PokeathlonStatSummarySchema,
  })
  .openapi({ required: ['max_change', 'pokeathlon_stat'] })
  .openapi('NaturePokeathlonStat')

const NatureNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('NatureName')

const NatureDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    decreased_stat: StatSummarySchema,
    increased_stat: StatSummarySchema,
    likes_flavor: BerryFlavorSummarySchema,
    hates_flavor: BerryFlavorSummarySchema,
    berries: z.array(BerrySummarySchema).openapi({ readOnly: true }),
    pokeathlon_stat_changes: z.array(NaturePokeathlonStatSchema).openapi({ readOnly: true }),
    move_battle_style_preferences: z
      .array(NatureBattleStylePreferenceSchema)
      .openapi({ readOnly: true }),
    names: z.array(NatureNameSchema).openapi({ readOnly: true }),
  })
  .openapi({
    required: [
      'berries',
      'decreased_stat',
      'hates_flavor',
      'id',
      'increased_stat',
      'likes_flavor',
      'move_battle_style_preferences',
      'name',
      'names',
      'pokeathlon_stat_changes',
    ],
  })
  .openapi('NatureDetail')

const PaginatedAbilitySummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(AbilitySummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedAbilitySummaryList')

const PaginatedBerryFirmnessSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(BerryFirmnessSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedBerryFirmnessSummaryList')

const PaginatedBerryFlavorSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(BerryFlavorSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedBerryFlavorSummaryList')

const PaginatedBerrySummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(BerrySummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedBerrySummaryList')

const PaginatedCharacteristicSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(CharacteristicSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedCharacteristicSummaryList')

const PaginatedContestEffectSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(ContestEffectSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedContestEffectSummaryList')

const PaginatedContestTypeSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(ContestTypeSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedContestTypeSummaryList')

const PaginatedCurrencySummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(CurrencySummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedCurrencySummaryList')

const PaginatedEggGroupSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(EggGroupSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedEggGroupSummaryList')

const PaginatedEncounterConditionSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(EncounterConditionSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedEncounterConditionSummaryList')

const PaginatedEncounterConditionValueSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(EncounterConditionValueSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedEncounterConditionValueSummaryList')

const PaginatedEncounterMethodSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(EncounterMethodSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedEncounterMethodSummaryList')

const PaginatedEvolutionChainSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(EvolutionChainSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedEvolutionChainSummaryList')

const PaginatedEvolutionTriggerSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(EvolutionTriggerSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedEvolutionTriggerSummaryList')

const PaginatedEvolutionVariableSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(EvolutionVariableSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedEvolutionVariableSummaryList')

const PaginatedGenderSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(GenderSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedGenderSummaryList')

const PaginatedGenerationSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(GenerationSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedGenerationSummaryList')

const PaginatedGrowthRateSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(GrowthRateSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedGrowthRateSummaryList')

const PaginatedItemAttributeSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(ItemAttributeSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedItemAttributeSummaryList')

const PaginatedItemCategorySummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(ItemCategorySummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedItemCategorySummaryList')

const PaginatedItemFlingEffectSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(ItemFlingEffectSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedItemFlingEffectSummaryList')

const PaginatedItemPocketSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(ItemPocketSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedItemPocketSummaryList')

const PaginatedItemSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(ItemSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedItemSummaryList')

const PaginatedLanguageSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(LanguageSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedLanguageSummaryList')

const PaginatedLocationAreaSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(LocationAreaSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedLocationAreaSummaryList')

const PaginatedLocationSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(LocationSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedLocationSummaryList')

const PaginatedMachineSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(MachineSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedMachineSummaryList')

const PaginatedMoveBattleStyleSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(MoveBattleStyleSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedMoveBattleStyleSummaryList')

const PaginatedMoveDamageClassSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(MoveDamageClassSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedMoveDamageClassSummaryList')

const PaginatedMoveLearnMethodSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(MoveLearnMethodSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedMoveLearnMethodSummaryList')

const PaginatedMoveMetaAilmentSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(MoveMetaAilmentSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedMoveMetaAilmentSummaryList')

const PaginatedMoveMetaCategorySummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(MoveMetaCategorySummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedMoveMetaCategorySummaryList')

const PaginatedMoveSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(MoveSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedMoveSummaryList')

const PaginatedMoveTargetSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(MoveTargetSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedMoveTargetSummaryList')

const PaginatedNatureSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(NatureSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedNatureSummaryList')

const PalParkAreaSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('PalParkAreaSummary')

const PaginatedPalParkAreaSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(PalParkAreaSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedPalParkAreaSummaryList')

const PaginatedPokeathlonStatSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(PokeathlonStatSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedPokeathlonStatSummaryList')

const PokedexSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('PokedexSummary')

const PaginatedPokedexSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(PokedexSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedPokedexSummaryList')

const PokemonColorSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('PokemonColorSummary')

const PaginatedPokemonColorSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(PokemonColorSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedPokemonColorSummaryList')

const PaginatedPokemonFormSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(PokemonFormSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedPokemonFormSummaryList')

const PokemonHabitatSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('PokemonHabitatSummary')

const PaginatedPokemonHabitatSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(PokemonHabitatSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedPokemonHabitatSummaryList')

const PokemonShapeSummarySchema = z
  .object({ name: z.string().max(200), url: z.url().openapi({ readOnly: true }) })
  .openapi({ required: ['name', 'url'] })
  .openapi('PokemonShapeSummary')

const PaginatedPokemonShapeSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(PokemonShapeSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedPokemonShapeSummaryList')

const PaginatedPokemonSpeciesSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(PokemonSpeciesSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedPokemonSpeciesSummaryList')

const PaginatedPokemonSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(PokemonSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedPokemonSummaryList')

const PaginatedRegionSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(RegionSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedRegionSummaryList')

const PaginatedStatSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(StatSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedStatSummaryList')

const PaginatedSuperContestEffectSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(SuperContestEffectSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedSuperContestEffectSummaryList')

const PaginatedTypeSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(TypeSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedTypeSummaryList')

const PaginatedVersionGroupSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(VersionGroupSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedVersionGroupSummaryList')

const PaginatedVersionSummaryListSchema = z
  .object({
    count: z.int().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(VersionSummarySchema),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedVersionSummaryList')

const PalParkAreaNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('PalParkAreaName')

const PalParkEncounterSchema = z
  .object({
    base_score: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    rate: z.int().min(-2147483648).max(2147483647),
    pokemon_species: PokemonSpeciesSummarySchema,
  })
  .openapi({ required: ['pokemon_species', 'rate'] })
  .openapi('PalParkEncounter')

const PalParkAreaDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    names: z.array(PalParkAreaNameSchema).openapi({ readOnly: true }),
    pokemon_encounters: z.array(PalParkEncounterSchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['id', 'name', 'names', 'pokemon_encounters'] })
  .openapi('PalParkAreaDetail')

const PokeapiMetaResponseSchema = z
  .object({
    deploy_date: z.string().nullable(),
    hash: z.string().nullable(),
    tag: z.string().nullable(),
  })
  .openapi({ required: ['deploy_date', 'hash', 'tag'] })
  .openapi('PokeapiMetaResponse')

const PokeathlonStatAffectingNatureSchema = z
  .object({ max_change: z.int().min(-2147483648).max(2147483647), nature: NatureSummarySchema })
  .openapi({ required: ['max_change', 'nature'] })
  .openapi('PokeathlonStatAffectingNature')

const PokeathlonStatAffectingNaturesSchema = z
  .object({
    increase: z.array(PokeathlonStatAffectingNatureSchema),
    decrease: z.array(PokeathlonStatAffectingNatureSchema),
  })
  .openapi({ required: ['decrease', 'increase'] })
  .openapi('PokeathlonStatAffectingNatures')

const PokeathlonStatNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('PokeathlonStatName')

const PokeathlonStatDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    affecting_natures: PokeathlonStatAffectingNaturesSchema.openapi({ readOnly: true }),
    names: z.array(PokeathlonStatNameSchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['affecting_natures', 'id', 'name', 'names'] })
  .openapi('PokeathlonStatDetail')

const PokedexDescriptionSchema = z
  .object({ description: z.string().max(2000).exactOptional(), language: LanguageSummarySchema })
  .openapi({ required: ['language'] })
  .openapi('PokedexDescription')

const PokedexNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('PokedexName')

const PokemonDexNumberSchema = z
  .object({ entry_number: z.int(), pokemon_species: PokemonSpeciesSummarySchema })
  .openapi({ required: ['entry_number', 'pokemon_species'] })
  .openapi('PokemonDexNumber')

const PokedexDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    is_main_series: z.boolean().exactOptional(),
    descriptions: z.array(PokedexDescriptionSchema).openapi({ readOnly: true }),
    names: z.array(PokedexNameSchema).openapi({ readOnly: true }),
    pokemon_entries: z.array(PokemonDexNumberSchema).openapi({ readOnly: true }),
    region: RegionSummarySchema,
    version_groups: z.array(VersionGroupSummarySchema).openapi({ readOnly: true }),
  })
  .openapi({
    required: [
      'descriptions',
      'id',
      'name',
      'names',
      'pokemon_entries',
      'region',
      'version_groups',
    ],
  })
  .openapi('PokedexDetail')

const PokemonAbilitySchema = z
  .object({
    is_hidden: z.boolean().exactOptional(),
    slot: z.int().min(-2147483648).max(2147483647),
    ability: AbilitySummarySchema,
  })
  .openapi({ required: ['ability', 'slot'] })
  .openapi('PokemonAbility')

const PokemonAbilityPastSchema = z
  .object({
    is_hidden: z.boolean().exactOptional(),
    slot: z.int().min(-2147483648).max(2147483647),
    ability: AbilitySummarySchema,
  })
  .openapi({ required: ['ability', 'slot'] })
  .openapi('PokemonAbilityPast')

const PokemonColorNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('PokemonColorName')

const PokemonColorDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    names: z.array(PokemonColorNameSchema).openapi({ readOnly: true }),
    pokemon_species: z.array(PokemonSpeciesSummarySchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['id', 'name', 'names', 'pokemon_species'] })
  .openapi('PokemonColorDetail')

const PokemonCriesSchema = z
  .object({ latest: z.string().nullable(), legacy: z.string().nullable() })
  .openapi({ required: ['latest', 'legacy'] })
  .openapi('PokemonCries')

const PokemonPastAbilitySchema = z
  .object({ abilities: z.array(PokemonAbilityPastSchema), generation: GenerationSummarySchema })
  .openapi({ required: ['abilities', 'generation'] })
  .openapi('PokemonPastAbility')

const PokemonGameIndexSchema = z
  .object({ game_index: z.int().min(-2147483648).max(2147483647), version: VersionSummarySchema })
  .openapi({ required: ['game_index', 'version'] })
  .openapi('PokemonGameIndex')

const PokemonMoveVersionGroupSchema = z
  .object({
    level_learned_at: z.int(),
    move_learn_method: MoveLearnMethodSummarySchema,
    version_group: VersionGroupSummarySchema,
    order: z.int().exactOptional(),
  })
  .openapi({ required: ['level_learned_at', 'move_learn_method', 'version_group'] })
  .openapi('PokemonMoveVersionGroup')

const PokemonMoveSchema = z
  .object({
    move: MoveSummarySchema,
    version_group_details: z.array(PokemonMoveVersionGroupSchema),
  })
  .openapi({ required: ['move', 'version_group_details'] })
  .openapi('PokemonMove')

const PokemonSpritesSchema = z
  .object({ front_default: z.string().nullable() })
  .openapi({ required: ['front_default'] })
  .openapi('PokemonSprites')

const PokemonStatSchema = z
  .object({
    base_stat: z.int().min(-2147483648).max(2147483647),
    effort: z.int().min(-2147483648).max(2147483647),
    stat: StatSummarySchema,
  })
  .openapi({ required: ['base_stat', 'effort', 'stat'] })
  .openapi('PokemonStat')

const PokemonPastStatSchema = z
  .object({ generation: GenerationSummarySchema, stats: z.array(PokemonStatSchema) })
  .openapi({ required: ['generation', 'stats'] })
  .openapi('PokemonPastStat')

const PokemonTypeSchema = z
  .object({ slot: z.int().min(-2147483648).max(2147483647), type: TypeSummarySchema })
  .openapi({ required: ['slot', 'type'] })
  .openapi('PokemonType')

const TypePokemonSchema = z
  .object({ slot: z.int().min(-2147483648).max(2147483647), pokemon: PokemonSummarySchema })
  .openapi({ required: ['pokemon', 'slot'] })
  .openapi('TypePokemon')

const PokemonPastTypeSchema = z
  .object({ generation: GenerationSummarySchema, types: z.array(TypePokemonSchema) })
  .openapi({ required: ['generation', 'types'] })
  .openapi('PokemonPastType')

const PokemonDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    base_experience: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    height: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    is_default: z.boolean().exactOptional(),
    order: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    weight: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    abilities: z.array(PokemonAbilitySchema).openapi({ readOnly: true }),
    past_abilities: z.array(PokemonPastAbilitySchema).openapi({ readOnly: true }),
    forms: z.array(PokemonFormSummarySchema).openapi({ readOnly: true }),
    game_indices: z.array(PokemonGameIndexSchema).openapi({ readOnly: true }),
    held_items: z.array(PokemonHeldItemSchema).openapi({ readOnly: true }),
    location_area_encounters: z.string().openapi({ readOnly: true }),
    moves: z.array(PokemonMoveSchema).openapi({ readOnly: true }),
    species: PokemonSpeciesSummarySchema,
    sprites: PokemonSpritesSchema.openapi({ readOnly: true }),
    cries: PokemonCriesSchema.openapi({ readOnly: true }),
    stats: z.array(PokemonStatSchema).openapi({ readOnly: true }),
    past_stats: z.array(PokemonPastStatSchema).openapi({ readOnly: true }),
    types: z.array(PokemonTypeSchema).openapi({ readOnly: true }),
    past_types: z.array(PokemonPastTypeSchema).openapi({ readOnly: true }),
  })
  .openapi({
    required: [
      'abilities',
      'cries',
      'forms',
      'game_indices',
      'held_items',
      'id',
      'location_area_encounters',
      'moves',
      'name',
      'past_abilities',
      'past_stats',
      'past_types',
      'species',
      'sprites',
      'stats',
      'types',
    ],
  })
  .openapi('PokemonDetail')

const PokemonDexEntrySchema = z
  .object({ entry_number: z.int(), pokedex: PokedexSummarySchema })
  .openapi({ required: ['entry_number', 'pokedex'] })
  .openapi('PokemonDexEntry')

const PokemonEncounterDetailResponseSchema = z
  .object({
    chance: z.int(),
    condition_values: z.array(EncounterConditionValueSummarySchema),
    max_level: z.int(),
    method: EncounterMethodSummarySchema,
    min_level: z.int(),
  })
  .openapi({ required: ['chance', 'condition_values', 'max_level', 'method', 'min_level'] })
  .openapi('PokemonEncounterDetailResponse')

const PokemonEncounterVersionDetailResponseSchema = z
  .object({
    version: VersionSummarySchema,
    max_chance: z.int(),
    encounter_details: z.array(PokemonEncounterDetailResponseSchema),
  })
  .openapi({ required: ['encounter_details', 'max_chance', 'version'] })
  .openapi('PokemonEncounterVersionDetailResponse')

const PokemonEncounterResponseSchema = z
  .object({
    location_area: LocationAreaSummarySchema,
    version_details: z.array(PokemonEncounterVersionDetailResponseSchema),
  })
  .openapi({ required: ['location_area', 'version_details'] })
  .openapi('PokemonEncounterResponse')

const PokemonFormSpritesSchema = z
  .object({ sprites: z.any() })
  .openapi({ required: ['sprites'] })
  .openapi('PokemonFormSprites')

const PokemonFormNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('PokemonFormName')

const PokemonFormTypeSchema = z
  .object({ slot: z.int().min(-2147483648).max(2147483647), type: TypeSummarySchema })
  .openapi({ required: ['slot', 'type'] })
  .openapi('PokemonFormType')

const PokemonFormTriggerConditionSchema = z
  .object({ trigger: z.string(), base_form: PokemonFormSummarySchema })
  .openapi({ required: ['base_form', 'trigger'] })
  .openapi('PokemonFormTriggerCondition')

const PokemonFormFlavorTextSchema = z
  .object({
    flavor_text: z.string(),
    language: LanguageSummarySchema,
    version: VersionSummarySchema,
  })
  .openapi({ required: ['flavor_text', 'language', 'version'] })
  .openapi('PokemonFormFlavorText')

const PokemonFormDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    order: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    form_order: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    is_default: z.boolean().exactOptional(),
    is_battle_only: z.boolean().exactOptional(),
    is_mega: z.boolean().exactOptional(),
    form_name: z.string().max(30),
    pokemon: PokemonSummarySchema,
    sprites: PokemonFormSpritesSchema.openapi({ readOnly: true }),
    version_group: VersionGroupSummarySchema,
    form_names: z.array(PokemonFormNameSchema).openapi({ readOnly: true }),
    names: z.array(PokemonFormNameSchema).openapi({ readOnly: true }),
    types: z.array(PokemonFormTypeSchema).openapi({ readOnly: true }),
    trigger_conditions: z.array(PokemonFormTriggerConditionSchema).openapi({ readOnly: true }),
    flavor_text_entries: z.array(PokemonFormFlavorTextSchema).openapi({ readOnly: true }),
  })
  .openapi({
    required: [
      'flavor_text_entries',
      'form_name',
      'form_names',
      'id',
      'name',
      'names',
      'pokemon',
      'sprites',
      'trigger_conditions',
      'types',
      'version_group',
    ],
  })
  .openapi('PokemonFormDetail')

const PokemonHabitatNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('PokemonHabitatName')

const PokemonHabitatDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    names: z.array(PokemonHabitatNameSchema).openapi({ readOnly: true }),
    pokemon_species: z.array(PokemonSpeciesSummarySchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['id', 'name', 'names', 'pokemon_species'] })
  .openapi('PokemonHabitatDetail')

const PokemonShapeAwesomeNameSchema = z
  .object({ awesome_name: z.string().max(30), language: LanguageSummarySchema })
  .openapi({ required: ['awesome_name', 'language'] })
  .openapi('PokemonShapeAwesomeName')

const PokemonShapeNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('PokemonShapeName')

const PokemonShapeDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    awesome_names: z.array(PokemonShapeAwesomeNameSchema).openapi({ readOnly: true }),
    names: z.array(PokemonShapeNameSchema).openapi({ readOnly: true }),
    pokemon_species: z.array(PokemonSpeciesSummarySchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['awesome_names', 'id', 'name', 'names', 'pokemon_species'] })
  .openapi('PokemonShapeDetail')

const PokemonSpeciesDescriptionSchema = z
  .object({ description: z.string().max(2000).exactOptional(), language: LanguageSummarySchema })
  .openapi({ required: ['language'] })
  .openapi('PokemonSpeciesDescription')

const PokemonSpeciesNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('PokemonSpeciesName')

const PokemonSpeciesPalParkEncounterSchema = z
  .object({
    base_score: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    rate: z.int().min(-2147483648).max(2147483647),
    area: PalParkAreaSummarySchema,
  })
  .openapi({ required: ['area', 'rate'] })
  .openapi('PokemonSpeciesPalParkEncounter')

const PokemonSpeciesFlavorTextSchema = z
  .object({
    flavor_text: z.string(),
    language: LanguageSummarySchema,
    version: VersionSummarySchema,
  })
  .openapi({ required: ['flavor_text', 'language', 'version'] })
  .openapi('PokemonSpeciesFlavorText')

const PokemonSpeciesGenusSchema = z
  .object({ genus: z.string().max(30), language: LanguageSummarySchema })
  .openapi({ required: ['genus', 'language'] })
  .openapi('PokemonSpeciesGenus')

const PokemonSpeciesVarietySchema = z
  .object({ is_default: z.boolean(), pokemon: PokemonSummarySchema })
  .openapi({ required: ['is_default', 'pokemon'] })
  .openapi('PokemonSpeciesVariety')

const PokemonSpeciesDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    order: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    gender_rate: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    capture_rate: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    base_happiness: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    is_baby: z.boolean().exactOptional(),
    is_legendary: z.boolean().exactOptional(),
    is_mythical: z.boolean().exactOptional(),
    hatch_counter: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    has_gender_differences: z.boolean().exactOptional(),
    forms_switchable: z.boolean().exactOptional(),
    growth_rate: GrowthRateSummarySchema,
    pokedex_numbers: z.array(PokemonDexEntrySchema).openapi({ readOnly: true }),
    egg_groups: z.array(EggGroupSummarySchema).openapi({ readOnly: true }),
    color: PokemonColorSummarySchema,
    shape: PokemonShapeSummarySchema,
    evolves_from_species: PokemonSpeciesSummarySchema,
    evolution_chain: EvolutionChainSummarySchema,
    habitat: PokemonHabitatSummarySchema,
    generation: GenerationSummarySchema,
    names: z.array(PokemonSpeciesNameSchema).openapi({ readOnly: true }),
    pal_park_encounters: z.array(PokemonSpeciesPalParkEncounterSchema).openapi({ readOnly: true }),
    form_descriptions: z.array(PokemonSpeciesDescriptionSchema).openapi({ readOnly: true }),
    flavor_text_entries: z.array(PokemonSpeciesFlavorTextSchema).openapi({ readOnly: true }),
    genera: z.array(PokemonSpeciesGenusSchema).openapi({ readOnly: true }),
    varieties: z.array(PokemonSpeciesVarietySchema).openapi({ readOnly: true }),
  })
  .openapi({
    required: [
      'color',
      'egg_groups',
      'evolution_chain',
      'evolves_from_species',
      'flavor_text_entries',
      'form_descriptions',
      'genera',
      'generation',
      'growth_rate',
      'habitat',
      'id',
      'name',
      'names',
      'pal_park_encounters',
      'pokedex_numbers',
      'shape',
      'varieties',
    ],
  })
  .openapi('PokemonSpeciesDetail')

const RegionNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('RegionName')

const RegionDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    locations: z.array(LocationSummarySchema).openapi({ readOnly: true }),
    main_generation: z
      .xor([GenerationSummarySchema, z.null().nullable()])
      .openapi({ readOnly: true }),
    names: z.array(RegionNameSchema).openapi({ readOnly: true }),
    pokedexes: z.array(PokedexSummarySchema).openapi({ readOnly: true }),
    version_groups: z.array(VersionGroupSummarySchema).openapi({ readOnly: true }),
  })
  .openapi({
    required: [
      'id',
      'locations',
      'main_generation',
      'name',
      'names',
      'pokedexes',
      'version_groups',
    ],
  })
  .openapi('RegionDetail')

const StatAffectingMovesSchema = z
  .object({ increase: z.array(MoveStatChangeSchema), decrease: z.array(MoveStatChangeSchema) })
  .openapi({ required: ['decrease', 'increase'] })
  .openapi('StatAffectingMoves')

const StatAffectingNaturesSchema = z
  .object({ increase: z.array(NatureSummarySchema), decrease: z.array(NatureSummarySchema) })
  .openapi({ required: ['decrease', 'increase'] })
  .openapi('StatAffectingNatures')

const StatNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('StatName')

const StatDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    game_index: z.int().min(-2147483648).max(2147483647),
    is_battle_only: z.boolean().exactOptional(),
    affecting_moves: StatAffectingMovesSchema.openapi({ readOnly: true }),
    affecting_natures: StatAffectingNaturesSchema.openapi({ readOnly: true }),
    affecting_items: z.array(ItemSummarySchema).openapi({ readOnly: true }),
    characteristics: z.array(CharacteristicSummarySchema).openapi({ readOnly: true }),
    move_damage_class: MoveDamageClassSummarySchema,
    names: z.array(StatNameSchema).openapi({ readOnly: true }),
  })
  .openapi({
    required: [
      'affecting_items',
      'affecting_moves',
      'affecting_natures',
      'characteristics',
      'game_index',
      'id',
      'move_damage_class',
      'name',
      'names',
    ],
  })
  .openapi('StatDetail')

const SuperContestEffectFlavorTextSchema = z
  .object({ flavor_text: z.string().max(500), language: LanguageSummarySchema })
  .openapi({ required: ['flavor_text', 'language'] })
  .openapi('SuperContestEffectFlavorText')

const SuperContestEffectDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    appeal: z.int().min(-2147483648).max(2147483647),
    flavor_text_entries: z.array(SuperContestEffectFlavorTextSchema).openapi({ readOnly: true }),
    moves: z.array(MoveSummarySchema).openapi({ readOnly: true }),
  })
  .openapi({ required: ['appeal', 'flavor_text_entries', 'id', 'moves'] })
  .openapi('SuperContestEffectDetail')

const TypeRelationshipsSchema = z
  .object({
    no_damage_to: z.array(TypeSummarySchema),
    half_damage_to: z.array(TypeSummarySchema),
    double_damage_to: z.array(TypeSummarySchema),
    no_damage_from: z.array(TypeSummarySchema),
    half_damage_from: z.array(TypeSummarySchema),
    double_damage_from: z.array(TypeSummarySchema),
  })
  .openapi({
    required: [
      'double_damage_from',
      'double_damage_to',
      'half_damage_from',
      'half_damage_to',
      'no_damage_from',
      'no_damage_to',
    ],
  })
  .openapi('TypeRelationships')

const TypePastRelationshipsSchema = z
  .object({ generation: GenerationSummarySchema, damage_relations: TypeRelationshipsSchema })
  .openapi({ required: ['damage_relations', 'generation'] })
  .openapi('TypePastRelationships')

const TypeGameIndexSchema = z
  .object({
    game_index: z.int().min(-2147483648).max(2147483647),
    generation: GenerationSummarySchema,
  })
  .openapi({ required: ['game_index', 'generation'] })
  .openapi('TypeGameIndex')

const TypeNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('TypeName')

const TypeSpriteSchema = z
  .object({ sprites: z.any() })
  .openapi({ required: ['sprites'] })
  .openapi('TypeSprite')

const TypeDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    damage_relations: TypeRelationshipsSchema.openapi({ readOnly: true }),
    past_damage_relations: z.array(TypePastRelationshipsSchema).openapi({ readOnly: true }),
    game_indices: z.array(TypeGameIndexSchema).openapi({ readOnly: true }),
    generation: GenerationSummarySchema,
    move_damage_class: MoveDamageClassSummarySchema,
    names: z.array(TypeNameSchema).openapi({ readOnly: true }),
    pokemon: z.array(TypePokemonSchema).openapi({ readOnly: true }),
    moves: z.array(MoveSummarySchema).openapi({ readOnly: true }),
    sprites: TypeSpriteSchema.openapi({ readOnly: true }),
  })
  .openapi({
    description: 'Serializer for the Type resource',
    required: [
      'damage_relations',
      'game_indices',
      'generation',
      'id',
      'move_damage_class',
      'moves',
      'name',
      'names',
      'past_damage_relations',
      'pokemon',
      'sprites',
    ],
  })
  .openapi('TypeDetail')

const VersionNameSchema = z
  .object({ name: z.string().max(200), language: LanguageSummarySchema })
  .openapi({ required: ['language', 'name'] })
  .openapi('VersionName')

const VersionDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    names: z.array(VersionNameSchema).openapi({ readOnly: true }),
    version_group: VersionGroupSummarySchema,
  })
  .openapi({
    description:
      "Should have a link to Version Group info but the Circular\ndependency and compilation order fight eachother and I'm\nnot sure how to add anything other than a hyperlink",
    required: ['id', 'name', 'names', 'version_group'],
  })
  .openapi('VersionDetail')

const VersionGroupDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true }),
    name: z.string().max(200),
    order: z.int().min(-2147483648).max(2147483647).nullable().exactOptional(),
    generation: GenerationSummarySchema,
    move_learn_methods: z.array(MoveLearnMethodSummarySchema).openapi({ readOnly: true }),
    pokedexes: z.array(PokedexSummarySchema).openapi({ readOnly: true }),
    regions: z.array(RegionSummarySchema).openapi({ readOnly: true }),
    versions: z.array(VersionSummarySchema).openapi({ readOnly: true }),
  })
  .openapi({
    required: [
      'generation',
      'id',
      'move_learn_methods',
      'name',
      'pokedexes',
      'regions',
      'versions',
    ],
  })
  .openapi('VersionGroupDetail')

export const getApiV2MetaIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/meta/',
  tags: ['utility'],
  summary: 'Get API metadata',
  description:
    'Returns metadata about the current deployed version of the API, including the git commit hash, deploy date, and tag (if any).',
  operationId: 'meta_retrieve',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PokeapiMetaResponseSchema } },
    },
  },
  security: [{}],
})

export const getApiV2AbilityIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/ability/',
  tags: ['pokemon'],
  summary: 'List abilities',
  description:
    'Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.',
  operationId: 'ability_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedAbilitySummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2AbilityIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/ability/{id}/',
  tags: ['pokemon'],
  summary: 'Get ability',
  description:
    'Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.',
  operationId: 'ability_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: AbilityDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2BerryIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/berry/',
  tags: ['berries'],
  summary: 'List berries',
  description:
    'Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail.',
  operationId: 'berry_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedBerrySummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2BerryIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/berry/{id}/',
  tags: ['berries'],
  summary: 'Get a berry',
  description:
    'Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail.',
  operationId: 'berry_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: BerryDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2BerryFirmnessIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/berry-firmness/',
  tags: ['berries'],
  summary: 'List berry firmness',
  description:
    'Berries can be soft or hard. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail.',
  operationId: 'berry_firmness_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedBerryFirmnessSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2BerryFirmnessIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/berry-firmness/{id}/',
  tags: ['berries'],
  summary: 'Get berry by firmness',
  description:
    'Berries can be soft or hard. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail.',
  operationId: 'berry_firmness_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: BerryFirmnessDetailSchema } },
    },
  },
  security: [{}],
})

export const getApiV2BerryFlavorIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/berry-flavor/',
  tags: ['berries'],
  summary: 'List berry flavors',
  description:
    'Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their **nature**. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.',
  operationId: 'berry_flavor_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedBerryFlavorSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2BerryFlavorIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/berry-flavor/{id}/',
  tags: ['berries'],
  summary: 'Get berries by flavor',
  description:
    'Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their **nature**. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.',
  operationId: 'berry_flavor_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: BerryFlavorDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2CharacteristicIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/characteristic/',
  tags: ['pokemon'],
  summary: 'List characteristics',
  description:
    "Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail.",
  operationId: 'characteristic_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedCharacteristicSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2CharacteristicIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/characteristic/{id}/',
  tags: ['pokemon'],
  summary: 'Get characteristic',
  description:
    "Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail.",
  operationId: 'characteristic_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: CharacteristicDetailSchema } },
    },
  },
  security: [{}],
})

export const getApiV2ContestTypeIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/contest-type/',
  tags: ['contests'],
  summary: 'List contest types',
  description:
    "Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.",
  operationId: 'contest_type_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedContestTypeSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2ContestTypeIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/contest-type/{id}/',
  tags: ['contests'],
  summary: 'Get contest type',
  description:
    "Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.",
  operationId: 'contest_type_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ContestTypeDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2ContestEffectIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/contest-effect/',
  tags: ['contests'],
  summary: 'List contest effects',
  description: 'Contest effects refer to the effects of moves when used in contests.',
  operationId: 'contest_effect_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedContestEffectSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2ContestEffectIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/contest-effect/{id}/',
  tags: ['contests'],
  summary: 'Get contest effect',
  description: 'Contest effects refer to the effects of moves when used in contests.',
  operationId: 'contest_effect_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ContestEffectDetailSchema } },
    },
  },
  security: [{}],
})

export const getApiV2EggGroupIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/egg-group/',
  tags: ['pokemon'],
  summary: 'List egg groups',
  description:
    'Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail.',
  operationId: 'egg_group_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedEggGroupSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2EggGroupIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/egg-group/{id}/',
  tags: ['pokemon'],
  summary: 'Get egg group',
  description:
    'Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail.',
  operationId: 'egg_group_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: EggGroupDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2EncounterMethodIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/encounter-method/',
  tags: ['encounters'],
  summary: 'List encounter methods',
  description:
    'Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out Bulbapedia for greater detail.',
  operationId: 'encounter_method_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedEncounterMethodSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2EncounterMethodIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/encounter-method/{id}/',
  tags: ['encounters'],
  summary: 'Get encounter method',
  description:
    'Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out Bulbapedia for greater detail.',
  operationId: 'encounter_method_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: EncounterMethodDetailSchema } },
    },
  },
  security: [{}],
})

export const getApiV2EncounterConditionIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/encounter-condition/',
  tags: ['encounters'],
  summary: 'List encounter conditions',
  description: 'Conditions which affect what pokemon might appear in the wild, e.g., day or night.',
  operationId: 'encounter_condition_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedEncounterConditionSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2EncounterConditionIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/encounter-condition/{id}/',
  tags: ['encounters'],
  summary: 'Get encounter condition',
  description: 'Conditions which affect what pokemon might appear in the wild, e.g., day or night.',
  operationId: 'encounter_condition_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: EncounterConditionDetailSchema } },
    },
  },
  security: [{}],
})

export const getApiV2EncounterConditionValueIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/encounter-condition-value/',
  tags: ['encounters'],
  summary: 'List encounter condition values',
  description:
    'Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.',
  operationId: 'encounter_condition_value_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: PaginatedEncounterConditionValueSummaryListSchema },
      },
    },
  },
  security: [{}],
})

export const getApiV2EncounterConditionValueIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/encounter-condition-value/{id}/',
  tags: ['encounters'],
  summary: 'Get encounter condition value',
  description:
    'Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.',
  operationId: 'encounter_condition_value_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: EncounterConditionValueDetailSchema } },
    },
  },
  security: [{}],
})

export const getApiV2EvolutionChainIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/evolution-chain/',
  tags: ['evolution'],
  summary: 'List evolution chains',
  description:
    'Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.',
  operationId: 'evolution_chain_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedEvolutionChainSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2EvolutionChainIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/evolution-chain/{id}/',
  tags: ['evolution'],
  summary: 'Get evolution chain',
  description:
    'Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.',
  operationId: 'evolution_chain_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: EvolutionChainDetailSchema } },
    },
  },
  security: [{}],
})

export const getApiV2EvolutionTriggerIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/evolution-trigger/',
  tags: ['evolution'],
  summary: 'List evolution triggers',
  description:
    'Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.',
  operationId: 'evolution_trigger_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedEvolutionTriggerSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2EvolutionTriggerIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/evolution-trigger/{id}/',
  tags: ['evolution'],
  summary: 'Get evolution trigger',
  description:
    'Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.',
  operationId: 'evolution_trigger_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: EvolutionTriggerDetailSchema } },
    },
  },
  security: [{}],
})

export const getApiV2EvolutionVariableIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/evolution-variable/',
  tags: ['evolution'],
  summary: 'List evolution variables',
  description:
    'Evolution variables represent parameters (such as Encryption Constant and Personality Value) used in boolean expressions for form-branching evolutions. Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Personality_value) for greater detail.',
  operationId: 'evolution_variable_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedEvolutionVariableSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2EvolutionVariableIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/evolution-variable/{id}/',
  tags: ['evolution'],
  summary: 'Get evolution variable',
  description:
    'Evolution variables represent parameters (such as Encryption Constant and Personality Value) used in boolean expressions for form-branching evolutions. Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Personality_value) for greater detail.',
  operationId: 'evolution_variable_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: EvolutionVariableDetailSchema } },
    },
  },
  security: [{}],
})

export const getApiV2GenerationIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/generation/',
  tags: ['games'],
  summary: 'List genrations',
  description:
    'A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.',
  operationId: 'generation_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedGenerationSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2GenerationIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/generation/{id}/',
  tags: ['games'],
  summary: 'Get genration',
  description:
    'A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.',
  operationId: 'generation_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: GenerationDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2GenderIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/gender/',
  tags: ['pokemon'],
  summary: 'List genders',
  description:
    'Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail.',
  operationId: 'gender_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedGenderSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2GenderIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/gender/{id}/',
  tags: ['pokemon'],
  summary: 'Get gender',
  description:
    'Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail.',
  operationId: 'gender_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: GenderDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2GrowthRateIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/growth-rate/',
  tags: ['pokemon'],
  summary: 'List growth rates',
  description:
    'Growth rates are the speed with which Pokémon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience) for greater detail.',
  operationId: 'growth_rate_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedGrowthRateSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2GrowthRateIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/growth-rate/{id}/',
  tags: ['pokemon'],
  summary: 'Get growth rate',
  description:
    'Growth rates are the speed with which Pokémon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience) for greater detail.',
  operationId: 'growth_rate_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: GrowthRateDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2ItemIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/item/',
  tags: ['items'],
  summary: 'List items',
  description:
    'An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.',
  operationId: 'item_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedItemSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2ItemIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/item/{id}/',
  tags: ['items'],
  summary: 'Get item',
  description:
    'An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.',
  operationId: 'item_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ItemDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2ItemCategoryIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/item-category/',
  tags: ['items'],
  summary: 'List item categories',
  description: 'Item categories determine where items will be placed in the players bag.',
  operationId: 'item_category_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedItemCategorySummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2ItemCategoryIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/item-category/{id}/',
  tags: ['items'],
  summary: 'Get item category',
  description: 'Item categories determine where items will be placed in the players bag.',
  operationId: 'item_category_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ItemCategoryDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2ItemAttributeIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/item-attribute/',
  tags: ['items'],
  summary: 'List item attributes',
  description:
    'Item attributes define particular aspects of items, e.g."usable in battle" or "consumable".',
  operationId: 'item_attribute_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedItemAttributeSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2ItemAttributeIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/item-attribute/{id}/',
  tags: ['items'],
  summary: 'Get item attribute',
  description:
    'Item attributes define particular aspects of items, e.g."usable in battle" or "consumable".',
  operationId: 'item_attribute_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ItemAttributeDetailSchema } },
    },
  },
  security: [{}],
})

export const getApiV2ItemFlingEffectIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/item-fling-effect/',
  tags: ['items'],
  summary: 'List item fling effects',
  description: 'The various effects of the move"Fling" when used with different items.',
  operationId: 'item_fling_effect_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedItemFlingEffectSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2ItemFlingEffectIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/item-fling-effect/{id}/',
  tags: ['items'],
  summary: 'Get item fling effect',
  description: 'The various effects of the move"Fling" when used with different items.',
  operationId: 'item_fling_effect_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ItemFlingEffectDetailSchema } },
    },
  },
  security: [{}],
})

export const getApiV2ItemPocketIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/item-pocket/',
  tags: ['items'],
  summary: 'List item pockets',
  description: 'Pockets within the players bag used for storing items by category.',
  operationId: 'item_pocket_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedItemPocketSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2ItemPocketIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/item-pocket/{id}/',
  tags: ['items'],
  summary: 'Get item pocket',
  description: 'Pockets within the players bag used for storing items by category.',
  operationId: 'item_pocket_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ItemPocketDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2CurrencyIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/currency/',
  tags: ['items'],
  summary: 'List currencies',
  description: 'Currencies used to buy items.',
  operationId: 'currency_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedCurrencySummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2CurrencyIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/currency/{id}/',
  tags: ['items'],
  summary: 'Get currency',
  description: 'Currencies used to buy items.',
  operationId: 'currency_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: CurrencyDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2LanguageIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/language/',
  tags: ['utility'],
  summary: 'List languages',
  description: 'Languages for translations of API resource information.',
  operationId: 'language_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedLanguageSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2LanguageIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/language/{id}/',
  tags: ['utility'],
  summary: 'Get language',
  description: 'Languages for translations of API resource information.',
  operationId: 'language_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: LanguageDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2LocationIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/location/',
  tags: ['location'],
  summary: 'List locations',
  description:
    'Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.',
  operationId: 'location_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedLocationSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2LocationIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/location/{id}/',
  tags: ['location'],
  summary: 'Get location',
  description:
    'Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.',
  operationId: 'location_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: LocationDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2LocationAreaIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/location-area/',
  tags: ['location'],
  summary: 'List location areas',
  description:
    'Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.',
  operationId: 'location_area_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedLocationAreaSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2LocationAreaIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/location-area/{id}/',
  tags: ['location'],
  summary: 'Get location area',
  description:
    'Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.',
  operationId: 'location_area_retrieve',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying this location area.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: LocationAreaDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2MachineIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/machine/',
  tags: ['machines'],
  summary: 'List machines',
  description:
    'Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.',
  operationId: 'machine_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedMachineSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2MachineIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/machine/{id}/',
  tags: ['machines'],
  summary: 'Get machine',
  description:
    'Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.',
  operationId: 'machine_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MachineDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2MoveIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/move/',
  tags: ['moves'],
  summary: 'List moves',
  description:
    'Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.',
  operationId: 'move_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedMoveSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2MoveIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/move/{id}/',
  tags: ['moves'],
  summary: 'Get move',
  description:
    'Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.',
  operationId: 'move_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MoveDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2MoveAilmentIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/move-ailment/',
  tags: ['moves'],
  summary: 'List move meta ailments',
  description:
    'Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.',
  operationId: 'move_ailment_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedMoveMetaAilmentSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2MoveAilmentIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/move-ailment/{id}/',
  tags: ['moves'],
  summary: 'Get move meta ailment',
  description:
    'Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.',
  operationId: 'move_ailment_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: MoveMetaAilmentDetailSchema } },
    },
  },
  security: [{}],
})

export const getApiV2MoveBattleStyleIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/move-battle-style/',
  tags: ['moves'],
  summary: 'List move battle styles',
  description:
    'Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail.',
  operationId: 'move_battle_style_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedMoveBattleStyleSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2MoveBattleStyleIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/move-battle-style/{id}/',
  tags: ['moves'],
  summary: 'Get move battle style',
  description:
    'Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail.',
  operationId: 'move_battle_style_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: MoveBattleStyleDetailSchema } },
    },
  },
  security: [{}],
})

export const getApiV2MoveCategoryIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/move-category/',
  tags: ['moves'],
  summary: 'List move meta categories',
  description: 'Very general categories that loosely group move effects.',
  operationId: 'move_category_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedMoveMetaCategorySummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2MoveCategoryIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/move-category/{id}/',
  tags: ['moves'],
  summary: 'Get move meta category',
  description: 'Very general categories that loosely group move effects.',
  operationId: 'move_category_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: MoveMetaCategoryDetailSchema } },
    },
  },
  security: [{}],
})

export const getApiV2MoveDamageClassIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/move-damage-class/',
  tags: ['pokemon'],
  summary: 'List move damage classes',
  description: 'Damage classes moves can have, e.g. physical, special, or non-damaging.',
  operationId: 'move_damage_class_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedMoveDamageClassSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2MoveDamageClassIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/move-damage-class/{id}/',
  tags: ['pokemon'],
  summary: 'Get move damage class',
  description: 'Damage classes moves can have, e.g. physical, special, or non-damaging.',
  operationId: 'move_damage_class_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: MoveDamageClassDetailSchema } },
    },
  },
  security: [{}],
})

export const getApiV2MoveLearnMethodIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/move-learn-method/',
  tags: ['moves'],
  summary: 'List move learn methods',
  description: 'Methods by which Pokémon can learn moves.',
  operationId: 'move_learn_method_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedMoveLearnMethodSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2MoveLearnMethodIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/move-learn-method/{id}/',
  tags: ['moves'],
  summary: 'Get move learn method',
  description: 'Methods by which Pokémon can learn moves.',
  operationId: 'move_learn_method_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: MoveLearnMethodDetailSchema } },
    },
  },
  security: [{}],
})

export const getApiV2MoveTargetIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/move-target/',
  tags: ['moves'],
  summary: 'List move targets',
  description:
    'Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.',
  operationId: 'move_target_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedMoveTargetSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2MoveTargetIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/move-target/{id}/',
  tags: ['moves'],
  summary: 'Get move target',
  description:
    'Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.',
  operationId: 'move_target_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MoveTargetDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2NatureIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/nature/',
  tags: ['pokemon'],
  summary: 'List natures',
  description:
    "Natures influence how a Pokémon's stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail.",
  operationId: 'nature_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedNatureSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2NatureIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/nature/{id}/',
  tags: ['pokemon'],
  summary: 'Get nature',
  description:
    "Natures influence how a Pokémon's stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail.",
  operationId: 'nature_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: NatureDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2PalParkAreaIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/pal-park-area/',
  tags: ['location'],
  summary: 'List pal park areas',
  description:
    "Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to Pal Park.",
  operationId: 'pal_park_area_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedPalParkAreaSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2PalParkAreaIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/pal-park-area/{id}/',
  tags: ['location'],
  summary: 'Get pal park area',
  description:
    "Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to Pal Park.",
  operationId: 'pal_park_area_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PalParkAreaDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2PokedexIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/pokedex/',
  tags: ['games'],
  summary: 'List pokedex',
  description:
    'A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail.',
  operationId: 'pokedex_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedPokedexSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2PokedexIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/pokedex/{id}/',
  tags: ['games'],
  summary: 'Get pokedex',
  description:
    'A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail.',
  operationId: 'pokedex_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PokedexDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2PokemonIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/pokemon/',
  tags: ['pokemon'],
  summary: 'List pokemon',
  description:
    'Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.',
  operationId: 'pokemon_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedPokemonSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2PokemonIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/pokemon/{id}/',
  tags: ['pokemon'],
  summary: 'Get pokemon',
  description:
    'Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.',
  operationId: 'pokemon_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PokemonDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2PokemonColorIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/pokemon-color/',
  tags: ['pokemon'],
  summary: 'List pokemon colors',
  description:
    "Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.",
  operationId: 'pokemon_color_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedPokemonColorSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2PokemonColorIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/pokemon-color/{id}/',
  tags: ['pokemon'],
  summary: 'Get pokemon color',
  description:
    "Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.",
  operationId: 'pokemon_color_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PokemonColorDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2PokemonFormIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/pokemon-form/',
  tags: ['pokemon'],
  summary: 'List pokemon forms',
  description:
    "Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.",
  operationId: 'pokemon_form_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedPokemonFormSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2PokemonFormIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/pokemon-form/{id}/',
  tags: ['pokemon'],
  summary: 'Get pokemon form',
  description:
    "Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.",
  operationId: 'pokemon_form_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PokemonFormDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2PokemonHabitatIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/pokemon-habitat/',
  tags: ['pokemon'],
  summary: 'List pokemom habitas',
  description:
    'Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.',
  operationId: 'pokemon_habitat_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedPokemonHabitatSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2PokemonHabitatIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/pokemon-habitat/{id}/',
  tags: ['pokemon'],
  summary: 'Get pokemom habita',
  description:
    'Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.',
  operationId: 'pokemon_habitat_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PokemonHabitatDetailSchema } },
    },
  },
  security: [{}],
})

export const getApiV2PokemonShapeIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/pokemon-shape/',
  tags: ['pokemon'],
  summary: 'List pokemon shapes',
  description: 'Shapes used for sorting Pokémon in a Pokédex.',
  operationId: 'pokemon_shape_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedPokemonShapeSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2PokemonShapeIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/pokemon-shape/{id}/',
  tags: ['pokemon'],
  summary: 'Get pokemon shape',
  description: 'Shapes used for sorting Pokémon in a Pokédex.',
  operationId: 'pokemon_shape_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PokemonShapeDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2PokemonSpeciesIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/pokemon-species/',
  tags: ['pokemon'],
  summary: 'List pokemon species',
  description:
    'A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.',
  operationId: 'pokemon_species_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedPokemonSpeciesSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2PokemonSpeciesIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/pokemon-species/{id}/',
  tags: ['pokemon'],
  summary: 'Get pokemon species',
  description:
    'A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.',
  operationId: 'pokemon_species_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PokemonSpeciesDetailSchema } },
    },
  },
  security: [{}],
})

export const getApiV2PokeathlonStatIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/pokeathlon-stat/',
  tags: ['pokemon'],
  summary: 'List pokeathlon stats',
  description:
    "Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater detail.",
  operationId: 'pokeathlon_stat_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedPokeathlonStatSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2PokeathlonStatIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/pokeathlon-stat/{id}/',
  tags: ['pokemon'],
  summary: 'Get pokeathlon stat',
  description:
    "Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater detail.",
  operationId: 'pokeathlon_stat_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PokeathlonStatDetailSchema } },
    },
  },
  security: [{}],
})

export const getApiV2RegionIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/region/',
  tags: ['location'],
  summary: 'List regions',
  description:
    'A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.',
  operationId: 'region_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedRegionSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2RegionIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/region/{id}/',
  tags: ['location'],
  summary: 'Get region',
  description:
    'A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.',
  operationId: 'region_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: RegionDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2StatIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/stat/',
  tags: ['pokemon'],
  summary: 'List stats',
  description:
    'Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.',
  operationId: 'stat_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedStatSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2StatIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/stat/{id}/',
  tags: ['pokemon'],
  summary: 'Get stat',
  description:
    'Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.',
  operationId: 'stat_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: StatDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2SuperContestEffectIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/super-contest-effect/',
  tags: ['contests'],
  summary: 'List super contest effects',
  description: 'Super contest effects refer to the effects of moves when used in super contests.',
  operationId: 'super_contest_effect_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedSuperContestEffectSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2SuperContestEffectIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/super-contest-effect/{id}/',
  tags: ['contests'],
  summary: 'Get super contest effect',
  description: 'Super contest effects refer to the effects of moves when used in super contests.',
  operationId: 'super_contest_effect_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: SuperContestEffectDetailSchema } },
    },
  },
  security: [{}],
})

export const getApiV2TypeIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/type/',
  tags: ['pokemon'],
  summary: 'List types',
  description:
    'Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.',
  operationId: 'type_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedTypeSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2TypeIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/type/{id}/',
  tags: ['pokemon'],
  summary: 'Get types',
  description:
    'Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.',
  operationId: 'type_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: TypeDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2VersionIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/version/',
  tags: ['games'],
  summary: 'List versions',
  description: 'Versions of the games, e.g., Red, Blue or Yellow.',
  operationId: 'version_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedVersionSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2VersionIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/version/{id}/',
  tags: ['games'],
  summary: 'Get version',
  description: 'Versions of the games, e.g., Red, Blue or Yellow.',
  operationId: 'version_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: VersionDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2VersionGroupIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/version-group/',
  tags: ['games'],
  summary: 'List version groups',
  description: 'Version groups categorize highly similar versions of the games.',
  operationId: 'version_group_list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of results to return per page.',
            schema: { type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            required: false,
            in: 'query',
            description: 'The initial index from which to return the results.',
            schema: { type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description:
              '> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedVersionGroupSummaryListSchema } },
    },
  },
  security: [{}],
})

export const getApiV2VersionGroupIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/version-group/{id}/',
  tags: ['games'],
  summary: 'Get version group',
  description: 'Version groups categorize highly similar versions of the games.',
  operationId: 'version_group_retrieve',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'This parameter can be a string or an integer.',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: VersionGroupDetailSchema } } },
  },
  security: [{}],
})

export const getApiV2PokemonPokemonIdEncountersRoute = createRoute({
  method: 'get',
  path: '/api/v2/pokemon/{pokemon_id}/encounters',
  tags: ['encounters'],
  summary: 'Get pokemon encounter',
  description: 'Handles Pokemon Encounters as a sub-resource.',
  operationId: 'pokemon_encounters_list',
  request: {
    params: z.object({
      pokemon_id: z
        .string()
        .regex(/^\d+$/)
        .openapi({
          param: {
            in: 'path',
            name: 'pokemon_id',
            schema: { type: 'string', pattern: '^\\d+$' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PokemonEncounterResponseSchema) } },
    },
  },
  security: [{}],
})
