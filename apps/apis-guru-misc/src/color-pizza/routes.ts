import { createRoute, z } from '@hono/zod-openapi'

const ColorSchema = z
  .object({
    distance: z.number().exactOptional(),
    hex: z.string().exactOptional(),
    hsl: z
      .object({
        h: z.number().exactOptional(),
        l: z.number().exactOptional(),
        s: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    lab: z
      .object({
        a: z.number().exactOptional(),
        b: z.number().exactOptional(),
        l: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    luminance: z.number().exactOptional(),
    luminanceWCAG: z.number().exactOptional(),
    name: z.string().exactOptional(),
    requestedHex: z.string().exactOptional(),
    rgb: z
      .object({
        b: z.int().exactOptional(),
        g: z.int().exactOptional(),
        r: z.int().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    svg: z.string().exactOptional(),
    svgNamed: z.string().exactOptional(),
    swatchImg: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Color')

const ColorBaseSchema = z
  .object({
    hex: z.string().exactOptional(),
    hsl: z
      .object({
        h: z.number().exactOptional(),
        l: z.number().exactOptional(),
        s: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    lab: z
      .object({
        a: z.number().exactOptional(),
        b: z.number().exactOptional(),
        l: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    luminance: z.number().exactOptional(),
    luminanceWCAG: z.number().exactOptional(),
    name: z.string().exactOptional(),
    rgb: z
      .object({
        b: z.int().exactOptional(),
        g: z.int().exactOptional(),
        r: z.int().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    swatchImg: z
      .object({ svg: z.string().exactOptional(), svgNamed: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ColorBase')

const ErrorSchema = z
  .object({ message: z.string().exactOptional(), status: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Error')

const ListDescriptionSchema = z
  .object({
    colorCount: z.int().exactOptional(),
    description: z.string().exactOptional(),
    key: z.string().exactOptional(),
    license: z.string().exactOptional(),
    source: z.string().exactOptional(),
    title: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDescription')

const PossibleListsSchema = z
  .enum([
    'default',
    'bestOf',
    'wikipedia',
    'french',
    'ridgway',
    'risograph',
    'basic',
    'chineseTraditional',
    'html',
    'japaneseTraditional',
    'leCorbusier',
    'nbsIscc',
    'ntc',
    'osxcrayons',
    'ral',
    'sanzoWadaI',
    'thesaurus',
    'werner',
    'windows',
    'x11',
    'xkcd',
  ])
  .openapi('PossibleLists')

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  summary: 'Get all colors of the default color name list',
  request: {
    query: z.object({
      list: PossibleListsSchema.openapi({
        param: {
          description: 'The name of the color name list to use',
          explode: false,
          in: 'query',
          name: 'list',
          schema: { $ref: '#/components/schemas/possibleLists' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      values: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The hex values of the colors to retrieve without '#'",
            in: 'query',
            name: 'values',
            schema: { type: 'string' },
            required: false,
          },
        }),
      noduplicates: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Allow duplicate names or not',
            in: 'query',
            name: 'noduplicates',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              colors: z.array(ColorSchema).exactOptional(),
              paletteTitle: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: { description: 'NOT FOUND', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListsIndexRoute = createRoute({
  method: 'get',
  path: '/lists/',
  summary: 'Get all colors of the default color name list',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              listDescriptions: z
                .object({
                  basic: ListDescriptionSchema.exactOptional(),
                  bestOf: ListDescriptionSchema.exactOptional(),
                  chineseTraditional: ListDescriptionSchema.exactOptional(),
                  default: ListDescriptionSchema.exactOptional(),
                  french: ListDescriptionSchema.exactOptional(),
                  html: ListDescriptionSchema.exactOptional(),
                  japaneseTraditional: ListDescriptionSchema.exactOptional(),
                  leCorbusier: ListDescriptionSchema.exactOptional(),
                  nbsIscc: ListDescriptionSchema.exactOptional(),
                  ntc: ListDescriptionSchema.exactOptional(),
                  osxcrayons: ListDescriptionSchema.exactOptional(),
                  ral: ListDescriptionSchema.exactOptional(),
                  ridgway: ListDescriptionSchema.exactOptional(),
                  risograph: ListDescriptionSchema.exactOptional(),
                  sanzoWadaI: ListDescriptionSchema.exactOptional(),
                  thesaurus: ListDescriptionSchema.exactOptional(),
                  werner: ListDescriptionSchema.exactOptional(),
                  wikipedia: ListDescriptionSchema.exactOptional(),
                  windows: ListDescriptionSchema.exactOptional(),
                  x11: ListDescriptionSchema.exactOptional(),
                  xkcd: ListDescriptionSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              localAvailableColorNameLists: z.array(z.string()).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: { description: 'NOT FOUND', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getNamesIndexRoute = createRoute({
  method: 'get',
  path: '/names/',
  summary: 'Get all colors of the default color name list',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the color to retrieve (min 3 characters)',
            explode: false,
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      list: PossibleListsSchema.openapi({
        param: {
          description: 'The name of the color name list to use',
          explode: false,
          in: 'query',
          name: 'list',
          schema: { $ref: '#/components/schemas/possibleLists' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              colors: z.array(ColorSchema).exactOptional(),
              paletteTitle: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: { description: 'NOT FOUND', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getSwatchIndexRoute = createRoute({
  method: 'get',
  path: '/swatch/',
  summary: 'Generate a color swatch for any color',
  request: {
    query: z.object({
      color: z
        .string()
        .openapi({
          param: {
            description: "The hex value of the color to retrieve without '#'",
            explode: false,
            in: 'query',
            name: 'color',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The name of the color',
            explode: false,
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'image/svg+xml': { schema: z.string() } } },
    404: { description: 'NOT FOUND', content: { 'application/json': { schema: ErrorSchema } } },
  },
})
