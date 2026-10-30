import { createRoute, z } from '@hono/zod-openapi'

const EntityCompanyPropertiesWorkforceSchema = z
  .object({
    total: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Total number of employees.', example: 500 }),
  })
  .openapi({ description: 'Company workforce information.', required: [] })
  .openapi('EntityCompanyPropertiesWorkforce')

const EntityCompanyPropertiesHeadquartersSchema = z
  .object({
    address: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Street address.', example: '123 Main St' }),
    city: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'City name.', example: 'San Francisco' }),
    postalCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Postal/ZIP code.', example: '94105' }),
    country: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Full country name.', example: 'United States' }),
  })
  .openapi({ description: 'Company headquarters information.', required: [] })
  .openapi('EntityCompanyPropertiesHeadquarters')

const EntityCompanyPropertiesFundingRoundSchema = z
  .object({
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Name of the funding round (e.g., "Series A", "Seed").',
        example: 'Series B',
      }),
    date: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Date of the funding round.', example: '2023-06-15' }),
    amount: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Amount raised in USD.', example: 50000000 }),
  })
  .openapi({ description: 'Funding round information.', required: [] })
  .openapi('EntityCompanyPropertiesFundingRound')

const EntityCompanyPropertiesFinancialsSchema = z
  .object({
    revenueAnnual: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Annual revenue in USD.', example: 1000000000 }),
    fundingTotal: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Total funding raised in USD.', example: 500000000 }),
    fundingLatestRound: z
      .xor([EntityCompanyPropertiesFundingRoundSchema, z.null().nullable()])
      .exactOptional(),
  })
  .openapi({ description: 'Company financial information.', required: [] })
  .openapi('EntityCompanyPropertiesFinancials')

const EntityCompanyPropertiesWebTrafficSchema = z
  .object({
    visitsMonthly: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Estimated monthly website visits.', example: 266306714 }),
  })
  .openapi({ description: 'Company web traffic information.', required: [] })
  .openapi('EntityCompanyPropertiesWebTraffic')

const EntityCompanyPropertiesSchema = z
  .object({
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Company name.', example: 'Exa' }),
    foundedYear: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Year the company was founded.', example: 2022 }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Brief description of the company.',
        example: 'AI-powered search engine',
      }),
    workforce: z.xor([EntityCompanyPropertiesWorkforceSchema, z.null().nullable()]).exactOptional(),
    headquarters: z
      .xor([EntityCompanyPropertiesHeadquartersSchema, z.null().nullable()])
      .exactOptional(),
    financials: z
      .xor([EntityCompanyPropertiesFinancialsSchema, z.null().nullable()])
      .exactOptional(),
    webTraffic: z
      .xor([EntityCompanyPropertiesWebTrafficSchema, z.null().nullable()])
      .exactOptional(),
  })
  .openapi({ description: 'Structured properties for a company entity.', required: [] })
  .openapi('EntityCompanyProperties')

const CompanyEntitySchema = z
  .object({
    id: z
      .string()
      .openapi({ description: 'Exa entity ID.', example: 'https://exa.ai/library/company/exa' }),
    type: z
      .literal('company')
      .openapi({ description: 'Entity type discriminator.', example: 'company' }),
    version: z.int().openapi({ description: 'Schema version number.', example: 1 }),
    properties: EntityCompanyPropertiesSchema,
  })
  .openapi({
    description: 'Structured entity data for a company.',
    required: ['id', 'type', 'version', 'properties'],
  })
  .openapi('CompanyEntity')

const EntityDateRangeSchema = z
  .object({
    from: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Start date (YYYY-MM-DD format).', example: '2020-01-15' }),
    to: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'End date (YYYY-MM-DD format).', example: '2023-06-30' }),
  })
  .openapi({ description: 'Date range for work history entries.', required: [] })
  .openapi('EntityDateRange')

const EntityPersonPropertiesCompanyRefSchema = z
  .object({
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Exa entity ID for the company.',
        example: 'https://exa.ai/library/company/exa',
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Company name.', example: 'Exa' }),
  })
  .openapi({ description: 'Reference to a company in work history.', required: [] })
  .openapi('EntityPersonPropertiesCompanyRef')

const EntityPersonPropertiesWorkHistoryEntrySchema = z
  .object({
    title: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Job title.', example: 'Software Engineer' }),
    location: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Work location.', example: 'San Francisco, CA' }),
    dates: z.xor([EntityDateRangeSchema, z.null().nullable()]).exactOptional(),
    company: z.xor([EntityPersonPropertiesCompanyRefSchema, z.null().nullable()]).exactOptional(),
  })
  .openapi({ description: 'A single work history entry for a person.', required: [] })
  .openapi('EntityPersonPropertiesWorkHistoryEntry')

