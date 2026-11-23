import { createRoute, z } from '@hono/zod-openapi'

type JsonValueType =
  | null
  | boolean
  | number
  | string
  | JsonValueType[]
  | { [key: string]: JsonValueType }

const SearchCompanyEntityOutputSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'Stable company entity identifier.' }),
    type: z.literal('company').openapi({ description: 'Entity discriminator.' }),
    version: z.int().min(1).openapi({ description: 'Entity schema version.' }),
    properties: z
      .strictObject({
        name: z.union([z.string(), z.null().nullable()]).openapi({ description: 'Company name.' }),
        foundedYear: z
          .union([z.int(), z.null().nullable()])
          .openapi({ description: 'Year the company was founded.' }),
        description: z
          .union([z.string(), z.null().nullable()])
          .openapi({ description: 'Short company description.' }),
        workforce: z
          .union([
            z
              .strictObject({
                total: z
                  .union([z.number(), z.null().nullable()])
                  .openapi({ description: 'Total estimated employee count.' }),
              })
              .openapi({ required: ['total'] }),
            z.null().nullable(),
          ])
          .openapi({ description: 'Company workforce information.' }),
        headquarters: z
          .union([
            z
              .strictObject({
                address: z
                  .union([z.string(), z.null().nullable()])
                  .openapi({ description: 'Company headquarters street address.' }),
                city: z
                  .union([z.string(), z.null().nullable()])
                  .openapi({ description: 'Company headquarters city.' }),
                postalCode: z
                  .union([z.string(), z.null().nullable()])
                  .openapi({ description: 'Company headquarters postal code.' }),
                country: z
                  .union([z.string(), z.null().nullable()])
                  .openapi({ description: 'Company headquarters country.' }),
              })
              .openapi({ required: ['address', 'city', 'postalCode', 'country'] }),
            z.null().nullable(),
          ])
          .openapi({ description: 'Company headquarters information.' }),
        financials: z
          .union([
            z
              .strictObject({
                revenueAnnual: z
                  .union([z.number(), z.null().nullable()])
                  .openapi({ description: 'Estimated annual revenue in USD.' }),
                fundingTotal: z
                  .union([z.number(), z.null().nullable()])
                  .openapi({ description: 'Total funding raised in USD.' }),
                fundingLatestRound: z
                  .union([
                    z
                      .strictObject({
                        name: z
                          .union([z.string(), z.null().nullable()])
                          .openapi({ description: 'Funding round name.' }),
                        date: z
                          .union([z.string(), z.null().nullable()])
                          .openapi({ description: 'Funding round date.' }),
                        amount: z
                          .union([z.number(), z.null().nullable()])
                          .openapi({ description: 'Funding round amount in USD.' }),
                      })
                      .openapi({ required: ['name', 'date', 'amount'] }),
                    z.null().nullable(),
                  ])
                  .openapi({ description: 'Most recent funding round, when available.' }),
              })
              .openapi({ required: ['revenueAnnual', 'fundingTotal', 'fundingLatestRound'] }),
            z.null().nullable(),
          ])
          .openapi({ description: 'Company financial information.' }),
        webTraffic: z
          .union([
            z
              .strictObject({
                visitsMonthly: z
                  .union([z.number(), z.null().nullable()])
                  .openapi({ description: 'Estimated monthly website visits.' }),
                countryRank: z
                  .union([z.int(), z.null().nullable()])
                  .openapi({
                    description:
                      "Estimated website traffic rank within the company's primary country.",
                  }),
                avgDurationSeconds: z
                  .union([z.number(), z.null().nullable()])
                  .openapi({ description: 'Estimated average visit duration, in seconds.' }),
                history: z
                  .array(
                    z
                      .strictObject({
                        value: z
                          .number()
                          .openapi({ description: 'Estimated monthly visits for this period.' }),
                        dateFrom: z
                          .string()
                          .openapi({
                            description: 'Start month for this value, formatted as YYYY-MM.',
                          }),
                        dateTo: z
                          .string()
                          .openapi({
                            description: 'End month for this value, formatted as YYYY-MM.',
                          }),
                      })
                      .openapi({ required: ['value', 'dateFrom', 'dateTo'] }),
                  )
                  .openapi({ description: 'Historical monthly website visits.' }),
              })
              .openapi({
                required: ['visitsMonthly', 'countryRank', 'avgDurationSeconds', 'history'],
              }),
            z.null().nullable(),
          ])
          .openapi({ description: 'Company web traffic information.' }),
        research: z
          .union([
            z
              .strictObject({
                worksCount: z
                  .union([z.int(), z.null().nullable()])
                  .openapi({ description: 'Number of works with an affiliated author.' }),
                citationCount: z
                  .union([z.int(), z.null().nullable()])
                  .openapi({ description: 'Lifetime citation count.' }),
                areas: z
                  .array(z.string())
                  .openapi({ description: 'Ranked research areas, most active first.' }),
                notableWorks: z
                  .array(
                    z
                      .strictObject({
                        title: z
                          .union([z.string(), z.null().nullable()])
                          .openapi({ description: 'Publication title.' }),
                        year: z
                          .union([z.int(), z.null().nullable()])
                          .openapi({ description: 'Publication year.' }),
                        venue: z
                          .union([z.string(), z.null().nullable()])
                          .openapi({ description: 'Publication venue.' }),
                        citationCount: z
                          .union([z.int(), z.null().nullable()])
                          .openapi({ description: 'Number of works citing this publication.' }),
                        doi: z
                          .union([z.string(), z.null().nullable()])
                          .openapi({ description: 'Digital Object Identifier.' }),
                        id: z
                          .union([z.string(), z.null().nullable()])
                          .openapi({
                            description: 'Resolved publication entity identifier, when available.',
                          }),
                        type: z
                          .union([
                            z.enum([
                              'article',
                              'book',
                              'book-chapter',
                              'dataset',
                              'dissertation',
                              'preprint',
                              'report',
                              'review',
                            ]),
                            z.null().nullable(),
                          ])
                          .openapi({ description: 'Publication type.' }),
                      })
                      .openapi({
                        required: ['title', 'year', 'venue', 'citationCount', 'doi', 'id', 'type'],
                      }),
                  )
                  .openapi({ description: 'Most-cited notable works.' }),
                topResearchers: z
                  .array(
                    z
                      .strictObject({
                        person: z
                          .union([
                            z
                              .strictObject({
                                name: z
                                  .union([z.string(), z.null().nullable()])
                                  .openapi({ description: 'Referenced person name.' }),
                                id: z
                                  .union([z.string(), z.null().nullable()])
                                  .openapi({ description: 'Referenced person entity identifier.' }),
                              })
                              .openapi({ required: ['name', 'id'] }),
                            z.null().nullable(),
                          ])
                          .openapi({ description: 'Referenced researcher.' }),
                        worksCount: z
                          .union([z.int(), z.null().nullable()])
                          .openapi({
                            description: 'Number of works produced at the organization.',
                          }),
                        citationCount: z
                          .union([z.int(), z.null().nullable()])
                          .openapi({
                            description:
                              'Number of citations for works produced at the organization.',
                          }),
                      })
                      .openapi({ required: ['person', 'worksCount', 'citationCount'] }),
                  )
                  .openapi({
                    description: 'Researchers ordered by works produced at the organization.',
                  }),
              })
              .openapi({
                required: [
                  'worksCount',
                  'citationCount',
                  'areas',
                  'notableWorks',
                  'topResearchers',
                ],
              }),
            z.null().nullable(),
          ])
          .openapi({ description: 'Company research information.' }),
      })
      .openapi({
        required: [
          'name',
          'foundedYear',
          'description',
          'workforce',
          'headquarters',
          'financials',
          'webTraffic',
          'research',
        ],
        description: 'Company-specific entity fields.',
      }),
  })
  .openapi({ required: ['id', 'type', 'version', 'properties'] })
  .openapi('SearchCompanyEntityOutput')

const SearchPersonEntityOutputSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'Stable person entity identifier.' }),
    type: z.literal('person').openapi({ description: 'Entity discriminator.' }),
    version: z.int().min(1).openapi({ description: 'Entity schema version.' }),
    properties: z
      .strictObject({
        name: z.union([z.string(), z.null().nullable()]).openapi({ description: 'Person name.' }),
        firstName: z
          .union([z.string(), z.null().nullable()])
          .openapi({ description: 'Person first name.' }),
        lastName: z
          .union([z.string(), z.null().nullable()])
          .openapi({ description: 'Person last name.' }),
        location: z
          .union([z.string(), z.null().nullable()])
          .openapi({ description: 'Person location.' }),
        workHistory: z
          .array(
            z
              .strictObject({
                title: z
                  .union([z.string(), z.null().nullable()])
                  .openapi({ description: 'Role title.' }),
                location: z
                  .union([z.string(), z.null().nullable()])
                  .openapi({ description: 'Role location.' }),
                dates: z
                  .union([
                    z
                      .strictObject({
                        from: z
                          .union([z.string(), z.null().nullable()])
                          .openapi({ description: 'Start date for the date range.' }),
                        to: z
                          .union([z.string(), z.null().nullable()])
                          .openapi({ description: 'End date for the date range.' }),
                      })
                      .openapi({ required: ['from', 'to'] }),
                    z.null().nullable(),
                  ])
                  .openapi({ description: 'Role date range.' }),
                company: z
                  .union([
                    z
                      .strictObject({
                        id: z
                          .union([z.string(), z.null().nullable()])
                          .openapi({ description: 'Referenced company identifier.' }),
                        name: z
                          .union([z.string(), z.null().nullable()])
                          .openapi({ description: 'Referenced company name.' }),
                      })
                      .openapi({ required: ['id', 'name'] }),
                    z.null().nullable(),
                  ])
                  .openapi({ description: 'Company for this role.' }),
              })
              .openapi({ required: ['title', 'location', 'dates', 'company'] }),
          )
          .openapi({ description: 'Known professional roles for this person.' }),
        educationHistory: z
          .array(
            z
              .strictObject({
                degree: z
                  .union([z.string(), z.null().nullable()])
                  .openapi({ description: 'Degree or credential.' }),
                dates: z
                  .union([
                    z
                      .strictObject({
                        from: z
                          .union([z.string(), z.null().nullable()])
                          .openapi({ description: 'Start date for the date range.' }),
                        to: z
                          .union([z.string(), z.null().nullable()])
                          .openapi({ description: 'End date for the date range.' }),
                      })
                      .openapi({ required: ['from', 'to'] }),
                    z.null().nullable(),
                  ])
                  .openapi({ description: 'Education date range.' }),
                institution: z
                  .union([
                    z
                      .strictObject({
                        id: z
                          .union([z.string(), z.null().nullable()])
                          .openapi({ description: 'Referenced institution identifier.' }),
                        name: z
                          .union([z.string(), z.null().nullable()])
                          .openapi({ description: 'Referenced institution name.' }),
                      })
                      .openapi({ required: ['id', 'name'] }),
                    z.null().nullable(),
                  ])
                  .openapi({ description: 'Education institution.' }),
              })
              .openapi({ required: ['degree', 'dates', 'institution'] }),
          )
          .openapi({ description: 'Known education history for this person.' }),
        research: z
          .union([
            z
              .strictObject({
                worksCount: z
                  .union([z.int(), z.null().nullable()])
                  .openapi({ description: 'Lifetime number of works.' }),
                citationCount: z
                  .union([z.int(), z.null().nullable()])
                  .openapi({ description: 'Lifetime citation count.' }),
                hIndex: z
                  .union([z.int(), z.null().nullable()])
                  .openapi({ description: 'Research h-index.' }),
                firstPublicationYear: z
                  .union([z.int(), z.null().nullable()])
                  .openapi({ description: 'Year of the first publication.' }),
                latestPublicationYear: z
                  .union([z.int(), z.null().nullable()])
                  .openapi({ description: 'Year of the latest publication.' }),
                areas: z
                  .array(z.string())
                  .openapi({ description: 'Ranked research areas, most active first.' }),
                notableWorks: z
                  .array(
                    z
                      .strictObject({
                        title: z
                          .union([z.string(), z.null().nullable()])
                          .openapi({ description: 'Publication title.' }),
                        year: z
                          .union([z.int(), z.null().nullable()])
                          .openapi({ description: 'Publication year.' }),
                        venue: z
                          .union([z.string(), z.null().nullable()])
                          .openapi({ description: 'Publication venue.' }),
                        citationCount: z
                          .union([z.int(), z.null().nullable()])
                          .openapi({ description: 'Number of works citing this publication.' }),
                        doi: z
                          .union([z.string(), z.null().nullable()])
                          .openapi({ description: 'Digital Object Identifier.' }),
                        id: z
                          .union([z.string(), z.null().nullable()])
                          .openapi({
                            description: 'Resolved publication entity identifier, when available.',
                          }),
                        type: z
                          .union([
                            z.enum([
                              'article',
                              'book',
                              'book-chapter',
                              'dataset',
                              'dissertation',
                              'preprint',
                              'report',
                              'review',
                            ]),
                            z.null().nullable(),
                          ])
                          .openapi({ description: 'Publication type.' }),
                      })
                      .openapi({
                        required: ['title', 'year', 'venue', 'citationCount', 'doi', 'id', 'type'],
                      }),
                  )
                  .openapi({ description: 'Most-cited notable works.' }),
              })
              .openapi({
                required: [
                  'worksCount',
                  'citationCount',
                  'hIndex',
                  'firstPublicationYear',
                  'latestPublicationYear',
                  'areas',
                  'notableWorks',
                ],
              }),
            z.null().nullable(),
          ])
          .openapi({ description: 'Person research information.' }),
      })
      .openapi({
        required: [
          'name',
          'firstName',
          'lastName',
          'location',
          'workHistory',
          'educationHistory',
          'research',
        ],
        description: 'Person-specific entity fields.',
      }),
  })
  .openapi({ required: ['id', 'type', 'version', 'properties'] })
  .openapi('SearchPersonEntityOutput')

const SearchPublicationEntityOutputSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'Stable publication entity identifier.' }),
    type: z.literal('publication').openapi({ description: 'Entity discriminator.' }),
    version: z.int().min(1).openapi({ description: 'Entity schema version.' }),
    properties: z
      .strictObject({
        title: z
          .union([z.string(), z.null().nullable()])
          .openapi({ description: 'Publication title.' }),
        year: z.union([z.int(), z.null().nullable()]).openapi({ description: 'Publication year.' }),
        date: z
          .union([z.string(), z.null().nullable()])
          .openapi({ description: 'Publication date.' }),
        type: z
          .union([
            z.enum([
              'article',
              'book',
              'book-chapter',
              'dataset',
              'dissertation',
              'preprint',
              'report',
              'review',
            ]),
            z.null().nullable(),
          ])
          .openapi({ description: 'Publication type.' }),
        language: z
          .union([z.string(), z.null().nullable()])
          .openapi({ description: 'Publication language.' }),
        citationCount: z
          .union([z.int(), z.null().nullable()])
          .openapi({
            description: 'Number of works citing this publication (incoming references).',
          }),
        authors: z
          .array(
            z
              .strictObject({
                name: z
                  .union([z.string(), z.null().nullable()])
                  .openapi({ description: 'Author display name.' }),
                id: z
                  .union([z.string(), z.null().nullable()])
                  .openapi({ description: 'Resolved person entity identifier, when available.' }),
              })
              .openapi({ required: ['name', 'id'] }),
          )
          .openapi({ description: 'Ordered list of authors.' }),
        referenceCount: z
          .union([z.int(), z.null().nullable()])
          .openapi({
            description: 'Number of works this publication cites (outgoing references).',
          }),
        abstract: z
          .union([z.string(), z.null().nullable()])
          .openapi({ description: 'Publication abstract text.' }),
        doi: z
          .union([z.string(), z.null().nullable()])
          .openapi({ description: 'Bare DOI identifier (e.g. 10.1234/abcd).' }),
      })
      .openapi({
        required: [
          'title',
          'year',
          'date',
          'type',
          'language',
          'citationCount',
          'authors',
          'referenceCount',
          'abstract',
          'doi',
        ],
        description: 'Publication-specific entity fields.',
      }),
  })
  .openapi({ required: ['id', 'type', 'version', 'properties'] })
  .openapi('SearchPublicationEntityOutput')

type SearchResultOutputType = {
  title: string
  url: string
  publishedDate?: string
  author?: string | null
  id?: string
  image?: string
  favicon?: string
  text?: string
  highlights?: string[]
  highlightScores?: number[]
  summary?: string
  subpages?: {
    title: string
    url: string
    publishedDate?: string
    author?: string | null
    id?: string
    image?: string
    favicon?: string
  }[]
  entities?: (
    | z.infer<typeof SearchCompanyEntityOutputSchema>
    | z.infer<typeof SearchPersonEntityOutputSchema>
    | z.infer<typeof SearchPublicationEntityOutputSchema>
  )[]
  extras?: {
    links?: string[]
    imageLinks?: string[]
    richImageLinks?: { url: string; alt?: string }[]
    richLinks?: { url: string; anchor?: string }[]
    codeBlocks?: { text: string; source: string }[]
  }
}

const SearchResultOutputSchema: z.ZodType<SearchResultOutputType> = z
  .strictObject({
    title: z.string().openapi({ description: 'The title of the search result.' }),
    url: z.url().openapi({ description: 'The URL of the search result.' }),
    publishedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'An estimate of the creation date, from parsing HTML content. Format is YYYY-MM-DD.',
      }),
    author: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'If available, the author of the content.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The temporary ID for the document. Useful for the /contents endpoint.',
      }),
    image: z
      .url()
      .exactOptional()
      .openapi({
        description: 'The URL of an image associated with the search result, if available.',
      }),
    favicon: z
      .url()
      .exactOptional()
      .openapi({ description: "The URL of the favicon for the search result's domain." }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full content text of the search result.' }),
    highlights: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Array of highlights extracted from the search result content.' }),
    highlightScores: z
      .array(z.float32())
      .exactOptional()
      .openapi({ description: 'Array of cosine similarity scores for each highlighted snippet.' }),
    summary: z.string().exactOptional().openapi({ description: 'Summary of the webpage.' }),
    subpages: z
      .array(
        z
          .strictObject({
            title: z.string().openapi({ description: 'The title of the search result.' }),
            url: z.url().openapi({ description: 'The URL of the search result.' }),
            publishedDate: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'An estimate of the creation date, from parsing HTML content. Format is YYYY-MM-DD.',
              }),
            author: z
              .union([z.string(), z.null().nullable()])
              .exactOptional()
              .openapi({ description: 'If available, the author of the content.' }),
            id: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The temporary ID for the document. Useful for the /contents endpoint.',
              }),
            image: z
              .url()
              .exactOptional()
              .openapi({
                description: 'The URL of an image associated with the search result, if available.',
              }),
            favicon: z
              .url()
              .exactOptional()
              .openapi({ description: "The URL of the favicon for the search result's domain." }),
          })
          .openapi({ required: ['title', 'url'] }),
      )
      .exactOptional()
      .openapi({ description: 'Array of subpages for the search result.' }),
    entities: z
      .array(
        z
          .discriminatedUnion('type', [
            SearchCompanyEntityOutputSchema,
            SearchPersonEntityOutputSchema,
            SearchPublicationEntityOutputSchema,
          ])
          .openapi({
            discriminator: {
              propertyName: 'type',
              mapping: {
                company: '#/components/schemas/SearchCompanyEntityOutput',
                person: '#/components/schemas/SearchPersonEntityOutput',
                publication: '#/components/schemas/SearchPublicationEntityOutput',
              },
            },
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Structured entity data for company, person, publication, or product search results. Returned for supported entity-backed categories and for product listing pages.',
      }),
    extras: z
      .strictObject({
        links: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'Array of links from the search result.' }),
        imageLinks: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'Array of image URLs from the search result.' }),
        richImageLinks: z
          .array(
            z
              .strictObject({
                url: z.string().openapi({ description: 'The URL of the image.' }),
                alt: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The alt text of the image, when the page provides one.',
                  }),
              })
              .openapi({ required: ['url'] }),
          )
          .exactOptional()
          .openapi({
            description:
              'Array of images with their alt text, in the order the images appear on the page.',
          }),
        richLinks: z
          .array(
            z
              .strictObject({
                url: z.string().openapi({ description: 'The URL of the link.' }),
                anchor: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The anchor text of the link, when the page provides one.',
                  }),
              })
              .openapi({ required: ['url'] }),
          )
          .exactOptional()
          .openapi({
            description:
              'Array of links with their anchor text, in the order they appear on the page.',
          }),
        codeBlocks: z
          .array(
            z
              .strictObject({
                text: z.string().openapi({ description: 'The contents of the code block.' }),
                source: z
                  .string()
                  .openapi({
                    description: 'The language the code block is annotated with, if any.',
                  }),
              })
              .openapi({ required: ['text', 'source'] }),
          )
          .exactOptional()
          .openapi({ description: 'Array of code blocks from the search result.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Results from extras. Each field is returned only when requested via contents.extras.',
        required: [],
      }),
  })
  .openapi({ required: ['title', 'url'] })
  .openapi('SearchResultOutput')

const CostDollarsOutputSchema = z
  .strictObject({
    total: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Estimated total dollar cost for the completed request. This response value is not an invoice record.',
      }),
    search: z
      .strictObject({
        neural: z
          .float32()
          .exactOptional()
          .openapi({ description: 'Cost of neural search operations.' }),
        keyword: z
          .float32()
          .exactOptional()
          .openapi({ description: 'Cost of keyword search operations.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Estimated search cost by retrieval mode. Some search types report their cost only in `total`.',
        required: [],
      }),
    summary: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Cost of synthesized summary generation for search requests.' }),
    contents: z
      .strictObject({
        text: z.float32().exactOptional().openapi({ description: 'Cost of text extraction.' }),
        highlights: z
          .float32()
          .exactOptional()
          .openapi({ description: 'Cost of highlight extraction.' }),
        summary: z
          .float32()
          .exactOptional()
          .openapi({ description: 'Cost of per-result summary generation.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Estimated cost breakdown for standalone content retrieval (text, highlights, and summaries billed outside the bundled search price).',
        required: [],
      }),
  })
  .openapi({
    description:
      'Estimated dollar cost of the request. Which fields appear depends on the endpoint.',
    required: [],
  })
  .openapi('CostDollarsOutput')

const SearchWarningOutputSchema = z
  .strictObject({
    code: z
      .string()
      .openapi({
        description:
          'Machine-readable warning code, UPPER_SNAKE. `IGNORED_FIELD`: the field at `path` is accepted and has no effect. Codes are an open set: tolerate codes you do not recognize.',
        example: 'IGNORED_FIELD',
      }),
    path: z
      .string()
      .openapi({
        description: 'JSON Pointer to the request field the warning is about.',
        example: '/startCrawlDate',
      }),
    message: z
      .string()
      .openapi({
        description: 'Human-readable and complete on its own: what to change in the request.',
      }),
  })
  .openapi({
    required: ['code', 'path', 'message'],
    description:
      'A note about the request itself, for whoever maintains the code that builds it. Log it; do not pass it to a model. A warning never changes the status code or the results.',
  })
  .openapi('SearchWarningOutput')

const SearchNoticeOutputSchema = z
  .strictObject({
    code: z
      .string()
      .openapi({
        description:
          'Machine-readable notice code, UPPER_SNAKE. `RESTRICTIONS_RELAXED`: the `site:` or exact-phrase restrictions written in the query matched nothing, so the results come from a search with them removed; filters set in the request body were kept. Codes are an open set: tolerate codes you do not recognize.',
        example: 'RESTRICTIONS_RELAXED',
      }),
    path: z
      .string()
      .openapi({
        description: 'JSON Pointer to the request field the notice is about.',
        example: '/query',
      }),
    message: z
      .string()
      .openapi({
        description: 'Human-readable and complete on its own; written to be shown to a model.',
      }),
    details: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          'Optional extra context for a harness or model. An open object: no schema is promised for its keys, and it never carries information that `message` lacks.',
      }),
  })
  .openapi({
    required: ['code', 'path', 'message'],
    description:
      'A note about how the results were produced, written to be passed to a model with the results.',
  })
  .openapi('SearchNoticeOutput')

const JsonValueSchema: z.ZodType<JsonValueType> = z
  .lazy(() =>
    z
      .xor([
        z.null().nullable(),
        z.boolean(),
        z.number(),
        z.string(),
        z.array(JsonValueSchema),
        z.record(z.string(), JsonValueSchema),
      ])
      .openapi({ description: 'Any JSON value.' }),
  )
  .openapi('JsonValue')

const SearchSynthesisOutputOutputSchema = z
  .strictObject({
    content: z
      .xor([z.string(), z.record(z.string(), JsonValueSchema)])
      .openapi({
        description:
          'Synthesized content. String by default, or object when outputSchema is provided.',
      }),
    grounding: z
      .array(
        z
          .strictObject({
            field: z
              .string()
              .openapi({
                description:
                  'Field path in output.content, for example content or companies[0].funding.',
              }),
            citations: z
              .array(
                z
                  .strictObject({
                    url: z.url().openapi({ description: 'Source URL.' }),
                    title: z.string().openapi({ description: 'Source title.' }),
                  })
                  .openapi({ required: ['url', 'title'] }),
              )
              .openapi({ description: 'Sources supporting this output field.' }),
            confidence: z
              .enum(['low', 'medium', 'high'])
              .openapi({ description: 'Model-reported reliability for this field.' }),
          })
          .openapi({ required: ['field', 'citations', 'confidence'] }),
      )
      .openapi({ description: 'Field-level grounding for synthesized output.' }),
  })
  .openapi({
    required: ['content', 'grounding'],
    description: 'Synthesized output. Returned when outputSchema is provided.',
  })
  .openapi('SearchSynthesisOutputOutput')

type SearchSynthesisResponseType = {
  requestId?: string
  results: z.infer<typeof SearchResultOutputSchema>[]
  costDollars?: z.infer<typeof CostDollarsOutputSchema>
  searchTime?: number
  warnings?: z.infer<typeof SearchWarningOutputSchema>[]
  notices?: z.infer<typeof SearchNoticeOutputSchema>[]
  output: z.infer<typeof SearchSynthesisOutputOutputSchema>
  resolvedSearchType?: string
  context?: string
}

const SearchSynthesisResponseSchema: z.ZodType<SearchSynthesisResponseType> = z
  .strictObject({
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the request.' }),
    results: z
      .array(SearchResultOutputSchema)
      .openapi({
        description: 'A list of search results containing title, URL, published date, and author.',
      }),
    costDollars: CostDollarsOutputSchema.exactOptional(),
    searchTime: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Server-side processing time in milliseconds. May exclude output synthesis time, so it can be lower than end-to-end latency.',
      }),
    warnings: z
      .array(SearchWarningOutputSchema)
      .exactOptional()
      .openapi({
        description:
          'Warnings about the request, such as a field that has no effect. Log them; do not pass them to a model. Omitted when there are none.',
      }),
    notices: z
      .array(SearchNoticeOutputSchema)
      .exactOptional()
      .openapi({
        description:
          'Notices about how the results were produced. Pass them to your model with the results. Omitted when there are none.',
      }),
    output: SearchSynthesisOutputOutputSchema,
    resolvedSearchType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Deprecated. May be an empty string. Do not branch on this value.',
        'x-exa-lifecycle': 'deprecated',
        deprecated: true,
      }),
    context: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated. Use `results[].highlights` or `results[].text` instead. Combined context string from search results.',
        'x-exa-lifecycle': 'deprecated',
        deprecated: true,
        'x-exa-replacement': ['results[].highlights', 'results[].text'],
      }),
  })
  .openapi({ required: ['results', 'output'] })
  .openapi('SearchSynthesisResponse')

type SearchResultsResponseType = {
  requestId?: string
  results: z.infer<typeof SearchResultOutputSchema>[]
  costDollars?: z.infer<typeof CostDollarsOutputSchema>
  searchTime?: number
  warnings?: z.infer<typeof SearchWarningOutputSchema>[]
  notices?: z.infer<typeof SearchNoticeOutputSchema>[]
  resolvedSearchType?: string
  context?: string
}

const SearchResultsResponseSchema: z.ZodType<SearchResultsResponseType> = z
  .strictObject({
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the request.' }),
    results: z
      .array(SearchResultOutputSchema)
      .openapi({
        description: 'A list of search results containing title, URL, published date, and author.',
      }),
    costDollars: CostDollarsOutputSchema.exactOptional(),
    searchTime: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Server-side processing time in milliseconds. May exclude output synthesis time, so it can be lower than end-to-end latency.',
      }),
    warnings: z
      .array(SearchWarningOutputSchema)
      .exactOptional()
      .openapi({
        description:
          'Warnings about the request, such as a field that has no effect. Log them; do not pass them to a model. Omitted when there are none.',
      }),
    notices: z
      .array(SearchNoticeOutputSchema)
      .exactOptional()
      .openapi({
        description:
          'Notices about how the results were produced. Pass them to your model with the results. Omitted when there are none.',
      }),
    resolvedSearchType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Deprecated. May be an empty string. Do not branch on this value.',
        'x-exa-lifecycle': 'deprecated',
        deprecated: true,
      }),
    context: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated. Use `results[].highlights` or `results[].text` instead. Combined context string from search results.',
        'x-exa-lifecycle': 'deprecated',
        deprecated: true,
        'x-exa-replacement': ['results[].highlights', 'results[].text'],
      }),
  })
  .openapi({ required: ['results'] })
  .openapi('SearchResultsResponse')

type SearchResponseType =
  | z.infer<typeof SearchSynthesisResponseSchema>
  | z.infer<typeof SearchResultsResponseSchema>

type ContentsResponseType = {
  requestId?: string
  results?: z.infer<typeof SearchResultOutputSchema>[]
  statuses?: {
    id: string
    status: 'success' | 'error'
    source?: 'cached' | 'crawled'
    error?: { tag?: string; httpStatusCode?: number | null } | null
  }[]
  costDollars?: z.infer<typeof CostDollarsOutputSchema>
  searchTime?: number
  context?: string
}

type FindSimilarResultType = {
  title: string
  url: string
  publishedDate?: string
  author?: string | null
  id?: string
  image?: string
  favicon?: string
  text?: string
  highlights?: string[]
  highlightScores?: number[]
  summary?: string
  subpages?: {
    title: string
    url: string
    publishedDate?: string
    author?: string | null
    id?: string
    image?: string
    favicon?: string
  }[]
  entities?: (
    | z.infer<typeof SearchCompanyEntityOutputSchema>
    | z.infer<typeof SearchPersonEntityOutputSchema>
    | z.infer<typeof SearchPublicationEntityOutputSchema>
  )[]
  extras?: {
    links?: string[]
    imageLinks?: string[]
    richImageLinks?: { url: string; alt?: string }[]
    richLinks?: { url: string; anchor?: string }[]
    codeBlocks?: { text: string; source: string }[]
  }
  score?: number
}

const FindSimilarResultSchema: z.ZodType<FindSimilarResultType> = z
  .strictObject({
    title: z.string().openapi({ description: 'The title of the search result.' }),
    url: z.url().openapi({ description: 'The URL of the search result.' }),
    publishedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'An estimate of the creation date, from parsing HTML content. Format is YYYY-MM-DD.',
      }),
    author: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'If available, the author of the content.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The temporary ID for the document. Useful for the /contents endpoint.',
      }),
    image: z
      .url()
      .exactOptional()
      .openapi({
        description: 'The URL of an image associated with the search result, if available.',
      }),
    favicon: z
      .url()
      .exactOptional()
      .openapi({ description: "The URL of the favicon for the search result's domain." }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full content text of the search result.' }),
    highlights: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Array of highlights extracted from the search result content.' }),
    highlightScores: z
      .array(z.float32())
      .exactOptional()
      .openapi({ description: 'Array of cosine similarity scores for each highlighted snippet.' }),
    summary: z.string().exactOptional().openapi({ description: 'Summary of the webpage.' }),
    subpages: z
      .array(
        z
          .strictObject({
            title: z.string().openapi({ description: 'The title of the search result.' }),
            url: z.url().openapi({ description: 'The URL of the search result.' }),
            publishedDate: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'An estimate of the creation date, from parsing HTML content. Format is YYYY-MM-DD.',
              }),
            author: z
              .union([z.string(), z.null().nullable()])
              .exactOptional()
              .openapi({ description: 'If available, the author of the content.' }),
            id: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The temporary ID for the document. Useful for the /contents endpoint.',
              }),
            image: z
              .url()
              .exactOptional()
              .openapi({
                description: 'The URL of an image associated with the search result, if available.',
              }),
            favicon: z
              .url()
              .exactOptional()
              .openapi({ description: "The URL of the favicon for the search result's domain." }),
          })
          .openapi({ required: ['title', 'url'] }),
      )
      .exactOptional()
      .openapi({ description: 'Array of subpages for the search result.' }),
    entities: z
      .array(
        z
          .discriminatedUnion('type', [
            SearchCompanyEntityOutputSchema,
            SearchPersonEntityOutputSchema,
            SearchPublicationEntityOutputSchema,
          ])
          .openapi({
            discriminator: {
              propertyName: 'type',
              mapping: {
                company: '#/components/schemas/SearchCompanyEntityOutput',
                person: '#/components/schemas/SearchPersonEntityOutput',
                publication: '#/components/schemas/SearchPublicationEntityOutput',
              },
            },
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Structured entity data for company, person, publication, or product search results. Returned for supported entity-backed categories and for product listing pages.',
      }),
    extras: z
      .strictObject({
        links: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'Array of links from the search result.' }),
        imageLinks: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'Array of image URLs from the search result.' }),
        richImageLinks: z
          .array(
            z
              .strictObject({
                url: z.string().openapi({ description: 'The URL of the image.' }),
                alt: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The alt text of the image, when the page provides one.',
                  }),
              })
              .openapi({ required: ['url'] }),
          )
          .exactOptional()
          .openapi({
            description:
              'Array of images with their alt text, in the order the images appear on the page.',
          }),
        richLinks: z
          .array(
            z
              .strictObject({
                url: z.string().openapi({ description: 'The URL of the link.' }),
                anchor: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The anchor text of the link, when the page provides one.',
                  }),
              })
              .openapi({ required: ['url'] }),
          )
          .exactOptional()
          .openapi({
            description:
              'Array of links with their anchor text, in the order they appear on the page.',
          }),
        codeBlocks: z
          .array(
            z
              .strictObject({
                text: z.string().openapi({ description: 'The contents of the code block.' }),
                source: z
                  .string()
                  .openapi({
                    description: 'The language the code block is annotated with, if any.',
                  }),
              })
              .openapi({ required: ['text', 'source'] }),
          )
          .exactOptional()
          .openapi({ description: 'Array of code blocks from the search result.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Results from extras. Each field is returned only when requested via contents.extras.',
        required: [],
      }),
    score: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Similarity score between the source url and the result. Higher values mean more similar; the scale is not normalized, so compare scores only within a single response.',
      }),
  })
  .openapi({ required: ['title', 'url'] })
  .openapi('FindSimilarResult')

