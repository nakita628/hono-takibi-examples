type APIReference = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
}
type AbilityScore = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  desc?: string[] | undefined
  full_name?: string | undefined
  skills?: APIReference[] | undefined
}
type Alignment = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  abbreviation?: string | undefined
  desc?: string | undefined
}
type Damage = { damage_dice?: string | undefined; damage_type?: APIReference | undefined }
type DC = {
  dc_type?: APIReference | undefined
  dc_value?: number | undefined
  success_type?: string | undefined
}
type Option =
  | { item?: APIReference | undefined; option_type?: string | undefined }
  | {
      action_name?: string | undefined
      count?: number | undefined
      option_type?: string | undefined
      type?: 'melee' | 'ranged' | 'ability' | 'magic' | undefined
    }
  | { items?: Option[] | undefined; option_type?: string | undefined }
  | { choice?: Choice | undefined; option_type?: string | undefined }
  | { option_type?: string | undefined; string?: string | undefined }
  | {
      alignments?: APIReference[] | undefined
      desc?: string | undefined
      option_type?: string | undefined
    }
  | { count?: number | undefined; of?: APIReference | undefined; option_type?: string | undefined }
  | {
      ability_score?: APIReference | undefined
      minimum_score?: number | undefined
      option_type?: string | undefined
    }
  | {
      ability_score?: APIReference | undefined
      bonus?: number | undefined
      option_type?: string | undefined
    }
  | {
      damage?: Damage[] | undefined
      dc?: DC | undefined
      name?: string | undefined
      option_type?: string | undefined
    }
  | {
      damage_dice?: string | undefined
      damage_type?: APIReference | undefined
      notes?: string | undefined
      option_type?: string | undefined
    }
type OptionSet =
  | { option_set_type?: string | undefined; options_array?: Option[] | undefined }
  | { equipment_category?: APIReference | undefined; option_set_type?: string | undefined }
  | { option_set_type?: string | undefined; resource_list?: string | undefined }