const EntityPersonPropertiesSchema = z
  .object({
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "Person's full name.", example: 'John Doe' }),
    location: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "Person's location.", example: 'San Francisco, CA' }),
    workHistory: z
      .array(EntityPersonPropertiesWorkHistoryEntrySchema)
      .exactOptional()
      .openapi({ description: 'List of work history entries.' }),
  })
  .openapi({ description: 'Structured properties for a person entity.', required: [] })
  .openapi('EntityPersonProperties')

const PersonEntitySchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'Exa entity ID.',
        example: 'https://exa.ai/library/person/john-doe',
      }),
    type: z
      .literal('person')
      .openapi({ description: 'Entity type discriminator.', example: 'person' }),
    version: z.int().openapi({ description: 'Schema version number.', example: 1 }),
    properties: EntityPersonPropertiesSchema,
  })
  .openapi({
    description: 'Structured entity data for a person.',
    required: ['id', 'type', 'version', 'properties'],
  })
  .openapi('PersonEntity')

type EntityType = z.infer<typeof CompanyEntitySchema> | z.infer<typeof PersonEntitySchema>

const ResultSchema = z
  .object({
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The title of the search result.',
        example: 'A Comprehensive Overview of Large Language Models',
      }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        description: 'The URL of the search result.',
        example: 'https://arxiv.org/pdf/2307.06435.pdf',
      }),
    publishedDate: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An estimate of the creation date, from parsing HTML content. Format is YYYY-MM-DD.',
        example: '2023-11-16T01:36:32.547Z',
      }),
    author: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'If available, the author of the content.',
        example: 'Humza  Naveed, University of Engineering and Technology (UET), Lahore, Pakistan',
      }),
    score: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A number from 0 to 1 representing similarity between the query/url and the result.',
        example: 0.4600165784358978,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The temporary ID for the document. Useful for /contents endpoint.',
        example: 'https://arxiv.org/abs/2307.06435',
      }),
    image: z
      .url()
      .exactOptional()
      .openapi({
        description: 'The URL of an image associated with the search result, if available.',
        example: 'https://arxiv.org/pdf/2307.06435.pdf/page_1.png',
      }),
    favicon: z
      .url()
      .exactOptional()
      .openapi({
        description: "The URL of the favicon for the search result's domain.",
        example: 'https://arxiv.org/favicon.ico',
      }),
  })
  .openapi({ required: [] })
  .openapi('Result')

const EntitySchema: z.ZodType<EntityType> = z
  .lazy(() =>
    z
      .discriminatedUnion('type', [CompanyEntitySchema, PersonEntitySchema])
      .openapi({
        discriminator: {
          propertyName: 'type',
          mapping: {
            company: '#/components/schemas/CompanyEntity',
            person: '#/components/schemas/PersonEntity',
          },
        },
        description:
          'Structured entity data for company or person search results. Only returned for category=company or category=people searches.',
      }),
  )
  .openapi('Entity')

type ResultWithContentType = z.infer<typeof ResultSchema> & {
  text?: string
  highlights?: string[]
  highlightScores?: number[]
  summary?: string
  subpages?: ResultWithContentType[]
  extras?: { links?: string[] }
  entities?: z.infer<typeof EntitySchema>[]
}

const AnswerCitationSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The temporary ID for the document.',
        example:
          'https://www.theguardian.com/science/2024/dec/11/spacex-valued-at-350bn-as-company-agrees-to-buy-shares-from-employees',
      }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        description: 'The URL of the search result.',
        example:
          'https://www.theguardian.com/science/2024/dec/11/spacex-valued-at-350bn-as-company-agrees-to-buy-shares-from-employees',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The title of the search result.',
        example: 'SpaceX valued at $350bn as company agrees to buy shares from ...',
      }),
    author: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'If available, the author of the content.', example: 'Dan Milmon' }),
    publishedDate: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An estimate of the creation date, from parsing HTML content. Format is YYYY-MM-DD.',
        example: '2023-11-16T01:36:32.547Z',
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full text content of each source. Only present when includeText is enabled.',
        example: 'SpaceX valued at $350bn as company agrees to buy shares from ...',
      }),
    image: z
      .url()
      .exactOptional()
      .openapi({
        description: 'The URL of the image associated with the search result, if available.',
        example:
          'https://i.guim.co.uk/img/media/7cfee7e84b24b73c97a079c402642a333ad31e77/0_380_6176_3706/master/6176.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=71ebb2fbf458c185229d02d380c01530',
      }),
    favicon: z
      .url()
      .exactOptional()
      .openapi({
        description: "The URL of the favicon for the search result's domain, if available.",
        example: 'https://assets.guim.co.uk/static/frontend/icons/homescreen/apple-touch-icon.svg',
      }),
  })
  .openapi({ required: [] })
  .openapi('AnswerCitation')

