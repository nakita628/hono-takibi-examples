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

export const getArticlesearchJsonRoute = createRoute({
  method: 'get',
  path: '/articlesearch.json',
  tags: ['Stories'],
  summary: 'Article Search',
  description: 'Article Search requests use the following URI structure:\n',
  request: {
    query: z.object({
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Search query term. Search is performed on the article body, headline and byline.\n',
            in: 'query',
            name: 'q',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fq: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '"Filtered search query using standard Lucene syntax. \n\nThe filter query can be specified with or without a limiting field: label. \n\nSee Filtering Your Search for more information about filtering."\n',
            in: 'query',
            name: 'fq',
            required: false,
            schema: { type: 'string' },
          },
        }),
      begin_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '"Format: YYYYMMDD \n\nRestricts responses to results with publication dates of the date specified or later."\n',
            in: 'query',
            name: 'begin_date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      end_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '"Format: YYYYMMDD \n\nRestricts responses to results with publication dates of the date specified or earlier."\n',
            in: 'query',
            name: 'end_date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sort: z
        .enum(['newest', 'oldest'])
        .exactOptional()
        .openapi({
          param: {
            description:
              '"By default, search results are sorted by their relevance to the query term (q). Use the sort parameter to sort by pub_date."\n',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { enum: ['newest', 'oldest'], type: 'string' },
          },
        }),
      fl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '"Comma-delimited list of fields (no limit)\n\n  Limits the fields returned in your search results. By default (unless you include an fl list in your request), the following fields are returned: \n  \n  web_url\n  \n  snippet\n  \n  lead_paragraph\n  \n  abstract\n  \n  print_page\n  \n  blog\n  \n  source\n  \n  multimedia\n  \n  headline\n  \n  keywords\n  \n  pub_date\n  \n  document_type\n  \n  news_desk\n  \n  byline\n  \n  type_of_material\n  \n  _id\n  \n  word_count"\n',
            in: 'query',
            name: 'fl',
            required: false,
            schema: { type: 'string' },
          },
        }),
      hl: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Enables highlighting in search results. When set to true, the query term (q) is highlighted in the headline and lead_paragraph fields.\n\nNote: If highlighting is enabled, snippet will be returned even if it is not specified in your fl list."\n',
            in: 'query',
            name: 'hl',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              '"The value of page corresponds to a set of 10 results (it does not indicate the starting number of the result set). For example, page=0 corresponds to records 0-9. To return records 10-19, set page to 1, not 10."\n',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 0, maximum: 10, minimum: 0, type: 'integer' },
          },
        }),
      facet_field: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma-delimited list of facets\n\nSpecifies the sets of facet values to include in the facets array at the end of response, which collects the facet values from all the search results. By default no facet fields will be returned. Below is the list of valid facets:\n\nsection_name\n\ndocument_type\n\ntype_of_material\n\nsource\n\nday_of_week\n\nTo learn more about using facets, see Using Facets.\n',
            in: 'query',
            name: 'facet_field',
            required: false,
            schema: { type: 'string' },
          },
        }),
      facet_filter: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'When set to true, facet counts will respect any applied filters (fq, date range, etc.) in addition to the main query term. To filter facet counts, specifying at least one facet_field is required. To learn more about using facets, see Using Facets.\n',
            in: 'query',
            name: 'facet_filter',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The docs requested by the article search.',
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
