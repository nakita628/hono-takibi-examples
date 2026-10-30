import { createRoute, z } from '@hono/zod-openapi'

const ScrapeOptionsSchema = z
  .object({
    formats: z
      .array(
        z.enum([
          'markdown',
          'html',
          'rawHtml',
          'rawBase64',
          'links',
          'screenshot',
          'screenshot@fullPage',
          'json',
          'changeTracking',
          'branding',
        ]),
      )
      .default(['markdown'])
      .exactOptional()
      .openapi({
        description: 'Formats to include in the output. `rawBase64` must be requested by itself.',
      }),
    onlyMainContent: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Only return the main content of the page excluding headers, navs, footers, etc.',
      }),
    includeTags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Tags to include in the output.' }),
    excludeTags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Tags to exclude from the output.' }),
    maxAge: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'Returns a cached version of the page if it is younger than this age in milliseconds. If a cached version of the page is older than this value, the page will be scraped. If you do not need extremely fresh data, enabling this can speed up your scrapes by 500%. Defaults to 0, which disables caching.',
      }),
    headers: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Headers to send with the request. Can be used to send cookies, user-agent, etc.',
      }),
    waitFor: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'Specify a delay in milliseconds before fetching the content, allowing the page sufficient time to load.',
      }),
    mobile: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Set to true if you want to emulate scraping from a mobile device. Useful for testing responsive pages and taking mobile screenshots.',
      }),
    skipTlsVerification: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Skip TLS certificate verification when making requests' }),
    timeout: z
      .int()
      .default(30000)
      .exactOptional()
      .openapi({ description: 'Timeout in milliseconds for the request' }),
    parsePDF: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Controls how PDF files are processed during scraping. When true, the PDF content is extracted and converted to markdown format, with billing based on the number of pages (1 credit per page). When false, the PDF file is returned in base64 encoding with a flat rate of 1 credit total.',
      }),
    jsonOptions: z
      .object({
        schema: z
          .object({})
          .exactOptional()
          .openapi({
            description:
              'The schema to use for the extraction (Optional). Must conform to [JSON Schema](https://json-schema.org/).',
          }),
        systemPrompt: z
          .string()
          .exactOptional()
          .openapi({ description: 'The system prompt to use for the extraction (Optional)' }),
        prompt: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The prompt to use for the extraction without a schema (Optional)',
          }),
      })
      .exactOptional()
      .openapi({ description: 'JSON options object', required: [] }),
    actions: z
      .array(
        z.xor([
          z
            .object({
              type: z
                .literal('wait')
                .openapi({ description: 'Wait for a specified amount of milliseconds' }),
              milliseconds: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({ description: 'Number of milliseconds to wait' }),
              selector: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Query selector to find the element by',
                  example: '#my-element',
                }),
            })
            .openapi({ title: 'Wait', required: ['type'] }),
          z
            .object({
              type: z
                .literal('screenshot')
                .openapi({
                  description:
                    "Take a screenshot. The links will be in the response's `actions.screenshots` array.",
                }),
              fullPage: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({ description: 'Should the screenshot be full-page or viewport sized?' }),
            })
            .openapi({ title: 'Screenshot', required: ['type'] }),
          z
            .object({
              type: z.literal('click').openapi({ description: 'Click on an element' }),
              selector: z
                .string()
                .openapi({
                  description: 'Query selector to find the element by',
                  example: '#load-more-button',
                }),
              all: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Clicks all elements matched by the selector, not just the first one. Does not throw an error if no elements match the selector.',
                }),
            })
            .openapi({ title: 'Click', required: ['type', 'selector'] }),
          z
            .object({
              type: z
                .literal('write')
                .openapi({
                  description:
                    "Write text into an input field, text area, or contenteditable element. Note: You must first focus the element using a 'click' action before writing. The text will be typed character by character to simulate keyboard input.",
                }),
              text: z.string().openapi({ description: 'Text to type', example: 'Hello, world!' }),
            })
            .openapi({ title: 'Write text', required: ['type', 'text'] }),
          z
            .object({
              type: z.literal('press').openapi({ description: 'Press a key on the page' }),
              key: z.string().openapi({ description: 'Key to press', example: 'Enter' }),
            })
            .openapi({
              title: 'Press a key',
              description:
                'Press a key on the page. See https://asawicki.info/nosense/doc/devices/keyboard/key_codes.html for key codes.',
              required: ['type', 'key'],
            }),
          z
            .object({
              type: z
                .literal('scroll')
                .openapi({ description: 'Scroll the page or a specific element' }),
              direction: z
                .enum(['up', 'down'])
                .default('down')
                .exactOptional()
                .openapi({ description: 'Direction to scroll' }),
              selector: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Query selector for the element to scroll',
                  example: '#my-element',
                }),
            })
            .openapi({ title: 'Scroll', required: ['type'] }),
          z
            .object({
              type: z
                .literal('scrape')
                .openapi({
                  description: 'Scrape the current page content, returns the url and the html.',
                }),
            })
            .openapi({ title: 'Scrape', required: ['type'] }),
          z
            .object({
              type: z
                .literal('executeJavascript')
                .openapi({ description: 'Execute JavaScript code on the page' }),
              script: z
                .string()
                .openapi({
                  description: 'JavaScript code to execute',
                  example: "document.querySelector('.button').click();",
                }),
            })
            .openapi({ title: 'Execute JavaScript', required: ['type', 'script'] }),
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Actions to perform on the page before grabbing the content' }),
    location: z
      .object({
        country: z
          .string()
          .regex(/^[A-Z]{2}$/)
          .default('US')
          .exactOptional()
          .openapi({
            description: "ISO 3166-1 alpha-2 country code (e.g., 'US', 'AU', 'DE', 'JP')",
          }),
        languages: z
          .array(z.string().openapi({ example: 'en-US' }))
          .exactOptional()
          .openapi({
            description:
              'Preferred languages and locales for the request in order of priority. Defaults to the language of the specified location. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          "Location settings for the request. When specified, this will use an appropriate proxy if available and emulate the corresponding language and timezone settings. Defaults to 'US' if not specified.",
        required: [],
      }),
    removeBase64Images: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Removes all base 64 images from the output, which may be overwhelmingly long. The image's alt text remains in the output, but the URL is replaced with a placeholder.",
      }),
    blockAds: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Enables ad-blocking and cookie popup blocking.' }),
    proxy: z
      .enum(['basic', 'enhanced', 'auto'])
      .exactOptional()
      .openapi({
        description:
          'Specifies the type of proxy to use.\n\n - **basic**: Proxies for scraping sites with none to basic anti-bot solutions. Fast and usually works.\n - **enhanced**: Enhanced proxies for scraping sites with advanced anti-bot solutions. Slower, but more reliable on certain sites. Billed at the same credit cost as basic.\n - **auto**: Firecrawl will automatically retry scraping with enhanced proxies if the basic proxy fails. Enhanced proxies carry no credit surcharge, so either way only the regular cost is billed.\n\nIf you do not specify a proxy, Firecrawl will default to basic.',
      }),
    changeTrackingOptions: z
      .object({
        modes: z
          .array(z.enum(['git-diff', 'json']))
          .exactOptional()
          .openapi({
            description:
              "The mode to use for change tracking. 'git-diff' provides a detailed diff, and 'json' compares extracted JSON data.",
          }),
        schema: z
          .object({})
          .exactOptional()
          .openapi({
            description:
              "Schema for JSON extraction when using 'json' mode. Defines the structure of data to extract and compare. Must conform to [JSON Schema](https://json-schema.org/).",
          }),
        prompt: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "Prompt to use for change tracking when using 'json' mode. If not provided, the default prompt will be used.",
          }),
        tag: z
          .string()
          .nullable()
          .default(null)
          .exactOptional()
          .openapi({
            description:
              'Tag to use for change tracking. Tags can separate change tracking history into separate "branches", where change tracking with a specific tagwill only compare to scrapes made in the same tag. If not provided, the default tag (null) will be used.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          "Options for change tracking (Beta). Only applicable when 'changeTracking' is included in formats. The 'markdown' format must also be specified when using change tracking.",
        required: [],
      }),
    storeInCache: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'If true, the page will be stored in the Firecrawl index and cache. Setting this to false is useful if your scraping activity may have data protection concerns. Using some parameters associated with sensitive scraping (actions, headers) will force this parameter to be false.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ScrapeOptions')