const AnswerResultSchema = z
  .object({
    answer: z
      .xor([z.string(), z.record(z.string(), z.any())])
      .exactOptional()
      .openapi({
        description:
          'The generated answer based on search results. Returns a string by default, or a structured object matching the provided outputSchema.',
        example: '$350 billion.',
      }),
    citations: z
      .array(AnswerCitationSchema)
      .exactOptional()
      .openapi({ description: 'Search results used to generate the answer.' }),
  })
  .openapi({ required: [] })
  .openapi('AnswerResult')

const ContentsRequestSchema = z
  .object({
    text: z
      .xor([
        z
          .boolean()
          .openapi({
            title: 'Simple text retrieval',
            description:
              'If true, returns full page text with default settings. If false, disables text return.',
          }),
        z
          .object({
            maxCharacters: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'Maximum character limit for the full page text. Useful for controlling response size and API costs.',
                example: 1000,
              }),
            includeHtmlTags: z
              .boolean()
              .default(false)
              .exactOptional()
              .openapi({
                description:
                  'Include HTML tags in the response, which can help LLMs understand text structure and formatting.',
                example: false,
              }),
            verbosity: z
              .enum(['compact', 'standard', 'full'])
              .default('compact')
              .exactOptional()
              .openapi({
                description:
                  'Controls the verbosity level of returned content. Requires livecrawl: "always" to take effect.\n- compact: Most concise output, main content only (default)\n- standard: Balanced content with more detail\n- full: Complete content including all sections\n',
                example: 'standard',
              }),
            includeSections: z
              .array(
                z.enum(['header', 'navigation', 'banner', 'body', 'sidebar', 'footer', 'metadata']),
              )
              .exactOptional()
              .openapi({
                description:
                  'Only include content from these semantic page sections. Requires livecrawl: "always" to take effect.\n',
                example: ['body', 'header'],
              }),
            excludeSections: z
              .array(
                z.enum(['header', 'navigation', 'banner', 'body', 'sidebar', 'footer', 'metadata']),
              )
              .exactOptional()
              .openapi({
                description:
                  'Exclude content from these semantic page sections. Requires livecrawl: "always" to take effect.\n',
                example: ['navigation', 'footer', 'sidebar'],
              }),
          })
          .openapi({
            title: 'Advanced text options',
            description:
              'Advanced options for controlling text extraction. Use this when you need to limit text length or include HTML structure.',
            required: [],
          }),
      ])
      .exactOptional(),
    highlights: z
      .xor([
        z
          .boolean()
          .openapi({
            title: 'Simple highlights retrieval',
            description:
              'If true, returns highlights with default settings. If false, disables highlights.',
          }),
        z
          .object({
            maxCharacters: z
              .int()
              .min(1)
              .exactOptional()
              .openapi({
                description:
                  'Maximum number of characters to return for highlights. Controls the total length of highlight text returned per URL.',
                example: 2000,
              }),
            numSentences: z
              .int()
              .min(1)
              .exactOptional()
              .openapi({
                description:
                  'Deprecated: use maxCharacters instead. The number of sentences to return for each snippet.',
                example: 1,
                deprecated: true,
              }),
            highlightsPerUrl: z
              .int()
              .min(1)
              .exactOptional()
              .openapi({
                description:
                  'Deprecated: use maxCharacters instead. The number of snippets to return for each result.',
                deprecated: true,
              }),
            query: z
              .string()
              .exactOptional()
              .openapi({
                description: "Custom query to direct the LLM's selection of highlights.",
                example: 'Key advancements',
              }),
          })
          .openapi({
            title: 'Advanced highlights options',
            description:
              'Advanced options for controlling highlight extraction. Use this when you need to customize the number of sentences, highlights per URL, or provide a custom query.',
            required: [],
          }),
      ])
      .exactOptional()
      .openapi({
        description: 'Text snippets the LLM identifies as most relevant from each page.',
      }),
    summary: z
      .object({
        query: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Custom query for the LLM-generated summary.',
            example: 'Main developments',
          }),
        schema: z
          .object({})
          .exactOptional()
          .openapi({
            description:
              'JSON schema for structured output from summary. \nSee https://json-schema.org/overview/what-is-jsonschema for JSON Schema documentation.\n',
            example: {
              $schema: 'http://json-schema.org/draft-07/schema#',
              title: 'Title',
              type: 'object',
              properties: {
                'Property 1': { type: 'string', description: 'Description' },
                'Property 2': {
                  type: 'string',
                  enum: ['option 1', 'option 2', 'option 3'],
                  description: 'Description',
                },
              },
              required: ['Property 1'],
            },
          }),
      })
      .exactOptional()
      .openapi({ description: 'Summary of the webpage', required: [] }),
    livecrawl: z
      .enum(['never', 'fallback', 'preferred', 'always'])
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          "**Deprecated**: Use `maxAgeHours` instead for more precise control over content freshness.\n\nOptions for livecrawling pages.\n'never': Disable livecrawling (default for neural search).\n'fallback': Livecrawl when cache is empty.\n'preferred': Always try to livecrawl, but fall back to cache if crawling fails.\n'always': Always live-crawl, never use cache. Only use if you cannot tolerate any cached content. This option is not recommended unless consulted with the Exa team.\n",
        example: 'preferred',
      }),
    livecrawlTimeout: z
      .int()
      .default(10000)
      .exactOptional()
      .openapi({ description: 'The timeout for livecrawling in milliseconds.', example: 1000 }),
    maxAgeHours: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "Maximum age of cached content in hours. Controls when livecrawling is triggered based on content freshness.\n- Positive value (e.g. 24): Use cached content if it's less than this many hours old, otherwise livecrawl.\n- 0: Always livecrawl, never use cache.\n- -1: Never livecrawl, always use cache.\n- Omit (default): Livecrawl as fallback only when no cached content exists.\n",
        example: 24,
      }),
    subpages: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The number of subpages to crawl. The actual number crawled may be limited by system constraints.',
        example: 1,
      }),
    subpageTarget: z
      .xor([z.string(), z.array(z.string())])
      .exactOptional()
      .openapi({
        description:
          'Keyword to find specific subpages of search results. Can be a single string or an array of strings, comma delimited.',
        example: 'sources',
      }),
    extras: z
      .object({
        links: z
          .int()
          .default(0)
          .exactOptional()
          .openapi({ description: 'Number of URLs to return from each webpage.', example: 1 }),
        imageLinks: z
          .int()
          .default(0)
          .exactOptional()
          .openapi({ description: 'Number of images to return for each result.', example: 1 }),
      })
      .exactOptional()
      .openapi({ description: 'Extra parameters to pass.', required: [] }),
    context: z
      .xor([
        z
          .boolean()
          .openapi({
            deprecated: true,
            description:
              'Deprecated: Use highlights or text instead. Returns page contents as a combined context string.',
            example: true,
          }),
        z
          .object({
            maxCharacters: z
              .int()
              .exactOptional()
              .openapi({
                description: 'Deprecated. Maximum character limit for the context string.',
                example: 10000,
              }),
          })
          .openapi({
            deprecated: true,
            description:
              'Deprecated: Use highlights or text instead. Returns page contents as a combined context string.',
            required: [],
          }),
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContentsRequest')

const CommonRequestSchema = z
  .object({
    numResults: z
      .int()
      .min(1)
      .max(100)
      .default(10)
      .exactOptional()
      .openapi({
        description:
          'Number of results to return (up to thousands of results available for custom plans)',
        example: 10,
      }),
    includeDomains: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of domains to include in the search. If specified, results will only come from these domains.',
        example: ['arxiv.org', 'paperswithcode.com'],
      }),
    excludeDomains: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of domains to exclude from search results. If specified, no results will be returned from these domains.',
      }),
    startCrawlDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Crawl date refers to the date that Exa discovered a link. Results will include links that were crawled after this date. Must be specified in ISO 8601 format.',
        example: '2023-01-01',
      }),
    endCrawlDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Crawl date refers to the date that Exa discovered a link. Results will include links that were crawled before this date. Must be specified in ISO 8601 format.',
        example: '2023-12-31',
      }),
    startPublishedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Only links with a published date after this will be returned. Must be specified in ISO 8601 format.',
        example: '2023-01-01',
      }),
    endPublishedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Only links with a published date before this will be returned. Must be specified in ISO 8601 format.',
        example: '2023-12-31',
      }),
    includeText: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of strings that must be present in webpage text of results. Currently, only 1 string is supported, of up to 5 words.',
        example: ['large language model'],
      }),
    excludeText: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of strings that must not be present in webpage text of results. Currently, only 1 string is supported, of up to 5 words. Checks from the first 1000 words of the webpage text.',
        example: ['course'],
      }),
    context: z
      .xor([
        z
          .boolean()
          .openapi({
            deprecated: true,
            description:
              'Deprecated: Use highlights or text instead. Returns page contents as a combined context string.',
            example: true,
          }),
        z
          .object({
            maxCharacters: z
              .int()
              .exactOptional()
              .openapi({
                description: 'Deprecated. Maximum character limit for the context string.',
                example: 10000,
              }),
          })
          .openapi({
            deprecated: true,
            description:
              'Deprecated: Use highlights or text instead. Returns page contents as a combined context string.',
            required: [],
          }),
      ])
      .exactOptional(),
    moderation: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Enable content moderation to filter unsafe content from search results.',
        example: true,
      }),
    contents: ContentsRequestSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CommonRequest')

