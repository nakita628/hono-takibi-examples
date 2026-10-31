import { createRoute, z } from '@hono/zod-openapi'

const ComicSchema = z
  .object({
    alt: z.string().exactOptional(),
    day: z.string().exactOptional(),
    img: z.string().exactOptional(),
    link: z.string().exactOptional(),
    month: z.string().exactOptional(),
    news: z.string().exactOptional(),
    num: z.number().exactOptional(),
    safe_title: z.string().exactOptional(),
    title: z.string().exactOptional(),
    transcript: z.string().exactOptional(),
    year: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Comic')

export const getInfo0JsonRoute = createRoute({
  method: 'get',
  path: '/info.0.json',
  description: 'Fetch current comic and metadata.\n',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: ComicSchema } } } },
})

export const getComicIdInfo0JsonRoute = createRoute({
  method: 'get',
  path: '/{comicId}/info.0.json',
  description: 'Fetch comics and metadata  by comic id.\n',
  request: {
    params: z.object({
      comicId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'path', name: 'comicId', required: true, schema: { type: 'number' } },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: { '*/*': { schema: ComicSchema } } } },
})