type FindSimilarResponseType = {
  requestId?: string
  results?: z.infer<typeof FindSimilarResultSchema>[]
  costDollars?: z.infer<typeof CostDollarsOutputSchema>
  searchTime?: number
  context?: string
}

const SearchMonitorRunOutputSchema = z
  .strictObject({
    results: z
      .union([z.array(z.record(z.string(), JsonValueSchema)), z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'The search results' }),
    content: z
      .xor([JsonValueSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Synthesized content from the search results. Shape depends on `outputSchema.type`.',
      }),
    grounding: z
      .union([
        z.array(
          z
            .strictObject({
              field: z
                .string()
                .openapi({ description: 'The output field this citation applies to' }),
              citations: z.array(
                z
                  .strictObject({
                    url: z.url().openapi({ description: 'Source URL.' }),
                    title: z.string().openapi({ description: 'Source title.' }),
                  })
                  .openapi({ required: ['url', 'title'] }),
              ),
              confidence: z
                .enum(['low', 'medium', 'high'])
                .openapi({ description: 'Model-reported reliability for this field.' }),
            })
            .openapi({ required: ['field', 'citations', 'confidence'] }),
        ),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({ description: 'Field-level citations with confidence levels' }),
  })
  .openapi({ required: [] })
  .openapi('SearchMonitorRunOutput')

const SearchMonitorRunSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'The unique identifier for the run' }),
    monitorId: z.string().openapi({ description: 'The monitor this run belongs to' }),
    status: z
      .enum(['pending', 'running', 'completed', 'failed', 'cancelled'])
      .openapi({ description: 'The status of the run' }),
    output: z
      .union([SearchMonitorRunOutputSchema, z.null().nullable()])
      .openapi({ description: 'The output of the run. Null until the run completes.' }),
    failReason: z
      .union([
        z.enum([
          'api_key_invalid',
          'insufficient_credits',
          'invalid_params',
          'rate_limited',
          'source_not_available',
          'forbidden',
          'search_unavailable',
          'search_failed',
          'internal_error',
        ]),
        z.null().nullable(),
      ])
      .openapi({
        description:
          'The reason the run failed. Null unless status is `failed`. `source_not_available` means the search requested a domain Exa cannot return (remove it from the search), and `forbidden` means the request was otherwise not permitted.',
      }),
    startedAt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ description: 'When the run started executing' }),
    completedAt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ description: 'When the run completed successfully' }),
    failedAt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ description: 'When the run failed' }),
    cancelledAt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ description: 'When the run was cancelled' }),
    durationMs: z
      .union([z.int(), z.null().nullable()])
      .openapi({ description: 'Total execution time in milliseconds' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the run was created' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the run was last updated' }),
  })
  .openapi({
    required: [
      'id',
      'monitorId',
      'status',
      'output',
      'failReason',
      'startedAt',
      'completedAt',
      'failedAt',
      'cancelledAt',
      'durationMs',
      'createdAt',
      'updatedAt',
    ],
  })
  .openapi('SearchMonitorRun')

type ListSearchMonitorRunsResponseType = {
  data: z.infer<typeof SearchMonitorRunSchema>[]
  hasMore: boolean
  nextCursor?: string | null
}

const AgentRunIdSchema = z
  .string()
  .regex(/^[A-Za-z0-9_.:-]+$/)
  .min(1)
  .max(200)
  .openapi({ description: 'Agent run ID. New run IDs are returned with the `agent_run_` prefix.' })
  .openapi('AgentRunId')

const AgentRunStatusSchema = z
  .enum(['queued', 'running', 'completed', 'failed', 'cancelled'])
  .openapi('AgentRunStatus')

const AgentStopReasonSchema = z
  .union([
    z.literal('schema_satisfied').openapi({ description: 'The agent finished the task.' }),
    z
      .literal('budget_reached')
      .openapi({ description: 'The run reached `budget.maxCostDollars`.' }),
    z
      .literal('time_limit_reached')
      .openapi({ description: 'The run reached `budget.maxDurationSeconds`.' }),
    z
      .literal('iteration_limit_reached')
      .openapi({ description: 'The run reached its maximum number of agent steps.' }),
    z
      .literal('token_limit_reached')
      .openapi({ description: 'The run reached its limit on model tokens.' }),
    z.literal('stopped').openapi({ description: 'You stopped the run.' }),
    z.literal('error').openapi({ description: 'The run failed.' }),
    z.literal('cancelled').openapi({ description: 'The run was cancelled.' }),
    z.string(),
  ])
  .openapi({ 'x-exa-enum-open': true })
  .openapi('AgentStopReason')

const AgentEffortSchema = z
  .enum(['minimal', 'low', 'medium', 'high', 'xhigh', 'auto', 'ultra'])
  .default('auto')
  .openapi({
    description:
      'Cost and reasoning effort preference for the run. `auto` lets Exa choose the appropriate effort. `ultra` is the highest-effort tier for work where completeness and thoroughness matter more than latency or cost, including large list building, deep multi-source research, and criteria that are hard to verify.',
  })
  .openapi('AgentEffort')

const AgentDataSourceProviderSchema = z
  .string()
  .min(1)
  .openapi({
    description:
      'Identifier of an Exa Connect data provider, such as `fiber` or `financial_datasets`. A team can use the self-serve providers and any provider enabled for it; requesting any other provider returns a 400.',
  })
  .openapi('AgentDataSourceProvider')

const AgentDataSourceOutputSchema = z
  .strictObject({
    provider: AgentDataSourceProviderSchema.openapi({
      description:
        'Exa Connect data provider to enable for the run. All provider tools are available by default.',
    }),
  })
  .openapi({ required: ['provider'] })
  .openapi('AgentDataSourceOutput')

const AgentBudgetOutputSchema = z
  .strictObject({
    maxCostDollars: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Maximum amount this run can spend in US dollars. Accepts $1–$100 and applies only to `auto` and `ultra`; when omitted, the default cap is $5 for `auto` and $20 for `ultra`.',
      }),
    maxDurationSeconds: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Soft wall-clock ceiling for the run in seconds. Accepts 300–10,800 (5 minutes to 3 hours) and applies only to `ultra`. As the run approaches the limit, the agent stops starting new work and returns what it has found with `stopReason: "time_limit_reached"`.',
      }),
  })
  .openapi({
    description:
      'Optional per-run spending and duration limits for the metered `auto` and `ultra` efforts. Runs that finish early may cost less than the limit.',
    required: [],
  })
  .openapi('AgentBudgetOutput')

const AgentRunRequestSchema = z
  .object({
    query: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'Natural-language question or instructions for the request.' }),
    systemPrompt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional instructions that guide generated output or agent behavior. Use this for source preferences, novelty constraints, duplication constraints, or other behavior guidance.',
      }),
    effort: AgentEffortSchema.exactOptional(),
    input: z
      .strictObject({
        data: z
          .array(
            z.record(z.string(), JsonValueSchema).openapi({ description: 'A JSON object record.' }),
          )
          .exactOptional()
          .openapi({ description: 'Records the agent should process or enrich.' }),
        exclusion: z
          .array(
            z.record(z.string(), JsonValueSchema).openapi({ description: 'A JSON object record.' }),
          )
          .exactOptional()
          .openapi({ description: 'Records or entities the agent should avoid returning.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    outputSchema: z
      .union([
        z
          .record(z.string(), JsonValueSchema)
          .openapi({
            description:
              'JSON Schema for validated structured output in `output.structured`. Fields unsupported by evidence may be returned as `null`. Supports draft-07, 2019-09, and 2020-12 via `$schema`.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    previousRunId: AgentRunIdSchema.exactOptional(),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Caller-provided key-value metadata for your own tracking.' }),
    dataSources: z
      .array(AgentDataSourceOutputSchema)
      .exactOptional()
      .openapi({ description: 'Exa Connect data providers configured for the run.' }),
    budget: AgentBudgetOutputSchema.exactOptional(),
  })
  .catchall(JsonValueSchema)
  .openapi({ description: 'Canonicalized request fields stored with the run.', required: [] })
  .openapi('AgentRunRequest')

const AgentCitationSchema = z
  .strictObject({
    url: z.url().openapi({ description: 'Source URL.' }),
    title: z.string().exactOptional().openapi({ description: 'Source title.' }),
  })
  .openapi({ required: ['url'] })
  .openapi('AgentCitation')

const AgentGroundingSchema = z
  .strictObject({
    field: z.string().openapi({ description: 'Output field the citations support.' }),
    citations: z.array(AgentCitationSchema),
    confidence: z
      .union([
        z
          .enum(['low', 'medium', 'high'])
          .openapi({ description: 'Model-reported reliability for this field.' }),
        z.null().nullable(),
      ])
      .exactOptional(),
  })
  .openapi({ required: ['field', 'citations'] })
  .openapi('AgentGrounding')

const AgentRunOutputSchema = z
  .strictObject({
    text: z.string().openapi({ description: 'Natural-language answer or summary.' }),
    structured: z
      .union([JsonValueSchema, z.null().nullable()])
      .openapi({
        description:
          'JSON shaped by `outputSchema`; fields unsupported by evidence may be `null`. `null` when no schema was provided.',
      }),
    grounding: z
      .array(AgentGroundingSchema)
      .openapi({ description: 'Field-level citations emitted by the run.' }),
  })
  .openapi({ required: ['text', 'structured', 'grounding'] })
  .openapi('AgentRunOutput')

const AgentDataSourceUsageSchema = z
  .record(z.string(), z.int().min(0))
  .openapi({
    description:
      'Per-provider tool call counts for Exa Connect data sources used during the run. Keys are provider names (e.g. `fiber`, `similarweb`). Only providers with non-zero usage are included.',
  })
  .openapi('AgentDataSourceUsage')

const AgentUsageSchema = z
  .strictObject({
    agentComputeUnits: z.number().min(0),
    searches: z.number().min(0),
    emails: z.number().min(0),
    phoneNumbers: z.number().min(0),
    dataSources: AgentDataSourceUsageSchema.exactOptional(),
  })
  .openapi({
    required: ['agentComputeUnits', 'searches', 'emails', 'phoneNumbers'],
    description:
      "Billed usage for the run. When an `auto` or `ultra` run's metered cost exceeds `budget.maxCostDollars`, the run is billed the budget and each quantity except `dataSources` is scaled down in proportion, so quantities can be fractional.",
  })
  .openapi('AgentUsage')

const AgentDataSourceCostSchema = z
  .record(z.string(), z.number().min(0))
  .openapi({
    description:
      'Per-provider cost in dollars for Exa Connect data sources used during the run. Keys are provider names (e.g. `fiber`, `similarweb`). Only providers with non-zero usage are included.',
  })
  .openapi('AgentDataSourceCost')

const AgentCostDollarsSchema = z
  .strictObject({
    total: z.number().min(0),
    agentCompute: z.number().min(0),
    search: z.number().min(0),
    emails: z.number().min(0),
    phoneNumbers: z.number().min(0),
    dataSources: AgentDataSourceCostSchema.exactOptional(),
  })
  .openapi({ required: ['total', 'agentCompute', 'search', 'emails', 'phoneNumbers'] })
  .openapi('AgentCostDollars')

const AgentRunSchema = z
  .strictObject({
    id: AgentRunIdSchema,
    object: z.literal('agent_run'),
    status: AgentRunStatusSchema,
    stopReason: z
      .union([AgentStopReasonSchema, z.null().nullable()])
      .openapi({
        description:
          'Why the run stopped. `null` while the run is queued or running. Every reason except `error` and `cancelled` means the run completed and returned what it found. Clients should accept values not listed here.',
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the run was created' }),
    completedAt: z.union([z.iso.datetime({ offset: true }), z.null().nullable()]),
    request: z.union([AgentRunRequestSchema, z.null().nullable()]),
    output: AgentRunOutputSchema,
    usage: AgentUsageSchema,
    costDollars: AgentCostDollarsSchema,
  })
  .openapi({
    required: [
      'id',
      'object',
      'status',
      'stopReason',
      'createdAt',
      'completedAt',
      'request',
      'output',
      'usage',
      'costDollars',
    ],
  })
  .openapi('AgentRun')

type AgentRunListType = {
  object: 'list'
  data: z.infer<typeof AgentRunSchema>[]
  hasMore: boolean
  nextCursor: z.infer<typeof AgentRunIdSchema> | null
}

const SearchStreamTextDeltaChunkOutputSchema = z
  .strictObject({
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the request.' }),
    type: z.literal('text-delta'),
    delta: z.string(),
    choices: z
      .array(
        z
          .strictObject({
            index: z.int().min(0),
            delta: z
              .strictObject({
                role: z.literal('assistant').exactOptional(),
                content: z.string().exactOptional(),
                citations: z
                  .array(
                    z
                      .strictObject({
                        url: z.url().openapi({ description: 'Source URL.' }),
                        title: z.string().openapi({ description: 'Source title.' }),
                        id: z.string(),
                      })
                      .openapi({ required: ['url', 'title', 'id'] }),
                  )
                  .exactOptional(),
              })
              .openapi({ required: [] }),
            finish_reason: z.xor([z.literal('stop'), z.null().nullable()]),
          })
          .openapi({ required: ['index', 'delta', 'finish_reason'] }),
      )
      .exactOptional(),
  })
  .openapi({ required: ['type', 'delta'] })
  .openapi('SearchStreamTextDeltaChunkOutput')

const SearchStreamGroundingChunkOutputSchema = z
  .strictObject({
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the request.' }),
    type: z.literal('grounding'),
    grounding: z
      .array(
        z
          .strictObject({
            field: z
              .string()
              .openapi({
                description:
                  'Field path in output.content, for example content or companies[0].funding.',
              }),
            citations: z
              .array(
                z
                  .strictObject({
                    url: z.url().openapi({ description: 'Source URL.' }),
                    title: z.string().openapi({ description: 'Source title.' }),
                  })
                  .openapi({ required: ['url', 'title'] }),
              )
              .openapi({ description: 'Sources supporting this output field.' }),
            confidence: z
              .enum(['low', 'medium', 'high'])
              .openapi({ description: 'Model-reported reliability for this field.' }),
          })
          .openapi({ required: ['field', 'citations', 'confidence'] }),
      )
      .openapi({ description: 'Field-level grounding for synthesized output.' }),
    citations: z
      .array(
        z
          .strictObject({
            url: z.url().openapi({ description: 'Source URL.' }),
            title: z.string().openapi({ description: 'Source title.' }),
            id: z.string(),
          })
          .openapi({ required: ['url', 'title', 'id'] }),
      )
      .exactOptional(),
    choices: z
      .array(
        z
          .strictObject({
            index: z.int().min(0),
            delta: z
              .strictObject({
                role: z.literal('assistant').exactOptional(),
                content: z.string().exactOptional(),
                citations: z
                  .array(
                    z
                      .strictObject({
                        url: z.url().openapi({ description: 'Source URL.' }),
                        title: z.string().openapi({ description: 'Source title.' }),
                        id: z.string(),
                      })
                      .openapi({ required: ['url', 'title', 'id'] }),
                  )
                  .exactOptional(),
              })
              .openapi({ required: [] }),
            finish_reason: z.xor([z.literal('stop'), z.null().nullable()]),
          })
          .openapi({ required: ['index', 'delta', 'finish_reason'] }),
      )
      .exactOptional(),
  })
  .openapi({ required: ['type', 'grounding'] })
  .openapi('SearchStreamGroundingChunkOutput')

type SearchStreamResultsChunkOutputType = {
  requestId?: string
  type: 'results'
  results: z.infer<typeof SearchResultOutputSchema>[]
  warnings?: z.infer<typeof SearchWarningOutputSchema>[]
  notices?: z.infer<typeof SearchNoticeOutputSchema>[]
}

const SearchStreamResultsChunkOutputSchema: z.ZodType<SearchStreamResultsChunkOutputType> &
  z.core.$ZodTypeDiscriminable = z
  .strictObject({
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the request.' }),
    type: z.literal('results'),
    results: z.array(SearchResultOutputSchema),
    warnings: z
      .array(SearchWarningOutputSchema)
      .exactOptional()
      .openapi({
        description:
          'Warnings about the request, such as a field that has no effect. Log them; do not pass them to a model. Omitted when there are none.',
      }),
    notices: z
      .array(SearchNoticeOutputSchema)
      .exactOptional()
      .openapi({
        description:
          'Notices about how the results were produced. Pass them to your model with the results. Omitted when there are none.',
      }),
  })
  .openapi({ required: ['type', 'results'] })
  .openapi('SearchStreamResultsChunkOutput')

const SearchStreamResetChunkOutputSchema = z
  .strictObject({
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the request.' }),
    type: z.literal('stream-reset'),
    streamReset: z.literal(true),
  })
  .openapi({ required: ['type', 'streamReset'] })
  .openapi('SearchStreamResetChunkOutput')

const SearchStreamDoneChunkOutputSchema = z
  .strictObject({
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the request.' }),
    type: z.literal('done'),
    output: z.union([SearchSynthesisOutputOutputSchema, z.null().nullable()]),
    searchTime: z
      .number()
      .openapi({
        description:
          'Server-side processing time in milliseconds. May exclude output synthesis time, so it can be lower than end-to-end latency.',
      }),
    costDollars: CostDollarsOutputSchema.exactOptional(),
    choices: z
      .array(
        z
          .strictObject({
            index: z.int().min(0),
            delta: z
              .strictObject({
                role: z.literal('assistant').exactOptional(),
                content: z.string().exactOptional(),
                citations: z
                  .array(
                    z
                      .strictObject({
                        url: z.url().openapi({ description: 'Source URL.' }),
                        title: z.string().openapi({ description: 'Source title.' }),
                        id: z.string(),
                      })
                      .openapi({ required: ['url', 'title', 'id'] }),
                  )
                  .exactOptional(),
              })
              .openapi({ required: [] }),
            finish_reason: z.xor([z.literal('stop'), z.null().nullable()]),
          })
          .openapi({ required: ['index', 'delta', 'finish_reason'] }),
      )
      .exactOptional(),
  })
  .openapi({ required: ['type', 'output', 'searchTime'] })
  .openapi('SearchStreamDoneChunkOutput')

const SearchStreamErrorChunkOutputSchema = z
  .strictObject({
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the request.' }),
    type: z.literal('error'),
    error: z.strictObject({ message: z.string() }).openapi({ required: ['message'] }),
  })
  .openapi({ required: ['type', 'error'] })
  .openapi('SearchStreamErrorChunkOutput')

type SearchStreamChunkType =
  | z.infer<typeof SearchStreamTextDeltaChunkOutputSchema>
  | z.infer<typeof SearchStreamGroundingChunkOutputSchema>
  | z.infer<typeof SearchStreamResultsChunkOutputSchema>
  | z.infer<typeof SearchStreamResetChunkOutputSchema>
  | z.infer<typeof SearchStreamDoneChunkOutputSchema>
  | z.infer<typeof SearchStreamErrorChunkOutputSchema>

const CompanyEntitySchema = z
  .object({ type: z.literal('company').default('company') })
  .openapi({ required: ['type'], title: 'Company' })
  .openapi('CompanyEntity')

const PersonEntitySchema = z
  .object({ type: z.literal('person').default('person') })
  .openapi({ required: ['type'], title: 'Person' })
  .openapi('PersonEntity')

const ArticleEntitySchema = z
  .object({ type: z.literal('article').default('article') })
  .openapi({ required: ['type'], title: 'Article' })
  .openapi('ArticleEntity')

const ResearchPaperEntitySchema = z
  .object({ type: z.literal('research_paper').default('research_paper') })
  .openapi({ required: ['type'], title: 'Research Paper' })
  .openapi('ResearchPaperEntity')

const CustomEntitySchema = z
  .object({ description: z.string().min(2).max(200), type: z.literal('custom').default('custom') })
  .openapi({ required: ['type', 'description'], title: 'Custom' })
  .openapi('CustomEntity')

const EntitySchema = z
  .xor([
    CompanyEntitySchema,
    PersonEntitySchema,
    ArticleEntitySchema,
    ResearchPaperEntitySchema,
    CustomEntitySchema,
  ])
  .openapi('Entity')

const WebsetSearchBehaviorSchema = z.enum(['override', 'append']).openapi('WebsetSearchBehavior')

const WebsetSearchCanceledReasonSchema = z
  .enum(['webset_deleted', 'webset_canceled', 'out_of_credits'])
  .openapi('WebsetSearchCanceledReason')

const WebsetSearchSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique identifier for the search' }),
    object: z
      .literal('webset_search')
      .default('webset_search')
      .openapi({ description: 'The type of object' }),
    websetId: z
      .string()
      .openapi({ description: 'The unique identifier for the Webset this search belongs to' }),
    status: z
      .enum(['created', 'pending', 'running', 'completed', 'canceled'])
      .openapi({ description: 'The status of the search', title: 'WebsetSearchStatus' }),
    query: z
      .string()
      .min(1)
      .max(5000)
      .openapi({ description: 'The query used to create the search.' }),
    entity: EntitySchema.nullable().openapi({
      description:
        'The entity the search will return results for.\n\nWhen no entity is provided during creation, we will automatically select the best entity based on the query.',
    }),
    criteria: z
      .array(
        z
          .object({
            description: z
              .string()
              .min(1)
              .max(1000)
              .openapi({ description: 'The description of the criterion' }),
            successRate: z
              .number()
              .min(0)
              .max(100)
              .openapi({
                description:
                  'Value between 0 and 100 representing the percentage of results that meet the criterion.',
              }),
          })
          .openapi({ required: ['description', 'successRate'] }),
      )
      .openapi({
        description:
          'The criteria the search will use to evaluate the results. If not provided, we will automatically generate them for you.',
      }),
    count: z
      .number()
      .min(1)
      .openapi({
        description:
          'The number of results the search will attempt to find. The actual number of results may be less than this number depending on the search complexity.',
      }),
    maxPeoplePerCompany: z
      .int()
      .min(1)
      .nullable()
      .openapi({
        description:
          'The soft cap requested for matching people from the same current employer company, or null when no cap was requested.',
      }),
    behavior: WebsetSearchBehaviorSchema.default('override')
      .exactOptional()
      .openapi({
        description:
          "The behavior of the search when it is added to a Webset.\n\n- `override`: the search will replace the existing Items found in the Webset and evaluate them against the new criteria. Any Items that don't match the new criteria will be discarded.\n- `append`: the search will add the new Items found to the existing Webset. Any Items that don't match the new criteria will be discarded.",
      }),
    exclude: z
      .array(
        z
          .object({ source: z.enum(['import', 'webset']), id: z.string() })
          .openapi({ required: ['source', 'id'] }),
      )
      .openapi({
        description:
          'Sources (existing imports or websets) used to omit certain results to be found during the search.',
      }),
    scope: z
      .array(
        z
          .object({
            source: z.enum(['import', 'webset']),
            id: z.string(),
            relationship: z
              .object({
                definition: z
                  .string()
                  .openapi({
                    description:
                      'What the relationship of the entities you hope to find is relative to the entities contained in the provided source.',
                  }),
                limit: z.number().min(1).max(10),
              })
              .exactOptional()
              .openapi({ required: ['definition', 'limit'] }),
          })
          .openapi({ required: ['source', 'id'] }),
      )
      .openapi({
        description:
          'Sources the search is limited to. Empty when the search covers the whole web.',
      }),
    progress: z
      .object({
        found: z.number().openapi({ description: 'The number of results found so far' }),
        analyzed: z.number().openapi({ description: 'The number of results analyzed so far' }),
        completion: z
          .number()
          .min(0)
          .max(100)
          .openapi({ description: 'The completion percentage of the search' }),
        timeLeft: z
          .number()
          .nullable()
          .openapi({ description: 'The estimated time remaining in seconds, null if unknown' }),
      })
      .openapi({
        required: ['found', 'analyzed', 'completion', 'timeLeft'],
        description: 'The progress of the search',
      }),
    recall: z
      .object({
        expected: z
          .object({
            total: z
              .number()
              .openapi({ description: 'The estimated total number of potential matches' }),
            confidence: z
              .enum(['high', 'medium', 'low'])
              .openapi({ description: 'The confidence in the estimate' }),
            bounds: z
              .object({
                min: z
                  .number()
                  .openapi({
                    description: 'The minimum estimated total number of potential matches',
                  }),
                max: z
                  .number()
                  .openapi({
                    description: 'The maximum estimated total number of potential matches',
                  }),
              })
              .openapi({ required: ['min', 'max'] }),
          })
          .openapi({ required: ['total', 'confidence', 'bounds'] }),
        reasoning: z.string().openapi({ description: 'The reasoning for the estimate' }),
      })
      .nullable()
      .openapi({
        required: ['expected', 'reasoning'],
        description: 'Recall metrics for the search, null if not yet computed or requested.',
      }),
    metadata: z
      .record(z.string(), z.string().max(1000))
      .default({})
      .exactOptional()
      .openapi({ description: 'Set of key-value pairs you want to associate with this object.' }),
    canceledAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'The date and time the search was canceled' }),
    canceledReason: WebsetSearchCanceledReasonSchema.nullable().openapi({
      description: 'The reason the search was canceled',
    }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the search was created' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the search was updated' }),
  })
  .openapi({
    required: [
      'id',
      'object',
      'websetId',
      'status',
      'query',
      'entity',
      'criteria',
      'count',
      'maxPeoplePerCompany',
      'exclude',
      'scope',
      'progress',
      'recall',
      'canceledAt',
      'canceledReason',
      'createdAt',
      'updatedAt',
    ],
  })
  .openapi('WebsetSearch')

const ImportSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique identifier for the Import' }),
    object: z.literal('import').openapi({ description: 'The type of object' }),
    status: z
      .enum(['pending', 'processing', 'completed', 'failed', 'canceled'])
      .openapi({ description: 'The status of the Import' }),
    format: z.enum(['csv', 'webset']).openapi({ description: 'The format of the import.' }),
    entity: EntitySchema.nullable().openapi({
      description: 'The type of entity the import contains.',
    }),
    title: z.string().openapi({ description: 'The title of the import' }),
    count: z.number().openapi({ description: 'The number of entities in the import' }),
    metadata: z
      .record(z.string(), z.string().max(1000))
      .openapi({ description: 'Set of key-value pairs you want to associate with this object.' }),
    failedReason: z
      .enum(['invalid_format', 'invalid_file_content', 'missing_identifier'])
      .nullable()
      .openapi({ description: 'The reason the import failed' }),
    failedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'When the import failed' }),
    failedMessage: z
      .string()
      .nullable()
      .openapi({ description: 'A human readable message of the import failure' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the import was created' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the import was last updated' }),
  })
  .openapi({
    required: [
      'id',
      'object',
      'status',
      'format',
      'entity',
      'title',
      'count',
      'metadata',
      'failedReason',
      'failedAt',
      'failedMessage',
      'createdAt',
      'updatedAt',
    ],
  })
  .openapi('Import')

const WebsetEnrichmentFormatSchema = z
  .enum(['text', 'date', 'number', 'options', 'email', 'phone', 'url'])
  .openapi('WebsetEnrichmentFormat')

const WebsetEnrichmentSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique identifier for the enrichment' }),
    object: z
      .literal('webset_enrichment')
      .default('webset_enrichment')
      .openapi({ description: 'The type of object' }),
    status: z
      .enum(['pending', 'canceled', 'completed'])
      .openapi({ description: 'The status of the enrichment', title: 'WebsetEnrichmentStatus' }),
    websetId: z
      .string()
      .openapi({ description: 'The unique identifier for the Webset this enrichment belongs to.' }),
    title: z
      .string()
      .nullable()
      .openapi({
        description:
          'The title of the enrichment.\n\nThis will be automatically generated based on the description and format.',
      }),
    description: z
      .string()
      .openapi({
        description:
          'The description of the enrichment task provided during the creation of the enrichment.',
      }),
    format: WebsetEnrichmentFormatSchema.nullable().openapi({
      description: 'The format of the enrichment response.',
    }),
    options: z
      .array(
        z
          .object({ label: z.string().openapi({ description: 'The label of the option' }) })
          .openapi({ required: ['label'] }),
      )
      .nullable()
      .openapi({
        description:
          'When the format is options, the different options for the enrichment agent to choose from.',
        title: 'WebsetEnrichmentOptions',
      }),
    instructions: z
      .string()
      .nullable()
      .openapi({
        description:
          'The instructions for the enrichment Agent.\n\nThis will be automatically generated based on the description and format.',
      }),
    metadata: z
      .record(z.string(), z.string().max(1000))
      .default({})
      .exactOptional()
      .openapi({ description: 'The metadata of the enrichment' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the enrichment was created' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the enrichment was updated' }),
  })
  .openapi({
    required: [
      'id',
      'object',
      'status',
      'websetId',
      'title',
      'description',
      'format',
      'options',
      'instructions',
      'createdAt',
      'updatedAt',
    ],
  })
  .openapi('WebsetEnrichment')

const MonitorCadenceSchema = z
  .object({
    cron: z
      .string()
      .openapi({
        description:
          'Cron expression for monitor cadence (must be a valid Unix cron with 5 fields). The schedule must trigger at most once per day.',
      }),
    timezone: z
      .string()
      .default('Etc/UTC')
      .exactOptional()
      .openapi({ description: 'IANA timezone (e.g., "America/New_York")' }),
  })
  .openapi({ required: ['cron'] })
  .openapi('MonitorCadence')

const MonitorBehaviorSchema = z
  .object({
    config: z
      .object({
        query: z
          .string()
          .min(2)
          .max(10000)
          .exactOptional()
          .openapi({
            description:
              'The query to search for. By default, the query from the last search is used.',
          }),
        criteria: z
          .array(
            z
              .object({ description: z.string().min(2).max(1000) })
              .openapi({ required: ['description'] }),
          )
          .max(5)
          .exactOptional()
          .openapi({
            description:
              'The criteria to search for. By default, the criteria from the last search is used.',
          }),
        entity: EntitySchema.exactOptional().openapi({
          title: 'Entity',
          description:
            'The entity to search for. By default, the entity from the last search/import is used.',
        }),
        count: z.number().gt(0).openapi({ description: 'The maximum number of results to find' }),
        behavior: WebsetSearchBehaviorSchema.default('append')
          .exactOptional()
          .openapi({ description: 'The behaviour of the Search when it is added to a Webset.' }),
      })
      .openapi({ required: ['count'], description: 'Search parameters for each Monitor run.' }),
    type: z
      .literal('search')
      .default('search')
      .openapi({
        description: 'Configure the Monitor to find new Items matching your search criteria',
      }),
  })
  .openapi({ required: ['type', 'config'] })
  .openapi('MonitorBehavior')

const MonitorRunSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique identifier for the Monitor Run' }),
    object: z.literal('monitor_run').openapi({ description: 'The type of object' }),
    monitorId: z.string().openapi({ description: 'The monitor that the run is associated with' }),
    status: z
      .enum(['created', 'running', 'completed', 'canceled', 'failed'])
      .openapi({ description: 'The status of the Monitor Run' }),
    completedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'When the run completed' }),
    failedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'When the run failed' }),
    failedReason: z.string().nullable().openapi({ description: 'The reason the run failed' }),
    canceledAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'When the run was canceled' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the run was created' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the run was last updated' }),
    type: z.enum(['search', 'refresh']).openapi({ description: 'The type of the Monitor Run' }),
  })
  .openapi({
    required: [
      'id',
      'object',
      'monitorId',
      'status',
      'type',
      'completedAt',
      'failedAt',
      'failedReason',
      'canceledAt',
      'createdAt',
      'updatedAt',
    ],
  })
  .openapi('MonitorRun')

const MonitorSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique identifier for the Monitor' }),
    object: z.literal('monitor').openapi({ description: 'The type of object' }),
    status: z.enum(['enabled', 'disabled']).openapi({ description: 'The status of the Monitor' }),
    websetId: z.string().openapi({ description: 'The id of the Webset the Monitor belongs to' }),
    cadence: MonitorCadenceSchema.openapi({ description: 'How often the monitor will run' }),
    behavior: MonitorBehaviorSchema.openapi({
      description: 'Behavior to perform when monitor runs',
    }),
    lastRun: MonitorRunSchema.nullable().openapi({
      title: 'MonitorRun',
      description: 'The last run of the monitor',
    }),
    nextRunAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'Date and time when the next run will occur in' }),
    metadata: z
      .record(z.string(), z.string().max(1000))
      .openapi({ description: 'Set of key-value pairs you want to associate with this object.' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the monitor was created' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the monitor was last updated' }),
  })
  .openapi({
    required: [
      'id',
      'object',
      'status',
      'websetId',
      'cadence',
      'behavior',
      'lastRun',
      'nextRunAt',
      'metadata',
      'createdAt',
      'updatedAt',
    ],
  })
  .openapi('Monitor')

const WebsetSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique identifier for the webset' }),
    object: z.literal('webset').default('webset').openapi({ description: 'The type of object' }),
    status: z
      .enum(['idle', 'pending', 'running', 'paused'])
      .openapi({ description: 'The status of the webset', title: 'WebsetStatus' }),
    externalId: z
      .string()
      .nullable()
      .openapi({ description: 'The external identifier for the webset' }),
    title: z.string().nullable().openapi({ description: 'The title of the webset' }),
    searches: z
      .array(WebsetSearchSchema)
      .openapi({ description: 'The searches that have been performed on the webset.' }),
    imports: z
      .array(ImportSchema)
      .openapi({ description: 'Imports that have been performed on the webset.' }),
    enrichments: z
      .array(WebsetEnrichmentSchema)
      .openapi({ description: 'The Enrichments to apply to the Webset Items.' }),
    monitors: z.array(MonitorSchema).openapi({ description: 'The Monitors for the Webset.' }),
    excludes: z
      .array(
        z
          .object({ source: z.enum(['import', 'webset']), id: z.string() })
          .openapi({ required: ['source', 'id'] }),
      )
      .exactOptional()
      .openapi({
        description:
          'The Excludes sources (existing imports or websets) that apply to all operations within this Webset. Any results found within these sources will be omitted across all search and import operations.',
      }),
    metadata: z
      .record(z.string(), z.string().max(1000))
      .default({})
      .exactOptional()
      .openapi({ description: 'Set of key-value pairs you want to associate with this object.' }),
    dashboardUrl: z
      .url()
      .openapi({ description: 'The URL to view the webset in the Exa dashboard' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the webset was created' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the webset was updated' }),
  })
  .openapi({
    required: [
      'id',
      'object',
      'status',
      'externalId',
      'title',
      'searches',
      'imports',
      'enrichments',
      'monitors',
      'dashboardUrl',
      'createdAt',
      'updatedAt',
    ],
  })
  .openapi('Webset')