const ResultWithContentSchema: z.ZodType<ResultWithContentType> = z
  .lazy(() =>
    ResultSchema.and(
      z
        .object({
          text: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The full content text of the search result.',
              example:
                'Abstract Large Language Models (LLMs) have recently demonstrated remarkable capabilities...',
            }),
          highlights: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description: 'Array of highlights extracted from the search result content.',
              example: ['Such requirements have limited their adoption...'],
            }),
          highlightScores: z
            .array(z.float32())
            .exactOptional()
            .openapi({
              description: 'Array of cosine similarity scores for each highlighted',
              example: [0.4600165784358978],
            }),
          summary: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Summary of the webpage',
              example:
                'This overview paper on Large Language Models (LLMs) highlights key developments...',
            }),
          subpages: z
            .array(ResultWithContentSchema)
            .exactOptional()
            .openapi({
              description: 'Array of subpages for the search result.',
              example: [
                {
                  id: 'https://arxiv.org/abs/2303.17580',
                  url: 'https://arxiv.org/pdf/2303.17580.pdf',
                  title:
                    'HuggingGPT: Solving AI Tasks with ChatGPT and its Friends in Hugging Face',
                  author:
                    'Yongliang  Shen, Microsoft Research Asia, Kaitao  Song, Microsoft Research Asia, Xu  Tan, Microsoft Research Asia, Dongsheng  Li, Microsoft Research Asia, Weiming  Lu, Microsoft Research Asia, Yueting  Zhuang, Microsoft Research Asia, yzhuang@zju.edu.cn, Zhejiang  University, Microsoft Research Asia, Microsoft  Research, Microsoft Research Asia',
                  publishedDate: '2023-11-16T01:36:20.486Z',
                  text: 'HuggingGPT: Solving AI Tasks with ChatGPT and its Friends in Hugging Face Date Published: 2023-05-25 Authors: Yongliang Shen, Microsoft Research Asia Kaitao Song, Microsoft Research Asia Xu Tan, Microsoft Research Asia Dongsheng Li, Microsoft Research Asia Weiming Lu, Microsoft Research Asia Yueting Zhuang, Microsoft Research Asia, yzhuang@zju.edu.cn Zhejiang University, Microsoft Research Asia Microsoft Research, Microsoft Research Asia Abstract Solving complicated AI tasks with different domains and modalities is a key step toward artificial general intelligence. While there are abundant AI models available for different domains and modalities, they cannot handle complicated AI tasks. Considering large language models (LLMs) have exhibited exceptional ability in language understanding, generation, interaction, and reasoning, we advocate that LLMs could act as a controller to manage existing AI models to solve complicated AI tasks and language could be a generic interface to empower t',
                  summary:
                    'HuggingGPT is a framework using ChatGPT as a central controller to orchestrate various AI models from Hugging Face to solve complex tasks. ChatGPT plans the task, selects appropriate models based on their descriptions, executes subtasks, and summarizes the results. This approach addresses limitations of LLMs by allowing them to handle multimodal data (vision, speech) and coordinate multiple models for complex tasks, paving the way for more advanced AI systems.',
                  highlights: [
                    '2) Recently, some researchers started to investigate the integration of using tools or models in LLMs  .',
                  ],
                  highlightScores: [0.32679107785224915],
                },
              ],
            }),
          extras: z
            .object({
              links: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Array of links from the search result.', example: [] }),
            })
            .exactOptional()
            .openapi({ description: 'Results from extras.', required: [] }),
          entities: z
            .array(EntitySchema)
            .exactOptional()
            .openapi({
              description:
                'Structured entity data for company or person search results. Only returned for category=company or category=people searches.',
            }),
        })
        .openapi({ required: [] }),
    ),
  )
  .openapi('ResultWithContent')

