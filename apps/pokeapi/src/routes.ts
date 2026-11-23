import { createRoute, z } from '@hono/zod-openapi'

const PokemonSpeciesSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('PokemonSpeciesSummary')

const VersionGroupSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('VersionGroupSummary')

const ItemSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('ItemSummary')

const EvolutionTriggerSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('EvolutionTriggerSummary')

const MoveSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('MoveSummary')

const TypeSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('TypeSummary')

const LocationSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('LocationSummary')

const RegionSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('RegionSummary')

const PokemonFormSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('PokemonFormSummary')

const NatureSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('NatureSummary')

const EvolutionVariableSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
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
    version_group: VersionGroupSummarySchema.openapi({
      description: 'The version group in which these evolution requirements apply.',
    }),
    is_default: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether the evolution is considered as the expected evolution in a main series game. Each unique Pokémon variety of a line capable of evolution should have exactly one 'default' evolution. For example, the Meowth species has three default evolutions as there are three distinct varieties it can evolve into: Persian, Alolan Persian, and Perrserker.",
      }),
    item: z
      .xor([ItemSummarySchema, z.null().nullable()])
      .openapi({ description: 'The item required to cause evolution this into Pokémon species.' }),
    trigger: EvolutionTriggerSummarySchema.openapi({
      description: 'The type of event that triggers evolution into this Pokémon species.',
    }),
    gender: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The id of the gender of the evolving Pokémon species must be in order to evolve into this Pokémon species.',
      }),
    held_item: z
      .xor([ItemSummarySchema, z.null().nullable()])
      .openapi({
        description:
          'The item the evolving Pokémon species must be holding during the evolution trigger event to evolve into this Pokémon species.',
      }),
    known_move: z
      .xor([MoveSummarySchema, z.null().nullable()])
      .openapi({
        description:
          'The move that must be known by the evolving Pokémon species during the evolution trigger event in order to evolve into this Pokémon species.',
      }),
    known_move_type: z
      .xor([TypeSummarySchema, z.null().nullable()])
      .openapi({
        description:
          'The evolving Pokémon species must know a move with this type during the evolution trigger event in order to evolve into this Pokémon species.',
      }),
    location: z
      .xor([LocationSummarySchema, z.null().nullable()])
      .openapi({ description: 'The location the evolution must be triggered at.' }),
    min_level: z
      .int()
      .min(1)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The minimum required level of the evolving Pokémon species to evolve into this Pokémon species.',
      }),
    min_happiness: z
      .int()
      .min(0)
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The minimum required level of happiness the evolving Pokémon species to evolve into this Pokémon species.',
      }),
    min_beauty: z
      .int()
      .min(0)
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The minimum required level of beauty the evolving Pokémon species to evolve into this Pokémon species.',
      }),
    min_affection: z
      .int()
      .min(0)
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The minimum required level of affection the evolving Pokémon species to evolve into this Pokémon species.',
      }),
    near_special_rock: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not you need to be near a Moss Rock or Icy Rock to evolve into this Pokémon species.',
      }),
    needs_multiplayer: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not multiplayer link play is needed to evolve into this Pokémon species (e.g. Union Circle).',
      }),
    needs_overworld_rain: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not it must be raining in the overworld to cause evolution this Pokémon species.',
      }),
    party_species: z
      .xor([PokemonSpeciesSummarySchema, z.null().nullable()])
      .openapi({
        description:
          'The Pokémon species that must be in the players party in order for the evolving Pokémon species to evolve into this Pokémon species.',
      }),
    party_type: z
      .xor([TypeSummarySchema, z.null().nullable()])
      .openapi({
        description:
          'The player must have a Pokémon of this type in their party during the evolution trigger event in order for the evolving Pokémon species to evolve into this Pokémon species.',
      }),
    relative_physical_stats: z
      .int()
      .min(-1)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The required relation between the Pokémon's Attack and Defense stats. 1 means Attack > Defense. 0 means Attack = Defense. -1 means Attack < Defense.",
      }),
    time_of_day: z
      .string()
      .max(10)
      .exactOptional()
      .openapi({ description: 'The required time of day. Day or night.' }),
    trade_species: z
      .xor([PokemonSpeciesSummarySchema, z.null().nullable()])
      .openapi({ description: 'Pokémon species for which this one must be traded.' }),
    turn_upside_down: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not the 3DS needs to be turned upside-down as this Pokémon levels up.',
      }),
    region: z
      .xor([RegionSummarySchema, z.null().nullable()])
      .openapi({ description: 'The required region in which this evolution can occur.' }),
    required_pokemon_form: z
      .xor([PokemonFormSummarySchema, z.null().nullable()])
      .openapi({
        description: 'The Pokémon form required before evolving, or null if unrestricted.',
      }),
    evolved_pokemon_form: z
      .xor([PokemonFormSummarySchema, z.null().nullable()])
      .openapi({
        description: 'The Pokémon form produced by this evolution, or null if unspecified.',
      }),
    used_move: z
      .xor([MoveSummarySchema, z.null().nullable()])
      .openapi({
        description:
          'The move that must be used by the evolving Pokémon species during the evolution trigger event in order to evolve into this Pokémon species.',
      }),
    min_move_count: z
      .int()
      .min(0)
      .max(32767)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The minimum number of times a move must be used in order to evolve into this Pokémon species.',
      }),
    min_steps: z
      .int()
      .min(0)
      .max(32767)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The minimum number of steps that must be taken in order to evolve into this Pokémon species.',
      }),
    min_damage_taken: z
      .int()
      .min(0)
      .max(32767)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The minimum amount of damage taken during the evolution trigger event in order to evolve into this Pokémon species.',
      }),
    allowed_natures: z
      .array(NatureSummarySchema)
      .nullable()
      .openapi({
        readOnly: true,
        description: 'The natures that allow this evolution, or null if unrestricted.',
      }),
    condition_expression: z
      .xor([EvolutionConditionExpressionSchema, z.null().nullable()])
      .openapi({
        readOnly: true,
        description:
          'An additional evolution condition expressed in reverse Polish notation, or null if none.',
      }),
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

type EvolutionChainLinkType = {
  is_baby: boolean
  species: z.infer<typeof PokemonSpeciesSummarySchema>
  evolution_details: z.infer<typeof PokemonEvolutionSchema>[]
  evolves_to: EvolutionChainLinkType[]
}

const EncounterMethodSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('EncounterMethodSummary')

const VersionSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('VersionSummary')

const LocationAreaEncounterVersionDetailSchema = z
  .object({
    rate: z.int().openapi({ description: 'The chance of an encounter to occur.' }),
    version: VersionSummarySchema.openapi({
      description:
        'The version of the game in which the encounter can occur with the given chance.',
    }),
  })
  .openapi({ required: ['rate', 'version'] })
  .openapi('LocationAreaEncounterVersionDetail')

const LocationAreaEncounterRateSchema = z
  .object({
    encounter_method: EncounterMethodSummarySchema.openapi({
      description: 'The method in which Pokémon may be encountered in an area..',
    }),
    version_details: z
      .array(LocationAreaEncounterVersionDetailSchema)
      .openapi({ description: 'The chance of the encounter to occur on a version of the game.' }),
  })
  .openapi({ required: ['encounter_method', 'version_details'] })
  .openapi('LocationAreaEncounterRate')

const LanguageSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('LanguageSummary')

const LocationAreaNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('LocationAreaName')

const PokemonSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('PokemonSummary')

const EncounterConditionValueSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('EncounterConditionValueSummary')

const EncounterPokemonDetailSchema = z
  .object({
    min_perfect_ivs: z
      .int()
      .min(0)
      .max(6)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The minimum number of perfect IVs, or null if unspecified.' }),
    always_shiny: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the encountered Pokémon is always shiny.' }),
    never_shiny: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the encountered Pokémon can never be shiny.' }),
    is_alpha: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the encountered Pokémon is an alpha Pokémon.' }),
  })
  .openapi({ required: [] })
  .openapi('EncounterPokemonDetail')

const LocationAreaEncounterDetailSchema = z
  .object({
    min_level: z
      .int()
      .openapi({ description: 'The lowest level the Pokémon could be encountered at.' }),
    max_level: z
      .int()
      .openapi({ description: 'The highest level the Pokémon could be encountered at.' }),
    chance: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({ description: 'Percent chance that this encounter will occur.' }),
    method: EncounterMethodSummarySchema.exactOptional().openapi({
      description: 'The method by which this encounter happens.',
    }),
    condition_values: z
      .array(EncounterConditionValueSummarySchema)
      .openapi({
        readOnly: true,
        description:
          'A list of condition values that must be in effect for this encounter to occur.',
      }),
    pokemon_details: z
      .xor([EncounterPokemonDetailSchema, z.null().nullable()])
      .openapi({
        readOnly: true,
        description: 'Additional properties of the encountered Pokémon, or null if unspecified.',
      }),
  })
  .openapi({ required: ['condition_values', 'max_level', 'min_level', 'pokemon_details'] })
  .openapi('LocationAreaEncounterDetail')

const LocationAreaPokemonEncounterVersionSchema = z
  .object({
    version: VersionSummarySchema.openapi({
      description: 'The game version this encounter happens in.',
    }),
    max_chance: z
      .int()
      .openapi({ description: 'The total percentage of all encounter potential.' }),
    encounter_details: z
      .array(LocationAreaEncounterDetailSchema)
      .openapi({ description: 'A list of encounters and their specifics.' }),
  })
  .openapi({ required: ['encounter_details', 'max_chance', 'version'] })
  .openapi('LocationAreaPokemonEncounterVersion')

const LocationAreaPokemonEncounterSchema = z
  .object({
    pokemon: PokemonSummarySchema.openapi({ description: 'The Pokémon being encountered.' }),
    version_details: z
      .array(LocationAreaPokemonEncounterVersionSchema)
      .openapi({
        description:
          'A list of versions and encounters with Pokémon that might happen in the referenced location area.',
      }),
  })
  .openapi({ required: ['pokemon', 'version_details'] })
  .openapi('LocationAreaPokemonEncounter')

type LocationAreaDetailType = {
  id: number
  name: string
  game_index: number
  encounter_method_rates: z.infer<typeof LocationAreaEncounterRateSchema>[]
  location: z.infer<typeof LocationSummarySchema>
  names: z.infer<typeof LocationAreaNameSchema>[]
  pokemon_encounters: z.infer<typeof LocationAreaPokemonEncounterSchema>[]
}

const AbilityChangeEffectTextSchema = z
  .object({
    effect: z
      .string()
      .max(6000)
      .openapi({
        description: 'The localized effect text for an API resource in a specific language.',
      }),
    language: LanguageSummarySchema.openapi({ description: 'The language this effect is in.' }),
  })
  .openapi({ required: ['effect', 'language'] })
  .openapi('AbilityChangeEffectText')

const AbilityChangeSchema = z
  .object({
    version_group: VersionGroupSummarySchema.openapi({
      description: 'The version group in which the previous effect of this ability originated.',
    }),
    effect_entries: z
      .array(AbilityChangeEffectTextSchema)
      .openapi({
        readOnly: true,
        description: 'The previous effect of this ability listed in different languages.',
      }),
  })
  .openapi({ required: ['effect_entries', 'version_group'] })
  .openapi('AbilityChange')

const GenerationSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('GenerationSummary')

const AbilityNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('AbilityName')

const AbilityEffectTextSchema = z
  .object({
    effect: z
      .string()
      .max(6000)
      .openapi({
        description: 'The localized effect text for an API resource in a specific language.',
      }),
    short_effect: z
      .string()
      .max(300)
      .openapi({ description: 'The localized effect text in brief.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this effect is in.' }),
  })
  .openapi({ required: ['effect', 'language', 'short_effect'] })
  .openapi('AbilityEffectText')

const AbilityFlavorTextSchema = z
  .object({
    flavor_text: z
      .string()
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({
      description: 'The language this text resource is in.',
    }),
    version_group: VersionGroupSummarySchema.openapi({
      description: 'The version group that uses this flavor text.',
    }),
  })
  .openapi({ required: ['flavor_text', 'language', 'version_group'] })
  .openapi('AbilityFlavorText')

const AbilityPokemonDetailSchema = z
  .object({
    is_hidden: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not this a hidden ability for the referenced Pokémon.' }),
    slot: z
      .int()
      .min(1)
      .max(3)
      .openapi({
        description:
          "Pokémon have 3 ability 'slots' which hold references to possible abilities they could have. This is the slot of this ability for the referenced pokemon.",
      }),
    pokemon: PokemonSummarySchema.openapi({
      description: 'The Pokémon this ability could belong to.',
    }),
  })
  .openapi({ required: ['pokemon', 'slot'] })
  .openapi('AbilityPokemonDetail')

const AbilityDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    is_main_series: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not this ability originated in the main series of the video games.',
      }),
    generation: GenerationSummarySchema.openapi({
      description: 'The generation this ability originated in.',
    }),
    names: z
      .array(AbilityNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
    effect_entries: z
      .array(AbilityEffectTextSchema)
      .openapi({
        readOnly: true,
        description: 'The effect of this ability listed in different languages.',
      }),
    effect_changes: z
      .array(AbilityChangeSchema)
      .openapi({
        readOnly: true,
        description: 'The list of previous effects this ability has had across version groups.',
      }),
    flavor_text_entries: z
      .array(AbilityFlavorTextSchema)
      .openapi({
        readOnly: true,
        description: 'The flavor text of this ability listed in different languages.',
      }),
    pokemon: z
      .array(AbilityPokemonDetailSchema)
      .openapi({
        readOnly: true,
        description: 'A list of Pokémon that could potentially have this ability.',
      }),
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
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('AbilitySummary')

const BerryFirmnessSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('BerryFirmnessSummary')

const BerryFlavorSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('BerryFlavorSummary')

const BerryFlavorMapSchema = z
  .object({
    potency: z
      .int()
      .min(0)
      .max(32767)
      .openapi({ description: 'How powerful the referenced flavor is for this berry.' }),
    flavor: BerryFlavorSummarySchema.openapi({ description: 'The referenced berry flavor.' }),
  })
  .openapi({ required: ['flavor', 'potency'] })
  .openapi('BerryFlavorMap')

const BerryDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    growth_time: z
      .int()
      .min(0)
      .max(32767)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Time it takes the tree to grow one stage, in hours. Berry trees go through four of these growth stages before they can be picked.',
      }),
    max_harvest: z
      .int()
      .min(0)
      .max(15)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of these berries that can grow on one tree in Generation IV.',
      }),
    natural_gift_power: z
      .int()
      .min(0)
      .max(32767)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The power of the move "Natural Gift" when used with this Berry.' }),
    size: z
      .int()
      .min(0)
      .max(32767)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The size of this Berry, in millimeters.' }),
    smoothness: z
      .int()
      .min(20)
      .max(60)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The smoothness of this Berry, used in making Pokéblocks or Poffins.',
      }),
    soil_dryness: z
      .int()
      .min(4)
      .max(35)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The speed at which this Berry dries out the soil as it grows. A higher rate means the soil dries more quickly.',
      }),
    firmness: z
      .xor([BerryFirmnessSummarySchema, z.null().nullable()])
      .openapi({
        description: 'The firmness of this berry, used in making Pokéblocks or Poffins.',
      }),
    flavors: z
      .array(BerryFlavorMapSchema)
      .openapi({
        readOnly: true,
        description:
          'A list of references to each flavor a berry can have and the potency of each of those flavors in regard to this berry.',
      }),
    item: ItemSummarySchema.openapi({
      description:
        'Berries are actually items. This is a reference to the item specific data for this berry.',
    }),
    natural_gift_type: z
      .xor([TypeSummarySchema, z.null().nullable()])
      .openapi({ description: 'The type inherited by "Natural Gift" when used with this Berry.' }),
  })
  .openapi({ required: ['firmness', 'flavors', 'id', 'item', 'name', 'natural_gift_type'] })
  .openapi('BerryDetail')

const BerrySummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('BerrySummary')

const BerryFirmnessNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('BerryFirmnessName')

const BerryFirmnessDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    berries: z
      .array(BerrySummarySchema)
      .openapi({ readOnly: true, description: 'A list of the berries with this firmness.' }),
    names: z
      .array(BerryFirmnessNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
  })
  .openapi({ required: ['berries', 'id', 'name', 'names'] })
  .openapi('BerryFirmnessDetail')

const BerryFlavorBerryMapSchema = z
  .object({
    potency: z
      .int()
      .min(0)
      .max(32767)
      .openapi({ description: 'How powerful the referenced flavor is for this berry.' }),
    berry: BerrySummarySchema.openapi({ description: 'The berry with the referenced flavor.' }),
  })
  .openapi({ required: ['berry', 'potency'] })
  .openapi('BerryFlavorBerryMap')

const ContestTypeSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('ContestTypeSummary')

const BerryFlavorNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('BerryFlavorName')

const BerryFlavorDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    berries: z
      .array(BerryFlavorBerryMapSchema)
      .openapi({ readOnly: true, description: 'A list of the berries with this flavor.' }),
    contest_type: ContestTypeSummarySchema.openapi({
      description: 'The contest type that correlates with this berry flavor.',
    }),
    names: z
      .array(BerryFlavorNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
  })
  .openapi({ required: ['berries', 'contest_type', 'id', 'name', 'names'] })
  .openapi('BerryFlavorDetail')

const CharacteristicDescriptionSchema = z
  .object({
    description: z
      .string()
      .max(2000)
      .exactOptional()
      .openapi({
        description: 'The localized description for an API resource in a specific language.',
      }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language'] })
  .openapi('CharacteristicDescription')

const StatSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('StatSummary')

const CharacteristicDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    gene_modulo: z
      .int()
      .openapi({ description: 'The remainder of the highest stat/IV divided by 5.' }),
    possible_values: z
      .array(z.int())
      .openapi({
        readOnly: true,
        description:
          'The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5.',
      }),
    highest_stat: StatSummarySchema.openapi({
      description: 'The stat which results in this characteristic.',
    }),
    descriptions: z
      .array(CharacteristicDescriptionSchema)
      .openapi({
        readOnly: true,
        description: 'The descriptions of this characteristic listed in different languages.',
      }),
  })
  .openapi({ required: ['descriptions', 'gene_modulo', 'highest_stat', 'id', 'possible_values'] })
  .openapi('CharacteristicDetail')

const CharacteristicSummarySchema = z
  .object({
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['url'] })
  .openapi('CharacteristicSummary')

const ContestEffectEffectTextSchema = z
  .object({
    effect: z
      .string()
      .max(6000)
      .openapi({
        description: 'The localized effect text for an API resource in a specific language.',
      }),
    language: LanguageSummarySchema.openapi({ description: 'The language this effect is in.' }),
  })
  .openapi({ required: ['effect', 'language'] })
  .openapi('ContestEffectEffectText')

const ContestEffectFlavorTextSchema = z
  .object({
    flavor_text: z
      .string()
      .max(500)
      .openapi({
        description: 'The localized flavor text for an API resource in a specific language.',
      }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['flavor_text', 'language'] })
  .openapi('ContestEffectFlavorText')

const ContestEffectDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    appeal: z
      .int()
      .min(0)
      .max(32767)
      .openapi({ description: 'The base number of hearts the user of this move gets.' }),
    jam: z
      .int()
      .min(0)
      .max(32767)
      .openapi({ description: "The base number of hearts the user's opponent loses." }),
    effect_entries: z
      .array(ContestEffectEffectTextSchema)
      .openapi({
        readOnly: true,
        description: 'The result of this contest effect listed in different languages.',
      }),
    flavor_text_entries: z
      .array(ContestEffectFlavorTextSchema)
      .openapi({
        readOnly: true,
        description: 'The flavor text of this contest effect listed in different languages.',
      }),
  })
  .openapi({ required: ['appeal', 'effect_entries', 'flavor_text_entries', 'id', 'jam'] })
  .openapi('ContestEffectDetail')

const ContestEffectSummarySchema = z
  .object({
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['url'] })
  .openapi('ContestEffectSummary')

const ContestTypeNameSchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name for this contest.' }),
    color: z
      .string()
      .max(10)
      .openapi({ description: "The color associated with this contest's name." }),
    language: LanguageSummarySchema.openapi({ description: 'The language that this name is in.' }),
  })
  .openapi({ required: ['color', 'language', 'name'] })
  .openapi('ContestTypeName')

const ContestTypeDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    berry_flavor: BerryFlavorSummarySchema.openapi({
      readOnly: true,
      description: 'The berry flavor that correlates with this contest type.',
    }),
    names: z
      .array(ContestTypeNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this contest type listed in different languages.',
      }),
  })
  .openapi({ required: ['berry_flavor', 'id', 'name', 'names'] })
  .openapi('ContestTypeDetail')

const CurrencyNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('CurrencyName')

const CurrencyDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    names: z
      .array(CurrencyNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
  })
  .openapi({ required: ['id', 'name', 'names'] })
  .openapi('CurrencyDetail')

const CurrencySummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('CurrencySummary')

const EggGroupNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('EggGroupName')

const EggGroupDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    names: z
      .array(EggGroupNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
    pokemon_species: z
      .array(PokemonSpeciesSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of all Pokémon species that are members of this egg group.',
      }),
  })
  .openapi({ required: ['id', 'name', 'names', 'pokemon_species'] })
  .openapi('EggGroupDetail')

const EggGroupSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('EggGroupSummary')

const EncounterConditionNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('EncounterConditionName')

const EncounterConditionDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    values: z
      .array(EncounterConditionValueSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of possible values for this encounter condition.',
      }),
    names: z
      .array(EncounterConditionNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
  })
  .openapi({ required: ['id', 'name', 'names', 'values'] })
  .openapi('EncounterConditionDetail')

const EncounterConditionSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('EncounterConditionSummary')

const EncounterConditionValueNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('EncounterConditionValueName')

const EncounterConditionValueDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    condition: EncounterConditionSummarySchema.openapi({
      description: 'The condition this encounter condition value pertains to.',
    }),
    names: z
      .array(EncounterConditionValueNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
  })
  .openapi({ required: ['condition', 'id', 'name', 'names'] })
  .openapi('EncounterConditionValueDetail')

const EncounterMethodNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('EncounterMethodName')

const EncounterMethodDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    order: z
      .int()
      .min(-1)
      .max(32767)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A good value for sorting.' }),
    names: z
      .array(EncounterMethodNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
  })
  .openapi({ required: ['id', 'name', 'names'] })
  .openapi('EncounterMethodDetail')

const EvolutionChainLinkSchema: z.ZodType<EvolutionChainLinkType> = z
  .lazy(() =>
    z
      .object({
        is_baby: z
          .boolean()
          .openapi({
            description:
              'Whether or not this link is for a baby Pokémon. This would only ever be true on the base link.',
          }),
        species: PokemonSpeciesSummarySchema.openapi({
          description: 'The Pokémon species at this point in the evolution chain.',
        }),
        evolution_details: z
          .array(PokemonEvolutionSchema)
          .openapi({
            description:
              'All details regarding the specific details of the referenced Pokémon species evolution.',
          }),
        evolves_to: z
          .array(EvolutionChainLinkSchema)
          .openapi({ readOnly: true, description: 'A List of chain objects.' }),
      })
      .openapi({ required: ['evolution_details', 'evolves_to', 'is_baby', 'species'] }),
  )
  .openapi('EvolutionChainLink')

const EvolutionChainDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    baby_trigger_item: z
      .xor([ItemSummarySchema, z.null().nullable()])
      .openapi({
        description:
          'The item that a Pokémon would be holding when mating that would trigger the egg hatching a baby Pokémon rather than a basic Pokémon.',
      }),
    chain: EvolutionChainLinkSchema.openapi({
      readOnly: true,
      description:
        'The base chain link object. Each link contains evolution details for a Pokémon in the chain. Each link references the next Pokémon in the natural evolution order.',
    }),
  })
  .openapi({ required: ['baby_trigger_item', 'chain', 'id'] })
  .openapi('EvolutionChainDetail')

const EvolutionChainSummarySchema = z
  .object({
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['url'] })
  .openapi('EvolutionChainSummary')

const EvolutionTriggerNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('EvolutionTriggerName')

const EvolutionTriggerDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    names: z
      .array(EvolutionTriggerNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
    pokemon_species: z
      .array(PokemonSpeciesSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of pokemon species that result from this evolution trigger.',
      }),
  })
  .openapi({ required: ['id', 'name', 'names', 'pokemon_species'] })
  .openapi('EvolutionTriggerDetail')

const EvolutionVariableDescriptionSchema = z
  .object({
    description: z
      .string()
      .max(2000)
      .exactOptional()
      .openapi({
        description: 'The localized description for an API resource in a specific language.',
      }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language'] })
  .openapi('EvolutionVariableDescription')

const EvolutionVariableNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('EvolutionVariableName')

const EvolutionVariableDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    symbol: z
      .string()
      .max(10)
      .openapi({
        description: 'The symbol used for this variable in evolution condition expressions.',
      }),
    data_type: z
      .string()
      .max(20)
      .exactOptional()
      .openapi({ description: 'The data type of this variable.' }),
    source: z
      .string()
      .max(20)
      .exactOptional()
      .openapi({ description: 'The source of the variable value.' }),
    version_group: VersionGroupSummarySchema.openapi({
      description: 'The version group in which this variable was introduced.',
    }),
    names: z
      .array(EvolutionVariableNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
    descriptions: z
      .array(EvolutionVariableDescriptionSchema)
      .openapi({
        readOnly: true,
        description: 'The description of this resource listed in different languages.',
      }),
  })
  .openapi({ required: ['descriptions', 'id', 'name', 'names', 'symbol', 'version_group'] })
  .openapi('EvolutionVariableDetail')

const ExperienceSchema = z
  .object({
    level: z.int().min(1).max(100).openapi({ description: 'The level gained.' }),
    experience: z
      .int()
      .min(0)
      .max(2147483647)
      .openapi({ description: 'The amount of experience required to reach the referenced level.' }),
  })
  .openapi({ required: ['experience', 'level'] })
  .openapi('Experience')

const GenderPokemonSpeciesSchema = z
  .object({
    rate: z
      .int()
      .openapi({
        description: 'The chance of this Pokémon being female, in eighths; or -1 for genderless.',
      }),
    pokemon_species: PokemonSpeciesSummarySchema.openapi({
      description: 'A Pokémon species that can be the referenced gender.',
    }),
  })
  .openapi({ required: ['pokemon_species', 'rate'] })
  .openapi('GenderPokemonSpecies')

const GenderDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    pokemon_species_details: z
      .array(GenderPokemonSpeciesSchema)
      .openapi({
        readOnly: true,
        description:
          'A list of Pokémon species that can be this gender and how likely it is that they will be.',
      }),
    required_for_evolution: z
      .array(PokemonSpeciesSummarySchema)
      .openapi({
        readOnly: true,
        description:
          'A list of Pokémon species that required this gender in order for a Pokémon to evolve into them.',
      }),
  })
  .openapi({ required: ['id', 'name', 'pokemon_species_details', 'required_for_evolution'] })
  .openapi('GenderDetail')

const GenderSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('GenderSummary')

const GenerationNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('GenerationName')

const GenerationDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    abilities: z
      .array(AbilitySummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of abilities that were introduced in this generation.',
      }),
    main_region: RegionSummarySchema.openapi({
      description: 'The main region travelled in this generation.',
    }),
    moves: z
      .array(MoveSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of moves that were introduced in this generation.',
      }),
    names: z
      .array(GenerationNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
    pokemon_species: z
      .array(PokemonSpeciesSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of Pokémon species that were introduced in this generation.',
      }),
    types: z
      .array(TypeSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of types that were introduced in this generation.',
      }),
    version_groups: z
      .array(VersionGroupSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of version groups that were introduced in this generation.',
      }),
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
  .object({
    description: z
      .string()
      .max(2000)
      .exactOptional()
      .openapi({
        description: 'The localized description for an API resource in a specific language.',
      }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language'] })
  .openapi('GrowthRateDescription')

const GrowthRateDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    formula: z
      .string()
      .max(500)
      .openapi({
        description:
          'The formula used to calculate the rate at which the Pokémon species gains level.',
      }),
    descriptions: z
      .array(GrowthRateDescriptionSchema)
      .openapi({
        readOnly: true,
        description: 'The descriptions of this characteristic listed in different languages.',
      }),
    levels: z
      .array(ExperienceSchema)
      .openapi({
        readOnly: true,
        description:
          'A list of levels and the amount of experienced needed to atain them based on this growth rate.',
      }),
    pokemon_species: z
      .array(PokemonSpeciesSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of Pokémon species that gain levels at this growth rate.',
      }),
  })
  .openapi({ required: ['descriptions', 'formula', 'id', 'levels', 'name', 'pokemon_species'] })
  .openapi('GrowthRateDetail')

const GrowthRateSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('GrowthRateSummary')

const ItemAttributeDescriptionSchema = z
  .object({
    description: z
      .string()
      .max(2000)
      .exactOptional()
      .openapi({
        description: 'The localized description for an API resource in a specific language.',
      }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language'] })
  .openapi('ItemAttributeDescription')

const ItemAttributeNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('ItemAttributeName')

const ItemAttributeDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    descriptions: z
      .array(ItemAttributeDescriptionSchema)
      .openapi({
        readOnly: true,
        description: 'The description of this item attribute listed in different languages.',
      }),
    items: z
      .array(ItemSummarySchema)
      .openapi({ readOnly: true, description: 'A list of items that have this attribute.' }),
    names: z
      .array(ItemAttributeNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this item attribute listed in different languages.',
      }),
  })
  .openapi({ required: ['descriptions', 'id', 'items', 'name', 'names'] })
  .openapi('ItemAttributeDetail')

const ItemAttributeSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('ItemAttributeSummary')

const ItemCategoryNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('ItemCategoryName')

const ItemPocketSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('ItemPocketSummary')

const ItemCategoryDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    items: z
      .array(ItemSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of items that are a part of this category.',
      }),
    names: z
      .array(ItemCategoryNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this item category listed in different languages.',
      }),
    pocket: ItemPocketSummarySchema.openapi({
      description: 'The pocket items in this category would be put in.',
    }),
  })
  .openapi({ required: ['id', 'items', 'name', 'names', 'pocket'] })
  .openapi('ItemCategoryDetail')

const ItemCategorySummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('ItemCategorySummary')

const ItemFlingEffectSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('ItemFlingEffectSummary')

const ItemEffectTextSchema = z
  .object({
    effect: z
      .string()
      .max(6000)
      .openapi({
        description: 'The localized effect text for an API resource in a specific language.',
      }),
    short_effect: z
      .string()
      .max(300)
      .openapi({ description: 'The localized effect text in brief.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this effect is in.' }),
  })
  .openapi({ required: ['effect', 'language', 'short_effect'] })
  .openapi('ItemEffectText')

const ItemFlavorTextSchema = z
  .object({
    text: z
      .string()
      .openapi({
        description: 'The localized flavor text for an API resource in a specific language.',
      }),
    version_group: VersionGroupSummarySchema.openapi({
      description: 'The version group which uses this flavor text.',
    }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'text', 'version_group'] })
  .openapi('ItemFlavorText')

const ItemGameIndexSchema = z
  .object({
    game_index: z
      .int()
      .min(0)
      .max(2147483647)
      .openapi({ description: 'The internal id of an API resource within game data.' }),
    generation: GenerationSummarySchema.openapi({
      description: 'The generation relevent to this game index.',
    }),
  })
  .openapi({ required: ['game_index', 'generation'] })
  .openapi('ItemGameIndex')

const ItemPriceSchema = z
  .object({
    purchase_price: z
      .int()
      .min(0)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The purchase price in this currency and version group, or null if unavailable.',
      }),
    sell_price: z
      .int()
      .min(0)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The sell price in this currency and version group, or null if unavailable.',
      }),
    currency: CurrencySummarySchema.openapi({ description: 'The currency used for this price.' }),
    version_group: VersionGroupSummarySchema.openapi({
      description: 'The version group to which this price applies.',
    }),
  })
  .openapi({ required: ['currency', 'version_group'] })
  .openapi('ItemPrice')

const ItemNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('ItemName')

const PokemonHeldItemVersionSchema = z
  .object({
    rarity: z.int().openapi({ description: 'How often the item is held.' }),
    version: VersionSummarySchema.openapi({
      description: 'The version in which the item is held.',
    }),
  })
  .openapi({ required: ['rarity', 'version'] })
  .openapi('PokemonHeldItemVersion')

const PokemonHeldItemSchema = z
  .object({
    pokemon: PokemonSummarySchema.openapi({ description: 'The Pokémon that holds this item.' }),
    version_details: z
      .array(PokemonHeldItemVersionSchema)
      .openapi({
        description: 'The details for the version that this item is held in by the Pokémon.',
      }),
  })
  .openapi({ required: ['pokemon', 'version_details'] })
  .openapi('PokemonHeldItem')

const ItemSpritesSchema = z
  .object({
    default: z.string().nullable().openapi({ description: 'The default depiction of this item.' }),
  })
  .openapi({ required: ['default'] })
  .openapi('ItemSprites')

const MachineSummarySchema = z
  .object({
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['url'] })
  .openapi('MachineSummary')

const ItemMachineSchema = z
  .object({
    machine: MachineSummarySchema.openapi({
      description: 'The machine that teaches a move from an item.',
    }),
    version_group: VersionGroupSummarySchema.openapi({
      description: 'The version group of this specific machine.',
    }),
  })
  .openapi({ required: ['machine', 'version_group'] })
  .openapi('ItemMachine')

const ItemDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    fling_power: z
      .int()
      .min(0)
      .max(130)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The power of the move Fling when used with this item.' }),
    fling_effect: z
      .xor([ItemFlingEffectSummarySchema, z.null().nullable()])
      .openapi({ description: 'The effect of the move Fling when used with this item.' }),
    attributes: z
      .array(ItemAttributeSummarySchema)
      .openapi({ readOnly: true, description: 'A list of attributes this item has.' }),
    category: ItemCategorySummarySchema.openapi({
      description: 'The category of items this item falls into.',
    }),
    effect_entries: z
      .array(ItemEffectTextSchema)
      .openapi({
        readOnly: true,
        description: 'The effect of this ability listed in different languages.',
      }),
    flavor_text_entries: z
      .array(ItemFlavorTextSchema)
      .openapi({
        readOnly: true,
        description: 'The flavor text of this ability listed in different languages.',
      }),
    game_indices: z
      .array(ItemGameIndexSchema)
      .openapi({
        readOnly: true,
        description: 'A list of game indices relevent to this item by generation.',
      }),
    prices: z
      .array(ItemPriceSchema)
      .openapi({
        readOnly: true,
        description:
          'Purchase and sell prices by currency and version group. Prices may be null when the item cannot be bought or sold.',
      }),
    names: z
      .array(ItemNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this item listed in different languages.',
      }),
    held_by_pokemon: z
      .array(PokemonHeldItemSchema)
      .openapi({
        readOnly: true,
        description: 'A list of Pokémon that might be found in the wild holding this item.',
      }),
    sprites: ItemSpritesSchema.openapi({
      readOnly: true,
      description: 'A set of sprites used to depict this item in the game.',
    }),
    baby_trigger_for: z
      .xor([EvolutionChainSummarySchema, z.null().nullable()])
      .openapi({
        readOnly: true,
        description: 'An evolution chain this item requires to produce a bay during mating.',
      }),
    machines: z
      .array(ItemMachineSchema)
      .openapi({ readOnly: true, description: 'A list of the machines related to this item.' }),
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
  .object({
    effect: z
      .string()
      .max(6000)
      .openapi({
        description: 'The localized effect text for an API resource in a specific language.',
      }),
    language: LanguageSummarySchema.openapi({ description: 'The language this effect is in.' }),
  })
  .openapi({ required: ['effect', 'language'] })
  .openapi('ItemFlingEffectEffectText')

const ItemFlingEffectDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    effect_entries: z
      .array(ItemFlingEffectEffectTextSchema)
      .openapi({
        readOnly: true,
        description: 'The result of this fling effect listed in different languages.',
      }),
    items: z
      .array(ItemSummarySchema)
      .openapi({ readOnly: true, description: 'A list of items that have this fling effect.' }),
  })
  .openapi({ required: ['effect_entries', 'id', 'items', 'name'] })
  .openapi('ItemFlingEffectDetail')

const ItemPocketNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('ItemPocketName')

const ItemPocketDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    categories: z
      .array(ItemCategorySummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of item categories that are relevant to this item pocket.',
      }),
    names: z
      .array(ItemPocketNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
  })
  .openapi({ required: ['categories', 'id', 'name', 'names'] })
  .openapi('ItemPocketDetail')

const LanguageNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('LanguageName')

const LanguageDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    official: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the games are published in this language.' }),
    iso639: z
      .string()
      .max(10)
      .openapi({
        description:
          'The two-letter ISO 639-1 language code. Multiple PokéAPI language records may share this code.',
      }),
    iso3166: z
      .string()
      .max(2)
      .openapi({
        description:
          'The two-letter ISO 3166-1 alpha-2 code of the country or region associated with this language record. Multiple PokéAPI language records may share this code.',
      }),
    names: z
      .array(LanguageNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
  })
  .openapi({ required: ['id', 'iso3166', 'iso639', 'name', 'names'] })
  .openapi('LanguageDetail')

const LocationAreaDetailSchema: z.ZodType<LocationAreaDetailType> = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    game_index: z
      .int()
      .min(0)
      .max(2147483647)
      .openapi({ description: 'The internal id of an API resource within game data.' }),
    encounter_method_rates: z
      .array(LocationAreaEncounterRateSchema)
      .openapi({
        readOnly: true,
        description:
          'A list of methods in which Pokémon may be encountered in this area and how likely the method will occur depending on the version of the game.',
      }),
    location: LocationSummarySchema.openapi({
      description: 'The region this location area can be found in.',
    }),
    names: z
      .array(LocationAreaNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
    pokemon_encounters: z
      .array(LocationAreaPokemonEncounterSchema)
      .openapi({
        readOnly: true,
        description:
          'A list of Pokémon that can be encountered in this area along with version specific details about the encounter.',
      }),
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
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('LocationAreaSummary')

const LocationNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('LocationName')

const LocationGameIndexSchema = z
  .object({
    game_index: z
      .int()
      .min(0)
      .max(2147483647)
      .openapi({ description: 'The internal id of an API resource within game data.' }),
    generation: GenerationSummarySchema.openapi({
      description: 'The generation relevent to this game index.',
    }),
  })
  .openapi({ required: ['game_index', 'generation'] })
  .openapi('LocationGameIndex')

const LocationDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    region: z
      .xor([RegionSummarySchema, z.null().nullable()])
      .openapi({ description: 'The region this location can be found in.' }),
    names: z
      .array(LocationNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
    game_indices: z
      .array(LocationGameIndexSchema)
      .openapi({
        readOnly: true,
        description: 'A list of game indices relevent to this location by generation.',
      }),
    areas: z
      .array(LocationAreaSummarySchema)
      .openapi({ readOnly: true, description: 'Areas that can be found within this location.' }),
  })
  .openapi({ required: ['areas', 'game_indices', 'id', 'name', 'names', 'region'] })
  .openapi('LocationDetail')

const MachineDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    item: ItemSummarySchema.openapi({
      description: 'The TM or HM item that corresponds to this machine.',
    }),
    version_group: VersionGroupSummarySchema.openapi({
      description: 'The version group that this machine applies to.',
    }),
    move: MoveSummarySchema.openapi({ description: 'The move that is taught by this machine.' }),
  })
  .openapi({ required: ['id', 'item', 'move', 'version_group'] })
  .openapi('MachineDetail')

const MoveBattleStyleNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('MoveBattleStyleName')

const MoveBattleStyleDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    names: z
      .array(MoveBattleStyleNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
  })
  .openapi({ required: ['id', 'name', 'names'] })
  .openapi('MoveBattleStyleDetail')

const MoveBattleStyleSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('MoveBattleStyleSummary')

const MoveEffectEffectTextSchema = z
  .object({
    effect: z
      .string()
      .max(6000)
      .openapi({
        description: 'The localized effect text for an API resource in a specific language.',
      }),
    short_effect: z
      .string()
      .max(300)
      .openapi({ description: 'The localized effect text in brief.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this effect is in.' }),
  })
  .openapi({ required: ['effect', 'language', 'short_effect'] })
  .openapi('MoveEffectEffectText')

const MoveChangeSchema = z
  .object({
    accuracy: z
      .int()
      .min(0)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The percent value of how likely this move is to be successful.' }),
    power: z
      .int()
      .min(0)
      .max(250)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The base power before the listed version group, or null if power did not change.',
      }),
    pp: z
      .int()
      .min(0)
      .max(40)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Power points. The number of times this move can be used.' }),
    effect_chance: z
      .int()
      .nullable()
      .openapi({
        description: 'The percent value of how likely it is this moves effect will take effect.',
      }),
    effect_entries: z
      .array(MoveEffectEffectTextSchema)
      .openapi({
        readOnly: true,
        description: 'The effect of this move listed in different languages.',
      }),
    type: z
      .xor([TypeSummarySchema, z.null().nullable()])
      .openapi({ description: 'The elemental type of this move.' }),
    version_group: VersionGroupSummarySchema.openapi({
      description: 'The version group in which these move stat values were in effect.',
    }),
  })
  .openapi({ required: ['effect_chance', 'effect_entries', 'type', 'version_group'] })
  .openapi('MoveChange')