type ListWebsetsResponseType = {
  data: z.infer<typeof WebsetSchema>[]
  hasMore: boolean
  nextCursor: string | null
}

const WebsetItemPersonPropertiesSchema = z
  .object({
    url: z.url().openapi({ description: 'The URL of the person profile' }),
    description: z
      .string()
      .openapi({ description: 'Short description of the relevance of the person' }),
    person: z
      .object({
        name: z.string().openapi({ description: 'The name of the person' }),
        location: z.string().nullable().openapi({ description: 'The location of the person' }),
        position: z
          .string()
          .nullable()
          .openapi({ description: 'The current work position of the person' }),
        company: z
          .object({
            name: z.string().openapi({ description: 'The name of the company' }),
            location: z
              .string()
              .nullable()
              .openapi({ description: 'The location the person is working at the company' }),
          })
          .nullable()
          .openapi({
            required: ['name', 'location'],
            title: 'WebsetItemPersonCompanyPropertiesFields',
          }),
        pictureUrl: z.url().nullable().openapi({ description: 'The image URL of the person' }),
        workHistory: z
          .array(
            z
              .object({
                title: z.string().nullable().openapi({ description: 'Job title or position' }),
                location: z.string().nullable().openapi({ description: 'Work location' }),
                dates: z
                  .object({
                    from: z.string().nullable().openapi({ description: 'Start date' }),
                    to: z.string().nullable().openapi({ description: 'End date' }),
                  })
                  .nullable()
                  .openapi({
                    required: ['from', 'to'],
                    title: 'WebsetItemPersonDateRange',
                    description: 'Employment dates',
                  }),
                company: z
                  .object({
                    id: z.string().nullable().openapi({ description: 'Entity ID of the company' }),
                    name: z.string().nullable().openapi({ description: 'Company name' }),
                    linkedinUrl: z
                      .string()
                      .nullable()
                      .openapi({ description: 'LinkedIn URL of the company' }),
                  })
                  .nullable()
                  .openapi({
                    required: ['id', 'name', 'linkedinUrl'],
                    title: 'WebsetItemPersonWorkHistoryCompanyRef',
                  }),
              })
              .openapi({
                required: ['title', 'location', 'dates', 'company'],
                title: 'WebsetItemPersonWorkHistoryEntry',
              }),
          )
          .openapi({ description: 'The work history of the person' }),
        educationHistory: z
          .array(
            z
              .object({
                degree: z.string().nullable().openapi({ description: 'Degree obtained' }),
                dates: z
                  .object({
                    from: z.string().nullable().openapi({ description: 'Start date' }),
                    to: z.string().nullable().openapi({ description: 'End date' }),
                  })
                  .nullable()
                  .openapi({
                    required: ['from', 'to'],
                    title: 'WebsetItemPersonDateRange',
                    description: 'Education dates',
                  }),
                institution: z
                  .object({
                    id: z
                      .string()
                      .nullable()
                      .openapi({ description: 'Entity ID of the institution' }),
                    name: z.string().nullable().openapi({ description: 'Institution name' }),
                    linkedinUrl: z
                      .string()
                      .nullable()
                      .openapi({ description: 'LinkedIn URL of the institution' }),
                  })
                  .nullable()
                  .openapi({
                    required: ['id', 'name', 'linkedinUrl'],
                    title: 'WebsetItemPersonEducationInstitutionRef',
                  }),
              })
              .openapi({
                required: ['degree', 'dates', 'institution'],
                title: 'WebsetItemPersonEducationHistoryEntry',
              }),
          )
          .openapi({ description: 'The education history of the person' }),
      })
      .openapi({
        required: [
          'name',
          'location',
          'position',
          'company',
          'pictureUrl',
          'workHistory',
          'educationHistory',
        ],
        title: 'WebsetItemPersonPropertiesFields',
      }),
    type: z.literal('person').default('person'),
  })
  .openapi({ required: ['type', 'url', 'description', 'person'], title: 'Person' })
  .openapi('WebsetItemPersonProperties')

const WebsetItemCompanyPropertiesSchema = z
  .object({
    url: z.url().openapi({ description: 'The URL of the company website' }),
    description: z
      .string()
      .openapi({ description: 'Short description of the relevance of the company' }),
    content: z
      .string()
      .nullable()
      .openapi({ description: 'The text content of the company website' }),
    company: z
      .object({
        name: z.string().openapi({ description: 'The name of the company' }),
        location: z
          .string()
          .nullable()
          .openapi({ description: 'The main location of the company' }),
        employees: z
          .int()
          .nullable()
          .openapi({ description: 'The number of employees of the company' }),
        industry: z.string().nullable().openapi({ description: 'The industry of the company' }),
        about: z.string().nullable().openapi({ description: 'A short description of the company' }),
        logoUrl: z.url().nullable().openapi({ description: 'The logo URL of the company' }),
        foundedYear: z
          .number()
          .nullable()
          .openapi({ description: 'The year the company was founded' }),
        headquarters: z
          .object({
            address: z
              .string()
              .nullable()
              .openapi({ description: 'The street address of the headquarters' }),
            city: z.string().nullable().openapi({ description: 'The city of the headquarters' }),
            state: z
              .string()
              .nullable()
              .openapi({ description: 'The state or region of the headquarters' }),
            postalCode: z
              .string()
              .nullable()
              .openapi({ description: 'The postal code of the headquarters' }),
            country: z
              .string()
              .nullable()
              .openapi({ description: 'The country of the headquarters' }),
            countryCode: z
              .string()
              .nullable()
              .openapi({ description: 'The ISO country code of the headquarters' }),
          })
          .nullable()
          .openapi({
            required: ['address', 'city', 'state', 'postalCode', 'country', 'countryCode'],
            title: 'WebsetItemCompanyHeadquarters',
            description: 'The structured headquarters address of the company',
          }),
        financials: z
          .object({
            revenueAnnual: z
              .number()
              .nullable()
              .openapi({ description: 'The annual revenue of the company (USD)' }),
            fundingTotal: z
              .number()
              .nullable()
              .openapi({ description: 'The total funding raised by the company (USD)' }),
            fundingLatestRound: z
              .object({
                name: z
                  .string()
                  .nullable()
                  .openapi({ description: 'The name of the funding round (e.g. Series A)' }),
                date: z
                  .string()
                  .nullable()
                  .openapi({ description: 'The date of the funding round' }),
                amount: z
                  .number()
                  .nullable()
                  .openapi({ description: 'The amount raised in the funding round (USD)' }),
              })
              .nullable()
              .openapi({
                required: ['name', 'date', 'amount'],
                title: 'WebsetItemCompanyFundingRound',
                description: 'The latest funding round',
              }),
          })
          .nullable()
          .openapi({
            required: ['revenueAnnual', 'fundingTotal', 'fundingLatestRound'],
            title: 'WebsetItemCompanyFinancials',
            description: 'Financial information about the company',
          }),
        webTraffic: z
          .object({
            visitsMonthly: z
              .number()
              .nullable()
              .openapi({ description: 'The estimated monthly website visits' }),
            uniqueVisitors: z
              .number()
              .nullable()
              .openapi({ description: 'The estimated monthly unique visitors' }),
          })
          .nullable()
          .openapi({
            required: ['visitsMonthly', 'uniqueVisitors'],
            title: 'WebsetItemCompanyWebTraffic',
            description: 'Web traffic metrics for the company',
          }),
      })
      .openapi({
        required: [
          'name',
          'location',
          'employees',
          'industry',
          'about',
          'logoUrl',
          'foundedYear',
          'headquarters',
          'financials',
          'webTraffic',
        ],
        title: 'WebsetItemCompanyPropertiesFields',
      }),
    type: z.literal('company').default('company'),
  })
  .openapi({ required: ['type', 'url', 'description', 'content', 'company'], title: 'Company' })
  .openapi('WebsetItemCompanyProperties')

const WebsetItemArticlePropertiesSchema = z
  .object({
    url: z.url().openapi({ description: 'The URL of the article' }),
    description: z
      .string()
      .openapi({ description: 'Short description of the relevance of the article' }),
    content: z.string().nullable().openapi({ description: 'The text content for the article' }),
    article: z
      .object({
        title: z.string().nullable().openapi({ description: 'The title of the article' }),
        author: z.string().nullable().openapi({ description: 'The author(s) of the article' }),
        publishedAt: z
          .string()
          .nullable()
          .openapi({ description: 'The date and time the article was published' }),
      })
      .openapi({
        required: ['title', 'author', 'publishedAt'],
        title: 'WebsetItemArticlePropertiesFields',
      }),
    type: z.literal('article').default('article'),
  })
  .openapi({ required: ['type', 'url', 'description', 'content', 'article'], title: 'Article' })
  .openapi('WebsetItemArticleProperties')

const WebsetItemResearchPaperPropertiesSchema = z
  .object({
    url: z.url().openapi({ description: 'The URL of the research paper' }),
    description: z
      .string()
      .openapi({ description: 'Short description of the relevance of the research paper' }),
    content: z
      .string()
      .nullable()
      .openapi({ description: 'The text content of the research paper' }),
    researchPaper: z
      .object({
        title: z.string().nullable().openapi({ description: 'The title of the research paper' }),
        author: z
          .string()
          .nullable()
          .openapi({ description: 'The author(s) of the research paper' }),
        publishedAt: z
          .string()
          .nullable()
          .openapi({ description: 'The date and time the research paper was published' }),
      })
      .openapi({
        required: ['title', 'author', 'publishedAt'],
        title: 'WebsetItemResearchPaperPropertiesFields',
      }),
    type: z.literal('research_paper').default('research_paper'),
  })
  .openapi({
    required: ['type', 'url', 'description', 'content', 'researchPaper'],
    title: 'Research Paper',
  })
  .openapi('WebsetItemResearchPaperProperties')

const WebsetItemCustomPropertiesSchema = z
  .object({
    url: z.url().openapi({ description: 'The URL of the Item' }),
    description: z.string().openapi({ description: 'Short description of the Item' }),
    content: z.string().nullable().openapi({ description: 'The text content of the Item' }),
    custom: z
      .object({
        title: z.string().nullable().openapi({ description: 'The title of the website' }),
        author: z.string().nullable().openapi({ description: 'The author(s) of the website' }),
        publishedAt: z
          .string()
          .nullable()
          .openapi({ description: 'The date and time the website was published' }),
      })
      .openapi({
        required: ['title', 'author', 'publishedAt'],
        title: 'WebsetItemCustomPropertiesFields',
      }),
    type: z.literal('custom').default('custom'),
  })
  .openapi({ required: ['type', 'url', 'description', 'content', 'custom'], title: 'Custom' })
  .openapi('WebsetItemCustomProperties')

const WebsetItemEvaluationSchema = z
  .object({
    criterion: z.string().openapi({ description: 'The description of the criterion' }),
    reasoning: z
      .string()
      .openapi({ description: 'The reasoning for the result of the evaluation' }),
    satisfied: z
      .enum(['yes', 'no', 'unclear'])
      .openapi({ description: 'The satisfaction of the criterion' }),
    references: z
      .array(
        z
          .object({
            title: z.string().nullable().openapi({ description: 'The title of the reference' }),
            snippet: z
              .string()
              .nullable()
              .openapi({ description: 'The relevant snippet of the reference content' }),
            url: z.url().openapi({ description: 'The URL of the reference' }),
          })
          .openapi({ required: ['title', 'snippet', 'url'] }),
      )
      .default([])
      .exactOptional()
      .openapi({ description: 'The references used to generate the result.' }),
  })
  .openapi({ required: ['criterion', 'reasoning', 'satisfied'] })
  .openapi('WebsetItemEvaluation')

const EnrichmentResultSchema = z
  .object({
    object: z
      .literal('enrichment_result')
      .default('enrichment_result')
      .openapi({ description: 'The type of object' }),
    status: z
      .enum(['pending', 'completed', 'canceled'])
      .openapi({ description: 'The status of the enrichment result.' }),
    format: WebsetEnrichmentFormatSchema,
    result: z
      .array(z.string())
      .nullable()
      .openapi({ description: 'The result of the enrichment.' }),
    reasoning: z
      .string()
      .nullable()
      .openapi({ description: 'The reasoning for the result when an Agent is used.' }),
    references: z
      .array(
        z
          .object({
            title: z.string().nullable().openapi({ description: 'The title of the reference' }),
            snippet: z
              .string()
              .nullable()
              .openapi({ description: 'The relevant snippet of the reference content' }),
            url: z.url().openapi({ description: 'The URL of the reference' }),
          })
          .openapi({ required: ['title', 'snippet', 'url'] }),
      )
      .openapi({ description: 'The references used to generate the result.' }),
    enrichmentId: z
      .string()
      .openapi({ description: 'The id of the Enrichment that generated the result' }),
  })
  .openapi({
    required: ['object', 'status', 'format', 'result', 'reasoning', 'references', 'enrichmentId'],
  })
  .openapi('EnrichmentResult')

const WebsetItemSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique identifier for the Webset Item' }),
    object: z
      .literal('webset_item')
      .default('webset_item')
      .openapi({ description: 'The type of object' }),
    source: z.enum(['search', 'import']).openapi({ description: 'The source of the Item' }),
    sourceId: z.string().openapi({ description: 'The unique identifier for the source' }),
    sourceEntityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The original identifier used to resolve this item (e.g., email, name, or URL). Only relevant when the source is import.',
      }),
    scopeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The import that sourced this item, when the item came from a scoped search with evaluate enabled on the import.',
      }),
    websetId: z
      .string()
      .openapi({ description: 'The unique identifier for the Webset this Item belongs to.' }),
    properties: z
      .xor([
        WebsetItemPersonPropertiesSchema,
        WebsetItemCompanyPropertiesSchema,
        WebsetItemArticlePropertiesSchema,
        WebsetItemResearchPaperPropertiesSchema,
        WebsetItemCustomPropertiesSchema,
      ])
      .openapi({ description: 'The properties of the Item' }),
    evaluations: z
      .array(WebsetItemEvaluationSchema)
      .openapi({ description: 'The criteria evaluations of the item' }),
    enrichments: z
      .array(EnrichmentResultSchema)
      .nullable()
      .openapi({ description: 'The enrichments results of the Webset item' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the item was created' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the item was last updated' }),
  })
  .openapi({
    required: [
      'id',
      'object',
      'source',
      'sourceId',
      'websetId',
      'properties',
      'evaluations',
      'enrichments',
      'createdAt',
      'updatedAt',
    ],
  })
  .openapi('WebsetItem')

type GetWebsetResponseType = z.infer<typeof WebsetSchema> & {
  items?: z.infer<typeof WebsetItemSchema>[]
}

type ListWebsetItemResponseType = {
  data: z.infer<typeof WebsetItemSchema>[]
  hasMore: boolean
  nextCursor: string | null
}

const WebsetItemPreviewSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique identifier for the preview item' }),
    properties: z
      .xor([
        WebsetItemPersonPropertiesSchema,
        WebsetItemCompanyPropertiesSchema,
        WebsetItemArticlePropertiesSchema,
        WebsetItemResearchPaperPropertiesSchema,
        WebsetItemCustomPropertiesSchema,
      ])
      .openapi({ description: 'The properties of the preview item' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the preview was created' }),
  })
  .openapi({ required: ['id', 'properties', 'createdAt'] })
  .openapi('WebsetItemPreview')

type PreviewWebsetResponseType = {
  search: {
    entity:
      | z.infer<typeof CompanyEntitySchema>
      | z.infer<typeof PersonEntitySchema>
      | z.infer<typeof ArticleEntitySchema>
      | z.infer<typeof ResearchPaperEntitySchema>
      | z.infer<typeof CustomEntitySchema>
    criteria: { description: string }[]
  }
  enrichments: {
    description: string
    format: 'text' | 'date' | 'number' | 'options' | 'email' | 'phone' | 'url'
    options?: { label: string }[]
  }[]
  items: z.infer<typeof WebsetItemPreviewSchema>[]
}

type EventType =
  | {
      id: string
      object: 'event'
      data: z.infer<typeof WebsetSchema>
      createdAt: string
      type: 'webset.created'
    }
  | {
      id: string
      object: 'event'
      data: z.infer<typeof WebsetSchema>
      createdAt: string
      type: 'webset.deleted'
    }
  | {
      id: string
      object: 'event'
      data: z.infer<typeof WebsetSchema>
      createdAt: string
      type: 'webset.idle'
    }
  | {
      id: string
      object: 'event'
      data: z.infer<typeof WebsetSchema>
      createdAt: string
      type: 'webset.paused'
    }
  | {
      id: string
      object: 'event'
      data: z.infer<typeof WebsetItemSchema>
      createdAt: string
      type: 'webset.item.created'
    }
  | {
      id: string
      object: 'event'
      data: z.infer<typeof WebsetItemSchema>
      createdAt: string
      type: 'webset.item.enriched'
    }
  | {
      id: string
      object: 'event'
      data: z.infer<typeof WebsetSearchSchema>
      createdAt: string
      type: 'webset.search.created'
    }
  | {
      id: string
      object: 'event'
      data: z.infer<typeof WebsetSearchSchema>
      createdAt: string
      type: 'webset.search.updated'
    }
  | {
      id: string
      object: 'event'
      data: z.infer<typeof WebsetSearchSchema>
      createdAt: string
      type: 'webset.search.canceled'
    }
  | {
      id: string
      object: 'event'
      data: z.infer<typeof WebsetSearchSchema>
      createdAt: string
      type: 'webset.search.completed'
    }
  | {
      id: string
      object: 'event'
      data: z.infer<typeof ImportSchema>
      createdAt: string
      type: 'import.created'
    }
  | {
      id: string
      object: 'event'
      data: z.infer<typeof ImportSchema>
      createdAt: string
      type: 'import.completed'
    }
  | {
      id: string
      object: 'event'
      data: z.infer<typeof MonitorSchema>
      createdAt: string
      type: 'monitor.created'
    }
  | {
      id: string
      object: 'event'
      data: z.infer<typeof MonitorSchema>
      createdAt: string
      type: 'monitor.updated'
    }
  | {
      id: string
      object: 'event'
      data: z.infer<typeof MonitorSchema>
      createdAt: string
      type: 'monitor.deleted'
    }
  | {
      id: string
      object: 'event'
      data: z.infer<typeof MonitorRunSchema>
      createdAt: string
      type: 'monitor.run.created'
    }
  | {
      id: string
      object: 'event'
      data: z.infer<typeof MonitorRunSchema>
      createdAt: string
      type: 'monitor.run.completed'
    }

const EventSchema: z.ZodType<EventType> = z
  .discriminatedUnion('type', [
    z
      .object({
        id: z.string().openapi({ description: 'The unique identifier for the event' }),
        object: z.literal('event').default('event').openapi({ description: 'The type of object' }),
        data: WebsetSchema,
        createdAt: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'The date and time the event was created' }),
        type: z
          .literal('webset.created')
          .default('webset.created')
          .openapi({ description: 'The type of event' }),
      })
      .openapi({
        required: ['id', 'object', 'type', 'data', 'createdAt'],
        title: 'WebsetCreatedEvent',
      }),
    z
      .object({
        id: z.string().openapi({ description: 'The unique identifier for the event' }),
        object: z.literal('event').default('event').openapi({ description: 'The type of object' }),
        data: WebsetSchema,
        createdAt: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'The date and time the event was created' }),
        type: z
          .literal('webset.deleted')
          .default('webset.deleted')
          .openapi({ description: 'The type of event' }),
      })
      .openapi({
        required: ['id', 'object', 'type', 'data', 'createdAt'],
        title: 'WebsetDeletedEvent',
      }),
    z
      .object({
        id: z.string().openapi({ description: 'The unique identifier for the event' }),
        object: z.literal('event').default('event').openapi({ description: 'The type of object' }),
        data: WebsetSchema,
        createdAt: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'The date and time the event was created' }),
        type: z
          .literal('webset.idle')
          .default('webset.idle')
          .openapi({ description: 'The type of event' }),
      })
      .openapi({
        required: ['id', 'object', 'type', 'data', 'createdAt'],
        title: 'WebsetIdleEvent',
      }),
    z
      .object({
        id: z.string().openapi({ description: 'The unique identifier for the event' }),
        object: z.literal('event').default('event').openapi({ description: 'The type of object' }),
        data: WebsetSchema,
        createdAt: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'The date and time the event was created' }),
        type: z
          .literal('webset.paused')
          .default('webset.paused')
          .openapi({ description: 'The type of event' }),
      })
      .openapi({
        required: ['id', 'object', 'type', 'data', 'createdAt'],
        title: 'WebsetPausedEvent',
      }),
    z
      .object({
        id: z.string().openapi({ description: 'The unique identifier for the event' }),
        object: z.literal('event').default('event').openapi({ description: 'The type of object' }),
        data: WebsetItemSchema,
        createdAt: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'The date and time the event was created' }),
        type: z
          .literal('webset.item.created')
          .default('webset.item.created')
          .openapi({ description: 'The type of event' }),
      })
      .openapi({
        required: ['id', 'object', 'type', 'data', 'createdAt'],
        title: 'WebsetItemCreatedEvent',
      }),
    z
      .object({
        id: z.string().openapi({ description: 'The unique identifier for the event' }),
        object: z.literal('event').default('event').openapi({ description: 'The type of object' }),
        data: WebsetItemSchema,
        createdAt: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'The date and time the event was created' }),
        type: z
          .literal('webset.item.enriched')
          .default('webset.item.enriched')
          .openapi({ description: 'The type of event' }),
      })
      .openapi({
        required: ['id', 'object', 'type', 'data', 'createdAt'],
        title: 'WebsetItemEnrichedEvent',
      }),
    z
      .object({
        id: z.string().openapi({ description: 'The unique identifier for the event' }),
        object: z.literal('event').default('event').openapi({ description: 'The type of object' }),
        data: WebsetSearchSchema,
        createdAt: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'The date and time the event was created' }),
        type: z
          .literal('webset.search.created')
          .default('webset.search.created')
          .openapi({ description: 'The type of event' }),
      })
      .openapi({
        required: ['id', 'object', 'type', 'data', 'createdAt'],
        title: 'WebsetSearchCreatedEvent',
      }),
    z
      .object({
        id: z.string().openapi({ description: 'The unique identifier for the event' }),
        object: z.literal('event').default('event').openapi({ description: 'The type of object' }),
        data: WebsetSearchSchema,
        createdAt: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'The date and time the event was created' }),
        type: z
          .literal('webset.search.updated')
          .default('webset.search.updated')
          .openapi({ description: 'The type of event' }),
      })
      .openapi({
        required: ['id', 'object', 'type', 'data', 'createdAt'],
        title: 'WebsetSearchUpdatedEvent',
      }),
    z
      .object({
        id: z.string().openapi({ description: 'The unique identifier for the event' }),
        object: z.literal('event').default('event').openapi({ description: 'The type of object' }),
        data: WebsetSearchSchema,
        createdAt: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'The date and time the event was created' }),
        type: z
          .literal('webset.search.canceled')
          .default('webset.search.canceled')
          .openapi({ description: 'The type of event' }),
      })
      .openapi({
        required: ['id', 'object', 'type', 'data', 'createdAt'],
        title: 'WebsetSearchCanceledEvent',
      }),
    z
      .object({
        id: z.string().openapi({ description: 'The unique identifier for the event' }),
        object: z.literal('event').default('event').openapi({ description: 'The type of object' }),
        data: WebsetSearchSchema,
        createdAt: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'The date and time the event was created' }),
        type: z
          .literal('webset.search.completed')
          .default('webset.search.completed')
          .openapi({ description: 'The type of event' }),
      })
      .openapi({
        required: ['id', 'object', 'type', 'data', 'createdAt'],
        title: 'WebsetSearchCompletedEvent',
      }),
    z
      .object({
        id: z.string().openapi({ description: 'The unique identifier for the event' }),
        object: z.literal('event').default('event').openapi({ description: 'The type of object' }),
        data: ImportSchema,
        createdAt: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'The date and time the event was created' }),
        type: z
          .literal('import.created')
          .default('import.created')
          .openapi({ description: 'The type of event' }),
      })
      .openapi({
        required: ['id', 'object', 'type', 'data', 'createdAt'],
        title: 'ImportCreatedEvent',
      }),
    z
      .object({
        id: z.string().openapi({ description: 'The unique identifier for the event' }),
        object: z.literal('event').default('event').openapi({ description: 'The type of object' }),
        data: ImportSchema,
        createdAt: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'The date and time the event was created' }),
        type: z
          .literal('import.completed')
          .default('import.completed')
          .openapi({ description: 'The type of event' }),
      })
      .openapi({
        required: ['id', 'object', 'type', 'data', 'createdAt'],
        title: 'ImportCompletedEvent',
      }),
    z
      .object({
        id: z.string().openapi({ description: 'The unique identifier for the event' }),
        object: z.literal('event').default('event').openapi({ description: 'The type of object' }),
        data: MonitorSchema,
        createdAt: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'The date and time the event was created' }),
        type: z
          .literal('monitor.created')
          .default('monitor.created')
          .openapi({ description: 'The type of event' }),
      })
      .openapi({
        required: ['id', 'object', 'type', 'data', 'createdAt'],
        title: 'MonitorCreatedEvent',
      }),
    z
      .object({
        id: z.string().openapi({ description: 'The unique identifier for the event' }),
        object: z.literal('event').default('event').openapi({ description: 'The type of object' }),
        data: MonitorSchema,
        createdAt: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'The date and time the event was created' }),
        type: z
          .literal('monitor.updated')
          .default('monitor.updated')
          .openapi({ description: 'The type of event' }),
      })
      .openapi({
        required: ['id', 'object', 'type', 'data', 'createdAt'],
        title: 'MonitorUpdatedEvent',
      }),
    z
      .object({
        id: z.string().openapi({ description: 'The unique identifier for the event' }),
        object: z.literal('event').default('event').openapi({ description: 'The type of object' }),
        data: MonitorSchema,
        createdAt: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'The date and time the event was created' }),
        type: z
          .literal('monitor.deleted')
          .default('monitor.deleted')
          .openapi({ description: 'The type of event' }),
      })
      .openapi({
        required: ['id', 'object', 'type', 'data', 'createdAt'],
        title: 'MonitorDeletedEvent',
      }),
    z
      .object({
        id: z.string().openapi({ description: 'The unique identifier for the event' }),
        object: z.literal('event').default('event').openapi({ description: 'The type of object' }),
        data: MonitorRunSchema,
        createdAt: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'The date and time the event was created' }),
        type: z
          .literal('monitor.run.created')
          .default('monitor.run.created')
          .openapi({ description: 'The type of event' }),
      })
      .openapi({
        required: ['id', 'object', 'type', 'data', 'createdAt'],
        title: 'MonitorRunCreatedEvent',
      }),
    z
      .object({
        id: z.string().openapi({ description: 'The unique identifier for the event' }),
        object: z.literal('event').default('event').openapi({ description: 'The type of object' }),
        data: MonitorRunSchema,
        createdAt: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'The date and time the event was created' }),
        type: z
          .literal('monitor.run.completed')
          .default('monitor.run.completed')
          .openapi({ description: 'The type of event' }),
      })
      .openapi({
        required: ['id', 'object', 'type', 'data', 'createdAt'],
        title: 'MonitorRunCompletedEvent',
      }),
  ])
  .openapi({ title: 'Event', discriminator: { propertyName: 'type' } })
  .openapi('Event')

type ListEventsResponseType = {
  data: z.infer<typeof EventSchema>[]
  hasMore: boolean
  nextCursor: string | null
}