type Choice = {
  choose?: number | undefined
  desc?: string | undefined
  from?: OptionSet | undefined
  type?: string | undefined
}
type Background = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  bonds?: Choice | undefined
  feature?: { desc?: string[] | undefined; name?: string | undefined } | undefined
  flaws?: Choice | undefined
  ideals?: Choice | undefined
  language_options?: Choice | undefined
  personality_traits?: { [x: string]: unknown } | undefined
  starting_equipment?: APIReference[] | undefined
  starting_equipment_options?: Choice | undefined
  starting_proficiencies?: APIReference[] | undefined
}
type Prerequisite = {
  ability_score?:
    | { index?: string | undefined; name?: string | undefined; url?: string | undefined }
    | undefined
  minimum_score?: number | undefined
}
type Multiclassing = {
  prerequisite_options?: Choice[] | undefined
  prerequisites?: Prerequisite[] | undefined
  proficiencies?: APIReference[] | undefined
  proficiency_choices?: Choice[] | undefined
}
type Spellcasting = {
  info?: { desc?: string[] | undefined; name?: string | undefined }[] | undefined
  level?: number | undefined
  spellcasting_ability?:
    | { index?: string | undefined; name?: string | undefined; url?: string | undefined }
    | undefined
}
type Class = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  class_levels?: string | undefined
  hit_die?: number | undefined
  multi_classing?: Multiclassing | undefined
  proficiencies?: APIReference[] | undefined
  proficiency_choices?: Choice[] | undefined
  saving_throws?: APIReference[] | undefined
  spellcasting?: Spellcasting | undefined
  spells?: string | undefined
  starting_equipment?:
    | { equipment?: APIReference | undefined; quantity?: number | undefined }[]
    | undefined
  starting_equipment_options?: Choice[] | undefined
  subclasses?: APIReference[] | undefined
}
type APIReferenceList = { count?: number | undefined; results?: APIReference[] | undefined }
type ClassLevel = {
  ability_score_bonuses?: number | undefined
  class_specific?:
    | {
        brutal_critical_dice?: number | undefined
        rage_count?: number | undefined
        rage_damage_bonus?: number | undefined
      }
    | {
        bardic_inspiration_dice?: number | undefined
        magical_secrets_max_5?: number | undefined
        magical_secrets_max_7?: number | undefined
        magical_secrets_max_9?: number | undefined
        song_of_rest_die?: number | undefined
      }
    | { channel_divinity_charges?: number | undefined; destroy_undead_cr?: number | undefined }
    | {
        wild_shape_fly?: boolean | undefined
        wild_shape_max_cr?: number | undefined
        wild_shape_swim?: boolean | undefined
      }
    | {
        action_surges?: number | undefined
        extra_attacks?: number | undefined
        indomitable_uses?: number | undefined
      }
    | {
        ki_points?: number | undefined
        martial_arts?:
          | { dice_count?: number | undefined; dice_value?: number | undefined }
          | undefined
        unarmored_movement?: number | undefined
      }
    | { aura_range?: number | undefined }
    | { favored_enemies?: number | undefined; favored_terrain?: number | undefined }
    | {
        sneak_attack?:
          | { dice_count?: number | undefined; dice_value?: number | undefined }
          | undefined
      }
    | {
        creating_spell_slots?:
          | { sorcery_point_cost?: number | undefined; spell_slot_level?: number | undefined }[]
          | undefined
        metamagic_known?: number | undefined
        sorcery_points?: number | undefined
      }
    | {
        invocations_known?: number | undefined
        mystic_arcanum_level_6?: number | undefined
        mystic_arcanum_level_7?: number | undefined
        mystic_arcanum_level_8?: number | undefined
        mystic_arcanum_level_9?: number | undefined
      }
    | { arcane_recover_levels?: number | undefined }
    | undefined
  features?: APIReference[] | undefined
  index?: string | undefined
  level?: number | undefined
  prof_bonus?: number | undefined
  spellcasting?:
    | {
        cantrips_known?: number | undefined
        spell_slots_level_1?: number | undefined
        spell_slots_level_2?: number | undefined
        spell_slots_level_3?: number | undefined
        spell_slots_level_4?: number | undefined
        spell_slots_level_5?: number | undefined
        spell_slots_level_6?: number | undefined
        spell_slots_level_7?: number | undefined
        spell_slots_level_8?: number | undefined
        spell_slots_level_9?: number | undefined
        spells_known?: number | undefined
      }
    | undefined
  url?: string | undefined
}
type ErrorResponse = { error: string }
type Condition = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  desc?: string[] | undefined
}
type DamageType = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  desc?: string[] | undefined
}
type EquipmentCategory = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  equipment?: APIReference[] | undefined
}
type Cost = { quantity?: number | undefined; unit?: string | undefined }
type Weapon = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  desc?: string[] | undefined
  category_range?: string | undefined
  cost?: Cost | undefined
  damage?: Damage | undefined
  equipment_category?: APIReference | undefined
  properties?: APIReference[] | undefined
  range?: { long?: number | undefined; normal?: number | undefined } | undefined
  two_handed_damage?: Damage | undefined
  weapon_category?: string | undefined
  weapon_range?: string | undefined
  weight?: number | undefined
}
type Armor = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  desc?: string[] | undefined
  armor_category?: string | undefined
  armor_class?: { [x: string]: string } | undefined
  cost?: Cost | undefined
  equipment_category?: APIReference | undefined
  stealth_disadvantage?: boolean | undefined
  str_minimum?: number | undefined
  weight?: number | undefined
}
type Gear = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  desc?: string[] | undefined
  cost?: Cost | undefined
  equipment_category?: APIReference | undefined
  gear_category?: APIReference | undefined
  weight?: number | undefined
}
type EquipmentPack = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  desc?: string[] | undefined
  contents?: APIReference[] | undefined
  cost?: Cost | undefined
  equipment_category?: APIReference | undefined
  gear_category?: APIReference | undefined
}
type Equipment = Weapon | Armor | Gear | EquipmentPack
type Feat = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  desc?: string[] | undefined
  prerequisites?: Prerequisite[] | undefined
}
type Feature = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  desc?: string[] | undefined
  class?: APIReference | undefined
  feature_specific?: { [x: string]: unknown } | undefined
  level?: number | undefined
  parent?: APIReference | undefined
  prerequisites?:
    | (
        | { level?: number | undefined; type?: string | undefined }
        | { feature?: string | undefined; type?: string | undefined }
        | { spell?: string | undefined; type?: string | undefined }
      )[]
    | undefined
  subclass?: APIReference | undefined
}
type Language = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  desc?: string | undefined
  script?: string | undefined
  type?: 'Standard' | 'Exotic' | undefined
  typical_speakers?: string[] | undefined
}
type MagicItem = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  desc?: string[] | undefined
  equipment_category?: APIReference | undefined
  rarity?:
    | {
        name?:
          | 'Varies'
          | 'Common'
          | 'Uncommon'
          | 'Rare'
          | 'Very Rare'
          | 'Legendary'
          | 'Artifact'
          | undefined
      }
    | undefined
  variant?: boolean | undefined
  variants?: APIReference[] | undefined
}
type MagicSchool = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  desc?: string | undefined
}
type Monster = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  desc?: string[] | undefined
  charisma?: number | undefined
  constitution?: number | undefined
  dexterity?: number | undefined
  intelligence?: number | undefined
  strength?: number | undefined
  wisdom?: number | undefined
  actions?:
    | {
        action_options?: Choice | undefined
        actions?:
          | {
              action_name?: string | undefined
              count?: number | undefined
              type?: 'melee' | 'ranged' | 'ability' | 'magic' | undefined
            }[]
          | undefined
        attack_bonus?: number | undefined
        attacks?:
          | {
              damage?: { [x: string]: unknown } | undefined
              dc?: DC | undefined
              name?: string | undefined
            }[]
          | undefined
        damage?:
          | { damage_dice?: string | undefined; damage_type?: APIReference | undefined }[]
          | undefined
        dc?: DC | undefined
        desc?: string | undefined
        multiattack_type?: string | undefined
        name?: string | undefined
        options?: Choice | undefined
      }[]
    | undefined
  alignments?:
    | 'chaotic neutral'
    | 'chaotic evil'
    | 'chaotic good'
    | 'lawful neutral'
    | 'lawful evil'
    | 'lawful good'
    | 'neutral'
    | 'neutral evil'
    | 'neutral good'
    | 'any alignment'
    | 'unaligned'
    | undefined
  armor_class?:
    | (
        | { desc?: string | undefined; type?: 'dex' | undefined; value?: number | undefined }
        | { desc?: string | undefined; type?: 'natural' | undefined; value?: number | undefined }
        | {
            armor?: APIReference[] | undefined
            desc?: string | undefined
            type?: 'armor' | undefined
            value?: number | undefined
          }
        | {
            desc?: string | undefined
            spell?: APIReference | undefined
            type?: 'spell' | undefined
            value?: number | undefined
          }
        | {
            condition?: APIReference | undefined
            desc?: string | undefined
            type?: 'condition' | undefined
            value?: number | undefined
          }
      )[]
    | undefined
  challenge_rating?: number | undefined
  condition_immunities?: APIReference[] | undefined
  damage_immunities?: string[] | undefined
  damage_resistances?: string[] | undefined
  damage_vulnerabilities?: string[] | undefined
  forms?: APIReference[] | undefined
  hit_dice?: string | undefined
  hit_points?: number | undefined
  hit_points_roll?: string | undefined
  image?: string | undefined
  languages?: string | undefined
  legendary_actions?:
    | {
        action_options?: Choice | undefined
        actions?:
          | {
              action_name?: string | undefined
              count?: number | undefined
              type?: 'melee' | 'ranged' | 'ability' | 'magic' | undefined
            }[]
          | undefined
        attack_bonus?: number | undefined
        attacks?:
          | {
              damage?: { [x: string]: unknown } | undefined
              dc?: DC | undefined
              name?: string | undefined
            }[]
          | undefined
        damage?:
          | { damage_dice?: string | undefined; damage_type?: APIReference | undefined }[]
          | undefined
        dc?: DC | undefined
        desc?: string | undefined
        multiattack_type?: string | undefined
        name?: string | undefined
        options?: Choice | undefined
      }[]
    | undefined
  proficiencies?:
    | { proficiency?: APIReference | undefined; value?: number | undefined }[]
    | undefined
  reactions?:
    | {
        action_options?: Choice | undefined
        actions?:
          | {
              action_name?: string | undefined
              count?: number | undefined
              type?: 'melee' | 'ranged' | 'ability' | 'magic' | undefined
            }[]
          | undefined
        attack_bonus?: number | undefined
        attacks?:
          | {
              damage?: { [x: string]: unknown } | undefined
              dc?: DC | undefined
              name?: string | undefined
            }[]
          | undefined
        damage?:
          | { damage_dice?: string | undefined; damage_type?: APIReference | undefined }[]
          | undefined
        dc?: DC | undefined
        desc?: string | undefined
        multiattack_type?: string | undefined
        name?: string | undefined
        options?: Choice | undefined
      }[]
    | undefined
  senses?:
    | {
        blindsight?: string | undefined
        darkvision?: string | undefined
        passive_perception?: number | undefined
        tremorsense?: string | undefined
        truesight?: string | undefined
      }
    | undefined
  size?: 'Tiny' | 'Small' | 'Medium' | 'Large' | 'Huge' | 'Gargantuan' | undefined
  special_abilities?:
    | {
        attack_bonus?: number | undefined
        damage?: { [x: string]: unknown }[] | undefined
        dc?: DC | undefined
        desc?: string | undefined
        name?: string | undefined
        spellcasting?:
          | {
              ability?: APIReference | undefined
              components_required?: string[] | undefined
              dc?: number | undefined
              modifier?: number | undefined
              school?: string | undefined
              slots?: { [x: string]: number } | undefined
              spells?:
                | {
                    level?: number | undefined
                    name?: string | undefined
                    url?: string | undefined
                    usage?: { [x: string]: unknown } | undefined
                  }[]
                | undefined
            }
          | undefined
        usage?:
          | {
              rest_types?: string[] | undefined
              times?: number | undefined
              type?: 'at will' | 'per day' | 'recharge after rest' | 'recharge on roll' | undefined
            }
          | undefined
      }[]
    | undefined
  speed?:
    | {
        burrow?: string | undefined
        climb?: string | undefined
        fly?: string | undefined
        swim?: string | undefined
        walk?: string | undefined
      }
    | undefined
  subtype?: string | undefined
  type?: string | undefined
  xp?: number | undefined
}
type Proficiency = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  classes?: APIReference[] | undefined
  races?: APIReference[] | undefined
  reference?:
    | { index?: string | undefined; name?: string | undefined; url?: string | undefined }
    | undefined
  type?: string | undefined
}
type AbilityBonus = { ability_score?: APIReference | undefined; bonus?: number | undefined }
type Race = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  ability_bonuses?: AbilityBonus[] | undefined
  age?: string | undefined
  alignment?: string | undefined
  language_desc?: string | undefined
  languages?: APIReference[] | undefined
  size?: string | undefined
  size_description?: string | undefined
  speed?: number | undefined
  starting_proficiencies?: APIReference[] | undefined
  starting_proficiency_options?: Choice | undefined
  subraces?: APIReference[] | undefined
  traits?: APIReference[] | undefined
}
type RuleSection = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  desc?: string | undefined
}
type Rule = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  desc?: string | undefined
  subsections?: APIReference[] | undefined
}
type Skill = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  desc?: string[] | undefined
  ability_score?: APIReference | undefined
}
type AreaOfEffect = {
  size?: number | undefined
  type?: 'sphere' | 'cone' | 'cylinder' | 'line' | 'cube' | undefined
}
type DamageAtCharacterLevel = {
  damage_at_character_level?: { [x: string]: unknown } | undefined
  damage_type?: APIReference | undefined
}
type DamageAtSlotLevel = {
  damage_at_slot_level?: { [x: string]: unknown } | undefined
  damage_type?: APIReference | undefined
}
type Spell = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  desc?: string[] | undefined
  area_of_effect?: AreaOfEffect | undefined
  attack_type?: string | undefined
  casting_time?: string | undefined
  classes?: APIReference[] | undefined
  components?: ('V' | 'S' | 'M')[] | undefined
  concentration?: boolean | undefined
  damage?: DamageAtCharacterLevel | DamageAtSlotLevel | undefined
  duration?: string | undefined
  higher_level?: string[] | undefined
  level?: number | undefined
  material?: string | undefined
  range?: string | undefined
  ritual?: boolean | undefined
  school?: APIReference | undefined
  subclasses?: APIReference[] | undefined
}
type SpellPrerequisite = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  type?: string | undefined
}
type Subclass = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  desc?: string[] | undefined
  class?: APIReference | undefined
  spells?:
    | { prerequisites?: SpellPrerequisite[] | undefined; spell?: APIReference | undefined }[]
    | undefined
  subclass_flavor?: string | undefined
  subclass_levels?: string | undefined
}
type SubclassLevelResource = {
  class?: APIReference | undefined
  features?: APIReference[] | undefined
  index?: string | undefined
  level?: number | undefined
  subclass?: APIReference | undefined
  url?: string | undefined
}
type SubclassLevel = {
  ability_score_bonuses?: number | undefined
  classspecific?: { [x: string]: { [x: string]: unknown } } | undefined
  features?: APIReference[] | undefined
  index?: string | undefined
  level?: number | undefined
  prof_bonus?: number | undefined
  spellcasting?:
    | {
        cantrips_known?: number | undefined
        spell_slots_level_1?: number | undefined
        spell_slots_level_2?: number | undefined
        spell_slots_level_3?: number | undefined
        spell_slots_level_4?: number | undefined
        spell_slots_level_5?: number | undefined
        spell_slots_level_6?: number | undefined
        spell_slots_level_7?: number | undefined
        spell_slots_level_8?: number | undefined
        spell_slots_level_9?: number | undefined
        spells_known?: number | undefined
      }
    | undefined
  url?: string | undefined
}
type Subrace = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  ability_bonuses?: AbilityBonus[] | undefined
  desc?: string | undefined
  language_options?: Choice | undefined
  languages?: APIReference[] | undefined
  race?:
    | { index?: string | undefined; name?: string | undefined; url?: string | undefined }
    | undefined
  racial_traits?: APIReference[] | undefined
  starting_proficiencies?: APIReference[] | undefined
}
type Trait = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  desc?: string[] | undefined
  language_options?: Choice | undefined
  proficiencies?: APIReference[] | undefined
  proficiency_choices?: Choice | undefined
  races?: APIReference[] | undefined
  subraces?: APIReference[] | undefined
  trait_specific?:
    | Choice
    | Choice
    | {
        'breath-weapon'?:
          | {
              area_of_effect?: AreaOfEffect | undefined
              damage?:
                | {
                    damage_at_character_level?: { [x: string]: string } | undefined
                    damage_type?:
                      | {
                          index?: string | undefined
                          name?: string | undefined
                          url?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              dc?: DC | undefined
              desc?: string | undefined
              name?: string | undefined
              usage?: { times?: number | undefined; type?: string | undefined } | undefined
            }
          | undefined
        'damage-type'?:
          | { index?: string | undefined; name?: string | undefined; url?: string | undefined }
          | undefined
      }
    | undefined
}
type WeaponProperty = {
  index?: string | undefined
  name?: string | undefined
  url?: string | undefined
  desc?: string[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api': {
      $get: { input: {}; output: { [x: string]: string }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/ability-scores/:index': {
      $get: {
        input: { param: { index: 'cha' | 'con' | 'dex' | 'int' | 'str' | 'wis' } }
        output: AbilityScore
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/alignments/:index': {
      $get: {
        input: {
          param: {
            index:
              | 'chaotic-neutral'
              | 'chaotic-evil'
              | 'chaotic-good'
              | 'lawful-neutral'
              | 'lawful-evil'
              | 'lawful-good'
              | 'neutral'
              | 'neutral-evil'
              | 'neutral-good'
          }
        }
        output: Alignment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/backgrounds/:index': {
      $get: {
        input: { param: { index: 'acolyte' } }
        output: Background
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/classes/:index': {
      $get: {
        input: {
          param: {
            index:
              | 'barbarian'
              | 'bard'
              | 'cleric'
              | 'druid'
              | 'fighter'
              | 'monk'
              | 'paladin'
              | 'ranger'
              | 'rogue'
              | 'sorcerer'
              | 'warlock'
              | 'wizard'
          }
        }
        output: Class
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/classes/:index/features': {
      $get: {
        input: {
          param: {
            index:
              | 'barbarian'
              | 'bard'
              | 'cleric'
              | 'druid'
              | 'fighter'
              | 'monk'
              | 'paladin'
              | 'ranger'
              | 'rogue'
              | 'sorcerer'
              | 'warlock'
              | 'wizard'
          }
        }
        output: APIReferenceList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/classes/:index/levels': {
      $get: {
        input: {
          param: {
            index:
              | 'barbarian'
              | 'bard'
              | 'cleric'
              | 'druid'
              | 'fighter'
              | 'monk'
              | 'paladin'
              | 'ranger'
              | 'rogue'
              | 'sorcerer'
              | 'warlock'
              | 'wizard'
          }
        } & { query: { subclass?: string | undefined } }
        output: ClassLevel[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/classes/:index/levels/:class_level': {
      $get: {
        input: {
          param: {
            index:
              | 'barbarian'
              | 'bard'
              | 'cleric'
              | 'druid'
              | 'fighter'
              | 'monk'
              | 'paladin'
              | 'ranger'
              | 'rogue'
              | 'sorcerer'
              | 'warlock'
              | 'wizard'
            class_level: number
          }
        }
        output: ClassLevel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/classes/:index/levels/:class_level/features': {
      $get: {
        input: {
          param: {
            index:
              | 'barbarian'
              | 'bard'
              | 'cleric'
              | 'druid'
              | 'fighter'
              | 'monk'
              | 'paladin'
              | 'ranger'
              | 'rogue'
              | 'sorcerer'
              | 'warlock'
              | 'wizard'
            class_level: number
          }
        }
        output: APIReferenceList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/classes/:index/levels/:spell_level/spells': {
      $get: {
        input: {
          param: {
            index:
              | 'barbarian'
              | 'bard'
              | 'cleric'
              | 'druid'
              | 'fighter'
              | 'monk'
              | 'paladin'
              | 'ranger'
              | 'rogue'
              | 'sorcerer'
              | 'warlock'
              | 'wizard'
            spell_level: number
          }
        }
        output: APIReferenceList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/classes/:index/multi-classing': {
      $get: {
        input: {
          param: {
            index:
              | 'barbarian'
              | 'bard'
              | 'cleric'
              | 'druid'
              | 'fighter'
              | 'monk'
              | 'paladin'
              | 'ranger'
              | 'rogue'
              | 'sorcerer'
              | 'warlock'
              | 'wizard'
          }
        }
        output: Multiclassing
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/classes/:index/proficiencies': {
      $get: {
        input: {
          param: {
            index:
              | 'barbarian'
              | 'bard'
              | 'cleric'
              | 'druid'
              | 'fighter'
              | 'monk'
              | 'paladin'
              | 'ranger'
              | 'rogue'
              | 'sorcerer'
              | 'warlock'
              | 'wizard'
          }
        }
        output: APIReferenceList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/classes/:index/spellcasting': {
      $get:
        | {
            input: {
              param: {
                index:
                  | 'barbarian'
                  | 'bard'
                  | 'cleric'
                  | 'druid'
                  | 'fighter'
                  | 'monk'
                  | 'paladin'
                  | 'ranger'
                  | 'rogue'
                  | 'sorcerer'
                  | 'warlock'
                  | 'wizard'
              }
            }
            output: Spellcasting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                index:
                  | 'barbarian'
                  | 'bard'
                  | 'cleric'
                  | 'druid'
                  | 'fighter'
                  | 'monk'
                  | 'paladin'
                  | 'ranger'
                  | 'rogue'
                  | 'sorcerer'
                  | 'warlock'
                  | 'wizard'
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/classes/:index/spells': {
      $get: {
        input: {
          param: {
            index:
              | 'barbarian'
              | 'bard'
              | 'cleric'
              | 'druid'
              | 'fighter'
              | 'monk'
              | 'paladin'
              | 'ranger'
              | 'rogue'
              | 'sorcerer'
              | 'warlock'
              | 'wizard'
          }
        }
        output: APIReferenceList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/classes/:index/subclasses': {
      $get: {
        input: {
          param: {
            index:
              | 'barbarian'
              | 'bard'
              | 'cleric'
              | 'druid'
              | 'fighter'
              | 'monk'
              | 'paladin'
              | 'ranger'
              | 'rogue'
              | 'sorcerer'
              | 'warlock'
              | 'wizard'
          }
        }
        output: APIReferenceList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/conditions/:index': {
      $get: {
        input: {
          param: {
            index:
              | 'blinded'
              | 'charmed'
              | 'deafened'
              | 'exhaustion'
              | 'frightened'
              | 'grappled'
              | 'incapacitated'
              | 'invisible'
              | 'paralyzed'
              | 'petrified'
              | 'poisoned'
              | 'prone'
              | 'restrained'
              | 'stunned'
              | 'unconscious'
          }
        }
        output: Condition
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/damage-types/:index': {
      $get: {
        input: {
          param: {
            index:
              | 'acid'
              | 'bludgeoning'
              | 'cold'
              | 'fire'
              | 'force'
              | 'lightning'
              | 'necrotic'
              | 'piercing'
              | 'poison'
              | 'psychic'
              | 'radiant'
              | 'slashing'
              | 'thunder'
          }
        }
        output: DamageType
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/equipment-categories/:index': {
      $get: {
        input: { param: { index: string } }
        output: EquipmentCategory
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/equipment/:index': {
      $get: {
        input: { param: { index: string } }
        output: Equipment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/feats/:index': {
      $get: {
        input: { param: { index: 'grappler' } }
        output: Feat
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/features/:index': {
      $get: {
        input: { param: { index: string } }
        output: Feature
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/languages/:index': {
      $get: {
        input: {
          param: {
            index:
              | 'abyssal'
              | 'celestial'
              | 'common'
              | 'deep-speech'
              | 'draconic'
              | 'dwarvish'
              | 'elvish'
              | 'giant'
              | 'gnomish'
              | 'goblin'
              | 'halfling'
              | 'infernal'
              | 'orc'
              | 'primordial'
              | 'sylvan'
              | 'undercommon'
          }
        }
        output: Language
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/magic-items/:index': {
      $get: {
        input: { param: { index: string } }
        output: MagicItem
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/magic-schools/:index': {
      $get: {
        input: {
          param: {
            index:
              | 'abjuration'
              | 'conjuration'
              | 'divination'
              | 'enchantment'
              | 'evocation'
              | 'illusion'
              | 'necromancy'
              | 'transmutation'
          }
        }
        output: MagicSchool
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/monsters': {
      $get: {
        input: { query: { challenge_rating?: number[] | undefined } }
        output: APIReferenceList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/monsters/:index': {
      $get: {
        input: { param: { index: string } }
        output: Monster
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/proficiencies/:index': {
      $get: {
        input: { param: { index: string } }
        output: Proficiency
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/races/:index': {
      $get: {
        input: {
          param: {
            index:
              | 'dragonborn'
              | 'dwarf'
              | 'elf'
              | 'gnome'
              | 'half-elf'
              | 'half-orc'
              | 'halfling'
              | 'human'
              | 'tiefling'
          }
        }
        output: Race
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/races/:index/proficiencies': {
      $get: {
        input: {
          param: {
            index:
              | 'dragonborn'
              | 'dwarf'
              | 'elf'
              | 'gnome'
              | 'half-elf'
              | 'half-orc'
              | 'halfling'
              | 'human'
              | 'tiefling'
          }
        }
        output: APIReferenceList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/races/:index/subraces': {
      $get: {
        input: {
          param: {
            index:
              | 'dragonborn'
              | 'dwarf'
              | 'elf'
              | 'gnome'
              | 'half-elf'
              | 'half-orc'
              | 'halfling'
              | 'human'
              | 'tiefling'
          }
        }
        output: APIReferenceList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/races/:index/traits': {
      $get: {
        input: {
          param: {
            index:
              | 'dragonborn'
              | 'dwarf'
              | 'elf'
              | 'gnome'
              | 'half-elf'
              | 'half-orc'
              | 'halfling'
              | 'human'
              | 'tiefling'
          }
        }
        output: APIReferenceList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/rule-sections/:index': {
      $get: {
        input: {
          param: {
            index:
              | 'ability-checks'
              | 'ability-scores-and-modifiers'
              | 'actions-in-combat'
              | 'advantage-and-disadvantage'
              | 'between-adventures'
              | 'casting-a-spell'
              | 'cover'
              | 'damage-and-healing'
              | 'diseases'
              | 'fantasy-historical-pantheons'
              | 'madness'
              | 'making-an-attack'
              | 'mounted-combat'
              | 'movement'
              | 'movement-and-position'
              | 'objects'
              | 'poisons'
              | 'proficiency-bonus'
              | 'resting'
              | 'saving-throws'
              | 'sentient-magic-items'
              | 'standard-exchange-rates'
              | 'the-environment'
              | 'the-order-of-combat'
              | 'the-planes-of-existence'
              | 'time'
              | 'traps'
              | 'underwater-combat'
              | 'using-each-ability'
              | 'what-is-a-spell'
          }
        }
        output: RuleSection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/rules/:index': {
      $get: {
        input: {
          param: {
            index:
              | 'adventuring'
              | 'appendix'
              | 'combat'
              | 'equipment'
              | 'spellcasting'
              | 'using-ability-scores'
          }
        }
        output: Rule
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/skills/:index': {
      $get: {
        input: {
          param: {
            index:
              | 'acrobatics'
              | 'animal-handling'
              | 'arcana'
              | 'athletics'
              | 'deception'
              | 'history'
              | 'insight'
              | 'intimidation'
              | 'investigation'
              | 'medicine'
              | 'nature'
              | 'perception'
              | 'performance'
              | 'persuasion'
              | 'religion'
              | 'sleight-of-hand'
              | 'stealth'
              | 'survival'
          }
        }
        output: Skill
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/spells': {
      $get: {
        input: { query: { level?: number[] | undefined; school?: string[] | undefined } }
        output: APIReferenceList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/spells/:index': {
      $get: {
        input: { param: { index: string } }
        output: Spell
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/subclasses/:index': {
      $get: {
        input: {
          param: {
            index:
              | 'berserker'
              | 'champion'
              | 'devotion'
              | 'draconic'
              | 'evocation'
              | 'fiend'
              | 'hunter'
              | 'land'
              | 'life'
              | 'lore'
              | 'open-hand'
              | 'thief'
          }
        }
        output: Subclass
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/subclasses/:index/features': {
      $get: {
        input: {
          param: {
            index:
              | 'berserker'
              | 'champion'
              | 'devotion'
              | 'draconic'
              | 'evocation'
              | 'fiend'
              | 'hunter'
              | 'land'
              | 'life'
              | 'lore'
              | 'open-hand'
              | 'thief'
          }
        }
        output: APIReferenceList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/subclasses/:index/levels': {
      $get: {
        input: {
          param: {
            index:
              | 'berserker'
              | 'champion'
              | 'devotion'
              | 'draconic'
              | 'evocation'
              | 'fiend'
              | 'hunter'
              | 'land'
              | 'life'
              | 'lore'
              | 'open-hand'
              | 'thief'
          }
        }
        output: SubclassLevelResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/subclasses/:index/levels/:subclass_level': {
      $get: {
        input: {
          param: {
            index:
              | 'berserker'
              | 'champion'
              | 'devotion'
              | 'draconic'
              | 'evocation'
              | 'fiend'
              | 'hunter'
              | 'land'
              | 'life'
              | 'lore'
              | 'open-hand'
              | 'thief'
            subclass_level: number
          }
        }
        output: SubclassLevel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/subclasses/:index/levels/:subclass_level/features': {
      $get: {
        input: {
          param: {
            index:
              | 'berserker'
              | 'champion'
              | 'devotion'
              | 'draconic'
              | 'evocation'
              | 'fiend'
              | 'hunter'
              | 'land'
              | 'life'
              | 'lore'
              | 'open-hand'
              | 'thief'
            subclass_level: number
          }
        }
        output: APIReferenceList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/subraces/:index': {
      $get: {
        input: { param: { index: 'high-elf' | 'hill-dwarf' | 'lightfoot-halfling' | 'rock-gnome' } }
        output: Subrace
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/subraces/:index/proficiencies': {
      $get: {
        input: { param: { index: 'high-elf' | 'hill-dwarf' | 'lightfoot-halfling' | 'rock-gnome' } }
        output: APIReferenceList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/subraces/:index/traits': {
      $get: {
        input: { param: { index: 'high-elf' | 'hill-dwarf' | 'lightfoot-halfling' | 'rock-gnome' } }
        output: APIReferenceList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/traits/:index': {
      $get: {
        input: {
          param: {
            index:
              | 'artificers-lore'
              | 'brave'
              | 'breath-weapon'
              | 'damage-resistance'
              | 'darkvision'
              | 'draconic-ancestry'
              | 'draconic-ancestry-black'
              | 'draconic-ancestry-blue'
              | 'draconic-ancestry-brass'
              | 'draconic-ancestry-bronze'
              | 'draconic-ancestry-copper'
              | 'draconic-ancestry-gold'
              | 'draconic-ancestry-green'
              | 'draconic-ancestry-red'
              | 'draconic-ancestry-silver'
              | 'draconic-ancestry-white'
              | 'dwarven-combat-training'
              | 'dwarven-resilience'
              | 'dwarven-toughness'
              | 'elf-weapon-training'
              | 'extra-language'
              | 'fey-ancestry'
              | 'gnome-cunning'
              | 'halfling-nimbleness'
              | 'hellish-resistance'
              | 'high-elf-cantrip'
              | 'infernal-legacy'
              | 'keen-senses'
              | 'lucky'
              | 'menacing'
              | 'naturally-stealthy'
              | 'relentless-endurance'
              | 'savage-attacks'
              | 'skill-versatility'
              | 'stonecunning'
              | 'tinker'
              | 'tool-proficiency'
              | 'trance'
          }
        }
        output: Trait
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/weapon-properties/:index': {
      $get: {
        input: {
          param: {
            index:
              | 'ammunition'
              | 'finesse'
              | 'heavy'
              | 'light'
              | 'loading'
              | 'monk'
              | 'reach'
              | 'special'
              | 'thrown'
              | 'two-handed'
              | 'versatile'
          }
        }
        output: WeaponProperty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/:endpoint': {
      $get: {
        input: {
          param: {
            endpoint:
              | 'ability-scores'
              | 'alignments'
              | 'backgrounds'
              | 'classes'
              | 'conditions'
              | 'damage-types'
              | 'equipment'
              | 'equipment-categories'
              | 'feats'
              | 'features'
              | 'languages'
              | 'magic-items'
              | 'magic-schools'
              | 'monsters'
              | 'proficiencies'
              | 'races'
              | 'rule-sections'
              | 'rules'
              | 'skills'
              | 'spells'
              | 'subclasses'
              | 'subraces'
              | 'traits'
              | 'weapon-properties'
          }
        }
        output: APIReferenceList
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
