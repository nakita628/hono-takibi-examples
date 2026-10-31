import { createRoute, z } from '@hono/zod-openapi'

const ArticleSchema = z
  .object({
    abstract: z.string().exactOptional(),
    byline: z.string().exactOptional(),
    created_date: z.string().exactOptional(),
    des_facet: z.array(z.string()).exactOptional(),
    geo_facet: z.array(z.string()).exactOptional(),
    item_type: z.string().exactOptional(),
    kicker: z.string().exactOptional(),
    material_type_facet: z.string().exactOptional(),
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
    org_facet: z.array(z.string()).exactOptional(),
    per_facet: z.array(z.string()).exactOptional(),
    published_date: z.string().exactOptional(),
    related_urls: z
      .array(
        z
          .object({
            suggested_link_text: z.string().exactOptional(),
            url: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    section: z.string().exactOptional(),
    short_url: z.string().exactOptional(),
    subsection: z.string().exactOptional(),
    thumbnail_standard: z.string().exactOptional(),
    title: z.string().exactOptional(),
    updated_date: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Article')

const ApikeySecurityScheme = { in: 'query', name: 'api-key', type: 'apiKey' }

export const getSectionFormatRoute = createRoute({
  method: 'get',
  path: '/{section}.{format}',
  tags: ['Stories'],
  summary: 'Top Stories',
  description:
    'The Top Stories API returns a list of articles and associated images currently on the specified section.  Support JSON and JSONP.\n',
  request: {
    params: z.object({
      section: z
        .enum([
          'home',
          'opinion',
          'world',
          'national',
          'politics',
          'upshot',
          'nyregion',
          'business',
          'technology',
          'science',
          'health',
          'sports',
          'arts',
          'books',
          'movies',
          'theater',
          'sundayreview',
          'fashion',
          'tmagazine',
          'food',
          'travel',
          'magazine',
          'realestate',
          'automobiles',
          'obituaries',
          'insider',
        ])
        .openapi({
          param: {
            description: 'The section the story appears in.',
            in: 'path',
            name: 'section',
            required: true,
            schema: {
              enum: [
                'home',
                'opinion',
                'world',
                'national',
                'politics',
                'upshot',
                'nyregion',
                'business',
                'technology',
                'science',
                'health',
                'sports',
                'arts',
                'books',
                'movies',
                'theater',
                'sundayreview',
                'fashion',
                'tmagazine',
                'food',
                'travel',
                'magazine',
                'realestate',
                'automobiles',
                'obituaries',
                'insider',
              ],
              type: 'string',
            },
            'x-consoleDefault': 'home',
          },
        }),
      format: z
        .enum(['json', 'jsonp'])
        .openapi({
          param: {
            description: 'if this is JSONP or JSON',
            in: 'path',
            name: 'format',
            required: true,
            schema: { enum: ['json', 'jsonp'], type: 'string' },
            'x-consoleDefault': 'json',
          },
        }),
    }),
    query: z.object({
      callback: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The name of the function the API call results will be passed to. Required when using JSONP. This parameter has only one valid value per section. The format is {section_name}TopStoriesCallback.\n',
            in: 'query',
            name: 'callback',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of articles',
      content: {
        'application/json': {
          schema: z
            .object({ results: z.array(ArticleSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})
