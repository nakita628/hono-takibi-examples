import { createRoute, z } from '@hono/zod-openapi'

const ArticleSchema = z
  .object({
    link: z.string().exactOptional(),
    pubdate: z.string().exactOptional(),
    title: z.string().exactOptional(),
  })
  .openapi({ xml: { name: 'Order' }, required: [] })
  .openapi('Article')

const ContentProCompanySchema = z
  .object({
    companyName: z.string().exactOptional(),
    description: z.string().exactOptional(),
    employee: z.string().exactOptional(),
    industry: z.string().exactOptional(),
    linkedin: z.string().exactOptional(),
    twitter: z.string().exactOptional(),
    website: z.string().exactOptional(),
  })
  .openapi({ xml: { name: 'Order' }, required: [] })
  .openapi('ContentProCompany')

const ContentProSnippetsSchema = z
  .object({
    description: z.array(z.string()).exactOptional(),
    text: z.array(z.string()).exactOptional(),
    title: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContentProSnippets')

const InputCompanySchema = z
  .object({
    companyName: z.string().exactOptional(),
    country: z.string().exactOptional(),
    employee: z.string().exactOptional(),
    industry: z.string().exactOptional(),
    linkedin: z.string().exactOptional(),
    twitter: z.string().exactOptional(),
    website: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InputCompany')

const SimilarCompanySchema = z
  .object({
    companyName: z.string().exactOptional(),
    description: z.string().exactOptional(),
    employee: z.string().exactOptional(),
    industry: z.string().exactOptional(),
    linkedin: z.string().exactOptional(),
    title: z.string().exactOptional(),
    twitter: z.string().exactOptional(),
    website: z.string().exactOptional(),
  })
  .openapi({ xml: { name: 'Order' }, required: [] })
  .openapi('SimilarCompany')

const SnippetSchema = z
  .object({
    description: z.array(z.string()).exactOptional(),
    text: z.array(z.string()).exactOptional(),
    title: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Snippet')

const SimilarCompanySearchSchema = z
  .object({
    companyName: z.string().exactOptional(),
    description: z.string().exactOptional(),
    employee: z.string().exactOptional(),
    industry: z.string().exactOptional(),
    linkedin: z.string().exactOptional(),
    snippets: z.array(SnippetSchema).exactOptional(),
    title: z.string().exactOptional(),
    twitter: z.string().exactOptional(),
    website: z.string().exactOptional(),
  })
  .openapi({ xml: { name: 'Order' }, required: [] })
  .openapi('SimilarCompanySearch')

const ApiKeySecurityScheme = {
  description:
    'All Automata API endpoints require an API key distributed by Automata. Retrieve an API key at https://apis.byautomata.io for the /similar and /search endpoints. The ContentPro API endpoints are not included in the standard Market Intelligence API plans. Contact support@byautomata.io for access.',
  in: 'header',
  name: 'x-api-key',
  type: 'apiKey',
}

export const getContentproSearchRoute = createRoute({
  method: 'get',
  path: '/contentpro-search',
  tags: ['contentpro-search'],
  summary: 'Send search terms to receive the most relevant articles and companies.',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([['link', ['terms']]])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          terms: z
            .object({
              link: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Comma separated list of search terms. Ex. terms=cloud+computing,enterprise,security',
                }),
            })
            .openapi({
              param: {
                description:
                  'We provide information about related companies and articles based on the search terms you provide. Separate search terms with commas. Ex. https://api.byautomata.io/contentpro-search?terms=cloud+computing,enterprise,security',
                in: 'query',
                name: 'terms',
                required: true,
                schema: {
                  properties: {
                    link: {
                      description:
                        'Comma separated list of search terms. Ex. terms=cloud+computing,enterprise,security',
                      type: 'string',
                    },
                  },
                  required: ['terms'],
                  type: 'string',
                },
              },
              required: ['terms'],
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'A successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              calls_per_month: z.string().exactOptional(),
              count_remaining: z.string().exactOptional(),
              data: z
                .array(
                  z
                    .object({
                      article: ArticleSchema.exactOptional(),
                      company: ContentProCompanySchema.exactOptional(),
                      snippets: ContentProSnippetsSchema.exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              renewal_date: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'Your request was not valid. Please refer to the API documentation https://api-specs.byautomata.io.',
    },
    403: {
      description:
        'Invalid API Key. Please refer to the API documentation https://api-specs.byautomata.io.',
    },
    501: {
      description:
        'There was a server error. Please try again later or contact support@byautomata.io',
    },
  },
})

export const postContentproSimilarTextRoute = createRoute({
  method: 'post',
  path: '/contentpro-similar-text',
  tags: ['contentpro-similar-text'],
  summary:
    'The /contentpro-similar-text endpoint accepts and arbitrary piece of text and returns similar articles and blogs written by companies.',
  request: {
    body: {
      description:
        "We'll provide information about related companies and articles based on the text you provide.",
      content: {
        'application/json': {
          schema: z
            .object({ text: z.string().openapi({ description: 'Any piece of text' }) })
            .openapi({ required: ['text'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              calls_per_month: z.string().exactOptional(),
              count_remaining: z.string().exactOptional(),
              data: z
                .array(
                  z
                    .object({
                      article: ArticleSchema.exactOptional(),
                      company: ContentProCompanySchema.exactOptional(),
                      snippets: ContentProSnippetsSchema.exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              renewal_date: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'Your request was not valid. Please refer to the API documentation https://api-specs.byautomata.io.',
    },
    403: {
      description:
        'Invalid API Key. Please refer to the API documentation https://api-specs.byautomata.io.',
    },
    501: {
      description:
        'There was a server error. Please try again later or contact support@byautomata.io',
    },
  },
})

export const getSearchRoute = createRoute({
  method: 'get',
  path: '/search',
  tags: ['search'],
  summary: 'Send search terms to receive the most relevant companies along with text snippets.',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([['link', ['terms', 'page']]])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          terms: z
            .object({
              link: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Comma separated list of search terms. Ex. terms=cloud+computing,enterprise,security',
                }),
            })
            .openapi({
              param: {
                description:
                  'We provide information about related companies based on the search terms you provide. Separate search terms with commas. Ex. https://api.byautomata.io/search?link=cloud+computing,enterprise,security',
                in: 'query',
                name: 'terms',
                required: true,
                schema: {
                  properties: {
                    link: {
                      description:
                        'Comma separated list of search terms. Ex. terms=cloud+computing,enterprise,security',
                      type: 'string',
                    },
                  },
                  required: ['terms'],
                  type: 'string',
                },
              },
              required: ['terms'],
            }),
          page: z
            .object({
              link: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Results are returned in batches of approximately 15 companies. Use the page parameter to page through results.',
                }),
            })
            .default('0')
            .exactOptional()
            .openapi({
              param: {
                description:
                  'Page number of search results. Ex. https://api.byautomata.io/search?page=0&link=cloud+computing,enterprise,security',
                in: 'query',
                name: 'page',
                required: false,
                schema: {
                  default: '0',
                  properties: {
                    link: {
                      description:
                        'Results are returned in batches of approximately 15 companies. Use the page parameter to page through results.',
                      type: 'string',
                    },
                  },
                  required: ['page'],
                  type: 'string',
                },
              },
              required: ['page'],
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'A successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              calls_per_month: z.string().exactOptional(),
              companies: z.array(SimilarCompanySearchSchema).exactOptional(),
              count_remaining: z.string().exactOptional(),
              renewal_date: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'Your request was not valid. Please refer to the API documentation https://api-specs.byautomata.io.',
    },
    403: {
      description:
        'Invalid API Key. Please refer to the API documentation https://api-specs.byautomata.io.',
    },
    501: {
      description:
        'There was a server error. Please try again later or contact support@byautomata.io',
    },
  },
})

export const getSimilarRoute = createRoute({
  method: 'get',
  path: '/similar',
  tags: ['similar'],
  summary: 'Send a company website to receive a list of companies related to them.',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([['link', ['link', 'page']]])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          link: z
            .object({
              link: z.string().openapi({ description: 'Any company website. Ex. apple.com' }),
            })
            .openapi({
              param: {
                description:
                  "We'll provide information about related companies based on the site you provide. If a LinkedIn page is sent, we will try to identify the company related to the page. Ex. https://api.byautomata.io/similar?link=ibm.com",
                in: 'query',
                name: 'link',
                required: true,
                schema: {
                  properties: {
                    link: { description: 'Any company website. Ex. apple.com', type: 'string' },
                  },
                  required: ['link'],
                  type: 'string',
                },
              },
              required: ['link'],
            }),
          page: z
            .object({
              link: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Results are returned in batches of approximately 10 companies. Use the page parameter to page through results.',
                }),
            })
            .default('0')
            .exactOptional()
            .openapi({
              param: {
                description:
                  'Page number of search results. Ex. https://api.byautomata.io/similar?link=ibm.com&page=1',
                in: 'query',
                name: 'page',
                required: false,
                schema: {
                  default: '0',
                  properties: {
                    link: {
                      description:
                        'Results are returned in batches of approximately 10 companies. Use the page parameter to page through results.',
                      type: 'string',
                    },
                  },
                  required: ['page'],
                  type: 'string',
                },
              },
              required: ['page'],
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'A successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              calls_per_month: z.string().exactOptional(),
              companies: z.array(SimilarCompanySchema).exactOptional(),
              count_remaining: z.string().exactOptional(),
              input_company: InputCompanySchema.exactOptional(),
              renewal_date: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'Your request was not valid. Please refer to the API documentation https://api-specs.byautomata.io.',
    },
    403: {
      description:
        'Invalid API Key. Please refer to the API documentation https://api-specs.byautomata.io.',
    },
    501: {
      description:
        'There was a server error. Please try again later or contact support@byautomata.io',
    },
  },
})