const CostDollarsSchema = z
  .object({
    total: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Total dollar cost for your request', example: 0.005 }),
    breakDown: z
      .array(
        z
          .object({
            search: z
              .float32()
              .exactOptional()
              .openapi({ description: 'Cost of your search operations', example: 0.005 }),
            contents: z
              .float32()
              .exactOptional()
              .openapi({ description: 'Cost of your content operations', example: 0 }),
            breakdown: z
              .object({
                neuralSearch: z
                  .float32()
                  .exactOptional()
                  .openapi({
                    description: 'Cost of your neural search operations',
                    example: 0.005,
                  }),
                deepSearch: z
                  .float32()
                  .exactOptional()
                  .openapi({ description: 'Cost of your deep search operations', example: 0.015 }),
                contentText: z
                  .float32()
                  .exactOptional()
                  .openapi({ description: 'Cost of your text content retrieval', example: 0 }),
                contentHighlight: z
                  .float32()
                  .exactOptional()
                  .openapi({ description: 'Cost of your highlight generation', example: 0 }),
                contentSummary: z
                  .float32()
                  .exactOptional()
                  .openapi({ description: 'Cost of your summary generation', example: 0 }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Breakdown of costs by operation type' }),
    perRequestPrices: z
      .object({
        neuralSearch_1_25_results: z
          .float32()
          .exactOptional()
          .openapi({
            description: 'Standard price for neural search with 1-25 results',
            example: 0.005,
          }),
        neuralSearch_26_100_results: z
          .float32()
          .exactOptional()
          .openapi({
            description: 'Standard price for neural search with 26-100 results',
            example: 0.025,
          }),
        neuralSearch_100_plus_results: z
          .float32()
          .exactOptional()
          .openapi({
            description: 'Standard price for neural search with 100+ results',
            example: 1,
          }),
        deepSearch_1_25_results: z
          .float32()
          .exactOptional()
          .openapi({
            description: 'Standard price for deep search with 1-25 results',
            example: 0.015,
          }),
        deepSearch_26_100_results: z
          .float32()
          .exactOptional()
          .openapi({
            description: 'Standard price for deep search with 26-100 results',
            example: 0.075,
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Standard price per request for different operations',
        required: [],
      }),
    perPagePrices: z
      .object({
        contentText: z
          .float32()
          .exactOptional()
          .openapi({ description: 'Standard price per page for text content', example: 0.001 }),
        contentHighlight: z
          .float32()
          .exactOptional()
          .openapi({ description: 'Standard price per page for highlights', example: 0.001 }),
        contentSummary: z
          .float32()
          .exactOptional()
          .openapi({ description: 'Standard price per page for summaries', example: 0.001 }),
      })
      .exactOptional()
      .openapi({
        description: 'Standard price per page for different content operations',
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('CostDollars')

const ResearchTaskDtoSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique identifier for the research task' }),
    status: z
      .enum(['running', 'completed', 'failed'])
      .openapi({ description: 'The current status of the research task' }),
    instructions: z
      .string()
      .openapi({ description: 'The instructions or query for the research task' }),
    schema: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: 'The JSON schema specification for the expected output format' }),
    data: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: 'The research results data conforming to the specified schema' }),
    citations: z
      .record(
        z.string(),
        z.array(
          z
            .object({
              id: z.string(),
              url: z.string(),
              title: z.string().exactOptional(),
              snippet: z.string(),
            })
            .openapi({ required: ['id', 'url', 'snippet'] }),
        ),
      )
      .exactOptional()
      .openapi({ description: 'Citations grouped by the root field they were used in' }),
  })
  .openapi({ required: ['id', 'status', 'instructions'] })
  .openapi('ResearchTaskDto')

const SearchResponseResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: z
        .object({
          requestId: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Unique identifier for the request',
              example: 'b5947044c4b78efa9552a7c89b306d95',
            }),
          results: z
            .array(ResultWithContentSchema)
            .exactOptional()
            .openapi({
              description:
                'A list of search results containing title, URL, published date, and author.',
            }),
          searchType: z
            .enum(['neural', 'deep', 'deep-reasoning'])
            .exactOptional()
            .openapi({
              description: 'For auto searches, indicates which search type was selected.',
              example: 'auto',
            }),
          context: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Deprecated. Combined context string from search results. Use highlights or text instead.',
            }),
          output: z
            .object({
              content: z
                .xor([z.string(), z.record(z.string(), z.any())])
                .openapi({
                  description:
                    'Deep-search synthesized content. String by default, or object when outputSchema is provided.',
                }),
              grounding: z
                .array(
                  z
                    .object({
                      field: z
                        .string()
                        .openapi({
                          description:
                            'Field path in output.content (for example, content or companies[0].funding).',
                        }),
                      citations: z
                        .array(
                          z
                            .object({ url: z.string(), title: z.string() })
                            .openapi({ required: ['url', 'title'] }),
                        )
                        .openapi({ description: 'Sources supporting this output field.' }),
                      confidence: z.enum(['low', 'medium', 'high']),
                    })
                    .openapi({ required: ['field', 'citations', 'confidence'] }),
                )
                .openapi({ description: 'Field-level grounding for synthesized output.' }),
            })
            .exactOptional()
            .openapi({
              description: 'Deep-search synthesized output. Returned for deep search variants.',
              required: ['content', 'grounding'],
            }),
          costDollars: CostDollarsSchema.exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const FindSimilarResponseResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: z
        .object({
          requestId: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Unique identifier for the request',
              example: 'c6958155d5c89ffa0663b7c90c407396',
            }),
          context: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Deprecated. Combined context string from search results. Use highlights or text instead.',
            }),
          results: z
            .array(ResultWithContentSchema)
            .exactOptional()
            .openapi({
              description:
                'A list of search results containing title, URL, published date, and author.',
            }),
          costDollars: CostDollarsSchema.exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const ContentsResponseResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: z
        .object({
          requestId: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Unique identifier for the request',
              example: 'e492118ccdedcba5088bfc4357a8a125',
            }),
          results: z.array(ResultWithContentSchema).exactOptional(),
          context: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Deprecated. Combined context string from search results. Use highlights or text instead.',
            }),
          statuses: z
            .array(
              z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The URL that was requested',
                      example: 'https://example.com',
                    }),
                  status: z
                    .enum(['success', 'error'])
                    .exactOptional()
                    .openapi({
                      description: 'Status of the content fetch operation',
                      example: 'success',
                    }),
                  error: z
                    .object({
                      tag: z
                        .enum([
                          'CRAWL_NOT_FOUND',
                          'CRAWL_TIMEOUT',
                          'CRAWL_LIVECRAWL_TIMEOUT',
                          'SOURCE_NOT_AVAILABLE',
                          'UNSUPPORTED_URL',
                          'CRAWL_UNKNOWN_ERROR',
                        ])
                        .exactOptional()
                        .openapi({
                          description: 'Specific error type',
                          example: 'CRAWL_NOT_FOUND',
                        }),
                      httpStatusCode: z
                        .int()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description: 'The corresponding HTTP status code',
                          example: 404,
                        }),
                    })
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Error details, only present when status is "error"',
                      required: [],
                    }),
                })
                .openapi({ required: [] }),
            )
            .exactOptional()
            .openapi({ description: 'Status information for each requested URL' }),
          costDollars: CostDollarsSchema.exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const AnswerResponseResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: AnswerResultSchema.and(
        z.object({ costDollars: CostDollarsSchema.exactOptional() }).openapi({ required: [] }),
      ),
    },
    'text/event-stream': {
      schema: z
        .object({
          answer: z
            .string()
            .exactOptional()
            .openapi({ description: 'Partial answer chunk when streaming is enabled.' }),
          citations: z.array(AnswerCitationSchema).exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const ResearchCreateTaskResponseResponse = {
  description: 'Research task created',
  content: {
    'application/json': {
      schema: z
        .object({
          id: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The unique identifier for the research task',
              example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
            }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ListResearchTasksResponseResponse = {
  description: 'List of research tasks',
  content: {
    'application/json': {
      schema: z
        .object({
          requestId: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Unique identifier for the request',
              example: 'b5947044c4b78efa9552a7c89b306d95',
            }),
          data: z
            .array(ResearchTaskDtoSchema)
            .exactOptional()
            .openapi({ description: 'The list of research tasks' }),
          hasMore: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'Whether there are more results to paginate through' }),
          nextCursor: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ description: 'The cursor to paginate through the next set of results' }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ResearchTaskResponseResponse = {
  description: 'Research task details',
  content: { 'application/json': { schema: ResearchTaskDtoSchema } },
}

const ApikeySecurityScheme = {
  type: 'apiKey',
  name: 'x-api-key',
  in: 'header',
  description:
    'API key can be provided either via x-api-key header or Authorization header with Bearer scheme',
}

const BearerSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  description:
    'API key can be provided either via x-api-key header or Authorization header with Bearer scheme',
}

export const postSearchRoute = createRoute({
  method: 'post',
  path: '/search',
  summary: 'Search',
  description:
    'Perform a search with a Exa prompt-engineered query and retrieve a list of relevant results. Optionally get contents.',
  operationId: 'search',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              query: z
                .string()
                .openapi({
                  example: 'Latest developments in LLM capabilities',
                  description: 'The query string for the search.',
                }),
              additionalQueries: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Additional query variations for deep search. Only works with type="deep" or type="deep-reasoning". When provided, these queries are used alongside the main query for comprehensive results.',
                  example: ['LLM advancements', 'large language model progress'],
                }),
              type: z
                .enum(['neural', 'fast', 'auto', 'deep', 'deep-reasoning', 'instant'])
                .default('auto')
                .exactOptional()
                .openapi({
                  description:
                    'The type of search. Neural uses an embeddings-based model, auto (default) intelligently combines neural and other search methods, fast uses streamlined versions of the search models, deep is light deep search, deep-reasoning is base deep search, and instant provides the lowest latency search optimized for real-time applications.',
                  example: 'auto',
                }),
              outputSchema: z
                .record(z.string(), z.any())
                .exactOptional()
                .openapi({
                  description:
                    'JSON schema for deep search structured output mode. When provided, the output.content field is returned as structured JSON matching this schema.',
                }),
              category: z
                .enum([
                  'company',
                  'research paper',
                  'news',
                  'pdf',
                  'github',
                  'personal site',
                  'people',
                  'financial report',
                ])
                .exactOptional()
                .openapi({
                  description:
                    'A data category to focus on. The `people` and `company` categories have improved quality for finding LinkedIn profiles and company pages. Note: The `company` and `people` categories only support a limited set of filters. The following parameters are NOT supported for these categories: `startPublishedDate`, `endPublishedDate`, `startCrawlDate`, `endCrawlDate`, `includeText`, `excludeText`, `excludeDomains`. For `people` category, `includeDomains` only accepts LinkedIn domains. Using unsupported parameters will result in a 400 error.',
                  example: 'research paper',
                }),
              userLocation: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The two-letter ISO country code of the user, e.g. US.',
                  example: 'US',
                }),
            })
            .openapi({ required: ['query'] })
            .and(CommonRequestSchema),
        },
      },
      required: true,
    },
  },
  responses: { 200: SearchResponseResponse },
})

