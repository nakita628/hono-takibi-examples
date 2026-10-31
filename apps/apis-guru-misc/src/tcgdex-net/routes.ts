import { createRoute, z } from '@hono/zod-openapi'

const WeakResSchema = z
  .array(
    z
      .object({
        type: z.string().openapi({ example: 'Psychic' }),
        value: z.string().exactOptional().openapi({ example: 'x2' }),
      })
      .openapi({ required: ['type'] }),
  )
  .openapi({ xml: { name: 'WeakResItem', wrapped: true } })
  .openapi('WeakRes')

const SetResumeSchema = z
  .object({
    cardCount: z
      .object({
        official: z.number().openapi({ example: 100 }),
        total: z.number().openapi({ example: 101 }),
      })
      .openapi({ required: ['official', 'total'] }),
    id: z.string().openapi({ example: 'base1' }),
    logo: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://assets.tcgdex.net/en/base/base1/logo' }),
    name: z.string().openapi({ example: 'Base Set' }),
    symbol: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://assets.tcgdex.net/univ/base/base1/symbol' }),
  })
  .openapi({ required: ['cardCount', 'id', 'name'] })
  .openapi('SetResume')

const CardSchema = z
  .object({
    abilities: z
      .array(
        z
          .object({
            effect: z.string().exactOptional().openapi({ example: 'As often as you like...' }),
            name: z.string().exactOptional().openapi({ example: 'Damage Swap' }),
            type: z.string().exactOptional().openapi({ example: 'Poke-POWER' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    attacks: z
      .array(
        z
          .object({
            cost: z.array(z.string().openapi({ example: '' })).exactOptional(),
            damage: z.number().exactOptional().openapi({ example: 30 }),
            effect: z.string().exactOptional().openapi({ example: 'Flip a coin. If heads, ...' }),
            name: z.string().openapi({ example: 'Confuse Ray' }),
          })
          .openapi({ required: ['name'] }),
      )
      .exactOptional(),
    category: z.string().openapi({ example: 'Pokemon' }),
    description: z.string().exactOptional(),
    dexId: z
      .array(z.number())
      .exactOptional()
      .openapi({ xml: { name: 'dexIdItem', wrapped: true } }),
    energyType: z.string().exactOptional(),
    evolveFrom: z.string().exactOptional().openapi({ example: 'Kadabra' }),
    hp: z.number().exactOptional().openapi({ example: 80 }),
    id: z.string().openapi({ example: 'base1-1' }),
    illustrator: z.string().exactOptional().openapi({ example: 'Ken Sugimori' }),
    image: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://assets.tcgdex.net/en/base/base1/1' }),
    item: z
      .object({ effect: z.string(), name: z.string() })
      .exactOptional()
      .openapi({ required: ['effect', 'name'] }),
    legal: z
      .object({
        expanded: z.boolean().exactOptional().openapi({ example: false }),
        standard: z.boolean().exactOptional().openapi({ example: false }),
      })
      .openapi({ required: [] }),
    level: z.number().exactOptional().openapi({ example: 30 }),
    localId: z.string().openapi({ example: '1' }),
    name: z.string().openapi({ example: 'Alakazam' }),
    rarity: z.string().openapi({ example: 'Rare' }),
    regulationMark: z.string().exactOptional().openapi({ example: 'D' }),
    resistances: z
      .array(WeakResSchema)
      .exactOptional()
      .openapi({ xml: { name: 'resistance', wrapped: true } }),
    retreat: z.number().exactOptional().openapi({ example: 3 }),
    set: SetResumeSchema,
    stage: z.string().exactOptional().openapi({ example: 'Stage2' }),
    suffix: z.string().exactOptional(),
    trainerType: z.string().exactOptional(),
    types: z.array(z.string().openapi({ example: 'Psychic' })).exactOptional(),
    variants: z
      .object({
        firstEdition: z.boolean(),
        holo: z.boolean(),
        normal: z.boolean(),
        reverse: z.boolean(),
        wPromo: z.boolean(),
      })
      .exactOptional()
      .openapi({ required: ['firstEdition', 'holo', 'normal', 'reverse', 'wPromo'] }),
    weaknesses: z
      .array(WeakResSchema)
      .exactOptional()
      .openapi({ xml: { name: 'weakness', wrapped: true } }),
  })
  .openapi({ required: ['category', 'id', 'legal', 'localId', 'name', 'rarity', 'set'] })
  .openapi('Card')

const CardResumeSchema = z
  .object({
    id: z.string().openapi({ example: 'base1-1' }),
    image: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://assets.tcgdex.net/en/base/base1/1' }),
    localId: z.string().openapi({ example: '1' }),
    name: z.string().openapi({ example: 'Alakazam' }),
  })
  .openapi({ required: ['id', 'localId', 'name'] })
  .openapi('CardResume')

const SerieSchema = z
  .object({
    id: z.string(),
    logo: z.string().exactOptional(),
    name: z.string(),
    sets: z.array(SetResumeSchema),
  })
  .openapi({ required: ['id', 'name', 'sets'] })
  .openapi('Serie')

const SerieResumeSchema = z
  .object({ id: z.string(), logo: z.string().exactOptional(), name: z.string() })
  .openapi({ required: ['id', 'name'] })
  .openapi('SerieResume')

const SetSchema = z
  .object({
    cardCount: z
      .object({
        firstEd: z.number().exactOptional(),
        holo: z.number().exactOptional(),
        normal: z.number().exactOptional(),
        official: z.number().openapi({ example: 100 }),
        reverse: z.number().exactOptional(),
        total: z.number().openapi({ example: 101 }),
      })
      .openapi({ required: ['official', 'total'] }),
    cards: z.array(CardResumeSchema),
    id: z.string().openapi({ example: 'base1' }),
    logo: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://assets.tcgdex.net/en/base/base1/logo' }),
    name: z.string().openapi({ example: 'Base Set' }),
    symbol: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://assets.tcgdex.net/univ/base/base1/symbol' }),
  })
  .openapi({ required: ['cardCount', 'cards', 'id', 'name'] })
  .openapi('Set')

const StringEndpointSchema = z
  .object({ cards: z.array(CardResumeSchema), name: z.string() })
  .openapi({ required: ['cards', 'name'] })
  .openapi('StringEndpoint')

export const getCardsRoute = createRoute({
  method: 'get',
  path: '/cards',
  tags: ['cards'],
  summary: 'fetch the list of cards',
  description: 'desc',
  operationId: 'cards',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(CardResumeSchema) } },
    },
  },
})

export const getCardsCardIdRoute = createRoute({
  method: 'get',
  path: '/cards/{cardId}',
  tags: ['cards'],
  summary: 'Finds Card by Global ID',
  description: 'Find a defined card thatusing its global id',
  operationId: 'findPetsByTags',
  request: {
    params: z.object({
      cardId: z
        .string()
        .openapi({
          param: {
            description: 'Tags to filter by',
            in: 'path',
            name: 'cardId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: CardSchema } },
    },
    404: { description: "The Card doesn't exist" },
  },
})

export const getCategoriesRoute = createRoute({
  method: 'get',
  path: '/categories',
  tags: ['filters'],
  responses: {
    200: {
      description: 'List cards categories',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
})

export const getCategoriesCategoryRoute = createRoute({
  method: 'get',
  path: '/categories/{category}',
  tags: ['filters'],
  request: {
    params: z.object({
      category: z
        .string()
        .openapi({
          param: { in: 'path', name: 'category', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List cards with the category',
      content: { 'application/json': { schema: StringEndpointSchema } },
    },
    404: { description: "The Category doesn't exist" },
  },
})

export const getDexIdsRoute = createRoute({
  method: 'get',
  path: '/dex-ids',
  tags: ['filters'],
  responses: {
    200: {
      description: 'List all possible Pokemon(s) Pokédex Ids that appeared in the TCG',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
})

export const getDexIdsDexIdRoute = createRoute({
  method: 'get',
  path: '/dex-ids/{dexId}',
  tags: ['filters'],
  request: {
    params: z.object({
      dexId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'dexId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get the cards containing the specified dexId',
      content: { 'application/json': { schema: z.array(CardResumeSchema) } },
    },
    404: { description: 'no cards contain the specified dexID' },
  },
})

export const getEnergyTypesRoute = createRoute({
  method: 'get',
  path: '/energy-types',
  tags: ['filters'],
  responses: {
    200: {
      description: 'list the different Energy types an Energy card can have',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
})

export const getEnergyTypesEnergyTypeRoute = createRoute({
  method: 'get',
  path: '/energy-types/{energy-type}',
  tags: ['filters'],
  request: {
    params: z.object({
      'energy-type': z
        .string()
        .openapi({
          param: { in: 'path', name: 'energy-type', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get the Energy cards containing the specified energy-type',
      content: { 'application/json': { schema: z.array(CardResumeSchema) } },
    },
    404: { description: "The specified energy-type doesn't exist" },
  },
})

export const getHpRoute = createRoute({
  method: 'get',
  path: '/hp',
  tags: ['filters'],
  responses: {
    200: {
      description: 'List all different possibilities number of HP a card can have',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
})

export const getHpHpRoute = createRoute({
  method: 'get',
  path: '/hp/{hp}',
  tags: ['filters'],
  request: {
    params: z.object({
      hp: z
        .string()
        .openapi({ param: { in: 'path', name: 'hp', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'Get the Pokémon cards containing specified number of HP',
      content: { 'application/json': { schema: StringEndpointSchema } },
    },
    404: { description: "The HP count doesn't exist" },
  },
})

export const getIllustratorsRoute = createRoute({
  method: 'get',
  path: '/illustrators',
  tags: ['filters'],
  responses: {
    200: {
      description: 'Get all the Pokémon cards illustrators',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
})

export const getIllustratorsIllustratorRoute = createRoute({
  method: 'get',
  path: '/illustrators/{illustrator}',
  tags: ['filters'],
  request: {
    params: z.object({
      illustrator: z
        .string()
        .openapi({
          param: { in: 'path', name: 'illustrator', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get the cards containing the specified illustrator',
      content: { 'application/json': { schema: StringEndpointSchema } },
    },
    404: { description: "The Illustrator doesn't exist" },
  },
})

export const getRaritiesRoute = createRoute({
  method: 'get',
  path: '/rarities',
  tags: ['filters'],
  responses: {
    200: {
      description: 'List cards rarities',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
})

export const getRaritiesRarityRoute = createRoute({
  method: 'get',
  path: '/rarities/{rarity}',
  tags: ['filters'],
  request: {
    params: z.object({
      rarity: z
        .string()
        .openapi({
          param: { in: 'path', name: 'rarity', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get the cards containing the specified rarity',
      content: { 'application/json': { schema: StringEndpointSchema } },
    },
    404: { description: "The Rarity doesn't exist" },
  },
})

export const getRegulationMarksRoute = createRoute({
  method: 'get',
  path: '/regulation-marks',
  tags: ['filters'],
  responses: {
    200: {
      description: 'List the current regulation marks',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
})

export const getRegulationMarksRegulationMarkRoute = createRoute({
  method: 'get',
  path: '/regulation-marks/{regulation-mark}',
  tags: ['filters'],
  request: {
    params: z.object({
      'regulation-mark': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'regulation-mark',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get every cards respecting the specified regulation-mark',
      content: { 'application/json': { schema: z.array(CardResumeSchema) } },
    },
    404: { description: "The regulation-mark doesn't exist" },
  },
})

export const getRetreatsRoute = createRoute({
  method: 'get',
  path: '/retreats',
  tags: ['filters'],
  responses: {
    200: {
      description: 'return the different number of retreats count',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
})

export const getRetreatsRetreatRoute = createRoute({
  method: 'get',
  path: '/retreats/{retreat}',
  tags: ['filters'],
  request: {
    params: z.object({
      retreat: z
        .string()
        .openapi({
          param: { in: 'path', name: 'retreat', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get the cards containing the specified retreat count',
      content: { 'application/json': { schema: StringEndpointSchema } },
    },
    404: { description: "The Retreat count doesn't exist" },
  },
})

export const getSeriesRoute = createRoute({
  method: 'get',
  path: '/series',
  tags: ['filters'],
  responses: {
    200: {
      description: 'Successful request',
      content: { 'application/json': { schema: z.array(SerieResumeSchema) } },
    },
  },
})

export const getSeriesSerieRoute = createRoute({
  method: 'get',
  path: '/series/{serie}',
  tags: ['filters'],
  request: {
    params: z.object({
      serie: z
        .string()
        .openapi({
          param: {
            description: 'the serie ID or name',
            in: 'path',
            name: 'serie',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: SerieSchema } } },
    404: { description: "The Serie doesn't exist" },
  },
})

export const getSetsRoute = createRoute({
  method: 'get',
  path: '/sets',
  tags: ['filters'],
  responses: {
    200: {
      description: 'Successful request',
      content: { 'application/json': { schema: z.array(SetResumeSchema) } },
    },
  },
})

export const getSetsSetRoute = createRoute({
  method: 'get',
  path: '/sets/{set}',
  tags: ['filters'],
  request: {
    params: z.object({
      set: z
        .string()
        .openapi({
          param: {
            description: 'the set ID or the set name',
            in: 'path',
            name: 'set',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: SetSchema } } },
    404: { description: "The Set doesn't exist" },
  },
})

export const getSetsSetCardLocalIdRoute = createRoute({
  method: 'get',
  path: '/sets/{set}/{cardLocalId}',
  tags: ['cards'],
  request: {
    params: z.object({
      set: z
        .string()
        .openapi({
          param: { in: 'path', name: 'set', required: true, schema: { type: 'string' } },
        }),
      cardLocalId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'cardLocalId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CardSchema } } },
    404: { description: 'the Set or cardLocalId are incorrect' },
  },
})

export const getStagesRoute = createRoute({
  method: 'get',
  path: '/stages',
  tags: ['filters'],
  responses: {
    200: {
      description: 'Get all the possible stages a Pokémon card can have',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
})

export const getStagesStageRoute = createRoute({
  method: 'get',
  path: '/stages/{stage}',
  tags: ['filters'],
  request: {
    params: z.object({
      stage: z
        .string()
        .openapi({
          param: { in: 'path', name: 'stage', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get all the cards having the specified stage',
      content: { 'application/json': { schema: z.array(CardResumeSchema) } },
    },
    404: { description: "The stage doesn't exist" },
  },
})

export const getSuffixesRoute = createRoute({
  method: 'get',
  path: '/suffixes',
  tags: ['filters'],
  responses: {
    200: {
      description: 'Get all the cards having the specified suffix',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
})

export const getSuffixesSuffixRoute = createRoute({
  method: 'get',
  path: '/suffixes/{suffix}',
  tags: ['filters'],
  request: {
    params: z.object({
      suffix: z
        .string()
        .openapi({
          param: { in: 'path', name: 'suffix', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get all the cards having the specified stage suffix',
      content: { 'application/json': { schema: z.array(CardResumeSchema) } },
    },
    404: { description: "The suffix doesn't exist" },
  },
})

export const getTrainerTypesRoute = createRoute({
  method: 'get',
  path: '/trainer-types',
  tags: ['filters'],
  responses: {
    200: {
      description: 'Get the different trainer-types',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
})

export const getTrainerTypesTrainerTypeRoute = createRoute({
  method: 'get',
  path: '/trainer-types/{trainer-type}',
  tags: ['filters'],
  request: {
    params: z.object({
      'trainer-type': z
        .string()
        .openapi({
          param: { in: 'path', name: 'trainer-type', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get the cards containing with the specified trainer-type',
      content: { 'application/json': { schema: z.array(CardResumeSchema) } },
    },
    404: { description: "The trainer-type doesn't exist" },
  },
})

export const getTypesRoute = createRoute({
  method: 'get',
  path: '/types',
  tags: ['filters'],
  responses: {
    200: {
      description: 'List all possible cards types',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
})

export const getTypesTypeRoute = createRoute({
  method: 'get',
  path: '/types/{type}',
  tags: ['filters'],
  request: {
    params: z.object({
      type: z
        .string()
        .openapi({
          param: { in: 'path', name: 'type', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get the cards containing the specified type',
      content: { 'application/json': { schema: z.array(CardResumeSchema) } },
    },
    404: { description: "The Type doesn't exist" },
  },
})

export const getVariantsRoute = createRoute({
  method: 'get',
  path: '/variants',
  tags: ['filters'],
  responses: {
    200: {
      description: 'Get the different variants available',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
})

export const getVariantsVariantRoute = createRoute({
  method: 'get',
  path: '/variants/{variant}',
  tags: ['filters'],
  request: {
    params: z.object({
      variant: z
        .string()
        .openapi({
          param: { in: 'path', name: 'variant', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get the cards available in the specified variant',
      content: { 'application/json': { schema: z.array(CardResumeSchema) } },
    },
    404: { description: "The variant doesn't exist" },
  },
})