const ContentsOptionsSchema = z
  .object({
    text: z
      .union([
        z
          .xor([
            z
              .boolean()
              .default(false)
              .openapi({
                title: 'Simple text retrieval',
                description:
                  'If true, returns full page text with default settings. If false, disables text return.',
              }),
            z
              .object({
                maxCharacters: z
                  .union([
                    z
                      .int()
                      .min(1)
                      .max(1000000)
                      .openapi({
                        description:
                          'Maximum character limit for the full page text. Useful for controlling response size and API costs.',
                      }),
                    z.null().nullable(),
                  ])
                  .exactOptional(),
                includeHtmlTags: z
                  .union([
                    z
                      .boolean()
                      .default(false)
                      .openapi({
                        description:
                          'If true, include lightweight HTML tags in returned text instead of plain markdown-style text.',
                      }),
                    z.null().nullable(),
                  ])
                  .exactOptional(),
                verbosity: z
                  .union([
                    z
                      .enum(['compact', 'standard', 'full'])
                      .default('compact')
                      .openapi({
                        description:
                          'Controls text rendering verbosity. compact focuses on main content, standard includes more surrounding page context, and full requests the most complete rendered text. Some pages may produce identical standard and full output.',
                      }),
                    z.null().nullable(),
                  ])
                  .exactOptional(),
                includeSections: z
                  .union([
                    z
                      .array(
                        z.enum([
                          'header',
                          'navigation',
                          'banner',
                          'body',
                          'sidebar',
                          'footer',
                          'metadata',
                        ]),
                      )
                      .openapi({
                        description:
                          'Best-effort. Only include content classified into these semantic page sections. Section classification may be unavailable or incomplete for some pages; validate output if strict filtering is required.',
                      }),
                    z.null().nullable(),
                  ])
                  .exactOptional(),
                excludeSections: z
                  .union([
                    z
                      .array(
                        z.enum([
                          'header',
                          'navigation',
                          'banner',
                          'body',
                          'sidebar',
                          'footer',
                          'metadata',
                        ]),
                      )
                      .openapi({
                        description:
                          'Exclude content classified into these semantic page sections. Section classification is best-effort.',
                      }),
                    z.null().nullable(),
                  ])
                  .exactOptional(),
              })
              .openapi({
                title: 'Advanced text options',
                description:
                  'Advanced options for controlling text extraction. Use this when you need to limit text length or include HTML structure. Set `maxAgeHours: 0` to apply `includeHtmlTags`, `verbosity`, and section filters to freshly fetched content.',
                required: [],
              }),
          ])
          .openapi({ description: 'Text extraction options for each result.' }),
        z.null().nullable(),
      ])
      .exactOptional(),
    highlights: z
      .union([
        z
          .xor([
            z
              .boolean()
              .default(false)
              .openapi({
                title: 'Simple highlights retrieval',
                description:
                  'If true, returns highlights with default settings. If false, disables highlights.',
              }),
            z
              .object({
                query: z
                  .union([
                    z
                      .string()
                      .openapi({
                        description: 'Custom query that guides which highlights the LLM picks.',
                      }),
                    z.null().nullable(),
                  ])
                  .exactOptional(),
                verbosity: z
                  .union([
                    z
                      .enum(['low', 'medium', 'high'])
                      .openapi({
                        description:
                          'Preset highlight length: `low`, `medium`, and `high` allocate progressively larger token budgets for the returned highlights. With highlights.dynamic, the preset sets a single shared budget across the whole result set instead of a per-URL budget. Exact budgets are tuned by Exa and may change. Not compatible with maxCharacters or numSentences. Beta: requires the `Exa-Beta: dynamic-highlights-2026-08-28` request header; requests setting `verbosity` without it are rejected.',
                        'x-exa-lifecycle': 'beta',
                        'x-exa-beta-flag': 'dynamic-highlights-2026-08-28',
                        'x-mint': { post: ['Beta'] },
                      }),
                    z.null().nullable(),
                  ])
                  .exactOptional(),
                dynamic: z
                  .union([
                    z
                      .boolean()
                      .openapi({
                        description:
                          'Enable Dynamic Highlights (research preview): considers all results together and allocates a single shared context budget across the result set instead of a per-document budget. Not compatible with maxCharacters. Beta: requires the `Exa-Beta: dynamic-highlights-2026-08-28` request header; requests setting `dynamic` without it are rejected.',
                        'x-exa-lifecycle': 'beta',
                        'x-exa-beta-flag': 'dynamic-highlights-2026-08-28',
                        'x-mint': { post: ['Beta'] },
                      }),
                    z.null().nullable(),
                  ])
                  .exactOptional(),
                maxCharacters: z
                  .union([
                    z
                      .int()
                      .min(1)
                      .max(1000000)
                      .openapi({
                        description:
                          'Maximum number of characters to return for highlights. Controls the total length of highlight text returned per URL. Not compatible with highlights.dynamic.',
                      }),
                    z.null().nullable(),
                  ])
                  .exactOptional(),
                numSentences: z
                  .union([
                    z
                      .int()
                      .min(1)
                      .openapi({
                        description:
                          'Deprecated. Use `maxCharacters` instead. Currently mapped to a character budget of about 1333 characters per sentence. Pass highlights: true for default highlights, or { query } to guide selection with your own query.',
                        'x-exa-lifecycle': 'deprecated',
                        deprecated: true,
                        'x-exa-replacement': 'maxCharacters',
                      }),
                    z.null().nullable(),
                  ])
                  .exactOptional(),
                highlightsPerUrl: z
                  .union([
                    z
                      .int()
                      .min(1)
                      .openapi({
                        description:
                          'Deprecated. Currently ignored. Pass highlights: true for default highlights, or { query } to guide selection with your own query.',
                        'x-exa-lifecycle': 'deprecated',
                        deprecated: true,
                      }),
                    z.null().nullable(),
                  ])
                  .exactOptional(),
              })
              .openapi({
                title: 'Advanced highlights options',
                description:
                  'Advanced options for steering highlight extraction. Pass highlights: true for the highest-quality default; supply this object only when you need to guide selection with your own query.',
                required: [],
              }),
          ])
          .openapi({
            description: 'Text snippets the LLM identifies as most relevant from each page.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    summary: z
      .union([
        z
          .object({
            query: z
              .union([
                z.string().openapi({ description: 'Custom query for the LLM-generated summary.' }),
                z.null().nullable(),
              ])
              .exactOptional(),
            schema: z
              .union([
                z
                  .record(z.string(), JsonValueSchema)
                  .openapi({
                    description:
                      'JSON schema for structured output from summary. See https://json-schema.org/overview/what-is-jsonschema for JSON Schema documentation.',
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
          })
          .openapi({ description: 'Summary of the webpage.', required: [] }),
        z.null().nullable(),
      ])
      .exactOptional(),
    extras: z
      .union([
        z
          .object({
            links: z
              .union([
                z
                  .int()
                  .min(0)
                  .max(1000)
                  .default(0)
                  .openapi({ description: 'Number of URLs to return from each webpage.' }),
                z.null().nullable(),
              ])
              .exactOptional(),
            imageLinks: z
              .union([
                z
                  .int()
                  .min(0)
                  .max(1000)
                  .default(0)
                  .openapi({ description: 'Number of images to return for each result.' }),
                z.null().nullable(),
              ])
              .exactOptional(),
            richImageLinks: z
              .union([
                z
                  .int()
                  .min(0)
                  .max(1000)
                  .default(0)
                  .openapi({
                    description: 'Number of rich image links to return for each result.',
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
            richLinks: z
              .union([
                z
                  .int()
                  .min(0)
                  .max(1000)
                  .default(0)
                  .openapi({
                    description: 'Deprecated. Number of rich links to return for each result.',
                    'x-exa-lifecycle': 'deprecated',
                    deprecated: true,
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
            codeBlocks: z
              .union([
                z
                  .int()
                  .min(0)
                  .max(1000)
                  .default(0)
                  .openapi({
                    description: 'Deprecated. Number of code blocks to return for each result.',
                    'x-exa-lifecycle': 'deprecated',
                    deprecated: true,
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
          })
          .openapi({ description: 'Extra parameters to pass.', required: [] }),
        z.null().nullable(),
      ])
      .exactOptional(),
    livecrawlTimeout: z
      .union([
        z
          .int()
          .gt(0)
          .max(90000)
          .default(10000)
          .openapi({ description: 'The timeout for livecrawling in milliseconds.' }),
        z.null().nullable(),
      ])
      .exactOptional(),
    maxAgeHours: z
      .union([
        z
          .int()
          .min(-1)
          .max(720)
          .openapi({
            description:
              'Maximum age of cached content, in hours, up to 720. Cached content younger than this is used, and older pages are fetched fresh. `0` always fetches fresh content and `-1` always uses the cache. When omitted, cached content is used when available and pages without it are fetched live.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    snapshotAsOf: z
      .union([
        z
          .xor([
            z.iso.datetime({ offset: true }).openapi({ description: 'ISO 8601 date-time.' }),
            z.iso
              .date()
              .openapi({
                description: 'ISO 8601 date (`YYYY-MM-DD`), interpreted as midnight UTC.',
              }),
          ])
          .openapi({
            description:
              'Return the newest stored version of each page as of this instant. Accepts an ISO 8601 date-time (`2026-01-15T00:00:00Z`) or a date-only value (`2026-01-15`), which is interpreted as midnight UTC. Historical requests are served from stored versions only and never fetch the live page.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    context: z
      .union([
        z
          .xor([
            z
              .boolean()
              .openapi({
                description:
                  'Deprecated. Use `highlights` or `text` instead. Returns page contents as a combined context string.',
                'x-exa-lifecycle': 'deprecated',
                deprecated: true,
                'x-exa-replacement': ['highlights', 'text'],
              }),
            z
              .object({
                maxCharacters: z
                  .int()
                  .min(1)
                  .max(1000000)
                  .exactOptional()
                  .openapi({ description: 'Maximum character limit for the context string.' }),
              })
              .openapi({
                description:
                  'Deprecated. Use `highlights` or `text` instead. Returns page contents as a combined context string.',
                'x-exa-lifecycle': 'deprecated',
                deprecated: true,
                'x-exa-replacement': ['highlights', 'text'],
                required: [],
              }),
          ])
          .openapi({
            description:
              'Deprecated. Use `highlights` or `text` instead. Returns page contents as a combined context string.',
            'x-exa-lifecycle': 'deprecated',
            deprecated: true,
            'x-exa-replacement': ['highlights', 'text'],
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    livecrawl: z
      .union([
        z
          .enum(['never', 'always', 'fallback', 'preferred'])
          .openapi({
            description:
              'Deprecated. Use `maxAgeHours` instead. Does not guarantee freshly fetched content. Cannot be combined with `maxAgeHours`.',
            'x-exa-lifecycle': 'deprecated',
            deprecated: true,
            'x-exa-replacement': 'maxAgeHours',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    crawledBeforeDate: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Deprecated. Use `snapshotAsOf` instead. Alias of snapshotAsOf with identical behavior.',
        'x-exa-lifecycle': 'deprecated',
        deprecated: true,
        'x-exa-replacement': 'snapshotAsOf',
      }),
    subpages: z
      .union([
        z
          .int()
          .min(0)
          .max(100)
          .default(0)
          .openapi({
            description:
              'Deprecated. The number of subpages to crawl for each result. The actual number crawled may be limited by system constraints. To crawl subpages, send the result URLs to `/contents` with `subpages`.',
            'x-exa-lifecycle': 'deprecated',
            deprecated: true,
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    subpageTarget: z
      .union([
        z
          .xor([z.string().min(1).max(100), z.array(z.string().min(1).max(100)).min(0).max(100)])
          .openapi({
            description:
              'Deprecated. Term to find specific subpages of search results. Can be a single string or an array of strings. To target subpages, send the result URLs to `/contents` with `subpageTarget`.',
            'x-exa-lifecycle': 'deprecated',
            deprecated: true,
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContentsOptions')

const OutputSchemaTextSchema = z
  .object({ type: z.literal('text'), description: z.string().exactOptional() })
  .openapi({ required: ['type'] })
  .openapi('OutputSchemaText')

const OutputSchemaObjectSchema = z
  .object({
    type: z.literal('object'),
    description: z.string().exactOptional(),
    properties: z.record(z.string(), JsonValueSchema).exactOptional(),
    required: z.array(z.string()).exactOptional(),
    additionalProperties: z.boolean().exactOptional(),
  })
  .catchall(JsonValueSchema)
  .openapi({ required: ['type'] })
  .openapi('OutputSchemaObject')

const SearchRequestSchema = z
  .object({
    includeDomains: z
      .union([
        z
          .array(z.string())
          .max(1200)
          .openapi({
            description:
              'List of domains or domain paths to include in the search. Each entry can be a hostname (for example, `example.com`), a hostname with a path prefix (for example, `example.com/docs`), or a wildcard subdomain (for example, `*.example.com`). If specified, results will only come from the matching domains or paths. Use this parameter for domain or path filtering instead of adding a `site:` operator to the query.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    excludeDomains: z
      .union([
        z
          .array(z.string())
          .max(1200)
          .openapi({
            description:
              'List of domains or domain paths to exclude from search results. Each entry can be a hostname (for example, `example.com`), a hostname with a path prefix (for example, `example.com/docs`), or a wildcard subdomain (for example, `*.example.com`). If specified, no results will be returned from the matching domains or paths. Use this parameter for domain or path filtering instead of adding a `site:` operator to the query.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    startPublishedDate: z
      .union([
        z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Only links with a published date after this will be returned. Must be specified in ISO 8601 format.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    endPublishedDate: z
      .union([
        z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Only links with a published date before this will be returned. Must be specified in ISO 8601 format.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    numResults: z
      .union([
        z
          .int()
          .min(1)
          .max(100)
          .default(10)
          .openapi({
            description:
              'Number of results to return. Limits vary by search type. The maximum public limit is 100 results. Contact sales (hello@exa.ai) to discuss higher limits.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    moderation: z
      .union([
        z
          .boolean()
          .default(false)
          .openapi({
            description: 'Enable content moderation to filter unsafe content from search results.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    contents: z
      .union([
        ContentsOptionsSchema.openapi({
          description:
            'Content options for text, highlights, summary, extras, and freshness controls.',
        }),
        z.null().nullable(),
      ])
      .exactOptional(),
    query: z.string().min(1).openapi({ description: 'The query string for the search.' }),
    additionalQueries: z
      .union([
        z
          .array(z.string())
          .min(1)
          .max(10)
          .openapi({
            description:
              'Additional query variations for deep-search variants. Only works with a deep-search type. When provided, these queries are used alongside the main query for broader results.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    type: z
      .union([
        z
          .literal('auto')
          .openapi({
            description:
              'The default. A balanced mode that optimizes for both quality and speed and is recommended for most applications.',
            title: 'auto',
          }),
        z
          .literal('lite')
          .openapi({
            description:
              'Low-cost, low-latency search for real-time and interactive experiences such as chat, voice agents, and autocomplete. Accepts only `query` (a single string), `objective`, `userIdentifier`, `metadata`, `category`, `numResults`, `contents.highlights`, `contents.text`, `contents.snapshotAsOf`, `userLocation`, `includeDomains`, `excludeDomains`, `startPublishedDate`, `endPublishedDate`, `moderation`, and `compliance`; a request that sets any other parameter is rejected. Serves cached content only; it never fetches live, so the freshness options are rejected.',
            title: 'lite',
          }),
        z
          .literal('deep-lite')
          .openapi({
            description:
              'Performs lightweight research with synthesized results and a consistent 4-second latency, lower than full deep search.',
            title: 'deep-lite',
          }),
        z
          .literal('deep')
          .openapi({
            description: 'Conducts comprehensive multi-step research with synthesis.',
            title: 'deep',
          }),
        z
          .literal('instant')
          .openapi({
            description:
              'Legacy. Use `lite` instead. Runs a minimum-latency search that trades some search depth for speed. Unlike `lite`, it accepts every search parameter.',
            'x-exa-lifecycle': 'legacy',
            'x-exa-replacement': 'lite',
            'x-mint': { post: ['Legacy'] },
            title: 'instant',
          }),
        z
          .literal('fast')
          .openapi({
            description:
              'Legacy. Use `lite` instead. Runs a reduced-latency search for user-facing and interactive workflows. Unlike `lite`, it accepts every search parameter.',
            'x-exa-lifecycle': 'legacy',
            'x-exa-replacement': 'lite',
            'x-mint': { post: ['Legacy'] },
            title: 'fast',
          }),
        z
          .literal('deep-reasoning')
          .openapi({
            description:
              'Legacy. Use `deep` instead. Runs `deep` with stronger reasoning at each step, for complex analysis and decision-making tasks. For agentic, multi-step research, use the Agent API.',
            'x-exa-lifecycle': 'legacy',
            'x-exa-replacement': 'deep',
            'x-mint': { post: ['Legacy'] },
            title: 'deep-reasoning',
          }),
        z.string().openapi({ title: 'Other values' }),
        z.null().nullable(),
      ])
      .default('auto')
      .exactOptional()
      .openapi({
        description:
          'The search mode to use. Defaults to `auto`, a balanced mode recommended for most applications.\n\n- `auto`: The default. A balanced mode that optimizes for both quality and speed and is recommended for most applications.\n- `lite`: Low-cost, low-latency search for real-time and interactive experiences such as chat, voice agents, and autocomplete. Accepts only `query` (a single string), `objective`, `userIdentifier`, `metadata`, `category`, `numResults`, `contents.highlights`, `contents.text`, `contents.snapshotAsOf`, `userLocation`, `includeDomains`, `excludeDomains`, `startPublishedDate`, `endPublishedDate`, `moderation`, and `compliance`; a request that sets any other parameter is rejected. Serves cached content only; it never fetches live, so the freshness options are rejected.\n- `deep-lite`: Performs lightweight research with synthesized results and a consistent 4-second latency, lower than full deep search.\n- `deep`: Conducts comprehensive multi-step research with synthesis.\n- `instant`: Legacy. Use `lite` instead. Runs a minimum-latency search that trades some search depth for speed. Unlike `lite`, it accepts every search parameter.\n- `fast`: Legacy. Use `lite` instead. Runs a reduced-latency search for user-facing and interactive workflows. Unlike `lite`, it accepts every search parameter.\n- `deep-reasoning`: Legacy. Use `deep` instead. Runs `deep` with stronger reasoning at each step, for complex analysis and decision-making tasks. For agentic, multi-step research, use the Agent API.',
        'x-exa-enum-open': true,
      }),
    category: z
      .union([
        z
          .enum(['company', 'publication', 'news', 'personal site', 'financial report', 'people'])
          .openapi({
            description:
              'A data category to focus on. Other strings are accepted and used as category hints. `people` and `company` return higher-quality people profiles and company pages. `publication` returns scholarly publications such as research papers, preprints, and journal articles, with metadata like authors, venue, and citations. `company` and `people` do not support `startPublishedDate` or `endPublishedDate`, and `people` also does not support `excludeDomains`. Requests that set an unsupported filter return a 400 error.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    userLocation: z
      .union([
        z
          .xor([
            z
              .string()
              .openapi({
                description: 'The two-letter ISO 3166-1 country code of the user, e.g. `US`.',
              }),
            z
              .strictObject({
                country: z
                  .string()
                  .openapi({
                    description: 'The two-letter ISO 3166-1 country code of the user, e.g. `US`.',
                  }),
              })
              .openapi({
                required: ['country'],
                description: "The user's country only. Equivalent to the string form.",
              }),
            z
              .strictObject({
                country: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The two-letter ISO 3166-1 country code of the user, e.g. `US`.',
                  }),
                latitude: z
                  .number()
                  .min(-90)
                  .max(90)
                  .openapi({ description: "The user's latitude in decimal degrees." }),
                longitude: z
                  .number()
                  .min(-180)
                  .max(180)
                  .openapi({ description: "The user's longitude in decimal degrees." }),
              })
              .openapi({
                required: ['latitude', 'longitude'],
                description: "The user's coordinates, with an optional country.",
              }),
          ])
          .openapi({
            description:
              'The end user\'s location, as a two-letter ISO 3166-1 country code (e.g. `US`) or an object with `country`, a `latitude` and `longitude` pair, or both. The country localizes results. Coordinates are used only for queries that name no place but depend on where the user is, such as "coffee near me". They do not set a country, so send `country` with them to localize results. Send only the precision your use case needs.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    compliance: z
      .union([
        z
          .literal('hipaa')
          .openapi({
            description:
              'Enterprise-only compliance mode. Set to `hipaa` for HIPAA mode. Requires cache-only retrieval with supported parameters. See the HIPAA docs for details.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    outputSchema: z
      .union([
        z
          .xor([OutputSchemaTextSchema, OutputSchemaObjectSchema])
          .openapi({
            description:
              'JSON schema for synthesized output. Supported root types are "text" and "object". When provided, the response includes an output object whose content matches this schema. Works with every search type and adds about 2 seconds of synthesis latency on top of the selected search type. Object schemas are limited to 10 properties in total (nested and array items properties count toward the limit) and 2 levels of nesting, and every array must define items.',
            discriminator: {
              propertyName: 'type',
              mapping: {
                text: '#/components/schemas/OutputSchemaText',
                object: '#/components/schemas/OutputSchemaObject',
              },
            },
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    objective: z
      .union([z.string().max(4096), z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'The broader goal this search serves: the task the caller is working on, beyond the query itself. When exposing this field to an agent as a tool parameter, describe it as: "Goal for this search turn; say which documents should rank first, which should be excluded, and what specific facts or figures to pull from them."',
      }),
    userIdentifier: z
      .union([
        z
          .string()
          .regex(/^[A-Za-z0-9_-]+$/)
          .min(1)
          .max(64),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({
        description:
          'An opaque ID your platform assigns to the end user this request is made for, such as a UUID. Lets Exa attribute usage to that end user rather than your whole team. Must not contain personal information such as an email address, phone number, username, or name. Hash such values before sending them. 1 to 64 characters: letters, digits, underscores, and hyphens. Retained even when your team has Zero Data Retention enabled. Does not affect results.',
        example: '7f3a9c52-1d4e-4b8a-9e60-2c5d8a1f0b37',
      }),
    systemPrompt: z
      .union([
        z
          .string()
          .openapi({
            description:
              'Additional instructions that guide generated output or agent behavior. Use this for source preferences, novelty constraints, duplication constraints, or other behavior guidance.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    stream: z
      .union([
        z
          .boolean()
          .default(false)
          .openapi({
            description:
              'Requests server-sent events for synthesized output streaming. Streaming is currently used only when outputSchema is provided; otherwise the endpoint returns the normal JSON search response.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    startCrawlDate: z
      .union([
        z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              "Deprecated. Ignored by the API. Setting it adds an `IGNORED_FIELD` warning to the response's `warnings`.",
            'x-exa-lifecycle': 'deprecated',
            deprecated: true,
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    endCrawlDate: z
      .union([
        z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              "Deprecated. Ignored by the API. Setting it adds an `IGNORED_FIELD` warning to the response's `warnings`.",
            'x-exa-lifecycle': 'deprecated',
            deprecated: true,
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    includeText: z
      .union([z.array(z.string().max(4096)).max(50), z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Deprecated. List of strings that must be present in the webpage text of results. Matching is approximate (word-level rather than exact phrase), so a multi-word entry can match pages where its words appear separately. Up to 50 strings, each up to 4096 characters.',
        'x-exa-lifecycle': 'deprecated',
        deprecated: true,
      }),
    excludeText: z
      .union([z.array(z.string().max(4096)).max(50), z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Deprecated. List of strings that must not be present in the webpage text of results. Matching is approximate (word-level rather than exact phrase). Up to 50 strings, each up to 4096 characters.',
        'x-exa-lifecycle': 'deprecated',
        deprecated: true,
      }),
    context: z
      .union([
        z
          .xor([
            z
              .boolean()
              .openapi({
                description:
                  'Deprecated. Use `highlights` or `text` instead. Returns page contents as a combined context string.',
                'x-exa-lifecycle': 'deprecated',
                deprecated: true,
                'x-exa-replacement': ['highlights', 'text'],
              }),
            z
              .object({
                maxCharacters: z
                  .int()
                  .min(1)
                  .max(1000000)
                  .exactOptional()
                  .openapi({ description: 'Maximum character limit for the context string.' }),
              })
              .openapi({
                description:
                  'Deprecated. Use `highlights` or `text` instead. Returns page contents as a combined context string.',
                'x-exa-lifecycle': 'deprecated',
                deprecated: true,
                'x-exa-replacement': ['highlights', 'text'],
                required: [],
              }),
          ])
          .openapi({
            description:
              'Deprecated. Use `highlights` or `text` instead. Returns page contents as a combined context string.',
            'x-exa-lifecycle': 'deprecated',
            deprecated: true,
            'x-exa-replacement': ['highlights', 'text'],
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
  })
  .openapi({ required: ['query'] })
  .openapi('SearchRequest')

const ContentsRequestSchema = z
  .xor([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'ids')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['ids'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'urls')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['urls'] }),
  ])
  .and(
    z
      .object({
        ids: z
          .array(z.string().min(1).max(2048))
          .min(1)
          .max(100)
          .exactOptional()
          .openapi({ description: 'Document IDs obtained from searches.' }),
        urls: z
          .array(z.string().min(1).max(2048))
          .min(1)
          .max(100)
          .exactOptional()
          .openapi({
            description: 'URLs to crawl (backwards compatible with the `ids` parameter).',
          }),
        compliance: z
          .union([
            z
              .literal('hipaa')
              .openapi({
                description:
                  'Enterprise-only compliance mode. Set to `hipaa` for HIPAA mode. Requires cache-only retrieval with supported parameters. See the HIPAA docs for details.',
              }),
            z.null().nullable(),
          ])
          .exactOptional(),
        userIdentifier: z
          .union([
            z
              .string()
              .regex(/^[A-Za-z0-9_-]+$/)
              .min(1)
              .max(64),
            z.null().nullable(),
          ])
          .exactOptional()
          .openapi({
            description:
              'An opaque ID your platform assigns to the end user this request is made for, such as a UUID. Lets Exa attribute usage to that end user rather than your whole team. Must not contain personal information such as an email address, phone number, username, or name. Hash such values before sending them. 1 to 64 characters: letters, digits, underscores, and hyphens. Retained even when your team has Zero Data Retention enabled. Does not affect results.',
            example: '7f3a9c52-1d4e-4b8a-9e60-2c5d8a1f0b37',
          }),
        text: z
          .union([
            z
              .xor([
                z
                  .boolean()
                  .default(false)
                  .openapi({
                    title: 'Simple text retrieval',
                    description:
                      'If true, returns full page text with default settings. If false, disables text return.',
                  }),
                z
                  .object({
                    maxCharacters: z
                      .union([
                        z
                          .int()
                          .min(1)
                          .max(1000000)
                          .openapi({
                            description:
                              'Maximum character limit for the full page text. Useful for controlling response size and API costs.',
                          }),
                        z.null().nullable(),
                      ])
                      .exactOptional(),
                    includeHtmlTags: z
                      .union([
                        z
                          .boolean()
                          .default(false)
                          .openapi({
                            description:
                              'If true, include lightweight HTML tags in returned text instead of plain markdown-style text.',
                          }),
                        z.null().nullable(),
                      ])
                      .exactOptional(),
                    verbosity: z
                      .union([
                        z
                          .enum(['compact', 'standard', 'full'])
                          .default('compact')
                          .openapi({
                            description:
                              'Controls text rendering verbosity. compact focuses on main content, standard includes more surrounding page context, and full requests the most complete rendered text. Some pages may produce identical standard and full output.',
                          }),
                        z.null().nullable(),
                      ])
                      .exactOptional(),
                    includeSections: z
                      .union([
                        z
                          .array(
                            z.enum([
                              'header',
                              'navigation',
                              'banner',
                              'body',
                              'sidebar',
                              'footer',
                              'metadata',
                            ]),
                          )
                          .openapi({
                            description:
                              'Best-effort. Only include content classified into these semantic page sections. Section classification may be unavailable or incomplete for some pages; validate output if strict filtering is required.',
                          }),
                        z.null().nullable(),
                      ])
                      .exactOptional(),
                    excludeSections: z
                      .union([
                        z
                          .array(
                            z.enum([
                              'header',
                              'navigation',
                              'banner',
                              'body',
                              'sidebar',
                              'footer',
                              'metadata',
                            ]),
                          )
                          .openapi({
                            description:
                              'Exclude content classified into these semantic page sections. Section classification is best-effort.',
                          }),
                        z.null().nullable(),
                      ])
                      .exactOptional(),
                  })
                  .openapi({
                    title: 'Advanced text options',
                    description:
                      'Advanced options for controlling text extraction. Use this when you need to limit text length or include HTML structure. Set `maxAgeHours: 0` to apply `includeHtmlTags`, `verbosity`, and section filters to freshly fetched content.',
                    required: [],
                  }),
              ])
              .openapi({ description: 'Text extraction options for each result.' }),
            z.null().nullable(),
          ])
          .exactOptional(),
        highlights: z
          .union([
            z
              .xor([
                z
                  .boolean()
                  .default(false)
                  .openapi({
                    title: 'Simple highlights retrieval',
                    description:
                      'If true, returns highlights with default settings. If false, disables highlights.',
                  }),
                z
                  .object({
                    query: z
                      .union([
                        z
                          .string()
                          .openapi({
                            description: 'Custom query that guides which highlights the LLM picks.',
                          }),
                        z.null().nullable(),
                      ])
                      .exactOptional(),
                    verbosity: z
                      .union([
                        z
                          .enum(['low', 'medium', 'high'])
                          .openapi({
                            description:
                              'Preset highlight length: `low`, `medium`, and `high` allocate progressively larger token budgets for the returned highlights. With highlights.dynamic, the preset sets a single shared budget across the whole result set instead of a per-URL budget. Exact budgets are tuned by Exa and may change. Not compatible with maxCharacters or numSentences. Beta: requires the `Exa-Beta: dynamic-highlights-2026-08-28` request header; requests setting `verbosity` without it are rejected.',
                            'x-exa-lifecycle': 'beta',
                            'x-exa-beta-flag': 'dynamic-highlights-2026-08-28',
                            'x-mint': { post: ['Beta'] },
                          }),
                        z.null().nullable(),
                      ])
                      .exactOptional(),
                    dynamic: z
                      .union([
                        z
                          .boolean()
                          .openapi({
                            description:
                              'Enable Dynamic Highlights (research preview): considers all results together and allocates a single shared context budget across the result set instead of a per-document budget. Not compatible with maxCharacters. Beta: requires the `Exa-Beta: dynamic-highlights-2026-08-28` request header; requests setting `dynamic` without it are rejected.',
                            'x-exa-lifecycle': 'beta',
                            'x-exa-beta-flag': 'dynamic-highlights-2026-08-28',
                            'x-mint': { post: ['Beta'] },
                          }),
                        z.null().nullable(),
                      ])
                      .exactOptional(),
                    maxCharacters: z
                      .union([
                        z
                          .int()
                          .min(1)
                          .max(1000000)
                          .openapi({
                            description:
                              'Maximum number of characters to return for highlights. Controls the total length of highlight text returned per URL. Not compatible with highlights.dynamic.',
                          }),
                        z.null().nullable(),
                      ])
                      .exactOptional(),
                    numSentences: z
                      .union([
                        z
                          .int()
                          .min(1)
                          .openapi({
                            description:
                              'Deprecated. Use `maxCharacters` instead. Currently mapped to a character budget of about 1333 characters per sentence. Pass highlights: true for default highlights, or { query } to guide selection with your own query.',
                            'x-exa-lifecycle': 'deprecated',
                            deprecated: true,
                            'x-exa-replacement': 'maxCharacters',
                          }),
                        z.null().nullable(),
                      ])
                      .exactOptional(),
                    highlightsPerUrl: z
                      .union([
                        z
                          .int()
                          .min(1)
                          .openapi({
                            description:
                              'Deprecated. Currently ignored. Pass highlights: true for default highlights, or { query } to guide selection with your own query.',
                            'x-exa-lifecycle': 'deprecated',
                            deprecated: true,
                          }),
                        z.null().nullable(),
                      ])
                      .exactOptional(),
                  })
                  .openapi({
                    title: 'Advanced highlights options',
                    description:
                      'Advanced options for steering highlight extraction. Pass highlights: true for the highest-quality default; supply this object only when you need to guide selection with your own query.',
                    required: [],
                  }),
              ])
              .openapi({
                description: 'Text snippets the LLM identifies as most relevant from each page.',
              }),
            z.null().nullable(),
          ])
          .exactOptional(),
        summary: z
          .union([
            z
              .object({
                query: z
                  .union([
                    z
                      .string()
                      .openapi({ description: 'Custom query for the LLM-generated summary.' }),
                    z.null().nullable(),
                  ])
                  .exactOptional(),
                schema: z
                  .union([
                    z
                      .record(z.string(), JsonValueSchema)
                      .openapi({
                        description:
                          'JSON schema for structured output from summary. See https://json-schema.org/overview/what-is-jsonschema for JSON Schema documentation.',
                      }),
                    z.null().nullable(),
                  ])
                  .exactOptional(),
              })
              .openapi({ description: 'Summary of the webpage.', required: [] }),
            z.null().nullable(),
          ])
          .exactOptional(),
        extras: z
          .union([
            z
              .object({
                links: z
                  .union([
                    z
                      .int()
                      .min(0)
                      .max(1000)
                      .default(0)
                      .openapi({ description: 'Number of URLs to return from each webpage.' }),
                    z.null().nullable(),
                  ])
                  .exactOptional(),
                imageLinks: z
                  .union([
                    z
                      .int()
                      .min(0)
                      .max(1000)
                      .default(0)
                      .openapi({ description: 'Number of images to return for each result.' }),
                    z.null().nullable(),
                  ])
                  .exactOptional(),
                richImageLinks: z
                  .union([
                    z
                      .int()
                      .min(0)
                      .max(1000)
                      .default(0)
                      .openapi({
                        description: 'Number of rich image links to return for each result.',
                      }),
                    z.null().nullable(),
                  ])
                  .exactOptional(),
                richLinks: z
                  .union([
                    z
                      .int()
                      .min(0)
                      .max(1000)
                      .default(0)
                      .openapi({ description: 'Number of rich links to return for each result.' }),
                    z.null().nullable(),
                  ])
                  .exactOptional(),
                codeBlocks: z
                  .union([
                    z
                      .int()
                      .min(0)
                      .max(1000)
                      .default(0)
                      .openapi({ description: 'Number of code blocks to return for each result.' }),
                    z.null().nullable(),
                  ])
                  .exactOptional(),
              })
              .openapi({ description: 'Extra parameters to pass.', required: [] }),
            z.null().nullable(),
          ])
          .exactOptional(),
        livecrawlTimeout: z
          .union([
            z
              .int()
              .gt(0)
              .max(90000)
              .default(10000)
              .openapi({ description: 'The timeout for livecrawling in milliseconds.' }),
            z.null().nullable(),
          ])
          .exactOptional(),
        maxAgeHours: z
          .union([
            z
              .int()
              .min(-1)
              .max(720)
              .openapi({
                description:
                  'Maximum age of cached content, in hours, up to 720. Cached content younger than this is used, and older pages are fetched fresh. `0` always fetches fresh content and `-1` always uses the cache. When omitted, cached content is used when available and pages without it are fetched live.',
              }),
            z.null().nullable(),
          ])
          .exactOptional(),
        snapshotAsOf: z
          .union([
            z
              .xor([
                z.iso.datetime({ offset: true }).openapi({ description: 'ISO 8601 date-time.' }),
                z.iso
                  .date()
                  .openapi({
                    description: 'ISO 8601 date (`YYYY-MM-DD`), interpreted as midnight UTC.',
                  }),
              ])
              .openapi({
                description:
                  'Return the newest stored version of each page as of this instant. Accepts an ISO 8601 date-time (`2026-01-15T00:00:00Z`) or a date-only value (`2026-01-15`), which is interpreted as midnight UTC. Historical requests are served from stored versions only and never fetch the live page.',
              }),
            z.null().nullable(),
          ])
          .exactOptional(),
        subpages: z
          .union([
            z
              .int()
              .min(0)
              .max(100)
              .default(0)
              .openapi({
                description:
                  'The number of subpages to crawl. The actual number crawled may be limited by system constraints.',
              }),
            z.null().nullable(),
          ])
          .exactOptional(),
        subpageTarget: z
          .union([
            z
              .xor([
                z.string().min(1).max(100),
                z.array(z.string().min(1).max(100)).min(0).max(100),
              ])
              .openapi({
                description:
                  'Term to find specific subpages of search results. Can be a single string or an array of strings.',
              }),
            z.null().nullable(),
          ])
          .exactOptional(),
        context: z
          .union([
            z
              .xor([
                z
                  .boolean()
                  .openapi({
                    description:
                      'Deprecated. Use `highlights` or `text` instead. Returns page contents as a combined context string.',
                    'x-exa-lifecycle': 'deprecated',
                    deprecated: true,
                    'x-exa-replacement': ['highlights', 'text'],
                  }),
                z
                  .object({
                    maxCharacters: z
                      .int()
                      .min(1)
                      .max(1000000)
                      .exactOptional()
                      .openapi({ description: 'Maximum character limit for the context string.' }),
                  })
                  .openapi({
                    description:
                      'Deprecated. Use `highlights` or `text` instead. Returns page contents as a combined context string.',
                    'x-exa-lifecycle': 'deprecated',
                    deprecated: true,
                    'x-exa-replacement': ['highlights', 'text'],
                    required: [],
                  }),
              ])
              .openapi({
                description:
                  'Deprecated. Use `highlights` or `text` instead. Returns page contents as a combined context string.',
                'x-exa-lifecycle': 'deprecated',
                deprecated: true,
                'x-exa-replacement': ['highlights', 'text'],
              }),
            z.null().nullable(),
          ])
          .exactOptional(),
        livecrawl: z
          .union([
            z
              .enum(['never', 'always', 'fallback', 'preferred'])
              .openapi({
                description:
                  'Deprecated. Use `maxAgeHours` instead. Does not guarantee freshly fetched content. Cannot be combined with `maxAgeHours`.',
                'x-exa-lifecycle': 'deprecated',
                deprecated: true,
                'x-exa-replacement': 'maxAgeHours',
              }),
            z.null().nullable(),
          ])
          .exactOptional(),
        crawledBeforeDate: z
          .union([z.string(), z.null().nullable()])
          .exactOptional()
          .openapi({
            description:
              'Deprecated. Use `snapshotAsOf` instead. Alias of snapshotAsOf with identical behavior.',
            'x-exa-lifecycle': 'deprecated',
            deprecated: true,
            'x-exa-replacement': 'snapshotAsOf',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi({ description: 'Provide either `ids` or `urls`, but not both.' })
  .openapi('ContentsRequest')

const AnswerRequestSchema = z
  .object({
    query: z
      .string()
      .min(1)
      .openapi({ description: 'Natural-language question or instructions for the request.' }),
    stream: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'If true, the response is returned as a server-sent events (SSE) stream.',
      }),
    text: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        title: 'Simple text retrieval',
        description:
          'If true, returns full page text with default settings. If false, disables text return.',
      }),
    model: z
      .enum(['exa', 'exa-pro', 'exa-research', 'exa-fast'])
      .default('exa')
      .exactOptional()
      .openapi({ description: 'The model used to generate the answer.' }),
    systemPrompt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional instructions that guide generated output or agent behavior. Use this for source preferences, novelty constraints, duplication constraints, or other behavior guidance.',
      }),
    userLocation: z
      .union([
        z
          .xor([
            z
              .string()
              .openapi({
                description: 'The two-letter ISO 3166-1 country code of the user, e.g. `US`.',
              }),
            z
              .strictObject({
                country: z
                  .string()
                  .openapi({
                    description: 'The two-letter ISO 3166-1 country code of the user, e.g. `US`.',
                  }),
              })
              .openapi({
                required: ['country'],
                description: "The user's country only. Equivalent to the string form.",
              }),
            z
              .strictObject({
                country: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The two-letter ISO 3166-1 country code of the user, e.g. `US`.',
                  }),
                latitude: z
                  .number()
                  .min(-90)
                  .max(90)
                  .openapi({ description: "The user's latitude in decimal degrees." }),
                longitude: z
                  .number()
                  .min(-180)
                  .max(180)
                  .openapi({ description: "The user's longitude in decimal degrees." }),
              })
              .openapi({
                required: ['latitude', 'longitude'],
                description: "The user's coordinates, with an optional country.",
              }),
          ])
          .openapi({
            description:
              'The end user\'s location, as a two-letter ISO 3166-1 country code (e.g. `US`) or an object with `country`, a `latitude` and `longitude` pair, or both. The country localizes results. Coordinates are used only for queries that name no place but depend on where the user is, such as "coffee near me". They do not set a country, so send `country` with them to localize results. Send only the precision your use case needs.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    outputSchema: z
      .object({
        type: z
          .string()
          .exactOptional()
          .openapi({ description: 'The root schema type (typically "object").' }),
        properties: z
          .record(z.string(), JsonValueSchema)
          .exactOptional()
          .openapi({
            description:
              'An object where each key is a property name and each value is a JSON Schema describing that property (with `type`, `description`, etc).',
          }),
        required: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'List of required property names.' }),
        description: z
          .string()
          .exactOptional()
          .openapi({ description: 'A description of the schema.' }),
        additionalProperties: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({ description: 'Whether to allow properties not listed in `properties`.' }),
      })
      .catchall(JsonValueSchema)
      .exactOptional()
      .openapi({
        description:
          'A [JSON Schema Draft 7](https://json-schema.org/draft-07) specification for the desired answer structure. When provided, the answer is returned as a structured object matching the schema instead of a plain string.',
        required: [],
      }),
    userIdentifier: z
      .union([
        z
          .string()
          .regex(/^[A-Za-z0-9_-]+$/)
          .min(1)
          .max(64),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({
        description:
          'An opaque ID your platform assigns to the end user this request is made for, such as a UUID. Lets Exa attribute usage to that end user rather than your whole team. Must not contain personal information such as an email address, phone number, username, or name. Hash such values before sending them. 1 to 64 characters: letters, digits, underscores, and hyphens. Retained even when your team has Zero Data Retention enabled. Does not affect results.',
        example: '7f3a9c52-1d4e-4b8a-9e60-2c5d8a1f0b37',
      }),
  })
  .openapi({ required: ['query'] })
  .openapi('AnswerRequest')

const FindSimilarRequestSchema = z
  .object({
    includeDomains: z
      .union([
        z
          .array(z.string())
          .max(1200)
          .openapi({
            description:
              'List of domains or domain paths to include in the search. Each entry can be a hostname (for example, `example.com`), a hostname with a path prefix (for example, `example.com/docs`), or a wildcard subdomain (for example, `*.example.com`). If specified, results will only come from the matching domains or paths. Use this parameter for domain or path filtering instead of adding a `site:` operator to the query.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    excludeDomains: z
      .union([
        z
          .array(z.string())
          .max(1200)
          .openapi({
            description:
              'List of domains or domain paths to exclude from search results. Each entry can be a hostname (for example, `example.com`), a hostname with a path prefix (for example, `example.com/docs`), or a wildcard subdomain (for example, `*.example.com`). If specified, no results will be returned from the matching domains or paths. Use this parameter for domain or path filtering instead of adding a `site:` operator to the query.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    startPublishedDate: z
      .union([
        z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Only links with a published date after this will be returned. Must be specified in ISO 8601 format.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    endPublishedDate: z
      .union([
        z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Only links with a published date before this will be returned. Must be specified in ISO 8601 format.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    numResults: z
      .union([
        z
          .int()
          .min(1)
          .max(100)
          .default(10)
          .openapi({
            description:
              'Number of results to return. Limits vary by search type. The maximum public limit is 100 results. Contact sales (hello@exa.ai) to discuss higher limits.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    contents: z
      .union([
        ContentsOptionsSchema.openapi({
          description:
            'Content options for text, highlights, summary, extras, and freshness controls.',
        }),
        z.null().nullable(),
      ])
      .exactOptional(),
    url: z
      .string()
      .min(3)
      .openapi({ description: 'The url for which you would like to find similar links.' }),
    category: z
      .union([
        z
          .enum(['company', 'publication', 'news', 'personal site', 'financial report', 'people'])
          .openapi({
            description:
              'A data category to focus on. Other strings are accepted and used as category hints. `people` and `company` return higher-quality people profiles and company pages. `publication` returns scholarly publications such as research papers, preprints, and journal articles, with metadata like authors, venue, and citations. With `company` or `people`, domain, URL, published-date, and text filters are ignored.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    excludeSourceDomain: z
      .union([
        z
          .boolean()
          .openapi({
            description: 'If true, results from the same domain as the source url are excluded.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    startCrawlDate: z
      .union([
        z.iso
          .datetime({ offset: true })
          .openapi({
            description: 'Deprecated. Ignored by the API.',
            'x-exa-lifecycle': 'deprecated',
            deprecated: true,
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    endCrawlDate: z
      .union([
        z.iso
          .datetime({ offset: true })
          .openapi({
            description: 'Deprecated. Ignored by the API.',
            'x-exa-lifecycle': 'deprecated',
            deprecated: true,
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    includeText: z
      .union([z.array(z.string().max(4096)).max(50), z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Deprecated. List of strings that must be present in the webpage text of results. Matching is approximate (word-level rather than exact phrase), so a multi-word entry can match pages where its words appear separately. Up to 50 strings, each up to 4096 characters. Ignored for the `company` and `people` categories.',
        'x-exa-lifecycle': 'deprecated',
        deprecated: true,
      }),
    excludeText: z
      .union([z.array(z.string().max(4096)).max(50), z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Deprecated. List of strings that must not be present in the webpage text of results. Matching is approximate (word-level rather than exact phrase). Up to 50 strings, each up to 4096 characters. Ignored for the `company` and `people` categories.',
        'x-exa-lifecycle': 'deprecated',
        deprecated: true,
      }),
  })
  .openapi({ required: ['url'] })
  .openapi('FindSimilarRequest')

const SummaryWithMaxTokensOptionsSchema = z
  .object({
    query: z
      .union([
        z.string().openapi({ description: 'Custom query for the LLM-generated summary.' }),
        z.null().nullable(),
      ])
      .exactOptional(),
    maxTokens: z
      .int()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'Deprecated. Maximum tokens for the generated summary.',
        'x-exa-lifecycle': 'deprecated',
        deprecated: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('SummaryWithMaxTokensOptions')

const SearchMonitorContentsSchema = z
  .object({
    text: z
      .xor([
        z
          .boolean()
          .default(false)
          .openapi({
            title: 'Simple text retrieval',
            description:
              'If true, returns full page text with default settings. If false, disables text return.',
          }),
        z
          .object({
            maxCharacters: z
              .union([
                z
                  .int()
                  .min(1)
                  .max(1000000)
                  .openapi({
                    description:
                      'Maximum character limit for the full page text. Useful for controlling response size and API costs.',
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
            includeHtmlTags: z
              .union([
                z
                  .boolean()
                  .default(false)
                  .openapi({
                    description:
                      'If true, include lightweight HTML tags in returned text instead of plain markdown-style text.',
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
            verbosity: z
              .union([
                z
                  .enum(['compact', 'standard', 'full'])
                  .default('compact')
                  .openapi({
                    description:
                      'Controls text rendering verbosity. compact focuses on main content, standard includes more surrounding page context, and full requests the most complete rendered text. Some pages may produce identical standard and full output.',
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
            includeSections: z
              .union([
                z
                  .array(
                    z.enum([
                      'header',
                      'navigation',
                      'banner',
                      'body',
                      'sidebar',
                      'footer',
                      'metadata',
                    ]),
                  )
                  .openapi({
                    description:
                      'Best-effort. Only include content classified into these semantic page sections. Section classification may be unavailable or incomplete for some pages; validate output if strict filtering is required.',
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
            excludeSections: z
              .union([
                z
                  .array(
                    z.enum([
                      'header',
                      'navigation',
                      'banner',
                      'body',
                      'sidebar',
                      'footer',
                      'metadata',
                    ]),
                  )
                  .openapi({
                    description:
                      'Exclude content classified into these semantic page sections. Section classification is best-effort.',
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
          })
          .openapi({
            title: 'Advanced text options',
            description:
              'Advanced options for controlling text extraction. Use this when you need to limit text length or include HTML structure. Set `maxAgeHours: 0` to apply `includeHtmlTags`, `verbosity`, and section filters to freshly fetched content.',
            required: [],
          }),
      ])
      .exactOptional()
      .openapi({ description: 'Text extraction options for each result.' }),
    highlights: z
      .xor([
        z
          .boolean()
          .default(false)
          .openapi({
            title: 'Simple highlights retrieval',
            description:
              'If true, returns highlights with default settings. If false, disables highlights.',
          }),
        z
          .object({
            query: z
              .union([
                z
                  .string()
                  .openapi({
                    description: 'Custom query that guides which highlights the LLM picks.',
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
            verbosity: z
              .union([
                z
                  .enum(['low', 'medium', 'high'])
                  .openapi({
                    description:
                      'Preset highlight length: `low`, `medium`, and `high` allocate progressively larger token budgets for the returned highlights. With highlights.dynamic, the preset sets a single shared budget across the whole result set instead of a per-URL budget. Exact budgets are tuned by Exa and may change. Not compatible with maxCharacters or numSentences. Beta: requires the `Exa-Beta: dynamic-highlights-2026-08-28` request header; requests setting `verbosity` without it are rejected.',
                    'x-exa-lifecycle': 'beta',
                    'x-exa-beta-flag': 'dynamic-highlights-2026-08-28',
                    'x-mint': { post: ['Beta'] },
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
            dynamic: z
              .union([
                z
                  .boolean()
                  .openapi({
                    description:
                      'Enable Dynamic Highlights (research preview): considers all results together and allocates a single shared context budget across the result set instead of a per-document budget. Not compatible with maxCharacters. Beta: requires the `Exa-Beta: dynamic-highlights-2026-08-28` request header; requests setting `dynamic` without it are rejected.',
                    'x-exa-lifecycle': 'beta',
                    'x-exa-beta-flag': 'dynamic-highlights-2026-08-28',
                    'x-mint': { post: ['Beta'] },
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
            maxCharacters: z
              .union([
                z
                  .int()
                  .min(1)
                  .max(1000000)
                  .openapi({
                    description:
                      'Maximum number of characters to return for highlights. Controls the total length of highlight text returned per URL. Not compatible with highlights.dynamic.',
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
            numSentences: z
              .union([
                z
                  .int()
                  .min(1)
                  .openapi({
                    description:
                      'Deprecated. Use `maxCharacters` instead. Currently mapped to a character budget of about 1333 characters per sentence. Pass highlights: true for default highlights, or { query } to guide selection with your own query.',
                    'x-exa-lifecycle': 'deprecated',
                    deprecated: true,
                    'x-exa-replacement': 'maxCharacters',
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
            highlightsPerUrl: z
              .union([
                z
                  .int()
                  .min(1)
                  .openapi({
                    description:
                      'Deprecated. Currently ignored. Pass highlights: true for default highlights, or { query } to guide selection with your own query.',
                    'x-exa-lifecycle': 'deprecated',
                    deprecated: true,
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
          })
          .openapi({
            title: 'Advanced highlights options',
            description:
              'Advanced options for steering highlight extraction. Pass highlights: true for the highest-quality default; supply this object only when you need to guide selection with your own query.',
            required: [],
          }),
      ])
      .exactOptional()
      .openapi({
        description: 'Text snippets the LLM identifies as most relevant from each page.',
      }),
    summary: z
      .xor([z.boolean(), SummaryWithMaxTokensOptionsSchema])
      .exactOptional()
      .openapi({
        description:
          'Return an LLM-generated summary. Pass `true` for defaults, or an object with `query`.',
      }),
    extras: z
      .object({
        links: z
          .union([
            z
              .int()
              .min(0)
              .max(1000)
              .default(0)
              .openapi({ description: 'Number of URLs to return from each webpage.' }),
            z.null().nullable(),
          ])
          .exactOptional(),
        imageLinks: z
          .union([
            z
              .int()
              .min(0)
              .max(1000)
              .default(0)
              .openapi({ description: 'Number of images to return for each result.' }),
            z.null().nullable(),
          ])
          .exactOptional(),
        richImageLinks: z
          .union([
            z
              .int()
              .min(0)
              .max(1000)
              .default(0)
              .openapi({ description: 'Number of rich image links to return for each result.' }),
            z.null().nullable(),
          ])
          .exactOptional(),
        richLinks: z
          .union([
            z
              .int()
              .min(0)
              .max(1000)
              .default(0)
              .openapi({
                description: 'Deprecated. Number of rich links to return for each result.',
                'x-exa-lifecycle': 'deprecated',
                deprecated: true,
              }),
            z.null().nullable(),
          ])
          .exactOptional(),
        codeBlocks: z
          .union([
            z
              .int()
              .min(0)
              .max(1000)
              .default(0)
              .openapi({
                description: 'Deprecated. Number of code blocks to return for each result.',
                'x-exa-lifecycle': 'deprecated',
                deprecated: true,
              }),
            z.null().nullable(),
          ])
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'Extra parameters to pass.', required: [] }),
    livecrawl: z
      .xor([z.enum(['never', 'always', 'fallback', 'preferred']), z.literal('auto')])
      .exactOptional()
      .openapi({ description: 'Crawl strategy for fetching page content' }),
    livecrawlTimeout: z
      .int()
      .gt(0)
      .max(90000)
      .default(10000)
      .exactOptional()
      .openapi({ description: 'The timeout for livecrawling in milliseconds.' }),
    maxAgeHours: z
      .int()
      .min(-1)
      .max(720)
      .exactOptional()
      .openapi({
        description:
          'Maximum age of cached content, in hours, up to 720. Cached content younger than this is used, and older pages are fetched fresh. `0` always fetches fresh content and `-1` always uses the cache. When omitted, cached content is used when available and pages without it are fetched live.',
      }),
    filterEmptyResults: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Filter out results with no content' }),
    subpages: z
      .int()
      .min(0)
      .max(100)
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The number of subpages to crawl. The actual number crawled may be limited by system constraints.',
      }),
    subpageTarget: z
      .xor([z.string().min(1).max(100), z.array(z.string().min(1).max(100)).min(0).max(100)])
      .exactOptional()
      .openapi({
        description:
          'Term to find specific subpages of search results. Can be a single string or an array of strings.',
      }),
    context: z
      .xor([
        z
          .boolean()
          .openapi({
            description:
              'Deprecated. Use `highlights` or `text` instead. Returns page contents as a combined context string.',
            'x-exa-lifecycle': 'deprecated',
            deprecated: true,
            'x-exa-replacement': ['highlights', 'text'],
          }),
        z
          .object({
            maxCharacters: z
              .int()
              .min(1)
              .max(1000000)
              .exactOptional()
              .openapi({ description: 'Maximum character limit for the context string.' }),
          })
          .openapi({
            description:
              'Deprecated. Use `highlights` or `text` instead. Returns page contents as a combined context string.',
            'x-exa-lifecycle': 'deprecated',
            deprecated: true,
            'x-exa-replacement': ['highlights', 'text'],
            required: [],
          }),
      ])
      .exactOptional()
      .openapi({
        description:
          'Deprecated. Use `highlights` or `text` instead. Returns page contents as a combined context string.',
        'x-exa-lifecycle': 'deprecated',
        deprecated: true,
        'x-exa-replacement': ['highlights', 'text'],
      }),
  })
  .openapi({
    description:
      'Content extraction options applied to each search result. All fields are optional.',
    required: [],
  })
  .openapi('SearchMonitorContents')

const SearchMonitorSearchSchema = z
  .object({
    query: z.string().min(1).openapi({ description: 'The query string for the search.' }),
    numResults: z
      .int()
      .min(1)
      .max(100)
      .default(10)
      .exactOptional()
      .openapi({
        description:
          'Number of results to return. Limits vary by search type. The maximum public limit is 100 results. Contact sales (hello@exa.ai) to discuss higher limits.',
      }),
    includeDomains: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Restrict search results to these domains.' }),
    excludeDomains: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Exclude these domains from search results.' }),
    contents: SearchMonitorContentsSchema.exactOptional(),
  })
  .openapi({ required: ['query'] })
  .openapi('SearchMonitorSearch')

const SearchMonitorTriggerSchema = z
  .object({
    type: z
      .literal('interval')
      .default('interval')
      .openapi({ description: 'The type of trigger. Currently only `interval` is supported.' }),
    period: z
      .string()
      .openapi({
        description:
          'A duration string specifying how often the monitor runs (e.g., "1h", "6h", "1d", "7d"). Single-unit only. Minimum interval is 1 hour. The schedule is anchored to the monitor\'s creation time (e.g., a daily monitor created at 2:30 PM runs daily around 2:30 PM).',
      }),
  })
  .openapi({ required: ['type', 'period'] })
  .openapi('SearchMonitorTrigger')

const SearchMonitorOutputSchemaSchema = z
  .union([
    z
      .xor([OutputSchemaTextSchema, OutputSchemaObjectSchema])
      .openapi({
        description:
          'JSON schema for synthesized output. Supported root types are "text" and "object". When provided, the response includes an output object whose content matches this schema. Works with every search type and adds about 2 seconds of synthesis latency on top of the selected search type. Object schemas are limited to 10 properties in total (nested and array items properties count toward the limit) and 2 levels of nesting, and every array must define items.',
        discriminator: {
          propertyName: 'type',
          mapping: {
            text: '#/components/schemas/OutputSchemaText',
            object: '#/components/schemas/OutputSchemaObject',
          },
        },
      }),
    z.null().nullable(),
  ])
  .openapi({
    description:
      'Controls the format of the run output. Defaults to `{ "type": "text" }` if not specified. When `type` is `"text"`, the output is a plain text summary. When `type` is `"object"`, the output is structured JSON. If no `properties` are specified with `"object"` type, a schema is inferred automatically; otherwise the output adheres to the provided schema.',
  })
  .openapi('SearchMonitorOutputSchema')

const SearchMonitorWebhookSchema = z
  .object({
    url: z
      .url()
      .openapi({
        description:
          'The HTTPS URL to receive webhook events. Must not point to localhost or private IP ranges.',
      }),
    events: z
      .array(
        z.enum([
          'monitor.created',
          'monitor.updated',
          'monitor.deleted',
          'monitor.run.created',
          'monitor.run.completed',
        ]),
      )
      .exactOptional()
      .openapi({
        description: 'Which events to subscribe to. Defaults to all events if not specified.',
      }),
  })
  .openapi({ required: ['url'] })
  .openapi('SearchMonitorWebhook')

const CreateSearchMonitorParametersSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'An optional name for the monitor' }),
    search: SearchMonitorSearchSchema,
    trigger: SearchMonitorTriggerSchema.exactOptional(),
    outputSchema: SearchMonitorOutputSchemaSchema.exactOptional(),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional key-value metadata. Echoed back in webhook deliveries so you can route updates to systems like Slack.',
      }),
    webhook: SearchMonitorWebhookSchema,
  })
  .openapi({ required: ['search', 'webhook'] })
  .openapi('CreateSearchMonitorParameters')

const BatchMonitorsRequestSchema = z
  .object({
    action: z
      .enum(['delete', 'pause', 'unpause'])
      .openapi({
        description:
          'The action to perform on matching monitors. `delete` permanently removes them, `pause` sets their status to paused, and `unpause` sets their status to active.',
      }),
    filter: z
      .object({
        name: z
          .string()
          .max(250)
          .exactOptional()
          .openapi({ description: 'Filter by name (case-insensitive substring match)' }),
        status: z
          .enum(['active', 'paused', 'disabled'])
          .exactOptional()
          .openapi({ description: 'Filter by monitor status' }),
        metadata: z
          .record(z.string(), z.string().max(1000))
          .exactOptional()
          .openapi({
            description: 'Filter by metadata key-value pairs (exact match, AND semantics)',
          }),
      })
      .openapi({
        description:
          'At least one filter field must be provided to prevent accidental bulk operations.',
        required: [],
      }),
    dry_run: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'When `true`, returns the monitors that would be affected without performing the action. Defaults to `true`.',
      }),
    limit: z
      .int()
      .min(1)
      .max(500)
      .default(50)
      .exactOptional()
      .openapi({
        description:
          'Maximum number of monitors to process in a single request. Defaults to 50, maximum 500.',
      }),
  })
  .openapi({ required: ['action', 'filter'] })
  .openapi('BatchMonitorsRequest')

const UpdateSearchMonitorParametersSchema = z
  .object({
    name: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'Update the monitor name' }),
    status: z
      .enum(['active', 'paused'])
      .exactOptional()
      .openapi({ description: 'Update the monitor status (can only set to `active` or `paused`)' }),
    search: z
      .object({
        query: z
          .string()
          .min(1)
          .exactOptional()
          .openapi({ description: 'The query string for the search.' }),
        numResults: z
          .int()
          .min(1)
          .max(100)
          .default(10)
          .exactOptional()
          .openapi({
            description:
              'Number of results to return. Limits vary by search type. The maximum public limit is 100 results. Contact sales (hello@exa.ai) to discuss higher limits.',
          }),
        includeDomains: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'Restrict search results to these domains.' }),
        excludeDomains: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'Exclude these domains from search results.' }),
        contents: SearchMonitorContentsSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        description: 'Partial search params to merge. All fields are optional for updates.',
        required: [],
      }),
    trigger: z
      .union([
        z
          .object({
            type: z
              .literal('interval')
              .default('interval')
              .exactOptional()
              .openapi({
                description: 'The type of trigger. Currently only `interval` is supported.',
              }),
            period: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'A duration string specifying how often the monitor runs (e.g., "1h", "6h", "1d", "7d"). Single-unit only. Minimum interval is 1 hour.',
              }),
          })
          .openapi({ required: [] }),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({ description: 'Update the schedule. Set to null to remove the schedule.' }),
    outputSchema: SearchMonitorOutputSchemaSchema.exactOptional(),
    metadata: z
      .union([
        z
          .record(z.string(), z.string())
          .openapi({ description: 'Caller-provided key-value metadata for your own tracking.' }),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({
        description:
          'Update metadata. Set to null to remove. Echoed back in webhook deliveries so you can route updates to systems like Slack.',
      }),
    webhook: z
      .object({
        url: z
          .url()
          .exactOptional()
          .openapi({
            description:
              'The HTTPS URL to receive webhook events. Must not point to localhost or private IP ranges.',
          }),
        events: z
          .array(
            z.enum([
              'monitor.created',
              'monitor.updated',
              'monitor.deleted',
              'monitor.run.created',
              'monitor.run.completed',
            ]),
          )
          .exactOptional()
          .openapi({
            description: 'Which events to subscribe to. Defaults to all events if not specified.',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Partial webhook params to merge. All fields are optional for updates.',
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateSearchMonitorParameters')

const AgentDataSourceSchema = z
  .object({
    provider: AgentDataSourceProviderSchema.openapi({
      description:
        'Exa Connect data provider to enable for the run. All provider tools are available by default.',
    }),
  })
  .openapi({ required: ['provider'] })
  .openapi('AgentDataSource')

const AgentBudgetSchema = z
  .object({
    maxCostDollars: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Maximum amount this run can spend in US dollars. Accepts $1–$100 and applies only to `auto` and `ultra`; when omitted, the default cap is $5 for `auto` and $20 for `ultra`.',
      }),
    maxDurationSeconds: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Soft wall-clock ceiling for the run in seconds. Accepts 300–10,800 (5 minutes to 3 hours) and applies only to `ultra`. As the run approaches the limit, the agent stops starting new work and returns what it has found with `stopReason: "time_limit_reached"`.',
      }),
  })
  .openapi({
    description:
      'Optional per-run spending and duration limits for the metered `auto` and `ultra` efforts. Runs that finish early may cost less than the limit.',
    required: [],
  })
  .openapi('AgentBudget')

const CreateAgentRunRequestSchema = z
  .object({
    query: z
      .string()
      .min(1)
      .openapi({ description: 'Natural-language question or instructions for the request.' }),
    systemPrompt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional instructions that guide generated output or agent behavior. Use this for source preferences, novelty constraints, duplication constraints, or other behavior guidance.',
      }),
    effort: AgentEffortSchema.exactOptional(),
    input: z
      .object({
        data: z
          .array(
            z.record(z.string(), JsonValueSchema).openapi({ description: 'A JSON object record.' }),
          )
          .exactOptional()
          .openapi({ description: 'Records the agent should process or enrich.' }),
        exclusion: z
          .array(
            z.record(z.string(), JsonValueSchema).openapi({ description: 'A JSON object record.' }),
          )
          .exactOptional()
          .openapi({ description: 'Records or entities the agent should avoid returning.' }),
      })
      .exactOptional()
      .openapi({
        description: 'Records to process and records or entities to exclude from the answer.',
        required: [],
      }),
    outputSchema: z
      .union([
        z
          .record(z.string(), JsonValueSchema)
          .openapi({
            description:
              'JSON Schema for validated structured output in `output.structured`. Fields unsupported by evidence may be returned as `null`. Supports draft-07, 2019-09, and 2020-12 via `$schema`.',
          }),
        z.null().nullable(),
      ])
      .exactOptional(),
    previousRunId: AgentRunIdSchema.exactOptional().openapi({
      description: 'Completed run ID to continue from. Must belong to the same team.',
    }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Caller-provided metadata stored with the run.' }),
    dataSources: z
      .array(AgentDataSourceSchema)
      .max(5)
      .exactOptional()
      .openapi({
        description:
          "Exa Connect data providers to enable for the run. Each entry enables all of that provider's tools.",
      }),
    budget: AgentBudgetSchema.exactOptional(),
    userIdentifier: z
      .union([
        z
          .string()
          .regex(/^[A-Za-z0-9_-]+$/)
          .min(1)
          .max(64),
        z.null().nullable(),
      ])
      .exactOptional()
      .openapi({
        description:
          'An opaque ID your platform assigns to the end user this request is made for, such as a UUID. Lets Exa attribute usage to that end user rather than your whole team. Must not contain personal information such as an email address, phone number, username, or name. Hash such values before sending them. 1 to 64 characters: letters, digits, underscores, and hyphens. Retained even when your team has Zero Data Retention enabled. Does not affect results.',
        example: '7f3a9c52-1d4e-4b8a-9e60-2c5d8a1f0b37',
      }),
  })
  .openapi({ required: ['query'] })
  .openapi('CreateAgentRunRequest')

const BatchRequestItemSchema = z
  .object({
    customId: z
      .string()
      .min(1)
      .max(64)
      .openapi({
        description:
          'Your unique handle for this request; keys the result and must be unique in the batch.',
      }),
    method: z
      .literal('POST')
      .openapi({ description: 'HTTP method of the batched request. POST-only in v1.' }),
    url: z
      .enum(['/search', '/agent/runs'])
      .openapi({ description: 'Target API route for the request.' }),
    body: z
      .record(z.string(), JsonValueSchema)
      .openapi({
        description:
          'Request body for the target route. Must be a JSON object; `stream: true` is not allowed.',
      }),
  })
  .openapi({ required: ['customId', 'method', 'url', 'body'] })
  .openapi('BatchRequestItem')

const CreateBatchRequestSchema = z
  .object({
    requests: z
      .array(BatchRequestItemSchema)
      .min(1)
      .openapi({
        description: 'The requests to enqueue. Each `customId` must be unique within the batch.',
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Caller-provided metadata stored with the batch.' }),
  })
  .openapi({ required: ['requests'] })
  .openapi('CreateBatchRequest')

const AnswerStreamTextDeltaChunkSchema = z
  .object({
    choices: z
      .array(
        z
          .object({
            index: z.int().min(0).openapi({ description: 'Index of this streamed choice.' }),
            delta: z
              .object({
                role: z.literal('assistant').exactOptional(),
                content: z.string().exactOptional(),
                refusal: z.union([z.string(), z.null().nullable()]).exactOptional(),
              })
              .catchall(JsonValueSchema)
              .openapi({
                description: 'Incremental answer content emitted by the model.',
                required: [],
              }),
            finish_reason: z
              .xor([z.string(), z.null().nullable()])
              .exactOptional()
              .openapi({ description: 'Reason this streamed choice finished, when present.' }),
          })
          .catchall(JsonValueSchema)
          .openapi({ required: ['index', 'delta'] }),
      )
      .openapi({
        description: 'Streamed completion choices in the OpenAI chat completions format.',
      }),
  })
  .catchall(JsonValueSchema)
  .openapi({ required: ['choices'] })
  .openapi('AnswerStreamTextDeltaChunk')

const SearchResponseSchema: z.ZodType<SearchResponseType> = z
  .xor([SearchSynthesisResponseSchema, SearchResultsResponseSchema])
  .openapi('SearchResponse')

const ErrorResponseSchema = z
  .strictObject({
    requestId: z.string().openapi({ description: 'Unique identifier for the request.' }),
    error: z.string().openapi({ description: 'Human-readable message describing the error.' }),
    tag: z
      .string()
      .openapi({
        description:
          "Machine-readable error tag identifying the failure. The set of tags is open-ended: new tags may be added at any time, so treat unrecognized tags as a generic error of the response's HTTP status. Known tags are listed as examples.",
      }),
  })
  .openapi({
    required: ['requestId', 'error', 'tag'],
    description: 'Standard error envelope returned by the Exa API for failed requests.',
  })
  .openapi('ErrorResponse')

const X402PaymentChallengeSchema = z
  .strictObject({
    requestId: z.string().openapi({ description: 'Unique identifier for the request.' }),
    error: z.string().openapi({ description: 'Human-readable message describing the error.' }),
    tag: z
      .string()
      .openapi({
        description:
          "Machine-readable error tag identifying the failure. The set of tags is open-ended: new tags may be added at any time, so treat unrecognized tags as a generic error of the response's HTTP status. Known tags are listed as examples.",
      }),
    x402Version: z
      .number()
      .openapi({ description: 'Version of the x402 protocol used to build this challenge.' }),
    resource: z
      .strictObject({
        url: z.string().openapi({ description: 'URL of the priced resource being requested.' }),
        description: z.string().openapi({ description: 'Human-readable resource description.' }),
        mimeType: z.string().openapi({ description: 'MIME type of the priced resource.' }),
      })
      .openapi({
        required: ['url', 'description', 'mimeType'],
        description: 'The priced resource this challenge applies to.',
      }),
    accepts: z
      .array(
        z
          .record(z.string(), z.any())
          .openapi({
            description:
              'An accepted x402 payment requirement (scheme, network, amount, payTo, asset, maxTimeoutSeconds, and scheme-specific `extra` fields).',
          }),
      )
      .openapi({ description: 'Payment requirements the server accepts, one per supported rail.' }),
    extensions: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          'Optional x402 protocol extensions (e.g. Bazaar or AgentKit discovery metadata).',
      }),
  })
  .openapi({
    required: ['requestId', 'error', 'tag', 'x402Version', 'resource', 'accepts'],
    description:
      'x402 payment challenge: the standard error envelope extended with x402 payment metadata.',
  })
  .openapi('X402PaymentChallenge')

const ContentsResponseSchema: z.ZodType<ContentsResponseType> = z
  .strictObject({
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the request.' }),
    results: z.array(SearchResultOutputSchema).exactOptional(),
    statuses: z
      .array(
        z
          .strictObject({
            id: z.string().openapi({ description: 'The URL or document ID that was requested.' }),
            status: z
              .enum(['success', 'error'])
              .openapi({ description: 'Status of the content fetch operation.' }),
            source: z
              .enum(['cached', 'crawled'])
              .exactOptional()
              .openapi({ description: 'Where the returned content was sourced from.' }),
            error: z
              .union([
                z
                  .strictObject({
                    tag: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Specific error type.' }),
                    httpStatusCode: z
                      .union([z.int().min(100).max(599), z.null().nullable()])
                      .exactOptional()
                      .openapi({ description: 'The corresponding HTTP status code.' }),
                  })
                  .openapi({ required: [] }),
                z.null().nullable(),
              ])
              .exactOptional()
              .openapi({ description: 'Error details, only present when status is "error".' }),
          })
          .openapi({ required: ['id', 'status'] }),
      )
      .exactOptional()
      .openapi({ description: 'Status information for each requested URL or document ID.' }),
    costDollars: CostDollarsOutputSchema.exactOptional(),
    searchTime: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Server-side processing time in milliseconds. May exclude output synthesis time, so it can be lower than end-to-end latency.',
      }),
    context: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated. Use `results[].highlights` or `results[].text` instead. Combined context string from search results.',
        'x-exa-lifecycle': 'deprecated',
        deprecated: true,
        'x-exa-replacement': ['results[].highlights', 'results[].text'],
      }),
  })
  .openapi({ required: [] })
  .openapi('ContentsResponse')

const AnswerResponseSchema = z
  .strictObject({
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the request.' }),
    answer: z
      .xor([z.string(), z.record(z.string(), JsonValueSchema)])
      .openapi({
        description:
          'The generated answer based on search results. Returns a string by default, or a structured object matching the provided outputSchema.',
      }),
    citations: z
      .array(
        z
          .strictObject({
            title: z.string().openapi({ description: 'The title of the search result.' }),
            url: z.url().openapi({ description: 'The URL of the search result.' }),
            publishedDate: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'An estimate of the creation date, from parsing HTML content. Format is YYYY-MM-DD.',
              }),
            author: z
              .union([z.string(), z.null().nullable()])
              .exactOptional()
              .openapi({ description: 'If available, the author of the content.' }),
            id: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The temporary ID for the document. Useful for the /contents endpoint.',
              }),
            image: z
              .url()
              .exactOptional()
              .openapi({
                description: 'The URL of an image associated with the search result, if available.',
              }),
            favicon: z
              .url()
              .exactOptional()
              .openapi({ description: "The URL of the favicon for the search result's domain." }),
            text: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The full text content of each source. Only present when text contents are requested.',
              }),
          })
          .openapi({ required: ['title', 'url'] }),
      )
      .exactOptional()
      .openapi({ description: 'Search results used to generate the answer.' }),
    costDollars: CostDollarsOutputSchema.exactOptional(),
  })
  .openapi({ required: ['answer'] })
  .openapi('AnswerResponse')

const FindSimilarResponseSchema: z.ZodType<FindSimilarResponseType> = z
  .strictObject({
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the request.' }),
    results: z
      .array(FindSimilarResultSchema)
      .exactOptional()
      .openapi({
        description: 'A list of search results containing title, URL, published date, and author.',
      }),
    costDollars: CostDollarsOutputSchema.exactOptional(),
    searchTime: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Server-side processing time in milliseconds. May exclude output synthesis time, so it can be lower than end-to-end latency.',
      }),
    context: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated. Use `results[].highlights` or `results[].text` instead. Combined context string from search results.',
        'x-exa-lifecycle': 'deprecated',
        deprecated: true,
        'x-exa-replacement': ['results[].highlights', 'results[].text'],
      }),
  })
  .openapi({ required: [] })
  .openapi('FindSimilarResponse')

const SummaryWithMaxTokensOptionsOutputSchema = z
  .strictObject({
    query: z
      .union([
        z.string().openapi({ description: 'Custom query for the LLM-generated summary.' }),
        z.null().nullable(),
      ])
      .exactOptional(),
    maxTokens: z
      .int()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'Deprecated. Maximum tokens for the generated summary.',
        'x-exa-lifecycle': 'deprecated',
        deprecated: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('SummaryWithMaxTokensOptionsOutput')

const SearchMonitorContentsOutputSchema = z
  .strictObject({
    text: z
      .xor([
        z
          .boolean()
          .default(false)
          .openapi({
            title: 'Simple text retrieval',
            description:
              'If true, returns full page text with default settings. If false, disables text return.',
          }),
        z
          .strictObject({
            maxCharacters: z
              .union([
                z
                  .int()
                  .min(1)
                  .max(1000000)
                  .openapi({
                    description:
                      'Maximum character limit for the full page text. Useful for controlling response size and API costs.',
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
            includeHtmlTags: z
              .union([
                z
                  .boolean()
                  .default(false)
                  .openapi({
                    description:
                      'If true, include lightweight HTML tags in returned text instead of plain markdown-style text.',
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
            verbosity: z
              .union([
                z
                  .enum(['compact', 'standard', 'full'])
                  .default('compact')
                  .openapi({
                    description:
                      'Controls text rendering verbosity. compact focuses on main content, standard includes more surrounding page context, and full requests the most complete rendered text. Some pages may produce identical standard and full output.',
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
            includeSections: z
              .union([
                z
                  .array(
                    z.enum([
                      'header',
                      'navigation',
                      'banner',
                      'body',
                      'sidebar',
                      'footer',
                      'metadata',
                    ]),
                  )
                  .openapi({
                    description:
                      'Best-effort. Only include content classified into these semantic page sections. Section classification may be unavailable or incomplete for some pages; validate output if strict filtering is required.',
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
            excludeSections: z
              .union([
                z
                  .array(
                    z.enum([
                      'header',
                      'navigation',
                      'banner',
                      'body',
                      'sidebar',
                      'footer',
                      'metadata',
                    ]),
                  )
                  .openapi({
                    description:
                      'Exclude content classified into these semantic page sections. Section classification is best-effort.',
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
          })
          .openapi({
            title: 'Advanced text options',
            description:
              'Advanced options for controlling text extraction. Use this when you need to limit text length or include HTML structure. Set `maxAgeHours: 0` to apply `includeHtmlTags`, `verbosity`, and section filters to freshly fetched content.',
            required: [],
          }),
      ])
      .exactOptional()
      .openapi({ description: 'Text extraction options for each result.' }),
    highlights: z
      .xor([
        z
          .boolean()
          .default(false)
          .openapi({
            title: 'Simple highlights retrieval',
            description:
              'If true, returns highlights with default settings. If false, disables highlights.',
          }),
        z
          .strictObject({
            query: z
              .union([
                z
                  .string()
                  .openapi({
                    description: 'Custom query that guides which highlights the LLM picks.',
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
            verbosity: z
              .union([
                z
                  .enum(['low', 'medium', 'high'])
                  .openapi({
                    description:
                      'Preset highlight length: `low`, `medium`, and `high` allocate progressively larger token budgets for the returned highlights. With highlights.dynamic, the preset sets a single shared budget across the whole result set instead of a per-URL budget. Exact budgets are tuned by Exa and may change. Not compatible with maxCharacters or numSentences. Beta: requires the `Exa-Beta: dynamic-highlights-2026-08-28` request header; requests setting `verbosity` without it are rejected.',
                    'x-exa-lifecycle': 'beta',
                    'x-exa-beta-flag': 'dynamic-highlights-2026-08-28',
                    'x-mint': { post: ['Beta'] },
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
            dynamic: z
              .union([
                z
                  .boolean()
                  .openapi({
                    description:
                      'Enable Dynamic Highlights (research preview): considers all results together and allocates a single shared context budget across the result set instead of a per-document budget. Not compatible with maxCharacters. Beta: requires the `Exa-Beta: dynamic-highlights-2026-08-28` request header; requests setting `dynamic` without it are rejected.',
                    'x-exa-lifecycle': 'beta',
                    'x-exa-beta-flag': 'dynamic-highlights-2026-08-28',
                    'x-mint': { post: ['Beta'] },
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
            maxCharacters: z
              .union([
                z
                  .int()
                  .min(1)
                  .max(1000000)
                  .openapi({
                    description:
                      'Maximum number of characters to return for highlights. Controls the total length of highlight text returned per URL. Not compatible with highlights.dynamic.',
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
            numSentences: z
              .union([
                z
                  .int()
                  .min(1)
                  .openapi({
                    description:
                      'Deprecated. Use `maxCharacters` instead. Currently mapped to a character budget of about 1333 characters per sentence. Pass highlights: true for default highlights, or { query } to guide selection with your own query.',
                    'x-exa-lifecycle': 'deprecated',
                    deprecated: true,
                    'x-exa-replacement': 'maxCharacters',
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
            highlightsPerUrl: z
              .union([
                z
                  .int()
                  .min(1)
                  .openapi({
                    description:
                      'Deprecated. Currently ignored. Pass highlights: true for default highlights, or { query } to guide selection with your own query.',
                    'x-exa-lifecycle': 'deprecated',
                    deprecated: true,
                  }),
                z.null().nullable(),
              ])
              .exactOptional(),
          })
          .openapi({
            title: 'Advanced highlights options',
            description:
              'Advanced options for steering highlight extraction. Pass highlights: true for the highest-quality default; supply this object only when you need to guide selection with your own query.',
            required: [],
          }),
      ])
      .exactOptional()
      .openapi({
        description: 'Text snippets the LLM identifies as most relevant from each page.',
      }),
    summary: z
      .xor([z.boolean(), SummaryWithMaxTokensOptionsOutputSchema])
      .exactOptional()
      .openapi({
        description:
          'Return an LLM-generated summary. Pass `true` for defaults, or an object with `query`.',
      }),
    extras: z
      .strictObject({
        links: z
          .union([
            z
              .int()
              .min(0)
              .max(1000)
              .default(0)
              .openapi({ description: 'Number of URLs to return from each webpage.' }),
            z.null().nullable(),
          ])
          .exactOptional(),
        imageLinks: z
          .union([
            z
              .int()
              .min(0)
              .max(1000)
              .default(0)
              .openapi({ description: 'Number of images to return for each result.' }),
            z.null().nullable(),
          ])
          .exactOptional(),
        richImageLinks: z
          .union([
            z
              .int()
              .min(0)
              .max(1000)
              .default(0)
              .openapi({ description: 'Number of rich image links to return for each result.' }),
            z.null().nullable(),
          ])
          .exactOptional(),
        richLinks: z
          .union([
            z
              .int()
              .min(0)
              .max(1000)
              .default(0)
              .openapi({
                description: 'Deprecated. Number of rich links to return for each result.',
                'x-exa-lifecycle': 'deprecated',
                deprecated: true,
              }),
            z.null().nullable(),
          ])
          .exactOptional(),
        codeBlocks: z
          .union([
            z
              .int()
              .min(0)
              .max(1000)
              .default(0)
              .openapi({
                description: 'Deprecated. Number of code blocks to return for each result.',
                'x-exa-lifecycle': 'deprecated',
                deprecated: true,
              }),
            z.null().nullable(),
          ])
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'Extra parameters to pass.', required: [] }),
    livecrawl: z
      .xor([z.enum(['never', 'always', 'fallback', 'preferred']), z.literal('auto')])
      .exactOptional()
      .openapi({ description: 'Crawl strategy for fetching page content' }),
    livecrawlTimeout: z
      .int()
      .gt(0)
      .max(90000)
      .default(10000)
      .exactOptional()
      .openapi({ description: 'The timeout for livecrawling in milliseconds.' }),
    maxAgeHours: z
      .int()
      .min(-1)
      .max(720)
      .exactOptional()
      .openapi({
        description:
          'Maximum age of cached content, in hours, up to 720. Cached content younger than this is used, and older pages are fetched fresh. `0` always fetches fresh content and `-1` always uses the cache. When omitted, cached content is used when available and pages without it are fetched live.',
      }),
    filterEmptyResults: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Filter out results with no content' }),
    subpages: z
      .int()
      .min(0)
      .max(100)
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The number of subpages to crawl. The actual number crawled may be limited by system constraints.',
      }),
    subpageTarget: z
      .xor([z.string().min(1).max(100), z.array(z.string().min(1).max(100)).min(0).max(100)])
      .exactOptional()
      .openapi({
        description:
          'Term to find specific subpages of search results. Can be a single string or an array of strings.',
      }),
    context: z
      .xor([
        z
          .boolean()
          .openapi({
            description:
              'Deprecated. Use `highlights` or `text` instead. Returns page contents as a combined context string.',
            'x-exa-lifecycle': 'deprecated',
            deprecated: true,
            'x-exa-replacement': ['highlights', 'text'],
          }),
        z
          .strictObject({
            maxCharacters: z
              .int()
              .min(1)
              .max(1000000)
              .exactOptional()
              .openapi({ description: 'Maximum character limit for the context string.' }),
          })
          .openapi({
            description:
              'Deprecated. Use `highlights` or `text` instead. Returns page contents as a combined context string.',
            'x-exa-lifecycle': 'deprecated',
            deprecated: true,
            'x-exa-replacement': ['highlights', 'text'],
            required: [],
          }),
      ])
      .exactOptional()
      .openapi({
        description:
          'Deprecated. Use `highlights` or `text` instead. Returns page contents as a combined context string.',
        'x-exa-lifecycle': 'deprecated',
        deprecated: true,
        'x-exa-replacement': ['highlights', 'text'],
      }),
  })
  .openapi({
    description:
      'Content extraction options applied to each search result. All fields are optional.',
    required: [],
  })
  .openapi('SearchMonitorContentsOutput')

const SearchMonitorSearchOutputSchema = z
  .strictObject({
    query: z.string().min(1).openapi({ description: 'The query string for the search.' }),
    numResults: z
      .int()
      .min(1)
      .max(100)
      .default(10)
      .exactOptional()
      .openapi({
        description:
          'Number of results to return. Limits vary by search type. The maximum public limit is 100 results. Contact sales (hello@exa.ai) to discuss higher limits.',
      }),
    includeDomains: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Restrict search results to these domains.' }),
    excludeDomains: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Exclude these domains from search results.' }),
    contents: SearchMonitorContentsOutputSchema.exactOptional(),
  })
  .openapi({ required: ['query'] })
  .openapi('SearchMonitorSearchOutput')

const SearchMonitorTriggerOutputSchema = z
  .strictObject({
    type: z
      .literal('interval')
      .default('interval')
      .openapi({ description: 'The type of trigger. Currently only `interval` is supported.' }),
    period: z
      .string()
      .openapi({
        description:
          'A duration string specifying how often the monitor runs (e.g., "1h", "6h", "1d", "7d"). Single-unit only. Minimum interval is 1 hour. The schedule is anchored to the monitor\'s creation time (e.g., a daily monitor created at 2:30 PM runs daily around 2:30 PM).',
      }),
  })
  .openapi({ required: ['type', 'period'] })
  .openapi('SearchMonitorTriggerOutput')

const OutputSchemaTextOutputSchema = z
  .strictObject({ type: z.literal('text'), description: z.string().exactOptional() })
  .openapi({ required: ['type'] })
  .openapi('OutputSchemaTextOutput')

const SearchMonitorOutputSchemaOutputSchema = z
  .union([
    z
      .xor([OutputSchemaTextOutputSchema, OutputSchemaObjectSchema])
      .openapi({
        description:
          'JSON schema for synthesized output. Supported root types are "text" and "object". When provided, the response includes an output object whose content matches this schema. Works with every search type and adds about 2 seconds of synthesis latency on top of the selected search type. Object schemas are limited to 10 properties in total (nested and array items properties count toward the limit) and 2 levels of nesting, and every array must define items.',
        discriminator: {
          propertyName: 'type',
          mapping: {
            text: '#/components/schemas/OutputSchemaTextOutput',
            object: '#/components/schemas/OutputSchemaObject',
          },
        },
      }),
    z.null().nullable(),
  ])
  .openapi({
    description:
      'Controls the format of the run output. Defaults to `{ "type": "text" }` if not specified. When `type` is `"text"`, the output is a plain text summary. When `type` is `"object"`, the output is structured JSON. If no `properties` are specified with `"object"` type, a schema is inferred automatically; otherwise the output adheres to the provided schema.',
  })
  .openapi('SearchMonitorOutputSchemaOutput')

const SearchMonitorWebhookOutputSchema = z
  .strictObject({
    url: z
      .url()
      .openapi({
        description:
          'The HTTPS URL to receive webhook events. Must not point to localhost or private IP ranges.',
      }),
    events: z
      .array(
        z.enum([
          'monitor.created',
          'monitor.updated',
          'monitor.deleted',
          'monitor.run.created',
          'monitor.run.completed',
        ]),
      )
      .exactOptional()
      .openapi({
        description: 'Which events to subscribe to. Defaults to all events if not specified.',
      }),
  })
  .openapi({ required: ['url'] })
  .openapi('SearchMonitorWebhookOutput')

const CreateSearchMonitorResponseSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'The unique identifier for the monitor' }),
    name: z
      .union([z.string(), z.null().nullable()])
      .openapi({ description: 'An optional display name' }),
    status: z
      .enum(['active', 'paused', 'disabled'])
      .openapi({
        description:
          'The status of the monitor. `active` monitors run on schedule and can be triggered manually. `paused` monitors can only be triggered manually. `disabled` monitors are auto-disabled after 10 consecutive authentication failures.',
      }),
    search: SearchMonitorSearchOutputSchema,
    trigger: z
      .union([SearchMonitorTriggerOutputSchema, z.null().nullable()])
      .openapi({
        description: 'The interval-based schedule for automatic runs. Null if no schedule is set.',
      }),
    outputSchema: SearchMonitorOutputSchemaOutputSchema,
    metadata: z
      .union([
        z
          .record(z.string(), z.string())
          .openapi({ description: 'Caller-provided key-value metadata for your own tracking.' }),
        z.null().nullable(),
      ])
      .openapi({
        description:
          'Optional key-value metadata for your own tracking. Echoed back in webhook deliveries so you can route updates to systems like Slack.',
      }),
    webhook: SearchMonitorWebhookOutputSchema,
    nextRunAt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({
        description: 'When the next scheduled run will occur. Null if no trigger is set.',
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the monitor was created' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the monitor was last updated' }),
    webhookSecret: z
      .string()
      .openapi({
        description:
          'The secret used to verify webhook signatures. This is only returned once at creation time. Store it securely.',
      }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'status',
      'search',
      'trigger',
      'outputSchema',
      'metadata',
      'webhook',
      'nextRunAt',
      'createdAt',
      'updatedAt',
      'webhookSecret',
    ],
  })
  .openapi('CreateSearchMonitorResponse')

const SearchMonitorSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'The unique identifier for the monitor' }),
    name: z
      .union([z.string(), z.null().nullable()])
      .openapi({ description: 'An optional display name' }),
    status: z
      .enum(['active', 'paused', 'disabled'])
      .openapi({
        description:
          'The status of the monitor. `active` monitors run on schedule and can be triggered manually. `paused` monitors can only be triggered manually. `disabled` monitors are auto-disabled after 10 consecutive authentication failures.',
      }),
    search: SearchMonitorSearchOutputSchema,
    trigger: z
      .union([SearchMonitorTriggerOutputSchema, z.null().nullable()])
      .openapi({
        description: 'The interval-based schedule for automatic runs. Null if no schedule is set.',
      }),
    outputSchema: SearchMonitorOutputSchemaOutputSchema,
    metadata: z
      .union([
        z
          .record(z.string(), z.string())
          .openapi({ description: 'Caller-provided key-value metadata for your own tracking.' }),
        z.null().nullable(),
      ])
      .openapi({
        description:
          'Optional key-value metadata for your own tracking. Echoed back in webhook deliveries so you can route updates to systems like Slack.',
      }),
    webhook: SearchMonitorWebhookOutputSchema,
    nextRunAt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({
        description: 'When the next scheduled run will occur. Null if no trigger is set.',
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the monitor was created' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the monitor was last updated' }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'status',
      'search',
      'trigger',
      'outputSchema',
      'metadata',
      'webhook',
      'nextRunAt',
      'createdAt',
      'updatedAt',
    ],
  })
  .openapi('SearchMonitor')

const ListSearchMonitorsResponseSchema = z
  .strictObject({
    data: z.array(SearchMonitorSchema).openapi({ description: 'The list of monitors' }),
    hasMore: z.boolean().openapi({ description: 'Whether there are more results' }),
    nextCursor: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'Cursor for the next page' }),
  })
  .openapi({ required: ['data', 'hasMore'] })
  .openapi('ListSearchMonitorsResponse')

const BatchMonitorsResponseSchema = z
  .strictObject({
    action: z
      .enum(['delete', 'pause', 'unpause'])
      .openapi({ description: 'The action that was performed' }),
    affected: z.int().openapi({ description: 'The number of monitors affected by the action' }),
    ids: z.array(z.string()).openapi({ description: 'The IDs of the monitors that were affected' }),
    dry_run: z.boolean().openapi({ description: 'Whether this was a dry run' }),
    has_more: z
      .boolean()
      .openapi({
        description:
          'Whether there are more monitors matching the filter. If `true`, repeat the request to process the next batch.',
      }),
  })
  .openapi({ required: ['action', 'affected', 'ids', 'dry_run', 'has_more'] })
  .openapi('BatchMonitorsResponse')

const TriggerSearchMonitorResponseSchema = z
  .strictObject({
    triggered: z
      .boolean()
      .openapi({ description: 'Whether the monitor was successfully triggered' }),
  })
  .openapi({ required: ['triggered'] })
  .openapi('TriggerSearchMonitorResponse')

const ListSearchMonitorRunsResponseSchema: z.ZodType<ListSearchMonitorRunsResponseType> = z
  .strictObject({
    data: z.array(SearchMonitorRunSchema).openapi({ description: 'The list of runs' }),
    hasMore: z.boolean().openapi({ description: 'Whether there are more results' }),
    nextCursor: z
      .union([z.string(), z.null().nullable()])
      .exactOptional()
      .openapi({ description: 'Cursor for the next page' }),
  })
  .openapi({ required: ['data', 'hasMore'] })
  .openapi('ListSearchMonitorRunsResponse')

const AgentErrorSchema = z
  .object({
    type: z.enum([
      'INVALID_REQUEST',
      'AUTHENTICATION_ERROR',
      'RATE_LIMIT_ERROR',
      'NOT_FOUND',
      'SERVER_ERROR',
    ]),
    code: z.enum([
      'INVALID_REQUEST',
      'TEAM_NOT_FOUND',
      'RUN_NOT_FOUND',
      'PREVIOUS_RUN_NOT_FOUND',
      'PREVIOUS_RUN_NOT_COMPLETED',
      'CONCURRENCY_LIMIT_REACHED',
      'INVALID_OUTPUT_SCHEMA',
      'INVALID_DATA_SOURCE',
      'TIMEOUT',
      'SERVER_ERROR',
    ]),
    message: z.string(),
  })
  .catchall(JsonValueSchema)
  .openapi({ required: ['type', 'code', 'message'] })
  .openapi('AgentError')

const AgentErrorResponseSchema = z
  .strictObject({ error: AgentErrorSchema })
  .openapi({ required: ['error'] })
  .openapi('AgentErrorResponse')

const AgentRunListSchema: z.ZodType<AgentRunListType> = z
  .strictObject({
    object: z.literal('list'),
    data: z.array(AgentRunSchema),
    hasMore: z.boolean().openapi({ description: 'Whether there are more results' }),
    nextCursor: z.union([AgentRunIdSchema, z.null().nullable()]),
  })
  .openapi({ required: ['object', 'data', 'hasMore', 'nextCursor'] })
  .openapi('AgentRunList')

const DeleteAgentRunResponseSchema = z
  .strictObject({
    id: AgentRunIdSchema,
    object: z.literal('agent_run.deleted'),
    deleted: z.literal(true),
  })
  .openapi({ required: ['id', 'object', 'deleted'] })
  .openapi('DeleteAgentRunResponse')

const AgentRunEventSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'Event ID within the run.' }),
    event: z.enum([
      'agent_run.created',
      'agent_run.started',
      'agent_run.completed',
      'agent_run.failed',
      'agent_run.cancelled',
    ]),
    data: JsonValueSchema,
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the event was created' }),
  })
  .openapi({ required: ['id', 'event', 'data', 'createdAt'] })
  .openapi('AgentRunEvent')

const AgentRunEventListSchema = z
  .strictObject({
    object: z.literal('list'),
    data: z.array(AgentRunEventSchema),
    hasMore: z.boolean().openapi({ description: 'Whether there are more results' }),
    nextCursor: z.union([z.string(), z.null().nullable()]),
  })
  .openapi({ required: ['object', 'data', 'hasMore', 'nextCursor'] })
  .openapi('AgentRunEventList')

const BatchStatusSchema = z
  .enum(['in_progress', 'completed', 'cancelling', 'cancelled', 'expired'])
  .openapi({ description: 'Lifecycle status of the batch.' })
  .openapi('BatchStatus')

const BatchRequestCountsSchema = z
  .strictObject({
    total: z.int().min(0).openapi({ description: 'Total requests in the batch.' }),
    completed: z
      .int()
      .min(0)
      .openapi({ description: 'Requests that have completed successfully.' }),
    failed: z.int().min(0).openapi({ description: 'Requests that have failed.' }),
  })
  .openapi({ required: ['total', 'completed', 'failed'] })
  .openapi('BatchRequestCounts')

const BatchSchema = z
  .strictObject({
    id: z
      .string()
      .openapi({ description: 'Batch ID. New batch IDs are returned with the `batch_` prefix.' }),
    object: z.literal('batch').openapi({ description: 'The object type, always `batch`.' }),
    status: BatchStatusSchema,
    requestCounts: BatchRequestCountsSchema,
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the batch was created.' }),
    expiresAt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({ description: 'When the batch expires, or `null` if it does not expire.' }),
    endedAt: z
      .union([z.iso.datetime({ offset: true }), z.null().nullable()])
      .openapi({
        description:
          'When the batch reached a terminal status, or `null` while it is still running.',
      }),
    resultsUrl: z
      .union([z.string(), z.null().nullable()])
      .openapi({
        description:
          'Short-lived download URL for the batch results file (JSONL), or `null` until the batch completes. Fetch it directly, without an API key. Retrieve the batch again for a fresh URL after it expires.',
      }),
    metadata: z
      .record(z.string(), z.string())
      .openapi({ description: 'Caller-provided key-value metadata for your own tracking.' }),
  })
  .openapi({
    required: [
      'id',
      'object',
      'status',
      'requestCounts',
      'createdAt',
      'expiresAt',
      'endedAt',
      'resultsUrl',
      'metadata',
    ],
  })
  .openapi('Batch')

const BatchListSchema = z
  .strictObject({
    object: z.literal('list').openapi({ description: 'The object type, always `list`.' }),
    data: z.array(BatchSchema).openapi({ description: 'The page of batches, newest first.' }),
    hasMore: z.boolean().openapi({ description: 'Whether there are more results' }),
    nextCursor: z
      .union([z.string(), z.null().nullable()])
      .openapi({ description: 'Cursor for the next page' }),
  })
  .openapi({ required: ['object', 'data', 'hasMore', 'nextCursor'] })
  .openapi('BatchList')

const DeletedBatchSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'ID of the deleted batch.' }),
    object: z
      .literal('batch.deleted')
      .openapi({ description: 'The object type, always `batch.deleted`.' }),
    deleted: z.literal(true).openapi({ description: 'Always `true` for a successful delete.' }),
  })
  .openapi({ required: ['id', 'object', 'deleted'] })
  .openapi('DeletedBatch')

const WebsetsTeamInfoSchema = z
  .strictObject({
    object: z.literal('team').openapi({ description: 'The object type, always `"team"`.' }),
    id: z.string().openapi({ description: 'Unique identifier for the team.' }),
    name: z.string().openapi({ description: 'Name of the team.' }),
    concurrency: z
      .strictObject({
        active: z.int().openapi({ description: 'Number of requests currently being processed.' }),
        queued: z.int().openapi({ description: 'Number of requests currently queued.' }),
      })
      .openapi({ required: ['active', 'queued'], description: 'Current concurrency usage.' }),
    limits: z
      .strictObject({
        maxConcurrent: z
          .union([z.int(), z.null().nullable()])
          .openapi({
            description: 'Maximum number of concurrent requests allowed. Null means unlimited.',
          }),
        maxQueued: z
          .union([z.int(), z.null().nullable()])
          .openapi({
            description: 'Maximum number of queued requests allowed. Null means unlimited.',
          }),
      })
      .openapi({
        required: ['maxConcurrent', 'maxQueued'],
        description: 'Concurrency limits for the team.',
      }),
  })
  .openapi({ required: ['object', 'id', 'name', 'concurrency', 'limits'] })
  .openapi('WebsetsTeamInfo')

const AnswerStreamCitationsChunkOutputSchema = z
  .strictObject({
    citations: z
      .array(
        z
          .strictObject({
            title: z.string().openapi({ description: 'The title of the search result.' }),
            url: z.url().openapi({ description: 'The URL of the search result.' }),
            publishedDate: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'An estimate of the creation date, from parsing HTML content. Format is YYYY-MM-DD.',
              }),
            author: z
              .union([z.string(), z.null().nullable()])
              .exactOptional()
              .openapi({ description: 'If available, the author of the content.' }),
            id: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The temporary ID for the document. Useful for the /contents endpoint.',
              }),
            image: z
              .url()
              .exactOptional()
              .openapi({
                description: 'The URL of an image associated with the search result, if available.',
              }),
            favicon: z
              .url()
              .exactOptional()
              .openapi({ description: "The URL of the favicon for the search result's domain." }),
            text: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The full text content of each source. Only present when text contents are requested.',
              }),
          })
          .openapi({ required: ['title', 'url'] }),
      )
      .openapi({ description: 'Search results cited by the final streamed answer.' }),
  })
  .openapi({ required: ['citations'] })
  .openapi('AnswerStreamCitationsChunkOutput')

const AnswerStreamCostChunkOutputSchema = z
  .strictObject({
    costDollars: CostDollarsOutputSchema,
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the request.' }),
  })
  .openapi({ required: ['costDollars'] })
  .openapi('AnswerStreamCostChunkOutput')

const AnswerStreamErrorChunkOutputSchema = z
  .strictObject({
    tag: z.literal('ERROR'),
    payload: z
      .strictObject({
        error: z
          .strictObject({ code: z.int(), message: z.string() })
          .openapi({ required: ['code', 'message'] }),
        requestId: z
          .string()
          .exactOptional()
          .openapi({ description: 'Unique identifier for the request.' }),
      })
      .openapi({ required: ['error'] }),
  })
  .openapi({ required: ['tag', 'payload'] })
  .openapi('AnswerStreamErrorChunkOutput')

const AnswerStreamChunkSchema = z
  .xor([
    AnswerStreamTextDeltaChunkSchema,
    AnswerStreamCitationsChunkOutputSchema,
    AnswerStreamCostChunkOutputSchema,
    AnswerStreamErrorChunkOutputSchema,
  ])
  .openapi({
    description:
      'Schema for each JSON payload emitted in an `/answer` server-sent event stream. Each event is emitted as `data: <json>`.',
  })
  .openapi('AnswerStreamChunk')

const SearchStreamChunkSchema: z.ZodType<SearchStreamChunkType> = z
  .discriminatedUnion('type', [
    SearchStreamTextDeltaChunkOutputSchema,
    SearchStreamGroundingChunkOutputSchema,
    SearchStreamResultsChunkOutputSchema,
    SearchStreamResetChunkOutputSchema,
    SearchStreamDoneChunkOutputSchema,
    SearchStreamErrorChunkOutputSchema,
  ])
  .openapi({
    description:
      'Schema for each JSON payload emitted in a `/search` server-sent event stream. Each event is emitted as `data: <json>` and the stream terminates with `data: [DONE]`, which is not represented by this JSON schema.',
    discriminator: {
      propertyName: 'type',
      mapping: {
        'text-delta': '#/components/schemas/SearchStreamTextDeltaChunkOutput',
        grounding: '#/components/schemas/SearchStreamGroundingChunkOutput',
        results: '#/components/schemas/SearchStreamResultsChunkOutput',
        'stream-reset': '#/components/schemas/SearchStreamResetChunkOutput',
        done: '#/components/schemas/SearchStreamDoneChunkOutput',
        error: '#/components/schemas/SearchStreamErrorChunkOutput',
      },
    },
  })
  .openapi('SearchStreamChunk')

const CreateCriterionParametersSchema = z
  .object({
    description: z
      .string()
      .min(1)
      .max(1000)
      .openapi({ description: 'The description of the criterion' }),
  })
  .openapi({ required: ['description'] })
  .openapi('CreateCriterionParameters')

const CreateEnrichmentParametersSchema = z
  .object({
    description: z
      .string()
      .min(1)
      .max(5000)
      .openapi({
        description:
          'Provide a description of the enrichment task you want to perform to each Webset Item.',
      }),
    format: WebsetEnrichmentFormatSchema.exactOptional().openapi({
      description:
        'Format of the enrichment response.\n\nWe automatically select the best format based on the description. If you want to explicitly specify the format, you can do so here.',
    }),
    options: z
      .array(
        z
          .object({ label: z.string().openapi({ description: 'The label of the option' }) })
          .openapi({ required: ['label'] }),
      )
      .min(1)
      .max(150)
      .exactOptional()
      .openapi({
        description:
          'When the format is options, the different options for the enrichment agent to choose from.',
      }),
    metadata: z
      .record(z.string(), z.string().max(1000))
      .exactOptional()
      .openapi({ description: 'Set of key-value pairs you want to associate with this object.' }),
  })
  .openapi({ required: ['description'] })
  .openapi('CreateEnrichmentParameters')

const CreateWebsetParametersSchema = z
  .object({
    title: z
      .string()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Optional name that appears anywhere the Webset is displayed. Leave empty to have Exa generate one automatically.',
        examples: ['Leading climate tech startups'],
      }),
    search: z
      .object({
        query: z
          .string()
          .min(1)
          .max(5000)
          .openapi({
            description:
              'Natural language search query describing what you are looking for.\n\nBe specific and descriptive about your requirements, characteristics, and any constraints that help narrow down the results.\n\nAny URLs provided will be crawled and used as additional context for the search.',
            examples: [
              'Marketing agencies based in the US, that focus on consumer products.',
              'AI startups in Europe that raised Series A funding in 2024',
              'SaaS companies with 50-200 employees in the fintech space',
            ],
          }),
        count: z
          .number()
          .min(1)
          .default(10)
          .exactOptional()
          .openapi({
            description:
              'Number of Items the Webset will attempt to find.\n\nThe actual number of Items found may be less than this number depending on the search complexity.',
          }),
        entity: EntitySchema.exactOptional().openapi({
          description:
            'Entity the Webset returns results for. Detected from the query when omitted.',
        }),
        criteria: z
          .array(CreateCriterionParametersSchema)
          .min(1)
          .max(5)
          .exactOptional()
          .openapi({
            description:
              'Criteria every Item is evaluated against. Generated from the query when omitted.',
          }),
        maxPeoplePerCompany: z
          .int()
          .min(1)
          .exactOptional()
          .openapi({
            description:
              'Optional soft cap for people searches. When set, the search will try to include at most this many matching people from the same current employer company.',
          }),
        recall: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              "Whether to estimate how many relevant results exist for this search. The estimate is returned in the search's `recall` field.",
          }),
        exclude: z
          .array(
            z
              .object({
                source: z.enum(['import', 'webset']),
                id: z.string().min(1).openapi({ description: 'The ID of the source to exclude.' }),
              })
              .openapi({ required: ['source', 'id'] }),
          )
          .exactOptional()
          .openapi({
            description: "Imports or Websets whose items are left out of this search's results.",
          }),
        scope: z
          .array(
            z
              .object({
                source: z.enum(['import', 'webset']),
                id: z.string().min(1).openapi({ description: 'The ID of the source to search.' }),
                relationship: z
                  .object({
                    definition: z
                      .string()
                      .openapi({
                        description:
                          'What the relationship of the entities you hope to find is relative to the entities contained in the provided source.',
                      }),
                    limit: z.number().min(1).max(10),
                  })
                  .exactOptional()
                  .openapi({ required: ['definition', 'limit'] }),
              })
              .openapi({ required: ['source', 'id'] }),
          )
          .exactOptional()
          .openapi({
            description:
              'Limit the search to specific sources (existing imports or websets). Any results found within these sources matching the search criteria will be included in the Webset.',
          }),
      })
      .exactOptional()
      .openapi({ required: ['query'], description: 'Create initial search for the Webset.' }),
    import: z
      .array(
        z
          .object({
            source: z.enum(['import', 'webset']),
            id: z.string().min(1).openapi({ description: 'The ID of the source to import.' }),
            evaluate: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'When true, items from this import will be evaluated against the search criteria. Requires a search to be provided.',
              }),
          })
          .openapi({ required: ['source', 'id'] }),
      )
      .exactOptional()
      .openapi({ description: 'Import data from existing Websets and Imports into this Webset.' }),
    enrichments: z
      .array(CreateEnrichmentParametersSchema)
      .exactOptional()
      .openapi({
        description: 'Enrichments that extract additional data from each Item added to the Webset.',
      }),
    exclude: z
      .array(
        z
          .object({
            source: z.enum(['import', 'webset']),
            id: z.string().min(1).openapi({ description: 'The ID of the source to exclude.' }),
          })
          .openapi({ required: ['source', 'id'] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Global exclusion sources (existing imports or websets) that apply to all operations within this Webset. Any results found within these sources will be omitted across all search and import operations.',
      }),
    externalId: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({
        description:
          'The external identifier for the webset.\n\nYou can use this to reference the Webset by your own internal identifiers.',
      }),
    metadata: z
      .record(z.string(), z.string().max(1000))
      .exactOptional()
      .openapi({ description: 'Set of key-value pairs you want to associate with this object.' }),
  })
  .openapi({
    examples: [
      {
        search: {
          query: 'Marketing agencies based in the US, that focus on consumer products.',
          count: 10,
        },
      },
    ],
    required: [],
  })
  .openapi('CreateWebsetParameters')

const UpdateWebsetRequestSchema = z
  .object({
    metadata: z
      .record(z.string(), z.string().max(1000))
      .nullable()
      .exactOptional()
      .openapi({ description: 'Set of key-value pairs you want to associate with this object.' }),
    title: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'Optional name that appears anywhere the Webset is displayed.',
        examples: ['Leading climate tech startups'],
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateWebsetRequest')

const CreateWebsetSearchParametersSchema = z
  .object({
    count: z
      .number()
      .min(1)
      .openapi({
        description:
          'Number of Items the Search will attempt to find.\n\nThe actual number of Items found may be less than this number depending on the query complexity.',
      }),
    query: z
      .string()
      .min(1)
      .max(5000)
      .openapi({
        description:
          'Natural language search query describing what you are looking for.\n\nBe specific and descriptive about your requirements, characteristics, and any constraints that help narrow down the results.\n\nAny URLs provided will be crawled and used as additional context for the search.',
        examples: [
          'Marketing agencies based in the US, that focus on consumer products. Get brands worked with and city',
          'AI startups in Europe that raised Series A funding in 2024',
          'SaaS companies with 50-200 employees in the fintech space',
        ],
      }),
    entity: EntitySchema.exactOptional().openapi({
      description: 'Entity the search returns results for. Detected from the query when omitted.',
    }),
    criteria: z
      .array(CreateCriterionParametersSchema)
      .min(1)
      .max(5)
      .exactOptional()
      .openapi({
        description:
          'Criteria every Item is evaluated against. Generated from the query when omitted.',
      }),
    maxPeoplePerCompany: z
      .int()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'Optional soft cap for people searches. When set, the search will try to include at most this many matching people from the same current employer company.',
      }),
    exclude: z
      .array(
        z
          .object({
            source: z.enum(['import', 'webset']),
            id: z.string().min(1).openapi({ description: 'The ID of the source to exclude.' }),
          })
          .openapi({ required: ['source', 'id'] }),
      )
      .exactOptional()
      .openapi({
        description: "Imports or Websets whose items are left out of this search's results.",
      }),
    scope: z
      .array(
        z
          .object({
            source: z.enum(['import', 'webset']),
            id: z.string().min(1).openapi({ description: 'The ID of the source to search.' }),
            relationship: z
              .object({
                definition: z
                  .string()
                  .openapi({
                    description:
                      'What the relationship of the entities you hope to find is relative to the entities contained in the provided source.',
                  }),
                limit: z.number().min(1).max(10),
              })
              .exactOptional()
              .openapi({ required: ['definition', 'limit'] }),
          })
          .openapi({ required: ['source', 'id'] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Limit the search to specific sources (existing imports). Any results found within these sources matching the search criteria will be included in the Webset.',
      }),
    recall: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether to estimate how many relevant results exist for this search. The estimate is returned in the search's `recall` field.",
      }),
    behavior: WebsetSearchBehaviorSchema.default('override')
      .exactOptional()
      .openapi({
        description:
          'How this search interacts with existing items in the Webset:\n\n- **override**: Replace existing items and evaluate all items against new criteria\n- **append**: Add new items to existing ones, keeping items that match the new criteria',
      }),
    metadata: z
      .record(z.string(), z.string().max(1000))
      .exactOptional()
      .openapi({ description: 'Set of key-value pairs you want to associate with this object.' }),
  })
  .openapi({ required: ['count', 'query'] })
  .openapi('CreateWebsetSearchParameters')

const UpdateEnrichmentParametersSchema = z
  .object({
    description: z
      .string()
      .min(1)
      .max(5000)
      .exactOptional()
      .openapi({
        description:
          'Provide a description of the enrichment task you want to perform to each Webset Item.',
      }),
    format: WebsetEnrichmentFormatSchema.exactOptional().openapi({
      description:
        'Format of the enrichment response.\n\nWe automatically select the best format based on the description. If you want to explicitly specify the format, you can do so here.',
    }),
    options: z
      .array(
        z
          .object({ label: z.string().openapi({ description: 'The label of the option' }) })
          .openapi({ required: ['label'] }),
      )
      .min(1)
      .max(150)
      .exactOptional()
      .openapi({
        description:
          'When the format is options, the different options for the enrichment agent to choose from.',
      }),
    metadata: z
      .record(z.string(), z.string().max(1000))
      .nullable()
      .exactOptional()
      .openapi({ description: 'Set of key-value pairs you want to associate with this object.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateEnrichmentParameters')

const PreviewWebsetParametersSchema = z
  .object({
    search: z
      .object({
        query: z
          .string()
          .min(1)
          .max(5000)
          .openapi({
            description:
              'Natural language search query describing what you are looking for.\n\nBe specific and descriptive about your requirements, characteristics, and any constraints that help narrow down the results.',
            examples: [
              'Marketing agencies based in the US, that focus on consumer products. Get brands worked with and city',
              'AI startups in Europe that raised Series A funding in 2024',
              'SaaS companies with 50-200 employees in the fintech space',
            ],
          }),
        entity: EntitySchema.exactOptional().openapi({
          description: 'Entity to search for. Detected from the query when omitted.',
        }),
        count: z
          .number()
          .min(1)
          .max(10)
          .default(10)
          .exactOptional()
          .openapi({
            description: 'When query parameter search=true, the number of preview items to return.',
          }),
      })
      .openapi({ required: ['query'] }),
  })
  .openapi({ required: ['search'] })
  .openapi('PreviewWebsetParameters')

const CreateMonitorParametersSchema = z
  .object({
    websetId: z.string().openapi({ description: 'The id of the Webset' }),
    cadence: MonitorCadenceSchema.openapi({ description: 'How often the monitor will run' }),
    behavior: MonitorBehaviorSchema.openapi({
      description: 'Behavior to perform when monitor runs',
    }),
    metadata: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: ['websetId', 'cadence', 'behavior'] })
  .openapi('CreateMonitorParameters')

const UpdateMonitorSchema = z
  .object({
    metadata: z.record(z.string(), z.string()).exactOptional(),
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({ description: 'The status of the monitor.' }),
    cadence: MonitorCadenceSchema.exactOptional(),
    behavior: MonitorBehaviorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateMonitor')

const CreateImportParametersSchema = z
  .xor([
    z
      .object({
        size: z
          .number()
          .max(50000000)
          .openapi({ description: 'The size of the file in bytes. Maximum size is 50 MB.' }),
        count: z.number().openapi({ description: 'The number of records to import' }),
        title: z.string().exactOptional().openapi({ description: 'The title of the import' }),
        format: z
          .literal('csv')
          .openapi({
            description:
              'The file format. The CSV must include a column that identifies each entity, or the import fails.',
          }),
        metadata: z
          .record(z.string(), z.string().max(1000))
          .exactOptional()
          .openapi({
            description: 'Set of key-value pairs you want to associate with this object.',
          }),
        entity: EntitySchema.openapi({ description: 'The type of entity each row describes.' }),
        csv: z
          .object({
            identifier: z
              .int()
              .min(0)
              .exactOptional()
              .openapi({
                description:
                  'Column containing the key identifier for the entity (e.g. URL, Name, etc.). If not provided, we will try to infer it from the file.',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'When format is `csv`, these are the specific import parameters.',
            required: [],
          }),
      })
      .openapi({ required: ['size', 'count', 'format', 'entity'] }),
  ])
  .openapi({ discriminator: { propertyName: 'format' } })
  .openapi('CreateImportParameters')

const UpdateImportSchema = z
  .object({
    metadata: z.record(z.string(), z.string()).exactOptional(),
    title: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateImport')

const EventTypeSchema = z
  .enum([
    'webset.created',
    'webset.deleted',
    'webset.paused',
    'webset.idle',
    'webset.search.created',
    'webset.search.canceled',
    'webset.search.completed',
    'webset.search.updated',
    'import.created',
    'import.completed',
    'webset.item.created',
    'webset.item.enriched',
    'monitor.created',
    'monitor.updated',
    'monitor.deleted',
    'monitor.run.created',
    'monitor.run.completed',
    'webset.export.created',
    'webset.export.completed',
  ])
  .openapi('EventType')

const CreateWebhookParametersSchema = z
  .object({
    events: z
      .array(EventTypeSchema)
      .min(1)
      .max(19)
      .openapi({ description: 'The events to trigger the webhook' }),
    url: z.url().openapi({ description: 'The URL to send the webhook to' }),
    metadata: z
      .record(z.string(), z.string().max(1000))
      .exactOptional()
      .openapi({ description: 'Set of key-value pairs you want to associate with this object.' }),
  })
  .openapi({ required: ['events', 'url'] })
  .openapi('CreateWebhookParameters')

const UpdateWebhookParametersSchema = z
  .object({
    events: z
      .array(EventTypeSchema)
      .min(1)
      .max(19)
      .exactOptional()
      .openapi({ description: 'The events to trigger the webhook' }),
    url: z.url().exactOptional().openapi({ description: 'The URL to send the webhook to' }),
    metadata: z
      .record(z.string(), z.string().max(1000))
      .exactOptional()
      .openapi({ description: 'Set of key-value pairs you want to associate with this object.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateWebhookParameters')

const ListWebsetsResponseSchema: z.ZodType<ListWebsetsResponseType> = z
  .object({
    data: z.array(WebsetSchema).openapi({ description: 'The list of websets' }),
    hasMore: z
      .boolean()
      .openapi({ description: 'Whether there are more results to paginate through' }),
    nextCursor: z
      .string()
      .nullable()
      .openapi({ description: 'The cursor to paginate through the next set of results' }),
  })
  .openapi({ required: ['data', 'hasMore', 'nextCursor'] })
  .openapi('ListWebsetsResponse')

const GetWebsetResponseSchema: z.ZodType<GetWebsetResponseType> = WebsetSchema.and(
  z
    .object({
      items: z
        .array(WebsetItemSchema)
        .exactOptional()
        .openapi({
          description:
            'When expand query parameter contains `items`, this will contain the items in the webset',
        }),
    })
    .openapi({ required: [] }),
).openapi('GetWebsetResponse')

const ListWebsetItemResponseSchema: z.ZodType<ListWebsetItemResponseType> = z
  .object({
    data: z.array(WebsetItemSchema).openapi({ description: 'The list of webset items' }),
    hasMore: z
      .boolean()
      .openapi({ description: 'Whether there are more Items to paginate through' }),
    nextCursor: z
      .string()
      .nullable()
      .openapi({ description: 'The cursor to paginate through the next set of Items' }),
  })
  .openapi({ required: ['data', 'hasMore', 'nextCursor'] })
  .openapi('ListWebsetItemResponse')

const PreviewWebsetResponseSchema: z.ZodType<PreviewWebsetResponseType> = z
  .object({
    search: z
      .object({
        entity: z
          .xor([
            CompanyEntitySchema,
            PersonEntitySchema,
            ArticleEntitySchema,
            ResearchPaperEntitySchema,
            CustomEntitySchema,
          ])
          .openapi({ description: 'Detected entity from the query.' }),
        criteria: z
          .array(z.object({ description: z.string() }).openapi({ required: ['description'] }))
          .openapi({ description: 'Detected criteria from the query.' }),
      })
      .openapi({ required: ['entity', 'criteria'] }),
    enrichments: z
      .array(
        z
          .object({
            description: z.string().openapi({ description: 'Description of the enrichment.' }),
            format: z
              .enum(['text', 'date', 'number', 'options', 'email', 'phone', 'url'])
              .openapi({ description: 'Format of the enrichment.' }),
            options: z
              .array(
                z
                  .object({ label: z.string().openapi({ description: 'Label of the option.' }) })
                  .openapi({ required: ['label'] }),
              )
              .exactOptional()
              .openapi({
                description: 'When format is options, the options detected from the query.',
              }),
          })
          .openapi({ required: ['description', 'format'] }),
      )
      .openapi({ description: 'Detected enrichments from the query.' }),
    items: z
      .array(WebsetItemPreviewSchema)
      .openapi({ description: 'Preview items matching the search criteria.' }),
  })
  .openapi({ required: ['search', 'enrichments', 'items'] })
  .openapi('PreviewWebsetResponse')

const ListMonitorsResponseSchema = z
  .object({
    data: z.array(MonitorSchema).openapi({ description: 'The list of monitors' }),
    hasMore: z
      .boolean()
      .openapi({ description: 'Whether there are more results to paginate through' }),
    nextCursor: z
      .string()
      .nullable()
      .openapi({ description: 'The cursor to paginate through the next set of results' }),
  })
  .openapi({ required: ['data', 'hasMore', 'nextCursor'] })
  .openapi('ListMonitorsResponse')

const ListMonitorRunsResponseSchema = z
  .object({
    data: z.array(MonitorRunSchema).openapi({ description: 'The list of monitor runs' }),
    hasMore: z
      .boolean()
      .openapi({ description: 'Whether there are more results to paginate through' }),
    nextCursor: z
      .string()
      .nullable()
      .openapi({ description: 'The cursor to paginate through the next set of results' }),
  })
  .openapi({ required: ['data', 'hasMore', 'nextCursor'] })
  .openapi('ListMonitorRunsResponse')

const CreateImportResponseSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique identifier for the Import' }),
    object: z.literal('import').openapi({ description: 'The type of object' }),
    status: z
      .enum(['pending', 'processing', 'completed', 'failed', 'canceled'])
      .openapi({ description: 'The status of the Import' }),
    format: z.enum(['csv', 'webset']).openapi({ description: 'The format of the import.' }),
    entity: EntitySchema.nullable().openapi({
      description: 'The type of entity the import contains.',
    }),
    title: z.string().openapi({ description: 'The title of the import' }),
    count: z.number().openapi({ description: 'The number of entities in the import' }),
    metadata: z
      .record(z.string(), z.string().max(1000))
      .openapi({ description: 'Set of key-value pairs you want to associate with this object.' }),
    failedReason: z
      .enum(['invalid_format', 'invalid_file_content', 'missing_identifier'])
      .nullable()
      .openapi({ description: 'The reason the import failed' }),
    failedAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({ description: 'When the import failed' }),
    failedMessage: z
      .string()
      .nullable()
      .openapi({ description: 'A human readable message of the import failure' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the import was created' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the import was last updated' }),
    uploadUrl: z.string().openapi({ description: 'The URL to upload the file to' }),
    uploadValidUntil: z
      .string()
      .openapi({
        description:
          'The date and time until the upload URL is valid. The upload URL will be valid for 1 hour.',
      }),
  })
  .openapi({
    required: [
      'id',
      'object',
      'status',
      'format',
      'entity',
      'title',
      'count',
      'metadata',
      'failedReason',
      'failedAt',
      'failedMessage',
      'createdAt',
      'updatedAt',
      'uploadUrl',
      'uploadValidUntil',
    ],
    description: 'An Import with the URL to upload your file to.',
  })
  .openapi('CreateImportResponse')

const ListImportsResponseSchema = z
  .object({
    data: z.array(ImportSchema).openapi({ description: 'The list of imports' }),
    hasMore: z
      .boolean()
      .openapi({ description: 'Whether there are more results to paginate through' }),
    nextCursor: z
      .string()
      .nullable()
      .openapi({ description: 'The cursor to paginate through the next set of results' }),
  })
  .openapi({ required: ['data', 'hasMore', 'nextCursor'] })
  .openapi('ListImportsResponse')

const WebhookSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique identifier for the webhook' }),
    object: z.literal('webhook').default('webhook').openapi({ description: 'The type of object' }),
    status: z
      .enum(['active', 'inactive'])
      .openapi({ title: 'WebhookStatus', description: 'The status of the webhook' }),
    events: z
      .array(EventTypeSchema)
      .min(1)
      .openapi({ description: 'The events to trigger the webhook' }),
    url: z.url().openapi({ description: 'The URL to send the webhook to' }),
    secret: z
      .string()
      .nullable()
      .openapi({
        description:
          'The secret to verify the webhook signature. Only returned on Webhook creation.',
      }),
    metadata: z
      .record(z.string(), z.string().max(1000))
      .default({})
      .exactOptional()
      .openapi({ description: 'The metadata of the webhook' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the webhook was created' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the webhook was last updated' }),
  })
  .openapi({
    required: ['id', 'object', 'status', 'events', 'url', 'secret', 'createdAt', 'updatedAt'],
  })
  .openapi('Webhook')

const ListWebhooksResponseSchema = z
  .object({
    data: z.array(WebhookSchema).openapi({ description: 'The list of webhooks' }),
    hasMore: z
      .boolean()
      .openapi({ description: 'Whether there are more results to paginate through' }),
    nextCursor: z
      .string()
      .nullable()
      .openapi({ description: 'The cursor to paginate through the next set of results' }),
  })
  .openapi({ required: ['data', 'hasMore', 'nextCursor'] })
  .openapi('ListWebhooksResponse')

const WebhookAttemptSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique identifier for the webhook attempt' }),
    object: z
      .literal('webhook_attempt')
      .default('webhook_attempt')
      .openapi({ description: 'The type of object' }),
    eventId: z.string().openapi({ description: 'The unique identifier for the event' }),
    eventType: EventTypeSchema.openapi({ description: 'The type of event' }),
    webhookId: z.string().openapi({ description: 'The unique identifier for the webhook' }),
    url: z.string().openapi({ description: 'The URL that was used during the attempt' }),
    successful: z.boolean().openapi({ description: 'Whether the attempt was successful' }),
    responseHeaders: z
      .record(z.string(), z.string())
      .openapi({ description: 'The headers of the response' }),
    responseBody: z.string().nullable().openapi({ description: 'The body of the response' }),
    responseStatusCode: z.number().openapi({ description: 'The status code of the response' }),
    attempt: z.number().openapi({ description: 'The attempt number of the webhook' }),
    attemptedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the webhook attempt was made' }),
  })
  .openapi({
    required: [
      'id',
      'object',
      'eventId',
      'eventType',
      'webhookId',
      'url',
      'successful',
      'responseHeaders',
      'responseBody',
      'responseStatusCode',
      'attempt',
      'attemptedAt',
    ],
  })
  .openapi('WebhookAttempt')

const ListWebhookAttemptsResponseSchema = z
  .object({
    data: z.array(WebhookAttemptSchema).openapi({ description: 'The list of webhook attempts' }),
    hasMore: z
      .boolean()
      .openapi({ description: 'Whether there are more results to paginate through' }),
    nextCursor: z
      .string()
      .nullable()
      .openapi({ description: 'The cursor to paginate through the next set of results' }),
  })
  .openapi({ required: ['data', 'hasMore', 'nextCursor'] })
  .openapi('ListWebhookAttemptsResponse')

const ListEventsResponseSchema: z.ZodType<ListEventsResponseType> = z
  .object({
    data: z.array(EventSchema).openapi({ description: 'The list of events' }),
    hasMore: z
      .boolean()
      .openapi({ description: 'Whether there are more results to paginate through' }),
    nextCursor: z
      .string()
      .nullable()
      .openapi({ description: 'The cursor to paginate through the next set of results' }),
  })
  .openapi({ required: ['data', 'hasMore', 'nextCursor'] })
  .openapi('ListEventsResponse')

const XRequestIdHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description:
      'Unique identifier for the request. Matches the `requestId` field returned in response bodies that carry one.',
    param: { required: false },
  })

const BadRequestResponseResponse = {
  description: 'The request body or query parameters failed validation.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
  headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
}

const UnauthorizedResponseResponse = {
  description: 'The API key is missing or invalid.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
  headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
}

const ForbiddenResponseResponse = {
  description:
    'The team is not permitted to use this endpoint (`TEAM_BLOCKED`), or the feature is not enabled for it (`FEATURE_DISABLED`).',
  content: { 'application/json': { schema: ErrorResponseSchema } },
  headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
}

const TooManyRequestsResponseResponse = {
  description: 'A rate limit for this API key, team, or network was exceeded.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
  headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
}

const InternalServerErrorResponseResponse = {
  description: 'An unexpected error occurred while processing the request.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
  headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
}

const ServiceUnavailableResponseResponse = {
  description:
    'Exa is temporarily over capacity or unavailable. The request was not processed; retry with exponential backoff.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
  headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
}

const PaymentRequiredResponseResponse = {
  description: 'The team is out of credits or a spending budget has been exceeded.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
  headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
}

const NotFoundResponseResponse = {
  description: 'The requested resource does not exist.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
  headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
}

const ConflictResponseResponse = {
  description: 'The request conflicts with the current state of the resource.',
  content: { 'application/json': { schema: ErrorResponseSchema } },
  headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
}

const AcceptHeaderParamsSchema = z
  .enum(['application/json', 'text/event-stream'])
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'Accept',
      schema: {
        description: 'Set to `text/event-stream` to receive server-sent events.',
        type: 'string',
        enum: ['application/json', 'text/event-stream'],
      },
      description: 'Set to `text/event-stream` to receive server-sent events.',
      required: false,
    },
    description: 'Set to `text/event-stream` to receive server-sent events.',
  })

const ExaBetaHeaderParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'Exa-Beta',
      schema: {
        description: 'Comma-separated beta feature tokens for opting into experimental features.',
        type: 'string',
      },
      description: 'Comma-separated beta feature tokens for opting into experimental features.',
      required: false,
    },
    description: 'Comma-separated beta feature tokens for opting into experimental features.',
  })

const LastEventIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'Last-Event-ID',
      schema: {
        description: 'For SSE replay, return only events after this event ID.',
        type: 'string',
      },
      description: 'For SSE replay, return only events after this event ID.',
      required: false,
    },
    description: 'For SSE replay, return only events after this event ID.',
  })

const BatchesBetaHeaderParamsSchema = z
  .literal('batches-2026-06-06')
  .openapi({
    param: {
      in: 'header',
      name: 'Exa-Beta',
      schema: {
        type: 'string',
        enum: ['batches-2026-06-06'],
        description: 'Required beta token for the Batch API.',
      },
      required: true,
      description: 'Required beta token for the Batch API.',
    },
    description: 'Required beta token for the Batch API.',
  })

const XExaQueuedHeaderSchema = z
  .enum(['true', 'false'])
  .exactOptional()
  .openapi({
    description:
      'Whether the request waited in the customer rate-limit queue before being admitted.',
    param: { required: false },
  })

const XExaQueueMsHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description: 'Total milliseconds the request waited in the customer rate-limit queue.',
    param: { required: false },
  })

const ApiKeySecurityScheme = {
  type: 'apiKey',
  name: 'x-api-key',
  in: 'header',
  description:
    'Pass your Exa API key in the x-api-key header. You can also authenticate with Authorization: Bearer <key>.',
}

const BearerSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  description:
    'Pass your Exa API key in the x-api-key header. You can also authenticate with Authorization: Bearer <key>.',
}

export const postSearchRoute = createRoute({
  method: 'post',
  path: '/search',
  summary: 'Search',
  description:
    'Perform a search with an Exa prompt-engineered query and retrieve a list of relevant results. Optionally get contents.',
  operationId: 'search',
  request: {
    body: { content: { 'application/json': { schema: SearchRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SearchResponseSchema },
        'text/event-stream': { schema: SearchStreamChunkSchema },
      },
      headers: z.object({
        'x-request-id': XRequestIdHeaderSchema,
        'x-exa-queued': XExaQueuedHeaderSchema,
        'x-exa-queue-ms': XExaQueueMsHeaderSchema,
      }),
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: {
      description:
        'Payment required. API-key requests receive the standard error envelope when the team is out of credits or a spending budget is exceeded. On x402-priced endpoints, requests without an API key receive an x402 payment challenge with tag `X402_PAYMENT_REQUIRED` that describes how to pay.',
      content: {
        'application/json': { schema: z.xor([ErrorResponseSchema, X402PaymentChallengeSchema]) },
      },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    403: ForbiddenResponseResponse,
    429: TooManyRequestsResponseResponse,
    500: InternalServerErrorResponseResponse,
    503: ServiceUnavailableResponseResponse,
  },
})

export const postContentsRoute = createRoute({
  method: 'post',
  path: '/contents',
  summary: 'Contents',
  operationId: 'getContents',
  request: {
    body: { content: { 'application/json': { schema: ContentsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ContentsResponseSchema } },
      headers: z.object({
        'x-request-id': XRequestIdHeaderSchema,
        'x-exa-queued': XExaQueuedHeaderSchema,
        'x-exa-queue-ms': XExaQueueMsHeaderSchema,
      }),
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: {
      description:
        'Payment required. API-key requests receive the standard error envelope when the team is out of credits or a spending budget is exceeded. On x402-priced endpoints, requests without an API key receive an x402 payment challenge with tag `X402_PAYMENT_REQUIRED` that describes how to pay.',
      content: {
        'application/json': { schema: z.xor([ErrorResponseSchema, X402PaymentChallengeSchema]) },
      },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    403: ForbiddenResponseResponse,
    429: TooManyRequestsResponseResponse,
    500: InternalServerErrorResponseResponse,
    503: ServiceUnavailableResponseResponse,
  },
})

export const postAnswerRoute = createRoute({
  method: 'post',
  path: '/answer',
  summary: 'Answer',
  description:
    'Performs a search based on the query and generates either a direct answer or a detailed summary with citations, depending on the query type.',
  operationId: 'answer',
  request: {
    body: { content: { 'application/json': { schema: AnswerRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: AnswerResponseSchema },
        'text/event-stream': { schema: AnswerStreamChunkSchema },
      },
      headers: z.object({
        'x-request-id': XRequestIdHeaderSchema,
        'x-exa-queued': XExaQueuedHeaderSchema,
        'x-exa-queue-ms': XExaQueueMsHeaderSchema,
      }),
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    403: ForbiddenResponseResponse,
    429: TooManyRequestsResponseResponse,
    500: InternalServerErrorResponseResponse,
    503: ServiceUnavailableResponseResponse,
  },
})

export const postFindSimilarRoute = createRoute({
  method: 'post',
  path: '/findSimilar',
  summary: 'Find similar links',
  description:
    'Find links similar to the provided URL and optionally retrieve their contents. Deprecated: prefer `/search` with a query describing the source.',
  operationId: 'findSimilar',
  request: {
    body: { content: { 'application/json': { schema: FindSimilarRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: FindSimilarResponseSchema } },
      headers: z.object({
        'x-request-id': XRequestIdHeaderSchema,
        Deprecation: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Signals that this operation is deprecated.',
            param: { required: false },
          }),
        'x-exa-queued': XExaQueuedHeaderSchema,
        'x-exa-queue-ms': XExaQueueMsHeaderSchema,
      }),
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    403: ForbiddenResponseResponse,
    429: TooManyRequestsResponseResponse,
    500: InternalServerErrorResponseResponse,
    503: ServiceUnavailableResponseResponse,
  },
  deprecated: true,
})

export const getMonitorsRoute = createRoute({
  method: 'get',
  path: '/monitors',
  tags: ['Monitors'],
  summary: 'List monitors',
  description:
    'Lists all monitors for the authenticated team. Supports filtering by status and cursor-based pagination.',
  operationId: 'listMonitors',
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
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['metadata']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          status: z
            .enum(['active', 'paused', 'disabled'])
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'status',
                schema: {
                  type: 'string',
                  enum: ['active', 'paused', 'disabled'],
                  description: 'Filter monitors by status',
                },
                required: false,
              },
              description: 'Filter monitors by status',
            }),
          cursor: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'cursor',
                schema: {
                  type: 'string',
                  description: 'Pagination cursor from a previous response',
                },
                required: false,
              },
              description: 'Pagination cursor from a previous response',
            }),
          limit: z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(1).max(100),
            )
            .default(50)
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'limit',
                schema: {
                  type: 'integer',
                  minimum: 1,
                  maximum: 100,
                  description: 'Number of results per page',
                  default: 50,
                },
                required: false,
              },
              description: 'Number of results per page',
            }),
          name: z
            .string()
            .max(250)
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'name',
                schema: {
                  type: 'string',
                  maxLength: 250,
                  description: 'Filter monitors by name (case-insensitive substring match)',
                },
                required: false,
              },
              description: 'Filter monitors by name (case-insensitive substring match)',
            }),
          metadata: z
            .record(z.string(), z.string())
            .exactOptional()
            .openapi({
              param: {
                in: 'query',
                name: 'metadata',
                schema: {
                  description:
                    'Filter monitors by metadata key-value pairs (exact match, AND semantics). Use bracket notation: `metadata[key]=value`.',
                  type: 'object',
                  propertyNames: { type: 'string' },
                  additionalProperties: { type: 'string' },
                },
                style: 'deepObject',
                explode: true,
                description:
                  'Filter monitors by metadata key-value pairs (exact match, AND semantics). Use bracket notation: `metadata[key]=value`.',
                required: false,
              },
              description:
                'Filter monitors by metadata key-value pairs (exact match, AND semantics). Use bracket notation: `metadata[key]=value`.',
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'A paginated list of monitors',
      content: { 'application/json': { schema: ListSearchMonitorsResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postMonitorsRoute = createRoute({
  method: 'post',
  path: '/monitors',
  tags: ['Monitors'],
  summary: 'Create a monitor',
  description:
    'Creates a Monitor that runs an Exa search on a schedule and sends new results to your webhook. Each run searches recent content and drops results that match what earlier runs already returned, so your webhook receives only new developments.\n\nThe response includes a `webhookSecret` for verifying webhook signatures. It is returned only once, so store it securely.',
  operationId: 'createMonitor',
  request: {
    body: {
      content: { 'application/json': { schema: CreateSearchMonitorParametersSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The created monitor with webhook secret',
      content: { 'application/json': { schema: CreateSearchMonitorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postMonitorsBatchRoute = createRoute({
  method: 'post',
  path: '/monitors/batch',
  tags: ['Monitors'],
  summary: 'Batch action on monitors',
  description:
    'Deletes, pauses, or unpauses the monitors that match the filter. Deletion is permanent. `dry_run` defaults to `true`, so a request only previews the affected monitors unless you set it to `false`. Repeat the request until `has_more` is `false` to process all matches.',
  operationId: 'batchMonitors',
  request: {
    body: {
      content: { 'application/json': { schema: BatchMonitorsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Batch action result',
      content: { 'application/json': { schema: BatchMonitorsResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getMonitorsIdRoute = createRoute({
  method: 'get',
  path: '/monitors/{id}',
  tags: ['Monitors'],
  summary: 'Get a monitor',
  description: 'Retrieves a single monitor by its ID.',
  operationId: 'getMonitor',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'The monitor ID' },
            required: true,
            description: 'The monitor ID',
          },
          description: 'The monitor ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'The monitor',
      content: { 'application/json': { schema: SearchMonitorSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const deleteMonitorsIdRoute = createRoute({
  method: 'delete',
  path: '/monitors/{id}',
  tags: ['Monitors'],
  summary: 'Delete a monitor',
  description: 'Deletes a monitor. This cannot be undone.',
  operationId: 'deleteMonitor',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'The monitor ID' },
            required: true,
            description: 'The monitor ID',
          },
          description: 'The monitor ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'The deleted monitor',
      content: { 'application/json': { schema: SearchMonitorSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const patchMonitorsIdRoute = createRoute({
  method: 'patch',
  path: '/monitors/{id}',
  tags: ['Monitors'],
  summary: 'Update a monitor',
  description:
    'Updates an existing monitor. All fields are optional. For `search`, you can send a partial object containing only the fields you want to change. Set `trigger` to `null` to remove the schedule.',
  operationId: 'updateMonitor',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'The monitor ID' },
            required: true,
            description: 'The monitor ID',
          },
          description: 'The monitor ID',
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSearchMonitorParametersSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The updated monitor',
      content: { 'application/json': { schema: SearchMonitorSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postMonitorsIdTriggerRoute = createRoute({
  method: 'post',
  path: '/monitors/{id}/trigger',
  tags: ['Monitors'],
  summary: 'Trigger a monitor',
  description:
    'Triggers a run immediately, regardless of the schedule. Works for monitors with status `active` or `paused`.',
  operationId: 'triggerMonitor',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'The monitor ID' },
            required: true,
            description: 'The monitor ID',
          },
          description: 'The monitor ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Whether the monitor was triggered',
      content: { 'application/json': { schema: TriggerSearchMonitorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getMonitorsIdRunsRoute = createRoute({
  method: 'get',
  path: '/monitors/{id}/runs',
  tags: ['Runs'],
  summary: 'List runs',
  description:
    'Lists all runs for a monitor with cursor-based pagination. Runs are returned in reverse chronological order.',
  operationId: 'listRuns',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'The monitor ID' },
            required: true,
            description: 'The monitor ID',
          },
          description: 'The monitor ID',
        }),
    }),
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cursor',
            schema: { type: 'string', description: 'Pagination cursor from a previous response' },
            required: false,
          },
          description: 'Pagination cursor from a previous response',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: {
              type: 'integer',
              minimum: 1,
              maximum: 100,
              description: 'Number of results per page',
              default: 50,
            },
            required: false,
          },
          description: 'Number of results per page',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A paginated list of runs',
      content: { 'application/json': { schema: ListSearchMonitorRunsResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getMonitorsIdRunsRunIdRoute = createRoute({
  method: 'get',
  path: '/monitors/{id}/runs/{runId}',
  tags: ['Runs'],
  summary: 'Get a run',
  description:
    'Retrieves a single run by its ID, including the full output if the run is completed.',
  operationId: 'getRun',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', description: 'The monitor ID' },
            required: true,
            description: 'The monitor ID',
          },
          description: 'The monitor ID',
        }),
      runId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'runId',
            schema: { type: 'string', description: 'The run ID' },
            required: true,
            description: 'The run ID',
          },
          description: 'The run ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'The run',
      content: { 'application/json': { schema: SearchMonitorRunSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getAgentRunsRoute = createRoute({
  method: 'get',
  path: '/agent/runs',
  tags: ['Agent'],
  summary: 'List runs',
  description: 'List Agent runs for your team, ordered from newest to oldest.',
  operationId: 'listAgentRuns',
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
          z.int().min(1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: {
              type: 'integer',
              minimum: 1,
              maximum: 100,
              description: 'Number of results per page',
              default: 20,
            },
            required: false,
          },
          description: 'Number of results per page',
        }),
      cursor: AgentRunIdSchema.openapi({
        param: {
          in: 'query',
          name: 'cursor',
          schema: {
            description:
              'Cursor for pagination. Use the `nextCursor` value from the previous run list response.',
            $ref: '#/components/schemas/AgentRunId',
          },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Paginated Agent runs',
      content: { 'application/json': { schema: AgentRunListSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    400: {
      description: 'Invalid request.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    401: {
      description: 'Team context or authentication was not found.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    403: ForbiddenResponseResponse,
    500: {
      description: 'Server error or run timeout.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
  },
})

export const postAgentRunsRoute = createRoute({
  method: 'post',
  path: '/agent/runs',
  tags: ['Agent'],
  summary: 'Create a run',
  description:
    'Create an asynchronous Agent run. By default, the API returns the run object immediately. Set `Accept: text/event-stream` to stream run lifecycle events until the run reaches a terminal status.',
  operationId: 'createAgentRun',
  request: {
    headers: z.object({ Accept: AcceptHeaderParamsSchema, 'Exa-Beta': ExaBetaHeaderParamsSchema }),
    body: {
      content: { 'application/json': { schema: CreateAgentRunRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Agent run created',
      content: {
        'application/json': { schema: AgentRunSchema },
        'text/event-stream': { schema: AgentRunEventSchema },
      },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    400: {
      description: 'Invalid request.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    401: {
      description: 'Team context or authentication was not found.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    403: ForbiddenResponseResponse,
    429: {
      description: 'Agent run concurrency limit reached.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    500: {
      description: 'Server error or run timeout.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
  },
})

export const getAgentRunsIdRoute = createRoute({
  method: 'get',
  path: '/agent/runs/{id}',
  tags: ['Agent'],
  summary: 'Get a run',
  description: 'Retrieve a single Agent run by ID.',
  operationId: 'getAgentRun',
  request: {
    params: z.object({
      id: AgentRunIdSchema.openapi({
        param: {
          in: 'path',
          name: 'id',
          schema: { description: 'Agent run ID.', $ref: '#/components/schemas/AgentRunId' },
          required: true,
          description: 'Agent run ID.',
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Agent run',
      content: { 'application/json': { schema: AgentRunSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    400: {
      description: 'Invalid request.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    401: {
      description: 'Team context or authentication was not found.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    403: ForbiddenResponseResponse,
    404: {
      description: 'Run not found.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    429: {
      description: 'Agent run concurrency limit reached.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    500: {
      description: 'Server error or run timeout.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
  },
})

export const deleteAgentRunsIdRoute = createRoute({
  method: 'delete',
  path: '/agent/runs/{id}',
  tags: ['Agent'],
  summary: 'Delete a run',
  description: 'Delete a stored Agent run.',
  operationId: 'deleteAgentRun',
  request: {
    params: z.object({
      id: AgentRunIdSchema.openapi({
        param: {
          in: 'path',
          name: 'id',
          schema: { description: 'Agent run ID.', $ref: '#/components/schemas/AgentRunId' },
          required: true,
          description: 'Agent run ID.',
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Agent run deleted',
      content: { 'application/json': { schema: DeleteAgentRunResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    400: {
      description: 'Invalid request.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    401: {
      description: 'Team context or authentication was not found.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    403: ForbiddenResponseResponse,
    404: {
      description: 'Run not found.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    429: {
      description: 'Agent run concurrency limit reached.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    500: {
      description: 'Server error or run timeout.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
  },
})

export const postAgentRunsIdCancelRoute = createRoute({
  method: 'post',
  path: '/agent/runs/{id}/cancel',
  tags: ['Agent'],
  summary: 'Cancel a run',
  description:
    'Cancel a queued or running Agent run immediately without returning any results. You are billed for usage accrued before cancellation. If the run has already reached a terminal status, the API returns the existing run.',
  operationId: 'cancelAgentRun',
  request: {
    params: z.object({
      id: AgentRunIdSchema.openapi({
        param: {
          in: 'path',
          name: 'id',
          schema: { description: 'Agent run ID.', $ref: '#/components/schemas/AgentRunId' },
          required: true,
          description: 'Agent run ID.',
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Agent run',
      content: { 'application/json': { schema: AgentRunSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    400: {
      description: 'Invalid request.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    401: {
      description: 'Team context or authentication was not found.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    403: ForbiddenResponseResponse,
    404: {
      description: 'Run not found.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    429: {
      description: 'Agent run concurrency limit reached.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    500: {
      description: 'Server error or run timeout.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
  },
})

export const postAgentRunsIdStopRoute = createRoute({
  method: 'post',
  path: '/agent/runs/{id}/stop',
  tags: ['Agent'],
  summary: 'Stop a run',
  description:
    'Complete a running Agent run early, returning the results gathered so far. You are billed for usage accrued before the stop. Currently supported only for `ultra` effort runs. If the run has already reached a terminal status, the API returns the existing run.',
  operationId: 'stopAgentRun',
  request: {
    params: z.object({
      id: AgentRunIdSchema.openapi({
        param: {
          in: 'path',
          name: 'id',
          schema: { description: 'Agent run ID.', $ref: '#/components/schemas/AgentRunId' },
          required: true,
          description: 'Agent run ID.',
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Agent run',
      content: { 'application/json': { schema: AgentRunSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    400: {
      description: 'Invalid request.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    401: {
      description: 'Team context or authentication was not found.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    403: ForbiddenResponseResponse,
    404: {
      description: 'Run not found.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    429: {
      description: 'Agent run concurrency limit reached.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    500: {
      description: 'Server error or run timeout.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
  },
})

export const getAgentRunsIdEventsRoute = createRoute({
  method: 'get',
  path: '/agent/runs/{id}/events',
  tags: ['Agent'],
  summary: 'List run events',
  description:
    'List stored events for an Agent run. Set `Accept: text/event-stream` to replay stored events as server-sent events. Use `cursor` for JSON pagination or `Last-Event-ID` for SSE replay.',
  operationId: 'listAgentRunEvents',
  request: {
    params: z.object({
      id: AgentRunIdSchema.openapi({
        param: {
          in: 'path',
          name: 'id',
          schema: { description: 'Agent run ID.', $ref: '#/components/schemas/AgentRunId' },
          required: true,
          description: 'Agent run ID.',
        },
      }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: {
              type: 'integer',
              minimum: 1,
              maximum: 100,
              description: 'Number of results per page',
              default: 20,
            },
            required: false,
          },
          description: 'Number of results per page',
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cursor',
            schema: {
              type: 'string',
              description:
                'Cursor for pagination. Use the `nextCursor` value from the previous event list response.',
            },
            required: false,
          },
          description:
            'Cursor for pagination. Use the `nextCursor` value from the previous event list response.',
        }),
    }),
    headers: z.object({
      Accept: AcceptHeaderParamsSchema,
      'Last-Event-ID': LastEventIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Agent run events',
      content: {
        'application/json': { schema: AgentRunEventListSchema },
        'text/event-stream': { schema: AgentRunEventSchema },
      },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    400: {
      description: 'Invalid request.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    401: {
      description: 'Team context or authentication was not found.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    403: ForbiddenResponseResponse,
    404: {
      description: 'Run not found.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    429: {
      description: 'Agent run concurrency limit reached.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    500: {
      description: 'Server error or run timeout.',
      content: { 'application/json': { schema: AgentErrorResponseSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
  },
})

export const getBatchesRoute = createRoute({
  method: 'get',
  path: '/batches',
  tags: ['Batches'],
  summary: 'List batches',
  description: 'List batches for your team, ordered from newest to oldest.',
  operationId: 'listBatches',
  request: {
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cursor',
            schema: { type: 'string', description: 'Pagination cursor from a previous response' },
            required: false,
          },
          description: 'Pagination cursor from a previous response',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: {
              type: 'integer',
              minimum: 1,
              description:
                'Maximum number of batches to return per page. Defaults to 100 when omitted; there is no upper bound.',
              default: 100,
            },
            required: false,
          },
          description:
            'Maximum number of batches to return per page. Defaults to 100 when omitted; there is no upper bound.',
        }),
      status: z
        .literal('completed')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            schema: {
              type: 'string',
              const: 'completed',
              description:
                'Return only completed batches, ordered by expiry. Send it on every page request when paginating.',
            },
            required: false,
          },
          description:
            'Return only completed batches, ordered by expiry. Send it on every page request when paginating.',
        }),
    }),
    headers: z.object({ 'Exa-Beta': BatchesBetaHeaderParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BatchListSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postBatchesRoute = createRoute({
  method: 'post',
  path: '/batches',
  tags: ['Batches'],
  summary: 'Create a batch',
  description:
    'Create a batch of requests to run asynchronously. Each request is dispatched to its target route and results are made available for download when the batch completes.',
  operationId: 'createBatch',
  request: {
    headers: z.object({ 'Exa-Beta': BatchesBetaHeaderParamsSchema }),
    body: { content: { 'application/json': { schema: CreateBatchRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BatchSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getBatchesIdRoute = createRoute({
  method: 'get',
  path: '/batches/{id}',
  tags: ['Batches'],
  summary: 'Get a batch',
  description: 'Retrieve a single batch by ID.',
  operationId: 'getBatch',
  request: {
    params: z.object({
      id: z
        .string()
        .min(1)
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', minLength: 1, description: 'Batch ID.' },
            required: true,
            description: 'Batch ID.',
          },
          description: 'Batch ID.',
        }),
    }),
    headers: z.object({ 'Exa-Beta': BatchesBetaHeaderParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BatchSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const deleteBatchesIdRoute = createRoute({
  method: 'delete',
  path: '/batches/{id}',
  tags: ['Batches'],
  summary: 'Delete a batch',
  description: 'Soft-delete a batch in a terminal status.',
  operationId: 'deleteBatch',
  request: {
    params: z.object({
      id: z
        .string()
        .min(1)
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', minLength: 1, description: 'Batch ID.' },
            required: true,
            description: 'Batch ID.',
          },
          description: 'Batch ID.',
        }),
    }),
    headers: z.object({ 'Exa-Beta': BatchesBetaHeaderParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DeletedBatchSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    409: ConflictResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postBatchesIdCancelRoute = createRoute({
  method: 'post',
  path: '/batches/{id}/cancel',
  tags: ['Batches'],
  summary: 'Cancel a batch',
  description:
    'Request cancellation of a batch. The batch stops scheduling new requests and drains in-flight work before settling to `cancelled`. Cancelling a batch that is already `cancelling` or `cancelled` is idempotent and returns the batch unchanged. A batch that has already reached a terminal status (`completed` or `expired`) cannot be cancelled and the request fails with a 409.',
  operationId: 'cancelBatch',
  request: {
    params: z.object({
      id: z
        .string()
        .min(1)
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string', minLength: 1, description: 'Batch ID.' },
            required: true,
            description: 'Batch ID.',
          },
          description: 'Batch ID.',
        }),
    }),
    headers: z.object({ 'Exa-Beta': BatchesBetaHeaderParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BatchSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    403: ForbiddenResponseResponse,
    404: NotFoundResponseResponse,
    409: ConflictResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getV0TeamsMeRoute = createRoute({
  method: 'get',
  path: '/v0/teams/me',
  tags: ['Teams'],
  summary: 'Get team info',
  description:
    'Returns information about the authenticated team, including current concurrency usage and limits.',
  operationId: 'teams-me-get',
  responses: {
    200: {
      description: 'Team information retrieved successfully',
      content: { 'application/json': { schema: WebsetsTeamInfoSchema } },
      headers: z.object({ 'x-request-id': XRequestIdHeaderSchema }),
    },
  },
})

export const getV0WebsetsRoute = createRoute({
  method: 'get',
  path: '/v0/websets',
  tags: ['Websets'],
  summary: 'List all Websets',
  description:
    'Returns a list of Websets.\n\nYou can paginate through the results using the `cursor` parameter.\n\nYou can filter results using the `search` parameter to find Websets by ID, external ID, or title.',
  operationId: 'websets-list',
  request: {
    query: z.object({
      cursor: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cursor',
            schema: { minLength: 1, type: 'string' },
            required: false,
            description: 'The cursor to paginate through the results',
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { default: 25, minimum: 1, maximum: 100, type: 'number' },
            required: false,
            description: 'The number of Websets to return',
          },
        }),
      search: z
        .string()
        .min(2)
        .max(50)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'search',
            schema: { minLength: 2, maxLength: 50, type: 'string' },
            required: false,
            description: 'Search term to filter Websets by ID, external ID, or title',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of Websets',
      content: { 'application/json': { schema: ListWebsetsResponseSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const postV0WebsetsRoute = createRoute({
  method: 'post',
  path: '/v0/websets',
  tags: ['Websets'],
  summary: 'Create a Webset',
  description:
    'Creates a new Webset with optional search, import, and enrichment configurations. The Webset will automatically begin processing once created.\n\nYou can specify an `externalId` to reference the Webset with your own identifiers for easier integration.',
  operationId: 'websets-create',
  request: {
    body: {
      content: { 'application/json': { schema: CreateWebsetParametersSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Webset created',
      content: { 'application/json': { schema: WebsetSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
    409: {
      description: 'Webset with this externalId already exists',
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const getV0WebsetsIdRoute = createRoute({
  method: 'get',
  path: '/v0/websets/{id}',
  tags: ['Websets'],
  summary: 'Get a Webset',
  description:
    'Returns a Webset by `id` or `externalId`, including its status, searches, imports, enrichments, and monitors.\n\nPass `expand=items` to include up to the first 100 items in the response.',
  operationId: 'websets-get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'The id or externalId of the Webset.',
            required: true,
          },
        }),
    }),
    query: z.object({
      expand: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.literal('items')),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'expand',
            schema: { items: { enum: ['items'], type: 'string' }, type: 'array' },
            required: false,
            description: 'Expand the response with the specified resources',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Webset',
      content: { 'application/json': { schema: GetWebsetResponseSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
    404: {
      description: 'Webset not found',
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const postV0WebsetsIdRoute = createRoute({
  method: 'post',
  path: '/v0/websets/{id}',
  tags: ['Websets'],
  summary: 'Update a Webset',
  description:
    'Updates the `title` or `metadata` of a Webset. Searches, imports, and enrichments are managed through their own endpoints.',
  operationId: 'websets-update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'The id or externalId of the Webset',
            required: true,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateWebsetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Webset updated',
      content: { 'application/json': { schema: WebsetSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
    404: {
      description: 'Webset not found',
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const deleteV0WebsetsIdRoute = createRoute({
  method: 'delete',
  path: '/v0/websets/{id}',
  tags: ['Websets'],
  summary: 'Delete a Webset',
  description:
    'Deletes a Webset.\n\nOnce deleted, the Webset and all its Items will no longer be available.',
  operationId: 'websets-delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'The id or externalId of the Webset',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Webset deleted',
      content: { 'application/json': { schema: WebsetSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
    404: {
      description: 'Webset not found',
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const postV0WebsetsIdCancelRoute = createRoute({
  method: 'post',
  path: '/v0/websets/{id}/cancel',
  tags: ['Websets'],
  summary: 'Cancel a running Webset',
  description:
    'Cancels all operations being performed on a Webset.\n\nAny enrichment or search will be stopped and the Webset will be marked as `idle`.',
  operationId: 'websets-cancel',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'The id or externalId of the Webset',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Webset canceled',
      content: { 'application/json': { schema: WebsetSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const postV0WebsetsWebsetSearchesRoute = createRoute({
  method: 'post',
  path: '/v0/websets/{webset}/searches',
  tags: ['Searches'],
  summary: 'Create a Search',
  description:
    'Creates a new Search for the Webset.\n\nThe default behavior is to reuse the previous Search results and evaluate them against the new criteria.',
  operationId: 'websets-searches-create',
  request: {
    params: z.object({
      webset: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'webset',
            schema: { type: 'string' },
            description: 'The id of the Webset',
            required: true,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateWebsetSearchParametersSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Webset Search created',
      content: { 'application/json': { schema: WebsetSearchSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const getV0WebsetsWebsetSearchesIdRoute = createRoute({
  method: 'get',
  path: '/v0/websets/{webset}/searches/{id}',
  tags: ['Searches'],
  summary: 'Get a Search',
  description: 'Gets a Search by id',
  operationId: 'websets-searches-get',
  request: {
    params: z.object({
      webset: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'webset',
            schema: { type: 'string' },
            description: 'The id of the Webset',
            required: true,
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'The id of the Search',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Search retrieved',
      content: { 'application/json': { schema: WebsetSearchSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const postV0WebsetsWebsetSearchesIdCancelRoute = createRoute({
  method: 'post',
  path: '/v0/websets/{webset}/searches/{id}/cancel',
  tags: ['Searches'],
  summary: 'Cancel a running Search',
  description:
    'Cancels a currently running Search.\n\nYou can cancel all searches at once by using the `websets/:webset/cancel` endpoint.',
  operationId: 'websets-searches-cancel',
  request: {
    params: z.object({
      webset: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'webset',
            schema: { type: 'string' },
            description: 'The id of the Webset',
            required: true,
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'The id of the Search',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Search canceled',
      content: { 'application/json': { schema: WebsetSearchSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const postV0WebsetsWebsetEnrichmentsRoute = createRoute({
  method: 'post',
  path: '/v0/websets/{webset}/enrichments',
  tags: ['Enrichments'],
  summary: 'Create an Enrichment',
  description: 'Create an Enrichment for a Webset.',
  operationId: 'websets-enrichments-create',
  request: {
    params: z.object({
      webset: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'webset',
            schema: { type: 'string' },
            description: 'The id or externalId of the Webset',
            required: true,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateEnrichmentParametersSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Enrichment created',
      content: { 'application/json': { schema: WebsetEnrichmentSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const getV0WebsetsWebsetEnrichmentsIdRoute = createRoute({
  method: 'get',
  path: '/v0/websets/{webset}/enrichments/{id}',
  tags: ['Enrichments'],
  summary: 'Get an Enrichment',
  description:
    'Returns an Enrichment configured on a Webset, including its status, description, format, and options.',
  operationId: 'websets-enrichments-get',
  request: {
    params: z.object({
      webset: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'webset',
            schema: { type: 'string' },
            description: 'The id or externalId of the Webset',
            required: true,
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'The id of the Enrichment',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Enrichment',
      content: { 'application/json': { schema: WebsetEnrichmentSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const deleteV0WebsetsWebsetEnrichmentsIdRoute = createRoute({
  method: 'delete',
  path: '/v0/websets/{webset}/enrichments/{id}',
  tags: ['Enrichments'],
  summary: 'Delete an Enrichment',
  description:
    'When deleting an Enrichment, any running enrichments will be canceled and all existing `enrichment_result` generated by this Enrichment will no longer be available.',
  operationId: 'websets-enrichments-delete',
  request: {
    params: z.object({
      webset: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'webset',
            schema: { type: 'string' },
            description: 'The id or externalId of the Webset',
            required: true,
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'The id of the Enrichment',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Enrichment deleted',
      content: { 'application/json': { schema: WebsetEnrichmentSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const patchV0WebsetsWebsetEnrichmentsIdRoute = createRoute({
  method: 'patch',
  path: '/v0/websets/{webset}/enrichments/{id}',
  tags: ['Enrichments'],
  summary: 'Update an Enrichment',
  description: 'Update an Enrichment configuration for a Webset.',
  operationId: 'websets-enrichments-update',
  request: {
    params: z.object({
      webset: z
        .string()
        .openapi({
          param: { in: 'path', name: 'webset', schema: { type: 'string' }, required: true },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', schema: { type: 'string' }, required: true } }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateEnrichmentParametersSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const postV0WebsetsWebsetEnrichmentsIdCancelRoute = createRoute({
  method: 'post',
  path: '/v0/websets/{webset}/enrichments/{id}/cancel',
  tags: ['Enrichments'],
  summary: 'Cancel a running Enrichment',
  description:
    'All running enrichments will be canceled. You can not resume an Enrichment after it has been canceled.',
  operationId: 'websets-enrichments-cancel',
  request: {
    params: z.object({
      webset: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'webset',
            schema: { type: 'string' },
            description: 'The id or externalId of the Webset',
            required: true,
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'The id of the Enrichment',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Enrichment cancelled',
      content: { 'application/json': { schema: WebsetEnrichmentSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const getV0WebsetsWebsetItemsIdRoute = createRoute({
  method: 'get',
  path: '/v0/websets/{webset}/items/{id}',
  tags: ['Items'],
  summary: 'Get an Item',
  description: 'Returns a Webset Item.',
  operationId: 'websets-items-get',
  request: {
    params: z.object({
      webset: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'webset',
            schema: { type: 'string' },
            description: 'The id or externalId of the Webset',
            required: true,
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'The id of the Webset item',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Webset Item',
      content: { 'application/json': { schema: WebsetItemSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const deleteV0WebsetsWebsetItemsIdRoute = createRoute({
  method: 'delete',
  path: '/v0/websets/{webset}/items/{id}',
  tags: ['Items'],
  summary: 'Delete an Item',
  description:
    'Deletes an Item from the Webset.\n\nThis will cancel any enrichment process for it.',
  operationId: 'websets-items-delete',
  request: {
    params: z.object({
      webset: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'webset',
            schema: { type: 'string' },
            description: 'The id or externalId of the Webset',
            required: true,
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'The id of the Webset item',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Webset Item deleted',
      content: { 'application/json': { schema: WebsetItemSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const getV0WebsetsWebsetItemsRoute = createRoute({
  method: 'get',
  path: '/v0/websets/{webset}/items',
  tags: ['Items'],
  summary: 'List all Items for a Webset',
  description:
    'Returns a list of Webset Items.\n\nYou can paginate through the Items using the `cursor` parameter.',
  operationId: 'websets-items-list',
  request: {
    params: z.object({
      webset: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'webset',
            schema: { type: 'string' },
            description: 'The id or externalId of the Webset',
            required: true,
          },
        }),
    }),
    query: z.object({
      cursor: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cursor',
            schema: { minLength: 1, type: 'string' },
            required: false,
            description: 'The cursor to paginate through the results',
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { default: 20, minimum: 1, maximum: 100, type: 'integer' },
            required: false,
            description: 'The number of results to return',
          },
        }),
      sourceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sourceId',
            schema: { type: 'string' },
            required: false,
            description: 'The id of the source',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Webset Items',
      content: { 'application/json': { schema: ListWebsetItemResponseSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const postV0WebsetsPreviewRoute = createRoute({
  method: 'post',
  path: '/v0/websets/preview',
  tags: ['Websets Preview'],
  summary: 'Preview a webset',
  description:
    'Returns how a search query will be interpreted before you create a Webset, including the detected entity, generated criteria, and suggested enrichments.',
  operationId: 'websets-preview',
  request: {
    query: z.object({
      search: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'search',
            schema: { type: 'boolean' },
            required: false,
            description: 'Whether you want to search for a preview list of items or not',
          },
        }),
    }),
    body: {
      description: 'Search parameters',
      content: { 'application/json': { schema: PreviewWebsetParametersSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Preview of the webset',
      content: { 'application/json': { schema: PreviewWebsetResponseSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
    422: {
      description: 'Unable to detect entity or criteria from query',
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const getV0MonitorsRoute = createRoute({
  method: 'get',
  path: '/v0/monitors',
  tags: ['Monitors'],
  summary: 'List Monitors',
  description: 'Lists all monitors for the Webset.',
  operationId: 'monitors-list',
  request: {
    query: z.object({
      cursor: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cursor',
            schema: { minLength: 1, type: 'string' },
            required: false,
            description: 'The cursor to paginate through the results',
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(200),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { default: 25, minimum: 1, maximum: 200, type: 'integer' },
            required: false,
            description: 'The number of results to return',
          },
        }),
      websetId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'websetId',
            schema: { type: 'string' },
            required: false,
            description: 'The id of the Webset to list monitors for',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of monitors',
      content: { 'application/json': { schema: ListMonitorsResponseSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const postV0MonitorsRoute = createRoute({
  method: 'post',
  path: '/v0/monitors',
  tags: ['Monitors'],
  summary: 'Create a Monitor',
  description:
    'Creates a Monitor that searches for new Items for a Webset on a `cron` schedule in the given `timezone`.',
  operationId: 'monitors-create',
  request: {
    body: {
      content: { 'application/json': { schema: CreateMonitorParametersSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Monitor created successfully',
      content: { 'application/json': { schema: MonitorSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const getV0MonitorsIdRoute = createRoute({
  method: 'get',
  path: '/v0/monitors/{id}',
  tags: ['Monitors'],
  summary: 'Get Monitor',
  description: 'Gets a specific monitor.',
  operationId: 'monitors-get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'The id of the Monitor',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Monitor details',
      content: { 'application/json': { schema: MonitorSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const deleteV0MonitorsIdRoute = createRoute({
  method: 'delete',
  path: '/v0/monitors/{id}',
  tags: ['Monitors'],
  summary: 'Delete Monitor',
  description: 'Deletes a monitor.',
  operationId: 'monitors-delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'The id of the Monitor',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Monitor deleted successfully',
      content: { 'application/json': { schema: MonitorSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const patchV0MonitorsIdRoute = createRoute({
  method: 'patch',
  path: '/v0/monitors/{id}',
  tags: ['Monitors'],
  summary: 'Update Monitor',
  description: 'Updates a monitor configuration.',
  operationId: 'monitors-update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'The id of the Monitor',
            required: true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateMonitorSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Monitor updated successfully',
      content: { 'application/json': { schema: MonitorSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const getV0MonitorsMonitorRunsRoute = createRoute({
  method: 'get',
  path: '/v0/monitors/{monitor}/runs',
  tags: ['Monitors Runs'],
  summary: 'List Monitor Runs',
  description: 'Lists all runs for the Monitor.',
  operationId: 'monitors-runs-list',
  request: {
    params: z.object({
      monitor: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'monitor',
            schema: { type: 'string' },
            description: 'The id of the Monitor to list runs for',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of monitor runs',
      content: { 'application/json': { schema: ListMonitorRunsResponseSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const getV0MonitorsMonitorRunsIdRoute = createRoute({
  method: 'get',
  path: '/v0/monitors/{monitor}/runs/{id}',
  tags: ['Monitors Runs'],
  summary: 'Get Monitor Run',
  description: 'Gets a specific monitor run.',
  operationId: 'monitors-runs-get',
  request: {
    params: z.object({
      monitor: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'monitor',
            schema: { type: 'string' },
            description: 'The id of the Monitor to get the run for',
            required: true,
          },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', schema: { type: 'string' }, required: true } }),
    }),
  },
  responses: {
    200: {
      description: 'Monitor run details',
      content: { 'application/json': { schema: MonitorRunSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const getV0ImportsRoute = createRoute({
  method: 'get',
  path: '/v0/imports',
  tags: ['Imports'],
  summary: 'List Imports',
  description: 'Lists all imports for the Webset.',
  operationId: 'imports-list',
  request: {
    query: z.object({
      cursor: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cursor',
            schema: { minLength: 1, type: 'string' },
            required: false,
            description: 'The cursor to paginate through the results',
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(200),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { default: 25, minimum: 1, maximum: 200, type: 'integer' },
            required: false,
            description: 'The number of results to return',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of imports',
      content: { 'application/json': { schema: ListImportsResponseSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const postV0ImportsRoute = createRoute({
  method: 'post',
  path: '/v0/imports',
  tags: ['Imports'],
  summary: 'Create an Import',
  description:
    'Creates an Import for your own data. Upload the file to the returned `uploadUrl` before `uploadValidUntil`, 1 hour after creation. Use an Import to enrich its records, to search within them with `scope`, or to leave them out of searches with `exclude`.',
  operationId: 'imports-create',
  request: {
    body: {
      content: { 'application/json': { schema: CreateImportParametersSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Import created successfully',
      content: { 'application/json': { schema: CreateImportResponseSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const getV0ImportsIdRoute = createRoute({
  method: 'get',
  path: '/v0/imports/{id}',
  tags: ['Imports'],
  summary: 'Get Import',
  description: 'Gets a specific import.',
  operationId: 'imports-get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'The id of the Import',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Import details',
      content: { 'application/json': { schema: ImportSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const deleteV0ImportsIdRoute = createRoute({
  method: 'delete',
  path: '/v0/imports/{id}',
  tags: ['Imports'],
  summary: 'Delete Import',
  description: 'Deletes a import.',
  operationId: 'imports-delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'The id of the Import',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Import deleted successfully',
      content: { 'application/json': { schema: ImportSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const patchV0ImportsIdRoute = createRoute({
  method: 'patch',
  path: '/v0/imports/{id}',
  tags: ['Imports'],
  summary: 'Update Import',
  description: 'Updates a import configuration.',
  operationId: 'imports-update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'The id of the Import',
            required: true,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateImportSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Import updated successfully',
      content: { 'application/json': { schema: ImportSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const getV0WebhooksRoute = createRoute({
  method: 'get',
  path: '/v0/webhooks',
  tags: ['Webhooks'],
  summary: 'List webhooks',
  description:
    'Returns the active Webhooks for your team.\n\nYou can paginate through the results using the `cursor` parameter.',
  operationId: 'webhooks-list',
  request: {
    query: z.object({
      cursor: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cursor',
            schema: { minLength: 1, type: 'string' },
            required: false,
            description: 'The cursor to paginate through the results',
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(200),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { default: 25, minimum: 1, maximum: 200, type: 'integer' },
            required: false,
            description: 'The number of results to return',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of webhooks',
      content: { 'application/json': { schema: ListWebhooksResponseSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const postV0WebhooksRoute = createRoute({
  method: 'post',
  path: '/v0/webhooks',
  tags: ['Webhooks'],
  summary: 'Create a Webhook',
  description:
    'Creates a Webhook that delivers the selected events to your URL as they occur.\n\nThe response includes the signing `secret` used to verify deliveries; it is only returned on creation.',
  operationId: 'webhooks-create',
  request: {
    body: {
      content: { 'application/json': { schema: CreateWebhookParametersSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Webhook',
      content: { 'application/json': { schema: WebhookSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const getV0WebhooksIdRoute = createRoute({
  method: 'get',
  path: '/v0/webhooks/{id}',
  tags: ['Webhooks'],
  summary: 'Get a Webhook',
  description:
    'Returns a Webhook by id, including its status, subscribed events, target URL, and metadata. The signing `secret` is not returned.',
  operationId: 'webhooks-get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'The id of the webhook',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Webhook',
      content: { 'application/json': { schema: WebhookSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
    404: {
      description: 'Webhook not found',
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const deleteV0WebhooksIdRoute = createRoute({
  method: 'delete',
  path: '/v0/webhooks/{id}',
  tags: ['Webhooks'],
  summary: 'Delete a Webhook',
  description:
    'Deletes a Webhook. Its status becomes `inactive`, which stops future webhook deliveries to its URL.',
  operationId: 'webhooks-delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'The id of the webhook',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Webhook',
      content: { 'application/json': { schema: WebhookSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
    404: {
      description: 'Webhook not found',
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const patchV0WebhooksIdRoute = createRoute({
  method: 'patch',
  path: '/v0/webhooks/{id}',
  tags: ['Webhooks'],
  summary: 'Update a Webhook',
  description:
    'Updates the target URL, subscribed events, or metadata of a Webhook. Omitted fields are left unchanged.',
  operationId: 'webhooks-update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'The id of the webhook',
            required: true,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateWebhookParametersSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Webhook',
      content: { 'application/json': { schema: WebhookSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
    404: {
      description: 'Webhook not found',
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const getV0WebhooksIdAttemptsRoute = createRoute({
  method: 'get',
  path: '/v0/webhooks/{id}/attempts',
  tags: ['Webhooks Attempts'],
  summary: 'List webhook attempts',
  description: 'List all attempts made by a Webhook ordered in descending order.',
  operationId: 'webhooks-attempts-list',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'The ID of the webhook',
            required: true,
          },
        }),
    }),
    query: z.object({
      cursor: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cursor',
            schema: { minLength: 1, type: 'string' },
            required: false,
            description: 'The cursor to paginate through the results',
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(200),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { default: 25, minimum: 1, maximum: 200, type: 'integer' },
            required: false,
            description: 'The number of results to return',
          },
        }),
      eventType: EventTypeSchema.openapi({
        param: {
          in: 'query',
          name: 'eventType',
          schema: { $ref: '#/components/schemas/EventType' },
          required: false,
          description: 'The type of event to filter by',
        },
      }).exactOptional(),
      successful: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'successful',
            schema: { type: 'boolean' },
            required: false,
            description: 'Filter attempts by their success status',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of webhook attempts',
      content: { 'application/json': { schema: ListWebhookAttemptsResponseSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const getV0EventsRoute = createRoute({
  method: 'get',
  path: '/v0/events',
  tags: ['Events'],
  summary: 'List all Events',
  description:
    'List all events that have occurred in the system.\n\nYou can paginate through the results using the `cursor` parameter.',
  operationId: 'events-list',
  request: {
    query: z.object({
      cursor: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'cursor',
            schema: { minLength: 1, type: 'string' },
            required: false,
            description: 'The cursor to paginate through the results',
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(200),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { default: 25, minimum: 1, maximum: 200, type: 'integer' },
            required: false,
            description: 'The number of results to return',
          },
        }),
      types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'webset.created',
              'webset.deleted',
              'webset.paused',
              'webset.idle',
              'webset.search.created',
              'webset.search.canceled',
              'webset.search.completed',
              'webset.search.updated',
              'import.created',
              'import.completed',
              'webset.item.created',
              'webset.item.enriched',
              'monitor.created',
              'monitor.updated',
              'monitor.deleted',
              'monitor.run.created',
              'monitor.run.completed',
              'webset.export.created',
              'webset.export.completed',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'types',
            schema: {
              items: {
                enum: [
                  'webset.created',
                  'webset.deleted',
                  'webset.paused',
                  'webset.idle',
                  'webset.search.created',
                  'webset.search.canceled',
                  'webset.search.completed',
                  'webset.search.updated',
                  'import.created',
                  'import.completed',
                  'webset.item.created',
                  'webset.item.enriched',
                  'monitor.created',
                  'monitor.updated',
                  'monitor.deleted',
                  'monitor.run.created',
                  'monitor.run.completed',
                  'webset.export.created',
                  'webset.export.completed',
                ],
                type: 'string',
              },
              type: 'array',
            },
            required: false,
            description: 'The types of events to filter by',
          },
        }),
      createdBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'createdBefore',
            schema: { format: 'date-time', type: 'string' },
            required: false,
            description:
              'Filter events created before or at this timestamp (inclusive). Must be a valid ISO 8601 datetime string. All times are in UTC.',
          },
        }),
      createdAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'createdAfter',
            schema: { format: 'date-time', type: 'string' },
            required: false,
            description:
              'Filter events created after or at this timestamp (inclusive). Must be a valid ISO 8601 datetime string. All times are in UTC.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of events',
      content: { 'application/json': { schema: ListEventsResponseSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})

export const getV0EventsIdRoute = createRoute({
  method: 'get',
  path: '/v0/events/{id}',
  tags: ['Events'],
  summary: 'Get an Event',
  description: 'Get a single Event by id.\n\nYou can subscribe to Events by creating a Webhook.',
  operationId: 'events-get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { type: 'string' },
            description: 'The id of the event',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: EventSchema } },
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
    404: {
      description: 'Event not found',
      headers: z.object({
        'X-Request-Id': z.string().openapi({ description: 'Unique identifier for the request.' }),
      }),
    },
  },
  security: [{ apiKey: [] }, { bearer: [] }],
})