export const postFindSimilarRoute = createRoute({
  method: 'post',
  path: '/findSimilar',
  summary: 'Find similar links',
  description: 'Find similar links to the link provided. Optionally get contents.',
  operationId: 'findSimilar',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              url: z
                .string()
                .openapi({
                  example: 'https://arxiv.org/abs/2307.06435',
                  description: 'The url for which you would like to find similar links.',
                }),
              excludeSourceDomain: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If true, excludes links from the same domain as the provided URL from the results.',
                  example: true,
                }),
            })
            .openapi({ required: ['url'] })
            .and(CommonRequestSchema),
        },
      },
      required: true,
    },
  },
  responses: { 200: FindSimilarResponseResponse },
})

export const postContentsRoute = createRoute({
  method: 'post',
  path: '/contents',
  summary: 'Get Contents',
  operationId: 'getContents',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              urls: z
                .array(z.string())
                .openapi({
                  description:
                    "Array of URLs to crawl (backwards compatible with 'ids' parameter).",
                  example: ['https://arxiv.org/pdf/2307.06435'],
                }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    "Deprecated - use 'urls' instead. Array of document IDs obtained from searches.",
                  example: ['https://arxiv.org/pdf/2307.06435'],
                }),
            })
            .openapi({ required: ['urls'] })
            .and(ContentsRequestSchema),
        },
      },
      required: true,
    },
  },
  responses: { 200: ContentsResponseResponse },
})