const ScrapeResponseSchema = z
  .object({
    success: z.boolean().exactOptional(),
    data: z
      .object({
        markdown: z.string().exactOptional(),
        html: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'HTML version of the content on page if `html` is in `formats`',
          }),
        rawHtml: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Raw HTML content of the page if `rawHtml` is in `formats`' }),
        rawBase64: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Base64-encoded original response body if `rawBase64` is in `formats`',
          }),
        screenshot: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Screenshot of the page if `screenshot` is in `formats`' }),
        links: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'List of links on the page if `links` is in `formats`' }),
        actions: z
          .object({
            screenshots: z
              .array(z.url())
              .exactOptional()
              .openapi({
                description:
                  'Screenshot URLs, in the same order as the screenshot actions provided.',
              }),
            scrapes: z
              .array(
                z
                  .object({ url: z.string().exactOptional(), html: z.string().exactOptional() })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({
                description: 'Scrape contents, in the same order as the scrape actions provided.',
              }),
            javascriptReturns: z
              .array(
                z
                  .object({ type: z.string().exactOptional(), value: z.any().exactOptional() })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({
                description:
                  'JavaScript return values, in the same order as the executeJavascript actions provided.',
              }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Results of the actions specified in the `actions` parameter. Only present if the `actions` parameter was provided in the request',
            required: [],
          }),
        metadata: z
          .object({
            title: z.string().exactOptional(),
            description: z.string().exactOptional(),
            language: z.string().nullable().exactOptional(),
            sourceURL: z.url().exactOptional(),
            '<any other metadata> ': z.string().exactOptional(),
            statusCode: z
              .int()
              .exactOptional()
              .openapi({ description: 'The status code of the page' }),
            timezone: z
              .string()
              .exactOptional()
              .openapi({ description: 'Timezone inferred by the scraping engine, when available' }),
            error: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'The error message of the page' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        llm_extraction: z
          .object({})
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Displayed when using LLM Extraction. Extracted data from the page following the schema defined.',
          }),
        warning: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Can be displayed when using LLM Extraction. Warning message will let you know any issues with the extraction.',
          }),
        changeTracking: z
          .object({
            previousScrapeAt: z.iso
              .datetime({ offset: true })
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The timestamp of the previous scrape that the current page is being compared against. Null if no previous scrape exists.',
              }),
            changeStatus: z
              .enum(['new', 'same', 'changed', 'removed'])
              .exactOptional()
              .openapi({
                description:
                  "The result of the comparison between the two page versions. 'new' means this page did not exist before, 'same' means content has not changed, 'changed' means content has changed, 'removed' means the page was removed.",
              }),
            visibility: z
              .enum(['visible', 'hidden'])
              .exactOptional()
              .openapi({
                description:
                  "The visibility of the current page/URL. 'visible' means the URL was discovered through an organic route (links or sitemap), 'hidden' means the URL was discovered through memory from previous crawls.",
              }),
            diff: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "Git-style diff of changes when using 'git-diff' mode. Only present when the mode is set to 'git-diff'.",
              }),
            json: z
              .object({})
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "JSON comparison results when using 'json' mode. Only present when the mode is set to 'json'. This will emit a list of all the keys and their values from the `previous` and `current` scrapes based on the type defined in the `schema`. Example [here](/features/change-tracking)",
              }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Change tracking information if `changeTracking` is in `formats`. Only present when the `changeTracking` format is requested.',
            required: [],
          }),
        branding: z
          .object({
            logo: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Primary logo URL if detected.' }),
            fonts: z
              .array(
                z.looseObject({ family: z.string().exactOptional() }).openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({ description: 'Detected font families.' }),
            colors: z.looseObject({}).exactOptional(),
            typography: z.looseObject({}).exactOptional(),
            spacing: z.looseObject({}).exactOptional(),
            components: z.looseObject({}).exactOptional(),
            icons: z.looseObject({}).exactOptional(),
            images: z.looseObject({}).exactOptional(),
            animations: z.looseObject({}).exactOptional(),
            layout: z.looseObject({}).exactOptional(),
            tone: z.looseObject({}).exactOptional(),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Brand identity information derived from executing on-page javascript.',
            required: [],
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ScrapeResponse')

const CrawlStatusResponseObjSchema = z
  .object({
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The current status of the crawl. Can be `scraping`, `completed`, or `failed`.',
      }),
    total: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of pages that were attempted to be crawled.' }),
    completed: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of pages that have been successfully crawled.' }),
    creditsUsed: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of credits used for the crawl.' }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time when the crawl will expire.' }),
    next: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL to retrieve the next 10MB of data. Returned if the crawl is not completed or if the response is larger than 10MB.',
      }),
    data: z
      .array(
        z
          .object({
            markdown: z.string().exactOptional(),
            html: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'HTML version of the content on page if `includeHtml`  is true',
              }),
            rawHtml: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Raw HTML content of the page if `includeRawHtml`  is true',
              }),
            rawBase64: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Base64-encoded original response body if `rawBase64` is in `formats`',
              }),
            links: z
              .array(z.string())
              .exactOptional()
              .openapi({ description: 'List of links on the page if `includeLinks` is true' }),
            screenshot: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Screenshot of the page if `includeScreenshot` is true' }),
            metadata: z
              .object({
                title: z.string().exactOptional(),
                description: z.string().exactOptional(),
                language: z.string().nullable().exactOptional(),
                sourceURL: z.url().exactOptional(),
                '<any other metadata> ': z.string().exactOptional(),
                statusCode: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'The status code of the page' }),
                timezone: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Timezone inferred by the scraping engine, when available',
                  }),
                error: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'The error message of the page' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'The data of the crawl.' }),
  })
  .openapi({ required: [] })
  .openapi('CrawlStatusResponseObj')

