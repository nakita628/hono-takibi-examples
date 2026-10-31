import { createRoute, z } from '@hono/zod-openapi'

const DocSchema = z
  .object({
    _id: z.string().exactOptional(),
    abstract: z.string().exactOptional(),
    blog: z.array(z.any()).exactOptional(),
    byline: z
      .object({
        organization: z.string().exactOptional(),
        original: z.string().exactOptional(),
        person: z.array(z.any()).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    document_type: z.string().exactOptional(),
    headline: z
      .object({ kicker: z.string().exactOptional(), main: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    keywords: z
      .object({
        name: z.string().exactOptional(),
        rank: z.string().exactOptional(),
        value: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    lead_paragraph: z.string().exactOptional(),
    multimedia: z
      .array(
        z
          .object({
            caption: z.string().exactOptional(),
            copyright: z.string().exactOptional(),
            format: z.string().exactOptional(),
            height: z.int().exactOptional(),
            subtype: z.string().exactOptional(),
            type: z.string().exactOptional(),
            url: z.string().exactOptional(),
            width: z.int().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    news_desk: z.string().exactOptional(),
    print_page: z.string().exactOptional(),
    pub_date: z.string().exactOptional(),
    section_name: z.string().exactOptional(),
    slideshow_credits: z.string().exactOptional(),
    snippet: z.string().exactOptional(),
    source: z.string().exactOptional(),
    subsection_name: z.string().exactOptional(),
    type_of_material: z.string().exactOptional(),
    web_url: z.string().exactOptional(),
    word_count: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Doc')

const ApikeySecurityScheme = { in: 'query', name: 'api-key', type: 'apiKey' }

export const getYearMonthJsonRoute = createRoute({
  method: 'get',
  path: '/{year}/{month}.json',
  tags: ['Archive'],
  summary: 'Archive API',
  description:
    'The Archive API provides lists of NYT articles by month going back to 1851.  Simply pass in the year and month you want and it returns a JSON object with all articles for that month.\n',
  request: {
    params: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1851).max(2030),
        )
        .default(2016)
        .openapi({
          param: {
            description: 'The year (e.g. 2016).',
            in: 'path',
            name: 'year',
            required: true,
            schema: {
              default: '2016',
              format: 'int32',
              maximum: 2030,
              minimum: 1851,
              type: 'integer',
            },
            'x-consoleDefault': '2016',
          },
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(12),
        )
        .default(1)
        .openapi({
          param: {
            description: 'The month number (e.g. 1 for January).',
            in: 'path',
            name: 'month',
            required: true,
            schema: { default: '1', format: 'int32', maximum: 12, minimum: 1, type: 'integer' },
            'x-consoleDefault': '1',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The docs requested.',
      content: {
        'application/json': {
          schema: z
            .object({
              response: z
                .object({
                  docs: z.array(DocSchema).exactOptional(),
                  meta: z
                    .object({
                      hits: z.int().exactOptional(),
                      offset: z.int().exactOptional(),
                      time: z.int().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})