const MoveComboUsageSchema = z
  .object({
    use_before: z
      .array(MoveSummarySchema)
      .nullable()
      .openapi({ description: 'A list of moves to use before this move.' }),
    use_after: z
      .array(MoveSummarySchema)
      .nullable()
      .openapi({ description: 'A list of moves to use after this move.' }),
  })
  .openapi({ required: ['use_after', 'use_before'] })
  .openapi('MoveComboUsage')

const MoveCombosSchema = z
  .object({
    normal: MoveComboUsageSchema.openapi({
      description:
        'A detail of moves this move can be used before or after, granting additional appeal points in contests.',
    }),
    super: MoveComboUsageSchema.openapi({
      description:
        'A detail of moves this move can be used before or after, granting additional appeal points in super contests.',
    }),
  })
  .openapi({ required: ['normal', 'super'] })
  .openapi('MoveCombos')

const MoveDamageClassDescriptionSchema = z
  .object({
    description: z
      .string()
      .max(2000)
      .exactOptional()
      .openapi({
        description: 'The localized description for an API resource in a specific language.',
      }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language'] })
  .openapi('MoveDamageClassDescription')

const MoveDamageClassNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('MoveDamageClassName')

const MoveDamageClassDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    descriptions: z
      .array(MoveDamageClassDescriptionSchema)
      .openapi({
        readOnly: true,
        description: 'The description of this resource listed in different languages.',
      }),
    moves: z
      .array(MoveSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of moves that fall into this damage class.',
      }),
    names: z
      .array(MoveDamageClassNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
  })
  .openapi({ required: ['descriptions', 'id', 'moves', 'name', 'names'] })
  .openapi('MoveDamageClassDetail')

const MoveDamageClassSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('MoveDamageClassSummary')

const MoveEffectChangeEffectTextSchema = z
  .object({
    effect: z
      .string()
      .max(6000)
      .openapi({
        description: 'The localized effect text for an API resource in a specific language.',
      }),
    language: LanguageSummarySchema.openapi({ description: 'The language this effect is in.' }),
  })
  .openapi({ required: ['effect', 'language'] })
  .openapi('MoveEffectChangeEffectText')

const MoveEffectChangeSchema = z
  .object({
    version_group: VersionGroupSummarySchema.openapi({
      description: 'The version group in which the previous effect of this ability originated.',
    }),
    effect_entries: z
      .array(MoveEffectChangeEffectTextSchema)
      .openapi({
        readOnly: true,
        description: 'The previous effect of this ability listed in different languages.',
      }),
  })
  .openapi({ required: ['effect_entries', 'version_group'] })
  .openapi('MoveEffectChange')

const MoveMetaAilmentSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('MoveMetaAilmentSummary')

const MoveMetaCategorySummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('MoveMetaCategorySummary')

const MoveMetaSchema = z
  .object({
    ailment: MoveMetaAilmentSummarySchema.openapi({
      description: 'The status ailment this move inflicts on its target.',
    }),
    category: MoveMetaCategorySummarySchema.openapi({
      description: 'The category of move this move falls under, e.g. damage or ailment.',
    }),
    min_hits: z
      .int()
      .min(2)
      .max(6)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The minimum number of times this move hits. Null if it always only hits once.',
      }),
    max_hits: z
      .int()
      .min(2)
      .max(10)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of times this move hits. Null if it always only hits once.',
      }),
    min_turns: z
      .int()
      .min(2)
      .max(15)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The minimum number of turns this move continues to take effect. Null if it always only lasts one turn.',
      }),
    max_turns: z
      .int()
      .min(2)
      .max(15)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of turns this move continues to take effect. Null if it always only lasts one turn.',
      }),
    drain: z
      .int()
      .min(-100)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'HP drain (if positive) or Recoil damage (if negative), in percent of damage done.',
      }),
    healing: z
      .int()
      .min(-100)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The amount of hp gained by the attacking Pokemon, in percent of it's maximum HP.",
      }),
    crit_rate: z
      .int()
      .min(0)
      .max(8)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Critical hit rate bonus.' }),
    ailment_chance: z
      .int()
      .min(0)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The likelihood this attack will cause an ailment.' }),
    flinch_chance: z
      .int()
      .min(0)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The likelihood this attack will cause the target Pokémon to flinch.',
      }),
    stat_chance: z
      .int()
      .min(0)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The likelihood this attack will cause a stat change in the target Pokémon.',
      }),
  })
  .openapi({ required: ['ailment', 'category'] })
  .openapi('MoveMeta')

const MoveNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('MoveName')

const MoveMetaStatChangeSchema = z
  .object({
    change: z.int().min(-6).max(6).openapi({ description: 'The amount of change.' }),
    stat: StatSummarySchema.openapi({ description: 'The stat being affected.' }),
  })
  .openapi({ required: ['change', 'stat'] })
  .openapi('MoveMetaStatChange')

const SuperContestEffectSummarySchema = z
  .object({
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['url'] })
  .openapi('SuperContestEffectSummary')

const MoveTargetSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('MoveTargetSummary')