const CrawlErrorsResponseObjSchema = z
  .object({
    errors: z
      .array(
        z
          .object({
            id: z.string().exactOptional(),
            timestamp: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'ISO timestamp of failure' }),
            url: z.string().exactOptional().openapi({ description: 'Scraped URL' }),
            error: z.string().exactOptional().openapi({ description: 'Error message' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Errored scrape jobs and error details' }),
    robotsBlocked: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of URLs that were attempted in scraping but were blocked by robots.txt',
      }),
  })
  .openapi({ required: [] })
  .openapi('CrawlErrorsResponseObj')

const BatchScrapeStatusResponseObjSchema = z
  .object({
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The current status of the batch scrape. Can be `scraping`, `completed`, or `failed`.',
      }),
    total: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of pages that were attempted to be scraped.' }),
    completed: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of pages that have been successfully scraped.' }),
    creditsUsed: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of credits used for the batch scrape.' }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time when the batch scrape will expire.' }),
    next: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The URL to retrieve the next 10MB of data. Returned if the batch scrape is not completed or if the response is larger than 10MB.',
      }),
    data: z
      .array(
        z
          .object({
            markdown: z.string().exactOptional(),
            html: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'HTML version of the content on page if `includeHtml`  is true',
              }),
            rawHtml: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Raw HTML content of the page if `includeRawHtml`  is true',
              }),
            rawBase64: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Base64-encoded original response body if `rawBase64` is in `formats`',
              }),
            links: z
              .array(z.string())
              .exactOptional()
              .openapi({ description: 'List of links on the page if `includeLinks` is true' }),
            screenshot: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Screenshot of the page if `includeScreenshot` is true' }),
            metadata: z
              .object({
                title: z.string().exactOptional(),
                description: z.string().exactOptional(),
                language: z.string().nullable().exactOptional(),
                sourceURL: z.url().exactOptional(),
                '<any other metadata> ': z.string().exactOptional(),
                statusCode: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'The status code of the page' }),
                timezone: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Timezone inferred by the scraping engine, when available',
                  }),
                error: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'The error message of the page' }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'The data of the batch scrape.' }),
  })
  .openapi({ required: [] })
  .openapi('BatchScrapeStatusResponseObj')

