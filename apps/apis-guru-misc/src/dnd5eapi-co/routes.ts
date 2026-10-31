import { createRoute, z } from '@hono/zod-openapi'

type APIReferenceType = { index?: string; name?: string; url?: string }

const OptionSetSchema: z.ZodType<OptionSetType> = z
  .lazy(() =>
    z
      .xor([
        z
          .object({
            option_set_type: z
              .string()
              .exactOptional()
              .openapi({ description: 'Type of option set; determines other attributes.' }),
            options_array: z
              .array(OptionSchema)
              .exactOptional()
              .openapi({ description: 'Array of options to choose from.' }),
          })
          .openapi({ required: [] }),
        z
          .object({
            equipment_category: APIReferenceSchema.exactOptional(),
            option_set_type: z
              .string()
              .exactOptional()
              .openapi({ description: 'Type of option set; determines other attributes.' }),
          })
          .openapi({ required: [] }),
        z
          .object({
            option_set_type: z
              .string()
              .exactOptional()
              .openapi({ description: 'Type of option set; determines other attributes.' }),
            resource_list: z
              .string()
              .exactOptional()
              .openapi({ description: 'A reference (by URL) to a collection in the database.' }),
          })
          .openapi({ required: [] }),
      ])
      .openapi({ description: '`Option Set`\n' }),
  )
  .openapi('OptionSet')

type ChoiceType = {
  choose?: number
  desc?: string
  from?: z.infer<typeof OptionSetSchema>
  type?: string
}

const APIReferenceSchema: z.ZodType<APIReferenceType> = z
  .object({
    index: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resource index for shorthand searching.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the referenced resource.' }),
    url: z.string().exactOptional().openapi({ description: 'URL of the referenced resource.' }),
  })
  .openapi({ description: '`APIReference`\n', required: [] })
  .openapi('APIReference')

type DCType = {
  dc_type?: z.infer<typeof APIReferenceSchema>
  dc_value?: number
  success_type?: string
}

type DamageType = { damage_dice?: string; damage_type?: z.infer<typeof APIReferenceSchema> }

const ChoiceSchema: z.ZodType<ChoiceType> = z
  .lazy(() =>
    z
      .object({
        choose: z
          .number()
          .exactOptional()
          .openapi({ description: 'Number of items to pick from the list.' }),
        desc: z
          .string()
          .exactOptional()
          .openapi({ description: 'Description of the choice to be made.' }),
        from: OptionSetSchema.exactOptional(),
        type: z
          .string()
          .exactOptional()
          .openapi({ description: 'Type of the resources to choose from.' }),
      })
      .openapi({ description: '`Choice`\n', required: [] }),
  )
  .openapi('Choice')

const DamageSchema: z.ZodType<DamageType> = z
  .object({
    damage_dice: z.string().exactOptional(),
    damage_type: APIReferenceSchema.exactOptional(),
  })
  .openapi({ description: '`Damage`\n', required: [] })
  .openapi('Damage')

const DCSchema: z.ZodType<DCType> = z
  .object({
    dc_type: APIReferenceSchema.exactOptional(),
    dc_value: z.number().exactOptional().openapi({ description: 'Value to beat' }),
    success_type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Result of a successful save. Can be \\"none\\", \\"half\\", or \\"other\\"',
      }),
  })
  .openapi({ description: '`DC`\n', required: [] })
  .openapi('DC')

type OptionType =
  | { item?: z.infer<typeof APIReferenceSchema>; option_type?: string }
  | {
      action_name?: string
      count?: number
      option_type?: string
      type?: 'melee' | 'ranged' | 'ability' | 'magic'
    }
  | { items?: OptionType[]; option_type?: string }
  | { choice?: z.infer<typeof ChoiceSchema>; option_type?: string }
  | { option_type?: string; string?: string }
  | { alignments?: z.infer<typeof APIReferenceSchema>[]; desc?: string; option_type?: string }
  | { count?: number; of?: z.infer<typeof APIReferenceSchema>; option_type?: string }
  | {
      ability_score?: z.infer<typeof APIReferenceSchema>
      minimum_score?: number
      option_type?: string
    }
  | { ability_score?: z.infer<typeof APIReferenceSchema>; bonus?: number; option_type?: string }
  | {
      damage?: z.infer<typeof DamageSchema>[]
      dc?: z.infer<typeof DCSchema>
      name?: string
      option_type?: string
    }
  | {
      damage_dice?: string
      damage_type?: z.infer<typeof APIReferenceSchema>
      notes?: string
      option_type?: string
    }

const OptionSchema: z.ZodType<OptionType> = z
  .lazy(() =>
    z
      .xor([
        z
          .object({
            item: APIReferenceSchema.exactOptional(),
            option_type: z
              .string()
              .exactOptional()
              .openapi({ description: 'Type of option; determines other attributes.' }),
          })
          .openapi({ required: [] }),
        z
          .object({
            action_name: z
              .string()
              .exactOptional()
              .openapi({ description: 'The name of the action.' }),
            count: z
              .number()
              .exactOptional()
              .openapi({
                description: 'The number of times this action can be repeated if chosen.',
              }),
            option_type: z
              .string()
              .exactOptional()
              .openapi({ description: 'Type of option; determines other attributes.' }),
            type: z
              .enum(['melee', 'ranged', 'ability', 'magic'])
              .exactOptional()
              .openapi({
                description: 'For attack options that can be melee, ranged, abilities, or thrown.',
              }),
          })
          .openapi({ required: [] }),
        z
          .object({
            items: z.array(OptionSchema).exactOptional(),
            option_type: z
              .string()
              .exactOptional()
              .openapi({ description: 'Type of option; determines other attributes.' }),
          })
          .openapi({ required: [] }),
        z
          .object({
            choice: ChoiceSchema.exactOptional(),
            option_type: z
              .string()
              .exactOptional()
              .openapi({ description: 'Type of option; determines other attributes.' }),
          })
          .openapi({ required: [] }),
        z
          .object({
            option_type: z
              .string()
              .exactOptional()
              .openapi({ description: 'Type of option; determines other attributes.' }),
            string: z.string().exactOptional().openapi({ description: 'The string.' }),
          })
          .openapi({ required: [] }),
        z
          .object({
            alignments: z
              .array(APIReferenceSchema)
              .exactOptional()
              .openapi({
                description: 'A list of alignments of those who might follow the ideal.',
              }),
            desc: z
              .string()
              .exactOptional()
              .openapi({ description: 'A description of the ideal.' }),
            option_type: z
              .string()
              .exactOptional()
              .openapi({ description: 'Type of option; determines other attributes.' }),
          })
          .openapi({ required: [] }),
        z
          .object({
            count: z.number().exactOptional().openapi({ description: 'Count' }),
            of: APIReferenceSchema.exactOptional(),
            option_type: z
              .string()
              .exactOptional()
              .openapi({ description: 'Type of option; determines other attributes.' }),
          })
          .openapi({ required: [] }),
        z
          .object({
            ability_score: APIReferenceSchema.exactOptional(),
            minimum_score: z
              .number()
              .exactOptional()
              .openapi({ description: 'The minimum score required to satisfy the prerequisite.' }),
            option_type: z
              .string()
              .exactOptional()
              .openapi({ description: 'Type of option; determines other attributes.' }),
          })
          .openapi({ required: [] }),
        z
          .object({
            ability_score: APIReferenceSchema.exactOptional(),
            bonus: z
              .number()
              .exactOptional()
              .openapi({ description: 'The bonus being applied to the ability score' }),
            option_type: z
              .string()
              .exactOptional()
              .openapi({ description: 'Type of option; determines other attributes.' }),
          })
          .openapi({ required: [] }),
        z
          .object({
            damage: z
              .array(DamageSchema)
              .exactOptional()
              .openapi({ description: 'Damage dealt by the breath attack, if any.' }),
            dc: DCSchema.exactOptional(),
            name: z.string().exactOptional().openapi({ description: 'Name of the breath' }),
            option_type: z
              .string()
              .exactOptional()
              .openapi({ description: 'Type of option; determines other attributes.' }),
          })
          .openapi({ required: [] }),
        z
          .object({
            damage_dice: z
              .string()
              .exactOptional()
              .openapi({ description: 'Damage expressed in dice (e.g. "13d6").' }),
            damage_type: APIReferenceSchema.exactOptional(),
            notes: z
              .string()
              .exactOptional()
              .openapi({ description: 'Information regarding the damage.' }),
            option_type: z
              .string()
              .exactOptional()
              .openapi({ description: 'Type of option; determines other attributes.' }),
          })
          .openapi({ required: [] }),
      ])
      .openapi({ description: '`Option`\n' }),
  )
  .openapi('Option')

type OptionSetType =
  | { option_set_type?: string; options_array?: z.infer<typeof OptionSchema>[] }
  | { equipment_category?: z.infer<typeof APIReferenceSchema>; option_set_type?: string }
  | { option_set_type?: string; resource_list?: string }

const APIReferenceListSchema = z
  .object({
    count: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total number of resources available.' }),
    results: z.array(APIReferenceSchema).exactOptional(),
  })
  .openapi({ description: '`APIReferenceList`\n', required: [] })
  .openapi('APIReferenceList')

const AbilityBonusSchema = z
  .object({
    ability_score: APIReferenceSchema.exactOptional(),
    bonus: z
      .number()
      .exactOptional()
      .openapi({ description: 'Bonus amount for this ability score.' }),
  })
  .openapi({ required: [] })
  .openapi('AbilityBonus')

const ResourceDescriptionSchema = z
  .object({
    desc: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Description of the resource.' }),
  })
  .openapi({ required: [] })
  .openapi('ResourceDescription')

const AbilityScoreSchema = APIReferenceSchema.and(ResourceDescriptionSchema)
  .and(
    z
      .object({
        full_name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Full name of the ability score.' }),
        skills: z
          .array(APIReferenceSchema)
          .exactOptional()
          .openapi({ description: 'List of skills that use this ability score.' }),
      })
      .openapi({ required: [] }),
  )
  .openapi({ description: '`AbilityScore`\n' })
  .openapi('AbilityScore')