const MoveFlavorTextSchema = z
  .object({
    flavor_text: z
      .string()
      .openapi({
        description: 'The localized flavor text for an api resource in a specific language.',
      }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
    version_group: VersionGroupSummarySchema.openapi({
      description: 'The version group that uses this flavor text.',
    }),
  })
  .openapi({ required: ['flavor_text', 'language', 'version_group'] })
  .openapi('MoveFlavorText')

const MoveDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    accuracy: z
      .int()
      .min(0)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The percent value of how likely this move is to be successful.' }),
    effect_chance: z
      .int()
      .nullable()
      .openapi({
        description: 'The percent value of how likely it is this moves effect will happen.',
      }),
    pp: z
      .int()
      .min(0)
      .max(40)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Power points. The number of times this move can be used.' }),
    priority: z
      .int()
      .min(-8)
      .max(8)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A value between -8 and 8. Sets the order in which moves are executed during battle. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Priority) for greater detail.',
      }),
    power: z
      .int()
      .min(0)
      .max(32767)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The base power of this move, or null if it has no fixed base power.',
      }),
    contest_combos: z
      .xor([MoveCombosSchema, z.null().nullable()])
      .openapi({
        readOnly: true,
        description: 'A detail of normal and super contest combos that require this move.',
      }),
    contest_type: z
      .xor([ContestTypeSummarySchema, z.null().nullable()])
      .openapi({
        description: 'The type of appeal this move gives a Pokémon when used in a contest.',
      }),
    contest_effect: z
      .xor([ContestEffectSummarySchema, z.null().nullable()])
      .openapi({ description: 'The effect the move has when used in a contest.' }),
    damage_class: MoveDamageClassSummarySchema.openapi({
      description: 'The type of damage the move inflicts on the target, e.g. physical.',
    }),
    effect_entries: z
      .array(MoveEffectEffectTextSchema)
      .openapi({
        readOnly: true,
        description: 'The effect of this move listed in different languages.',
      }),
    effect_changes: z
      .array(MoveEffectChangeSchema)
      .openapi({
        readOnly: true,
        description:
          'The list of previous effects this move has had across version groups of the games.',
      }),
    generation: GenerationSummarySchema.openapi({
      description: 'The generation in which this move was introduced.',
    }),
    meta: z
      .xor([MoveMetaSchema, z.null().nullable()])
      .openapi({ readOnly: true, description: 'Metadata about this move' }),
    names: z
      .array(MoveNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
    past_values: z
      .array(MoveChangeSchema)
      .openapi({
        readOnly: true,
        description: 'A list of move resource value changes across version groups of the game.',
      }),
    stat_changes: z
      .array(MoveMetaStatChangeSchema)
      .openapi({
        readOnly: true,
        description: 'A list of stats this moves effects and how much it effects them.',
      }),
    super_contest_effect: z
      .xor([SuperContestEffectSummarySchema, z.null().nullable()])
      .openapi({ description: 'The effect the move has when used in a super contest.' }),
    target: MoveTargetSummarySchema.openapi({
      description: 'The type of target that will receive the effects of the attack.',
    }),
    type: TypeSummarySchema.openapi({ description: 'The elemental type of this move.' }),
    machines: z
      .array(ItemMachineSchema)
      .openapi({ readOnly: true, description: 'A list of the machines that teach this move.' }),
    flavor_text_entries: z
      .array(MoveFlavorTextSchema)
      .openapi({
        readOnly: true,
        description: 'The flavor text of this move listed in different languages.',
      }),
    learned_by_pokemon: z
      .array(PokemonSummarySchema)
      .openapi({ readOnly: true, description: 'List of Pokemon that can learn the move' }),
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
  .object({
    description: z
      .string()
      .max(2000)
      .exactOptional()
      .openapi({
        description: 'The localized description for an API resource in a specific language.',
      }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language'] })
  .openapi('MoveLearnMethodDescription')

const MoveLearnMethodNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('MoveLearnMethodName')

const MoveLearnMethodDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    names: z
      .array(MoveLearnMethodNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
    descriptions: z
      .array(MoveLearnMethodDescriptionSchema)
      .openapi({
        readOnly: true,
        description: 'The description of this resource listed in different languages.',
      }),
    version_groups: z
      .array(VersionGroupSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of version groups where moves can be learned through this method.',
      }),
  })
  .openapi({ required: ['descriptions', 'id', 'name', 'names', 'version_groups'] })
  .openapi('MoveLearnMethodDetail')

const MoveLearnMethodSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('MoveLearnMethodSummary')

const MoveMetaAilmentNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('MoveMetaAilmentName')

const MoveMetaAilmentDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    moves: z
      .array(MoveSummarySchema)
      .openapi({ readOnly: true, description: 'A list of moves that cause this ailment.' }),
    names: z
      .array(MoveMetaAilmentNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
  })
  .openapi({ required: ['id', 'moves', 'name', 'names'] })
  .openapi('MoveMetaAilmentDetail')

const MoveMetaCategoryDescriptionSchema = z
  .object({
    description: z
      .string()
      .max(2000)
      .exactOptional()
      .openapi({
        description: 'The localized description for an API resource in a specific language.',
      }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language'] })
  .openapi('MoveMetaCategoryDescription')

const MoveMetaCategoryDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    descriptions: z
      .array(MoveMetaCategoryDescriptionSchema)
      .openapi({
        readOnly: true,
        description: 'The description of this resource listed in different languages.',
      }),
    moves: z
      .array(MoveSummarySchema)
      .openapi({ readOnly: true, description: 'A list of moves that fall into this category.' }),
  })
  .openapi({ required: ['descriptions', 'id', 'moves', 'name'] })
  .openapi('MoveMetaCategoryDetail')

const MoveStatChangeSchema = z
  .object({
    change: z
      .int()
      .min(-6)
      .max(6)
      .openapi({ description: 'The maximum amount of change to the referenced stat.' }),
    move: MoveSummarySchema.openapi({ description: 'The move causing the change.' }),
  })
  .openapi({ required: ['change', 'move'] })
  .openapi('MoveStatChange')

const MoveTargetDescriptionSchema = z
  .object({
    description: z
      .string()
      .max(2000)
      .exactOptional()
      .openapi({
        description: 'The localized description for an API resource in a specific language.',
      }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language'] })
  .openapi('MoveTargetDescription')

const MoveTargetNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('MoveTargetName')

const MoveTargetDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    descriptions: z
      .array(MoveTargetDescriptionSchema)
      .openapi({
        readOnly: true,
        description: 'The description of this resource listed in different languages.',
      }),
    moves: z
      .array(MoveSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of moves that that are directed at this target.',
      }),
    names: z
      .array(MoveTargetNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
  })
  .openapi({ required: ['descriptions', 'id', 'moves', 'name', 'names'] })
  .openapi('MoveTargetDetail')

const NatureBattleStylePreferenceSchema = z
  .object({
    low_hp_preference: z
      .int()
      .min(0)
      .max(100)
      .openapi({ description: 'Chance of using the move, in percent, if HP is under one half.' }),
    high_hp_preference: z
      .int()
      .min(0)
      .max(100)
      .openapi({ description: 'Chance of using the move, in percent, if HP is over one half.' }),
    move_battle_style: MoveBattleStyleSummarySchema.openapi({
      description: 'The move battle style.',
    }),
  })
  .openapi({ required: ['high_hp_preference', 'low_hp_preference', 'move_battle_style'] })
  .openapi('NatureBattleStylePreference')

const PokeathlonStatSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('PokeathlonStatSummary')

const NaturePokeathlonStatSchema = z
  .object({
    max_change: z.int().min(-2).max(2).openapi({ description: 'The amount of change.' }),
    pokeathlon_stat: PokeathlonStatSummarySchema.openapi({
      description: 'The stat being affected.',
    }),
  })
  .openapi({ required: ['max_change', 'pokeathlon_stat'] })
  .openapi('NaturePokeathlonStat')

const NatureNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('NatureName')

const NatureDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    decreased_stat: z
      .xor([StatSummarySchema, z.null().nullable()])
      .openapi({ description: 'The stat decreased by 10% in Pokémon with this nature.' }),
    increased_stat: z
      .xor([StatSummarySchema, z.null().nullable()])
      .openapi({ description: 'The stat increased by 10% in Pokémon with this nature.' }),
    likes_flavor: z
      .xor([BerryFlavorSummarySchema, z.null().nullable()])
      .openapi({ description: 'The flavor liked by Pokémon with this nature.' }),
    hates_flavor: z
      .xor([BerryFlavorSummarySchema, z.null().nullable()])
      .openapi({ description: 'The flavor hated by Pokémon with this nature.' }),
    pokeathlon_stat_changes: z
      .array(NaturePokeathlonStatSchema)
      .openapi({
        readOnly: true,
        description: 'A list of Pokéathlon stats this nature effects and how much it effects them.',
      }),
    move_battle_style_preferences: z
      .array(NatureBattleStylePreferenceSchema)
      .openapi({
        readOnly: true,
        description:
          'A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent.',
      }),
    names: z
      .array(NatureNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
  })
  .openapi({
    required: [
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
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/ability/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/ability/?offset=0&limit=20',
      }),
    results: z
      .array(AbilitySummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedAbilitySummaryList')

const PaginatedBerryFirmnessSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/berry-firmness/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/berry-firmness/?offset=0&limit=20',
      }),
    results: z
      .array(BerryFirmnessSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedBerryFirmnessSummaryList')

const PaginatedBerryFlavorSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/berry-flavor/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/berry-flavor/?offset=0&limit=20',
      }),
    results: z
      .array(BerryFlavorSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedBerryFlavorSummaryList')

const PaginatedBerrySummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/berry/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/berry/?offset=0&limit=20',
      }),
    results: z
      .array(BerrySummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedBerrySummaryList')

const PaginatedCharacteristicSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/characteristic/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/characteristic/?offset=0&limit=20',
      }),
    results: z
      .array(CharacteristicSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedCharacteristicSummaryList')

const PaginatedContestEffectSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/contest-effect/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/contest-effect/?offset=0&limit=20',
      }),
    results: z
      .array(ContestEffectSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedContestEffectSummaryList')

const PaginatedContestTypeSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/contest-type/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/contest-type/?offset=0&limit=20',
      }),
    results: z
      .array(ContestTypeSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedContestTypeSummaryList')

const PaginatedCurrencySummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/currency/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/currency/?offset=0&limit=20',
      }),
    results: z
      .array(CurrencySummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedCurrencySummaryList')

const PaginatedEggGroupSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/egg-group/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/egg-group/?offset=0&limit=20',
      }),
    results: z
      .array(EggGroupSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedEggGroupSummaryList')

const PaginatedEncounterConditionSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/encounter-condition/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/encounter-condition/?offset=0&limit=20',
      }),
    results: z
      .array(EncounterConditionSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedEncounterConditionSummaryList')

const PaginatedEncounterConditionValueSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/encounter-condition-value/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/encounter-condition-value/?offset=0&limit=20',
      }),
    results: z
      .array(EncounterConditionValueSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedEncounterConditionValueSummaryList')

const PaginatedEncounterMethodSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/encounter-method/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/encounter-method/?offset=0&limit=20',
      }),
    results: z
      .array(EncounterMethodSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedEncounterMethodSummaryList')

const PaginatedEvolutionChainSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/evolution-chain/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/evolution-chain/?offset=0&limit=20',
      }),
    results: z
      .array(EvolutionChainSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedEvolutionChainSummaryList')

const PaginatedEvolutionTriggerSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/evolution-trigger/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/evolution-trigger/?offset=0&limit=20',
      }),
    results: z
      .array(EvolutionTriggerSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedEvolutionTriggerSummaryList')

const PaginatedEvolutionVariableSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/evolution-variable/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/evolution-variable/?offset=0&limit=20',
      }),
    results: z
      .array(EvolutionVariableSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedEvolutionVariableSummaryList')

const PaginatedGenderSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/gender/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/gender/?offset=0&limit=20',
      }),
    results: z
      .array(GenderSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedGenderSummaryList')

const PaginatedGenerationSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/generation/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/generation/?offset=0&limit=20',
      }),
    results: z
      .array(GenerationSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedGenerationSummaryList')

const PaginatedGrowthRateSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/growth-rate/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/growth-rate/?offset=0&limit=20',
      }),
    results: z
      .array(GrowthRateSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedGrowthRateSummaryList')

const PaginatedItemAttributeSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/item-attribute/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/item-attribute/?offset=0&limit=20',
      }),
    results: z
      .array(ItemAttributeSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedItemAttributeSummaryList')

const PaginatedItemCategorySummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/item-category/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/item-category/?offset=0&limit=20',
      }),
    results: z
      .array(ItemCategorySummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedItemCategorySummaryList')

const PaginatedItemFlingEffectSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/item-fling-effect/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/item-fling-effect/?offset=0&limit=20',
      }),
    results: z
      .array(ItemFlingEffectSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedItemFlingEffectSummaryList')

const PaginatedItemPocketSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/item-pocket/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/item-pocket/?offset=0&limit=20',
      }),
    results: z
      .array(ItemPocketSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedItemPocketSummaryList')

const PaginatedItemSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/item/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/item/?offset=0&limit=20',
      }),
    results: z
      .array(ItemSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedItemSummaryList')

const PaginatedLanguageSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/language/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/language/?offset=0&limit=20',
      }),
    results: z
      .array(LanguageSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedLanguageSummaryList')

const PaginatedLocationAreaSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/location-area/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/location-area/?offset=0&limit=20',
      }),
    results: z
      .array(LocationAreaSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedLocationAreaSummaryList')

const PaginatedLocationSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/location/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/location/?offset=0&limit=20',
      }),
    results: z
      .array(LocationSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedLocationSummaryList')

const PaginatedMachineSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/machine/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/machine/?offset=0&limit=20',
      }),
    results: z
      .array(MachineSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedMachineSummaryList')

const PaginatedMoveBattleStyleSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/move-battle-style/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/move-battle-style/?offset=0&limit=20',
      }),
    results: z
      .array(MoveBattleStyleSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedMoveBattleStyleSummaryList')

const PaginatedMoveDamageClassSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/move-damage-class/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/move-damage-class/?offset=0&limit=20',
      }),
    results: z
      .array(MoveDamageClassSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedMoveDamageClassSummaryList')

const PaginatedMoveLearnMethodSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/move-learn-method/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/move-learn-method/?offset=0&limit=20',
      }),
    results: z
      .array(MoveLearnMethodSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedMoveLearnMethodSummaryList')

const PaginatedMoveMetaAilmentSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/move-ailment/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/move-ailment/?offset=0&limit=20',
      }),
    results: z
      .array(MoveMetaAilmentSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedMoveMetaAilmentSummaryList')

const PaginatedMoveMetaCategorySummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/move-category/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/move-category/?offset=0&limit=20',
      }),
    results: z
      .array(MoveMetaCategorySummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedMoveMetaCategorySummaryList')

const PaginatedMoveSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/move/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/move/?offset=0&limit=20',
      }),
    results: z
      .array(MoveSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedMoveSummaryList')

const PaginatedMoveTargetSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/move-target/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/move-target/?offset=0&limit=20',
      }),
    results: z
      .array(MoveTargetSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedMoveTargetSummaryList')

const PaginatedNatureSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/nature/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/nature/?offset=0&limit=20',
      }),
    results: z
      .array(NatureSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedNatureSummaryList')

const PalParkAreaSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('PalParkAreaSummary')

const PaginatedPalParkAreaSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/pal-park-area/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/pal-park-area/?offset=0&limit=20',
      }),
    results: z
      .array(PalParkAreaSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedPalParkAreaSummaryList')

const PaginatedPokeathlonStatSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/pokeathlon-stat/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/pokeathlon-stat/?offset=0&limit=20',
      }),
    results: z
      .array(PokeathlonStatSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedPokeathlonStatSummaryList')

const PokedexSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('PokedexSummary')

const PaginatedPokedexSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/pokedex/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/pokedex/?offset=0&limit=20',
      }),
    results: z
      .array(PokedexSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedPokedexSummaryList')

const PokemonColorSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('PokemonColorSummary')

const PaginatedPokemonColorSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/pokemon-color/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/pokemon-color/?offset=0&limit=20',
      }),
    results: z
      .array(PokemonColorSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedPokemonColorSummaryList')

const PaginatedPokemonFormSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/pokemon-form/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/pokemon-form/?offset=0&limit=20',
      }),
    results: z
      .array(PokemonFormSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedPokemonFormSummaryList')

const PokemonHabitatSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('PokemonHabitatSummary')

const PaginatedPokemonHabitatSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/pokemon-habitat/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/pokemon-habitat/?offset=0&limit=20',
      }),
    results: z
      .array(PokemonHabitatSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedPokemonHabitatSummaryList')

const PokemonShapeSummarySchema = z
  .object({
    name: z.string().max(200).openapi({ description: 'The name of the referenced resource.' }),
    url: z.url().openapi({ readOnly: true, description: 'The URL of the referenced resource.' }),
  })
  .openapi({ required: ['name', 'url'] })
  .openapi('PokemonShapeSummary')

const PaginatedPokemonShapeSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/pokemon-shape/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/pokemon-shape/?offset=0&limit=20',
      }),
    results: z
      .array(PokemonShapeSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedPokemonShapeSummaryList')

const PaginatedPokemonSpeciesSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/pokemon-species/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=20',
      }),
    results: z
      .array(PokemonSpeciesSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedPokemonSpeciesSummaryList')

const PaginatedPokemonSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/pokemon/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20',
      }),
    results: z
      .array(PokemonSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedPokemonSummaryList')

const PaginatedRegionSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/region/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/region/?offset=0&limit=20',
      }),
    results: z
      .array(RegionSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedRegionSummaryList')

const PaginatedStatSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/stat/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/stat/?offset=0&limit=20',
      }),
    results: z
      .array(StatSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedStatSummaryList')

const PaginatedSuperContestEffectSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/super-contest-effect/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/super-contest-effect/?offset=0&limit=20',
      }),
    results: z
      .array(SuperContestEffectSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedSuperContestEffectSummaryList')

const PaginatedTypeSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/type/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/type/?offset=0&limit=20',
      }),
    results: z
      .array(TypeSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedTypeSummaryList')

const PaginatedVersionGroupSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/version-group/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/version-group/?offset=0&limit=20',
      }),
    results: z
      .array(VersionGroupSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedVersionGroupSummaryList')

const PaginatedVersionSummaryListSchema = z
  .object({
    count: z
      .int()
      .openapi({
        example: 100,
        description: 'The total number of resources available from this API.',
      }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL for the next page in the list, or null if there is no next page.',
        example: 'https://pokeapi.co/api/v2/version/?offset=40&limit=20',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL for the previous page in the list, or null if there is no previous page.',
        example: 'https://pokeapi.co/api/v2/version/?offset=0&limit=20',
      }),
    results: z
      .array(VersionSummarySchema)
      .openapi({ description: 'A list of API resources on this page.' }),
  })
  .openapi({ required: ['count', 'results'] })
  .openapi('PaginatedVersionSummaryList')

const PalParkAreaNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('PalParkAreaName')

const PalParkEncounterSchema = z
  .object({
    base_score: z
      .int()
      .min(0)
      .max(32767)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The base score given to the player when this Pokémon is caught during a pal park run.',
      }),
    rate: z
      .int()
      .min(0)
      .max(32767)
      .openapi({
        description: 'The base rate for encountering this Pokémon in this pal park area.',
      }),
    pokemon_species: PokemonSpeciesSummarySchema.openapi({
      description: 'The Pokémon species being encountered.',
    }),
  })
  .openapi({ required: ['pokemon_species', 'rate'] })
  .openapi('PalParkEncounter')

const PalParkAreaDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    names: z
      .array(PalParkAreaNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
    pokemon_encounters: z
      .array(PalParkEncounterSchema)
      .openapi({
        readOnly: true,
        description: 'A list of Pokémon encountered in thi pal park area along with details.',
      }),
  })
  .openapi({ required: ['id', 'name', 'names', 'pokemon_encounters'] })
  .openapi('PalParkAreaDetail')

const PokeapiMetaResponseSchema = z
  .object({
    deploy_date: z
      .string()
      .nullable()
      .openapi({ description: 'The deployment time as a Unix timestamp string.' }),
    hash: z
      .string()
      .nullable()
      .openapi({ description: 'The source commit hash used for this deployment.' }),
    tag: z
      .string()
      .nullable()
      .openapi({ description: 'The deployment tag, or null if the deployment has no tag.' }),
  })
  .openapi({ required: ['deploy_date', 'hash', 'tag'] })
  .openapi('PokeapiMetaResponse')

const PokeathlonStatAffectingNatureSchema = z
  .object({
    max_change: z
      .int()
      .min(-2)
      .max(2)
      .openapi({ description: 'The maximum amount of change to the referenced Pokéathlon stat.' }),
    nature: NatureSummarySchema.openapi({ description: 'The nature causing the change.' }),
  })
  .openapi({ required: ['max_change', 'nature'] })
  .openapi('PokeathlonStatAffectingNature')

const PokeathlonStatAffectingNaturesSchema = z
  .object({
    increase: z
      .array(PokeathlonStatAffectingNatureSchema)
      .openapi({
        description: 'A list of natures and how they change the referenced Pokéathlon stat.',
      }),
    decrease: z
      .array(PokeathlonStatAffectingNatureSchema)
      .openapi({
        description: 'A list of natures and how they change the referenced Pokéathlon stat.',
      }),
  })
  .openapi({ required: ['decrease', 'increase'] })
  .openapi('PokeathlonStatAffectingNatures')

const PokeathlonStatNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('PokeathlonStatName')

const PokeathlonStatDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    affecting_natures: PokeathlonStatAffectingNaturesSchema.openapi({
      readOnly: true,
      description:
        'A detail of natures which affect this Pokéathlon stat positively or negatively.',
    }),
    names: z
      .array(PokeathlonStatNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
  })
  .openapi({ required: ['affecting_natures', 'id', 'name', 'names'] })
  .openapi('PokeathlonStatDetail')