const CrawlResponseSchema = z
  .object({
    success: z.boolean().exactOptional(),
    id: z.string().exactOptional(),
    url: z.url().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CrawlResponse')

const BatchScrapeResponseObjSchema = z
  .object({
    success: z.boolean().exactOptional(),
    id: z.string().exactOptional(),
    url: z.url().exactOptional(),
    invalidURLs: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If ignoreInvalidURLs is true, this is an array containing the invalid URLs that were specified in the request. If there were no invalid URLs, this will be an empty array. If ignoreInvalidURLs is false, this field will be undefined.',
      }),
  })
  .openapi({ required: [] })
  .openapi('BatchScrapeResponseObj')

const MapResponseSchema = z
  .object({ success: z.boolean().exactOptional(), links: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('MapResponse')

const ExtractResponseSchema = z
  .object({
    success: z.boolean().exactOptional(),
    id: z.string().exactOptional(),
    invalidURLs: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If ignoreInvalidURLs is true, this is an array containing the invalid URLs that were specified in the request. If there were no invalid URLs, this will be an empty array. If ignoreInvalidURLs is false, this field will be undefined.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ExtractResponse')

const ExtractStatusResponseSchema = z
  .object({
    success: z.boolean().exactOptional(),
    data: z.object({}).exactOptional(),
    status: z
      .enum(['completed', 'processing', 'failed', 'cancelled'])
      .exactOptional()
      .openapi({ description: 'The current status of the extract job' }),
    expiresAt: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExtractStatusResponse')

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const postScrapeRoute = createRoute({
  method: 'post',
  path: '/scrape',
  tags: ['Scraping'],
  summary: 'Scrape a single URL and optionally extract information using an LLM',
  operationId: 'scrapeAndExtractFromUrl',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ url: z.url().openapi({ description: 'The URL to scrape' }) })
            .openapi({ required: ['url'] })
            .and(ScrapeOptionsSchema),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ScrapeResponseSchema } },
    },
    402: {
      description: 'Payment required',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'Payment required to access this resource.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    429: {
      description: 'Too many requests',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'Request rate limit exceeded. Please wait and try again later.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Server error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'An unexpected error occurred on the server.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postBatchScrapeRoute = createRoute({
  method: 'post',
  path: '/batch/scrape',
  tags: ['Scraping'],
  summary: 'Scrape multiple URLs and optionally extract information using an LLM',
  operationId: 'scrapeAndExtractFromUrls',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              urls: z.array(z.url().openapi({ description: 'The URL to scrape' })),
              webhook: z
                .object({
                  url: z
                    .string()
                    .openapi({
                      description:
                        'The URL to send the webhook to. This will trigger for batch scrape started (batch_scrape.started), every page scraped (batch_scrape.page) and when the batch scrape is completed (batch_scrape.completed or batch_scrape.failed). The response will be the same as the `/scrape` endpoint.',
                    }),
                  headers: z
                    .record(z.string(), z.string())
                    .exactOptional()
                    .openapi({ description: 'Headers to send to the webhook URL.' }),
                  metadata: z
                    .looseObject({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Custom metadata that will be included in all webhook payloads for this crawl',
                    }),
                  events: z
                    .array(z.enum(['completed', 'page', 'failed', 'started']))
                    .exactOptional()
                    .openapi({
                      description:
                        'Type of events that should be sent to the webhook URL. (default: all)',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'A webhook specification object.', required: ['url'] }),
              ignoreInvalidURLs: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'If invalid URLs are specified in the urls array, they will be ignored. Instead of them failing the entire request, a batch scrape using the remaining valid URLs will be created, and the invalid URLs will be returned in the invalidURLs field of the response.',
                }),
            })
            .openapi({ required: ['urls'] })
            .and(ScrapeOptionsSchema),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchScrapeResponseObjSchema } },
    },
    402: {
      description: 'Payment required',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'Payment required to access this resource.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    429: {
      description: 'Too many requests',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'Request rate limit exceeded. Please wait and try again later.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Server error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'An unexpected error occurred on the server.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getBatchScrapeIdRoute = createRoute({
  method: 'get',
  path: '/batch/scrape/{id}',
  tags: ['Scraping'],
  summary: 'Get the status of a batch scrape job',
  operationId: 'getBatchScrapeStatus',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the batch scrape job',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchScrapeStatusResponseObjSchema } },
    },
    402: {
      description: 'Payment required',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'Payment required to access this resource.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    429: {
      description: 'Too many requests',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'Request rate limit exceeded. Please wait and try again later.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Server error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'An unexpected error occurred on the server.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteBatchScrapeIdRoute = createRoute({
  method: 'delete',
  path: '/batch/scrape/{id}',
  tags: ['Scraping'],
  summary: 'Cancel a batch scrape job',
  operationId: 'cancelBatchScrape',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the batch scrape job',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful cancellation',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: true }),
              message: z
                .string()
                .exactOptional()
                .openapi({ example: 'Batch scrape job successfully cancelled.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Batch scrape job not found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'Batch scrape job not found.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Server error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'An unexpected error occurred on the server.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getBatchScrapeIdErrorsRoute = createRoute({
  method: 'get',
  path: '/batch/scrape/{id}/errors',
  tags: ['Scraping'],
  summary: 'Get the errors of a batch scrape job',
  operationId: 'getBatchScrapeErrors',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the batch scrape job',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CrawlErrorsResponseObjSchema } },
    },
    402: {
      description: 'Payment required',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'Payment required to access this resource.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    429: {
      description: 'Too many requests',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'Request rate limit exceeded. Please wait and try again later.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Server error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'An unexpected error occurred on the server.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getCrawlIdRoute = createRoute({
  method: 'get',
  path: '/crawl/{id}',
  tags: ['Crawling'],
  summary: 'Get the status of a crawl job',
  operationId: 'getCrawlStatus',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the crawl job',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CrawlStatusResponseObjSchema } },
    },
    402: {
      description: 'Payment required',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'Payment required to access this resource.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    429: {
      description: 'Too many requests',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'Request rate limit exceeded. Please wait and try again later.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Server error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'An unexpected error occurred on the server.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteCrawlIdRoute = createRoute({
  method: 'delete',
  path: '/crawl/{id}',
  tags: ['Crawling'],
  summary: 'Cancel a crawl job',
  operationId: 'cancelCrawl',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the crawl job',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful cancellation',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z.literal('cancelled').exactOptional().openapi({ example: 'cancelled' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Crawl job not found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'Crawl job not found.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Server error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'An unexpected error occurred on the server.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getCrawlIdErrorsRoute = createRoute({
  method: 'get',
  path: '/crawl/{id}/errors',
  tags: ['Crawling'],
  summary: 'Get the errors of a crawl job',
  operationId: 'getCrawlErrors',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the crawl job',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CrawlErrorsResponseObjSchema } },
    },
    402: {
      description: 'Payment required',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'Payment required to access this resource.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    429: {
      description: 'Too many requests',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'Request rate limit exceeded. Please wait and try again later.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Server error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'An unexpected error occurred on the server.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postCrawlRoute = createRoute({
  method: 'post',
  path: '/crawl',
  tags: ['Crawling'],
  summary: 'Crawl multiple URLs based on options',
  operationId: 'crawlUrls',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              url: z.url().openapi({ description: 'The base URL to start crawling from' }),
              excludePaths: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'URL pathname regex patterns that exclude matching URLs from the crawl. For example, if you set "excludePaths": ["blog/.*"] for the base URL firecrawl.dev, any results matching that pattern will be excluded, such as https://www.firecrawl.dev/blog/firecrawl-launch-week-1-recap.',
                }),
              includePaths: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'URL pathname regex patterns that include matching URLs in the crawl. Only the paths that match the specified patterns will be included in the response. For example, if you set "includePaths": ["blog/.*"] for the base URL firecrawl.dev, only results matching that pattern will be included, such as https://www.firecrawl.dev/blog/firecrawl-launch-week-1-recap.',
                }),
              maxDepth: z
                .int()
                .default(10)
                .exactOptional()
                .openapi({
                  description:
                    'Maximum depth to crawl relative to the base URL. Basically, the max number of slashes the pathname of a scraped URL may contain.',
                }),
              maxDiscoveryDepth: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Maximum depth to crawl based on discovery order. The root site and sitemapped pages has a discovery depth of 0. For example, if you set it to 1, and you set ignoreSitemap, you will only crawl the entered URL and all URLs that are linked on that page.',
                }),
              ignoreSitemap: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({ description: 'Ignore the website sitemap when crawling' }),
              ignoreQueryParameters: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Do not re-scrape the same path with different (or none) query parameters',
                }),
              limit: z
                .int()
                .default(10000)
                .exactOptional()
                .openapi({
                  description: 'Maximum number of pages to crawl. Default limit is 10000.',
                }),
              allowBackwardLinks: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    "Allows the crawler to follow internal links to sibling or parent URLs, not just child paths.\n\nfalse: Only crawls deeper (child) URLs.\n→ e.g. /features/feature-1 → /features/feature-1/tips ✅\n→ Won't follow /pricing or / ❌\n\ntrue: Crawls any internal links, including siblings and parents.\n→ e.g. /features/feature-1 → /pricing, /, etc. ✅\n\nUse true for broader internal coverage beyond nested paths.",
                }),
              allowExternalLinks: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description: 'Allows the crawler to follow links to external websites.',
                }),
              delay: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Delay in seconds between scrapes. This helps respect website rate limits.',
                }),
              webhook: z
                .object({
                  url: z
                    .string()
                    .openapi({
                      description:
                        'The URL to send the webhook to. This will trigger for crawl started (crawl.started), every page crawled (crawl.page) and when the crawl is completed (crawl.completed or crawl.failed). The response will be the same as the `/scrape` endpoint.',
                    }),
                  headers: z
                    .record(z.string(), z.string())
                    .exactOptional()
                    .openapi({ description: 'Headers to send to the webhook URL.' }),
                  metadata: z
                    .looseObject({})
                    .exactOptional()
                    .openapi({
                      description:
                        'Custom metadata that will be included in all webhook payloads for this crawl',
                    }),
                  events: z
                    .array(z.enum(['completed', 'page', 'failed', 'started']))
                    .exactOptional()
                    .openapi({
                      description:
                        'Type of events that should be sent to the webhook URL. (default: all)',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'A webhook specification object.', required: ['url'] }),
              scrapeOptions: ScrapeOptionsSchema.exactOptional(),
            })
            .openapi({ required: ['url'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CrawlResponseSchema } },
    },
    402: {
      description: 'Payment required',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'Payment required to access this resource.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    429: {
      description: 'Too many requests',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'Request rate limit exceeded. Please wait and try again later.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Server error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'An unexpected error occurred on the server.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postMapRoute = createRoute({
  method: 'post',
  path: '/map',
  tags: ['Mapping'],
  summary: 'Map multiple URLs based on options',
  operationId: 'mapUrls',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              url: z.url().openapi({ description: 'The base URL to start crawling from' }),
              search: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Search query to use for mapping. During the Alpha phase, the 'smart' part of the search functionality is limited to 1000 search results. However, if map finds more results, there is no limit applied.",
                }),
              ignoreSitemap: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({ description: 'Ignore the website sitemap when crawling.' }),
              sitemapOnly: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({ description: 'Only return links found in the website sitemap' }),
              includeSubdomains: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({ description: 'Include subdomains of the website' }),
              limit: z
                .int()
                .max(30000)
                .default(5000)
                .exactOptional()
                .openapi({ description: 'Maximum number of links to return' }),
              timeout: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Timeout in milliseconds. There is no timeout by default.',
                }),
            })
            .openapi({ required: ['url'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MapResponseSchema } },
    },
    402: {
      description: 'Payment required',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'Payment required to access this resource.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    429: {
      description: 'Too many requests',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'Request rate limit exceeded. Please wait and try again later.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Server error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'An unexpected error occurred on the server.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postExtractRoute = createRoute({
  method: 'post',
  path: '/extract',
  tags: ['Extraction'],
  summary: 'Extract structured data from pages using LLMs',
  operationId: 'extractData',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              urls: z.array(
                z
                  .url()
                  .openapi({
                    description: 'The URLs to extract data from. URLs should be in glob format.',
                  }),
              ),
              prompt: z
                .string()
                .exactOptional()
                .openapi({ description: 'Prompt to guide the extraction process' }),
              schema: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Schema to define the structure of the extracted data. Must conform to [JSON Schema](https://json-schema.org/).',
                }),
              enableWebSearch: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'When true, the extraction will use web search to find additional data',
                }),
              ignoreSitemap: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'When true, sitemap.xml files will be ignored during website scanning',
                }),
              includeSubdomains: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description: 'When true, subdomains of the provided URLs will also be scanned',
                }),
              showSources: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'When true, the sources used to extract the data will be included in the response as `sources` key',
                }),
              scrapeOptions: ScrapeOptionsSchema.exactOptional(),
              ignoreInvalidURLs: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'If invalid URLs are specified in the urls array, they will be ignored. Instead of them failing the entire request, an extract using the remaining valid URLs will be performed, and the invalid URLs will be returned in the invalidURLs field of the response.',
                }),
            })
            .openapi({ required: ['urls'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful extraction',
      content: { 'application/json': { schema: ExtractResponseSchema } },
    },
    400: {
      description: 'Invalid request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'Invalid input data.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Server error',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'An unexpected error occurred on the server.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getExtractIdRoute = createRoute({
  method: 'get',
  path: '/extract/{id}',
  tags: ['Extraction'],
  summary: 'Get the status of an extract job',
  operationId: 'getExtractStatus',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the extract job',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ExtractStatusResponseSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getCrawlActiveRoute = createRoute({
  method: 'get',
  path: '/crawl/active',
  tags: ['Crawling'],
  summary: 'Get all active crawls for the authenticated team',
  operationId: 'getActiveCrawls',
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().openapi({ example: true }),
              crawls: z
                .array(
                  z
                    .object({
                      id: z.uuid().openapi({ description: 'The unique identifier of the crawl' }),
                      teamId: z
                        .string()
                        .openapi({ description: 'The ID of the team that owns the crawl' }),
                      url: z.url().openapi({ description: 'The origin URL of the crawl' }),
                      options: z
                        .object({ scrapeOptions: ScrapeOptionsSchema.exactOptional() })
                        .openapi({
                          description: 'The crawler options used for this crawl',
                          required: [],
                        }),
                    })
                    .openapi({ required: ['id', 'teamId', 'url', 'status', 'options'] }),
                )
                .exactOptional(),
            })
            .openapi({ required: ['success', 'data'] }),
        },
      },
    },
    402: {
      description: 'Payment required',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'Payment required to access this resource.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    429: {
      description: 'Too many requests',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'Request rate limit exceeded. Please wait and try again later.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Server error',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'An unexpected error occurred on the server.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postDeepResearchRoute = createRoute({
  method: 'post',
  path: '/deep-research',
  tags: ['Research'],
  summary: 'Start a deep research operation on a query',
  operationId: 'startDeepResearch',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              query: z.string().openapi({ description: 'The query to research' }),
              maxDepth: z
                .int()
                .min(1)
                .max(12)
                .default(7)
                .exactOptional()
                .openapi({ description: 'Maximum depth of research iterations' }),
              timeLimit: z
                .int()
                .min(30)
                .max(600)
                .default(300)
                .exactOptional()
                .openapi({ description: 'Time limit in seconds' }),
              maxUrls: z
                .int()
                .min(1)
                .max(1000)
                .default(20)
                .exactOptional()
                .openapi({ description: 'Maximum number of URLs to analyze' }),
              analysisPrompt: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The prompt to use for the final analysis. Useful to format the final analysis markdown in a specific way.',
                }),
              systemPrompt: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The system prompt to use for the research agent. Useful to steer the research agent to a specific direction.',
                }),
              formats: z
                .array(z.enum(['markdown', 'json', 'branding']).openapi({ default: ['markdown'] }))
                .exactOptional(),
              jsonOptions: z
                .object({
                  schema: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'The schema to use for the JSON output. Must conform to [JSON Schema](https://json-schema.org/).',
                    }),
                  systemPrompt: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The system prompt to use for the JSON output' }),
                  prompt: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The prompt to use for the JSON output' }),
                })
                .exactOptional()
                .openapi({ description: 'Options for JSON output', required: [] }),
            })
            .openapi({ required: ['query'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Research job started successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: true }),
              id: z.uuid().exactOptional().openapi({ description: 'ID of the research job' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Invalid request parameters',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z.string().exactOptional().openapi({ example: 'Invalid parameters provided' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getDeepResearchIdRoute = createRoute({
  method: 'get',
  path: '/deep-research/{id}',
  tags: ['Research'],
  summary: 'Get the status and results of a deep research operation',
  operationId: 'getDeepResearchStatus',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the research job',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              data: z
                .object({
                  finalAnalysis: z.string().exactOptional(),
                  json: z
                    .object({})
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Displayed when using JSON format' }),
                  activities: z
                    .array(
                      z
                        .object({
                          type: z.string().exactOptional(),
                          status: z.string().exactOptional(),
                          message: z.string().exactOptional(),
                          timestamp: z.iso.datetime({ offset: true }).exactOptional(),
                          depth: z.int().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  sources: z
                    .array(
                      z
                        .object({
                          url: z.string().exactOptional(),
                          title: z.string().exactOptional(),
                          description: z.string().exactOptional(),
                          favicon: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  status: z.enum(['processing', 'completed', 'failed']).exactOptional(),
                  error: z.string().exactOptional(),
                  expiresAt: z.iso.datetime({ offset: true }).exactOptional(),
                  currentDepth: z.int().exactOptional(),
                  maxDepth: z.int().exactOptional(),
                  totalUrls: z.int().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Research job not found',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z.string().exactOptional().openapi({ example: 'Research job not found' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getTeamCreditUsageRoute = createRoute({
  method: 'get',
  path: '/team/credit-usage',
  tags: ['Billing'],
  summary: 'Get remaining credits for the authenticated team',
  operationId: 'getCreditUsage',
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: true }),
              data: z
                .object({
                  remaining_credits: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Number of credits remaining for the team',
                      example: 1000,
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Credit usage information not found',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'Could not find credit usage information' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Server error',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'Internal server error while fetching credit usage' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getTeamTokenUsageRoute = createRoute({
  method: 'get',
  path: '/team/token-usage',
  tags: ['Billing'],
  summary: 'Get remaining tokens for the authenticated team (Extract only)',
  operationId: 'getTokenUsage',
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: true }),
              data: z
                .object({
                  remaining_tokens: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Number of tokens remaining for the team',
                      example: 1000,
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Token usage information not found',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'Could not find token usage information' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Server error',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'Internal server error while fetching token usage' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postSearchRoute = createRoute({
  method: 'post',
  path: '/search',
  tags: ['Search'],
  summary: 'Search and optionally scrape search results',
  operationId: 'searchAndScrape',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              query: z.string().openapi({ description: 'The search query' }),
              limit: z
                .int()
                .min(1)
                .max(100)
                .default(5)
                .exactOptional()
                .openapi({ description: 'Maximum number of results to return' }),
              tbs: z
                .string()
                .exactOptional()
                .openapi({ description: 'Time-based search parameter' }),
              location: z
                .string()
                .exactOptional()
                .openapi({ description: 'Location parameter for search results' }),
              timeout: z
                .int()
                .default(60000)
                .exactOptional()
                .openapi({ description: 'Timeout in milliseconds' }),
              ignoreInvalidURLs: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Excludes URLs from the search results that are invalid for other Firecrawl endpoints. This helps reduce errors if you are piping data from search into other Firecrawl API endpoints.',
                }),
              scrapeOptions: z
                .object({
                  formats: z
                    .array(
                      z.enum([
                        'markdown',
                        'html',
                        'rawHtml',
                        'links',
                        'screenshot',
                        'screenshot@fullPage',
                        'json',
                        'branding',
                      ]),
                    )
                    .default([])
                    .exactOptional()
                    .openapi({ description: 'Formats to include in the output' }),
                })
                .default({})
                .exactOptional()
                .openapi({ description: 'Options for scraping search results', required: [] }),
            })
            .openapi({ required: ['query'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              data: z
                .array(
                  z
                    .object({
                      title: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Title from search result' }),
                      description: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Description from search result' }),
                      url: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'URL of the search result' }),
                      markdown: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Markdown content if scraping was requested' }),
                      html: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'HTML content if requested in formats' }),
                      rawHtml: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Raw HTML content if requested in formats' }),
                      links: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({ description: 'Links found if requested in formats' }),
                      screenshot: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Screenshot URL if requested in formats' }),
                      metadata: z
                        .object({
                          title: z.string().exactOptional(),
                          description: z.string().exactOptional(),
                          sourceURL: z.string().exactOptional(),
                          statusCode: z.int().exactOptional(),
                          error: z.string().nullable().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              warning: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Warning message if any issues occurred' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    408: {
      description: 'Request timeout',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z.string().exactOptional().openapi({ example: 'Request timed out' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Server error',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'An unexpected error occurred on the server.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postLlmstxtRoute = createRoute({
  method: 'post',
  path: '/llmstxt',
  tags: ['LLMs.txt'],
  summary: 'Generate LLMs.txt for a website',
  operationId: 'generateLLMsTxt',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              url: z.url().openapi({ description: 'The URL to generate LLMs.txt from' }),
              maxUrls: z
                .int()
                .default(2)
                .exactOptional()
                .openapi({ description: 'Maximum number of URLs to analyze' }),
              showFullText: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({ description: 'Include full text content in the response' }),
            })
            .openapi({ required: ['url'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'LLMs.txt generation job started successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: true }),
              id: z
                .uuid()
                .exactOptional()
                .openapi({ description: 'ID of the LLMs.txt generation job' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Invalid request parameters',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z.string().exactOptional().openapi({ example: 'Invalid parameters provided' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getLlmstxtIdRoute = createRoute({
  method: 'get',
  path: '/llmstxt/{id}',
  tags: ['LLMs.txt'],
  summary: 'Get the status and results of an LLMs.txt generation job',
  operationId: 'getLLMsTxtStatus',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ID of the LLMs.txt generation job',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              status: z.enum(['processing', 'completed', 'failed']).exactOptional(),
              data: z
                .object({
                  llmstxt: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The generated LLMs.txt content' }),
                  llmsfulltxt: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The full text content when showFullText is true' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              expiresAt: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'When the generated content will expire' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'LLMs.txt generation job not found',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'LLMs.txt generation job not found' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})