const AlignmentSchema = APIReferenceSchema.and(
  z
    .object({
      abbreviation: z
        .string()
        .exactOptional()
        .openapi({ description: 'Abbreviation/initials/acronym for the alignment.' }),
      desc: z
        .string()
        .exactOptional()
        .openapi({ description: 'Brief description of the resource.' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: '`Alignment`\n' })
  .openapi('Alignment')

const AreaOfEffectSchema = z
  .object({
    size: z.number().exactOptional(),
    type: z.enum(['sphere', 'cone', 'cylinder', 'line', 'cube']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AreaOfEffect')

const CostSchema = z
  .object({
    quantity: z.number().exactOptional().openapi({ description: 'Numerical amount of coins.' }),
    unit: z.string().exactOptional().openapi({ description: 'Unit of coinage.' }),
  })
  .openapi({ description: '`Cost`\n', required: [] })
  .openapi('Cost')

const ArmorSchema = APIReferenceSchema.and(ResourceDescriptionSchema)
  .and(
    z
      .object({
        armor_category: z
          .string()
          .exactOptional()
          .openapi({ description: 'The category of armor this falls into.' }),
        armor_class: z
          .record(z.string(), z.string())
          .exactOptional()
          .openapi({ description: 'Details on how to calculate armor class.' }),
        cost: CostSchema.exactOptional(),
        equipment_category: APIReferenceSchema.exactOptional(),
        stealth_disadvantage: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether the armor gives disadvantage for Stealth.' }),
        str_minimum: z
          .number()
          .exactOptional()
          .openapi({ description: 'Minimum STR required to use this armor.' }),
        weight: z
          .number()
          .exactOptional()
          .openapi({ description: 'How much the equipment weighs.' }),
      })
      .openapi({ required: [] }),
  )
  .openapi({ description: '`Armor`\n' })
  .openapi('Armor')

const BackgroundSchema = APIReferenceSchema.and(
  z
    .object({
      bonds: ChoiceSchema.exactOptional(),
      feature: z
        .object({ desc: z.array(z.string()).exactOptional(), name: z.string().exactOptional() })
        .exactOptional()
        .openapi({
          description: 'Special feature granted to new characters of this background.',
          required: [],
        }),
      flaws: ChoiceSchema.exactOptional(),
      ideals: ChoiceSchema.exactOptional(),
      language_options: ChoiceSchema.exactOptional(),
      personality_traits: z
        .object({})
        .exactOptional()
        .openapi({ description: 'Choice of personality traits for this background.' }),
      starting_equipment: z
        .array(APIReferenceSchema)
        .exactOptional()
        .openapi({ description: 'Starting equipment for all new characters of this background.' }),
      starting_equipment_options: ChoiceSchema.exactOptional(),
      starting_proficiencies: z
        .array(APIReferenceSchema)
        .exactOptional()
        .openapi({
          description: 'Starting proficiencies for all new characters of this background.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: '`Background`\n' })
  .openapi('Background')

const PrerequisiteSchema = z
  .object({
    ability_score: APIReferenceSchema.exactOptional(),
    minimum_score: z
      .number()
      .exactOptional()
      .openapi({ description: 'Minimum score to meet the prerequisite.' }),
  })
  .openapi({ description: '`Prerequisite`\n', required: [] })
  .openapi('Prerequisite')

const MulticlassingSchema = z
  .object({
    prerequisite_options: z
      .array(ChoiceSchema)
      .exactOptional()
      .openapi({ description: 'List of choices of prerequisites to meet for.' }),
    prerequisites: z
      .array(PrerequisiteSchema)
      .exactOptional()
      .openapi({ description: 'List of prerequisites that must be met.' }),
    proficiencies: z
      .array(APIReferenceSchema)
      .exactOptional()
      .openapi({ description: 'List of proficiencies available when multiclassing.' }),
    proficiency_choices: z
      .array(ChoiceSchema)
      .exactOptional()
      .openapi({
        description: 'List of choices of proficiencies that are given when multiclassing.',
      }),
  })
  .openapi({ description: '`Multiclassing`\n', required: [] })
  .openapi('Multiclassing')

const SpellcastingSchema = z
  .object({
    info: z
      .array(
        z
          .object({
            desc: z
              .array(z.string())
              .exactOptional()
              .openapi({ description: 'Feature description.' }),
            name: z.string().exactOptional().openapi({ description: 'Feature name.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: "Descriptions of the class' ability to cast spells." }),
    level: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Level at which the class can start using its spellcasting abilities.',
      }),
    spellcasting_ability: APIReferenceSchema.exactOptional().openapi({
      description: 'Reference to the `AbilityScore` used for spellcasting by the class.',
    }),
  })
  .openapi({ description: '`Spellcasting`\n', required: [] })
  .openapi('Spellcasting')

const ClassSchema = APIReferenceSchema.and(
  z
    .object({
      class_levels: z
        .string()
        .exactOptional()
        .openapi({ description: 'URL of the level resource for the class.' }),
      hit_die: z
        .number()
        .exactOptional()
        .openapi({ description: 'Hit die of the class. (ex: 12 == 1d12).' }),
      multi_classing: MulticlassingSchema.exactOptional(),
      proficiencies: z
        .array(APIReferenceSchema)
        .exactOptional()
        .openapi({
          description: 'List of starting proficiencies for all new characters of this class.',
        }),
      proficiency_choices: z
        .array(ChoiceSchema)
        .exactOptional()
        .openapi({ description: 'List of choices of starting proficiencies.' }),
      saving_throws: z
        .array(APIReferenceSchema)
        .exactOptional()
        .openapi({ description: 'Saving throws the class is proficient in.' }),
      spellcasting: SpellcastingSchema.exactOptional(),
      spells: z
        .string()
        .exactOptional()
        .openapi({ description: 'URL of the spell resource list for the class.' }),
      starting_equipment: z
        .array(
          z
            .object({
              equipment: APIReferenceSchema.exactOptional(),
              quantity: z.number().exactOptional(),
            })
            .openapi({ required: [] }),
        )
        .exactOptional()
        .openapi({
          description:
            'List of equipment and their quantities all players of the class start with.',
        }),
      starting_equipment_options: z
        .array(ChoiceSchema)
        .exactOptional()
        .openapi({ description: 'List of choices of starting equipment.' }),
      subclasses: z
        .array(APIReferenceSchema)
        .exactOptional()
        .openapi({ description: 'List of all possible subclasses this class can specialize in.' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: '`Class`\n' })
  .openapi('Class')

const ClassLevelSchema = z
  .object({
    ability_score_bonuses: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Total number of ability score bonuses gained, added from previous levels.',
      }),
    class_specific: z
      .union([
        z
          .object({
            brutal_critical_dice: z.number().exactOptional(),
            rage_count: z.number().exactOptional(),
            rage_damage_bonus: z.number().exactOptional(),
          })
          .openapi({ description: 'Barbarian Class Specific Features', required: [] }),
        z
          .object({
            bardic_inspiration_dice: z.number().exactOptional(),
            magical_secrets_max_5: z.number().exactOptional(),
            magical_secrets_max_7: z.number().exactOptional(),
            magical_secrets_max_9: z.number().exactOptional(),
            song_of_rest_die: z.number().exactOptional(),
          })
          .openapi({ description: 'Bard Class Specific Features', required: [] }),
        z
          .object({
            channel_divinity_charges: z.number().exactOptional(),
            destroy_undead_cr: z.number().exactOptional(),
          })
          .openapi({ description: 'Cleric Class Specific Features', required: [] }),
        z
          .object({
            wild_shape_fly: z.boolean().exactOptional(),
            wild_shape_max_cr: z.number().exactOptional(),
            wild_shape_swim: z.boolean().exactOptional(),
          })
          .openapi({ description: 'Druid Class Specific Features', required: [] }),
        z
          .object({
            action_surges: z.number().exactOptional(),
            extra_attacks: z.number().exactOptional(),
            indomitable_uses: z.number().exactOptional(),
          })
          .openapi({ description: 'Fighter Class Specific Features', required: [] }),
        z
          .object({
            ki_points: z.number().exactOptional(),
            martial_arts: z
              .object({
                dice_count: z.number().exactOptional(),
                dice_value: z.number().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            unarmored_movement: z.number().exactOptional(),
          })
          .openapi({ description: 'Monk Class Specific Features', required: [] }),
        z
          .object({ aura_range: z.number().exactOptional() })
          .openapi({ description: 'Paladin Class Specific Features', required: [] }),
        z
          .object({
            favored_enemies: z.number().exactOptional(),
            favored_terrain: z.number().exactOptional(),
          })
          .openapi({ description: 'Bard Ranger Specific Features', required: [] }),
        z
          .object({
            sneak_attack: z
              .object({
                dice_count: z.number().exactOptional(),
                dice_value: z.number().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ description: 'Bard Rogue Specific Features', required: [] }),
        z
          .object({
            creating_spell_slots: z
              .array(
                z
                  .object({
                    sorcery_point_cost: z.number().exactOptional(),
                    spell_slot_level: z.number().exactOptional(),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            metamagic_known: z.number().exactOptional(),
            sorcery_points: z.number().exactOptional(),
          })
          .openapi({ description: 'Bard Sorcerer Specific Features', required: [] }),
        z
          .object({
            invocations_known: z.number().exactOptional(),
            mystic_arcanum_level_6: z.number().exactOptional(),
            mystic_arcanum_level_7: z.number().exactOptional(),
            mystic_arcanum_level_8: z.number().exactOptional(),
            mystic_arcanum_level_9: z.number().exactOptional(),
          })
          .openapi({ description: 'Bard Warlock Specific Features', required: [] }),
        z
          .object({ arcane_recover_levels: z.number().exactOptional() })
          .openapi({ description: 'Wizard Class Specific Features', required: [] }),
      ])
      .exactOptional()
      .openapi({
        description:
          'Class specific information such as dice values for bard songs and number of warlock invocations.',
      }),
    features: z
      .array(APIReferenceSchema)
      .exactOptional()
      .openapi({ description: 'Features automatically gained at this level.' }),
    index: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resource index for shorthand searching.' }),
    level: z
      .number()
      .exactOptional()
      .openapi({ description: 'The number value for the current level object.' }),
    prof_bonus: z
      .number()
      .exactOptional()
      .openapi({ description: 'Proficiency bonus for this class at the specified level.' }),
    spellcasting: z
      .object({
        cantrips_known: z.number().exactOptional(),
        spell_slots_level_1: z.number().exactOptional(),
        spell_slots_level_2: z.number().exactOptional(),
        spell_slots_level_3: z.number().exactOptional(),
        spell_slots_level_4: z.number().exactOptional(),
        spell_slots_level_5: z.number().exactOptional(),
        spell_slots_level_6: z.number().exactOptional(),
        spell_slots_level_7: z.number().exactOptional(),
        spell_slots_level_8: z.number().exactOptional(),
        spell_slots_level_9: z.number().exactOptional(),
        spells_known: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'Summary of spells known at this level.', required: [] }),
    url: z.string().exactOptional().openapi({ description: 'URL of the referenced resource.' }),
  })
  .openapi({ description: '`ClassLevel`\n', required: [] })
  .openapi('ClassLevel')

const ConditionSchema = APIReferenceSchema.and(ResourceDescriptionSchema)
  .openapi({ description: '`Condition`\n' })
  .openapi('Condition')

const DamageAtCharacterLevelSchema = z
  .object({
    damage_at_character_level: z.looseObject({}).exactOptional(),
    damage_type: APIReferenceSchema.exactOptional(),
  })
  .openapi({ description: "'Spell Damage'\n", required: [] })
  .openapi('DamageAtCharacterLevel')

const DamageAtSlotLevelSchema = z
  .object({
    damage_at_slot_level: z.looseObject({}).exactOptional(),
    damage_type: APIReferenceSchema.exactOptional(),
  })
  .openapi({ description: "'Spell Damage'\n", required: [] })
  .openapi('DamageAtSlotLevel')

const DamageTypeSchema = APIReferenceSchema.and(ResourceDescriptionSchema)
  .openapi({ description: '`DamageType`\n' })
  .openapi('DamageType')

const WeaponSchema = APIReferenceSchema.and(ResourceDescriptionSchema)
  .and(
    z
      .object({
        category_range: z
          .string()
          .exactOptional()
          .openapi({ description: 'A combination of weapon_category and weapon_range.' }),
        cost: CostSchema.exactOptional(),
        damage: DamageSchema.exactOptional(),
        equipment_category: APIReferenceSchema.exactOptional(),
        properties: z
          .array(APIReferenceSchema)
          .exactOptional()
          .openapi({ description: 'A list of the properties this weapon has.' }),
        range: z
          .object({
            long: z
              .number()
              .exactOptional()
              .openapi({ description: "The weapon's long range in feet." }),
            normal: z
              .number()
              .exactOptional()
              .openapi({ description: "The weapon's normal range in feet." }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        two_handed_damage: DamageSchema.exactOptional(),
        weapon_category: z
          .string()
          .exactOptional()
          .openapi({ description: 'The category of weapon this falls into.' }),
        weapon_range: z
          .string()
          .exactOptional()
          .openapi({ description: 'Whether this is a Melee or Ranged weapon.' }),
        weight: z
          .number()
          .exactOptional()
          .openapi({ description: 'How much the equipment weighs.' }),
      })
      .openapi({ required: [] }),
  )
  .openapi({ description: '`Weapon`\n' })
  .openapi('Weapon')

const GearSchema = APIReferenceSchema.and(ResourceDescriptionSchema)
  .and(
    z
      .object({
        cost: CostSchema.exactOptional(),
        equipment_category: APIReferenceSchema.exactOptional(),
        gear_category: APIReferenceSchema.exactOptional(),
        weight: z
          .number()
          .exactOptional()
          .openapi({ description: 'How much the equipment weighs.' }),
      })
      .openapi({ required: [] }),
  )
  .openapi({ description: '`Gear`\n' })
  .openapi('Gear')

const EquipmentPackSchema = APIReferenceSchema.and(ResourceDescriptionSchema)
  .and(
    z
      .object({
        contents: z
          .array(APIReferenceSchema)
          .exactOptional()
          .openapi({ description: 'The list of adventuring gear in the pack.' }),
        cost: CostSchema.exactOptional(),
        equipment_category: APIReferenceSchema.exactOptional(),
        gear_category: APIReferenceSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi({ description: '`EquipmentPack`\n' })
  .openapi('EquipmentPack')

const EquipmentSchema = z
  .union([WeaponSchema, ArmorSchema, GearSchema, EquipmentPackSchema])
  .openapi({ description: '`Equipment`\n' })
  .openapi('Equipment')

const EquipmentCategorySchema = APIReferenceSchema.and(
  z
    .object({
      equipment: z
        .array(APIReferenceSchema)
        .exactOptional()
        .openapi({ description: 'A list of the equipment that falls into this category.' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: '`EquipmentCategory`\n' })
  .openapi('EquipmentCategory')

const FeatSchema = APIReferenceSchema.and(ResourceDescriptionSchema)
  .and(
    z
      .object({
        prerequisites: z
          .array(PrerequisiteSchema)
          .exactOptional()
          .openapi({
            description: 'An object of APIReferences to ability scores and minimum scores.',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi({ description: '`Feat`\n' })
  .openapi('Feat')

const FeatureSchema = APIReferenceSchema.and(ResourceDescriptionSchema)
  .and(
    z
      .object({
        class: APIReferenceSchema.exactOptional(),
        feature_specific: z
          .looseObject({})
          .exactOptional()
          .openapi({ description: 'Information specific to this feature.' }),
        level: z
          .number()
          .exactOptional()
          .openapi({ description: 'The level this feature is gained.' }),
        parent: APIReferenceSchema.exactOptional(),
        prerequisites: z
          .array(
            z.union([
              z
                .object({ level: z.number().exactOptional(), type: z.string().exactOptional() })
                .openapi({ required: [] }),
              z
                .object({ feature: z.string().exactOptional(), type: z.string().exactOptional() })
                .openapi({ required: [] }),
              z
                .object({ spell: z.string().exactOptional(), type: z.string().exactOptional() })
                .openapi({ required: [] }),
            ]),
          )
          .exactOptional()
          .openapi({
            description: 'The prerequisites for this feature.',
            example: [
              { level: 3, type: 'level' },
              { feature: 'martial-archetype', type: 'feature' },
              { spell: 'shield', type: 'spell' },
            ],
          }),
        subclass: APIReferenceSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi({ description: '`Feature`\n' })
  .openapi('Feature')

const LanguageSchema = APIReferenceSchema.and(
  z
    .object({
      desc: z
        .string()
        .exactOptional()
        .openapi({ description: 'Brief description of the language.' }),
      script: z
        .string()
        .exactOptional()
        .openapi({ description: 'Script used for writing in the language.' }),
      type: z.enum(['Standard', 'Exotic']).exactOptional(),
      typical_speakers: z
        .array(z.string())
        .exactOptional()
        .openapi({ description: 'List of races that tend to speak the language.' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: '`Language`\n' })
  .openapi('Language')

const MagicItemSchema = APIReferenceSchema.and(ResourceDescriptionSchema)
  .and(
    z
      .object({
        equipment_category: APIReferenceSchema.exactOptional(),
        rarity: z
          .object({
            name: z
              .enum(['Varies', 'Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary', 'Artifact'])
              .exactOptional()
              .openapi({ description: 'The rarity of the item.' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        variant: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether this is a variant or not' }),
        variants: z.array(APIReferenceSchema).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi({ description: '`MagicItem`\n' })
  .openapi('MagicItem')

const MagicSchoolSchema = APIReferenceSchema.and(
  z
    .object({
      desc: z
        .string()
        .exactOptional()
        .openapi({ description: 'Brief description of the resource.' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: '`MagicSchool`\n' })
  .openapi('MagicSchool')

const MonsterSchema = APIReferenceSchema.and(ResourceDescriptionSchema)
  .and(
    z
      .object({
        charisma: z
          .number()
          .exactOptional()
          .openapi({ description: "A monster's ability to charm or intimidate a player." }),
        constitution: z
          .number()
          .exactOptional()
          .openapi({ description: 'How sturdy a monster is."' }),
        dexterity: z
          .number()
          .exactOptional()
          .openapi({ description: "The monster's ability for swift movement or stealth" }),
        intelligence: z
          .number()
          .exactOptional()
          .openapi({ description: "The monster's ability to outsmart a player." }),
        strength: z
          .number()
          .exactOptional()
          .openapi({ description: 'How hard a monster can hit a player.' }),
        wisdom: z
          .number()
          .exactOptional()
          .openapi({ description: "A monster's ability to ascertain the player's plan." }),
      })
      .openapi({ required: [] }),
  )
  .and(
    z
      .object({
        actions: z
          .array(
            z
              .object({
                action_options: ChoiceSchema.exactOptional(),
                actions: z
                  .array(
                    z
                      .object({
                        action_name: z.string().exactOptional(),
                        count: z.number().exactOptional(),
                        type: z.enum(['melee', 'ranged', 'ability', 'magic']).exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                attack_bonus: z.number().exactOptional(),
                attacks: z
                  .array(
                    z
                      .object({
                        damage: z.any().exactOptional(),
                        dc: DCSchema.exactOptional(),
                        name: z.string().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                damage: z
                  .array(
                    z
                      .object({
                        damage_dice: z
                          .string()
                          .regex(/^\d+d\d+(\+\d+)?$/)
                          .exactOptional()
                          .openapi({ example: '2d6+5' }),
                        damage_type: APIReferenceSchema.exactOptional(),
                      })
                      .openapi({
                        description: 'Damage type and dice associated with a particular attack.',
                        required: [],
                      }),
                  )
                  .exactOptional(),
                dc: DCSchema.exactOptional(),
                desc: z.string().exactOptional(),
                multiattack_type: z.string().exactOptional(),
                name: z.string().exactOptional(),
                options: ChoiceSchema.exactOptional(),
              })
              .openapi({
                description:
                  'Action available to a `Monster` in addition to the standard creature actions.',
                required: [],
              }),
          )
          .exactOptional()
          .openapi({
            description:
              'A list of actions that are available to the monster to take during combat.',
          }),
        alignments: z
          .enum([
            'chaotic neutral',
            'chaotic evil',
            'chaotic good',
            'lawful neutral',
            'lawful evil',
            'lawful good',
            'neutral',
            'neutral evil',
            'neutral good',
            'any alignment',
            'unaligned',
          ])
          .exactOptional()
          .openapi({ description: "A creature's general moral and personal attitudes." }),
        armor_class: z
          .array(
            z
              .xor([
                z
                  .object({
                    desc: z.string().exactOptional(),
                    type: z.literal('dex').exactOptional(),
                    value: z.number().exactOptional(),
                  })
                  .openapi({ required: [] }),
                z
                  .object({
                    desc: z.string().exactOptional(),
                    type: z.literal('natural').exactOptional(),
                    value: z.number().exactOptional(),
                  })
                  .openapi({ required: [] }),
                z
                  .object({
                    armor: z.array(APIReferenceSchema).exactOptional(),
                    desc: z.string().exactOptional(),
                    type: z.literal('armor').exactOptional(),
                    value: z.number().exactOptional(),
                  })
                  .openapi({ required: [] }),
                z
                  .object({
                    desc: z.string().exactOptional(),
                    spell: APIReferenceSchema.exactOptional(),
                    type: z.literal('spell').exactOptional(),
                    value: z.number().exactOptional(),
                  })
                  .openapi({ required: [] }),
                z
                  .object({
                    condition: APIReferenceSchema.exactOptional(),
                    desc: z.string().exactOptional(),
                    type: z.literal('condition').exactOptional(),
                    value: z.number().exactOptional(),
                  })
                  .openapi({ required: [] }),
              ])
              .openapi({ description: 'The armor class of a monster.' }),
          )
          .exactOptional()
          .openapi({
            description: 'The difficulty for a player to successfully deal damage to a monster.',
          }),
        challenge_rating: z
          .number()
          .min(0)
          .max(21)
          .exactOptional()
          .openapi({
            description:
              "A monster's challenge rating is a guideline number that says when a monster becomes an appropriate challenge against the party's average level. For example. A group of 4 players with an average level of 4 would have an appropriate combat challenge against a monster with a challenge rating of 4 but a monster with a challenge rating of 8 against the same group of players would pose a significant threat.",
          }),
        condition_immunities: z
          .array(APIReferenceSchema)
          .exactOptional()
          .openapi({ description: 'A list of conditions that a monster is immune to.' }),
        damage_immunities: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description: 'A list of damage types that a monster will take double damage from.',
          }),
        damage_resistances: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description: 'A list of damage types that a monster will take half damage from.',
          }),
        damage_vulnerabilities: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description: 'A list of damage types that a monster will take double damage from.',
          }),
        forms: z
          .array(APIReferenceSchema)
          .exactOptional()
          .openapi({
            description:
              'List of other related monster entries that are of the same form. Only applicable to Lycanthropes that have multiple forms.',
          }),
        hit_dice: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The hit die of a monster can be used to make a version of the same monster whose hit points are determined by the roll of the die. For example: A monster with 2d6 would have its hit points determine by rolling a 6 sided die twice.',
          }),
        hit_points: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'The hit points of a monster determine how much damage it is able to take before it can be defeated.',
          }),
        hit_points_roll: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "The roll for determining a monster's hit points, which consists of the hit dice (e.g. 18d10) and the modifier determined by its Constitution (e.g. +36). For example, 18d10+36",
          }),
        image: z.string().exactOptional().openapi({ description: 'The image url of the monster.' }),
        languages: z
          .string()
          .exactOptional()
          .openapi({ description: 'The languages a monster is able to speak.' }),
        legendary_actions: z
          .array(
            z
              .object({
                action_options: ChoiceSchema.exactOptional(),
                actions: z
                  .array(
                    z
                      .object({
                        action_name: z.string().exactOptional(),
                        count: z.number().exactOptional(),
                        type: z.enum(['melee', 'ranged', 'ability', 'magic']).exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                attack_bonus: z.number().exactOptional(),
                attacks: z
                  .array(
                    z
                      .object({
                        damage: z.any().exactOptional(),
                        dc: DCSchema.exactOptional(),
                        name: z.string().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                damage: z
                  .array(
                    z
                      .object({
                        damage_dice: z
                          .string()
                          .regex(/^\d+d\d+(\+\d+)?$/)
                          .exactOptional()
                          .openapi({ example: '2d6+5' }),
                        damage_type: APIReferenceSchema.exactOptional(),
                      })
                      .openapi({
                        description: 'Damage type and dice associated with a particular attack.',
                        required: [],
                      }),
                  )
                  .exactOptional(),
                dc: DCSchema.exactOptional(),
                desc: z.string().exactOptional(),
                multiattack_type: z.string().exactOptional(),
                name: z.string().exactOptional(),
                options: ChoiceSchema.exactOptional(),
              })
              .openapi({
                description:
                  'Action available to a `Monster` in addition to the standard creature actions.',
                required: [],
              }),
          )
          .exactOptional()
          .openapi({
            description:
              'A list of legendary actions that are available to the monster to take during combat.',
          }),
        proficiencies: z
          .array(
            z
              .object({
                proficiency: APIReferenceSchema.exactOptional(),
                value: z.number().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'A list of proficiencies of a monster.' }),
        reactions: z
          .array(
            z
              .object({
                action_options: ChoiceSchema.exactOptional(),
                actions: z
                  .array(
                    z
                      .object({
                        action_name: z.string().exactOptional(),
                        count: z.number().exactOptional(),
                        type: z.enum(['melee', 'ranged', 'ability', 'magic']).exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                attack_bonus: z.number().exactOptional(),
                attacks: z
                  .array(
                    z
                      .object({
                        damage: z.any().exactOptional(),
                        dc: DCSchema.exactOptional(),
                        name: z.string().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                damage: z
                  .array(
                    z
                      .object({
                        damage_dice: z
                          .string()
                          .regex(/^\d+d\d+(\+\d+)?$/)
                          .exactOptional()
                          .openapi({ example: '2d6+5' }),
                        damage_type: APIReferenceSchema.exactOptional(),
                      })
                      .openapi({
                        description: 'Damage type and dice associated with a particular attack.',
                        required: [],
                      }),
                  )
                  .exactOptional(),
                dc: DCSchema.exactOptional(),
                desc: z.string().exactOptional(),
                multiattack_type: z.string().exactOptional(),
                name: z.string().exactOptional(),
                options: ChoiceSchema.exactOptional(),
              })
              .openapi({
                description:
                  'Action available to a `Monster` in addition to the standard creature actions.',
                required: [],
              }),
          )
          .exactOptional()
          .openapi({
            description:
              'A list of reactions that is available to the monster to take during combat.',
          }),
        senses: z
          .object({
            blindsight: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'A monster with blindsight can perceive its surroundings without relying on sight, within a specific radius.',
              }),
            darkvision: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'A monster with darkvision can see in the dark within a specific radius.',
              }),
            passive_perception: z
              .number()
              .exactOptional()
              .openapi({ description: "The monster's passive perception (wisdom) score." }),
            tremorsense: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'A monster with tremorsense can detect and pinpoint the origin of vibrations within a specific radius, provided that the monster and the source of the vibrations are in contact with the same ground or substance.',
              }),
            truesight: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'A monster with truesight can, out to a specific range, see in normal and magical darkness, see invisible creatures and objects, automatically detect visual illusions and succeed on saving throws against them, and perceive the original form of a shapechanger or a creature that is transformed by magic. Furthermore, the monster can see into the Ethereal Plane within the same range.',
              }),
          })
          .openapi({ required: [] })
          .exactOptional()
          .openapi({
            description:
              'Monsters typically have a passive perception but they might also have other senses to detect players.',
          }),
        size: z
          .enum(['Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan'])
          .exactOptional()
          .openapi({ description: 'The size of the monster ranging from Tiny to Gargantuan."' }),
        special_abilities: z
          .array(
            z
              .object({
                attack_bonus: z.number().exactOptional(),
                damage: z.array(z.any()).exactOptional(),
                dc: DCSchema.exactOptional(),
                desc: z.string().exactOptional(),
                name: z.string().exactOptional(),
                spellcasting: z
                  .object({
                    ability: APIReferenceSchema.exactOptional(),
                    components_required: z.array(z.string()).exactOptional(),
                    dc: z.number().exactOptional(),
                    modifier: z.number().exactOptional(),
                    school: z.string().exactOptional(),
                    slots: z.record(z.string(), z.number()).exactOptional(),
                    spells: z
                      .array(
                        z
                          .object({
                            level: z.number().exactOptional(),
                            name: z.string().exactOptional(),
                            url: z.string().exactOptional(),
                            usage: z.any().exactOptional(),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                usage: z
                  .object({
                    rest_types: z.array(z.string()).exactOptional(),
                    times: z.number().exactOptional(),
                    type: z
                      .enum(['at will', 'per day', 'recharge after rest', 'recharge on roll'])
                      .exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({ description: "A list of the monster's special abilities." }),
        speed: z
          .object({
            burrow: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'A monster that has a burrowing speed can use that speed to move through sand, earth, mud, or ice. A monster can’t burrow through solid rock unless it has a special trait that allows it to do so.',
              }),
            climb: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'A monster that has a climbing speed can use all or part of its movement to move on vertical surfaces. The monster doesn’t need to spend extra movement to climb.',
              }),
            fly: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'A monster that has a flying speed can use all or part of its movement to fly.',
              }),
            swim: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'A monster that has a swimming speed doesn’t need to spend extra movement to swim.',
              }),
            walk: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'All creatures have a walking speed, simply called the monster’s speed. Creatures that have no form of ground-based locomotion have a walking speed of 0 feet.',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'Speed for a monster determines how fast it can move per turn.',
            required: [],
          }),
        subtype: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The sub-category of a monster used for classification of monsters."',
          }),
        type: z.string().exactOptional().openapi({ description: 'The type of monster.' }),
        xp: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'The number of experience points (XP) a monster is worth is based on its challenge rating.',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi({ description: '`Monster`\n' })
  .openapi('Monster')

const ProficiencySchema = APIReferenceSchema.and(
  z
    .object({
      classes: z
        .array(APIReferenceSchema)
        .exactOptional()
        .openapi({ description: 'Classes that start with this proficiency.' }),
      races: z
        .array(APIReferenceSchema)
        .exactOptional()
        .openapi({ description: 'Races that start with this proficiency.' }),
      reference: APIReferenceSchema.exactOptional().openapi({
        description: '`APIReference` to the full description of the related resource.\n',
      }),
      type: z
        .string()
        .exactOptional()
        .openapi({ description: 'The general category of the proficiency.' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: '`Proficiency`\n' })
  .openapi('Proficiency')

const RaceSchema = APIReferenceSchema.and(
  z
    .object({
      ability_bonuses: z
        .array(AbilityBonusSchema)
        .exactOptional()
        .openapi({ description: 'Racial bonuses to ability scores.' }),
      age: z
        .string()
        .exactOptional()
        .openapi({ description: 'Flavor description of possible ages for this race.' }),
      alignment: z
        .string()
        .exactOptional()
        .openapi({ description: 'Flavor description of likely alignments this race takes.' }),
      language_desc: z
        .string()
        .exactOptional()
        .openapi({ description: 'Flavor description of the languages this race knows.' }),
      languages: z
        .array(APIReferenceSchema)
        .exactOptional()
        .openapi({ description: 'Starting languages for all new characters of this race.' }),
      size: z.string().exactOptional().openapi({ description: 'Size class of this race.' }),
      size_description: z
        .string()
        .exactOptional()
        .openapi({ description: 'Flavor description of height and weight for this race.' }),
      speed: z
        .number()
        .exactOptional()
        .openapi({ description: 'Base move speed for this race (in feet per round).' }),
      starting_proficiencies: z
        .array(APIReferenceSchema)
        .exactOptional()
        .openapi({ description: 'Starting proficiencies for all new characters of this race.' }),
      starting_proficiency_options: ChoiceSchema.exactOptional().openapi({
        description: 'Starting proficiency options for all new characters of this race.',
      }),
      subraces: z
        .array(APIReferenceSchema)
        .exactOptional()
        .openapi({ description: 'All possible subraces that this race includes.' }),
      traits: z
        .array(APIReferenceSchema)
        .exactOptional()
        .openapi({ description: 'Racial traits that provide benefits to its members.' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: '`Race`\n' })
  .openapi('Race')

const RuleSchema = APIReferenceSchema.and(
  z
    .object({
      desc: z.string().exactOptional().openapi({ description: 'Description of the rule.' }),
      subsections: z
        .array(APIReferenceSchema)
        .exactOptional()
        .openapi({
          description: 'List of sections for each subheading underneath the rule in the SRD.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: '`Rule`\n' })
  .openapi('Rule')

const RuleSectionSchema = APIReferenceSchema.and(
  z
    .object({
      desc: z.string().exactOptional().openapi({ description: 'Description of the rule.' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: '`RuleSection`\n' })
  .openapi('RuleSection')

const SkillSchema = APIReferenceSchema.and(ResourceDescriptionSchema)
  .and(z.object({ ability_score: APIReferenceSchema.exactOptional() }).openapi({ required: [] }))
  .openapi({ description: '`Skill`\n' })
  .openapi('Skill')

const SpellSchema = APIReferenceSchema.and(ResourceDescriptionSchema)
  .and(
    z
      .object({
        area_of_effect: AreaOfEffectSchema.exactOptional(),
        attack_type: z
          .string()
          .exactOptional()
          .openapi({ description: 'Attack type of the spell.' }),
        casting_time: z
          .string()
          .exactOptional()
          .openapi({ description: 'How long it takes for the spell to activate.' }),
        classes: z
          .array(APIReferenceSchema)
          .exactOptional()
          .openapi({ description: 'List of classes that are able to learn the spell.' }),
        components: z
          .array(z.enum(['V', 'S', 'M']))
          .exactOptional()
          .openapi({
            description:
              'List of shorthand for required components of the spell.\nV: verbal\nS: somatic\nM: material\n',
          }),
        concentration: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Determines if a spell needs concentration to persist.' }),
        damage: z.xor([DamageAtCharacterLevelSchema, DamageAtSlotLevelSchema]).exactOptional(),
        duration: z
          .string()
          .exactOptional()
          .openapi({ description: 'How long the spell effect lasts.' }),
        higher_level: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'List of descriptions for casting the spell at higher levels.' }),
        level: z.number().exactOptional().openapi({ description: 'Level of the spell.' }),
        material: z
          .string()
          .exactOptional()
          .openapi({ description: 'Material component for the spell to be cast.' }),
        range: z
          .string()
          .exactOptional()
          .openapi({ description: 'Range of the spell, usually expressed in feet.' }),
        ritual: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Determines if a spell can be cast in a 10-min(in-game) ritual.',
          }),
        school: APIReferenceSchema.exactOptional().openapi({
          description: 'Magic school this spell belongs to.',
        }),
        subclasses: z
          .array(APIReferenceSchema)
          .exactOptional()
          .openapi({ description: 'List of subclasses that have access to the spell.' }),
      })
      .openapi({ required: [] }),
  )
  .openapi({ description: '`Spell`\n' })
  .openapi('Spell')

const SpellPrerequisiteSchema = APIReferenceSchema.and(
  z
    .object({
      type: z.string().exactOptional().openapi({ description: 'The type of prerequisite.' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: '`SpellPrerequisite`\n' })
  .openapi('SpellPrerequisite')

const SubclassSchema = APIReferenceSchema.and(ResourceDescriptionSchema)
  .and(
    z
      .object({
        class: APIReferenceSchema.exactOptional(),
        spells: z
          .array(
            z
              .object({
                prerequisites: z.array(SpellPrerequisiteSchema).exactOptional(),
                spell: APIReferenceSchema.exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        subclass_flavor: z
          .string()
          .exactOptional()
          .openapi({ description: 'Lore-friendly flavor text for a classes respective subclass.' }),
        subclass_levels: z
          .string()
          .exactOptional()
          .openapi({ description: 'Resource url that shows the subclass level progression.' }),
      })
      .openapi({ required: [] }),
  )
  .openapi({ description: '`Subclass`\n' })
  .openapi('Subclass')

const SubclassLevelSchema = z
  .object({
    ability_score_bonuses: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Total number of ability score bonuses gained, added from previous levels.',
      }),
    classspecific: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          'Class specific information such as dice values for bard songs and number of warlock invocations.',
      }),
    features: z
      .array(APIReferenceSchema)
      .exactOptional()
      .openapi({ description: 'List of features gained at this level.' }),
    index: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resource index for shorthand searching.' }),
    level: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number value for the current level object.' }),
    prof_bonus: z
      .number()
      .exactOptional()
      .openapi({ description: 'Proficiency bonus for this class at the specified level.' }),
    spellcasting: z
      .object({
        cantrips_known: z.number().exactOptional(),
        spell_slots_level_1: z.number().exactOptional(),
        spell_slots_level_2: z.number().exactOptional(),
        spell_slots_level_3: z.number().exactOptional(),
        spell_slots_level_4: z.number().exactOptional(),
        spell_slots_level_5: z.number().exactOptional(),
        spell_slots_level_6: z.number().exactOptional(),
        spell_slots_level_7: z.number().exactOptional(),
        spell_slots_level_8: z.number().exactOptional(),
        spell_slots_level_9: z.number().exactOptional(),
        spells_known: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'Summary of spells known at this level.', required: [] }),
    url: z.string().exactOptional().openapi({ description: 'URL of the referenced resource.' }),
  })
  .openapi({ description: '`SubclassLevel`\n', required: [] })
  .openapi('SubclassLevel')

const SubclassLevelResourceSchema = z
  .object({
    class: APIReferenceSchema.exactOptional(),
    features: z.array(APIReferenceSchema).exactOptional(),
    index: z.string().exactOptional(),
    level: z.number().exactOptional(),
    subclass: APIReferenceSchema.exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubclassLevelResource')

const SubraceSchema = APIReferenceSchema.and(
  z
    .object({
      ability_bonuses: z
        .array(AbilityBonusSchema)
        .exactOptional()
        .openapi({ description: 'Additional ability bonuses for the subrace.' }),
      desc: z.string().exactOptional().openapi({ description: 'Description of the subrace.' }),
      language_options: ChoiceSchema.exactOptional().openapi({
        description: 'Starting languages to choose from for the subrace.',
      }),
      languages: z
        .array(APIReferenceSchema)
        .exactOptional()
        .openapi({ description: 'Starting languages for all new characters of the subrace.' }),
      race: APIReferenceSchema.exactOptional().openapi({
        description: 'Parent race for the subrace.',
      }),
      racial_traits: z
        .array(APIReferenceSchema)
        .exactOptional()
        .openapi({ description: 'List of traits that for the subrace.' }),
      starting_proficiencies: z
        .array(APIReferenceSchema)
        .exactOptional()
        .openapi({ description: 'Starting proficiencies for all new characters of the subrace.' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: '`Subrace`\n' })
  .openapi('Subrace')

const TraitSchema = APIReferenceSchema.and(ResourceDescriptionSchema)
  .and(
    z
      .object({
        language_options: ChoiceSchema.exactOptional(),
        proficiencies: z
          .array(APIReferenceSchema)
          .exactOptional()
          .openapi({ description: 'List of `Proficiencies` this trait grants.' }),
        proficiency_choices: ChoiceSchema.exactOptional(),
        races: z
          .array(APIReferenceSchema)
          .exactOptional()
          .openapi({ description: 'List of `Races` that have access to the trait.' }),
        subraces: z
          .array(APIReferenceSchema)
          .exactOptional()
          .openapi({ description: 'List of `Subraces` that have access to the trait.' }),
        trait_specific: z
          .xor([
            ChoiceSchema,
            ChoiceSchema,
            z
              .object({
                'breath-weapon': z
                  .object({
                    area_of_effect: AreaOfEffectSchema.exactOptional(),
                    damage: z
                      .object({
                        damage_at_character_level: z.record(z.string(), z.string()).exactOptional(),
                        damage_type: APIReferenceSchema.exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    dc: DCSchema.exactOptional(),
                    desc: z.string().exactOptional(),
                    name: z.string().exactOptional(),
                    usage: z
                      .object({
                        times: z.number().exactOptional(),
                        type: z.string().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Description of the usage constraints of this action.',
                        required: [],
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'The breath weapon action associated with a draconic ancestry.',
                    required: [],
                  }),
                'damage-type': APIReferenceSchema.exactOptional().openapi({
                  description: 'A damage type associated with this trait.',
                }),
              })
              .openapi({ required: [] }),
          ])
          .exactOptional()
          .openapi({ description: 'Information specific to this trait' }),
      })
      .openapi({ required: [] }),
  )
  .openapi({ description: '`Trait`\n' })
  .openapi('Trait')

const WeaponPropertySchema = APIReferenceSchema.and(ResourceDescriptionSchema)
  .openapi({ description: 'WeaponProperty' })
  .openapi('WeaponProperty')

const ErrorResponseSchema = z
  .object({ error: z.string() })
  .openapi({ required: ['error'] })
  .openapi('ErrorResponse')

const AbilityScoreIndexParamsSchema = z
  .enum(['cha', 'con', 'dex', 'int', 'str', 'wis'])
  .openapi({
    param: {
      description: 'The `index` of the ability score to get.\n',
      in: 'path',
      name: 'index',
      required: true,
      schema: { enum: ['cha', 'con', 'dex', 'int', 'str', 'wis'], example: 'cha', type: 'string' },
    },
    example: 'cha',
  })

const AlignmentIndexParamsSchema = z
  .enum([
    'chaotic-neutral',
    'chaotic-evil',
    'chaotic-good',
    'lawful-neutral',
    'lawful-evil',
    'lawful-good',
    'neutral',
    'neutral-evil',
    'neutral-good',
  ])
  .openapi({
    param: {
      description: 'The `index` of the alignment to get.\n',
      in: 'path',
      name: 'index',
      required: true,
      schema: {
        enum: [
          'chaotic-neutral',
          'chaotic-evil',
          'chaotic-good',
          'lawful-neutral',
          'lawful-evil',
          'lawful-good',
          'neutral',
          'neutral-evil',
          'neutral-good',
        ],
        example: 'chaotic-neutral',
        type: 'string',
      },
    },
    example: 'chaotic-neutral',
  })

const BackgroundIndexParamsSchema = z
  .literal('acolyte')
  .openapi({
    param: {
      description: 'The `index` of the background to get.\n',
      in: 'path',
      name: 'index',
      required: true,
      schema: { enum: ['acolyte'], example: 'acolyte', type: 'string' },
    },
    example: 'acolyte',
  })

const BaseEndpointIndexParamsSchema = z
  .enum([
    'ability-scores',
    'alignments',
    'backgrounds',
    'classes',
    'conditions',
    'damage-types',
    'equipment',
    'equipment-categories',
    'feats',
    'features',
    'languages',
    'magic-items',
    'magic-schools',
    'monsters',
    'proficiencies',
    'races',
    'rule-sections',
    'rules',
    'skills',
    'spells',
    'subclasses',
    'subraces',
    'traits',
    'weapon-properties',
  ])
  .openapi({
    param: {
      in: 'path',
      name: 'endpoint',
      required: true,
      schema: {
        enum: [
          'ability-scores',
          'alignments',
          'backgrounds',
          'classes',
          'conditions',
          'damage-types',
          'equipment',
          'equipment-categories',
          'feats',
          'features',
          'languages',
          'magic-items',
          'magic-schools',
          'monsters',
          'proficiencies',
          'races',
          'rule-sections',
          'rules',
          'skills',
          'spells',
          'subclasses',
          'subraces',
          'traits',
          'weapon-properties',
        ],
        example: 'ability-scores',
        type: 'string',
      },
    },
    example: 'ability-scores',
  })

const ChallengeRatingFilterParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(
      z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        z.number(),
      ),
    ),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'The challenge rating or ratings to filter on.',
      examples: {
        'multiple-value': { value: [1, 2] },
        'multiple-value-with-float': { value: [2, 0.25] },
        'single-value': { value: [1] },
      },
      in: 'query',
      name: 'challenge_rating',
      required: false,
      schema: { items: { type: 'number' }, type: 'array' },
    },
  })

const ClassIndexParamsSchema = z
  .enum([
    'barbarian',
    'bard',
    'cleric',
    'druid',
    'fighter',
    'monk',
    'paladin',
    'ranger',
    'rogue',
    'sorcerer',
    'warlock',
    'wizard',
  ])
  .openapi({
    param: {
      description: 'The `index` of the class to get.\n',
      in: 'path',
      name: 'index',
      required: true,
      schema: {
        enum: [
          'barbarian',
          'bard',
          'cleric',
          'druid',
          'fighter',
          'monk',
          'paladin',
          'ranger',
          'rogue',
          'sorcerer',
          'warlock',
          'wizard',
        ],
        example: 'paladin',
        type: 'string',
      },
    },
    example: 'paladin',
  })

const ClassLevelParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.number().min(0).max(20),
  )
  .openapi({
    param: {
      in: 'path',
      name: 'class_level',
      required: true,
      schema: { example: 3, maximum: 20, minimum: 0, type: 'number' },
    },
    example: 3,
  })

const ConditionIndexParamsSchema = z
  .enum([
    'blinded',
    'charmed',
    'deafened',
    'exhaustion',
    'frightened',
    'grappled',
    'incapacitated',
    'invisible',
    'paralyzed',
    'petrified',
    'poisoned',
    'prone',
    'restrained',
    'stunned',
    'unconscious',
  ])
  .openapi({
    param: {
      description: 'The `index` of the condition to get.\n',
      in: 'path',
      name: 'index',
      required: true,
      schema: {
        enum: [
          'blinded',
          'charmed',
          'deafened',
          'exhaustion',
          'frightened',
          'grappled',
          'incapacitated',
          'invisible',
          'paralyzed',
          'petrified',
          'poisoned',
          'prone',
          'restrained',
          'stunned',
          'unconscious',
        ],
        example: 'blinded',
        type: 'string',
      },
    },
    example: 'blinded',
  })

const DamageTypeIndexParamsSchema = z
  .enum([
    'acid',
    'bludgeoning',
    'cold',
    'fire',
    'force',
    'lightning',
    'necrotic',
    'piercing',
    'poison',
    'psychic',
    'radiant',
    'slashing',
    'thunder',
  ])
  .openapi({
    param: {
      description: 'The `index` of the damage type to get.\n',
      in: 'path',
      name: 'index',
      required: true,
      schema: {
        enum: [
          'acid',
          'bludgeoning',
          'cold',
          'fire',
          'force',
          'lightning',
          'necrotic',
          'piercing',
          'poison',
          'psychic',
          'radiant',
          'slashing',
          'thunder',
        ],
        example: 'acid',
        type: 'string',
      },
    },
    example: 'acid',
  })

const EquipmentIndexParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'The `index` of the equipment to get.\n\nAvailable values can be found in the [`ResourceList`](#get-/api/-endpoint-) for `equipment`.\n',
      in: 'path',
      name: 'index',
      required: true,
      schema: { example: 'club', type: 'string' },
    },
    example: 'club',
  })

const FeatureIndexParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'The `index` of the feature to get.\n\nAvailable values can be found in the [`ResourceList`](#get-/api/-endpoint-) for `features`.\n',
      example: 'action-surge-1-use',
      in: 'path',
      name: 'index',
      required: true,
      schema: { type: 'string' },
    },
  })

const LanguageIndexParamsSchema = z
  .enum([
    'abyssal',
    'celestial',
    'common',
    'deep-speech',
    'draconic',
    'dwarvish',
    'elvish',
    'giant',
    'gnomish',
    'goblin',
    'halfling',
    'infernal',
    'orc',
    'primordial',
    'sylvan',
    'undercommon',
  ])
  .openapi({
    param: {
      description: 'The `index` of the language to get.\n',
      in: 'path',
      name: 'index',
      required: true,
      schema: {
        enum: [
          'abyssal',
          'celestial',
          'common',
          'deep-speech',
          'draconic',
          'dwarvish',
          'elvish',
          'giant',
          'gnomish',
          'goblin',
          'halfling',
          'infernal',
          'orc',
          'primordial',
          'sylvan',
          'undercommon',
        ],
        example: 'abyssal',
        type: 'string',
      },
    },
    example: 'abyssal',
  })

const LevelFilterParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(
      z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        z.int(),
      ),
    ),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'The level or levels to filter on.',
      examples: { 'multiple-value': { value: [1, 2] }, 'single-value': { value: [1] } },
      in: 'query',
      name: 'level',
      required: false,
      schema: { items: { type: 'integer' }, type: 'array' },
    },
  })

const LevelsSubclassFilterParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Adds subclasses for class to the response',
      examples: { 'partial-value': { value: 'ber' }, 'single-value': { value: 'berserker' } },
      in: 'query',
      name: 'subclass',
      required: false,
      schema: { type: 'string' },
    },
  })

const MagicSchoolIndexParamsSchema = z
  .enum([
    'abjuration',
    'conjuration',
    'divination',
    'enchantment',
    'evocation',
    'illusion',
    'necromancy',
    'transmutation',
  ])
  .openapi({
    param: {
      description: 'The `index` of the magic school to get.\n',
      in: 'path',
      name: 'index',
      required: true,
      schema: {
        enum: [
          'abjuration',
          'conjuration',
          'divination',
          'enchantment',
          'evocation',
          'illusion',
          'necromancy',
          'transmutation',
        ],
        example: 'abjuration',
        type: 'string',
      },
    },
    example: 'abjuration',
  })

const MonsterIndexParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The `index` of the `Monster` to get.\n',
      in: 'path',
      name: 'index',
      required: true,
      schema: { example: 'aboleth', type: 'string' },
    },
    example: 'aboleth',
  })

const ProficiencyIndexParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'The `index` of the proficiency to get.\n\nAvailable values can be found in the [`ResourceList`](#get-/api/-endpoint-) for `proficiencies`.\n',
      in: 'path',
      name: 'index',
      required: true,
      schema: { example: 'medium-armor', type: 'string' },
    },
    example: 'medium-armor',
  })

const RaceIndexParamsSchema = z
  .enum([
    'dragonborn',
    'dwarf',
    'elf',
    'gnome',
    'half-elf',
    'half-orc',
    'halfling',
    'human',
    'tiefling',
  ])
  .openapi({
    param: {
      description: 'The `index` of the race to get.\n',
      in: 'path',
      name: 'index',
      required: true,
      schema: {
        enum: [
          'dragonborn',
          'dwarf',
          'elf',
          'gnome',
          'half-elf',
          'half-orc',
          'halfling',
          'human',
          'tiefling',
        ],
        example: 'elf',
        type: 'string',
      },
    },
    example: 'elf',
  })

const RuleIndexParamsSchema = z
  .enum(['adventuring', 'appendix', 'combat', 'equipment', 'spellcasting', 'using-ability-scores'])
  .openapi({
    param: {
      description: 'The `index` of the rule to get.\n',
      in: 'path',
      name: 'index',
      required: true,
      schema: {
        enum: [
          'adventuring',
          'appendix',
          'combat',
          'equipment',
          'spellcasting',
          'using-ability-scores',
        ],
        example: 'adventuring',
        type: 'string',
      },
    },
    example: 'adventuring',
  })

const RuleSectionIndexParamsSchema = z
  .enum([
    'ability-checks',
    'ability-scores-and-modifiers',
    'actions-in-combat',
    'advantage-and-disadvantage',
    'between-adventures',
    'casting-a-spell',
    'cover',
    'damage-and-healing',
    'diseases',
    'fantasy-historical-pantheons',
    'madness',
    'making-an-attack',
    'mounted-combat',
    'movement',
    'movement-and-position',
    'objects',
    'poisons',
    'proficiency-bonus',
    'resting',
    'saving-throws',
    'sentient-magic-items',
    'standard-exchange-rates',
    'the-environment',
    'the-order-of-combat',
    'the-planes-of-existence',
    'time',
    'traps',
    'underwater-combat',
    'using-each-ability',
    'what-is-a-spell',
  ])
  .openapi({
    param: {
      description: 'The `index` of the rule section to get.\n',
      in: 'path',
      name: 'index',
      required: true,
      schema: {
        enum: [
          'ability-checks',
          'ability-scores-and-modifiers',
          'actions-in-combat',
          'advantage-and-disadvantage',
          'between-adventures',
          'casting-a-spell',
          'cover',
          'damage-and-healing',
          'diseases',
          'fantasy-historical-pantheons',
          'madness',
          'making-an-attack',
          'mounted-combat',
          'movement',
          'movement-and-position',
          'objects',
          'poisons',
          'proficiency-bonus',
          'resting',
          'saving-throws',
          'sentient-magic-items',
          'standard-exchange-rates',
          'the-environment',
          'the-order-of-combat',
          'the-planes-of-existence',
          'time',
          'traps',
          'underwater-combat',
          'using-each-ability',
          'what-is-a-spell',
        ],
        example: 'traps',
        type: 'string',
      },
    },
    example: 'traps',
  })

const SchoolFilterParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      description: 'The magic school or schools to filter on.',
      examples: {
        'multiple-value': { value: ['evocation', 'illusion'] },
        'partial-value': { value: ['illu'] },
        'single-value': { value: ['illusion'] },
      },
      in: 'query',
      name: 'school',
      required: false,
      schema: { items: { type: 'string' }, type: 'array' },
    },
  })

const SkillIndexParamsSchema = z
  .enum([
    'acrobatics',
    'animal-handling',
    'arcana',
    'athletics',
    'deception',
    'history',
    'insight',
    'intimidation',
    'investigation',
    'medicine',
    'nature',
    'perception',
    'performance',
    'persuasion',
    'religion',
    'sleight-of-hand',
    'stealth',
    'survival',
  ])
  .openapi({
    param: {
      description: 'The `index` of the skill to get.\n',
      in: 'path',
      name: 'index',
      required: true,
      schema: {
        enum: [
          'acrobatics',
          'animal-handling',
          'arcana',
          'athletics',
          'deception',
          'history',
          'insight',
          'intimidation',
          'investigation',
          'medicine',
          'nature',
          'perception',
          'performance',
          'persuasion',
          'religion',
          'sleight-of-hand',
          'stealth',
          'survival',
        ],
        example: 'nature',
        type: 'string',
      },
    },
    example: 'nature',
  })

const SpellIndexParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'The `index` of the `Spell` to get.\n\nAvailable values can be found in the [`ResourceList`](#get-/api/-endpoint-) for `spells`.\n',
      in: 'path',
      name: 'index',
      required: true,
      schema: { example: 'sacred-flame', type: 'string' },
    },
    example: 'sacred-flame',
  })

const SpellLevelParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.number().min(1).max(9),
  )
  .openapi({
    param: {
      in: 'path',
      name: 'spell_level',
      required: true,
      schema: { example: 4, maximum: 9, minimum: 1, type: 'number' },
    },
    example: 4,
  })

const SubclassIndexParamsSchema = z
  .enum([
    'berserker',
    'champion',
    'devotion',
    'draconic',
    'evocation',
    'fiend',
    'hunter',
    'land',
    'life',
    'lore',
    'open-hand',
    'thief',
  ])
  .openapi({
    param: {
      description: 'The `index` of the subclass to get.\n',
      in: 'path',
      name: 'index',
      required: true,
      schema: {
        enum: [
          'berserker',
          'champion',
          'devotion',
          'draconic',
          'evocation',
          'fiend',
          'hunter',
          'land',
          'life',
          'lore',
          'open-hand',
          'thief',
        ],
        example: 'fiend',
        type: 'string',
      },
    },
    example: 'fiend',
  })

const SubraceIndexParamsSchema = z
  .enum(['high-elf', 'hill-dwarf', 'lightfoot-halfling', 'rock-gnome'])
  .openapi({
    param: {
      description: 'The `index` of the subrace to get.\n',
      in: 'path',
      name: 'index',
      required: true,
      schema: {
        enum: ['high-elf', 'hill-dwarf', 'lightfoot-halfling', 'rock-gnome'],
        example: 'hill-dwarf',
        type: 'string',
      },
    },
    example: 'hill-dwarf',
  })

const TraitIndexParamsSchema = z
  .enum([
    'artificers-lore',
    'brave',
    'breath-weapon',
    'damage-resistance',
    'darkvision',
    'draconic-ancestry',
    'draconic-ancestry-black',
    'draconic-ancestry-blue',
    'draconic-ancestry-brass',
    'draconic-ancestry-bronze',
    'draconic-ancestry-copper',
    'draconic-ancestry-gold',
    'draconic-ancestry-green',
    'draconic-ancestry-red',
    'draconic-ancestry-silver',
    'draconic-ancestry-white',
    'dwarven-combat-training',
    'dwarven-resilience',
    'dwarven-toughness',
    'elf-weapon-training',
    'extra-language',
    'fey-ancestry',
    'gnome-cunning',
    'halfling-nimbleness',
    'hellish-resistance',
    'high-elf-cantrip',
    'infernal-legacy',
    'keen-senses',
    'lucky',
    'menacing',
    'naturally-stealthy',
    'relentless-endurance',
    'savage-attacks',
    'skill-versatility',
    'stonecunning',
    'tinker',
    'tool-proficiency',
    'trance',
  ])
  .openapi({
    param: {
      description: 'The `index` of the `Trait` to get.',
      in: 'path',
      name: 'index',
      required: true,
      schema: {
        enum: [
          'artificers-lore',
          'brave',
          'breath-weapon',
          'damage-resistance',
          'darkvision',
          'draconic-ancestry',
          'draconic-ancestry-black',
          'draconic-ancestry-blue',
          'draconic-ancestry-brass',
          'draconic-ancestry-bronze',
          'draconic-ancestry-copper',
          'draconic-ancestry-gold',
          'draconic-ancestry-green',
          'draconic-ancestry-red',
          'draconic-ancestry-silver',
          'draconic-ancestry-white',
          'dwarven-combat-training',
          'dwarven-resilience',
          'dwarven-toughness',
          'elf-weapon-training',
          'extra-language',
          'fey-ancestry',
          'gnome-cunning',
          'halfling-nimbleness',
          'hellish-resistance',
          'high-elf-cantrip',
          'infernal-legacy',
          'keen-senses',
          'lucky',
          'menacing',
          'naturally-stealthy',
          'relentless-endurance',
          'savage-attacks',
          'skill-versatility',
          'stonecunning',
          'tinker',
          'tool-proficiency',
          'trance',
        ],
        example: 'trance',
        type: 'string',
      },
    },
    example: 'trance',
  })

const WeaponPropertyIndexParamsSchema = z
  .enum([
    'ammunition',
    'finesse',
    'heavy',
    'light',
    'loading',
    'monk',
    'reach',
    'special',
    'thrown',
    'two-handed',
    'versatile',
  ])
  .openapi({
    param: {
      description: 'The `index` of the weapon property to get.\n',
      in: 'path',
      name: 'index',
      required: true,
      schema: {
        enum: [
          'ammunition',
          'finesse',
          'heavy',
          'light',
          'loading',
          'monk',
          'reach',
          'special',
          'thrown',
          'two-handed',
          'versatile',
        ],
        example: 'ammunition',
        type: 'string',
      },
    },
    example: 'ammunition',
  })

export const getApiRoute = createRoute({
  method: 'get',
  path: '/api',
  tags: ['Common'],
  summary: 'Get all resource URLs.',
  description:
    "Making a request to the API's base URL returns an object containing available endpoints.",
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.record(z.string(), z.string()),
          example: {
            'ability-scores': '/api/ability-scores',
            alignments: '/api/alignments',
            backgrounds: '/api/backgrounds',
            classes: '/api/classes',
            conditions: '/api/conditions',
            'damage-types': '/api/damage-types',
            equipment: '/api/equipment',
            'equipment-categories': '/api/equipment-categories',
            feats: '/api/feats',
            features: '/api/features',
            languages: '/api/languages',
            'magic-items': '/api/magic-items',
            'magic-schools': '/api/magic-schools',
            monsters: '/api/monsters',
            proficiencies: '/api/proficiencies',
            races: '/api/races',
            'rule-sections': '/api/rule-sections',
            rules: '/api/rules',
            skills: '/api/skills',
            spells: '/api/spells',
            subclasses: '/api/subclasses',
            subraces: '/api/subraces',
            traits: '/api/traits',
            'weapon-properties': '/api/weapon-properties',
          },
        },
      },
    },
  },
})

export const getApiAbilityScoresIndexRoute = createRoute({
  method: 'get',
  path: '/api/ability-scores/{index}',
  tags: ['Character Data'],
  summary: 'Get an ability score by index.',
  description:
    "# Ability Score\n\nRepresents one of the six abilities that describes a creature's physical and mental characteristics. The three main rolls of the game - the ability check, the saving throw, and the attack roll - rely on the ability scores. [[SRD p76](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=76)]\n",
  request: { params: z.object({ index: AbilityScoreIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: AbilityScoreSchema,
          example: {
            desc: [
              'Charisma measures your ability to interact effectively with others. It includes such factors as confidence and eloquence, and it can represent a charming or commanding personality.',
              'A Charisma check might arise when you try to influence or entertain others, when you try to make an impression or tell a convincing lie, or when you are navigating a tricky social situation. The Deception, Intimidation, Performance, and Persuasion skills reflect aptitude in certain kinds of Charisma checks.',
            ],
            full_name: 'Charisma',
            index: 'cha',
            name: 'CHA',
            skills: [
              { index: 'deception', name: 'Deception', url: '/api/skills/deception' },
              { index: 'intimidation', name: 'Intimidation', url: '/api/skills/intimidation' },
              { index: 'performance', name: 'Performance', url: '/api/skills/performance' },
              { index: 'persuasion', name: 'Persuasion', url: '/api/skills/persuasion' },
            ],
            url: '/api/ability-scores/cha',
          },
        },
      },
    },
  },
})

export const getApiAlignmentsIndexRoute = createRoute({
  method: 'get',
  path: '/api/alignments/{index}',
  tags: ['Character Data'],
  summary: 'Get an alignment by index.',
  description:
    '# Alignment\n\nA typical creature in the game world has an alignment, which broadly describes its moral and personal attitudes. Alignment is a combination of two factors: one identifies morality (good, evil, or neutral), and the other describes attitudes toward society and order (lawful, chaotic, or neutral). Thus, nine distinct alignments define the possible combinations.[[SRD p58](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=58)]\n',
  request: { params: z.object({ index: AlignmentIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: AlignmentSchema,
          example: {
            abbreviation: 'CN',
            desc: 'Chaotic neutral (CN) creatures follow their whims, holding their personal freedom above all else. Many barbarians and rogues, and some bards, are chaotic neutral.',
            index: 'chaotic-neutral',
            name: 'Chaotic Neutral',
            url: '/api/alignments/chaotic-neutral',
          },
        },
      },
    },
  },
})

export const getApiBackgroundsIndexRoute = createRoute({
  method: 'get',
  path: '/api/backgrounds/{index}',
  tags: ['Character Data'],
  summary: 'Get a background by index.',
  description:
    "# Background\n\nEvery story has a beginning. Your character's background reveals where you came from, how you became an adventurer, and your place in the world. Choosing a background provides you with important story cues about your character's identity. [[SRD p60](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=60)]\n\n_Note:_ acolyte is the only background included in the SRD.\n",
  request: { params: z.object({ index: BackgroundIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: BackgroundSchema,
          example: {
            bonds: {
              choose: 1,
              from: {
                option_set_type: 'options_array',
                options: [
                  {
                    option_type: 'string',
                    string:
                      'I would die to recover an ancient relic of my faith that was lost long ago.',
                  },
                  {
                    option_type: 'string',
                    string:
                      'I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.',
                  },
                  {
                    option_type: 'string',
                    string: 'I owe my life to the priest who took me in when my parents died.',
                  },
                  { option_type: 'string', string: 'Everything I do is for the common people.' },
                  {
                    option_type: 'string',
                    string: 'I will do anything to protect the temple where I served.',
                  },
                  {
                    option_type: 'string',
                    string:
                      'I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.',
                  },
                ],
              },
              type: 'bonds',
            },
            feature: {
              desc: [
                'As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle.',
                'You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.',
              ],
              name: 'Shelter of the Faithful',
            },
            flaws: {
              choose: 1,
              from: {
                option_set_type: 'options_array',
                options: [
                  {
                    option_type: 'string',
                    string: 'I judge others harshly, and myself even more severely.',
                  },
                  {
                    option_type: 'string',
                    string:
                      "I put too much trust in those who wield power within my temple's hierarchy.",
                  },
                  {
                    option_type: 'string',
                    string:
                      'My piety sometimes leads me to blindly trust those that profess faith in my god.',
                  },
                  { option_type: 'string', string: 'I am inflexible in my thinking.' },
                  {
                    option_type: 'string',
                    string: 'I am suspicious of strangers and expect the worst of them.',
                  },
                  {
                    option_type: 'string',
                    string:
                      'Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.',
                  },
                ],
              },
              type: 'flaws',
            },
            ideals: {
              choose: 1,
              from: {
                option_set_type: 'options_array',
                options: [
                  {
                    alignments: [
                      {
                        index: 'lawful-good',
                        name: 'Lawful Good',
                        url: '/api/alignments/lawful-good',
                      },
                      {
                        index: 'lawful-neutral',
                        name: 'Lawful Neutral',
                        url: '/api/alignments/lawful-neutral',
                      },
                      {
                        index: 'lawful-evil',
                        name: 'Lawful Evil',
                        url: '/api/alignments/lawful-evil',
                      },
                    ],
                    desc: 'Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld.',
                    option_type: 'ideal',
                  },
                  {
                    alignments: [
                      {
                        index: 'lawful-good',
                        name: 'Lawful Good',
                        url: '/api/alignments/lawful-good',
                      },
                      {
                        index: 'neutral-good',
                        name: 'Neutral Good',
                        url: '/api/alignments/neutral-good',
                      },
                      {
                        index: 'chaotic-good',
                        name: 'Chaotic Good',
                        url: '/api/alignments/chaotic-good',
                      },
                    ],
                    desc: 'Charity. I always try to help those in need, no matter what the personal cost.',
                    option_type: 'ideal',
                  },
                  {
                    alignments: [
                      {
                        index: 'chaotic-good',
                        name: 'Chaotic Good',
                        url: '/api/alignments/chaotic-good',
                      },
                      {
                        index: 'chaotic-neutral',
                        name: 'Chaotic Neutral',
                        url: '/api/alignments/chaotic-neutral',
                      },
                      {
                        index: 'chaotic-evil',
                        name: 'Chaotic Evil',
                        url: '/api/alignments/chaotic-evil',
                      },
                    ],
                    desc: 'Change. We must help bring about the changes the gods are constantly working in the world.',
                    option_type: 'ideal',
                  },
                  {
                    alignments: [
                      {
                        index: 'lawful-good',
                        name: 'Lawful Good',
                        url: '/api/alignments/lawful-good',
                      },
                      {
                        index: 'lawful-neutral',
                        name: 'Lawful Neutral',
                        url: '/api/alignments/lawful-neutral',
                      },
                      {
                        index: 'lawful-evil',
                        name: 'Lawful Evil',
                        url: '/api/alignments/lawful-evil',
                      },
                    ],
                    desc: "Power. I hope to one day rise to the top of my faith's religious hierarchy.",
                    option_type: 'ideal',
                  },
                  {
                    alignments: [
                      {
                        index: 'lawful-good',
                        name: 'Lawful Good',
                        url: '/api/alignments/lawful-good',
                      },
                      {
                        index: 'lawful-neutral',
                        name: 'Lawful Neutral',
                        url: '/api/alignments/lawful-neutral',
                      },
                      {
                        index: 'lawful-evil',
                        name: 'Lawful Evil',
                        url: '/api/alignments/lawful-evil',
                      },
                    ],
                    desc: 'Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well.',
                    option_type: 'ideal',
                  },
                  {
                    alignments: [
                      {
                        index: 'lawful-good',
                        name: 'Lawful Good',
                        url: '/api/alignments/lawful-good',
                      },
                      {
                        index: 'neutral-good',
                        name: 'Neutral Good',
                        url: '/api/alignments/neutral-good',
                      },
                      {
                        index: 'chaotic-good',
                        name: 'Chaotic Good',
                        url: '/api/alignments/chaotic-good',
                      },
                      {
                        index: 'lawful-neutral',
                        name: 'Lawful Neutral',
                        url: '/api/alignments/lawful-neutral',
                      },
                      { index: 'neutral', name: 'Neutral', url: '/api/alignments/neutral' },
                      {
                        index: 'chaotic-neutral',
                        name: 'Chaotic Neutral',
                        url: '/api/alignments/chaotic-neutral',
                      },
                      {
                        index: 'lawful-evil',
                        name: 'Lawful Evil',
                        url: '/api/alignments/lawful-evil',
                      },
                      {
                        index: 'neutral-evil',
                        name: 'Neutral Evil',
                        url: '/api/alignments/neutral-evil',
                      },
                      {
                        index: 'chaotic-evil',
                        name: 'Chaotic Evil',
                        url: '/api/alignments/chaotic-evil',
                      },
                    ],
                    desc: "Aspiration. I seek to prove myself worthy of my god's favor by matching my actions against his or her teachings.",
                    option_type: 'ideal',
                  },
                ],
              },
              type: 'ideals',
            },
            index: 'acolyte',
            language_options: {
              choose: 2,
              from: { option_set_type: 'resource_list', resource_list_url: '/api/languages' },
              type: 'languages',
            },
            name: 'Acolyte',
            personality_traits: {
              choose: 2,
              from: {
                option_set_type: 'options_array',
                options: [
                  {
                    option_type: 'string',
                    string:
                      "I idolize a particular hero of my faith, and constantly refer to that person's deeds and example.",
                  },
                  {
                    option_type: 'string',
                    string:
                      'I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.',
                  },
                  {
                    option_type: 'string',
                    string:
                      'I see omens in every event and action. The gods try to speak to us, we just need to listen.',
                  },
                  { option_type: 'string', string: 'Nothing can shake my optimistic attitude.' },
                  {
                    option_type: 'string',
                    string:
                      'I quote (or misquote) sacred texts and proverbs in almost every situation.',
                  },
                  {
                    option_type: 'string',
                    string:
                      'I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.',
                  },
                  {
                    option_type: 'string',
                    string:
                      "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me.",
                  },
                  {
                    option_type: 'string',
                    string:
                      "I've spent so long in the temple that I have little practical experience dealing with people in the outside world.",
                  },
                ],
              },
              type: 'personality_traits',
            },
            starting_equipment: [
              {
                equipment: {
                  index: 'clothes-common',
                  name: 'Clothes, common',
                  url: '/api/equipment/clothes-common',
                },
                quantity: 1,
              },
              {
                equipment: { index: 'pouch', name: 'Pouch', url: '/api/equipment/pouch' },
                quantity: 1,
              },
            ],
            starting_equipment_options: [
              {
                choose: 1,
                from: {
                  equipment_category: {
                    index: 'holy-symbols',
                    name: 'Holy Symbols',
                    url: '/api/equipment-categories/holy-symbols',
                  },
                  option_set_type: 'equipment_category',
                },
                type: 'equipment',
              },
            ],
            starting_proficiencies: [
              {
                index: 'skill-insight',
                name: 'Skill: Insight',
                url: '/api/proficiencies/skill-insight',
              },
              {
                index: 'skill-religion',
                name: 'Skill: Religion',
                url: '/api/proficiencies/skill-religion',
              },
            ],
            url: '/api/backgrounds/acolyte',
          },
        },
      },
    },
  },
})

export const getApiClassesIndexRoute = createRoute({
  method: 'get',
  path: '/api/classes/{index}',
  tags: ['Class'],
  summary: 'Get a class by index.',
  description:
    "# Class\n\nA character class is a fundamental part of the identity and nature of\ncharacters in the Dungeons & Dragons role-playing game. A character's\ncapabilities, strengths, and weaknesses are largely defined by its class.\nA character's class affects a character's available skills and abilities. [[SRD p8-55](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=8)]\n",
  request: { params: z.object({ index: ClassIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ClassSchema,
          example: {
            class_levels: '/api/classes/barbarian/levels',
            hit_die: 12,
            index: 'barbarian',
            multi_classing: {
              prerequisites: [
                {
                  ability_score: { index: 'str', name: 'STR', url: '/api/ability-scores/str' },
                  minimum_score: 13,
                },
              ],
              proficiencies: [
                { index: 'shields', name: 'Shields', url: '/api/proficiencies/shields' },
                {
                  index: 'simple-weapons',
                  name: 'Simple Weapons',
                  url: '/api/proficiencies/simple-weapons',
                },
                {
                  index: 'martial-weapons',
                  name: 'Martial Weapons',
                  url: '/api/proficiencies/martial-weapons',
                },
              ],
              proficiency_choices: [],
            },
            name: 'Barbarian',
            proficiencies: [
              { index: 'light-armor', name: 'Light Armor', url: '/api/proficiencies/light-armor' },
              {
                index: 'medium-armor',
                name: 'Medium Armor',
                url: '/api/proficiencies/medium-armor',
              },
              { index: 'shields', name: 'Shields', url: '/api/proficiencies/shields' },
              {
                index: 'simple-weapons',
                name: 'Simple Weapons',
                url: '/api/proficiencies/simple-weapons',
              },
              {
                index: 'martial-weapons',
                name: 'Martial Weapons',
                url: '/api/proficiencies/martial-weapons',
              },
            ],
            proficiency_choices: [
              {
                choose: 2,
                desc: 'Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival',
                from: {
                  option_set_type: 'options_array',
                  options: [
                    {
                      item: {
                        index: 'skill-animal-handling',
                        name: 'Skill: Animal Handling',
                        url: '/api/proficiencies/skill-animal-handling',
                      },
                      option_type: 'reference',
                    },
                    {
                      item: {
                        index: 'skill-athletics',
                        name: 'Skill: Athletics',
                        url: '/api/proficiencies/skill-athletics',
                      },
                      option_type: 'reference',
                    },
                    {
                      item: {
                        index: 'skill-intimidation',
                        name: 'Skill: Intimidation',
                        url: '/api/proficiencies/skill-intimidation',
                      },
                      option_type: 'reference',
                    },
                    {
                      item: {
                        index: 'skill-nature',
                        name: 'Skill: Nature',
                        url: '/api/proficiencies/skill-nature',
                      },
                      option_type: 'reference',
                    },
                    {
                      item: {
                        index: 'skill-perception',
                        name: 'Skill: Perception',
                        url: '/api/proficiencies/skill-perception',
                      },
                      option_type: 'reference',
                    },
                    {
                      item: {
                        index: 'skill-survival',
                        name: 'Skill: Survival',
                        url: '/api/proficiencies/skill-survival',
                      },
                      option_type: 'reference',
                    },
                  ],
                },
                type: 'proficiencies',
              },
            ],
            saving_throws: [
              { index: 'str', name: 'STR', url: '/api/ability-scores/str' },
              { index: 'con', name: 'CON', url: '/api/ability-scores/con' },
            ],
            starting_equipment: [
              {
                equipment: {
                  index: 'explorers-pack',
                  name: "Explorer's Pack",
                  url: '/api/equipment/explorers-pack',
                },
                quantity: 1,
              },
              {
                equipment: { index: 'javelin', name: 'Javelin', url: '/api/equipment/javelin' },
                quantity: 4,
              },
            ],
            starting_equipment_options: [
              {
                choose: 1,
                desc: '(a) a greataxe or (b) any martial melee weapon',
                from: {
                  option_set_type: 'options_array',
                  options: [
                    {
                      count: 1,
                      of: { index: 'greataxe', name: 'Greataxe', url: '/api/equipment/greataxe' },
                      option_type: 'counted_reference',
                    },
                    {
                      choice: {
                        choose: 1,
                        desc: 'any martial melee weapon',
                        from: {
                          equipment_category: {
                            index: 'martial-melee-weapons',
                            name: 'Martial Melee Weapons',
                            url: '/api/equipment-categories/martial-melee-weapons',
                          },
                          option_set_type: 'equipment_category',
                        },
                        type: 'equipment',
                      },
                      option_type: 'choice',
                    },
                  ],
                },
                type: 'equipment',
              },
              {
                choose: 1,
                desc: '(a) two handaxes or (b) any simple weapon',
                from: {
                  option_set_type: 'options_array',
                  options: [
                    {
                      count: 2,
                      of: { index: 'handaxe', name: 'Handaxe', url: '/api/equipment/handaxe' },
                      option_type: 'counted_reference',
                    },
                    {
                      choice: {
                        choose: 1,
                        desc: 'any simple weapon',
                        from: {
                          equipment_category: {
                            index: 'simple-weapons',
                            name: 'Simple Weapons',
                            url: '/api/equipment-categories/simple-weapons',
                          },
                          option_set_type: 'equipment_category',
                        },
                        type: 'equipment',
                      },
                      option_type: 'choice',
                    },
                  ],
                },
                type: 'equipment',
              },
            ],
            subclasses: [
              { index: 'berserker', name: 'Berserker', url: '/api/subclasses/berserker' },
            ],
            url: '/api/classes/barbarian',
          },
        },
      },
    },
  },
})

export const getApiClassesIndexFeaturesRoute = createRoute({
  method: 'get',
  path: '/api/classes/{index}/features',
  tags: ['Class Resource Lists'],
  summary: 'Get features available for a class.',
  request: { params: z.object({ index: ClassIndexParamsSchema }) },
  responses: {
    200: {
      description: 'List of features for the class.',
      content: { 'application/json': { schema: APIReferenceListSchema } },
    },
  },
})

export const getApiClassesIndexLevelsRoute = createRoute({
  method: 'get',
  path: '/api/classes/{index}/levels',
  tags: ['Class Levels'],
  summary: 'Get all level resources for a class.',
  request: {
    params: z.object({ index: ClassIndexParamsSchema }),
    query: z.object({ subclass: LevelsSubclassFilterParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ClassLevelSchema) } },
    },
  },
})

export const getApiClassesIndexLevelsClassLevelRoute = createRoute({
  method: 'get',
  path: '/api/classes/{index}/levels/{class_level}',
  tags: ['Class Levels'],
  summary: 'Get level resource for a class and level.',
  request: {
    params: z.object({ index: ClassIndexParamsSchema, class_level: ClassLevelParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ClassLevelSchema,
          example: {
            ability_score_bonuses: 0,
            class: { index: 'barbarian', name: 'Barbarian', url: '/api/classes/barbarian' },
            class_specific: { brutal_critical_dice: 0, rage_count: 2, rage_damage_bonus: 2 },
            features: [
              { index: 'rage', name: 'Rage', url: '/api/features/rage' },
              {
                index: 'barbarian-unarmored-defense',
                name: 'Unarmored Defense',
                url: '/api/features/barbarian-unarmored-defense',
              },
            ],
            index: 'barbarian-1',
            level: 1,
            prof_bonus: 2,
            url: '/api/classes/barbarian/levels/1',
          },
        },
      },
    },
  },
})

export const getApiClassesIndexLevelsClassLevelFeaturesRoute = createRoute({
  method: 'get',
  path: '/api/classes/{index}/levels/{class_level}/features',
  tags: ['Class Levels'],
  summary: 'Get features available to a class at the requested level.',
  request: {
    params: z.object({ index: ClassIndexParamsSchema, class_level: ClassLevelParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIReferenceListSchema,
          example: {
            count: 2,
            results: [
              {
                index: 'barbarian-unarmored-defense',
                name: 'Unarmored Defense',
                url: '/api/features/barbarian-unarmored-defense',
              },
              { index: 'rage', name: 'Rage', url: '/api/features/rage' },
            ],
          },
        },
      },
    },
  },
})

export const getApiClassesIndexLevelsSpellLevelSpellsRoute = createRoute({
  method: 'get',
  path: '/api/classes/{index}/levels/{spell_level}/spells',
  tags: ['Class Levels'],
  summary: 'Get spells of the requested level available to the class.',
  request: {
    params: z.object({ index: ClassIndexParamsSchema, spell_level: SpellLevelParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIReferenceListSchema,
          example: {
            count: 5,
            results: [
              {
                index: 'dominate-monster',
                name: 'Dominate Monster',
                url: '/api/spells/dominate-monster',
              },
              { index: 'earthquake', name: 'Earthquake', url: '/api/spells/earthquake' },
              {
                index: 'incendiary-cloud',
                name: 'Incendiary Cloud',
                url: '/api/spells/incendiary-cloud',
              },
              {
                index: 'power-word-stun',
                name: 'Power Word Stun',
                url: '/api/spells/power-word-stun',
              },
              { index: 'sunburst', name: 'Sunburst', url: '/api/spells/sunburst' },
            ],
          },
        },
      },
    },
  },
})

export const getApiClassesIndexMultiClassingRoute = createRoute({
  method: 'get',
  path: '/api/classes/{index}/multi-classing',
  tags: ['Class'],
  summary: 'Get multiclassing resource for a class.',
  request: { params: z.object({ index: ClassIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: MulticlassingSchema,
          example: {
            prerequisites: [
              {
                ability_score: { index: 'str', name: 'STR', url: '/api/ability-scores/str' },
                minimum_score: 13,
              },
            ],
            proficiencies: [
              { index: 'shields', name: 'Shields', url: '/api/proficiencies/shields' },
              {
                index: 'simple-weapons',
                name: 'Simple Weapons',
                url: '/api/proficiencies/simple-weapons',
              },
              {
                index: 'martial-weapons',
                name: 'Martial Weapons',
                url: '/api/proficiencies/martial-weapons',
              },
            ],
            proficiency_choices: [],
          },
        },
      },
    },
  },
})

export const getApiClassesIndexProficienciesRoute = createRoute({
  method: 'get',
  path: '/api/classes/{index}/proficiencies',
  tags: ['Class Resource Lists'],
  summary: 'Get proficiencies available for a class.',
  request: { params: z.object({ index: ClassIndexParamsSchema }) },
  responses: {
    200: {
      description: 'List of proficiencies for the class.',
      content: { 'application/json': { schema: APIReferenceListSchema } },
    },
  },
})

export const getApiClassesIndexSpellcastingRoute = createRoute({
  method: 'get',
  path: '/api/classes/{index}/spellcasting',
  tags: ['Class'],
  summary: 'Get spellcasting info for a class.',
  request: { params: z.object({ index: ClassIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SpellcastingSchema,
          example: {
            info: [
              {
                desc: [
                  'You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table.',
                ],
                name: 'Cantrips',
              },
              {
                desc: [
                  "The Bard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                  'For example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot.',
                ],
                name: 'Spell Slots',
              },
              {
                desc: [
                  'You know four 1st-level spells of your choice from the bard spell list.',
                  'The Spells Known column of the Bard table shows when you learn more bard spells of your choice.',
                  'Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.',
                  'Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.',
                ],
                name: 'Spells Known of 1st Level and Higher',
              },
              {
                desc: [
                  'Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.',
                  'Spell save DC = 8 + your proficiency bonus + your Charisma modifier.',
                  'Spell attack modifier = your proficiency bonus + your Charisma modifier.',
                ],
                name: 'Spellcasting Ability',
              },
              {
                desc: [
                  'You can cast any bard spell you know as a ritual if that spell has the ritual tag.',
                ],
                name: 'Ritual Casting',
              },
              {
                desc: [
                  'You can use a musical instrument (see Equipment) as a spellcasting focus for your bard spells.',
                ],
                name: 'Spellcasting Focus',
              },
            ],
            level: 1,
            spellcasting_ability: { index: 'cha', name: 'CHA', url: '/api/ability-scores/cha' },
          },
        },
      },
    },
    404: {
      description: 'Not found.',
      content: {
        'application/json': { schema: ErrorResponseSchema, example: { error: 'Not found' } },
      },
    },
  },
})

export const getApiClassesIndexSpellsRoute = createRoute({
  method: 'get',
  path: '/api/classes/{index}/spells',
  tags: ['Class Resource Lists'],
  summary: 'Get spells available for a class.',
  request: { params: z.object({ index: ClassIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIReferenceListSchema,
          example: {
            count: 2,
            results: [
              {
                index: 'power-word-kill',
                name: 'Power Word Kill',
                url: '/api/spells/power-word-kill',
              },
              {
                index: 'true-polymorph',
                name: 'True Polymorph',
                url: '/api/spells/true-polymorph',
              },
            ],
          },
        },
      },
    },
  },
})

export const getApiClassesIndexSubclassesRoute = createRoute({
  method: 'get',
  path: '/api/classes/{index}/subclasses',
  tags: ['Class Resource Lists'],
  summary: 'Get subclasses available for a class.',
  request: { params: z.object({ index: ClassIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: APIReferenceListSchema,
          example: {
            count: 1,
            results: [{ index: 'berserker', name: 'Berserker', url: '/api/subclasses/berserker' }],
          },
        },
      },
    },
  },
})

export const getApiConditionsIndexRoute = createRoute({
  method: 'get',
  path: '/api/conditions/{index}',
  tags: ['Game Mechanics'],
  summary: 'Get a condition by index.',
  description:
    '# Condition\n\nA condition alters a creature’s capabilities in a variety of ways and can \narise as a result of a spell, a class feature, a monster’s attack, or other \neffect. Most conditions, such as blinded, are impairments, but a few, such \nas invisible, can be advantageous.\n',
  request: { params: z.object({ index: ConditionIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ConditionSchema,
          example: {
            desc: [
              "- A blinded creature can't see and automatically fails any ability check that requires sight.",
              "- Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage.",
            ],
            index: 'blinded',
            name: 'Blinded',
            url: '/api/conditions/blinded',
          },
        },
      },
    },
  },
})

export const getApiDamageTypesIndexRoute = createRoute({
  method: 'get',
  path: '/api/damage-types/{index}',
  tags: ['Game Mechanics'],
  summary: 'Get a damage type by index.',
  description:
    '# Damage type\n\nDifferent attacks, damaging spells, and other harmful effects deal different \ntypes of damage. Damage types have no rules of their own, but other rules, \nsuch as damage resistance, rely on the types.\n',
  request: { params: z.object({ index: DamageTypeIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: DamageTypeSchema,
          example: {
            desc: [
              "The corrosive spray of a black dragon's breath and the dissolving enzymes secreted by a black pudding deal acid damage.",
            ],
            index: 'acid',
            name: 'Acid',
            url: '/api/damage-types/acid',
          },
        },
      },
    },
  },
})

export const getApiEquipmentCategoriesIndexRoute = createRoute({
  method: 'get',
  path: '/api/equipment-categories/{index}',
  tags: ['Equipment'],
  summary: 'Get an equipment category by index.',
  description: 'These are the categories that various equipment fall under.',
  request: {
    params: z.object({
      index: z
        .string()
        .openapi({
          param: {
            description:
              'The `index` of the equipment category score to get.\n\nAvailable values can be found in the resource list for this endpoint.\n',
            example: 'waterborne-vehicles',
            in: 'path',
            name: 'index',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: EquipmentCategorySchema,
          example: {
            equipment: [
              { index: 'galley', name: 'Galley', url: '/api/equipment/galley' },
              { index: 'keelboat', name: 'Keelboat', url: '/api/equipment/keelboat' },
              { index: 'longship', name: 'Longship', url: '/api/equipment/longship' },
              { index: 'rowboat', name: 'Rowboat', url: '/api/equipment/rowboat' },
              { index: 'sailing-ship', name: 'Sailing ship', url: '/api/equipment/sailing-ship' },
              { index: 'warship', name: 'Warship', url: '/api/equipment/warship' },
            ],
            index: 'waterborne-vehicles',
            name: 'Waterborne Vehicles',
            url: '/api/equipment-categories/waterborne-vehicles',
          },
        },
      },
    },
  },
})

export const getApiEquipmentIndexRoute = createRoute({
  method: 'get',
  path: '/api/equipment/{index}',
  tags: ['Equipment'],
  summary: 'Get an equipment item by index.',
  description:
    '# Equipment\n\nOpportunities abound to find treasure, equipment, weapons, armor, and more \nin the dungeons you explore. Normally, you can sell your treasures and \ntrinkets when you return to a town or other settlement, provided that you \ncan find buyers and merchants interested in your loot.\n',
  request: { params: z.object({ index: EquipmentIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: EquipmentSchema,
          example: {
            category_range: 'Simple Melee',
            contents: [],
            cost: { quantity: 1, unit: 'sp' },
            damage: {
              damage_dice: '1d4',
              damage_type: {
                index: 'bludgeoning',
                name: 'Bludgeoning',
                url: '/api/damage-types/bludgeoning',
              },
            },
            desc: [],
            equipment_category: {
              index: 'weapon',
              name: 'Weapon',
              url: '/api/equipment-categories/weapon',
            },
            index: 'club',
            name: 'Club',
            properties: [
              { index: 'light', name: 'Light', url: '/api/weapon-properties/light' },
              { index: 'monk', name: 'Monk', url: '/api/weapon-properties/monk' },
            ],
            range: { long: null, normal: 5 },
            special: [],
            url: '/api/equipment/club',
            weapon_category: 'Simple',
            weapon_range: 'Melee',
            weight: 2,
          },
        },
      },
    },
  },
})

export const getApiFeatsIndexRoute = createRoute({
  method: 'get',
  path: '/api/feats/{index}',
  tags: ['Feats'],
  summary: 'Get a feat by index.',
  description:
    '# Feat \n\nA feat is a boon a character can receive at level up instead of an ability score increase.\n',
  request: {
    params: z.object({
      index: z
        .literal('grappler')
        .openapi({
          param: {
            description: 'The `index` of the feat to get.\n',
            in: 'path',
            name: 'index',
            required: true,
            schema: { enum: ['grappler'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: FeatSchema,
          example: {
            desc: [
              'You’ve developed the Skills necessary to hold your own in close--quarters Grappling. You gain the following benefits:',
              '- You have advantage on Attack Rolls against a creature you are Grappling.',
              '- You can use your action to try to pin a creature Grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both Restrained until the grapple ends.',
            ],
            index: 'grappler',
            name: 'Grappler',
            prerequisites: [
              {
                ability_score: { index: 'str', name: 'STR', url: '/api/ability-scores/str' },
                minimum_score: 13,
              },
            ],
            url: '/api/feats/grappler',
          },
        },
      },
    },
  },
})

export const getApiFeaturesIndexRoute = createRoute({
  method: 'get',
  path: '/api/features/{index}',
  tags: ['Features'],
  summary: 'Get a feature by index.',
  description:
    '# Feature \n\nWhen you gain a new level in a class, you get its features for that level. \nYou don’t, however, receive the class’s starting Equipment, and a few \nfeatures have additional rules when you’re multiclassing: Channel Divinity, \nExtra Attack, Unarmored Defense, and Spellcasting.\n',
  request: { params: z.object({ index: FeatureIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: FeatureSchema,
          example: {
            class: { index: 'fighter', name: 'Fighter', url: '/api/classes/fighter' },
            desc: [
              'Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.',
              'Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.',
            ],
            index: 'action-surge-1-use',
            level: 2,
            name: 'Action Surge (1 use)',
            prerequisites: [],
            url: '/api/features/action-surge-1-use',
          },
        },
      },
    },
  },
})

export const getApiLanguagesIndexRoute = createRoute({
  method: 'get',
  path: '/api/languages/{index}',
  tags: ['Character Data'],
  summary: 'Get a language by index.',
  description:
    '# Language\n\nYour race indicates the languages your character can speak by default, and your background might give you access to one or more additional languages of your choice. [[SRD p59](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=59)]\n',
  request: { params: z.object({ index: LanguageIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: LanguageSchema,
          example: {
            desc: 'Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.',
            index: 'elvish',
            name: 'Elvish',
            script: 'Elvish',
            type: 'Standard',
            typical_speakers: ['Elves'],
            url: '/api/languages/elvish',
          },
        },
      },
    },
  },
})

export const getApiMagicItemsIndexRoute = createRoute({
  method: 'get',
  path: '/api/magic-items/{index}',
  tags: ['Equipment'],
  summary: 'Get a magic item by index.',
  description: 'These are the various magic items you can find in the game.',
  request: {
    params: z.object({
      index: z
        .string()
        .openapi({
          param: {
            description:
              'The `index` of the magic item to get.\n\nAvailable values can be found in the resource list for this endpoint.\n',
            example: 'adamantine-armor',
            in: 'path',
            name: 'index',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: MagicItemSchema,
          example: {
            desc: [
              'Armor (medium or heavy, but not hide), uncommon',
              "This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you're wearing it, any critical hit against you becomes a normal hit.",
            ],
            equipment_category: {
              index: 'armor',
              name: 'Armor',
              url: '/api/equipment-categories/armor',
            },
            index: 'adamantine-armor',
            name: 'Adamantine Armor',
            rarity: { name: 'Uncommon' },
            url: '/api/magic-items/adamantine-armor',
            variant: false,
            variants: [],
          },
        },
      },
    },
  },
})

export const getApiMagicSchoolsIndexRoute = createRoute({
  method: 'get',
  path: '/api/magic-schools/{index}',
  tags: ['Game Mechanics'],
  summary: 'Get a magic school by index.',
  description:
    '# Magic School\n\nAcademies of magic group spells into eight categories called schools of \nmagic. Scholars, particularly wizards, apply these categories to all spells, \nbelieving that all magic functions in essentially the same way, whether it \nderives from rigorous study or is bestowed by a deity.\n',
  request: { params: z.object({ index: MagicSchoolIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: MagicSchoolSchema,
          example: {
            desc: "Conjuration spells involve the transportation of objects and creatures from one location to another. Some spells summon creatures or objects to the caster's side, whereas others allow the caster to teleport to another location. Some conjurations create objects or effects out of nothing.",
            index: 'conjuration',
            name: 'Conjuration',
            url: '/api/magic-schools/conjuration',
          },
        },
      },
    },
  },
})

export const getApiMonstersRoute = createRoute({
  method: 'get',
  path: '/api/monsters',
  tags: ['Monsters'],
  summary: 'Get list of monsters with optional filtering',
  request: { query: z.object({ challenge_rating: ChallengeRatingFilterParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: APIReferenceListSchema } } },
  },
})

export const getApiMonstersIndexRoute = createRoute({
  method: 'get',
  path: '/api/monsters/{index}',
  tags: ['Monsters'],
  summary: 'Get monster by index.',
  request: { params: z.object({ index: MonsterIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: MonsterSchema,
          example: {
            actions: [
              {
                actions: [{ action_name: 'Tentacle', count: 3, type: 'melee' }],
                attacks: [],
                damage: [],
                desc: 'The aboleth makes three tentacle attacks.',
                multiattack_type: 'actions',
                name: 'Multiattack',
              },
              {
                attack_bonus: 9,
                attacks: [],
                damage: [
                  {
                    damage_dice: '2d6+5',
                    damage_type: {
                      index: 'bludgeoning',
                      name: 'Bludgeoning',
                      url: '/api/damage-types/bludgeoning',
                    },
                  },
                  {
                    damage_dice: '1d12',
                    damage_type: { index: 'acid', name: 'Acid', url: '/api/damage-types/acid' },
                  },
                ],
                dc: {
                  dc_type: { index: 'con', name: 'CON', url: '/api/ability-scores/con' },
                  dc_value: 14,
                  success_type: 'none',
                },
                desc: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.",
                name: 'Tentacle',
              },
              {
                attack_bonus: 9,
                attacks: [],
                damage: [
                  {
                    damage_dice: '3d6+5',
                    damage_type: {
                      index: 'bludgeoning',
                      name: 'Bludgeoning',
                      url: '/api/damage-types/bludgeoning',
                    },
                  },
                ],
                desc: 'Melee Weapon Attack: +9 to hit, reach 10 ft. one target. Hit: 15 (3d6 + 5) bludgeoning damage.',
                name: 'Tail',
              },
              {
                attacks: [],
                damage: [],
                dc: {
                  dc_type: { index: 'wis', name: 'WIS', url: '/api/ability-scores/wis' },
                  dc_value: 14,
                  success_type: 'none',
                },
                desc: "The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.\nWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.",
                name: 'Enslave',
                usage: { times: 3, type: 'per day' },
              },
            ],
            alignment: 'lawful evil',
            armor_class: [{ type: 'natural', value: 17 }],
            challenge_rating: 10,
            charisma: 18,
            condition_immunities: [],
            constitution: 15,
            damage_immunities: [],
            damage_resistances: [],
            damage_vulnerabilities: [],
            dexterity: 9,
            forms: [],
            hit_dice: '18d10',
            hit_points: 135,
            hit_points_roll: '18d10+36',
            index: 'aboleth',
            intelligence: 18,
            languages: 'Deep Speech, telepathy 120 ft.',
            legendary_actions: [
              {
                damage: [],
                desc: 'The aboleth makes a Wisdom (Perception) check.',
                name: 'Detect',
              },
              { damage: [], desc: 'The aboleth makes one tail attack.', name: 'Tail Swipe' },
              {
                attack_bonus: 0,
                damage: [
                  {
                    damage_dice: '3d6',
                    damage_type: {
                      index: 'psychic',
                      name: 'Psychic',
                      url: '/api/damage-types/psychic',
                    },
                  },
                ],
                desc: 'One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.',
                name: 'Psychic Drain (Costs 2 Actions)',
              },
            ],
            name: 'Aboleth',
            proficiencies: [
              {
                proficiency: {
                  index: 'saving-throw-con',
                  name: 'Saving Throw: CON',
                  url: '/api/proficiencies/saving-throw-con',
                },
                value: 6,
              },
              {
                proficiency: {
                  index: 'saving-throw-int',
                  name: 'Saving Throw: INT',
                  url: '/api/proficiencies/saving-throw-int',
                },
                value: 8,
              },
              {
                proficiency: {
                  index: 'saving-throw-wis',
                  name: 'Saving Throw: WIS',
                  url: '/api/proficiencies/saving-throw-wis',
                },
                value: 6,
              },
              {
                proficiency: {
                  index: 'skill-history',
                  name: 'Skill: History',
                  url: '/api/proficiencies/skill-history',
                },
                value: 12,
              },
              {
                proficiency: {
                  index: 'skill-perception',
                  name: 'Skill: Perception',
                  url: '/api/proficiencies/skill-perception',
                },
                value: 10,
              },
            ],
            reactions: [],
            senses: { darkvision: '120 ft.', passive_perception: 20 },
            size: 'Large',
            special_abilities: [
              { damage: [], desc: 'The aboleth can breathe air and water.', name: 'Amphibious' },
              {
                damage: [],
                dc: {
                  dc_type: { index: 'con', name: 'CON', url: '/api/ability-scores/con' },
                  dc_value: 14,
                  success_type: 'none',
                },
                desc: 'While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater.',
                name: 'Mucous Cloud',
              },
              {
                damage: [],
                desc: "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.",
                name: 'Probing Telepathy',
              },
            ],
            speed: { swim: '40 ft.', walk: '10 ft.' },
            strength: 21,
            subtype: null,
            type: 'aberration',
            url: '/api/monsters/aboleth',
            wisdom: 15,
            xp: 5900,
          },
        },
      },
    },
  },
})

export const getApiProficienciesIndexRoute = createRoute({
  method: 'get',
  path: '/api/proficiencies/{index}',
  tags: ['Character Data'],
  summary: 'Get a proficiency by index.',
  description:
    '# Proficiency \n\nBy virtue of race, class, and background a character is proficient at using certain skills, weapons, and equipment. Characters can also gain additional proficiencies at higher levels or by multiclassing. A characters starting proficiencies are determined during character creation.\n',
  request: { params: z.object({ index: ProficiencyIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ProficiencySchema,
          example: {
            classes: [
              { index: 'barbarian', name: 'Barbarian', url: '/api/classes/barbarian' },
              { index: 'cleric', name: 'Cleric', url: '/api/classes/cleric' },
              { index: 'druid', name: 'Druid', url: '/api/classes/druid' },
              { index: 'ranger', name: 'Ranger', url: '/api/classes/ranger' },
            ],
            index: 'medium-armor',
            name: 'Medium Armor',
            races: [],
            reference: {
              index: 'medium-armor',
              name: 'Medium Armor',
              url: '/api/equipment-categories/medium-armor',
            },
            type: 'Armor',
            url: '/api/proficiencies/medium-armor',
          },
        },
      },
    },
  },
})

export const getApiRacesIndexRoute = createRoute({
  method: 'get',
  path: '/api/races/{index}',
  tags: ['Races'],
  summary: 'Get a race by index.',
  description:
    'Each race grants your character ability and skill bonuses as well as racial traits.',
  request: { params: z.object({ index: RaceIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: RaceSchema,
          example: {
            ability_bonuses: [
              {
                ability_score: { index: 'dex', name: 'DEX', url: '/api/ability-scores/dex' },
                bonus: 2,
              },
            ],
            age: 'Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.',
            alignment:
              "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not. The drow are an exception; their exile has made them vicious and dangerous. Drow are more often evil than not.",
            index: 'elf',
            language_desc:
              'You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.',
            languages: [
              { index: 'common', name: 'Common', url: '/api/languages/common' },
              { index: 'elvish', name: 'Elvish', url: '/api/languages/elvish' },
            ],
            name: 'Elf',
            size: 'Medium',
            size_description:
              'Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.',
            speed: 30,
            starting_proficiencies: [
              {
                index: 'skill-perception',
                name: 'Skill: Perception',
                url: '/api/proficiencies/skill-perception',
              },
            ],
            subraces: [{ index: 'high-elf', name: 'High Elf', url: '/api/subraces/high-elf' }],
            traits: [
              { index: 'darkvision', name: 'Darkvision', url: '/api/traits/darkvision' },
              { index: 'fey-ancestry', name: 'Fey Ancestry', url: '/api/traits/fey-ancestry' },
              { index: 'trance', name: 'Trance', url: '/api/traits/trance' },
            ],
            url: '/api/races/elf',
          },
        },
      },
    },
  },
})

export const getApiRacesIndexProficienciesRoute = createRoute({
  method: 'get',
  path: '/api/races/{index}/proficiencies',
  tags: ['Races'],
  summary: 'Get proficiencies available for a race.',
  request: { params: z.object({ index: RaceIndexParamsSchema }) },
  responses: {
    200: {
      description: 'List of proficiencies for the race.',
      content: { 'application/json': { schema: APIReferenceListSchema } },
    },
  },
})

export const getApiRacesIndexSubracesRoute = createRoute({
  method: 'get',
  path: '/api/races/{index}/subraces',
  tags: ['Races'],
  summary: 'Get subraces available for a race.',
  request: { params: z.object({ index: RaceIndexParamsSchema }) },
  responses: {
    200: {
      description: 'List of subraces for the race.',
      content: { 'application/json': { schema: APIReferenceListSchema } },
    },
  },
})

export const getApiRacesIndexTraitsRoute = createRoute({
  method: 'get',
  path: '/api/races/{index}/traits',
  tags: ['Races'],
  summary: 'Get traits available for a race.',
  request: { params: z.object({ index: RaceIndexParamsSchema }) },
  responses: {
    200: {
      description: 'List of traits for the race.',
      content: { 'application/json': { schema: APIReferenceListSchema } },
    },
  },
})

export const getApiRuleSectionsIndexRoute = createRoute({
  method: 'get',
  path: '/api/rule-sections/{index}',
  tags: ['Rules'],
  summary: 'Get a rule section by index.',
  description:
    'Rule sections represent a sub-heading and text that can be found underneath a rule heading in the SRD.',
  request: { params: z.object({ index: RuleSectionIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: RuleSectionSchema,
          example: {
            desc: "## Time\n\nIn situations where keeping track of the passage of time is important, the GM determines the time a task requires. The GM might use a different time scale depending on the context of the situation at hand. In a dungeon environment, the adventurers' movement happens on a scale of **minutes**. It takes them about a minute to creep down a long hallway, another minute to check for traps on the door at the end of the hall, and a good ten minutes to search the chamber beyond for anything interesting or valuable.\n\nIn a city or wilderness, a scale of **hours** is often more appropriate. Adventurers eager to reach the lonely tower at the heart of the forest hurry across those fifteen miles in just under four hours' time.\n\nFor long journeys, a scale of **days** works best.\n\nFollowing the road from Baldur's Gate to Waterdeep, the adventurers spend four uneventful days before a goblin ambush interrupts their journey.\n\nIn combat and other fast-paced situations, the game relies on **rounds**, a 6-second span of time.\n",
            index: 'time',
            name: 'Time',
            url: '/api/rule-sections/time',
          },
        },
      },
    },
  },
})

export const getApiRulesIndexRoute = createRoute({
  method: 'get',
  path: '/api/rules/{index}',
  tags: ['Rules'],
  summary: 'Get a rule by index.',
  description:
    '# Rule \n\nRules are pages in the SRD that document the mechanics of Dungeons and Dragons. \nRules have descriptions which is the text directly underneath the rule heading \nin the SRD. Rules also have subsections for each heading underneath the rule in the SRD.\n',
  request: { params: z.object({ index: RuleIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: RuleSchema,
          example: {
            desc: "# Using Ability Scores\n\nSix abilities provide a quick description of every creature's physical and mental characteristics:\n- **Strength**, measuring physical power\n- **Dexterity**, measuring agility\n- **Constitution**, measuring endurance\n- **Intelligence**, measuring reasoning and memory\n- **Wisdom**, measuring perception and insight\n- **Charisma**, measuring force of personality\n\nIs a character muscle-bound and insightful? Brilliant and charming? Nimble and hardy? Ability scores define these qualities-a creature's assets as well as weaknesses.\n\nThe three main rolls of the game-the ability check, the saving throw, and the attack roll-rely on the six ability scores. The book's introduction describes the basic rule behind these rolls: roll a d20, add an ability modifier derived from one of the six ability scores, and compare the total to a target number.\n\n**Ability Scores and Modifiers** Each of a creature's abilities has a score, a number that defines the magnitude of that ability. An ability score is not just a measure of innate capabilities, but also encompasses a creature's training and competence in activities related to that ability.\n\nA score of 10 or 11 is the normal human average, but adventurers and many monsters are a cut above average in most abilities. A score of 18 is the highest that a person usually reaches. Adventurers can have scores as high as 20, and monsters and divine beings can have scores as high as 30.\n\nEach ability also has a modifier, derived from the score and ranging from -5 (for an ability score of 1) to +10 (for a score of 30). The Ability Scores and Modifiers table notes the ability modifiers for the range of possible ability scores, from 1 to 30.\n",
            index: 'using-ability-scores',
            name: 'Using Ability Scores',
            subsections: [
              {
                index: 'ability-scores-and-modifiers',
                name: 'Ability Scores and Modifiers',
                url: '/api/rule-sections/ability-scores-and-modifiers',
              },
              {
                index: 'advantage-and-disadvantage',
                name: 'Advantage and Disadvantage',
                url: '/api/rule-sections/advantage-and-disadvantage',
              },
              {
                index: 'proficiency-bonus',
                name: 'Proficiency Bonus',
                url: '/api/rule-sections/proficiency-bonus',
              },
              {
                index: 'ability-checks',
                name: 'Ability Checks',
                url: '/api/rule-sections/ability-checks',
              },
              {
                index: 'using-each-ability',
                name: 'Using Each Ability',
                url: '/api/rule-sections/using-each-ability',
              },
              {
                index: 'saving-throws',
                name: 'Saving Throws',
                url: '/api/rule-sections/saving-throws',
              },
            ],
            url: '/api/rules/using-ability-scores',
          },
        },
      },
    },
  },
})

export const getApiSkillsIndexRoute = createRoute({
  method: 'get',
  path: '/api/skills/{index}',
  tags: ['Character Data'],
  summary: 'Get a skill by index.',
  description:
    "# Skill\n\nEach ability covers a broad range of capabilities, including skills that a character or a monster can be proficient in. A skill represents a specific aspect of an ability score, and an individual's proficiency in a skill demonstrates a focus on that aspect. [[SRD p77](https://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf#page=77)]\n",
  request: { params: z.object({ index: SkillIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SkillSchema,
          example: {
            ability_score: { index: 'dex', name: 'DEX', url: '/api/ability-scores/dex' },
            desc: [
              "Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation, such as when you're trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ship's deck. The GM might also call for a Dexterity (Acrobatics) check to see if you can perform acrobatic stunts, including dives, rolls, somersaults, and flips.",
            ],
            index: 'acrobatics',
            name: 'Acrobatics',
            url: '/api/skills/acrobatics',
          },
        },
      },
    },
  },
})

export const getApiSpellsRoute = createRoute({
  method: 'get',
  path: '/api/spells',
  tags: ['Spells'],
  summary: 'Get list of spells with optional filtering.',
  request: {
    query: z.object({ level: LevelFilterParamsSchema, school: SchoolFilterParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: APIReferenceListSchema } } },
  },
})

export const getApiSpellsIndexRoute = createRoute({
  method: 'get',
  path: '/api/spells/{index}',
  tags: ['Spells'],
  summary: 'Get a spell by index.',
  request: { params: z.object({ index: SpellIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SpellSchema,
          example: {
            attack_type: 'ranged',
            casting_time: '1 action',
            classes: [{ index: 'cleric', name: 'Cleric', url: '/api/classes/cleric' }],
            components: ['V', 'S'],
            concentration: false,
            damage: {
              damage_at_character_level: { '1': '1d8', '5': '2d8', '11': '3d8', '17': '4d8' },
              damage_type: { index: 'radiant', name: 'Radiant', url: '/api/damage-types/radiant' },
            },
            dc: {
              dc_success: 'none',
              dc_type: { index: 'dex', name: 'DEX', url: '/api/ability-scores/dex' },
            },
            desc: [
              'Flame-like radiance descends on a creature that you can see within range. The target must succeed on a dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.',
              "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
            ],
            duration: 'Instantaneous',
            higher_level: [],
            index: 'sacred-flame',
            level: 0,
            name: 'Sacred Flame',
            range: '60 feet',
            ritual: false,
            school: { index: 'evocation', name: 'Evocation', url: '/api/magic-schools/evocation' },
            subclasses: [{ index: 'lore', name: 'Lore', url: '/api/subclasses/lore' }],
            url: '/api/spells/sacred-flame',
          },
        },
      },
    },
  },
})

export const getApiSubclassesIndexRoute = createRoute({
  method: 'get',
  path: '/api/subclasses/{index}',
  tags: ['Subclasses'],
  summary: 'Get a subclass by index.',
  description: 'Subclasses reflect the different paths a class may take as levels are gained.',
  request: { params: z.object({ index: SubclassIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SubclassSchema,
          example: {
            class: { index: 'warlock', name: 'Warlock', url: '/api/classes/warlock' },
            desc: [
              "You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon, Orcus, Fraz'Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial; pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths.",
            ],
            index: 'fiend',
            name: 'Fiend',
            spells: [
              {
                prerequisites: [
                  {
                    index: 'warlock-1',
                    name: 'Warlock 1',
                    type: 'level',
                    url: '/api/classes/warlock/levels/1',
                  },
                ],
                spell: {
                  index: 'burning-hands',
                  name: 'Burning Hands',
                  url: '/api/spells/burning-hands',
                },
              },
              {
                prerequisites: [
                  {
                    index: 'warlock-1',
                    name: 'Warlock 1',
                    type: 'level',
                    url: '/api/classes/warlock/levels/1',
                  },
                ],
                spell: { index: 'command', name: 'Command', url: '/api/spells/command' },
              },
              {
                prerequisites: [
                  {
                    index: 'warlock-3',
                    name: 'Warlock 3',
                    type: 'level',
                    url: '/api/classes/warlock/levels/3',
                  },
                ],
                spell: {
                  index: 'blindness-deafness',
                  name: 'Blindness/Deafness',
                  url: '/api/spells/blindness-deafness',
                },
              },
              {
                prerequisites: [
                  {
                    index: 'warlock-3',
                    name: 'Warlock 3',
                    type: 'level',
                    url: '/api/classes/warlock/levels/3',
                  },
                ],
                spell: {
                  index: 'scorching-ray',
                  name: 'Scorching Ray',
                  url: '/api/spells/scorching-ray',
                },
              },
              {
                prerequisites: [
                  {
                    index: 'warlock-5',
                    name: 'Warlock 5',
                    type: 'level',
                    url: '/api/classes/warlock/levels/5',
                  },
                ],
                spell: { index: 'fireball', name: 'Fireball', url: '/api/spells/fireball' },
              },
              {
                prerequisites: [
                  {
                    index: 'warlock-5',
                    name: 'Warlock 5',
                    type: 'level',
                    url: '/api/classes/warlock/levels/5',
                  },
                ],
                spell: {
                  index: 'stinking-cloud',
                  name: 'Stinking Cloud',
                  url: '/api/spells/stinking-cloud',
                },
              },
              {
                prerequisites: [
                  {
                    index: 'warlock-7',
                    name: 'Warlock 7',
                    type: 'level',
                    url: '/api/classes/warlock/levels/7',
                  },
                ],
                spell: {
                  index: 'fire-shield',
                  name: 'Fire Shield',
                  url: '/api/spells/fire-shield',
                },
              },
              {
                prerequisites: [
                  {
                    index: 'warlock-7',
                    name: 'Warlock 7',
                    type: 'level',
                    url: '/api/classes/warlock/levels/7',
                  },
                ],
                spell: {
                  index: 'wall-of-fire',
                  name: 'Wall of Fire',
                  url: '/api/spells/wall-of-fire',
                },
              },
              {
                prerequisites: [
                  {
                    index: 'warlock-9',
                    name: 'Warlock 9',
                    type: 'level',
                    url: '/api/classes/warlock/levels/9',
                  },
                ],
                spell: {
                  index: 'flame-strike',
                  name: 'Flame Strike',
                  url: '/api/spells/flame-strike',
                },
              },
              {
                prerequisites: [
                  {
                    index: 'warlock-9',
                    name: 'Warlock 9',
                    type: 'level',
                    url: '/api/classes/warlock/levels/9',
                  },
                ],
                spell: { index: 'hallow', name: 'Hallow', url: '/api/spells/hallow' },
              },
            ],
            subclass_flavor: 'Otherworldly Patron',
            subclass_levels: '/api/subclasses/fiend/levels',
            url: '/api/subclasses/fiend',
          },
        },
      },
    },
  },
})

export const getApiSubclassesIndexFeaturesRoute = createRoute({
  method: 'get',
  path: '/api/subclasses/{index}/features',
  tags: ['Subclasses'],
  summary: 'Get features available for a subclass.',
  request: { params: z.object({ index: SubclassIndexParamsSchema }) },
  responses: {
    200: {
      description: 'List of features for the subclass.',
      content: { 'application/json': { schema: APIReferenceListSchema } },
    },
  },
})

export const getApiSubclassesIndexLevelsRoute = createRoute({
  method: 'get',
  path: '/api/subclasses/{index}/levels',
  tags: ['Subclasses'],
  summary: 'Get all level resources for a subclass.',
  request: { params: z.object({ index: SubclassIndexParamsSchema }) },
  responses: {
    200: {
      description: 'List of level resource for the subclass.',
      content: { 'application/json': { schema: z.array(SubclassLevelResourceSchema) } },
    },
  },
})

export const getApiSubclassesIndexLevelsSubclassLevelRoute = createRoute({
  method: 'get',
  path: '/api/subclasses/{index}/levels/{subclass_level}',
  tags: ['Subclasses'],
  summary: 'Get level resources for a subclass and level.',
  request: {
    params: z.object({
      index: SubclassIndexParamsSchema,
      subclass_level: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(20),
        )
        .openapi({
          param: {
            example: 6,
            in: 'path',
            name: 'subclass_level',
            required: true,
            schema: { maximum: 20, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Level resource for the subclass and level.',
      content: {
        'application/json': {
          schema: SubclassLevelSchema,
          example: {
            class: { index: 'paladin', name: 'Paladin', url: '/api/classes/paladin' },
            features: [
              {
                index: 'channel-divinity',
                name: 'Channel Divinity',
                url: '/api/features/channel-divinity',
              },
            ],
            index: 'devotion-3',
            level: 3,
            subclass: { index: 'devotion', name: 'Devotion', url: '/api/subclasses/devotion' },
            url: '/api/subclasses/devotion/levels/3',
          },
        },
      },
    },
  },
})

export const getApiSubclassesIndexLevelsSubclassLevelFeaturesRoute = createRoute({
  method: 'get',
  path: '/api/subclasses/{index}/levels/{subclass_level}/features',
  tags: ['Subclasses'],
  summary: 'Get features of the requested spell level available to the class.',
  request: {
    params: z.object({
      index: SubclassIndexParamsSchema,
      subclass_level: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(20),
        )
        .openapi({
          param: {
            example: 6,
            in: 'path',
            name: 'subclass_level',
            required: true,
            schema: { maximum: 20, minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of features for the subclass and level.',
      content: { 'application/json': { schema: APIReferenceListSchema } },
    },
  },
})

export const getApiSubracesIndexRoute = createRoute({
  method: 'get',
  path: '/api/subraces/{index}',
  tags: ['Subraces'],
  summary: 'Get a subrace by index.',
  description: 'Subraces reflect the different varieties of a certain parent race.',
  request: { params: z.object({ index: SubraceIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SubraceSchema,
          example: {
            ability_bonuses: [
              {
                ability_score: { index: 'wis', name: 'WIS', url: '/api/ability-scores/wis' },
                bonus: 1,
              },
            ],
            desc: 'As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.',
            index: 'hill-dwarf',
            languages: [],
            name: 'Hill Dwarf',
            race: { index: 'dwarf', name: 'Dwarf', url: '/api/races/dwarf' },
            racial_traits: [
              {
                index: 'dwarven-toughness',
                name: 'Dwarven Toughness',
                url: '/api/traits/dwarven-toughness',
              },
            ],
            starting_proficiencies: [],
            url: '/api/subraces/hill-dwarf',
          },
        },
      },
    },
  },
})

export const getApiSubracesIndexProficienciesRoute = createRoute({
  method: 'get',
  path: '/api/subraces/{index}/proficiencies',
  tags: ['Subraces'],
  summary: 'Get proficiences available for a subrace.',
  request: { params: z.object({ index: SubraceIndexParamsSchema }) },
  responses: {
    200: {
      description: 'List of proficiences for the subrace.',
      content: { 'application/json': { schema: APIReferenceListSchema } },
    },
  },
})

export const getApiSubracesIndexTraitsRoute = createRoute({
  method: 'get',
  path: '/api/subraces/{index}/traits',
  tags: ['Subraces'],
  summary: 'Get traits available for a subrace.',
  request: { params: z.object({ index: SubraceIndexParamsSchema }) },
  responses: {
    200: {
      description: 'List of traits for the subrace.',
      content: { 'application/json': { schema: APIReferenceListSchema } },
    },
  },
})

export const getApiTraitsIndexRoute = createRoute({
  method: 'get',
  path: '/api/traits/{index}',
  tags: ['Traits'],
  summary: 'Get a trait by index.',
  request: { params: z.object({ index: TraitIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: TraitSchema,
          example: {
            desc: [
              'Elves do not need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is "trance.") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting this way, you gain the same benefit that a human does from 8 hours of sleep.',
            ],
            index: 'trance',
            name: 'Trance',
            proficiencies: [],
            races: [{ index: 'elf', name: 'Elf', url: '/api/races/elf' }],
            subraces: [],
            url: '/api/traits/trance',
          },
        },
      },
    },
  },
})

export const getApiWeaponPropertiesIndexRoute = createRoute({
  method: 'get',
  path: '/api/weapon-properties/{index}',
  tags: ['Equipment'],
  summary: 'Get a weapon property by index.',
  request: { params: z.object({ index: WeaponPropertyIndexParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: WeaponPropertySchema,
          example: {
            desc: [
              'You can use a weapon that has the ammunition property to make a ranged attack only if you have ammunition to fire from the weapon. Each time you attack with the weapon, you expend one piece of ammunition. Drawing the ammunition from a quiver, case, or other container is part of the attack (you need a free hand to load a one-handed weapon).',
              'At the end of the battle, you can recover half your expended ammunition by taking a minute to search the battlefield. If you use a weapon that has the ammunition property to make a melee attack, you treat the weapon as an improvised weapon (see "Improvised Weapons" later in the section). A sling must be loaded to deal any damage when used in this way.',
            ],
            index: 'ammunition',
            name: 'Ammunition',
            url: '/api/weapon-properties/ammunition',
          },
        },
      },
    },
  },
})

export const getApiEndpointRoute = createRoute({
  method: 'get',
  path: '/api/{endpoint}',
  tags: ['Common'],
  summary: 'Get list of all available resources for an endpoint.',
  description:
    'Currently only the [`/spells`](#get-/api/spells) and [`/monsters`](#get-/api/monsters) endpoints support filtering with query parameters. Use of these query parameters is documented under the respective [Spells](#tag--Spells) and [Monsters](#tag--Monsters) sections.\n',
  request: { params: z.object({ endpoint: BaseEndpointIndexParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: APIReferenceListSchema } } },
  },
})