const PokedexDescriptionSchema = z
  .object({
    description: z
      .string()
      .max(2000)
      .exactOptional()
      .openapi({
        description: 'The localized description for an API resource in a specific language.',
      }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language'] })
  .openapi('PokedexDescription')

const PokedexNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('PokedexName')

const PokemonDexNumberSchema = z
  .object({
    entry_number: z
      .int()
      .openapi({ description: 'The index of this Pokémon species entry within the Pokédex.' }),
    pokemon_species: PokemonSpeciesSummarySchema.openapi({
      description: 'The Pokémon species being encountered.',
    }),
  })
  .openapi({ required: ['entry_number', 'pokemon_species'] })
  .openapi('PokemonDexNumber')

const PokedexDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    is_main_series: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not this Pokédex originated in the main series of the video games.',
      }),
    descriptions: z
      .array(PokedexDescriptionSchema)
      .openapi({
        readOnly: true,
        description: 'The description of this resource listed in different languages.',
      }),
    names: z
      .array(PokedexNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
    pokemon_entries: z
      .array(PokemonDexNumberSchema)
      .openapi({
        readOnly: true,
        description: 'A list of Pokémon catalogued in this Pokédex and their indexes.',
      }),
    region: z
      .xor([RegionSummarySchema, z.null().nullable()])
      .openapi({ description: 'The region this Pokédex catalogues Pokémon for.' }),
    version_groups: z
      .array(VersionGroupSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of version groups this Pokédex is relevant to.',
      }),
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
    is_hidden: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not this is a hidden ability.' }),
    slot: z
      .int()
      .min(1)
      .max(3)
      .openapi({ description: 'The slot this ability occupies in this Pokémon species.' }),
    ability: AbilitySummarySchema.openapi({ description: 'The ability the Pokémon may have.' }),
  })
  .openapi({ required: ['ability', 'slot'] })
  .openapi('PokemonAbility')

const PokemonAbilityPastSchema = z
  .object({
    is_hidden: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not this is a hidden ability.' }),
    slot: z
      .int()
      .min(1)
      .max(3)
      .openapi({ description: 'The slot this ability occupies in this Pokémon species.' }),
    ability: z
      .xor([AbilitySummarySchema, z.null().nullable()])
      .openapi({ description: 'The ability the Pokémon may have.' }),
  })
  .openapi({ required: ['ability', 'slot'] })
  .openapi('PokemonAbilityPast')

const PokemonColorNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('PokemonColorName')

const PokemonColorDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    names: z
      .array(PokemonColorNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
    pokemon_species: z
      .array(PokemonSpeciesSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of the Pokémon species that have this color.',
      }),
  })
  .openapi({ required: ['id', 'name', 'names', 'pokemon_species'] })
  .openapi('PokemonColorDetail')

const PokemonCriesSchema = z
  .object({
    latest: z
      .string()
      .nullable()
      .openapi({ description: "The latest depiction of this Pokémon's cry." }),
    legacy: z
      .string()
      .nullable()
      .openapi({ description: "The legacy depiction of this Pokémon's cry." }),
  })
  .openapi({ required: ['latest', 'legacy'] })
  .openapi('PokemonCries')

const PokemonPastAbilitySchema = z
  .object({
    abilities: z
      .array(PokemonAbilityPastSchema)
      .openapi({
        description:
          'The abilities the referenced pokémon had up to and including the listed generation. If null, the slot was previously empty.',
      }),
    generation: GenerationSummarySchema.openapi({
      description: 'The last generation in which the referenced pokémon had the listed abilities.',
    }),
  })
  .openapi({ required: ['abilities', 'generation'] })
  .openapi('PokemonPastAbility')

const PokemonGameIndexSchema = z
  .object({
    game_index: z
      .int()
      .min(0)
      .max(2147483647)
      .openapi({ description: 'The internal id of an API resource within game data.' }),
    version: VersionSummarySchema.openapi({
      description: 'The version relevent to this game index.',
    }),
  })
  .openapi({ required: ['game_index', 'version'] })
  .openapi('PokemonGameIndex')

const PokemonHeldItemSummarySchema = z
  .object({
    item: ItemSummarySchema.openapi({ description: 'The item the referenced Pokémon holds.' }),
    version_details: z
      .array(PokemonHeldItemVersionSchema)
      .openapi({ description: 'The details of the different versions in which the item is held.' }),
  })
  .openapi({ required: ['item', 'version_details'] })
  .openapi('PokemonHeldItemSummary')

const PokemonMoveVersionGroupSchema = z
  .object({
    level_learned_at: z.int().openapi({ description: 'The minimum level to learn the move.' }),
    move_learn_method: MoveLearnMethodSummarySchema.openapi({
      description: 'The method by which the move is learned.',
    }),
    version_group: VersionGroupSummarySchema.openapi({
      description: 'The version group in which the move is learned.',
    }),
    order: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Order by which the pokemon will learn the move. A newly learnt move will replace the move with lowest order.',
      }),
    enhancement_level: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The level at which move styles unlock in Pokémon Legends: Arceus or Plus Moves unlock in Pokémon Legends: Z-A. Null when no natural unlock level is recorded.',
      }),
  })
  .openapi({ required: ['level_learned_at', 'move_learn_method', 'version_group'] })
  .openapi('PokemonMoveVersionGroup')

const PokemonMoveSchema = z
  .object({
    move: MoveSummarySchema.openapi({ description: 'The move the Pokémon can learn.' }),
    version_group_details: z
      .array(PokemonMoveVersionGroupSchema)
      .openapi({
        description: 'The details of the version in which the Pokémon can learn the move.',
      }),
  })
  .openapi({ required: ['move', 'version_group_details'] })
  .openapi('PokemonMove')

const PokemonSpritesOtherDreamWorldSchema = z
  .object({
    front_default: z
      .string()
      .nullable()
      .openapi({
        description:
          'The URL of the default Pokémon Dream World front image, or null if unavailable.',
      }),
    front_female: z
      .string()
      .nullable()
      .openapi({
        description:
          'The URL of the female Pokémon Dream World front image, or null if unavailable.',
      }),
  })
  .openapi({ required: ['front_default', 'front_female'] })
  .openapi('PokemonSpritesOtherDreamWorld')

const PokemonSpritesOtherHomeSchema = z
  .object({
    front_default: z
      .string()
      .nullable()
      .openapi({
        description: 'The URL of the default Pokémon HOME front image, or null if unavailable.',
      }),
    front_female: z
      .string()
      .nullable()
      .openapi({
        description: 'The URL of the female Pokémon HOME front image, or null if unavailable.',
      }),
    front_shiny: z
      .string()
      .nullable()
      .openapi({
        description: 'The URL of the shiny Pokémon HOME front image, or null if unavailable.',
      }),
    front_shiny_female: z
      .string()
      .nullable()
      .openapi({
        description:
          'The URL of the shiny female Pokémon HOME front image, or null if unavailable.',
      }),
  })
  .openapi({ required: ['front_default', 'front_female', 'front_shiny', 'front_shiny_female'] })
  .openapi('PokemonSpritesOtherHome')

const PokemonSpritesOtherShowdownSchema = z
  .object({
    front_default: z
      .string()
      .nullable()
      .openapi({
        description: 'The URL of the default Pokémon Showdown front image, or null if unavailable.',
      }),
    front_female: z
      .string()
      .nullable()
      .openapi({
        description: 'The URL of the female Pokémon Showdown front image, or null if unavailable.',
      }),
    front_shiny: z
      .string()
      .nullable()
      .openapi({
        description: 'The URL of the shiny Pokémon Showdown front image, or null if unavailable.',
      }),
    front_shiny_female: z
      .string()
      .nullable()
      .openapi({
        description:
          'The URL of the shiny female Pokémon Showdown front image, or null if unavailable.',
      }),
    back_default: z
      .string()
      .nullable()
      .openapi({
        description: 'The URL of the default Pokémon Showdown back image, or null if unavailable.',
      }),
    back_female: z
      .string()
      .nullable()
      .openapi({
        description: 'The URL of the female Pokémon Showdown back image, or null if unavailable.',
      }),
    back_shiny: z
      .string()
      .nullable()
      .openapi({
        description: 'The URL of the shiny Pokémon Showdown back image, or null if unavailable.',
      }),
    back_shiny_female: z
      .string()
      .nullable()
      .openapi({
        description:
          'The URL of the shiny female Pokémon Showdown back image, or null if unavailable.',
      }),
  })
  .openapi({
    required: [
      'back_default',
      'back_female',
      'back_shiny',
      'back_shiny_female',
      'front_default',
      'front_female',
      'front_shiny',
      'front_shiny_female',
    ],
  })
  .openapi('PokemonSpritesOtherShowdown')

const PokemonSpritesOtherOfficialArtworkSchema = z
  .object({
    front_default: z
      .string()
      .nullable()
      .openapi({
        description: 'The URL of the default front official artwork, or null if unavailable.',
      }),
    front_shiny: z
      .string()
      .nullable()
      .openapi({
        description: 'The URL of the shiny front official artwork, or null if unavailable.',
      }),
    versions: z
      .record(z.string(), z.record(z.string(), z.any()))
      .exactOptional()
      .openapi({
        description:
          'Additional official artwork grouped by version. Available keys vary by resource.',
      }),
  })
  .openapi({ required: ['front_default', 'front_shiny'] })
  .openapi('PokemonSpritesOtherOfficialArtwork')

const PokemonSpritesOtherSchema = z
  .object({
    dream_world: PokemonSpritesOtherDreamWorldSchema.exactOptional().openapi({
      description: 'Pokémon Dream World artwork URLs.',
    }),
    home: PokemonSpritesOtherHomeSchema.exactOptional().openapi({
      description: 'Pokémon HOME sprite URLs.',
    }),
    showdown: PokemonSpritesOtherShowdownSchema.exactOptional().openapi({
      description: 'Pokémon Showdown sprite URLs.',
    }),
    'official-artwork': PokemonSpritesOtherOfficialArtworkSchema.exactOptional().openapi({
      description:
        'Official Pokémon artwork URLs, including shiny artwork and version-specific variants.',
    }),
  })
  .openapi({ required: [] })
  .openapi('PokemonSpritesOther')

const PokemonSpritesSchema = z
  .object({
    front_default: z
      .string()
      .nullable()
      .openapi({ description: 'The default depiction of this Pokémon from the front in battle.' }),
    front_shiny: z
      .string()
      .nullable()
      .openapi({ description: 'The shiny depiction of this Pokémon from the front in battle.' }),
    front_female: z
      .string()
      .nullable()
      .openapi({ description: 'The female depiction of this Pokémon from the front in battle.' }),
    front_shiny_female: z
      .string()
      .nullable()
      .openapi({
        description: 'The shiny female depiction of this Pokémon from the front in battle.',
      }),
    back_default: z
      .string()
      .nullable()
      .openapi({ description: 'The default depiction of this Pokémon from the back in battle.' }),
    back_shiny: z
      .string()
      .nullable()
      .openapi({ description: 'The shiny depiction of this Pokémon from the back in battle.' }),
    back_female: z
      .string()
      .nullable()
      .openapi({ description: 'The female depiction of this Pokémon from the back in battle.' }),
    back_shiny_female: z
      .string()
      .nullable()
      .openapi({
        description: 'The shiny female depiction of this Pokémon from the back in battle.',
      }),
    other: PokemonSpritesOtherSchema.exactOptional().openapi({
      description:
        'Additional sprites grouped by source, such as official artwork, HOME, and Showdown. Available keys vary by resource.',
    }),
    versions: z
      .record(z.string(), z.record(z.string(), z.any()))
      .exactOptional()
      .openapi({
        description: 'Sprites grouped by generation and game. Available keys vary by resource.',
      }),
  })
  .openapi({
    required: [
      'back_default',
      'back_female',
      'back_shiny',
      'back_shiny_female',
      'front_default',
      'front_female',
      'front_shiny',
      'front_shiny_female',
    ],
  })
  .openapi('PokemonSprites')

const PokemonStatSchema = z
  .object({
    base_stat: z.int().min(1).max(255).openapi({ description: 'The base value of the stat.' }),
    effort: z
      .int()
      .min(0)
      .max(255)
      .openapi({ description: 'The effort points (EV) the Pokémon has in the stat.' }),
    stat: StatSummarySchema.openapi({ description: 'The stat the Pokémon has.' }),
  })
  .openapi({ required: ['base_stat', 'effort', 'stat'] })
  .openapi('PokemonStat')

const PokemonPastStatSchema = z
  .object({
    generation: GenerationSummarySchema.openapi({
      description: 'The last generation in which the referenced pokémon had the listed stats.',
    }),
    stats: z
      .array(PokemonStatSchema)
      .openapi({
        description: 'The stat the Pokémon had up to and including the listed generation.',
      }),
  })
  .openapi({ required: ['generation', 'stats'] })
  .openapi('PokemonPastStat')

const PokemonTypeSchema = z
  .object({
    slot: z
      .int()
      .min(1)
      .max(2)
      .openapi({ description: "The order the Pokémon's types are listed in." }),
    type: TypeSummarySchema.openapi({ description: 'The type the referenced Pokémon has.' }),
  })
  .openapi({ required: ['slot', 'type'] })
  .openapi('PokemonType')

const PokemonPastTypeSchema = z
  .object({
    generation: GenerationSummarySchema.openapi({
      description: 'The last generation in which the referenced pokémon had the listed types.',
    }),
    types: z
      .array(PokemonTypeSchema)
      .openapi({
        description:
          'The types the referenced pokémon had up to and including the listed generation.',
      }),
  })
  .openapi({ required: ['generation', 'types'] })
  .openapi('PokemonPastType')

const PokemonDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    base_experience: z
      .int()
      .min(0)
      .max(32767)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The base experience gained for defeating this Pokémon.' }),
    height: z
      .int()
      .min(0)
      .max(32767)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The height of this Pokémon in decimetres.' }),
    is_default: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Set for exactly one Pokémon used as the default for each species.',
      }),
    order: z
      .int()
      .min(-1)
      .max(32767)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Order for sorting. Almost national order, except families are grouped together.',
      }),
    weight: z
      .int()
      .min(0)
      .max(32767)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The weight of this Pokémon in hectograms.' }),
    abilities: z
      .array(PokemonAbilitySchema)
      .openapi({
        readOnly: true,
        description: 'A list of abilities this Pokémon could potentially have.',
      }),
    past_abilities: z
      .array(PokemonPastAbilitySchema)
      .openapi({
        readOnly: true,
        description: 'A list of details showing abilities this pokémon had in previous generations',
      }),
    forms: z
      .array(PokemonFormSummarySchema)
      .openapi({ readOnly: true, description: 'A list of forms this Pokémon can take on.' }),
    game_indices: z
      .array(PokemonGameIndexSchema)
      .openapi({
        readOnly: true,
        description: 'A list of game indices relevent to Pokémon item by generation.',
      }),
    held_items: z
      .array(PokemonHeldItemSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of items this Pokémon may be holding when encountered.',
      }),
    location_area_encounters: z
      .string()
      .openapi({
        readOnly: true,
        description:
          'A link to a list of location areas, as well as encounter details pertaining to specific versions.',
      }),
    moves: z
      .array(PokemonMoveSchema)
      .openapi({
        readOnly: true,
        description:
          'A list of moves along with learn methods and level details pertaining to specific version groups.',
      }),
    species: PokemonSpeciesSummarySchema.openapi({
      description: 'The species this Pokémon belongs to.',
    }),
    sprites: PokemonSpritesSchema.openapi({
      readOnly: true,
      description:
        "A set of sprites used to depict this Pokémon in the game. A visual representation of the various sprites can be found at <a href='https://github.com/PokeAPI/sprites#sprites'>PokeAPI/sprites</a>",
    }),
    cries: PokemonCriesSchema.openapi({
      readOnly: true,
      description:
        "A set of cries used to depict this Pokémon in the game. A visual representation of the various cries can be found at <a href='https://github.com/PokeAPI/cries#cries'>PokeAPI/cries</a>",
    }),
    stats: z
      .array(PokemonStatSchema)
      .openapi({ readOnly: true, description: 'A list of base stat values for this Pokémon.' }),
    past_stats: z
      .array(PokemonPastStatSchema)
      .openapi({
        readOnly: true,
        description: 'A list of details showing stats this pokémon had in previous generations',
      }),
    types: z
      .array(PokemonTypeSchema)
      .openapi({
        readOnly: true,
        description: 'A list of details showing types this Pokémon has.',
      }),
    past_types: z
      .array(PokemonPastTypeSchema)
      .openapi({
        readOnly: true,
        description: 'A list of details showing types this pokémon had in previous generations',
      }),
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
  .object({
    entry_number: z.int().openapi({ description: 'The index number within the Pokédex.' }),
    pokedex: PokedexSummarySchema.openapi({
      description: 'The Pokédex the referenced Pokémon species can be found in.',
    }),
  })
  .openapi({ required: ['entry_number', 'pokedex'] })
  .openapi('PokemonDexEntry')

const PokemonEncounterDetailResponseSchema = z
  .object({
    chance: z.int().openapi({ description: 'Percent chance that this encounter will occur.' }),
    condition_values: z
      .array(EncounterConditionValueSummarySchema)
      .openapi({
        description:
          'A list of condition values that must be in effect for this encounter to occur.',
      }),
    max_level: z
      .int()
      .openapi({ description: 'The highest level the Pokémon could be encountered at.' }),
    method: EncounterMethodSummarySchema.openapi({
      description: 'The method by which this encounter happens.',
    }),
    min_level: z
      .int()
      .openapi({ description: 'The lowest level the Pokémon could be encountered at.' }),
  })
  .openapi({ required: ['chance', 'condition_values', 'max_level', 'method', 'min_level'] })
  .openapi('PokemonEncounterDetailResponse')

const PokemonEncounterVersionDetailResponseSchema = z
  .object({
    version: VersionSummarySchema.openapi({
      description: 'The game version this encounter happens in.',
    }),
    max_chance: z
      .int()
      .openapi({ description: 'The total percentage of all encounter potential.' }),
    encounter_details: z
      .array(PokemonEncounterDetailResponseSchema)
      .openapi({ description: 'A list of encounters and their specifics.' }),
  })
  .openapi({ required: ['encounter_details', 'max_chance', 'version'] })
  .openapi('PokemonEncounterVersionDetailResponse')

const PokemonEncounterResponseSchema = z
  .object({
    location_area: LocationAreaSummarySchema.openapi({
      description: 'The location area the referenced Pokémon can be encountered in.',
    }),
    version_details: z
      .array(PokemonEncounterVersionDetailResponseSchema)
      .openapi({
        description:
          'A list of versions and encounters with the referenced Pokémon that might happen.',
      }),
  })
  .openapi({ required: ['location_area', 'version_details'] })
  .openapi('PokemonEncounterResponse')

const PokemonFormSpritesSchema = z
  .object({
    front_default: z
      .string()
      .nullable()
      .openapi({ description: 'The default depiction of this Pokémon from the front in battle.' }),
    front_shiny: z
      .string()
      .nullable()
      .openapi({ description: 'The shiny depiction of this Pokémon from the front in battle.' }),
    front_female: z
      .string()
      .nullable()
      .openapi({ description: 'The female depiction of this Pokémon from the front in battle.' }),
    front_shiny_female: z
      .string()
      .nullable()
      .openapi({
        description: 'The shiny female depiction of this Pokémon from the front in battle.',
      }),
    back_default: z
      .string()
      .nullable()
      .openapi({ description: 'The default depiction of this Pokémon from the back in battle.' }),
    back_shiny: z
      .string()
      .nullable()
      .openapi({ description: 'The shiny depiction of this Pokémon from the back in battle.' }),
    back_female: z
      .string()
      .nullable()
      .openapi({ description: 'The female depiction of this Pokémon from the back in battle.' }),
    back_shiny_female: z
      .string()
      .nullable()
      .openapi({
        description: 'The shiny female depiction of this Pokémon from the back in battle.',
      }),
    other: PokemonSpritesOtherSchema.exactOptional().openapi({
      description:
        'Additional sprites grouped by source, such as official artwork, HOME, and Showdown. Available keys vary by resource.',
    }),
    versions: z
      .record(z.string(), z.record(z.string(), z.any()))
      .exactOptional()
      .openapi({
        description: 'Sprites grouped by generation and game. Available keys vary by resource.',
      }),
  })
  .openapi({
    required: [
      'back_default',
      'back_female',
      'back_shiny',
      'back_shiny_female',
      'front_default',
      'front_female',
      'front_shiny',
      'front_shiny_female',
    ],
  })
  .openapi('PokemonFormSprites')

const PokemonFormNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('PokemonFormName')

const PokemonFormTypeSchema = z
  .object({
    slot: z
      .int()
      .min(1)
      .max(2)
      .openapi({ description: "The order the Pokémon's types are listed in." }),
    type: TypeSummarySchema.openapi({ description: 'The type the referenced Form has.' }),
  })
  .openapi({ required: ['slot', 'type'] })
  .openapi('PokemonFormType')

const PokemonFormTriggerConditionSchema = z
  .object({
    trigger: z.string().openapi({ description: 'The trigger for this form change.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the required item, ability, or move. Only present for a resource-based trigger.',
      }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'The URL of the required item, ability, or move. Only present for a resource-based trigger.',
      }),
    base_form: PokemonFormSummarySchema.exactOptional().openapi({
      description: 'The required base form. Only present when the trigger specifies one.',
    }),
  })
  .openapi({ required: ['trigger'] })
  .openapi('PokemonFormTriggerCondition')

const PokemonFormFlavorTextSchema = z
  .object({
    flavor_text: z
      .string()
      .openapi({
        description:
          "The localized flavor text for an API resource in a specific language. Note that this text is left unprocessed as it is found in game files. This means that it contains special characters that one might want to replace with their visible decodable version. Please check out this <a href='https://github.com/veekun/pokedex/issues/218#issuecomment-339841781' >issue</a> to find out more. ",
      }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
    version: VersionSummarySchema.openapi({
      description: 'The game version this flavor text is extracted from.',
    }),
  })
  .openapi({ required: ['flavor_text', 'language', 'version'] })
  .openapi('PokemonFormFlavorText')

const PokemonFormDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    order: z
      .int()
      .min(-1)
      .max(32767)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The order in which forms should be sorted within all forms. Multiple forms may have equal order, in which case they should fall back on sorting by name.',
      }),
    form_order: z
      .int()
      .min(0)
      .max(32767)
      .nullable()
      .exactOptional()
      .openapi({
        description: "The order in which forms should be sorted within a species' forms.",
      }),
    is_default: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True for exactly one form used as the default for each Pokémon.' }),
    is_battle_only: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not this form can only happen during battle.' }),
    is_mega: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not this form requires mega evolution.' }),
    form_name: z.string().max(30).openapi({ description: 'The name of this form.' }),
    pokemon: PokemonSummarySchema.openapi({
      description: 'The Pokémon that can take on this form.',
    }),
    sprites: PokemonFormSpritesSchema.openapi({
      readOnly: true,
      description: 'A set of sprites used to depict this Pokémon form in the game.',
    }),
    version_group: VersionGroupSummarySchema.openapi({
      description: 'The version group this Pokémon form was introduced in.',
    }),
    form_names: z
      .array(PokemonFormNameSchema)
      .openapi({
        readOnly: true,
        description:
          'The form specific form name of this Pokémon form, or empty if the form does not have a specific name.',
      }),
    names: z
      .array(PokemonFormNameSchema)
      .openapi({
        readOnly: true,
        description:
          'The form specific full name of this Pokémon form, or empty if the form does not have a specific name.',
      }),
    types: z
      .array(PokemonFormTypeSchema)
      .openapi({
        readOnly: true,
        description: 'A list of details showing types this Pokémon form has.',
      }),
    trigger_conditions: z
      .array(PokemonFormTriggerConditionSchema)
      .openapi({
        readOnly: true,
        description:
          'The conditions that trigger this form. Resource names and URLs are included when the trigger requires a resource.',
      }),
    flavor_text_entries: z
      .array(PokemonFormFlavorTextSchema)
      .openapi({
        readOnly: true,
        description: 'The flavor text of this form listed in different languages and versions.',
      }),
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
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('PokemonHabitatName')

const PokemonHabitatDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    names: z
      .array(PokemonHabitatNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
    pokemon_species: z
      .array(PokemonSpeciesSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of the Pokémon species that can be found in this habitat.',
      }),
  })
  .openapi({ required: ['id', 'name', 'names', 'pokemon_species'] })
  .openapi('PokemonHabitatDetail')

const PokemonShapeAwesomeNameSchema = z
  .object({
    awesome_name: z
      .string()
      .max(30)
      .openapi({
        description: 'The localized "scientific" name for an API resource in a specific language.',
      }),
    language: LanguageSummarySchema.openapi({
      description: 'The language this "scientific" name is in.',
    }),
  })
  .openapi({ required: ['awesome_name', 'language'] })
  .openapi('PokemonShapeAwesomeName')

const PokemonShapeNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('PokemonShapeName')

const PokemonShapeDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    awesome_names: z
      .array(PokemonShapeAwesomeNameSchema)
      .openapi({
        readOnly: true,
        description: 'The "scientific" name of this Pokémon shape listed in different languages.',
      }),
    names: z
      .array(PokemonShapeNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
    pokemon_species: z
      .array(PokemonSpeciesSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of the Pokémon species that have this shape.',
      }),
  })
  .openapi({ required: ['awesome_names', 'id', 'name', 'names', 'pokemon_species'] })
  .openapi('PokemonShapeDetail')