export const postAnswerRoute = createRoute({
  method: 'post',
  path: '/answer',
  summary: 'Generate an answer from search results',
  description:
    'Performs a search based on the query and generates either a direct answer or a detailed summary with citations, depending on the query type.\n',
  operationId: 'answer',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              query: z
                .string()
                .min(1)
                .openapi({
                  description: 'The question or query to answer.',
                  example: 'What is the latest valuation of SpaceX?',
                }),
              stream: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'If true, the response is returned as a server-sent events (SSS) stream.',
                }),
              text: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'If true, the response includes full text content in the search results',
                }),
              outputSchema: z
                .object({
                  type: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The root schema type (typically "object").',
                      example: 'object',
                    }),
                  properties: z
                    .object({})
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
                    .openapi({
                      description: 'Whether to allow properties not listed in `properties`.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A [JSON Schema Draft 7](https://json-schema.org/draft-07) specification for the desired answer structure. When provided, the answer will be returned as a structured object matching the schema instead of a plain string.',
                  required: [],
                }),
            })
            .openapi({ required: ['query'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: AnswerResponseResponse },
})

export const getResearchV0TasksRoute = createRoute({
  method: 'get',
  path: '/research/v0/tasks',
  tags: ['Research'],
  summary: 'List research tasks',
  operationId: 'research-tasks-list',
  request: {
    query: z.object({
      cursor: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            required: false,
            in: 'query',
            description: 'The cursor to paginate through the results',
            schema: { minLength: 1, type: 'string' },
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
          z.number().min(1).max(200),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'The number of results to return',
            schema: { minimum: 1, maximum: 200, default: 25, type: 'number' },
          },
        }),
    }),
  },
  responses: { 200: ListResearchTasksResponseResponse },
})