const PokemonSpeciesDescriptionSchema = z
  .object({
    description: z
      .string()
      .max(2000)
      .exactOptional()
      .openapi({
        description: 'The localized description for an API resource in a specific language.',
      }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language'] })
  .openapi('PokemonSpeciesDescription')

const PokemonSpeciesNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('PokemonSpeciesName')

const PokemonSpeciesPalParkEncounterSchema = z
  .object({
    base_score: z
      .int()
      .min(0)
      .max(32767)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The base score given to the player when the referenced Pokémon is caught during a pal park run.',
      }),
    rate: z
      .int()
      .min(0)
      .max(32767)
      .openapi({
        description: 'The base rate for encountering the referenced Pokémon in this pal park area.',
      }),
    area: PalParkAreaSummarySchema.openapi({
      description: 'The pal park area where this encounter happens.',
    }),
  })
  .openapi({ required: ['area', 'rate'] })
  .openapi('PokemonSpeciesPalParkEncounter')

const PokemonSpeciesFlavorTextSchema = z
  .object({
    flavor_text: z
      .string()
      .openapi({
        description:
          "The localized flavor text for an API resource in a specific language. Note that this text is left unprocessed as it is found in game files. This means that it contains special characters that one might want to replace with their visible decodable version. Please check out this <a href='https://github.com/veekun/pokedex/issues/218#issuecomment-339841781' >issue</a> to find out more. ",
      }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
    version: VersionSummarySchema.openapi({
      description: 'The game version this flavor text is extracted from.',
    }),
  })
  .openapi({ required: ['flavor_text', 'language', 'version'] })
  .openapi('PokemonSpeciesFlavorText')

const PokemonSpeciesGenusSchema = z
  .object({
    genus: z
      .string()
      .max(30)
      .openapi({ description: 'The localized genus for the referenced Pokémon species' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this genus is in.' }),
  })
  .openapi({ required: ['genus', 'language'] })
  .openapi('PokemonSpeciesGenus')

const PokemonSpeciesVarietySchema = z
  .object({
    is_default: z
      .boolean()
      .openapi({ description: 'Whether this variety is the default variety.' }),
    pokemon: PokemonSummarySchema.openapi({ description: 'The Pokémon variety.' }),
  })
  .openapi({ required: ['is_default', 'pokemon'] })
  .openapi('PokemonSpeciesVariety')

const PokemonSpeciesDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    order: z
      .int()
      .min(-1)
      .max(32767)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The order in which species should be sorted. Based on National Dex order, except families are grouped together and sorted by stage.',
      }),
    gender_rate: z
      .int()
      .min(-1)
      .max(8)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The chance of this Pokémon being female, in eighths; or -1 for genderless.',
      }),
    capture_rate: z
      .int()
      .min(0)
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The base capture rate; up to 255. The higher the number, the easier the catch.',
      }),
    base_happiness: z
      .int()
      .min(0)
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The happiness when caught by a normal Pokéball; up to 255. The higher the number, the happier the Pokémon.',
      }),
    is_baby: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not this is a baby Pokémon.' }),
    is_legendary: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not this is a legendary Pokémon.' }),
    is_mythical: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not this is a mythical Pokémon.' }),
    hatch_counter: z
      .int()
      .min(0)
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Initial hatch counter: one must walk Y × (hatch_counter + 1) steps before this Pokémon's egg hatches, unless utilizing bonuses like Flame Body's. Y varies per generation. In Generations II, III, and VII, Egg cycles are 256 steps long. In Generation IV, Egg cycles are 255 steps long. In Pokémon Brilliant Diamond and Shining Pearl, Egg cycles are also 255 steps long, but are shorter on special dates. In Generations V and VI, Egg cycles are 257 steps long. In Pokémon Sword and Shield, and in Pokémon Scarlet and Violet, Egg cycles are 128 steps long.",
      }),
    has_gender_differences: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not this Pokémon has visual gender differences.' }),
    forms_switchable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether or not this Pokémon has multiple forms and can switch between them.',
      }),
    growth_rate: GrowthRateSummarySchema.openapi({
      description: 'The rate at which this Pokémon species gains levels.',
    }),
    pokedex_numbers: z
      .array(PokemonDexEntrySchema)
      .openapi({
        readOnly: true,
        description:
          'A list of Pokedexes and the indexes reserved within them for this Pokémon species.',
      }),
    egg_groups: z
      .array(EggGroupSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of egg groups this Pokémon species is a member of.',
      }),
    color: PokemonColorSummarySchema.openapi({
      description: 'The color of this Pokémon for Pokédex search.',
    }),
    shape: PokemonShapeSummarySchema.openapi({
      description: 'The shape of this Pokémon for Pokédex search.',
    }),
    evolves_from_species: z
      .xor([PokemonSpeciesSummarySchema, z.null().nullable()])
      .openapi({ description: 'The Pokémon species that evolves into this Pokemon_species.' }),
    evolution_chain: EvolutionChainSummarySchema.openapi({
      description: 'The evolution chain this Pokémon species is a member of.',
    }),
    habitat: z
      .xor([PokemonHabitatSummarySchema, z.null().nullable()])
      .openapi({ description: 'The habitat this Pokémon species can be encountered in.' }),
    generation: GenerationSummarySchema.openapi({
      description: 'The generation this Pokémon species was introduced in.',
    }),
    names: z
      .array(PokemonSpeciesNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
    pal_park_encounters: z
      .array(PokemonSpeciesPalParkEncounterSchema)
      .openapi({
        readOnly: true,
        description: 'A list of encounters that can be had with this Pokémon species in pal park.',
      }),
    form_descriptions: z
      .array(PokemonSpeciesDescriptionSchema)
      .openapi({
        readOnly: true,
        description: 'Descriptions of different forms Pokémon take on within the Pokémon species.',
      }),
    flavor_text_entries: z
      .array(PokemonSpeciesFlavorTextSchema)
      .openapi({
        readOnly: true,
        description: 'A list of flavor text entries for this Pokémon species.',
      }),
    genera: z
      .array(PokemonSpeciesGenusSchema)
      .openapi({
        readOnly: true,
        description: 'The genus of this Pokémon species listed in multiple languages.',
      }),
    varieties: z
      .array(PokemonSpeciesVarietySchema)
      .openapi({
        readOnly: true,
        description: 'A list of the Pokémon that exist within this Pokémon species.',
      }),
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
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('RegionName')

const RegionDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    locations: z
      .array(LocationSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of locations that can be found in this region.',
      }),
    main_generation: z
      .xor([GenerationSummarySchema, z.null().nullable()])
      .openapi({ readOnly: true, description: 'The generation this region was introduced in.' }),
    names: z
      .array(RegionNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
    pokedexes: z
      .array(PokedexSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of pokédexes that catalogue Pokémon in this region.',
      }),
    version_groups: z
      .array(VersionGroupSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of version groups where this region can be visited.',
      }),
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
  .object({
    increase: z
      .array(MoveStatChangeSchema)
      .openapi({ description: 'A list of moves and how they change the referenced stat.' }),
    decrease: z
      .array(MoveStatChangeSchema)
      .openapi({ description: 'A list of moves and how they change the referenced stat.' }),
  })
  .openapi({ required: ['decrease', 'increase'] })
  .openapi('StatAffectingMoves')

const StatAffectingNaturesSchema = z
  .object({
    increase: z
      .array(NatureSummarySchema)
      .openapi({ description: 'A list of natures and how they change the referenced stat.' }),
    decrease: z
      .array(NatureSummarySchema)
      .openapi({ description: 'A list of nature sand how they change the referenced stat.' }),
  })
  .openapi({ required: ['decrease', 'increase'] })
  .openapi('StatAffectingNatures')

const StatNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('StatName')

const StatDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    game_index: z
      .int()
      .min(0)
      .max(32767)
      .openapi({ description: 'ID the games use for this stat.' }),
    is_battle_only: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this stat only exists within a battle.' }),
    affecting_moves: StatAffectingMovesSchema.openapi({
      readOnly: true,
      description: 'A detail of moves which affect this stat positively or negatively.',
    }),
    affecting_natures: StatAffectingNaturesSchema.openapi({
      readOnly: true,
      description: 'A detail of natures which affect this stat positively or negatively.',
    }),
    affecting_items: z
      .array(ItemSummarySchema)
      .openapi({
        readOnly: true,
        description: 'Items that affect this stat, such as vitamins and battle items.',
      }),
    characteristics: z
      .array(CharacteristicSummarySchema)
      .openapi({
        readOnly: true,
        description:
          'A list of characteristics that are set on a Pokémon when its highest base stat is this stat.',
      }),
    move_damage_class: z
      .xor([MoveDamageClassSummarySchema, z.null().nullable()])
      .openapi({ description: 'The class of damage this stat is directly related to.' }),
    names: z
      .array(StatNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
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
  .object({
    flavor_text: z
      .string()
      .max(500)
      .openapi({
        description: 'The localized flavor text for an API resource in a specific language.',
      }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['flavor_text', 'language'] })
  .openapi('SuperContestEffectFlavorText')

const SuperContestEffectDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    appeal: z
      .int()
      .min(0)
      .max(32767)
      .openapi({ description: 'The level of appeal this super contest effect has.' }),
    flavor_text_entries: z
      .array(SuperContestEffectFlavorTextSchema)
      .openapi({
        readOnly: true,
        description: 'The flavor text of this super contest effect listed in different languages.',
      }),
    moves: z
      .array(MoveSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of moves that have the effect when used in super contests.',
      }),
  })
  .openapi({ required: ['appeal', 'flavor_text_entries', 'id', 'moves'] })
  .openapi('SuperContestEffectDetail')

const TypeRelationshipsSchema = z
  .object({
    no_damage_to: z
      .array(TypeSummarySchema)
      .openapi({ description: 'A list of types this type has no effect on.' }),
    half_damage_to: z
      .array(TypeSummarySchema)
      .openapi({ description: 'A list of types this type is not very effect against.' }),
    double_damage_to: z
      .array(TypeSummarySchema)
      .openapi({ description: 'A list of types this type is very effect against.' }),
    no_damage_from: z
      .array(TypeSummarySchema)
      .openapi({ description: 'A list of types that have no effect on this type.' }),
    half_damage_from: z
      .array(TypeSummarySchema)
      .openapi({ description: 'A list of types that are not very effective against this type.' }),
    double_damage_from: z
      .array(TypeSummarySchema)
      .openapi({ description: 'A list of types that are very effective against this type.' }),
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
  .object({
    generation: GenerationSummarySchema.openapi({
      description:
        'The last generation in which the referenced type had the listed damage relations',
    }),
    damage_relations: TypeRelationshipsSchema.openapi({
      description:
        'The damage relations the referenced type had up to and including the listed generation',
    }),
  })
  .openapi({ required: ['damage_relations', 'generation'] })
  .openapi('TypePastRelationships')

const TypeGameIndexSchema = z
  .object({
    game_index: z
      .int()
      .min(0)
      .max(2147483647)
      .openapi({ description: 'The internal id of an API resource within game data.' }),
    generation: GenerationSummarySchema.openapi({
      description: 'The generation relevent to this game index.',
    }),
  })
  .openapi({ required: ['game_index', 'generation'] })
  .openapi('TypeGameIndex')

const TypeNameSchema = z
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('TypeName')

const TypePokemonSchema = z
  .object({
    slot: z
      .int()
      .min(1)
      .max(2)
      .openapi({ description: "The order the Pokémon's types are listed in." }),
    pokemon: PokemonSummarySchema.openapi({
      description: 'The Pokémon that has the referenced type.',
    }),
  })
  .openapi({ required: ['pokemon', 'slot'] })
  .openapi('TypePokemon')

const TypeGameSpriteSchema = z
  .object({
    name_icon: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL of the icon displaying the type name in this game, or null if unavailable.',
      }),
    symbol_icon: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL of the type symbol icon in this game, or null if unavailable.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TypeGameSprite')

const TypeDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    damage_relations: TypeRelationshipsSchema.openapi({
      readOnly: true,
      description: 'A detail of how effective this type is toward others and vice versa.',
    }),
    past_damage_relations: z
      .array(TypePastRelationshipsSchema)
      .openapi({
        readOnly: true,
        description:
          'A list of details of how effective this type was toward others and vice versa in previous generations',
      }),
    game_indices: z
      .array(TypeGameIndexSchema)
      .openapi({
        readOnly: true,
        description: 'A list of game indices relevent to this item by generation.',
      }),
    generation: GenerationSummarySchema.openapi({
      description: 'The generation this type was introduced in.',
    }),
    move_damage_class: z
      .xor([MoveDamageClassSummarySchema, z.null().nullable()])
      .openapi({ description: 'The class of damage inflicted by this type.' }),
    names: z
      .array(TypeNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
    pokemon: z
      .array(TypePokemonSchema)
      .openapi({
        readOnly: true,
        description: 'A list of details of Pokémon that have this type.',
      }),
    moves: z
      .array(MoveSummarySchema)
      .openapi({ readOnly: true, description: 'A list of moves that have this type.' }),
    sprites: z
      .record(z.string(), z.record(z.string(), TypeGameSpriteSchema))
      .openapi({
        readOnly: true,
        description:
          'Type icons grouped by generation and game, with name_icon and symbol_icon URLs. Unavailable icons are null.',
      }),
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
  .object({
    name: z
      .string()
      .max(200)
      .openapi({ description: 'The localized name for an API resource in a specific language.' }),
    language: LanguageSummarySchema.openapi({ description: 'The language this name is in.' }),
  })
  .openapi({ required: ['language', 'name'] })
  .openapi('VersionName')

const VersionDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    names: z
      .array(VersionNameSchema)
      .openapi({
        readOnly: true,
        description: 'The name of this resource listed in different languages.',
      }),
    version_group: VersionGroupSummarySchema.openapi({
      description: 'The version group this version belongs to.',
    }),
  })
  .openapi({
    description:
      "Should have a link to Version Group info but the Circular\ndependency and compilation order fight eachother and I'm\nnot sure how to add anything other than a hyperlink",
    required: ['id', 'name', 'names', 'version_group'],
  })
  .openapi('VersionDetail')

const VersionGroupDetailSchema = z
  .object({
    id: z.int().openapi({ readOnly: true, description: 'The identifier for this resource.' }),
    name: z.string().max(200).openapi({ description: 'The name for this resource.' }),
    order: z
      .int()
      .min(-1)
      .max(32767)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Order for sorting. Almost by date of release, except similar versions are grouped together.',
      }),
    generation: GenerationSummarySchema.openapi({
      description: 'The generation this version was introduced in.',
    }),
    move_learn_methods: z
      .array(MoveLearnMethodSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of methods in which Pokémon can learn moves in this version group.',
      }),
    pokedexes: z
      .array(PokedexSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of Pokédexes introduces in this version group.',
      }),
    regions: z
      .array(RegionSummarySchema)
      .openapi({
        readOnly: true,
        description: 'A list of regions that can be visited in this version group.',
      }),
    versions: z
      .array(VersionSummarySchema)
      .openapi({ readOnly: true, description: 'The versions this version group owns.' }),
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: AbilityDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: BerryDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: BerryFlavorDetailSchema } } },
  },
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
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedCharacteristicSummaryListSchema } },
    },
  },
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
            examples: { '1': { value: '1' } },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ContestTypeDetailSchema } } },
  },
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
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedContestEffectSummaryListSchema } },
    },
  },
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
            examples: { '1': { value: '1' } },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: EggGroupDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
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
            examples: { '1': { value: '1' } },
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
            examples: { '1': { value: '1' } },
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
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedEvolutionChainSummaryListSchema } },
    },
  },
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
            examples: { '1': { value: '1' } },
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
            examples: { '1': { value: '1' } },
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
            examples: { '1': { value: '1' } },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: GenerationDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: GenderDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: GrowthRateDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ItemDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ItemCategoryDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
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
            examples: { '1': { value: '1' } },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ItemPocketDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: CurrencyDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: LanguageDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: LocationDetailSchema } } },
  },
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
            examples: { '1': { value: 1 } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: LocationAreaDetailSchema } } },
  },
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
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedMachineSummaryListSchema } },
    },
  },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MachineDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MoveDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
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
            examples: { '1': { value: '1' } },
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
            examples: { '1': { value: '1' } },
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
            examples: { '1': { value: '1' } },
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
            examples: { '1': { value: '1' } },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MoveTargetDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: NatureDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PalParkAreaDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PokedexDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PokemonDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PokemonColorDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PokemonFormDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PokemonShapeDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
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
            examples: { '1': { value: '1' } },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: RegionDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: StatDetailSchema } } },
  },
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
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedSuperContestEffectSummaryListSchema } },
    },
  },
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
            examples: { '1': { value: '1' } },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: TypeDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: VersionDetailSchema } } },
  },
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
            examples: { '1': { value: '1' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: VersionGroupDetailSchema } } },
  },
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
            name: 'pokemon_id',
            schema: { type: 'integer' },
            description: 'A unique integer value identifying the Pokémon.',
            required: true,
            examples: { '1': { value: 1 } },
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
})