export const postResearchV0TasksRoute = createRoute({
  method: 'post',
  path: '/research/v0/tasks',
  tags: ['Research'],
  summary: 'Create a research task with instructions and an output schema',
  operationId: 'research-tasks-create',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              instructions: z
                .string()
                .max(4096)
                .openapi({
                  description: 'Instructions for what the research task should accomplish',
                }),
              model: z
                .enum(['exa-research', 'exa-research-pro'])
                .default('exa-research')
                .exactOptional(),
              output: z
                .object({
                  schema: z
                    .any()
                    .exactOptional()
                    .openapi({
                      description:
                        'A JsonSchema specification of the desired output. See https://json-schema.org/draft-07.',
                    }),
                  inferSchema: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'When set to true and no output schema is provided, an LLM will generate an output schema.',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              required: ['instructions'],
              example: {
                instructions: 'What species of ant are similar to honeypot ants?',
                model: 'exa-research',
                output: { schema: { type: 'object', properties: { answer: { type: 'string' } } } },
              },
            }),
        },
      },
      required: true,
    },
  },
  responses: { 201: ResearchCreateTaskResponseResponse },
})

export const getResearchV0TasksIdRoute = createRoute({
  method: 'get',
  path: '/research/v0/tasks/{id}',
  tags: ['Research'],
  summary: 'Get a research task by id',
  operationId: 'ResearchControllerV0_getResearchTask',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', required: true, in: 'path', schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: ResearchTaskResponseResponse },
})
