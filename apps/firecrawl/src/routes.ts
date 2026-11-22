import { createRoute, z } from '@hono/zod-openapi'

const MonitorScheduleSchema = z
  .object({
    cron: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Five-field cron expression. Minimum interval is 5 minutes.',
        example: '*/30 * * * *',
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Natural language schedule. Supported examples include `every 30 minutes`, `every 15 minutes starting at :07`, `hourly`, `every 2 hours`, `daily`, `daily at 9:00`, `daily at 9am`, `daily at 5:30 PM`, and `weekly`.',
        example: 'every 30 minutes',
      }),
    timezone: z
      .string()
      .default('UTC')
      .exactOptional()
      .openapi({ description: 'IANA timezone for the schedule.', example: 'UTC' }),
  })
  .openapi({
    description: 'Schedule for monitor checks. Provide either `cron` or `text`.',
    required: [],
  })
  .openapi('MonitorSchedule')

const MonitorWebhookSchema = z
  .object({
    url: z.url().openapi({ description: 'The URL to send monitor webhooks to.' }),
    headers: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Headers to send to the webhook URL.' }),
    metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Custom metadata included in webhook payloads.' }),
    events: z
      .array(z.enum(['monitor.page', 'monitor.check.completed']))
      .exactOptional()
      .openapi({
        description: 'Monitor webhook events to receive. Defaults to all monitor events.',
      }),
  })
  .openapi({
    description: 'Webhook destination for monitor page and check completion events.',
    required: ['url'],
  })
  .openapi('MonitorWebhook')

const MonitorNotificationSchema = z
  .object({
    email: z
      .object({
        enabled: z.boolean().default(false).exactOptional(),
        recipients: z.array(z.email()).max(25).exactOptional(),
        includeDiffs: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({ description: 'Include changed page details in email summaries.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('MonitorNotification')

const FormatsSchema = z
  .array(
    z.xor([
      z.object({ type: z.literal('markdown') }).openapi({ title: 'Markdown', required: ['type'] }),
      z.object({ type: z.literal('summary') }).openapi({ title: 'Summary', required: ['type'] }),
      z.object({ type: z.literal('html') }).openapi({ title: 'HTML', required: ['type'] }),
      z.object({ type: z.literal('rawHtml') }).openapi({ title: 'Raw HTML', required: ['type'] }),
      z
        .object({ type: z.literal('rawBase64') })
        .openapi({ title: 'Raw Base64', required: ['type'] }),
      z.object({ type: z.literal('links') }).openapi({ title: 'Links', required: ['type'] }),
      z.object({ type: z.literal('images') }).openapi({ title: 'Images', required: ['type'] }),
      z
        .object({
          type: z.literal('attributes'),
          selectors: z
            .array(
              z
                .strictObject({
                  selector: z.string().openapi({ description: 'CSS selector to find elements.' }),
                  attribute: z
                    .string()
                    .openapi({
                      description:
                        'Attribute name to extract (for example `data-vehicle-name` or `id`).',
                    }),
                })
                .openapi({ required: ['selector', 'attribute'] }),
            )
            .openapi({ description: 'The elements and attributes to extract.' }),
        })
        .openapi({
          title: 'Attributes',
          description:
            'Extract attribute values from the elements that match CSS selectors. Returns the values in the response `attributes` field.',
          required: ['type', 'selectors'],
        }),
      z
        .object({
          type: z.literal('screenshot'),
          fullPage: z
            .boolean()
            .default(false)
            .exactOptional()
            .openapi({
              description:
                'Whether to capture a full-page screenshot (ignores viewport.height) or limit to the current viewport.',
            }),
          quality: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The quality of the screenshot, from 1 to 100. 100 is the highest quality.',
            }),
          viewport: z
            .object({
              width: z.int().openapi({ description: 'The width of the viewport in pixels' }),
              height: z.int().openapi({ description: 'The height of the viewport in pixels' }),
            })
            .exactOptional()
            .openapi({ required: ['width', 'height'] }),
        })
        .openapi({ title: 'Screenshot', required: ['type'] }),
      z
        .object({
          type: z.literal('json'),
          schema: z
            .looseObject({})
            .exactOptional()
            .openapi({
              description:
                'The schema to use for the JSON output. Must conform to [JSON Schema](https://json-schema.org/).',
            }),
          prompt: z
            .string()
            .exactOptional()
            .openapi({ description: 'The prompt to use for the JSON output' }),
          checkPromptInjection: z
            .boolean()
            .default(false)
            .exactOptional()
            .openapi({
              deprecated: true,
              description:
                'Deprecated: use the top-level `checkPromptInjection` scrape option, which this value is merged into. Defaults to false.',
            }),
        })
        .openapi({ title: 'JSON', required: ['type'] }),
      z
        .object({
          type: z.literal('changeTracking'),
          modes: z
            .array(z.enum(['git-diff', 'json']))
            .exactOptional()
            .openapi({
              description:
                "The mode to use for change tracking. 'git-diff' provides a detailed diff, and 'json' compares extracted JSON data.",
            }),
          schema: z
            .looseObject({})
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
        .openapi({ title: 'Change Tracking', required: ['type'] }),
      z.object({ type: z.literal('branding') }).openapi({ title: 'Branding', required: ['type'] }),
      z.object({ type: z.literal('product') }).openapi({ title: 'Product', required: ['type'] }),
      z.object({ type: z.literal('menu') }).openapi({ title: 'Menu', required: ['type'] }),
      z
        .object({ type: z.literal('audio') })
        .openapi({
          title: 'Audio',
          description:
            'Extract audio (MP3) from supported video URLs, e.g. YouTube. Returns a signed GCS URL.',
          required: ['type'],
        }),
      z
        .object({ type: z.literal('video') })
        .openapi({
          title: 'Video',
          description:
            'Extract best-quality video from supported video URLs, e.g. YouTube. Returns a signed GCS URL.',
          required: ['type'],
        }),
      z
        .object({
          type: z.literal('question'),
          question: z
            .string()
            .max(10000)
            .openapi({
              description: 'The question to answer about the page. Maximum 10,000 characters.',
            }),
        })
        .openapi({
          title: 'Question',
          description:
            'Ask a natural-language question about the page. Returns the answer in the response `answer` field.',
          required: ['type', 'question'],
        }),
      z
        .object({
          type: z.literal('highlights'),
          query: z
            .string()
            .max(10000)
            .openapi({
              description:
                'The text-selection query to run against the page. Maximum 10,000 characters.',
            }),
        })
        .openapi({
          title: 'Highlights',
          description:
            'Find relevant source text from the page. Returns the selected text in the response `highlights` field.',
          required: ['type', 'query'],
        }),
    ]),
  )
  .openapi({
    description:
      "Output formats to include in the response. You can specify one or more formats, either as strings (e.g., `'markdown'`) or as objects with additional options (e.g., `{ type: 'json', schema: {...} }`). Some formats require specific options to be set. Example: `['markdown', { type: 'json', schema: {...} }]`.",
    default: ['markdown'],
  })
  .openapi('Formats')

const RedactPIIEntitySchema = z
  .enum(['PERSON', 'EMAIL', 'PHONE', 'LOCATION', 'FINANCIAL', 'SECRET'])
  .openapi({ description: 'Public PII entity buckets supported by Firecrawl redaction.' })
  .openapi('RedactPIIEntity')

const RedactPIIOptionsSchema = z
  .strictObject({
    mode: z
      .enum(['accurate', 'aggressive', 'fast'])
      .default('accurate')
      .exactOptional()
      .openapi({
        description:
          'Redaction strategy. `accurate` is model-only and optimized for precision, `aggressive` increases recall with additional heuristics, and `fast` uses heuristics without the model call.',
      }),
    entities: z
      .array(RedactPIIEntitySchema)
      .exactOptional()
      .openapi({
        description:
          'Restrict redaction to these entity buckets. If omitted, all supported entities are redacted.',
      }),
    replaceStyle: z
      .enum(['tag', 'mask', 'remove'])
      .default('tag')
      .exactOptional()
      .openapi({
        description:
          '`tag` replaces spans with placeholders like `<EMAIL>`, `mask` replaces characters with `*`, and `remove` deletes the span text.',
      }),
  })
  .openapi({ description: 'Tuning options for PII redaction.', required: [] })
  .openapi('RedactPIIOptions')

const ThreatProtectionOverrideSchema = z
  .object({
    mode: z
      .enum(['off', 'normal'])
      .exactOptional()
      .openapi({
        description:
          'URL scanning mode for this request. `normal` checks URLs against Google Web Risk (+2 credits per URL scanned).',
      }),
    riskScoreThreshold: z
      .int()
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'Normalized risk score (0–100) at or above which a classifier verdict blocks the URL. Lower is stricter.',
        example: 75,
      }),
    blacklist: z
      .array(z.string())
      .max(1000)
      .exactOptional()
      .openapi({
        description:
          'Domains to always block, as plain domains (`example.com`) or wildcard globs (`*.example.com`). No protocol, path, or port.',
      }),
    whitelist: z
      .array(z.string())
      .max(1000)
      .exactOptional()
      .openapi({
        description:
          'Domains to always allow, as plain domains or wildcard globs. Wins over every other rule.',
      }),
    blockedTlds: z
      .array(z.string())
      .max(1000)
      .exactOptional()
      .openapi({
        description:
          'Top-level domains to block outright, lowercase without the leading dot (e.g. `zip`).',
      }),
    failurePolicy: z
      .enum(['open', 'closed'])
      .exactOptional()
      .openapi({
        description:
          "What to do when the classifier can't be reached: `closed` blocks the request, `open` allows it.",
      }),
  })
  .openapi({
    title: 'Threat Protection Override',
    description:
      "Per-request [Threat Protection](https://docs.firecrawl.dev/features/threat-protection) override. Fields you provide replace the corresponding fields of your organization's policy for this request only; omitted fields keep their organization-level values. Requires Threat Protection to be enabled for your team (enterprise feature) — otherwise the request is rejected with a 403. If your organization has disabled request overrides, any request that includes this object is rejected with a 403. If Threat Protection is enforced for your team, `mode` may not be set to `off`.",
    required: [],
  })
  .openapi('ThreatProtectionOverride')

const AuditMetadataSchema = z
  .strictObject({
    username: z
      .string()
      .max(1024)
      .openapi({ description: 'The username associated with the request.' }),
  })
  .openapi({
    description:
      'User attribution included with SIEM logging events when SIEM Logging is enabled for the organization.',
    required: ['username'],
  })
  .openapi('AuditMetadata')

const ScrapeOptionsSchema = z
  .object({
    formats: FormatsSchema.exactOptional(),
    onlyMainContent: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Only return the main content of the page excluding headers, navs, footers, etc. This is a deterministic HTML-level filter applied before markdown is generated; no LLM is involved.',
      }),
    onlyCleanContent: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          "Beta. Run an additional LLM-based pass over the generated markdown to remove residual boilerplate that `onlyMainContent` can miss (cookie banners, ad blocks, social share widgets, breadcrumbs, newsletter signups, comment sections, related-article lists). Headings, lists, tables, code blocks, image references, and inline links are preserved. Can be combined with `onlyMainContent` (the most common setup) or used on its own. Skipped with a warning when the markdown exceeds the cleaning model's output token limit (the original markdown is preserved). Not supported on zero-data-retention requests.",
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
      .default(172800000)
      .exactOptional()
      .openapi({
        description:
          'Returns a cached version of the page if it is younger than this age in milliseconds. If a cached version of the page is older than this value, the page will be scraped. If you do not need extremely fresh data, enabling this can speed up your scrapes by 500%. Defaults to 2 days.',
      }),
    minAge: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'When set, the request only checks the cache and never triggers a fresh scrape. The value is in milliseconds and specifies the minimum age the cached data must be. If matching cached data exists, it is returned instantly. If no cached data is found, a 404 with error code SCRAPE_NO_CACHED_DATA is returned. Set to 1 to accept any cached data regardless of age.',
      }),
    headers: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'Headers to send with the request. Can be used to send cookies, user-agent, etc.',
      }),
    waitFor: z
      .int()
      .max(60000)
      .default(0)
      .exactOptional()
      .openapi({
        description:
          "Specify a delay in milliseconds before fetching the content, allowing the page sufficient time to load. This waiting time is in addition to Firecrawl's smart wait feature.",
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
      .default(true)
      .exactOptional()
      .openapi({ description: 'Skip TLS certificate verification when making requests.' }),
    timeout: z
      .int()
      .min(1000)
      .max(300000)
      .default(60000)
      .exactOptional()
      .openapi({
        description:
          'Timeout in milliseconds for the request. Minimum is 1000 (1 second). Default is 60000 (60 seconds). Maximum is 300000 (300 seconds).',
      }),
    parsers: z
      .array(
        z.xor([
          z
            .enum(['pdf', 'image'])
            .openapi({
              title: 'Parser name',
              description:
                'Shorthand for a parser object with default options. `"pdf"` is the same as `{ "type": "pdf" }`.',
            }),
          z
            .strictObject({
              type: z.literal('pdf'),
              mode: z
                .enum(['fast', 'auto', 'ocr'])
                .default('auto')
                .exactOptional()
                .openapi({
                  description:
                    'PDF parsing mode. "fast": text-based extraction only (embedded text, fastest). "auto" (default): attempts fast extraction first, falls back to OCR if needed. "ocr": forces OCR parsing on every page.',
                }),
              maxPages: z
                .int()
                .min(1)
                .max(10000)
                .exactOptional()
                .openapi({
                  description:
                    'Maximum number of pages to parse from the PDF. Must be a positive integer up to 10000.',
                }),
              pages: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Include physical per-page markdown alongside the document markdown. Populates the `pages` field on the document as an array of { pageNumber, markdown }. No additional cost.',
                }),
              blocks: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Include per-page typed layout blocks alongside the document markdown. Populates the `blocks` field on the document: typed blocks (title, section_header, text, table, formula, figure, caption, ...) with normalized bounding boxes, reading order, character-span links into the markdown, and per-block confidence. No additional cost.',
                }),
              pageMarkers: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Annotate page breaks in the document markdown: pages are joined with `\\n\\n---\\n\\n<!-- page N -->\\n\\n`, where N is the 1-based physical page of the content that follows. Markers appear between pages only (no leading marker for page 1), and numbering may skip pages merged across a page break — use `pages: true` when every physical page is needed. No new response field; no additional cost.',
                }),
            })
            .openapi({ title: 'PDF', required: ['type'] }),
          z
            .strictObject({ type: z.literal('image') })
            .openapi({
              title: 'Image',
              description:
                'Image OCR parser. It has no options. The PDF options (`mode`, `maxPages`, `pages`, `blocks`, `pageMarkers`) do not apply to images.',
              required: ['type'],
            }),
        ]),
      )
      .default(['pdf', 'image'])
      .exactOptional()
      .openapi({
        description:
          'Controls how files are processed during scraping. Each item is a parser name (`"pdf"` or `"image"`) or a parser object. Both parsers are on by default.\n\n - **pdf**: PDF content is extracted and converted to markdown format, with billing based on the number of pages (1 credit per page).\n - **image**: Raster images (PNG, JPEG, JPEG 2000, TIFF, GIF, BMP, WebP, AVIF) are OCR\'d as one-page documents and converted to markdown. SVG and HEIC are not supported.\n\nIf you pass a list, parsers that are not in the list are off. For example, `["pdf"]` turns off image OCR, so image URLs fail as unsupported files. When an empty array is passed, the PDF file is returned in base64 encoding with a flat rate of 1 credit for the entire PDF.',
      }),
    actions: z
      .array(
        z.xor([
          z
            .xor([
              z
                .strictObject({
                  type: z
                    .literal('wait')
                    .openapi({ description: 'Wait for a specified amount of milliseconds' }),
                  milliseconds: z
                    .int()
                    .min(1)
                    .openapi({ description: 'Number of milliseconds to wait' }),
                })
                .openapi({ title: 'Wait by Duration', required: ['type', 'milliseconds'] }),
              z
                .strictObject({
                  type: z
                    .literal('wait')
                    .openapi({ description: 'Wait for a specific element to appear' }),
                  selector: z
                    .string()
                    .openapi({ description: 'CSS selector to wait for', example: '#my-element' }),
                })
                .openapi({ title: 'Wait for Element', required: ['type', 'selector'] }),
            ])
            .openapi({ title: 'Wait' }),
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
                .openapi({
                  description:
                    'Whether to capture a full-page screenshot (ignores viewport.height) or limit to the current viewport.',
                }),
              quality: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The quality of the screenshot, from 1 to 100. 100 is the highest quality.',
                }),
              viewport: z
                .object({
                  width: z.int().openapi({ description: 'The width of the viewport in pixels' }),
                  height: z.int().openapi({ description: 'The height of the viewport in pixels' }),
                })
                .exactOptional()
                .openapi({ required: ['width', 'height'] }),
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
          z
            .object({
              type: z
                .literal('pdf')
                .openapi({
                  description:
                    'Generate a PDF of the current page. The PDF will be returned in the `actions.pdfs` array of the response.',
                }),
              format: z
                .enum([
                  'A0',
                  'A1',
                  'A2',
                  'A3',
                  'A4',
                  'A5',
                  'A6',
                  'Letter',
                  'Legal',
                  'Tabloid',
                  'Ledger',
                ])
                .default('Letter')
                .exactOptional()
                .openapi({ description: 'The page size of the resulting PDF' }),
              landscape: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({ description: 'Whether to generate the PDF in landscape orientation' }),
              scale: z
                .number()
                .default(1)
                .exactOptional()
                .openapi({ description: 'The scale multiplier of the resulting PDF' }),
            })
            .openapi({ title: 'Generate PDF', required: ['type'] }),
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
      .default(true)
      .exactOptional()
      .openapi({
        description:
          "Removes all base 64 images from the markdown output, which may be overwhelmingly long. This does not affect html or rawHtml formats. The image's alt text remains in the output, but the URL is replaced with a placeholder.",
      }),
    blockAds: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Enables ad-blocking and cookie popup blocking.' }),
    proxy: z
      .enum(['basic', 'enhanced', 'auto'])
      .default('auto')
      .exactOptional()
      .openapi({
        description:
          'Specifies the type of proxy to use.\n\n - **basic**: Proxies for scraping sites with none to basic anti-bot solutions. Fast and usually works.\n - **enhanced**: Enhanced proxies for scraping sites with advanced anti-bot solutions. Slower, but more reliable on certain sites. Billed at the same credit cost as basic.\n - **auto**: Firecrawl will automatically retry scraping with enhanced proxies if the basic proxy fails. Enhanced proxies carry no credit surcharge, so either way only the regular cost is billed.',
      }),
    storeInCache: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'If true, the page will be stored in the Firecrawl index and cache. Setting this to false is useful if your scraping activity may have data protection concerns. Using some parameters associated with sensitive scraping (e.g. actions, headers) will force this parameter to be false.',
      }),
    lockdown: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          "If true, serves the request from Firecrawl's cache only and never makes an outbound request to the target URL. Designed for compliance-constrained or air-gapped environments where the scrape request itself could leak sensitive information. On cache miss, returns a 404 with error code SCRAPE_LOCKDOWN_CACHE_MISS (the URL is never logged on miss). Lockdown requests are treated as zero data retention. Default maxAge is extended to 2 years so existing cached pages remain eligible. Billed at 5 credits on hit, 1 credit on cache miss.",
      }),
    checkPromptInjection: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'When enabled, scans the page content for prompt injection attempts before any LLM-backed format (such as json, summary or question) runs. Works with any format except rawBase64. If an injection is detected, the request fails with a 403 and error code SCRAPE_PROMPT_INJECTION_DETECTED. Adds 4 credits when the check runs. If the check cannot scan all of the content, the scrape continues with a warning and the check is not billed.',
      }),
    redactPII: z
      .xor([z.boolean(), RedactPIIOptionsSchema])
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Redact personally identifiable information from returned markdown. Pass `true` to use defaults, or an object to tune mode, entities, and replacement style.',
      }),
    profile: z
      .object({
        name: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'A name for the profile. Scrapes with the same name share browser state (cookies, localStorage, sessions).',
          }),
        saveChanges: z
          .boolean()
          .default(true)
          .exactOptional()
          .openapi({
            description:
              'When true, browser state is saved back to the profile when the interact session stops. Set to false to load existing data without writing. Only one saving session is allowed at a time.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Enable persistent browser storage across scrape and interact sessions. Pass a profile when scraping to preserve cookies, localStorage, and session data. Sessions with the same profile name share browser state.',
        required: ['name'],
      }),
    threatProtection: ThreatProtectionOverrideSchema.exactOptional(),
    auditMetadata: AuditMetadataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScrapeOptions')

const MonitorTargetSchema = z
  .xor([
    z
      .object({
        id: z
          .uuid()
          .exactOptional()
          .openapi({ description: 'Optional stable ID for this target. Generated if omitted.' }),
        type: z.literal('scrape'),
        urls: z.array(z.url()).min(1),
        scrapeOptions: ScrapeOptionsSchema.exactOptional(),
      })
      .openapi({ title: 'Scrape target', required: ['type', 'urls'] }),
    z
      .object({
        id: z
          .uuid()
          .exactOptional()
          .openapi({ description: 'Optional stable ID for this target. Generated if omitted.' }),
        type: z.literal('crawl'),
        url: z.url(),
        crawlOptions: z
          .looseObject({})
          .exactOptional()
          .openapi({
            description:
              'Crawl options such as `limit`, `maxDepth`, `includePaths`, and `excludePaths`.',
          }),
        scrapeOptions: ScrapeOptionsSchema.exactOptional(),
      })
      .openapi({ title: 'Crawl target', required: ['type', 'url'] }),
    z
      .object({
        id: z
          .uuid()
          .exactOptional()
          .openapi({ description: 'Optional stable ID for this target. Generated if omitted.' }),
        type: z.literal('search'),
        queries: z
          .array(z.string().min(1).max(256))
          .min(1)
          .max(12)
          .openapi({ description: 'Search queries to run on each check (1-12).' }),
        searchWindow: z
          .enum(['5m', '15m', '1h', '6h', '24h', '7d'])
          .default('24h')
          .exactOptional()
          .openapi({
            description: 'Recency filter — only consider results published within this window.',
          }),
        maxResults: z
          .int()
          .min(1)
          .max(50)
          .default(10)
          .exactOptional()
          .openapi({
            description:
              'Total results to evaluate per check, merged and deduped across all queries (a combined cap, not per-query).',
          }),
        includeDomains: z
          .array(z.string())
          .max(50)
          .exactOptional()
          .openapi({ description: 'Optional. Restrict results to these domains.' }),
        excludeDomains: z
          .array(z.string())
          .max(50)
          .exactOptional()
          .openapi({ description: 'Optional. Drop results from these domains.' }),
      })
      .openapi({
        title: 'Search target',
        description:
          "Runs web search queries on each check and alerts on new results that match the monitor's goal. Requires a non-empty top-level `goal` on the monitor unless `judgeEnabled` is `false`.",
        required: ['type', 'queries'],
      }),
  ])
  .openapi('MonitorTarget')

type MonitorCreateRequestType = {
  name: string
  schedule: z.infer<typeof MonitorScheduleSchema>
  webhook?: z.infer<typeof MonitorWebhookSchema>
  notification?: z.infer<typeof MonitorNotificationSchema>
  targets: z.infer<typeof MonitorTargetSchema>[]
  retentionDays?: number
  goal?: string | null
  judgeEnabled?: boolean
}

type MonitorUpdateRequestType = {
  name?: string
  schedule?: z.infer<typeof MonitorScheduleSchema>
  webhook?: z.infer<typeof MonitorWebhookSchema>
  notification?: z.infer<typeof MonitorNotificationSchema>
  targets?: z.infer<typeof MonitorTargetSchema>[]
  retentionDays?: number
  goal?: string | null
  judgeEnabled?: boolean
  status?: 'active' | 'paused'
}

const MonitorSummarySchema = z
  .object({
    totalPages: z.int().exactOptional(),
    same: z.int().exactOptional(),
    changed: z.int().exactOptional(),
    new: z.int().exactOptional(),
    removed: z.int().exactOptional(),
    error: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MonitorSummary')

type MonitorType = {
  id?: string
  name?: string
  status?: 'active' | 'paused' | 'deleted'
  schedule?: { cron?: string; timezone?: string }
  nextRunAt?: string | null
  lastRunAt?: string | null
  currentCheckId?: string | null
  targets?: z.infer<typeof MonitorTargetSchema>[]
  webhook?: z.infer<typeof MonitorWebhookSchema>
  notification?: z.infer<typeof MonitorNotificationSchema>
  retentionDays?: number
  estimatedCreditsPerMonth?: number | null
  lastCheckSummary?: z.infer<typeof MonitorSummarySchema>
  goal?: string | null
  judgeEnabled?: boolean
  createdAt?: string
  updatedAt?: string
}

const MonitorSchema: z.ZodType<MonitorType> = z
  .object({
    id: z.uuid().exactOptional(),
    name: z.string().exactOptional(),
    status: z.enum(['active', 'paused', 'deleted']).exactOptional(),
    schedule: z
      .object({ cron: z.string().exactOptional(), timezone: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    nextRunAt: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    lastRunAt: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    currentCheckId: z.uuid().nullable().exactOptional(),
    targets: z.array(MonitorTargetSchema).exactOptional(),
    webhook: MonitorWebhookSchema.exactOptional(),
    notification: MonitorNotificationSchema.exactOptional(),
    retentionDays: z.int().exactOptional(),
    estimatedCreditsPerMonth: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Upper-bound monthly credit estimate. When judging is enabled, actual usage may be lower because judge credits are only charged for changed pages that are judged.',
      }),
    lastCheckSummary: MonitorSummarySchema.exactOptional(),
    goal: z.string().nullable().exactOptional(),
    judgeEnabled: z.boolean().exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Monitor')

type MonitorResponseType = { success?: boolean; data?: z.infer<typeof MonitorSchema> }

type MonitorListResponseType = { success?: boolean; data?: z.infer<typeof MonitorSchema>[] }

const DiscoveredToolSchema = z
  .looseObject({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The tool's identifier, formatted as `provider/capability`. Omitted when `toolDetail` is `compact`.",
      }),
    provider: z.string().openapi({ description: 'The catalogued provider.' }),
    capability: z.string().openapi({ description: 'The provider-relative capability.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Human-readable name of the tool. Omitted when `toolDetail` is `compact`.',
      }),
    description: z
      .string()
      .openapi({ description: 'Human-readable description of what the tool does.' }),
    creditsCost: z
      .int()
      .min(0)
      .exactOptional()
      .openapi({
        description:
          'Credits charged per execution of this tool. Omitted when `toolDetail` is `compact`.',
      }),
    perRecord: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether `creditsCost` is charged per record returned rather than per call. Omitted when `toolDetail` is `compact`.',
      }),
    options: z
      .array(
        z
          .looseObject({
            name: z.string().exactOptional().openapi({ description: 'The option name.' }),
            type: z.string().exactOptional().openapi({ description: "The option's data type." }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description: "The capability's accepted options. Present only when `toolDetail` is `full`.",
      }),
    response: z
      .looseObject({
        about: z
          .string()
          .exactOptional()
          .openapi({ description: 'Human-readable description of the response payload.' }),
        key: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The key under which the primary payload is returned, when applicable.',
          }),
        fields: z
          .array(z.looseObject({}))
          .exactOptional()
          .openapi({ description: "The response's documented fields." }),
      })
      .exactOptional()
      .openapi({
        description:
          "Description of the shape of a successful response's `data`. Present only when `toolDetail` is `full`.",
        required: [],
      }),
    matchedBy: z
      .array(z.enum(['semantic', 'domain']))
      .exactOptional()
      .openapi({
        description: 'Why this tool was surfaced. Omitted when `toolDetail` is `compact`.',
      }),
    matchedUrls: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'URLs whose domain matched this tool, when matched by domain. Omitted when `toolDetail` is `compact`.',
      }),
  })
  .openapi({
    description:
      'A catalogued provider tool discovered via Alexandria, semantic search, or domain matching. The `toolDetail` request parameter sets which fields appear: `compact` returns only `provider`, `capability`, and `description`; `summary` adds the other fields except `options` and `response`; `full` also adds `options`, `response`, and `examples`.',
    required: ['provider', 'capability', 'description'],
  })
  .openapi('DiscoveredTool')

type ScrapeResponseType = {
  success?: boolean
  data?: {
    markdown?: string
    pages?: { pageNumber?: number; markdown?: string }[] | null
    blocks?:
      | {
          pageNumber?: number
          width?: number | null
          height?: number | null
          status?: string
          items?: {
            id?: string
            type?: string
            label?: string | null
            bbox?: number[] | null
            content?: string
            markdownSpan?: number[] | null
            readingOrder?: number
            source?: string | null
            confidence?: { layout?: number | null; ocr?: number | null }
          }[]
        }[]
      | null
    summary?: string | null
    html?: string | null
    rawHtml?: string | null
    rawBase64?: string | null
    screenshot?: string | null
    audio?: string | null
    video?: string | null
    answer?: string | null
    highlights?: string | null
    links?: string[]
    attributes?: { selector?: string; attribute?: string; values?: string[] }[]
    actions?: {
      screenshots?: string[]
      scrapes?: { url?: string; html?: string }[]
      javascriptReturns?: { type?: string; value?: unknown }[]
      pdfs?: string[]
    } | null
    metadata?: {
      title?: string | string[]
      description?: string | string[]
      language?: (string | string[]) | null
      sourceURL?: string
      url?: string
      keywords?: string | string[]
      ogLocaleAlternate?: string[]
      '<any other metadata> '?: string | string[]
      statusCode?: number
      numPages?: number
      totalPages?: number
      contentType?: string
      error?: string | null
      concurrencyLimited?: boolean
      concurrencyQueueDurationMs?: number
      provider?: {
        id?: string
        creditsCost?: number
        steps?: {
          provider?: string
          status?: 'matched' | 'not_found' | 'error'
          creditsCost?: number
        }[]
      }
    }
    warning?: string | null
    changeTracking?: {
      previousScrapeAt?: string | null
      changeStatus?: 'new' | 'same' | 'changed' | 'removed'
      visibility?: 'visible' | 'hidden'
      diff?: string | null
      json?: { [key: string]: unknown } | null
    } | null
    branding?: {
      colorScheme?: 'light' | 'dark'
      logo?: string | null
      colors?: {
        primary?: string
        secondary?: string
        accent?: string
        background?: string
        textPrimary?: string
        textSecondary?: string
        link?: string
        success?: string
        warning?: string
        error?: string
      } | null
      fonts?: { family?: string }[] | null
      typography?: {
        fontFamilies?: { primary?: string; heading?: string; code?: string }
        fontSizes?: { h1?: string; h2?: string; h3?: string; body?: string }
        fontWeights?: { light?: number; regular?: number; medium?: number; bold?: number }
        lineHeights?: { heading?: string; body?: string }
      } | null
      spacing?: {
        baseUnit?: number
        borderRadius?: string
        padding?: { [key: string]: unknown }
        margins?: { [key: string]: unknown }
      } | null
      components?: {
        buttonPrimary?: { background?: string; textColor?: string; borderRadius?: string }
        buttonSecondary?: {
          background?: string
          textColor?: string
          borderColor?: string
          borderRadius?: string
        }
        input?: { [key: string]: unknown }
      } | null
      icons?: { [key: string]: unknown } | null
      images?: { logo?: string; favicon?: string; ogImage?: string } | null
      animations?: { [key: string]: unknown } | null
      layout?: { [key: string]: unknown } | null
      personality?: { [key: string]: unknown } | null
    } | null
    product?: {
      title: string
      brand?: string
      category?: string
      url: string
      description?: string
      variants: {
        id?: string
        sku?: string
        title?: string
        values?: { [key: string]: string }
        price?: { amount: number; currency?: string; formatted?: string }
        sale?: { originalPrice: { amount: number; currency?: string; formatted?: string } }
        availability: { inStock: boolean; text?: string }
        images?: { url: string; alt?: string }[]
      }[]
    } | null
    menu?: {
      isMenu: boolean
      confidence?: number
      merchant?: { name: string; type?: string }
      currency?: string
      sections: {
        id?: string
        name: string
        description?: string | null
        items: {
          id?: string
          name: string
          description?: string | null
          images?: { url: string; alt?: string | null }[]
          price?: { amount: number; currency?: string; formatted?: string }
          availability?: { inStock: boolean; text?: string | null }
          dietary?: string[]
          calories?: number | null
          optionGroups?: { [key: string]: unknown }[]
          identifiers?: { merchantItemId?: string }
          url?: string | null
          sourceUrl?: string | null
        }[]
      }[]
      sourceUrl?: string | null
    } | null
    tools?: z.infer<typeof DiscoveredToolSchema>[] | null
  }
}

const FindToolsOptionsSchema = z
  .object({
    query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Natural-language description of the data you need. Returns tools that match by meaning.',
      }),
    urls: z
      .array(z.url())
      .exactOptional()
      .openapi({
        description: 'Website URLs. Returns tools whose provider matches the domain of a URL.',
      }),
    providers: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Provider IDs to browse, e.g. `particle`.' }),
    categories: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Category IDs to browse.' }),
    groups: z.array(z.string()).exactOptional().openapi({ description: 'Group IDs to browse.' }),
    capabilities: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Exact capability IDs to return.' }),
    level: z
      .enum(['providers', 'groups', 'tools'])
      .exactOptional()
      .openapi({ description: 'The catalogue level to list in `items`.' }),
    expand: z
      .array(z.enum(['options', 'response', 'examples']))
      .exactOptional()
      .openapi({
        description:
          'Contract parts to include on each tool. Use `["options", "response"]` for inputs and output shape, add `examples` for example payloads, or use `[]` for compact results.',
      }),
    limit: z
      .int()
      .min(1)
      .exactOptional()
      .openapi({ description: 'Maximum number of items on the page.' }),
    offset: z
      .int()
      .min(0)
      .exactOptional()
      .openapi({ description: 'Number of items to skip, for pagination.' }),
  })
  .openapi({
    title: 'Find Tools options',
    description:
      'Options for the Find Tools capability (`provider: firecrawl`, `capability: find-tools`) in an `alexandria` call. Find Tools is free and does not execute the tools it returns. All fields are optional. Selectors narrow the results.',
    required: [],
  })
  .openapi('FindToolsOptions')

const AlexandriaCallSchema = z
  .object({
    provider: z
      .string()
      .min(1)
      .max(200)
      .openapi({ description: 'The catalogued provider to call, e.g. `fred`.' }),
    capability: z
      .string()
      .min(1)
      .max(200)
      .openapi({
        description: 'The provider-relative capability to invoke, e.g. `series/observations`.',
      }),
    options: z
      .union([
        FindToolsOptionsSchema,
        z
          .looseObject({})
          .openapi({
            title: 'Capability options',
            description: 'Options for any other capability, as its contract defines them.',
          }),
      ])
      .default({})
      .exactOptional()
      .openapi({
        description:
          'Capability-specific options passed through to the provider tool. For Find Tools (`provider: firecrawl`, `capability: find-tools`), use `FindToolsOptions`.',
      }),
  })
  .openapi({
    description: 'A single provider tool to execute from the Alexandria catalogue.',
    required: ['provider', 'capability'],
  })
  .openapi('AlexandriaCall')

const FindToolsDataSchema = z
  .object({
    level: z
      .enum(['providers', 'groups', 'tools'])
      .openapi({ description: 'The catalogue level of the items on this page.' }),
    items: z
      .array(
        z
          .looseObject({
            id: z.string().openapi({ description: "The entry's identifier." }),
            name: z.string().openapi({ description: 'Human-readable name of the entry.' }),
            next: AlexandriaCallSchema.exactOptional().openapi({
              description: 'An `alexandria` call that returns more detail for this entry.',
            }),
            execute: z
              .object({ provider: z.string(), capability: z.string() })
              .exactOptional()
              .openapi({
                description:
                  'The `provider` and `capability` to put in an `alexandria` call to execute this tool.',
                required: ['provider', 'capability'],
              }),
          })
          .openapi({ required: ['id', 'name'] }),
      )
      .openapi({
        description:
          'Catalogue entries at `level`. At the `tools` level, each item also has the tool fields of `DiscoveredTool` (`provider`, `capability`, `description`, `creditsCost`, `perRecord`), plus `options` and `response` when `expand` asks for them.',
      }),
    total: z
      .int()
      .min(0)
      .openapi({ description: 'Total number of entries that match the selectors.' }),
    next: AlexandriaCallSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'An `alexandria` call for the next page of this listing, or `null` on the last page.',
      }),
  })
  .openapi({
    title: 'Find Tools result',
    description:
      'One page of the Alexandria catalogue, returned in `data.alexandria[].data` for a Find Tools call. The call costs 0 credits.',
    required: ['level', 'items', 'total'],
  })
  .openapi('FindToolsData')

const AlexandriaResultSchema = z
  .xor([
    z
      .object({
        provider: z.string().openapi({ description: 'The provider that was called.' }),
        capability: z.string().openapi({ description: 'The capability that was invoked.' }),
        creditsCost: z.int().min(0).openapi({ description: 'Credits charged for this call.' }),
        data: z
          .union([
            FindToolsDataSchema,
            z
              .any()
              .openapi({
                title: 'Capability response',
                description: 'The response of any other capability, as its contract defines it.',
              }),
          ])
          .openapi({
            description:
              "The provider's response payload. For Find Tools (`provider: firecrawl`, `capability: find-tools`), this is a `FindToolsData` page.",
          }),
        records: z
          .int()
          .exactOptional()
          .openapi({ description: 'Number of records returned, when applicable.' }),
        upstreamStatus: z
          .int()
          .exactOptional()
          .openapi({
            description: 'HTTP status code returned by the upstream provider, when applicable.',
          }),
      })
      .openapi({ title: 'Success', required: ['provider', 'capability', 'creditsCost', 'data'] }),
    z
      .object({
        provider: z
          .string()
          .exactOptional()
          .openapi({ description: 'The provider that was called.' }),
        capability: z
          .string()
          .exactOptional()
          .openapi({ description: 'The capability that was invoked.' }),
        creditsCost: z
          .int()
          .default(0)
          .exactOptional()
          .openapi({ description: 'Always 0 for a failed call.' }),
        error: z
          .object({
            code: z.string().openapi({ description: 'Machine-readable error code for this call.' }),
            message: z
              .string()
              .openapi({ description: 'Human-readable error message for this call.' }),
            status: z
              .int()
              .exactOptional()
              .openapi({
                description: 'HTTP status code returned by the upstream provider, when applicable.',
              }),
          })
          .openapi({ required: ['code', 'message'] }),
      })
      .openapi({ title: 'Error', required: ['error'] }),
  ])
  .openapi({
    description:
      'The outcome of one executed Alexandria call, returned in the same order as the request.',
  })
  .openapi('AlexandriaResult')

type AlexandriaScrapeResponseType = {
  success: boolean
  scrape_id: string
  data: { alexandria: z.infer<typeof AlexandriaResultSchema>[]; creditsCost: number }
}

type CrawlStatusResponseObjType = {
  status?: string
  total?: number
  completed?: number
  creditsUsed?: number
  expiresAt?: string
  createdAt?: string
  completedAt?: string
  duration?: number
  next?: string | null
  data?: {
    markdown?: string
    pages?: { pageNumber?: number; markdown?: string }[] | null
    blocks?:
      | {
          pageNumber?: number
          width?: number | null
          height?: number | null
          status?: string
          items?: {
            id?: string
            type?: string
            label?: string | null
            bbox?: number[] | null
            content?: string
            markdownSpan?: number[] | null
            readingOrder?: number
            source?: string | null
            confidence?: { layout?: number | null; ocr?: number | null }
          }[]
        }[]
      | null
    html?: string | null
    rawHtml?: string | null
    rawBase64?: string | null
    links?: string[]
    screenshot?: string | null
    metadata?: {
      title?: string | string[]
      description?: string | string[]
      language?: (string | string[]) | null
      sourceURL?: string
      url?: string
      keywords?: string | string[]
      ogLocaleAlternate?: string[]
      '<any other metadata> '?: string
      statusCode?: number
      numPages?: number
      totalPages?: number
      error?: string | null
      concurrencyLimited?: boolean
      concurrencyQueueDurationMs?: number
    }
  }[]
}

type BatchScrapeStatusResponseObjType = {
  status?: string
  total?: number
  completed?: number
  creditsUsed?: number
  expiresAt?: string
  createdAt?: string
  completedAt?: string
  duration?: number
  next?: string | null
  data?: {
    markdown?: string
    pages?: { pageNumber?: number; markdown?: string }[] | null
    blocks?:
      | {
          pageNumber?: number
          width?: number | null
          height?: number | null
          status?: string
          items?: {
            id?: string
            type?: string
            label?: string | null
            bbox?: number[] | null
            content?: string
            markdownSpan?: number[] | null
            readingOrder?: number
            source?: string | null
            confidence?: { layout?: number | null; ocr?: number | null }
          }[]
        }[]
      | null
    html?: string | null
    rawHtml?: string | null
    rawBase64?: string | null
    links?: string[]
    screenshot?: string | null
    metadata?: {
      title?: string | string[]
      description?: string | string[]
      language?: (string | string[]) | null
      sourceURL?: string
      url?: string
      keywords?: string | string[]
      ogLocaleAlternate?: string[]
      '<any other metadata> '?: string
      statusCode?: number
      numPages?: number
      totalPages?: number
      error?: string | null
      concurrencyLimited?: boolean
      concurrencyQueueDurationMs?: number
    }
  }[]
}

const AgentTraceAgentSchema = z
  .object({
    id: z.uuid(),
    role: z.enum(['orchestrator', 'subagent', 'system']),
    name: z.string(),
    parentId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'ID of the parent agent (present on subagents).' }),
  })
  .openapi({
    description: 'Identity of the agent that emitted the event.',
    required: ['id', 'role', 'name'],
  })
  .openapi('AgentTraceAgent')

const AgentTraceErrorSchema = z
  .object({
    code: z.enum(['cancelled', 'credit_limit_reached', 'parent_finished', 'refused', 'internal']),
    source: z.enum(['agent', 'tool', 'billing', 'system']),
    retryable: z.boolean(),
    message: z.string(),
  })
  .openapi({
    description: 'Structured error attached to terminal and error events.',
    required: ['code', 'source', 'retryable', 'message'],
  })
  .openapi('AgentTraceError')

const AgentTraceArtifactSchema = z
  .object({
    kind: z.enum(['json', 'markdown', 'html', 'screenshot', 'text']),
    artifactId: z.string(),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'Workspace path of the artifact, e.g. /workspace/data.json.' }),
    snapshotId: z
      .uuid()
      .openapi({
        description:
          "Pass to GET /agent/{jobId}/snapshots/{snapshotId} to fetch this snapshot's content.",
      }),
    change: z.enum(['init', 'partial', 'append', 'modify', 'update']),
    changedFields: z.array(z.string()).exactOptional(),
    itemCount: z.int().exactOptional(),
    sourceToolCallId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tool call that produced this change, when applicable.' }),
  })
  .openapi({
    description: 'Descriptor for a change to an output artifact.',
    required: ['kind', 'artifactId', 'snapshotId', 'change'],
  })
  .openapi('AgentTraceArtifact')

const AgentTraceEventSchema = z
  .discriminatedUnion('type', [
    z
      .object({
        schemaVersion: z.literal(1),
        eventId: z.uuid().openapi({ description: 'Unique ID of this event.' }),
        runId: z.uuid().openapi({ description: 'The agent job ID this event belongs to.' }),
        occurredAt: z.iso.datetime({ offset: true }),
        producerSequence: z
          .int()
          .openapi({
            description: 'Monotonic sequence number from the emitting agent; order events by it.',
          }),
        agent: AgentTraceAgentSchema,
        type: z.literal('run.started').openapi({ description: 'Emitted when the run starts.' }),
      })
      .openapi({
        title: 'run.started',
        required: [
          'schemaVersion',
          'eventId',
          'runId',
          'occurredAt',
          'producerSequence',
          'agent',
          'type',
        ],
      }),
    z
      .object({
        schemaVersion: z.literal(1),
        eventId: z.uuid().openapi({ description: 'Unique ID of this event.' }),
        runId: z.uuid().openapi({ description: 'The agent job ID this event belongs to.' }),
        occurredAt: z.iso.datetime({ offset: true }),
        producerSequence: z
          .int()
          .openapi({
            description: 'Monotonic sequence number from the emitting agent; order events by it.',
          }),
        agent: AgentTraceAgentSchema,
        type: z
          .literal('run.cancel_requested')
          .openapi({
            description: 'Emitted when cancellation is requested (via DELETE /agent/{jobId}).',
          }),
        reason: z.literal('user'),
      })
      .openapi({
        title: 'run.cancel_requested',
        required: [
          'schemaVersion',
          'eventId',
          'runId',
          'occurredAt',
          'producerSequence',
          'agent',
          'type',
          'reason',
        ],
      }),
    z
      .object({
        schemaVersion: z.literal(1),
        eventId: z.uuid().openapi({ description: 'Unique ID of this event.' }),
        runId: z.uuid().openapi({ description: 'The agent job ID this event belongs to.' }),
        occurredAt: z.iso.datetime({ offset: true }),
        producerSequence: z
          .int()
          .openapi({
            description: 'Monotonic sequence number from the emitting agent; order events by it.',
          }),
        agent: AgentTraceAgentSchema,
        type: z.literal('run.finished').openapi({ description: 'Terminal event for the run.' }),
        outcome: z.enum(['succeeded', 'failed', 'cancelled', 'refused', 'credit_limit_reached']),
        error: AgentTraceErrorSchema.nullable().openapi({
          description: 'Null when outcome is succeeded; otherwise the structured error.',
        }),
      })
      .openapi({
        title: 'run.finished',
        required: [
          'schemaVersion',
          'eventId',
          'runId',
          'occurredAt',
          'producerSequence',
          'agent',
          'type',
          'outcome',
          'error',
        ],
      }),
    z
      .object({
        schemaVersion: z.literal(1),
        eventId: z.uuid().openapi({ description: 'Unique ID of this event.' }),
        runId: z.uuid().openapi({ description: 'The agent job ID this event belongs to.' }),
        occurredAt: z.iso.datetime({ offset: true }),
        producerSequence: z
          .int()
          .openapi({
            description: 'Monotonic sequence number from the emitting agent; order events by it.',
          }),
        agent: AgentTraceAgentSchema,
        type: z
          .literal('agent.started')
          .openapi({ description: 'Emitted when an agent (orchestrator or subagent) starts.' }),
      })
      .openapi({
        title: 'agent.started',
        required: [
          'schemaVersion',
          'eventId',
          'runId',
          'occurredAt',
          'producerSequence',
          'agent',
          'type',
        ],
      }),
    z
      .object({
        schemaVersion: z.literal(1),
        eventId: z.uuid().openapi({ description: 'Unique ID of this event.' }),
        runId: z.uuid().openapi({ description: 'The agent job ID this event belongs to.' }),
        occurredAt: z.iso.datetime({ offset: true }),
        producerSequence: z
          .int()
          .openapi({
            description: 'Monotonic sequence number from the emitting agent; order events by it.',
          }),
        agent: AgentTraceAgentSchema,
        type: z
          .literal('agent.finished')
          .openapi({ description: 'Emitted when an agent finishes.' }),
        outcome: z.enum(['succeeded', 'failed', 'cancelled', 'refused']),
        durationMs: z.int(),
        error: AgentTraceErrorSchema.nullable().openapi({
          description: 'Null when outcome is succeeded; otherwise the structured error.',
        }),
      })
      .openapi({
        title: 'agent.finished',
        required: [
          'schemaVersion',
          'eventId',
          'runId',
          'occurredAt',
          'producerSequence',
          'agent',
          'type',
          'outcome',
          'durationMs',
          'error',
        ],
      }),
    z
      .object({
        schemaVersion: z.literal(1),
        eventId: z.uuid().openapi({ description: 'Unique ID of this event.' }),
        runId: z.uuid().openapi({ description: 'The agent job ID this event belongs to.' }),
        occurredAt: z.iso.datetime({ offset: true }),
        producerSequence: z
          .int()
          .openapi({
            description: 'Monotonic sequence number from the emitting agent; order events by it.',
          }),
        agent: AgentTraceAgentSchema,
        type: z
          .literal('browser.session.started')
          .openapi({ description: 'Emitted when a browser session starts.' }),
        sessionId: z.string(),
      })
      .openapi({
        title: 'browser.session.started',
        required: [
          'schemaVersion',
          'eventId',
          'runId',
          'occurredAt',
          'producerSequence',
          'agent',
          'type',
          'sessionId',
        ],
      }),
    z
      .object({
        schemaVersion: z.literal(1),
        eventId: z.uuid().openapi({ description: 'Unique ID of this event.' }),
        runId: z.uuid().openapi({ description: 'The agent job ID this event belongs to.' }),
        occurredAt: z.iso.datetime({ offset: true }),
        producerSequence: z
          .int()
          .openapi({
            description: 'Monotonic sequence number from the emitting agent; order events by it.',
          }),
        agent: AgentTraceAgentSchema,
        type: z
          .literal('browser.session.finished')
          .openapi({ description: 'Emitted when a browser session finishes.' }),
        sessionId: z.string(),
        durationMs: z.int(),
      })
      .openapi({
        title: 'browser.session.finished',
        required: [
          'schemaVersion',
          'eventId',
          'runId',
          'occurredAt',
          'producerSequence',
          'agent',
          'type',
          'sessionId',
          'durationMs',
        ],
      }),
    z
      .object({
        schemaVersion: z.literal(1),
        eventId: z.uuid().openapi({ description: 'Unique ID of this event.' }),
        runId: z.uuid().openapi({ description: 'The agent job ID this event belongs to.' }),
        occurredAt: z.iso.datetime({ offset: true }),
        producerSequence: z
          .int()
          .openapi({
            description: 'Monotonic sequence number from the emitting agent; order events by it.',
          }),
        agent: AgentTraceAgentSchema,
        type: z
          .literal('progress.reported')
          .openapi({ description: 'Emitted when the orchestrator reports progress.' }),
        phase: z.enum(['planning', 'working', 'finalizing']),
        message: z.string(),
      })
      .openapi({
        title: 'progress.reported',
        required: [
          'schemaVersion',
          'eventId',
          'runId',
          'occurredAt',
          'producerSequence',
          'agent',
          'type',
          'phase',
          'message',
        ],
      }),
    z
      .object({
        schemaVersion: z.literal(1),
        eventId: z.uuid().openapi({ description: 'Unique ID of this event.' }),
        runId: z.uuid().openapi({ description: 'The agent job ID this event belongs to.' }),
        occurredAt: z.iso.datetime({ offset: true }),
        producerSequence: z
          .int()
          .openapi({
            description: 'Monotonic sequence number from the emitting agent; order events by it.',
          }),
        agent: AgentTraceAgentSchema,
        type: z
          .literal('reasoning.summary')
          .openapi({ description: "A summary of the agent's reasoning." }),
        text: z.string(),
      })
      .openapi({
        title: 'reasoning.summary',
        required: [
          'schemaVersion',
          'eventId',
          'runId',
          'occurredAt',
          'producerSequence',
          'agent',
          'type',
          'text',
        ],
      }),
    z
      .object({
        schemaVersion: z.literal(1),
        eventId: z.uuid().openapi({ description: 'Unique ID of this event.' }),
        runId: z.uuid().openapi({ description: 'The agent job ID this event belongs to.' }),
        occurredAt: z.iso.datetime({ offset: true }),
        producerSequence: z
          .int()
          .openapi({
            description: 'Monotonic sequence number from the emitting agent; order events by it.',
          }),
        agent: AgentTraceAgentSchema,
        type: z
          .literal('tool_call.started')
          .openapi({ description: 'Emitted when a tool call starts.' }),
        toolCallId: z.string(),
        toolName: z.string(),
        parameters: z
          .any()
          .openapi({ description: 'The input passed to the tool (arbitrary JSON).' }),
      })
      .openapi({
        title: 'tool_call.started',
        required: [
          'schemaVersion',
          'eventId',
          'runId',
          'occurredAt',
          'producerSequence',
          'agent',
          'type',
          'toolCallId',
          'toolName',
          'parameters',
        ],
      }),
    z
      .object({
        schemaVersion: z.literal(1),
        eventId: z.uuid().openapi({ description: 'Unique ID of this event.' }),
        runId: z.uuid().openapi({ description: 'The agent job ID this event belongs to.' }),
        occurredAt: z.iso.datetime({ offset: true }),
        producerSequence: z
          .int()
          .openapi({
            description: 'Monotonic sequence number from the emitting agent; order events by it.',
          }),
        agent: AgentTraceAgentSchema,
        type: z
          .literal('tool_call.finished')
          .openapi({ description: 'Emitted when a tool call finishes.' }),
        toolCallId: z.string(),
        toolName: z.string(),
        result: z
          .any()
          .openapi({ description: 'The result returned by the tool (arbitrary JSON).' }),
      })
      .openapi({
        title: 'tool_call.finished',
        required: [
          'schemaVersion',
          'eventId',
          'runId',
          'occurredAt',
          'producerSequence',
          'agent',
          'type',
          'toolCallId',
          'toolName',
          'result',
        ],
      }),
    z
      .object({
        schemaVersion: z.literal(1),
        eventId: z.uuid().openapi({ description: 'Unique ID of this event.' }),
        runId: z.uuid().openapi({ description: 'The agent job ID this event belongs to.' }),
        occurredAt: z.iso.datetime({ offset: true }),
        producerSequence: z
          .int()
          .openapi({
            description: 'Monotonic sequence number from the emitting agent; order events by it.',
          }),
        agent: AgentTraceAgentSchema,
        type: z
          .literal('artifact.updated')
          .openapi({ description: 'Emitted when an output artifact changes.' }),
        artifact: AgentTraceArtifactSchema,
      })
      .openapi({
        title: 'artifact.updated',
        required: [
          'schemaVersion',
          'eventId',
          'runId',
          'occurredAt',
          'producerSequence',
          'agent',
          'type',
          'artifact',
        ],
      }),
    z
      .object({
        schemaVersion: z.literal(1),
        eventId: z.uuid().openapi({ description: 'Unique ID of this event.' }),
        runId: z.uuid().openapi({ description: 'The agent job ID this event belongs to.' }),
        occurredAt: z.iso.datetime({ offset: true }),
        producerSequence: z
          .int()
          .openapi({
            description: 'Monotonic sequence number from the emitting agent; order events by it.',
          }),
        agent: AgentTraceAgentSchema,
        type: z
          .literal('error.occurred')
          .openapi({ description: 'Emitted when a non-fatal error occurs during the run.' }),
        error: AgentTraceErrorSchema,
      })
      .openapi({
        title: 'error.occurred',
        required: [
          'schemaVersion',
          'eventId',
          'runId',
          'occurredAt',
          'producerSequence',
          'agent',
          'type',
          'error',
        ],
      }),
  ])
  .openapi({
    description:
      'A canonical execution event from an agent run. Every event carries the envelope fields schemaVersion, eventId, runId, occurredAt, producerSequence and agent; the type field discriminates the variant. usage.recorded events are internal and never exposed, and agent.started events omit the model field.',
    discriminator: { propertyName: 'type' },
  })
  .openapi('AgentTraceEvent')

const SuccessResponseSchema = z
  .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
  .openapi({ required: [] })
  .openapi('SuccessResponse')

const MonitorCreateRequestSchema: z.ZodType<MonitorCreateRequestType> = z
  .object({
    name: z.string().max(256),
    schedule: MonitorScheduleSchema,
    webhook: MonitorWebhookSchema.exactOptional(),
    notification: MonitorNotificationSchema.exactOptional(),
    targets: z.array(MonitorTargetSchema).min(1).max(50),
    retentionDays: z.int().min(1).max(365).default(30).exactOptional(),
    goal: z
      .string()
      .max(2000)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Plain-language goal used to judge whether changed pages are meaningful. If provided and `judgeEnabled` is omitted, judging is enabled automatically. Required (non-empty) when any target is a `search` target, unless `judgeEnabled` is `false`.',
      }),
    judgeEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to judge changed pages against `goal`. Requires a non-empty `goal` to run.',
      }),
  })
  .openapi({ required: ['name', 'schedule', 'targets'] })
  .openapi('MonitorCreateRequest')

const MonitorUpdateRequestSchema: z.ZodType<MonitorUpdateRequestType> = z
  .object({
    name: z.string().max(256).exactOptional(),
    schedule: MonitorScheduleSchema.exactOptional(),
    webhook: MonitorWebhookSchema.exactOptional(),
    notification: MonitorNotificationSchema.exactOptional(),
    targets: z.array(MonitorTargetSchema).min(1).max(50).exactOptional(),
    retentionDays: z.int().min(1).max(365).exactOptional(),
    goal: z
      .string()
      .max(2000)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Plain-language goal used to judge whether changed pages are meaningful. If provided and `judgeEnabled` is omitted, judging is enabled automatically. Required (non-empty) when any target is a `search` target, unless `judgeEnabled` is `false`.',
      }),
    judgeEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to judge changed pages against `goal`. Requires a non-empty `goal` to run.',
      }),
    status: z.enum(['active', 'paused']).exactOptional(),
  })
  .openapi({
    description: 'Partial monitor update payload. Include at least one field.',
    required: [],
  })
  .openapi('MonitorUpdateRequest')

const MonitorCheckSchema = z
  .object({
    id: z.uuid().exactOptional(),
    monitorId: z.uuid().exactOptional(),
    status: z
      .enum([
        'queued',
        'running',
        'completed',
        'failed',
        'partial',
        'skipped_overlap',
        'skipped_no_credits',
      ])
      .exactOptional(),
    trigger: z.enum(['scheduled', 'manual']).exactOptional(),
    scheduledFor: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    startedAt: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    finishedAt: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    estimatedCredits: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Upper-bound credits reserved for this check before Firecrawl knows how many pages changed and require judging.',
      }),
    reservedCredits: z.int().nullable().exactOptional(),
    actualCredits: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Final credits charged for this check after scrapes, crawls, and any changed-page judge calls complete.',
      }),
    billingStatus: z.string().exactOptional(),
    summary: MonitorSummarySchema.exactOptional(),
    targetResults: z.array(z.any()).nullable().exactOptional(),
    notificationStatus: z.looseObject({}).nullable().exactOptional(),
    error: z.string().nullable().exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MonitorCheck')

const MonitorPageJudgmentSchema = z
  .object({
    meaningful: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the changed page is meaningful for the monitor goal.' }),
    confidence: z.enum(['high', 'medium', 'low']).exactOptional(),
    reason: z.string().exactOptional(),
    meaningfulChanges: z
      .array(
        z
          .object({
            type: z.enum(['added', 'removed', 'changed']).exactOptional(),
            before: z.string().nullable().exactOptional(),
            after: z.string().nullable().exactOptional(),
            reason: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Goal-relevant changes selected by the judge from the page diff.' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('MonitorPageJudgment')

const MonitorCheckPageSchema = z
  .object({
    id: z.uuid().exactOptional(),
    targetId: z.string().exactOptional(),
    url: z.url().exactOptional(),
    status: z.enum(['same', 'new', 'changed', 'removed', 'error']).exactOptional(),
    previousScrapeId: z.uuid().nullable().exactOptional(),
    currentScrapeId: z.uuid().nullable().exactOptional(),
    statusCode: z.int().nullable().exactOptional(),
    error: z.string().nullable().exactOptional(),
    metadata: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Extra per-page metadata. For search monitors this includes `searchStatus`, the finer-grained search disposition behind the top-level `status`: `alert` (maps to `new`), `already_seen`, `watching`, `ignored` (all map to `same`), or `skipped` (maps to `error`).',
      }),
    judgment: MonitorPageJudgmentSchema.exactOptional(),
    diff: z
      .object({
        text: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Unified markdown diff. Present on markdown-only and mixed-mode monitors.',
          }),
        json: z
          .looseObject({})
          .exactOptional()
          .openapi({
            description:
              'For markdown-only monitors, a parseDiff AST `{ files: [...] }`. For JSON-extraction (and mixed-mode) monitors, a per-field `{ previous, current }` map keyed by the JSON path into the extraction (e.g. `plans[0].price`).',
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Inline diff artifact when the page changed. The shape depends on what the monitor's scrapeOptions.formats asked for. Markdown-only monitors populate both `text` (unified diff) and `json` (parseDiff AST). JSON-extraction monitors populate `json` as a per-field `{previous, current}` map keyed by JSON path. Mixed-mode monitors (`changeTracking` with both `json` and `git-diff` modes) populate both `text` (markdown sidecar) and `json` (per-field diff).",
        required: [],
      }),
    snapshot: z
      .object({
        json: z
          .looseObject({})
          .exactOptional()
          .openapi({
            description:
              "The full structured JSON extracted on this run, matching the schema/prompt declared on the target's `changeTracking` format.",
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Snapshot of the current JSON extraction at this run. Present on JSON-extraction and mixed-mode monitors; absent for markdown-only monitors.',
        required: [],
      }),
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MonitorCheckPage')

const MonitorResponseSchema: z.ZodType<MonitorResponseType> = z
  .object({ success: z.boolean().exactOptional(), data: MonitorSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('MonitorResponse')

const MonitorListResponseSchema: z.ZodType<MonitorListResponseType> = z
  .object({ success: z.boolean().exactOptional(), data: z.array(MonitorSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('MonitorListResponse')

const MonitorRunResponseSchema = z
  .object({
    success: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    data: MonitorCheckSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MonitorRunResponse')

const MonitorCheckListResponseSchema = z
  .object({
    success: z.boolean().exactOptional(),
    data: z.array(MonitorCheckSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MonitorCheckListResponse')

const MonitorCheckDetailResponseSchema = z
  .object({
    success: z.boolean().exactOptional(),
    next: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'URL to fetch the next page of monitor check page results, if any.',
      }),
    data: MonitorCheckSchema.and(
      z
        .object({
          pages: z.array(MonitorCheckPageSchema).exactOptional(),
          next: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description: 'URL to fetch the next page of monitor check page results, if any.',
            }),
        })
        .openapi({ required: [] }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MonitorCheckDetailResponse')

const ParseFormatsSchema = z
  .array(
    z.xor([
      z.object({ type: z.literal('markdown') }).openapi({ title: 'Markdown', required: ['type'] }),
      z.object({ type: z.literal('summary') }).openapi({ title: 'Summary', required: ['type'] }),
      z.object({ type: z.literal('html') }).openapi({ title: 'HTML', required: ['type'] }),
      z.object({ type: z.literal('rawHtml') }).openapi({ title: 'Raw HTML', required: ['type'] }),
      z.object({ type: z.literal('links') }).openapi({ title: 'Links', required: ['type'] }),
      z.object({ type: z.literal('images') }).openapi({ title: 'Images', required: ['type'] }),
      z
        .object({
          type: z.literal('json'),
          schema: z
            .looseObject({})
            .exactOptional()
            .openapi({
              description:
                'The schema to use for the JSON output. Must conform to [JSON Schema](https://json-schema.org/).',
            }),
          prompt: z
            .string()
            .exactOptional()
            .openapi({ description: 'The prompt to use for the JSON output' }),
        })
        .openapi({ title: 'JSON', required: ['type'] }),
    ]),
  )
  .openapi({
    description:
      'Output formats supported for `/parse` uploads. Browser-rendering formats and change tracking are not supported.',
    default: ['markdown'],
  })
  .openapi('ParseFormats')

const ParseOptionsSchema = z
  .object({
    formats: ParseFormatsSchema.exactOptional(),
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
    headers: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Headers to send when additional network requests are required.' }),
    timeout: z
      .int()
      .max(300000)
      .default(30000)
      .exactOptional()
      .openapi({
        description:
          'Timeout in milliseconds for the request. Default is 30000 (30 seconds). Maximum is 300000 (300 seconds).',
      }),
    parsers: z
      .array(
        z.xor([
          z
            .strictObject({
              type: z.literal('pdf'),
              mode: z
                .enum(['fast', 'auto', 'ocr'])
                .default('auto')
                .exactOptional()
                .openapi({
                  description:
                    'PDF parsing mode. "fast": text-only extraction. "auto": text-first with OCR fallback. "ocr": OCR on every page.',
                }),
              maxPages: z
                .int()
                .min(1)
                .max(10000)
                .exactOptional()
                .openapi({ description: 'Maximum number of pages to parse from the PDF.' }),
              pages: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Include physical per-page markdown alongside the document markdown. Populates the `pages` field on the document as an array of { pageNumber, markdown }. No additional cost.',
                }),
              blocks: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Include per-page typed layout blocks alongside the document markdown. Populates the `blocks` field on the document: typed blocks (title, section_header, text, table, formula, figure, caption, ...) with normalized bounding boxes, reading order, character-span links into the markdown, and per-block confidence. No additional cost.',
                }),
              pageMarkers: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Annotate page breaks in the document markdown: pages are joined with `\\n\\n---\\n\\n<!-- page N -->\\n\\n`, where N is the 1-based physical page of the content that follows. Markers appear between pages only (no leading marker for page 1), and numbering may skip pages merged across a page break — use `pages: true` when every physical page is needed. No new response field; no additional cost.',
                }),
            })
            .openapi({ required: ['type'] }),
        ]),
      )
      .exactOptional()
      .openapi({
        description: 'Controls file parser behavior when relevant (for example PDF parser mode).',
        default: ['pdf'],
      }),
    skipTlsVerification: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Skip TLS certificate verification when making requests.' }),
    removeBase64Images: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description: 'Remove base64-encoded images from output and keep alt text placeholders.',
      }),
    blockAds: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Enable ad and cookie popup blocking.' }),
    checkPromptInjection: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'When enabled, scans the parsed content for prompt injection attempts before any LLM-backed format (such as json, summary or question) runs. If an injection is detected, the request fails with a 403 and error code SCRAPE_PROMPT_INJECTION_DETECTED. Adds 4 credits when the check runs. If the check cannot scan all of the content, the parse continues with a warning and the check is not billed.',
      }),
    redactPII: z
      .xor([z.boolean(), RedactPIIOptionsSchema])
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Redact personally identifiable information from returned markdown. Pass `true` to use defaults, or an object to tune mode, entities, and replacement style.',
      }),
    proxy: z
      .enum(['basic', 'auto'])
      .exactOptional()
      .openapi({
        description: 'Proxy mode for parse uploads. `/parse` supports only `basic` and `auto`.',
      }),
    origin: z
      .string()
      .default('api')
      .exactOptional()
      .openapi({ description: 'Origin identifier for analytics and logging.' }),
    integration: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional integration identifier.' }),
    auditMetadata: AuditMetadataSchema.exactOptional(),
    zeroDataRetention: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If true, this will enable zero data retention for this parse. To enable this feature, please contact help@firecrawl.dev',
      }),
  })
  .openapi({
    description: 'Optional parse options sent as JSON in the multipart `options` field.',
    required: [],
  })
  .openapi('ParseOptions')

const ScrapeResponseSchema: z.ZodType<ScrapeResponseType> = z
  .object({
    success: z.boolean().exactOptional(),
    data: z
      .object({
        markdown: z.string().exactOptional(),
        pages: z
          .array(
            z
              .object({
                pageNumber: z
                  .int()
                  .exactOptional()
                  .openapi({ description: '1-based physical PDF page number.' }),
                markdown: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Physical per-page markdown for PDFs. Present only when the request set the `pages` PDF parser option.',
          }),
        blocks: z
          .array(
            z
              .object({
                pageNumber: z
                  .int()
                  .exactOptional()
                  .openapi({ description: '1-based physical PDF page number.' }),
                width: z
                  .number()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Page render width in px — the anchor for denormalizing bbox coordinates. Null for pages that never rendered.',
                  }),
                height: z
                  .number()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'Page render height in px. Null for pages that never rendered.',
                  }),
                status: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Page-level rollup: ok | partial | failed.' }),
                items: z
                  .array(
                    z
                      .object({
                        id: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Stable within a response: p<page>.b<index in reading order>.',
                          }),
                        type: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Block type: title, section_header, text, table, formula, figure, caption, page_number, page_header, page_footer. New types may appear over time.',
                          }),
                        label: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description:
                              'Raw layout-model label, passthrough for forward compatibility.',
                          }),
                        bbox: z
                          .array(z.number())
                          .length(4)
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description:
                              '[x0, y0, x1, y1] normalized 0-1 relative to the page width/height. Multiply by the page width/height to get pixel coordinates. Null when the page has no known dimensions.',
                          }),
                        content: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Markdown fragment this block contributed to the document markdown.',
                          }),
                        markdownSpan: z
                          .array(z.int())
                          .length(2)
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description:
                              "[start, end) character offsets into the document markdown covering this block's fragment. Null when a post-processing transform rewrote the fragment.",
                          }),
                        readingOrder: z.int().exactOptional(),
                        source: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description:
                              'Pipeline path that produced the block (for example native_text, layout_ocr, tsr, formula_model, full_page).',
                          }),
                        confidence: z
                          .object({
                            layout: z
                              .number()
                              .nullable()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Layout-model detection score (0-1). Null when the page bypassed layout analysis.',
                              }),
                            ocr: z
                              .number()
                              .nullable()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Text confidence when the source path provides one; null otherwise.',
                              }),
                          })
                          .exactOptional()
                          .openapi({ required: [] }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Per-page typed layout blocks for PDFs. Present only when the request set the `blocks` PDF parser option.',
          }),
        summary: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Summary of the page if `summary` is in `formats`' }),
        html: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Cleaned HTML of the page if `html` is in `formats`. Removes `<script>`, `<style>`, `<noscript>`, `<meta>`, and `<head>` tags; converts relative URLs to absolute; resolves responsive image `srcset` to the largest version. Respects `onlyMainContent`, `includeTags`, and `excludeTags` filters.',
          }),
        rawHtml: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The exact, unmodified HTML as received from the page if `rawHtml` is in `formats`. No cleaning or filtering is applied.',
          }),
        rawBase64: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The Base64-encoded original HTTP response body if `rawBase64` is in `formats`. A bare Base64 string, not a data URI. The MIME type is in `metadata.contentType`.',
          }),
        screenshot: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Screenshot of the page if `screenshot` is in `formats`. Screenshots expire after 24 hours and can no longer be downloaded.',
          }),
        audio: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Signed URL to the extracted MP3 audio file if `audio` is in `formats`. The signed URL expires after 1 hour.',
          }),
        video: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Signed URL to the extracted video file if `video` is in `formats`. The signed URL expires after 1 hour.',
          }),
        answer: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Natural-language answer to the question supplied via the `question` format. Only present if a `question` format object was included in `formats`.',
          }),
        highlights: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Relevant source text selected by the `highlights` format. Only present if a `highlights` format object was included in `formats`.',
          }),
        links: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'List of links on the page if `links` is in `formats`' }),
        attributes: z
          .array(
            z
              .object({
                selector: z.string().exactOptional(),
                attribute: z.string().exactOptional(),
                values: z.array(z.string()).exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              'Attribute values extracted by the `attributes` format. Only present if an `attributes` format object was included in `formats`.',
          }),
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
            pdfs: z
              .array(z.string())
              .exactOptional()
              .openapi({
                description: 'PDFs generated, in the same order as the pdf actions provided.',
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
            title: z
              .xor([z.string(), z.array(z.string())])
              .exactOptional()
              .openapi({
                description: 'Title extracted from the page, can be a string or array of strings',
              }),
            description: z
              .xor([z.string(), z.array(z.string())])
              .exactOptional()
              .openapi({
                description:
                  'Description extracted from the page, can be a string or array of strings',
              }),
            language: z
              .xor([z.string(), z.array(z.string())])
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Language extracted from the page, can be a string or array of strings',
              }),
            sourceURL: z
              .url()
              .exactOptional()
              .openapi({
                description:
                  "The original URL that was requested. May differ from the page's final URL if redirects occurred.",
              }),
            url: z
              .url()
              .exactOptional()
              .openapi({
                description: 'The final URL of the page after all redirects have been followed.',
              }),
            keywords: z
              .xor([z.string(), z.array(z.string())])
              .exactOptional()
              .openapi({
                description:
                  'Keywords extracted from the page, can be a string or array of strings',
              }),
            ogLocaleAlternate: z
              .array(z.string())
              .exactOptional()
              .openapi({ description: 'Alternative locales for the page' }),
            '<any other metadata> ': z
              .xor([z.string(), z.array(z.string())])
              .exactOptional()
              .openapi({
                description:
                  'Other metadata extracted from HTML, can be a string or array of strings',
              }),
            statusCode: z
              .int()
              .exactOptional()
              .openapi({ description: 'The status code of the page' }),
            numPages: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'For PDF inputs, the number of pages parsed (capped by the parsers maxPages option).',
              }),
            totalPages: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  "For PDF inputs, the document's true page count before any maxPages capping. Omitted when it cannot be determined; a totalPages greater than numPages indicates the result was truncated.",
              }),
            contentType: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The content type (MIME type) of the page, e.g. text/html, application/pdf',
              }),
            error: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'The error message of the page' }),
            concurrencyLimited: z
              .boolean()
              .exactOptional()
              .openapi({
                description: 'Whether this scrape was throttled due to team concurrency limits',
              }),
            concurrencyQueueDurationMs: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'Time in milliseconds the request waited in the concurrency queue. Only present when concurrencyLimited is true.',
              }),
            provider: z
              .object({
                id: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The provider that returned the data.' }),
                creditsCost: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'What that access cost, in credits.' }),
                steps: z
                  .array(
                    z
                      .object({
                        provider: z.string().exactOptional(),
                        status: z.enum(['matched', 'not_found', 'error']).exactOptional(),
                        creditsCost: z.int().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional()
                  .openapi({ description: 'Each provider tried, in order.' }),
              })
              .exactOptional()
              .openapi({
                description: 'Set when a third-party data provider served the URL.',
                required: [],
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
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
              .looseObject({})
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
            colorScheme: z
              .enum(['light', 'dark'])
              .exactOptional()
              .openapi({ description: 'The detected color scheme of the page.' }),
            logo: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'URL of the primary logo.' }),
            colors: z
              .object({
                primary: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Primary brand color (hex).' }),
                secondary: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Secondary brand color (hex).' }),
                accent: z.string().exactOptional().openapi({ description: 'Accent color (hex).' }),
                background: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Background color (hex).' }),
                textPrimary: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Primary text color (hex).' }),
                textSecondary: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Secondary text color (hex).' }),
                link: z.string().exactOptional().openapi({ description: 'Link color (hex).' }),
                success: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Success/positive color (hex).' }),
                warning: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Warning color (hex).' }),
                error: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Error/danger color (hex).' }),
              })
              .nullable()
              .exactOptional()
              .openapi({ description: 'Brand colors extracted from the page.', required: [] }),
            fonts: z
              .array(
                z
                  .object({
                    family: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Font family name.' }),
                  })
                  .openapi({ required: [] }),
              )
              .nullable()
              .exactOptional()
              .openapi({ description: 'Array of font families used on the page.' }),
            typography: z
              .object({
                fontFamilies: z
                  .object({
                    primary: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Primary font family.' }),
                    heading: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Heading font family.' }),
                    code: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Code/monospace font family.' }),
                  })
                  .exactOptional()
                  .openapi({ description: 'Font families by role.', required: [] }),
                fontSizes: z
                  .object({
                    h1: z.string().exactOptional(),
                    h2: z.string().exactOptional(),
                    h3: z.string().exactOptional(),
                    body: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ description: 'Font sizes for different text levels.', required: [] }),
                fontWeights: z
                  .object({
                    light: z.int().exactOptional(),
                    regular: z.int().exactOptional(),
                    medium: z.int().exactOptional(),
                    bold: z.int().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ description: 'Font weight definitions.', required: [] }),
                lineHeights: z
                  .object({ heading: z.string().exactOptional(), body: z.string().exactOptional() })
                  .exactOptional()
                  .openapi({
                    description: 'Line height values for different text types.',
                    required: [],
                  }),
              })
              .nullable()
              .exactOptional()
              .openapi({ description: 'Detailed typography information.', required: [] }),
            spacing: z
              .object({
                baseUnit: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'Base spacing unit in pixels.' }),
                borderRadius: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Default border radius.' }),
                padding: z
                  .looseObject({})
                  .exactOptional()
                  .openapi({ description: 'Padding values.' }),
                margins: z
                  .looseObject({})
                  .exactOptional()
                  .openapi({ description: 'Margin values.' }),
              })
              .nullable()
              .exactOptional()
              .openapi({ description: 'Spacing and layout information.', required: [] }),
            components: z
              .object({
                buttonPrimary: z
                  .object({
                    background: z.string().exactOptional(),
                    textColor: z.string().exactOptional(),
                    borderRadius: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ description: 'Primary button styles.', required: [] }),
                buttonSecondary: z
                  .object({
                    background: z.string().exactOptional(),
                    textColor: z.string().exactOptional(),
                    borderColor: z.string().exactOptional(),
                    borderRadius: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ description: 'Secondary button styles.', required: [] }),
                input: z
                  .looseObject({})
                  .exactOptional()
                  .openapi({ description: 'Input field styles.' }),
              })
              .nullable()
              .exactOptional()
              .openapi({ description: 'UI component styles.', required: [] }),
            icons: z
              .looseObject({})
              .nullable()
              .exactOptional()
              .openapi({ description: 'Icon style information.' }),
            images: z
              .object({
                logo: z.string().exactOptional().openapi({ description: 'Logo image URL.' }),
                favicon: z.string().exactOptional().openapi({ description: 'Favicon URL.' }),
                ogImage: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Open Graph image URL.' }),
              })
              .nullable()
              .exactOptional()
              .openapi({ description: 'Brand images.', required: [] }),
            animations: z
              .looseObject({})
              .nullable()
              .exactOptional()
              .openapi({ description: 'Animation and transition settings.' }),
            layout: z
              .looseObject({})
              .nullable()
              .exactOptional()
              .openapi({ description: 'Layout configuration (grid, header/footer heights).' }),
            personality: z
              .looseObject({})
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Brand personality traits (tone, energy, target audience).',
              }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Branding information extracted from the page if `branding` is in `formats`. Includes colors, fonts, typography, spacing, components, and more.',
            required: [],
          }),
        product: z
          .object({
            title: z.string().openapi({ description: 'The product title.' }),
            brand: z
              .string()
              .exactOptional()
              .openapi({ description: 'The product brand or manufacturer.' }),
            category: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "The product category, optionally as a breadcrumb path (e.g. 'Electronics > Audio > Headphones').",
              }),
            url: z.string().openapi({ description: 'The canonical URL of the product page.' }),
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'The product description.' }),
            variants: z
              .array(
                z
                  .object({
                    id: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'The variant identifier.' }),
                    sku: z.string().exactOptional().openapi({ description: 'The variant SKU.' }),
                    title: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'The variant title.' }),
                    values: z
                      .record(z.string(), z.string())
                      .exactOptional()
                      .openapi({
                        description: 'The variant option values (e.g. { "color": "Black" }).',
                      }),
                    price: z
                      .object({
                        amount: z.number().openapi({ description: 'The numeric price amount.' }),
                        currency: z
                          .string()
                          .exactOptional()
                          .openapi({ description: "The ISO 4217 currency code (e.g. 'USD')." }),
                        formatted: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: "The price formatted for display (e.g. '$199.99').",
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'The current price of the variant.',
                        required: ['amount'],
                      }),
                    sale: z
                      .object({
                        originalPrice: z
                          .object({
                            amount: z
                              .number()
                              .openapi({ description: 'The numeric price amount.' }),
                            currency: z
                              .string()
                              .exactOptional()
                              .openapi({ description: "The ISO 4217 currency code (e.g. 'USD')." }),
                            formatted: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: "The price formatted for display (e.g. '$249.99').",
                              }),
                          })
                          .openapi({
                            description: 'The original (pre-discount) price of the variant.',
                            required: ['amount'],
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description:
                          'Sale/discount information for the variant, present when the variant is discounted.',
                        required: ['originalPrice'],
                      }),
                    availability: z
                      .object({
                        inStock: z
                          .boolean()
                          .openapi({ description: 'Whether the variant is in stock.' }),
                        text: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: "Human-readable availability text (e.g. 'In Stock').",
                          }),
                      })
                      .openapi({
                        description:
                          'The availability of the variant. Always present on a variant.',
                        required: ['inStock'],
                      }),
                    images: z
                      .array(
                        z
                          .object({
                            url: z.string().openapi({ description: 'Image URL.' }),
                            alt: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'Alternative text for the image.' }),
                          })
                          .openapi({ required: ['url'] }),
                      )
                      .exactOptional()
                      .openapi({ description: 'Variant images.' }),
                  })
                  .openapi({ required: ['availability'] }),
              )
              .openapi({ description: 'Product variants (e.g. different colors or sizes).' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Product information extracted from the page if `product` is in `formats`. Includes title, brand, category, description, and variants. Pricing, availability, and images live on each variant.',
            required: ['title', 'url', 'variants'],
          }),
        menu: z
          .object({
            isMenu: z
              .boolean()
              .openapi({ description: 'Whether the page was identified as a menu.' }),
            confidence: z
              .number()
              .exactOptional()
              .openapi({
                description: 'A confidence score between 0 and 1 for the menu extraction.',
              }),
            merchant: z
              .object({
                name: z.string().openapi({ description: 'The merchant name.' }),
                type: z
                  .string()
                  .exactOptional()
                  .openapi({ description: "The merchant type (e.g. 'restaurant')." }),
              })
              .exactOptional()
              .openapi({ description: 'The merchant the menu belongs to.', required: ['name'] }),
            currency: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "The ISO 4217 currency code for the menu (e.g. 'USD'), reported only when the page sources it.",
              }),
            sections: z
              .array(
                z
                  .object({
                    id: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'The section identifier.' }),
                    name: z.string().openapi({ description: 'The section name.' }),
                    description: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'The section description.' }),
                    items: z
                      .array(
                        z
                          .object({
                            id: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'The item identifier.' }),
                            name: z.string().openapi({ description: 'The item name.' }),
                            description: z
                              .string()
                              .nullable()
                              .exactOptional()
                              .openapi({ description: 'The item description.' }),
                            images: z
                              .array(
                                z
                                  .object({
                                    url: z.string().openapi({ description: 'Image URL.' }),
                                    alt: z
                                      .string()
                                      .nullable()
                                      .exactOptional()
                                      .openapi({ description: 'Alternative text for the image.' }),
                                  })
                                  .openapi({ required: ['url'] }),
                              )
                              .exactOptional()
                              .openapi({ description: 'Item images.' }),
                            price: z
                              .object({
                                amount: z
                                  .number()
                                  .openapi({ description: 'The numeric price amount.' }),
                                currency: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description: "The ISO 4217 currency code (e.g. 'USD').",
                                  }),
                                formatted: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description: "The price formatted for display (e.g. '$7.99').",
                                  }),
                              })
                              .exactOptional()
                              .openapi({
                                description: 'The price of the item.',
                                required: ['amount'],
                              }),
                            availability: z
                              .object({
                                inStock: z
                                  .boolean()
                                  .openapi({ description: 'Whether the item is available.' }),
                                text: z
                                  .string()
                                  .nullable()
                                  .exactOptional()
                                  .openapi({ description: 'Human-readable availability text.' }),
                              })
                              .exactOptional()
                              .openapi({
                                description: 'The availability of the item.',
                                required: ['inStock'],
                              }),
                            dietary: z
                              .array(z.string())
                              .exactOptional()
                              .openapi({
                                description: "Dietary tags for the item (e.g. ['vegetarian']).",
                              }),
                            calories: z
                              .number()
                              .nullable()
                              .exactOptional()
                              .openapi({ description: "The item's calorie count." }),
                            optionGroups: z
                              .array(z.looseObject({}))
                              .exactOptional()
                              .openapi({ description: 'Option/modifier groups for the item.' }),
                            identifiers: z
                              .object({
                                merchantItemId: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ description: "The merchant's own item ID." }),
                              })
                              .exactOptional()
                              .openapi({
                                description: 'Merchant-specific identifiers for the item.',
                                required: [],
                              }),
                            url: z
                              .string()
                              .nullable()
                              .exactOptional()
                              .openapi({ description: 'The canonical URL of the item.' }),
                            sourceUrl: z
                              .string()
                              .nullable()
                              .exactOptional()
                              .openapi({ description: 'The URL the item was extracted from.' }),
                          })
                          .openapi({ required: ['name'] }),
                      )
                      .openapi({ description: 'The items in the section.' }),
                  })
                  .openapi({ required: ['name', 'items'] }),
              )
              .openapi({ description: "Menu sections (e.g. 'Appetizers', 'Entrees')." }),
            sourceUrl: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'The URL the menu was extracted from.' }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Menu information extracted from the page if `menu` is in `formats`. Includes the merchant, currency, and a list of sections, where each section carries items with description, images, price, availability, dietary tags, calories, and option groups.',
            required: ['isMenu', 'sections'],
          }),
        tools: z
          .array(DiscoveredToolSchema)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Tool contracts matched to the scraped page's domain. Present only when `domainTools` is `true` on the request. Requires Alexandria access and no zero data retention (403 otherwise); free.",
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ScrapeResponse')

const AlexandriaScrapeResponseSchema: z.ZodType<AlexandriaScrapeResponseType> = z
  .object({
    success: z.boolean().openapi({ example: true }),
    scrape_id: z
      .string()
      .openapi({
        description:
          'Identifier for this request. A completed request replays the same response and `scrape_id` when retried with the same `x-request-id`.',
      }),
    data: z
      .object({
        alexandria: z
          .array(AlexandriaResultSchema)
          .openapi({
            description:
              'Results for each requested Alexandria call, in the same order as the request.',
          }),
        creditsCost: z
          .int()
          .openapi({ description: 'Sum of `creditsCost` across successful items.' }),
      })
      .openapi({ required: ['alexandria', 'creditsCost'] }),
  })
  .openapi({
    description:
      'Response returned when the request executed Alexandria provider tools instead of scraping a URL.',
    required: ['success', 'scrape_id', 'data'],
  })
  .openapi('AlexandriaScrapeResponse')

const CrawlStatusResponseObjSchema: z.ZodType<CrawlStatusResponseObjType> = z
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
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time when the crawl was started.' }),
    completedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the crawl finished. Present only when the crawl is in a terminal state (`completed`, `failed`, or `cancelled`).',
      }),
    duration: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Crawl duration in seconds. For terminal crawls, this is the elapsed time from `createdAt` to `completedAt`. For in-progress crawls, it is the elapsed time from `createdAt` to now.',
      }),
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
            pages: z
              .array(
                z
                  .object({
                    pageNumber: z
                      .int()
                      .exactOptional()
                      .openapi({ description: '1-based physical PDF page number.' }),
                    markdown: z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
              )
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Physical per-page markdown for PDFs. Present only when the request set the `pages` PDF parser option.',
              }),
            blocks: z
              .array(
                z
                  .object({
                    pageNumber: z
                      .int()
                      .exactOptional()
                      .openapi({ description: '1-based physical PDF page number.' }),
                    width: z
                      .number()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'Page render width in px — the anchor for denormalizing bbox coordinates. Null for pages that never rendered.',
                      }),
                    height: z
                      .number()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'Page render height in px. Null for pages that never rendered.',
                      }),
                    status: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Page-level rollup: ok | partial | failed.' }),
                    items: z
                      .array(
                        z
                          .object({
                            id: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Stable within a response: p<page>.b<index in reading order>.',
                              }),
                            type: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Block type: title, section_header, text, table, formula, figure, caption, page_number, page_header, page_footer. New types may appear over time.',
                              }),
                            label: z
                              .string()
                              .nullable()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Raw layout-model label, passthrough for forward compatibility.',
                              }),
                            bbox: z
                              .array(z.number())
                              .length(4)
                              .nullable()
                              .exactOptional()
                              .openapi({
                                description:
                                  '[x0, y0, x1, y1] normalized 0-1 relative to the page width/height. Multiply by the page width/height to get pixel coordinates. Null when the page has no known dimensions.',
                              }),
                            content: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Markdown fragment this block contributed to the document markdown.',
                              }),
                            markdownSpan: z
                              .array(z.int())
                              .length(2)
                              .nullable()
                              .exactOptional()
                              .openapi({
                                description:
                                  "[start, end) character offsets into the document markdown covering this block's fragment. Null when a post-processing transform rewrote the fragment.",
                              }),
                            readingOrder: z.int().exactOptional(),
                            source: z
                              .string()
                              .nullable()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Pipeline path that produced the block (for example native_text, layout_ocr, tsr, formula_model, full_page).',
                              }),
                            confidence: z
                              .object({
                                layout: z
                                  .number()
                                  .nullable()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Layout-model detection score (0-1). Null when the page bypassed layout analysis.',
                                  }),
                                ocr: z
                                  .number()
                                  .nullable()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Text confidence when the source path provides one; null otherwise.',
                                  }),
                              })
                              .exactOptional()
                              .openapi({ required: [] }),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional(),
                  })
                  .openapi({ required: [] }),
              )
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Per-page typed layout blocks for PDFs. Present only when the request set the `blocks` PDF parser option.',
              }),
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
                description:
                  'The Base64-encoded original HTTP response body if `rawBase64` is in `formats`. A bare Base64 string, not a data URI. The MIME type is in `metadata.contentType`.',
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
                title: z
                  .xor([z.string(), z.array(z.string())])
                  .exactOptional()
                  .openapi({
                    description:
                      'Title extracted from the page, can be a string or array of strings',
                  }),
                description: z
                  .xor([z.string(), z.array(z.string())])
                  .exactOptional()
                  .openapi({
                    description:
                      'Description extracted from the page, can be a string or array of strings',
                  }),
                language: z
                  .xor([z.string(), z.array(z.string())])
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Language extracted from the page, can be a string or array of strings',
                  }),
                sourceURL: z
                  .url()
                  .exactOptional()
                  .openapi({
                    description:
                      "The original URL that was requested. May differ from the page's final URL if redirects occurred.",
                  }),
                url: z
                  .url()
                  .exactOptional()
                  .openapi({
                    description:
                      'The final URL of the page after all redirects have been followed.',
                  }),
                keywords: z
                  .xor([z.string(), z.array(z.string())])
                  .exactOptional()
                  .openapi({
                    description:
                      'Keywords extracted from the page, can be a string or array of strings',
                  }),
                ogLocaleAlternate: z
                  .array(z.string())
                  .exactOptional()
                  .openapi({ description: 'Alternative locales for the page' }),
                '<any other metadata> ': z.string().exactOptional(),
                statusCode: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'The status code of the page' }),
                numPages: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description:
                      'For PDF inputs, the number of pages parsed (capped by the parsers maxPages option).',
                  }),
                totalPages: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description:
                      "For PDF inputs, the document's true page count before any maxPages capping. Omitted when it cannot be determined; a totalPages greater than numPages indicates the result was truncated.",
                  }),
                error: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'The error message of the page' }),
                concurrencyLimited: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Whether this scrape was throttled due to team concurrency limits',
                  }),
                concurrencyQueueDurationMs: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description:
                      'Time in milliseconds the request waited in the concurrency queue. Only present when concurrencyLimited is true.',
                  }),
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

const BatchScrapeStatusResponseObjSchema: z.ZodType<BatchScrapeStatusResponseObjType> = z
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
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time when the batch scrape was started.' }),
    completedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the batch scrape finished. Present only when the batch scrape is in a terminal state (`completed`, `failed`, or `cancelled`).',
      }),
    duration: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Batch scrape duration in seconds. For terminal batch scrapes, this is the elapsed time from `createdAt` to `completedAt`. For in-progress batch scrapes, it is the elapsed time from `createdAt` to now.',
      }),
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
            pages: z
              .array(
                z
                  .object({
                    pageNumber: z
                      .int()
                      .exactOptional()
                      .openapi({ description: '1-based physical PDF page number.' }),
                    markdown: z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
              )
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Physical per-page markdown for PDFs. Present only when the request set the `pages` PDF parser option.',
              }),
            blocks: z
              .array(
                z
                  .object({
                    pageNumber: z
                      .int()
                      .exactOptional()
                      .openapi({ description: '1-based physical PDF page number.' }),
                    width: z
                      .number()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'Page render width in px — the anchor for denormalizing bbox coordinates. Null for pages that never rendered.',
                      }),
                    height: z
                      .number()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'Page render height in px. Null for pages that never rendered.',
                      }),
                    status: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Page-level rollup: ok | partial | failed.' }),
                    items: z
                      .array(
                        z
                          .object({
                            id: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Stable within a response: p<page>.b<index in reading order>.',
                              }),
                            type: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Block type: title, section_header, text, table, formula, figure, caption, page_number, page_header, page_footer. New types may appear over time.',
                              }),
                            label: z
                              .string()
                              .nullable()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Raw layout-model label, passthrough for forward compatibility.',
                              }),
                            bbox: z
                              .array(z.number())
                              .length(4)
                              .nullable()
                              .exactOptional()
                              .openapi({
                                description:
                                  '[x0, y0, x1, y1] normalized 0-1 relative to the page width/height. Multiply by the page width/height to get pixel coordinates. Null when the page has no known dimensions.',
                              }),
                            content: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Markdown fragment this block contributed to the document markdown.',
                              }),
                            markdownSpan: z
                              .array(z.int())
                              .length(2)
                              .nullable()
                              .exactOptional()
                              .openapi({
                                description:
                                  "[start, end) character offsets into the document markdown covering this block's fragment. Null when a post-processing transform rewrote the fragment.",
                              }),
                            readingOrder: z.int().exactOptional(),
                            source: z
                              .string()
                              .nullable()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Pipeline path that produced the block (for example native_text, layout_ocr, tsr, formula_model, full_page).',
                              }),
                            confidence: z
                              .object({
                                layout: z
                                  .number()
                                  .nullable()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Layout-model detection score (0-1). Null when the page bypassed layout analysis.',
                                  }),
                                ocr: z
                                  .number()
                                  .nullable()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Text confidence when the source path provides one; null otherwise.',
                                  }),
                              })
                              .exactOptional()
                              .openapi({ required: [] }),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional(),
                  })
                  .openapi({ required: [] }),
              )
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Per-page typed layout blocks for PDFs. Present only when the request set the `blocks` PDF parser option.',
              }),
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
                description:
                  'The Base64-encoded original HTTP response body if `rawBase64` is in `formats`. A bare Base64 string, not a data URI. The MIME type is in `metadata.contentType`.',
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
                title: z
                  .xor([z.string(), z.array(z.string())])
                  .exactOptional()
                  .openapi({
                    description:
                      'Title extracted from the page, can be a string or array of strings',
                  }),
                description: z
                  .xor([z.string(), z.array(z.string())])
                  .exactOptional()
                  .openapi({
                    description:
                      'Description extracted from the page, can be a string or array of strings',
                  }),
                language: z
                  .xor([z.string(), z.array(z.string())])
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Language extracted from the page, can be a string or array of strings',
                  }),
                sourceURL: z
                  .url()
                  .exactOptional()
                  .openapi({
                    description:
                      "The original URL that was requested. May differ from the page's final URL if redirects occurred.",
                  }),
                url: z
                  .url()
                  .exactOptional()
                  .openapi({
                    description:
                      'The final URL of the page after all redirects have been followed.',
                  }),
                keywords: z
                  .xor([z.string(), z.array(z.string())])
                  .exactOptional()
                  .openapi({
                    description:
                      'Keywords extracted from the page, can be a string or array of strings',
                  }),
                ogLocaleAlternate: z
                  .array(z.string())
                  .exactOptional()
                  .openapi({ description: 'Alternative locales for the page' }),
                '<any other metadata> ': z.string().exactOptional(),
                statusCode: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'The status code of the page' }),
                numPages: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description:
                      'For PDF inputs, the number of pages parsed (capped by the parsers maxPages option).',
                  }),
                totalPages: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description:
                      "For PDF inputs, the document's true page count before any maxPages capping. Omitted when it cannot be determined; a totalPages greater than numPages indicates the result was truncated.",
                  }),
                error: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'The error message of the page' }),
                concurrencyLimited: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Whether this scrape was throttled due to team concurrency limits',
                  }),
                concurrencyQueueDurationMs: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description:
                      'Time in milliseconds the request waited in the concurrency queue. Only present when concurrencyLimited is true.',
                  }),
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
  .object({
    success: z.boolean().exactOptional(),
    links: z
      .array(
        z
          .object({
            url: z.url(),
            title: z
              .string()
              .exactOptional()
              .openapi({ description: 'The title of the page, if available.' }),
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'A description of the page, if available.' }),
          })
          .openapi({ required: ['url'] }),
      )
      .exactOptional(),
  })
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
    data: z.looseObject({}).exactOptional(),
    status: z
      .enum(['completed', 'processing', 'failed', 'cancelled'])
      .exactOptional()
      .openapi({ description: 'The current status of the extract job' }),
    expiresAt: z.iso.datetime({ offset: true }).exactOptional(),
    tokensUsed: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The number of tokens used by the extract job. Only available if the job is completed.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ExtractStatusResponse')

const SearchFeedbackRequestSchema = z
  .object({
    rating: z.enum(['good', 'partial', 'bad']),
    valuableSources: z
      .array(
        z
          .object({ url: z.url(), reason: z.string().max(1000).exactOptional() })
          .openapi({ required: ['url'] }),
      )
      .max(50)
      .exactOptional(),
    missingContent: z
      .array(
        z
          .object({
            topic: z.string().min(1).max(200),
            description: z.string().max(2000).exactOptional(),
          })
          .openapi({ required: ['topic'] }),
      )
      .max(20)
      .exactOptional(),
    querySuggestions: z.string().max(2000).exactOptional(),
    origin: z.string().default('api').exactOptional(),
    integration: z.string().nullable().exactOptional(),
  })
  .openapi({
    description:
      "For 'good', include valuableSources. For 'partial', include valuableSources or missingContent. For 'bad', include missingContent or querySuggestions.",
    required: ['rating'],
  })
  .openapi('SearchFeedbackRequest')

const SupportAskRequestSchema = z
  .looseObject({
    question: z
      .string()
      .openapi({ description: 'Question or issue for the support agent to diagnose.' }),
    rationale: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional context about what the end user is trying to accomplish.',
      }),
  })
  .openapi({ required: ['question'] })
  .openapi('SupportAskRequest')

const SupportAskResponseSchema = z
  .object({
    answer: z.string().exactOptional().openapi({ description: 'Diagnosis and recommended fix.' }),
    confidence: z.enum(['high', 'medium', 'low']).exactOptional(),
    fixParameters: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'Machine-readable API parameters that may fix the issue.' }),
    validation: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Validation result when the support agent tested or attempted a fix.',
      }),
    feedback: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Present when the support agent is blocked or needs more information.',
      }),
    durationMs: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total support-agent execution time in milliseconds.' }),
  })
  .openapi({ required: [] })
  .openapi('SupportAskResponse')

const SupportProxyErrorResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Support proxy or upstream error code.' }),
  })
  .openapi({ required: [] })
  .openapi('SupportProxyErrorResponse')

const ResearchIdMapSchema = z
  .record(z.string(), z.array(z.string()))
  .openapi({
    description: 'Source identifiers grouped by namespace.',
    example: { arxiv: ['2105.05233'] },
  })
  .openapi('ResearchIdMap')

const ResearchPaperSignalsSchema = z
  .object({
    structural: z.float64().openapi({ description: 'Raw structural graph signal.' }),
    semantic: z.float64().openapi({ description: 'Semantic score from the intent search.' }),
    articleRank: z.float64().openapi({ description: 'Structural expansion article-rank score.' }),
    seedOverlap: z
      .int()
      .min(0)
      .openapi({ description: 'Number of distinct seeds connected to this candidate.' }),
  })
  .openapi({ required: ['structural', 'semantic', 'articleRank', 'seedOverlap'] })
  .openapi('ResearchPaperSignals')

const ResearchPaperResultSchema = z
  .object({
    paperId: z
      .string()
      .openapi({
        description: 'Canonical paper id, or web:<url> for SERP-discovered display results.',
      }),
    primaryId: z
      .string()
      .openapi({
        description:
          'Preferred cite/fetch id such as arxiv:<id>, pmid:<id>, pmcid:<id>, or doi:<id>.',
      }),
    ids: ResearchIdMapSchema.exactOptional(),
    title: z.string(),
    abstract: z.string(),
    score: z.float64(),
    signals: ResearchPaperSignalsSchema.exactOptional(),
  })
  .openapi({ required: ['paperId', 'primaryId', 'title', 'abstract', 'score'] })
  .openapi('ResearchPaperResult')

const ResearchPaperMetadataSchema = z
  .object({
    paperId: z.string().openapi({ description: 'Canonical paper id.' }),
    ids: ResearchIdMapSchema.exactOptional(),
    title: z.string(),
    abstract: z.string(),
    authors: z.string().exactOptional().openapi({ description: 'Comma-joined author names.' }),
    categories: z.array(z.string()).exactOptional().openapi({ description: 'Paper categories.' }),
    createdDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Original creation date string.' }),
    updateDate: z.string().exactOptional().openapi({ description: 'Last-updated date string.' }),
  })
  .openapi({ required: ['paperId', 'title', 'abstract'] })
  .openapi('ResearchPaperMetadata')

const ResearchPassageSchema = z
  .object({
    text: z.string().openapi({ description: 'In-body passage text. May include markdown tables.' }),
    score: z.float64().openapi({ description: 'Dense similarity score for the passage.' }),
  })
  .openapi({ required: ['text', 'score'] })
  .openapi('ResearchPassage')

const ResearchSearchPapersResponseSchema = z
  .object({ success: z.boolean(), results: z.array(ResearchPaperResultSchema) })
  .openapi({ required: ['success', 'results'] })
  .openapi('ResearchSearchPapersResponse')

const ResearchPaperMetadataResponseSchema = z
  .object({ success: z.boolean(), paper: ResearchPaperMetadataSchema })
  .openapi({ required: ['success', 'paper'] })
  .openapi('ResearchPaperMetadataResponse')

const ResearchReadPaperResponseSchema = z
  .object({
    success: z.boolean(),
    paper: ResearchPaperMetadataSchema,
    paperId: z.string(),
    query: z.string(),
    passages: z.array(ResearchPassageSchema),
  })
  .openapi({ required: ['success', 'paper', 'paperId', 'query', 'passages'] })
  .openapi('ResearchReadPaperResponse')

const ResearchSimilarPapersResponseSchema = z
  .object({
    success: z.boolean(),
    results: z.array(ResearchPaperResultSchema),
    poolSize: z.int().min(0),
    truncated: z.boolean(),
    note: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['success', 'results', 'poolSize', 'truncated'] })
  .openapi('ResearchSimilarPapersResponse')

const DeveloperSearchResultSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Stable result id, such as `issue:owner/repo#123`. The prefix is the result kind.',
        example: 'issue:firecrawl/firecrawl#1234',
      }),
    url: z.url().exactOptional(),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Frequently absent on `doc` results, where the source page carries no usable title. Fall back to `url`.',
      }),
    passages: z
      .array(
        z
          .object({
            text: z.string().exactOptional(),
            citation_url: z
              .url()
              .exactOptional()
              .openapi({ description: 'URL to cite for this passage.' }),
            truncated: z
              .boolean()
              .exactOptional()
              .openapi({
                description: 'Present and true when `text` omits bytes from the full passage.',
              }),
            served_span: z
              .object({ start: z.int().min(0), end: z.int().min(0) })
              .exactOptional()
              .openapi({
                description:
                  'Byte offsets of `text` within the full passage when it is one contiguous span. Absent for table context assembled from separate rows.',
                required: ['start', 'end'],
              }),
            full_tokens_est: z
              .int()
              .min(0)
              .exactOptional()
              .openapi({ description: 'Approximate token count of the full passage.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Matched passages in markdown, so tables and code blocks survive.' }),
    license: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'SPDX license id, verbatim, including `NOASSERTION`. Absent when the license is not known.',
        example: 'MIT',
      }),
  })
  .openapi({ required: [] })
  .openapi('DeveloperSearchResult')

const DeveloperSearchResponseSchema = z
  .object({
    success: z.boolean().exactOptional(),
    results: z.array(DeveloperSearchResultSchema).exactOptional(),
    coverage: z
      .object({
        doc: z.enum(['ok', 'degraded', 'unavailable', 'skipped']).exactOptional(),
        issue: z.enum(['ok', 'degraded', 'unavailable', 'skipped']).exactOptional(),
        pull_request: z.enum(['ok', 'degraded', 'unavailable', 'skipped']).exactOptional(),
        readme: z.enum(['ok', 'degraded', 'unavailable', 'skipped']).exactOptional(),
      })
      .exactOptional()
      .openapi({
        description:
          'Outcome for each result type. Check this when an expected result type is missing: `skipped` means your `types` value did not ask for that type, while `degraded` or `unavailable` means the gap came from the index or from a filter, not from the query. A repository filter is one such cause — see [how the repository filters scope a search](/api-reference/endpoint/developer-search#how-the-repository-filters-scope-a-search).',
        required: [],
      }),
    reranked: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the ranked list went through the reranking stage.' }),
    repos: z
      .array(
        z
          .object({
            repo: z.string().exactOptional(),
            indexed: z.boolean().exactOptional(),
            types: z
              .object({
                issue: z.boolean().exactOptional(),
                pullRequest: z.boolean().exactOptional(),
                readme: z.boolean().exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Which result types are indexed for this repository: `issue`, `pullRequest`, and `readme`.',
                required: [],
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Present only when `repos` was sent. Echoes each slug with whether it is indexed, plus a per-type breakdown under `types`.',
        example: [
          {
            repo: 'firecrawl/firecrawl',
            indexed: true,
            types: { issue: true, pullRequest: true, readme: true },
          },
        ],
      }),
    sources: z
      .array(
        z
          .object({ source: z.string().exactOptional(), indexed: z.boolean().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Present only when `sources` was sent. Reports each id exactly as requested along with whether it is indexed. `indexed: true` means the source has a published generation, so documentation evidence from it may appear; `indexed: false` means nothing from that id can match, which distinguishes an id that is not in the index from a query that simply found nothing.',
        example: [
          { source: 'some-docs-site', indexed: true },
          { source: 'unknown-docs-site', indexed: false },
        ],
      }),
  })
  .openapi({ required: [] })
  .openapi('DeveloperSearchResponse')

const GovSearchResponseSchema = z
  .object({
    success: z.boolean().exactOptional(),
    data: z
      .object({
        web: z
          .array(
            z
              .object({
                url: z.url().exactOptional(),
                title: z.string().exactOptional(),
                description: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Matched snippet from the source document.' }),
                position: z
                  .int()
                  .exactOptional()
                  .openapi({ description: '1-based rank in the result list.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('GovSearchResponse')

const EndpointFeedbackRequestSchema = SearchFeedbackRequestSchema.and(
  z
    .object({
      endpoint: z.enum(['search', 'scrape', 'parse', 'map']),
      jobId: z.uuid(),
      issues: z
        .array(
          z
            .string()
            .regex(/^[a-z0-9][a-z0-9_-]*$/)
            .max(80),
        )
        .max(20)
        .exactOptional(),
      tags: z
        .array(
          z
            .string()
            .regex(/^[a-z0-9][a-z0-9_-]*$/)
            .max(80),
        )
        .max(20)
        .exactOptional(),
      note: z.string().max(4000).exactOptional(),
      url: z.url().exactOptional(),
      pageNumbers: z.array(z.int().min(1)).max(100).exactOptional(),
      metadata: z
        .looseObject({})
        .exactOptional()
        .openapi({
          description:
            'Small endpoint-specific metadata object. Must be 8KB or smaller; do not include full endpoint results.',
        }),
      missingContent: z
        .array(
          z
            .object({
              topic: z.string().min(1).max(200),
              description: z.string().max(2000).exactOptional(),
            })
            .openapi({ required: ['topic'] }),
        )
        .max(50)
        .exactOptional(),
    })
    .openapi({
      description:
        'Submit feedback for a v2 job. Include at least one substantive signal such as issues, note, valuableSources, missingContent, querySuggestions, url, or pageNumbers.',
      required: ['endpoint', 'jobId'],
    }),
).openapi('EndpointFeedbackRequest')

const FeedbackResponseSchema = z
  .object({
    success: z.boolean().openapi({ example: true }),
    feedbackId: z.uuid(),
    creditsRefunded: z.number(),
    alreadySubmitted: z.boolean().exactOptional(),
    dailyCapReached: z.boolean().exactOptional(),
    creditsRefundedToday: z.number().exactOptional(),
    dailyRefundCap: z.number().exactOptional(),
    warning: z.string().exactOptional(),
  })
  .openapi({ required: ['success', 'feedbackId', 'creditsRefunded'] })
  .openapi('FeedbackResponse')

const FeedbackErrorResponseSchema = z
  .object({
    success: z.boolean().openapi({ example: false }),
    error: z.string(),
    feedbackErrorCode: z.string().exactOptional(),
    details: z.array(z.looseObject({})).exactOptional(),
  })
  .openapi({ required: ['success', 'error'] })
  .openapi('FeedbackErrorResponse')

const AgentPendingApprovalSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'Send this as `approvalId`.' }),
    kind: z
      .enum(['calls', 'terms'])
      .exactOptional()
      .openapi({
        description:
          '`calls`: paid provider calls held back by `requireApproval`. `terms`: providers whose data terms need accepting (`onTermsRequired: "ask"`). Absent on items written before terms offers existed, which are `calls`.',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Why the agent wants to make these calls.' }),
    calls: z
      .array(
        z
          .object({
            id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Pass in `exchange.approve.callIds` to approve only some calls.',
              }),
            provider: z.string().exactOptional(),
            capability: z.string().exactOptional(),
            input: z
              .looseObject({})
              .exactOptional()
              .openapi({ description: 'The options the call would run with.' }),
            more: z
              .array(z.looseObject({}))
              .exactOptional()
              .openapi({ description: 'Further inputs the same call would run with.' }),
            creditsEstimate: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Estimated credits, or null when unknown.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description: 'The paid calls waiting for approval. Empty on a `terms` approval.',
      }),
    terms: z
      .array(
        z
          .object({
            provider: z.string().exactOptional(),
            name: z.string().exactOptional(),
            capability: z.string().exactOptional(),
            adds: z
              .string()
              .exactOptional()
              .openapi({ description: 'What the provider would add.' }),
            version: z.string().exactOptional().openapi({ description: 'The terms version.' }),
            digest: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Null when the catalog published no digest; `terms/show` returns it.',
              }),
            url: z
              .string()
              .exactOptional()
              .openapi({ description: 'Where a person accepts the terms in the dashboard.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'On a `terms` approval, the providers whose terms need accepting.' }),
    resolution: z
      .object({
        approved: z.boolean().exactOptional(),
        callIds: z.array(z.string()).exactOptional(),
        always: z.boolean().exactOptional(),
        byRunId: z.string().exactOptional(),
      })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Null until a later turn answers the approval.', required: [] }),
  })
  .openapi({
    description:
      'What the turn stopped to ask. Answer it on the next turn of the thread with `exchange.approve` or `exchange.decline`.',
    required: [],
  })
  .openapi('AgentPendingApproval')

const AgentExchangeSummarySchema = z
  .object({
    enabled: z.boolean().exactOptional(),
    toolkits: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Pinned providers. Empty or absent means every provider the team can use.',
      }),
    requireApproval: z.boolean().exactOptional(),
    onTermsRequired: z.enum(['skip', 'ask']).exactOptional(),
    paidCalls: z
      .int()
      .exactOptional()
      .openapi({ description: 'Paid provider calls the run made.' }),
    creditsUsed: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Credits the provider calls used, or null when unknown.' }),
    skippedProviders: z
      .array(
        z
          .object({
            provider: z.string().exactOptional(),
            name: z.string().exactOptional(),
            capability: z.string().exactOptional(),
            adds: z
              .string()
              .exactOptional()
              .openapi({ description: 'What the provider would have added.' }),
            reason: z.literal('terms_required').exactOptional(),
            version: z.string().exactOptional().openapi({ description: 'The terms version.' }),
            termsUrl: z
              .string()
              .exactOptional()
              .openapi({ description: 'Where a person accepts the terms in the dashboard.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Providers that would have helped but need data terms your team has not accepted. Any `onTermsRequired` mode.',
      }),
    requiresAction: z
      .object({
        type: z.literal('accept_terms').exactOptional(),
        approvalId: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The `terms` `pendingApproval` to answer once the terms are accepted.',
          }),
        providers: z
          .array(
            z
              .object({
                provider: z.string().exactOptional(),
                name: z.string().exactOptional(),
                capability: z.string().exactOptional(),
                adds: z.string().exactOptional(),
                version: z.string().exactOptional(),
                digest: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'Null when the catalog published no digest; `terms/show` returns it.',
                  }),
                url: z.string().exactOptional(),
                show: z
                  .looseObject({})
                  .exactOptional()
                  .openapi({
                    description:
                      'The `terms/show` call, as `{ provider, capability, options }` for `/v2/scrape` `alexandria`.',
                  }),
                accept: z
                  .looseObject({})
                  .exactOptional()
                  .openapi({
                    description:
                      'The `terms/accept` call, as `{ provider, capability, options }` for `/v2/scrape` `alexandria`.',
                  }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({
        description:
          '`onTermsRequired: "ask"` only, when a terms offer ended the turn: the calls to view and accept each provider\'s terms. Nothing here runs for you, and `terms/accept` must only be called after your user explicitly agrees.',
        required: [],
      }),
  })
  .openapi({
    description:
      'What the run did with Alexandria. `toolkits` and `requireApproval` are what the run resolved to after thread inheritance.',
    required: [],
  })
  .openapi('AgentExchangeSummary')

const MonitorIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'monitorId',
      in: 'path',
      required: true,
      schema: { type: 'string', format: 'uuid' },
      description: 'The monitor ID',
    },
  })

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getMonitorRoute = createRoute({
  method: 'get',
  path: '/monitor',
  tags: ['Monitoring'],
  summary: 'List monitors',
  operationId: 'listMonitors',
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
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            schema: { type: 'integer', minimum: 1, maximum: 100, default: 25 },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            schema: { type: 'integer', minimum: 0, default: 0 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of monitors',
      content: { 'application/json': { schema: MonitorListResponseSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postMonitorRoute = createRoute({
  method: 'post',
  path: '/monitor',
  tags: ['Monitoring'],
  summary: 'Create a monitor',
  operationId: 'createMonitor',
  request: {
    body: {
      content: {
        'application/json': {
          schema: MonitorCreateRequestSchema,
          examples: {
            scrapeMonitor: {
              summary: 'Scrape a URL every 30 minutes',
              value: {
                name: 'Blog monitor',
                schedule: { text: 'every 30 minutes', timezone: 'UTC' },
                goal: 'Notify me when a new blog post is published or the headline changes',
                notification: {
                  email: { enabled: true, recipients: ['alerts@example.com'], includeDiffs: true },
                },
                targets: [{ type: 'scrape', urls: ['https://example.com/blog'] }],
              },
            },
            crawlMonitor: {
              summary: 'Crawl a site on a cron schedule',
              value: {
                name: 'Docs monitor',
                schedule: { cron: '7-59/15 * * * *', timezone: 'UTC' },
                webhook: {
                  url: 'https://example.com/webhooks/firecrawl',
                  events: ['monitor.page', 'monitor.check.completed'],
                },
                goal: 'Notify me when docs pages add, remove, or materially change API behavior',
                targets: [
                  { type: 'crawl', url: 'https://example.com/docs', crawlOptions: { limit: 100 } },
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Monitor created',
      content: { 'application/json': { schema: MonitorResponseSchema } },
    },
    400: { description: 'Invalid monitor request' },
  },
  security: [{ bearerAuth: [] }],
})

export const getMonitorMonitorIdRoute = createRoute({
  method: 'get',
  path: '/monitor/{monitorId}',
  tags: ['Monitoring'],
  summary: 'Get a monitor',
  operationId: 'getMonitor',
  request: { params: z.object({ monitorId: MonitorIdParamsSchema }) },
  responses: {
    200: {
      description: 'Monitor details',
      content: { 'application/json': { schema: MonitorResponseSchema } },
    },
    404: { description: 'Monitor not found' },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteMonitorMonitorIdRoute = createRoute({
  method: 'delete',
  path: '/monitor/{monitorId}',
  tags: ['Monitoring'],
  summary: 'Delete a monitor',
  operationId: 'deleteMonitor',
  request: { params: z.object({ monitorId: MonitorIdParamsSchema }) },
  responses: {
    200: {
      description: 'Monitor deleted',
      content: { 'application/json': { schema: SuccessResponseSchema } },
    },
    404: { description: 'Monitor not found' },
  },
  security: [{ bearerAuth: [] }],
})

export const patchMonitorMonitorIdRoute = createRoute({
  method: 'patch',
  path: '/monitor/{monitorId}',
  tags: ['Monitoring'],
  summary: 'Update a monitor',
  operationId: 'updateMonitor',
  request: {
    params: z.object({ monitorId: MonitorIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: MonitorUpdateRequestSchema,
          example: { schedule: { text: 'every 15 minutes starting at :07' }, status: 'active' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Monitor updated',
      content: { 'application/json': { schema: MonitorResponseSchema } },
    },
    404: { description: 'Monitor not found' },
  },
  security: [{ bearerAuth: [] }],
})

export const postMonitorMonitorIdRunRoute = createRoute({
  method: 'post',
  path: '/monitor/{monitorId}/run',
  tags: ['Monitoring'],
  summary: 'Run a monitor',
  operationId: 'runMonitor',
  request: { params: z.object({ monitorId: MonitorIdParamsSchema }) },
  responses: {
    200: {
      description: 'Monitor check queued',
      content: { 'application/json': { schema: MonitorRunResponseSchema } },
    },
    409: { description: 'A monitor check is already running' },
  },
  security: [{ bearerAuth: [] }],
})

export const getMonitorMonitorIdChecksRoute = createRoute({
  method: 'get',
  path: '/monitor/{monitorId}/checks',
  tags: ['Monitoring'],
  summary: 'List monitor checks',
  operationId: 'listMonitorChecks',
  request: {
    params: z.object({ monitorId: MonitorIdParamsSchema }),
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
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            schema: { type: 'integer', minimum: 1, maximum: 100, default: 25 },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            schema: { type: 'integer', minimum: 0, default: 0 },
            required: false,
          },
        }),
      status: z
        .enum([
          'queued',
          'running',
          'completed',
          'failed',
          'partial',
          'skipped_overlap',
          'skipped_no_credits',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            schema: {
              type: 'string',
              enum: [
                'queued',
                'running',
                'completed',
                'failed',
                'partial',
                'skipped_overlap',
                'skipped_no_credits',
              ],
            },
            description: 'Filter checks by status.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Monitor checks',
      content: { 'application/json': { schema: MonitorCheckListResponseSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getMonitorMonitorIdChecksCheckIdRoute = createRoute({
  method: 'get',
  path: '/monitor/{monitorId}/checks/{checkId}',
  tags: ['Monitoring'],
  summary: 'Get a monitor check',
  operationId: 'getMonitorCheck',
  request: {
    params: z.object({
      monitorId: MonitorIdParamsSchema,
      checkId: z
        .uuid()
        .openapi({
          param: {
            name: 'checkId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The monitor check ID',
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
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            schema: { type: 'integer', minimum: 1, maximum: 100, default: 25 },
            required: false,
          },
        }),
      skip: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'skip',
            in: 'query',
            schema: { type: 'integer', minimum: 0, default: 0 },
            description:
              'Number of page results to skip. Use the `next` URL from the previous response for pagination.',
            required: false,
          },
        }),
      status: z
        .enum(['same', 'new', 'changed', 'removed', 'error'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            schema: { type: 'string', enum: ['same', 'new', 'changed', 'removed', 'error'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Monitor check details',
      content: { 'application/json': { schema: MonitorCheckDetailResponseSchema } },
    },
    404: { description: 'Monitor check not found' },
  },
  security: [{ bearerAuth: [] }],
})

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
            .and(ScrapeOptionsSchema)
            .and(
              z
                .object({
                  zeroDataRetention: z
                    .boolean()
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        'If true, this will enable zero data retention for this scrape. To enable this feature, please contact help@firecrawl.dev',
                    }),
                })
                .openapi({ required: [] }),
            )
            .and(
              z
                .object({
                  alexandria: z
                    .xor([AlexandriaCallSchema, z.array(AlexandriaCallSchema).min(1).max(10)])
                    .exactOptional()
                    .openapi({
                      description:
                        'Execute one or more catalogued provider tools instead of scraping a URL. Cannot be combined with `url`, `formats`, or other scrape options (400); the only allowed sibling keys are `timeout`, `origin`, and `integration`. Use the `x-request-id` request header as a client-chosen idempotency key (1 to 128 characters of letters, digits, `.`, `_`, `:`, `-`) — it is echoed back, and a completed request with the same key replays its original response and `scrape_id` instead of re-executing. To browse the catalogue and read tool contracts for free, call Find Tools: set `provider` to `firecrawl`, `capability` to `find-tools`, and `options` to a `FindToolsOptions` object. The result `data` is a `FindToolsData` page.',
                    }),
                  domainTools: z
                    .boolean()
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        "When true on an ordinary URL scrape, `data.tools` lists tool contracts matched to the scraped page's domain (same `DiscoveredTool` shape as search). Requires the team's Alexandria access to be enabled and no zero data retention (403 otherwise). Free.",
                    }),
                  toolDetail: z
                    .enum(['compact', 'summary', 'full'])
                    .exactOptional()
                    .openapi({
                      description:
                        'How much of each tool contract to return in `data.tools` when `domainTools` is true. `compact` returns only `provider`, `capability`, and `description`. `summary` returns the full tool entry without `options` and `response`. `full` also returns `options`, `response`, and `examples`. If you omit it, tools are returned as with `summary`.',
                    }),
                })
                .openapi({ required: [] }),
            ),
          examples: {
            scrapeUrl: {
              summary: 'Scrape a URL',
              value: { url: 'https://example.com', formats: ['markdown'] },
            },
            findTools: {
              summary: 'Find Tools: browse the Alexandria catalogue (free)',
              description:
                "Calls the `firecrawl/find-tools` capability. It lists the tools of the `particle` provider and does not execute them. Follow an item's `next` call, or the page's `next` call, with another `alexandria` request.",
              value: {
                alexandria: {
                  provider: 'firecrawl',
                  capability: 'find-tools',
                  options: {
                    providers: ['particle'],
                    level: 'tools',
                    expand: ['options', 'response'],
                    limit: 2,
                  },
                },
              },
            },
          },
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
          schema: z.xor([ScrapeResponseSchema, AlexandriaScrapeResponseSchema]),
        },
      },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'Bad request. `alexandria` cannot be combined with `url`, `formats`, or other scrape options, and only recognizes `provider`, `capability`, and `options`.',
                }),
              code: z.string().exactOptional(),
              chargeId: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    402: {
      description:
        'Payment required. Also returned as `insufficient_credits` when the team lacks the credits to execute an `alexandria` request; in that case nothing is executed.',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'Payment required to access this resource.' }),
              code: z.string().exactOptional().openapi({ example: 'insufficient_credits' }),
              chargeId: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    403: {
      description:
        'Forbidden. Returned when `alexandria` execution or `domainTools` is not enabled for the team, when zero data retention is active, or when third-party data terms have not been accepted (`THIRD_PARTY_DATA_TERMS_REQUIRED`, which includes `requiresAction`).',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z.string().exactOptional(),
              code: z
                .string()
                .exactOptional()
                .openapi({ example: 'THIRD_PARTY_DATA_TERMS_REQUIRED' }),
              requiresAction: z
                .object({
                  type: z
                    .literal('accept_terms')
                    .openapi({ description: 'The action to take. Always `accept_terms`.' }),
                  terms: z
                    .string()
                    .openapi({ description: 'The provider whose terms must be accepted.' }),
                  version: z
                    .string()
                    .openapi({
                      description: "The version of the provider's terms that must be accepted.",
                    }),
                  url: z
                    .url()
                    .openapi({
                      description:
                        'The dashboard page where a human (an organization admin) accepts the terms. Send this URL to a person; do not accept the terms automatically.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Present with `THIRD_PARTY_DATA_TERMS_REQUIRED`. Tells you which provider terms an organization admin must accept before you retry this request.',
                  required: ['type', 'terms', 'version', 'url'],
                }),
              chargeId: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description:
        'Not found. Returned as `unknown_provider` when an `alexandria` call references a provider or capability that does not exist; nothing is executed.',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z.string().exactOptional(),
              code: z.string().exactOptional().openapi({ example: 'unknown_provider' }),
              chargeId: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    409: {
      description:
        'Conflict. Returned as `duplicate_request` or `request_in_flight` when the same `x-request-id` is reused while the original request is still being processed or was already completed with different parameters.',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z.string().exactOptional(),
              code: z.string().exactOptional().openapi({ example: 'duplicate_request' }),
              chargeId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The charge ID of the in-flight or original request.' }),
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
              success: z.boolean().exactOptional().openapi({ example: false }),
              code: z.string().exactOptional().openapi({ example: 'UNKNOWN_ERROR' }),
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'An unexpected error occurred on the server.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    503: {
      description:
        'Service unavailable. Returned as `request_unresolved` when the outcome of an in-flight `alexandria` request with this `x-request-id` could not be determined — keep the same `x-request-id` and retry rather than issuing a new request. Also returned as `billing_unavailable` when credits could not be charged.',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z.string().exactOptional(),
              code: z.string().exactOptional().openapi({ example: 'request_unresolved' }),
              chargeId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The charge ID of the unresolved request. Reuse the same `x-request-id` to retry; do not create a new request.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postScrapeJobIdInteractRoute = createRoute({
  method: 'post',
  path: '/scrape/{jobId}/interact',
  tags: ['Scraping'],
  summary: 'Interact with the browser session associated with a scrape job',
  operationId: 'interactWithScrapeBrowserSession',
  request: {
    params: z.object({
      jobId: z
        .uuid()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The scrape job ID',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              code: z
                .string()
                .min(1)
                .max(100000)
                .openapi({ description: 'Code to execute in the scrape-bound browser sandbox' }),
              language: z
                .enum(['python', 'node', 'bash'])
                .default('node')
                .exactOptional()
                .openapi({
                  description:
                    'Language of the code to execute. Use `node` for JavaScript or `bash` for agent-browser CLI commands.',
                }),
              timeout: z
                .int()
                .min(1)
                .max(300)
                .default(30)
                .exactOptional()
                .openapi({ description: 'Execution timeout in seconds' }),
              origin: z
                .string()
                .exactOptional()
                .openapi({ description: 'Optional origin label used for execution telemetry' }),
            })
            .openapi({ required: ['code'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Code executed successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              cdpUrl: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Raw Chrome DevTools Protocol (CDP) WebSocket URL for the browser session. Use it to connect directly with Playwright, Puppeteer, or any CDP client.',
                }),
              liveViewUrl: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Read-only live view URL for the browser session' }),
              interactiveLiveViewUrl: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Interactive live view URL (viewers can control the browser)',
                }),
              output: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: "AI agent's final response (only present when using prompt)",
                }),
              stdout: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Standard output from the code execution' }),
              result: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Standard output (alias for stdout)' }),
              stderr: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Standard error output from the code execution' }),
              exitCode: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Exit code of the executed process' }),
              killed: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether the process was killed due to timeout' }),
              error: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Error message if the code raised an exception' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Invalid job ID',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z.string().exactOptional().openapi({ example: 'Invalid job ID format.' }),
            })
            .openapi({ required: [] }),
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
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z.string().exactOptional().openapi({ example: 'Forbidden.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Scrape job not found',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z.string().exactOptional().openapi({ example: 'Job not found.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    409: {
      description: 'Scrape replay context is unavailable or session could not be initialized',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'Replay context is unavailable for this scrape job. Please rerun the scrape.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    410: {
      description: 'Scrape browser session has already been destroyed',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'Browser session has been destroyed.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    429: {
      description: 'Too many active browser sessions',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'You have reached the maximum number of active browser sessions.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    502: {
      description: 'Failed to communicate with browser service',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'Failed to execute code in browser session.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteScrapeJobIdInteractRoute = createRoute({
  method: 'delete',
  path: '/scrape/{jobId}/interact',
  tags: ['Scraping'],
  summary: 'Stop the interactive browser session associated with a scrape job',
  operationId: 'stopInteractiveScrapeBrowserSession',
  request: {
    params: z.object({
      jobId: z
        .uuid()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The scrape job ID',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Interactive scrape browser session stopped successfully',
      content: {
        'application/json': {
          schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z.string().exactOptional().openapi({ example: 'Forbidden.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Interactive scrape browser session not found',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z.string().exactOptional().openapi({ example: 'Browser session not found.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postParseRoute = createRoute({
  method: 'post',
  path: '/parse',
  tags: ['Scraping'],
  summary: 'Upload and parse a file',
  operationId: 'parseFile',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'The file bytes to parse. Supported extensions: .html, .htm, .xhtml, .pdf, .docx, .doc, .docm, .odt, .ods, .odp, .rtf, .xlsx, .xls, .xlsm, .xlsb, .pptx, .ppt, .pptm, .epub, .csv.',
                }),
              options: z
                .object({
                  formats: ParseFormatsSchema.exactOptional(),
                  onlyMainContent: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .default(true)
                    .exactOptional()
                    .openapi({
                      description:
                        'Only return the main content of the page excluding headers, navs, footers, etc.',
                    }),
                  includeTags: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(z.string()),
                    )
                    .exactOptional()
                    .openapi({ description: 'Tags to include in the output.' }),
                  excludeTags: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(z.string()),
                    )
                    .exactOptional()
                    .openapi({ description: 'Tags to exclude from the output.' }),
                  headers: z
                    .looseObject({})
                    .exactOptional()
                    .openapi({
                      description: 'Headers to send when additional network requests are required.',
                    }),
                  timeout: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int().max(300000),
                    )
                    .default(30000)
                    .exactOptional()
                    .openapi({
                      description:
                        'Timeout in milliseconds for the request. Default is 30000 (30 seconds). Maximum is 300000 (300 seconds).',
                    }),
                  parsers: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(
                        z.xor([
                          z
                            .strictObject({
                              type: z.literal('pdf'),
                              mode: z
                                .enum(['fast', 'auto', 'ocr'])
                                .default('auto')
                                .exactOptional()
                                .openapi({
                                  description:
                                    'PDF parsing mode. "fast": text-only extraction. "auto": text-first with OCR fallback. "ocr": OCR on every page.',
                                }),
                              maxPages: z
                                .preprocess(
                                  (val) =>
                                    typeof val === 'string' &&
                                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                      ? Number(val)
                                      : val,
                                  z.int().min(1).max(10000),
                                )
                                .exactOptional()
                                .openapi({
                                  description: 'Maximum number of pages to parse from the PDF.',
                                }),
                              pages: z
                                .preprocess(
                                  ((read) => (val: unknown) => {
                                    const result = read.safeParse(val)
                                    return result.success ? result.data : val
                                  })(z.stringbool()),
                                  z.boolean(),
                                )
                                .default(false)
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Include physical per-page markdown alongside the document markdown. Populates the `pages` field on the document as an array of { pageNumber, markdown }. No additional cost.',
                                }),
                              blocks: z
                                .preprocess(
                                  ((read) => (val: unknown) => {
                                    const result = read.safeParse(val)
                                    return result.success ? result.data : val
                                  })(z.stringbool()),
                                  z.boolean(),
                                )
                                .default(false)
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Include per-page typed layout blocks alongside the document markdown. Populates the `blocks` field on the document: typed blocks (title, section_header, text, table, formula, figure, caption, ...) with normalized bounding boxes, reading order, character-span links into the markdown, and per-block confidence. No additional cost.',
                                }),
                              pageMarkers: z
                                .preprocess(
                                  ((read) => (val: unknown) => {
                                    const result = read.safeParse(val)
                                    return result.success ? result.data : val
                                  })(z.stringbool()),
                                  z.boolean(),
                                )
                                .default(false)
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Annotate page breaks in the document markdown: pages are joined with `\\n\\n---\\n\\n<!-- page N -->\\n\\n`, where N is the 1-based physical page of the content that follows. Markers appear between pages only (no leading marker for page 1), and numbering may skip pages merged across a page break — use `pages: true` when every physical page is needed. No new response field; no additional cost.',
                                }),
                            })
                            .openapi({ required: ['type'] }),
                        ]),
                      ),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Controls file parser behavior when relevant (for example PDF parser mode).',
                      default: ['pdf'],
                    }),
                  skipTlsVerification: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .default(true)
                    .exactOptional()
                    .openapi({
                      description: 'Skip TLS certificate verification when making requests.',
                    }),
                  removeBase64Images: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .default(true)
                    .exactOptional()
                    .openapi({
                      description:
                        'Remove base64-encoded images from output and keep alt text placeholders.',
                    }),
                  blockAds: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .default(true)
                    .exactOptional()
                    .openapi({ description: 'Enable ad and cookie popup blocking.' }),
                  checkPromptInjection: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        'When enabled, scans the parsed content for prompt injection attempts before any LLM-backed format (such as json, summary or question) runs. If an injection is detected, the request fails with a 403 and error code SCRAPE_PROMPT_INJECTION_DETECTED. Adds 4 credits when the check runs. If the check cannot scan all of the content, the parse continues with a warning and the check is not billed.',
                    }),
                  redactPII: z
                    .xor([
                      z.preprocess(
                        ((read) => (val: unknown) => {
                          const result = read.safeParse(val)
                          return result.success ? result.data : val
                        })(z.stringbool()),
                        z.boolean(),
                      ),
                      RedactPIIOptionsSchema,
                    ])
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        'Redact personally identifiable information from returned markdown. Pass `true` to use defaults, or an object to tune mode, entities, and replacement style.',
                    }),
                  proxy: z
                    .enum(['basic', 'auto'])
                    .exactOptional()
                    .openapi({
                      description:
                        'Proxy mode for parse uploads. `/parse` supports only `basic` and `auto`.',
                    }),
                  origin: z
                    .string()
                    .default('api')
                    .exactOptional()
                    .openapi({ description: 'Origin identifier for analytics and logging.' }),
                  integration: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({ description: 'Optional integration identifier.' }),
                  auditMetadata: AuditMetadataSchema.exactOptional(),
                  zeroDataRetention: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        'If true, this will enable zero data retention for this parse. To enable this feature, please contact help@firecrawl.dev',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Optional parse options sent as JSON in the multipart `options` field.',
                  required: [],
                }),
            })
            .openapi({ required: ['file'] }),
          encoding: { options: { contentType: 'application/json' } },
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
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              code: z.string().exactOptional().openapi({ example: 'BAD_REQUEST' }),
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'Invalid multipart form-data request.' }),
            })
            .openapi({ required: [] }),
        },
      },
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
              success: z.boolean().exactOptional().openapi({ example: false }),
              code: z.string().exactOptional().openapi({ example: 'UNKNOWN_ERROR' }),
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

export const getParseFormatsRoute = createRoute({
  method: 'get',
  path: '/parse/formats',
  tags: ['Scraping'],
  summary: 'List file formats supported by /parse',
  operationId: 'getParseFormats',
  responses: {
    200: {
      description:
        'Supported formats. Responses can be cached for up to an hour (`Cache-Control: private, max-age=3600`).',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: true }),
              data: z
                .object({
                  formats: z
                    .array(
                      z
                        .object({
                          format: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Short name of the format, the canonical extension without the dot.',
                              example: 'docx',
                            }),
                          kind: z
                            .enum(['document', 'image'])
                            .exactOptional()
                            .openapi({
                              description:
                                "Whether the format is parsed as a document or OCR'd as an image.",
                              example: 'document',
                            }),
                          extensions: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                'File extensions accepted for this format, canonical first.',
                              example: ['.docx'],
                            }),
                          mimeTypes: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description: 'MIME types accepted for this format.',
                              example: [
                                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                              ],
                            }),
                          available: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'Whether `/parse` accepts this format for your requests right now. Always `true` for documents; image formats are `false` where image OCR is not enabled.',
                              example: true,
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Missing or invalid API key',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z.string().exactOptional().openapi({ example: 'Unauthorized: Invalid token' }),
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
              maxConcurrency: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "Maximum number of concurrent scrapes. This parameter allows you to set a concurrency limit for this batch scrape. If not specified, the batch scrape adheres to your team's concurrency limit.",
                }),
              ignoreInvalidURLs: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'If invalid URLs are specified in the urls array, they will be ignored. Instead of them failing the entire request, a batch scrape using the remaining valid URLs will be created, and the invalid URLs will be returned in the invalidURLs field of the response.',
                }),
            })
            .openapi({ required: ['urls'] })
            .and(ScrapeOptionsSchema)
            .and(
              z
                .object({
                  zeroDataRetention: z
                    .boolean()
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        'If true, this will enable zero data retention for this batch scrape. To enable this feature, please contact help@firecrawl.dev',
                    }),
                })
                .openapi({ required: [] }),
            ),
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
              status: z.literal('cancelled').exactOptional().openapi({ example: 'cancelled' }),
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
              prompt: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A prompt to use to generate the crawler options (all the parameters below) from natural language. Explicitly set parameters will override the generated equivalents.',
                }),
              excludePaths: z
                .array(z.string().max(2000))
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    'URL pathname regex patterns that exclude matching URLs from the crawl. For example, if you set "excludePaths": ["blog/.*"] for the base URL firecrawl.dev, any results matching that pattern will be excluded, such as https://www.firecrawl.dev/blog/firecrawl-launch-week-1-recap. Patterns use Rust regex (RE2-style) syntax: look-around and backreferences are not supported, and a pattern that does not compile is rejected with a 400. Each field accepts at most 1000 patterns of at most 2000 characters each, and includePaths and excludePaths together may contain at most 1000 patterns and 100,000 characters in total. For keyword-style filtering, send one short pattern per term rather than combining terms into a single long alternation.',
                }),
              includePaths: z
                .array(z.string().max(2000))
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    'URL pathname regex patterns that include matching URLs in the crawl. Only the paths that match the specified patterns will be included in the response. Note: the starting URL is also checked against these patterns — if it does not match, the crawl may return 0 pages. For example, if you set "includePaths": ["blog/.*"] for the base URL firecrawl.dev/blog, only pages under /blog/ will be included in the results, such as https://www.firecrawl.dev/blog/firecrawl-launch-week-1-recap. Patterns use Rust regex (RE2-style) syntax: look-around and backreferences are not supported, and a pattern that does not compile is rejected with a 400. Each field accepts at most 1000 patterns of at most 2000 characters each, and includePaths and excludePaths together may contain at most 1000 patterns and 100,000 characters in total. For keyword-style filtering, send one short pattern per term rather than combining terms into a single long alternation.',
                }),
              maxDiscoveryDepth: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "Maximum depth to crawl based on discovery order. The root site and sitemapped pages has a discovery depth of 0. For example, if you set it to 1, and you set `sitemap: 'skip'`, you will only crawl the entered URL and all URLs that are linked on that page.",
                }),
              sitemap: z
                .enum(['skip', 'include', 'only'])
                .default('include')
                .exactOptional()
                .openapi({
                  description:
                    "Sitemap mode when crawling. If you set it to 'skip', the crawler will ignore the website sitemap and only crawl the entered URL and discover pages from there onwards. If you set it to 'only', the crawler will only crawl URLs from the sitemap (plus the start URL) and will not discover links from HTML.",
                }),
              ignoreQueryParameters: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Do not re-scrape the same path with different (or none) query parameters',
                }),
              regexOnFullURL: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'When true, includePaths and excludePaths regex patterns are matched against the full URL (including query parameters) instead of just the URL pathname. Useful when you need to filter URLs based on query strings.',
                }),
              limit: z
                .int()
                .default(10000)
                .exactOptional()
                .openapi({
                  description: 'Maximum number of pages to crawl. Default limit is 10000.',
                }),
              crawlEntireDomain: z
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
                  description:
                    "Allows the crawler to follow links to external websites. External links are followed one hop (the links found on those external pages are not crawled). Links pointing to an external site's homepage (a root URL with no path) are skipped and reported in Get Crawl Errors with the code EXTERNAL_LINK; redirects to an external homepage are skipped for the same reason.",
                }),
              allowSubdomains: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Allows the crawler to follow links to subdomains of the main domain.',
                }),
              ignoreRobotsTxt: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    "Ignore the website's robots.txt rules. Enterprise only — contact support@firecrawl.com to enable.",
                }),
              robotsUserAgent: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Custom User-Agent string for robots.txt evaluation. When set, robots.txt is fetched with this User-Agent and allow/disallow rules are matched against it instead of the default. Enterprise only — contact support@firecrawl.com to enable.',
                }),
              delay: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Delay in seconds between scrapes. This helps respect website rate limits. Setting this forces concurrency to 1.',
                }),
              maxConcurrency: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "Maximum number of concurrent scrapes. This parameter allows you to set a concurrency limit for this crawl. If not specified, the crawl adheres to your team's concurrency limit.",
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
              zeroDataRetention: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'If true, this will enable zero data retention for this crawl. To enable this feature, please contact help@firecrawl.dev',
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

export const postCrawlParamsPreviewRoute = createRoute({
  method: 'post',
  path: '/crawl/params-preview',
  tags: ['Crawling'],
  summary: 'Preview crawl parameters generated from natural language prompt',
  operationId: 'crawlParamsPreview',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              url: z.url().openapi({ description: 'The URL to crawl' }),
              prompt: z
                .string()
                .max(10000)
                .openapi({
                  description: 'Natural language prompt describing what you want to crawl',
                }),
            })
            .openapi({ required: ['url', 'prompt'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful response with generated crawl parameters',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: true }),
              data: z
                .object({
                  url: z.url().exactOptional().openapi({ description: 'The URL to crawl' }),
                  includePaths: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'URL patterns to include' }),
                  excludePaths: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'URL patterns to exclude' }),
                  maxDepth: z.int().exactOptional().openapi({ description: 'Maximum crawl depth' }),
                  maxDiscoveryDepth: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Maximum discovery depth' }),
                  crawlEntireDomain: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Whether to crawl the entire domain' }),
                  allowExternalLinks: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Whether to allow external links' }),
                  allowSubdomains: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Whether to allow subdomains' }),
                  sitemap: z
                    .enum(['skip', 'include'])
                    .exactOptional()
                    .openapi({ description: 'Sitemap handling strategy' }),
                  ignoreQueryParameters: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Whether to ignore query parameters' }),
                  ignoreRobotsTxt: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Whether robots.txt rules are ignored' }),
                  robotsUserAgent: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Custom User-Agent string used for robots.txt evaluation',
                    }),
                  deduplicateSimilarURLs: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Whether to deduplicate similar URLs' }),
                  delay: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Delay between requests in milliseconds' }),
                  limit: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Maximum number of pages to crawl' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z.string().exactOptional().openapi({ example: 'Invalid request parameters' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z.string().exactOptional().openapi({ example: 'Unauthorized' }),
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
                .openapi({ example: 'Failed to process natural language prompt' }),
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
                    "Specify a search query to order the results by relevance. Example: 'blog' will return URLs that contain the word 'blog' in the URL ordered by relevance.",
                }),
              sitemap: z
                .enum(['skip', 'include', 'only'])
                .default('include')
                .exactOptional()
                .openapi({
                  description:
                    "Sitemap mode when mapping. If you set it to `skip`, the sitemap won't be used to find URLs. If you set it to `only`, only URLs that are in the sitemap will be returned. By default (`include`), the sitemap and other methods will be used together to find URLs.",
                }),
              includeSubdomains: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({ description: 'Include subdomains of the website' }),
              ignoreQueryParameters: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({ description: 'Do not return URLs with query parameters' }),
              ignoreCache: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Bypass the sitemap cache to retrieve fresh URLs. Sitemap data is cached for up to 7 days; use this parameter when your sitemap has been recently updated.',
                }),
              limit: z
                .int()
                .max(100000)
                .default(5000)
                .exactOptional()
                .openapi({ description: 'Maximum number of links to return' }),
              timeout: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Timeout in milliseconds. There is no timeout by default.',
                }),
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
              auditMetadata: AuditMetadataSchema.exactOptional(),
              threatProtection: ThreatProtectionOverrideSchema.exactOptional(),
            })
            .openapi({ required: ['url'] }),
          examples: {
            example1: {
              summary: 'Example 1',
              value: {
                url: '<string>',
                search: '<string>',
                sitemap: 'include',
                includeSubdomains: true,
                ignoreQueryParameters: true,
                ignoreCache: false,
                limit: 5000,
                location: { country: 'US', languages: ['en-US'] },
                timeout: 60000,
              },
            },
          },
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
                .looseObject({})
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
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'If invalid URLs are specified in the urls array, they will be ignored. Instead of them failing the entire request, an extract using the remaining valid URLs will be performed, and the invalid URLs will be returned in the invalidURLs field of the response.',
                }),
              threatProtection: ThreatProtectionOverrideSchema.exactOptional(),
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

export const getAgentRoute = createRoute({
  method: 'get',
  path: '/agent',
  tags: ['Agent'],
  summary: 'List agent runs',
  operationId: 'listAgents',
  request: {
    query: z.object({
      before: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0 },
            description:
              "Only return agent runs created before this unix millisecond timestamp. Pages are fixed at 20 runs; use the `before` value from the previous page's `next` URL to fetch the next page.",
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of agent runs, most recent first',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              agents: z
                .array(
                  z
                    .object({
                      id: z.uuid().exactOptional(),
                      createdAt: z.iso.datetime({ offset: true }).exactOptional(),
                      targetHint: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "Short hint describing the run's target (first URL or prompt)",
                        }),
                      origin: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Origin of the run (e.g. "api")' }),
                      integration: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Integration identifier, if the run was started with one',
                        }),
                      settings: z
                        .object({
                          hidden: z.boolean().exactOptional(),
                          starred: z.boolean().exactOptional(),
                          label: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      status: z.enum(['processing', 'completed', 'failed']).exactOptional(),
                      options: z
                        .object({
                          urls: z.array(z.url()).exactOptional(),
                          prompt: z.string().exactOptional(),
                          schema: z.looseObject({}).exactOptional(),
                          model: z
                            .enum(['spark-2', 'spark-1-pro', 'spark-1-mini'])
                            .exactOptional()
                            .openapi({
                              description:
                                'Model preset used for the agent run. Every new run executes on spark-2; Spark 1 names only appear on legacy runs.',
                            }),
                          effort: z
                            .enum(['low', 'medium', 'high'])
                            .exactOptional()
                            .openapi({
                              description:
                                'Reasoning budget used for the agent run (only present for runs that set effort)',
                            }),
                        })
                        .exactOptional()
                        .openapi({ description: 'Options the run was started with', required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              next: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Absolute URL of the next page. Only present when more pages exist.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Bad request — the before timestamp is invalid.',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'Invalid before timestamp.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postAgentRoute = createRoute({
  method: 'post',
  path: '/agent',
  tags: ['Agent'],
  summary: 'Start an agent task for agentic data extraction',
  operationId: 'startAgent',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              urls: z
                .array(z.url())
                .exactOptional()
                .openapi({ description: 'Optional list of URLs to constrain the agent to' }),
              prompt: z
                .string()
                .max(10000)
                .openapi({ description: 'The prompt describing what data to extract' }),
              schema: z
                .looseObject({})
                .exactOptional()
                .openapi({ description: 'Optional JSON schema to structure the extracted data' }),
              maxCredits: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Maximum credits to spend on this agent task. Defaults to 2500 if not set. Values above 2,500 are always billed as paid requests.',
                }),
              strictConstrainToURLs: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If true, agent will only visit URLs provided in the urls array',
                }),
              model: z
                .enum(['spark-2', 'spark-1-mini', 'spark-1-pro'])
                .default('spark-2')
                .exactOptional()
                .openapi({
                  description:
                    'The model to use for the agent task. spark-2 is the default and the model every run executes on. The Spark 1 model names remain accepted for backwards compatibility but are deprecated and route to spark-2.',
                }),
              effort: z
                .enum(['low', 'medium', 'high'])
                .exactOptional()
                .openapi({
                  description:
                    'Reasoning budget for the agent task. Every run executes on spark-2, so effort can be sent with or without model.',
                }),
              webhook: z
                .object({
                  url: z.url().openapi({ description: 'The URL to send webhook events to.' }),
                  headers: z
                    .record(z.string(), z.string())
                    .exactOptional()
                    .openapi({ description: 'Headers to send to the webhook URL.' }),
                  metadata: z
                    .record(z.string(), z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        'Custom metadata that will be included in all webhook payloads for this agent job.',
                    }),
                  events: z
                    .array(z.enum(['started', 'action', 'completed', 'failed', 'cancelled']))
                    .default(['started', 'action', 'completed', 'failed', 'cancelled'])
                    .exactOptional()
                    .openapi({
                      description: 'The events to send to the webhook URL. Defaults to all events.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A webhook specification object. Subscribes to agent lifecycle events (agent.started, agent.action, agent.completed, agent.failed, agent.cancelled).',
                  required: ['url'],
                }),
              auditMetadata: AuditMetadataSchema.exactOptional(),
              threatProtection: ThreatProtectionOverrideSchema.exactOptional(),
              threadId: z
                .uuid()
                .exactOptional()
                .openapi({
                  description:
                    "Continue an existing thread: pass the `threadId` an earlier run returned, and this request runs as that thread's next turn. Omitted `urls`, `schema`, `effort`, `mode` and `exchange` settings carry over from the previous turn. Omit `threadId` to start a new thread.",
                }),
              mode: z
                .enum(['extract', 'chat'])
                .default('extract')
                .exactOptional()
                .openapi({
                  description:
                    "`extract` returns the complete structured result in `data` every turn. `chat` lets a follow-up that asks for no new data get a short reply in `message` instead of a re-run. `exchange.requireApproval` needs `chat` on the same request. Omitted on a follow-up turn keeps the thread's mode.",
                }),
              exchange: z
                .strictObject({
                  enabled: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({
                      description:
                        'Let the agent call Alexandria providers. Defaults to `true` once `exchange` is sent; send `false` to turn providers off for a turn of a thread.',
                    }),
                  toolkits: z
                    .array(z.string())
                    .max(5)
                    .exactOptional()
                    .openapi({
                      description:
                        'Pin up to 5 providers by slug, for example `["apollo"]`. The agent then uses only those. Empty or omitted means every provider your team can use.',
                    }),
                  maxCalls: z
                    .int()
                    .min(1)
                    .max(30)
                    .default(16)
                    .exactOptional()
                    .openapi({
                      description: 'Most provider calls the agent may make in this turn.',
                    }),
                  requireApproval: z
                    .boolean()
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        'Before any paid provider call, end the turn with a `pendingApproval` of kind `calls` that you approve or decline on the next turn. Requires `mode: "chat"` on the same request, including on a follow-up.',
                    }),
                  approve: z
                    .strictObject({
                      approvalId: z
                        .uuid()
                        .openapi({ description: 'The `pendingApproval.id` to answer.' }),
                      callIds: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({
                          description:
                            'Run only these calls from the approval. Defaults to all of them. Ignored on a `terms` approval.',
                        }),
                      always: z
                        .boolean()
                        .default(false)
                        .exactOptional()
                        .openapi({
                          description:
                            'Stop asking for approval for the rest of the thread. Ignored on a `terms` approval.',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description:
                        'Answer yes to the `pendingApproval` the previous turn of this thread ended on. Needs `threadId`.',
                      required: ['approvalId'],
                    }),
                  decline: z
                    .strictObject({
                      approvalId: z
                        .uuid()
                        .openapi({ description: 'The `pendingApproval.id` to answer.' }),
                    })
                    .exactOptional()
                    .openapi({
                      description:
                        'Answer no to the `pendingApproval` the previous turn of this thread ended on. Needs `threadId`. A declined `terms` offer keeps its providers out of the rest of the thread.',
                      required: ['approvalId'],
                    }),
                  onTermsRequired: z
                    .enum(['skip', 'ask'])
                    .default('skip')
                    .exactOptional()
                    .openapi({
                      description:
                        "What to do when a provider the agent would use needs data terms your team has not accepted. Such providers are never called. `skip` answers with accepted providers and lists the others in `exchange.skippedProviders`; `ask` also ends the turn with a `terms` `pendingApproval` and `exchange.requiresAction`. Omitted on a follow-up turn keeps the previous turn's value. See [Data providers that need terms](https://docs.firecrawl.dev/features/agent#data-providers-that-need-terms).",
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "Let the agent call your team's [Alexandria](https://docs.firecrawl.dev/features/alexandria) data providers during the run. Without this object the run uses the web only (a follow-up turn inherits the previous turn's settings). See [Use your connected Alexandria tools](https://docs.firecrawl.dev/features/agent#use-your-connected-alexandria-tools).",
                  required: [],
                }),
            })
            .openapi({ required: ['prompt'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Agent task started successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              id: z.uuid().exactOptional(),
              threadId: z
                .uuid()
                .exactOptional()
                .openapi({
                  description:
                    'The thread this run belongs to. Pass it as `threadId` to continue the thread.',
                }),
              threadTurn: z
                .int()
                .exactOptional()
                .openapi({ description: "This run's turn in the thread, starting at 1." }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'Bad request — the request body failed validation (for example an invalid JSON schema).',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'Invalid JSON schema: ...' }),
            })
            .openapi({ required: [] }),
        },
      },
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
    403: {
      description: "Forbidden — a provided URL is blocked by the team's threat protection policy.",
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    "This URL (https://example.com) is blocked by your organization's threat protection policy (rule: blocklist). If you believe this is a mistake, contact your organization administrator to adjust the policy (e.g. whitelist the domain).",
                }),
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
              error: z.string().exactOptional().openapi({ example: 'Rate limit exceeded.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal server error — the agent service could not be reached.',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'Failed to passthrough agent request.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getAgentJobIdRoute = createRoute({
  method: 'get',
  path: '/agent/{jobId}',
  tags: ['Agent'],
  summary: 'Get the status of an agent job',
  operationId: 'getAgentStatus',
  request: {
    params: z.object({
      jobId: z
        .uuid()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            description: 'The ID of the agent job',
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
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'The extracted data (only present when status is completed). Never set on a failed run, including one that stopped at its credit limit.',
                }),
              partial: z
                .any()
                .exactOptional()
                .openapi({
                  description:
                    'Best-effort JSON recovered from an incomplete run. Only present on some failed runs, such as one that reached `maxCredits`; never present while the run is processing. It may be missing rows or fields, so do not treat it as a completed result.',
                }),
              partialSchemaValid: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Whether `partial` validates against the request's JSON schema. Only present when `partial` is present and the request included a `schema`.",
                }),
              stopReason: z
                .literal('credit_limit_reached')
                .exactOptional()
                .openapi({
                  description:
                    'Why a failed run stopped early. `credit_limit_reached` means the run hit its `maxCredits` limit. Only present when status is failed.',
                }),
              message: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A note from the agent about the result. In `chat` mode, a follow-up that asks for no new data is answered here instead of in `data`. On a failed credit-limit stop, it may explain what is incomplete.',
                }),
              model: z
                .enum(['spark-2', 'spark-1-pro', 'spark-1-mini'])
                .default('spark-2')
                .exactOptional()
                .openapi({
                  description:
                    'Model preset used for the agent run. Every new run executes on spark-2; Spark 1 names only appear on legacy runs.',
                }),
              effort: z
                .enum(['low', 'medium', 'high'])
                .exactOptional()
                .openapi({
                  description:
                    'Reasoning budget used for the agent run (only present for runs that set effort)',
                }),
              error: z
                .string()
                .exactOptional()
                .openapi({ description: 'Error message (only present when status is failed)' }),
              expiresAt: z.iso.datetime({ offset: true }).exactOptional(),
              creditsUsed: z.number().exactOptional(),
              threadId: z
                .uuid()
                .exactOptional()
                .openapi({ description: 'The thread this run belongs to.' }),
              threadTurn: z
                .int()
                .exactOptional()
                .openapi({ description: "This run's turn in the thread, starting at 1." }),
              mode: z.enum(['extract', 'chat']).exactOptional(),
              suggestions: z
                .array(
                  z
                    .object({
                      label: z.string().exactOptional(),
                      prompt: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description: 'Follow-ups the agent offers for the next turn of the thread.',
                }),
              pendingApproval: AgentPendingApprovalSchema.exactOptional(),
              exchange: AgentExchangeSummarySchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Bad request — the job ID is not a valid UUID.',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'Invalid job ID format. Job ID must be a valid UUID.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Agent job not found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'Agent job not found' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteAgentJobIdRoute = createRoute({
  method: 'delete',
  path: '/agent/{jobId}',
  tags: ['Agent'],
  summary: 'Cancel an agent job',
  operationId: 'cancelAgent',
  request: {
    params: z.object({
      jobId: z
        .uuid()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            description: 'The ID of the agent job',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Agent job cancelled successfully',
      content: {
        'application/json': {
          schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Bad request — the job ID is not a valid UUID.',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'Invalid job ID format. Job ID must be a valid UUID.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Agent job not found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'Agent job not found' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    409: {
      description: 'Conflict — the agent job has already finished or has already been cancelled.',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'Agent already finished' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getAgentJobIdTraceRoute = createRoute({
  method: 'get',
  path: '/agent/{jobId}/trace',
  tags: ['Agent'],
  summary: 'Get the execution trace of an agent job',
  operationId: 'getAgentTrace',
  request: {
    params: z.object({
      jobId: z
        .uuid()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            description: 'The ID of the agent job',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    query: z.object({
      liveView: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            name: 'liveView',
            in: 'query',
            description:
              'If "true", include the currently active browser sessions with live view URLs.',
            required: false,
            schema: { type: 'string', enum: ['true', 'false'] },
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
              id: z.uuid().exactOptional(),
              events: z
                .array(AgentTraceEventSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Canonical execution events for the run; group by agent.id, then order each group by producerSequence, which is monotonic per emitting agent. artifact.updated events carry the snapshotId values used by the snapshots endpoint.',
                }),
              creditsUsed: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Credits consumed so far, capped at maxCredits if one was set.',
                }),
              activeBrowserSessions: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional(),
                      liveViewUrl: z.string().exactOptional(),
                      viewport: z
                        .object({
                          width: z.number().exactOptional(),
                          height: z.number().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Currently active browser sessions (only present when liveView=true).',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'Bad request — the job ID is not a valid UUID, or the job did not run on spark-2 (traces are only available for spark-2 agent jobs).',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'Trace is only available for Spark 2 extracts' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Agent job not found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'Agent job not found' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getAgentJobIdSnapshotsSnapshotIdRoute = createRoute({
  method: 'get',
  path: '/agent/{jobId}/snapshots/{snapshotId}',
  tags: ['Agent'],
  summary: 'Get an output snapshot of an agent job',
  operationId: 'getAgentSnapshot',
  request: {
    params: z.object({
      jobId: z
        .uuid()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            description: 'The ID of the agent job',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      snapshotId: z
        .uuid()
        .openapi({
          param: {
            name: 'snapshotId',
            in: 'path',
            description: 'The ID of the snapshot, from an artifact.updated trace event',
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
              id: z.uuid().exactOptional(),
              snapshotId: z.uuid().exactOptional(),
              snapshot: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The snapshot content as a JSON-encoded string — the agent's working output artifact at that point in the run.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'Bad request — the job ID or snapshot ID is not a valid UUID, or the job did not run on spark-2 (snapshots are only available for spark-2 agent jobs).',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .string()
                .exactOptional()
                .openapi({ example: 'Snapshots are only available for Spark 2 extracts' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Agent job not found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional().openapi({ example: 'Agent job not found' }),
            })
            .openapi({ required: [] }),
        },
      },
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
                  remainingCredits: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Number of credits remaining for the team',
                      example: 1000,
                    }),
                  planCredits: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description:
                        'Number of credits in the plan. This does not include coupon credits or credits added by pay-as-you-go.',
                      example: 500000,
                    }),
                  billingPeriodStart: z.iso
                    .datetime({ offset: true })
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Start date of the current billing period.',
                      example: '2025-01-01T00:00:00Z',
                    }),
                  billingPeriodEnd: z.iso
                    .datetime({ offset: true })
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'End date of the current billing period.',
                      example: '2025-01-31T23:59:59Z',
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

export const getTeamCreditUsageHistoricalRoute = createRoute({
  method: 'get',
  path: '/team/credit-usage/historical',
  tags: ['Billing'],
  summary: 'Get historical credit usage for the authenticated team',
  operationId: 'getHistoricalCreditUsage',
  request: {
    query: z.object({
      byApiKey: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'byApiKey',
            in: 'query',
            description: 'Get historical credit usage by API key',
            required: false,
            schema: { type: 'boolean', default: false },
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
              success: z.boolean().exactOptional().openapi({ example: true }),
              periods: z
                .array(
                  z
                    .object({
                      startDate: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description: 'Start date of the billing period',
                          example: '2025-01-01T00:00:00Z',
                        }),
                      endDate: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description: 'End date of the billing period',
                          example: '2025-01-31T23:59:59Z',
                        }),
                      apiKey: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'Name of the API key used for the billing period. null if byApiKey is false (default)',
                        }),
                      totalCredits: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Total number of credits used in the billing period',
                          example: 1000,
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
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
                .openapi({
                  example: 'Internal server error while fetching historical credit usage',
                }),
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
                  remainingTokens: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Number of tokens remaining for the team',
                      example: 1000,
                    }),
                  planTokens: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description:
                        'Number of tokens in the plan. This does not include coupon tokens.',
                      example: 500000,
                    }),
                  billingPeriodStart: z.iso
                    .datetime({ offset: true })
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'Start date of the current billing period.',
                      example: '2025-01-01T00:00:00Z',
                    }),
                  billingPeriodEnd: z.iso
                    .datetime({ offset: true })
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'End date of the current billing period.',
                      example: '2025-01-31T23:59:59Z',
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

export const getTeamTokenUsageHistoricalRoute = createRoute({
  method: 'get',
  path: '/team/token-usage/historical',
  tags: ['Billing'],
  summary: 'Get historical token usage for the authenticated team (Extract only)',
  operationId: 'getHistoricalTokenUsage',
  request: {
    query: z.object({
      byApiKey: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'byApiKey',
            in: 'query',
            description: 'Get historical token usage by API key',
            required: false,
            schema: { type: 'boolean', default: false },
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
              success: z.boolean().exactOptional().openapi({ example: true }),
              periods: z
                .array(
                  z
                    .object({
                      startDate: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description: 'Start date of the billing period',
                          example: '2025-01-01T00:00:00Z',
                        }),
                      endDate: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description: 'End date of the billing period',
                          example: '2025-01-31T23:59:59Z',
                        }),
                      apiKey: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'Name of the API key used for the billing period. null if byApiKey is false (default)',
                        }),
                      totalTokens: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Total number of tokens used in the billing period',
                          example: 1000,
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
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
                .openapi({
                  example: 'Internal server error while fetching historical token usage',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getTeamQueueStatusRoute = createRoute({
  method: 'get',
  path: '/team/queue-status',
  tags: ['Miscellaneous'],
  summary: "Metrics about your team's scrape queue",
  operationId: 'getQueueStatus',
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: true }),
              jobsInQueue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Number of jobs currently in your queue' }),
              activeJobsInQueue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Number of jobs currently active' }),
              waitingJobsInQueue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Number of jobs currently waiting' }),
              maxConcurrency: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Maximum number of concurrent active jobs based on your plan',
                }),
              mostRecentSuccess: z.iso
                .datetime({ offset: true })
                .nullable()
                .exactOptional()
                .openapi({ description: 'Timestamp of the most recent successful job' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getTeamActivityRoute = createRoute({
  method: 'get',
  path: '/team/activity',
  tags: ['Account'],
  summary: 'List recent API activity',
  description:
    "Lists your team's recent API activity from the last 24 hours. Returns metadata about each job including the job ID, which can be used with the corresponding GET endpoint (e.g. GET /crawl/{id}) to retrieve full results. Supports cursor-based pagination and filtering by endpoint.",
  operationId: 'getActivity',
  request: {
    query: z.object({
      endpoint: z
        .enum([
          'scrape',
          'crawl',
          'batch_scrape',
          'search',
          'extract',
          'llmstxt',
          'deep_research',
          'map',
          'agent',
          'browser',
          'interact',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'endpoint',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              enum: [
                'scrape',
                'crawl',
                'batch_scrape',
                'search',
                'extract',
                'llmstxt',
                'deep_research',
                'map',
                'agent',
                'browser',
                'interact',
              ],
            },
            description: 'Filter by endpoint',
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
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', default: 50, minimum: 1, maximum: 100 },
            description: 'Maximum number of results per page',
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description: 'Cursor for pagination. Use the cursor value from the previous response.',
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
              success: z.boolean().exactOptional().openapi({ example: true }),
              data: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The job ID. Use this with the corresponding GET endpoint to retrieve results.',
                        }),
                      endpoint: z
                        .enum([
                          'scrape',
                          'crawl',
                          'batch_scrape',
                          'search',
                          'extract',
                          'llmstxt',
                          'deep_research',
                          'map',
                          'agent',
                          'browser',
                          'interact',
                        ])
                        .exactOptional()
                        .openapi({ description: 'The endpoint used for this job' }),
                      api_version: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The API version used for this request',
                          example: 'v1',
                        }),
                      created_at: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({ description: 'When the job was created' }),
                      target: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'The URL or query that was submitted' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              cursor: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Cursor to use for the next page. Null if there are no more results.',
                }),
              has_more: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether there are more results available' }),
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
              query: z.string().max(500).openapi({ description: 'The search query' }),
              limit: z
                .int()
                .min(1)
                .max(100)
                .default(10)
                .exactOptional()
                .openapi({
                  description:
                    'Maximum number of results to return (per source type when using multiple sources)',
                }),
              sources: z
                .array(
                  z.xor([
                    z
                      .object({
                        type: z.literal('web'),
                        tbs: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Time-based search parameter. Supports predefined time ranges (`qdr:h`, `qdr:d`, `qdr:w`, `qdr:m`, `qdr:y`), custom date ranges (`cdr:1,cd_min:MM/DD/YYYY,cd_max:MM/DD/YYYY`), and sort by date (`sbd:1`). Values can be combined, e.g. `sbd:1,qdr:w`.',
                          }),
                        location: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Location parameter for search results' }),
                      })
                      .openapi({ title: 'Web', required: ['type'] }),
                    z
                      .object({ type: z.literal('images') })
                      .openapi({ title: 'Images', required: ['type'] }),
                    z
                      .object({ type: z.literal('news') })
                      .openapi({ title: 'News', required: ['type'] }),
                    z
                      .strictObject({ type: z.literal('alexandria') })
                      .openapi({ title: 'Alexandria', required: ['type'] }),
                  ]),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Sources to search. Will determine the arrays available in the response. Defaults to [\'web\']. The plain string form (e.g. `["web", "alexandria"]`) is also accepted. The `alexandria` source returns tool contracts discovered from the Alexandria catalogue in `data.tools` instead of search results; it is free and is never counted in `creditsUsed`. Requires the team\'s Alexandria access to be enabled (403 otherwise).',
                  default: ['web'],
                }),
              domainTools: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Include tool contracts whose provider matches the domains of the returned web results. Defaults to on when `alexandria` is among the sources; set `false` to disable, or `true` alone to add domain-matched tools beside ordinary web results. Free.',
                }),
              toolDetail: z
                .enum(['compact', 'summary', 'full'])
                .default('compact')
                .exactOptional()
                .openapi({
                  description:
                    'How much of each tool contract to return in `data.tools`. `compact` returns only `provider`, `capability`, and `description`. `summary` returns the full tool entry without `options` and `response`. `full` also returns `options`, `response`, and `examples`.',
                }),
              categories: z
                .array(
                  z.xor([
                    z
                      .object({ type: z.literal('developer') })
                      .openapi({ title: 'Developer', required: ['type'] }),
                    z
                      .object({ type: z.literal('gov') })
                      .openapi({ title: 'Gov', required: ['type'] }),
                    z
                      .object({ type: z.literal('research') })
                      .openapi({ title: 'Research', required: ['type'] }),
                    z
                      .object({ type: z.literal('pdf') })
                      .openapi({ title: 'PDF', required: ['type'] }),
                  ]),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Categories to filter results by. Defaults to [], which means results will not be filtered by any categories.',
                }),
              includeDomains: z
                .array(z.hostname())
                .exactOptional()
                .openapi({
                  description:
                    'Restricts search results to the specified domains. Domains should be hostnames only, without protocol or path. Cannot be used with excludeDomains.',
                }),
              excludeDomains: z
                .array(z.hostname())
                .exactOptional()
                .openapi({
                  description:
                    'Excludes search results from the specified domains. Domains should be hostnames only, without protocol or path. Cannot be used with includeDomains.',
                }),
              tbs: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Time-based search parameter. Supports predefined time ranges (`qdr:h`, `qdr:d`, `qdr:w`, `qdr:m`, `qdr:y`), custom date ranges (`cdr:1,cd_min:MM/DD/YYYY,cd_max:MM/DD/YYYY`), and sort by date (`sbd:1`). Values can be combined, e.g. `sbd:1,qdr:w`.',
                }),
              location: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Location parameter for search results (e.g. `San Francisco,California,United States`). For best results, set both this and the `country` parameter.',
                }),
              country: z
                .string()
                .default('US')
                .exactOptional()
                .openapi({
                  description:
                    'ISO country code for geo-targeting search results (e.g. `US`). For best results, set both this and the `location` parameter.',
                }),
              safe: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When `true`, filters explicit content from search results (SafeSearch). Omit to keep the default behavior, which does not apply the filter.',
                }),
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
              highlights: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'Generate query-relevant highlights for search results. Set to false to return provider descriptions or snippets without highlighting.',
                }),
              enterprise: z
                .array(z.enum(['anon', 'zdr']))
                .exactOptional()
                .openapi({
                  description:
                    'Enterprise search options for Zero Data Retention (ZDR). Use `["zdr"]` for end-to-end ZDR (10 credits / 10 results) or `["anon"]` for anonymized ZDR (2 credits / 10 results). Must be enabled for your team.',
                }),
              scrapeOptions: ScrapeOptionsSchema.default({})
                .exactOptional()
                .openapi({ description: 'Options for scraping search results' }),
              threatProtection: ThreatProtectionOverrideSchema.exactOptional(),
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
                .object({
                  web: z
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
                            .openapi({
                              description:
                                'Screenshot URL if requested in formats. Screenshots expire after 24 hours and can no longer be downloaded.',
                            }),
                          audio: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description:
                                'Signed URL to the extracted MP3 audio file if `audio` is in `formats`. The signed URL expires after 1 hour.',
                            }),
                          video: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description:
                                'Signed URL to the extracted video file if `video` is in `formats`. The signed URL expires after 1 hour.',
                            }),
                          metadata: z
                            .object({
                              title: z.string().exactOptional(),
                              description: z.string().exactOptional(),
                              sourceURL: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    "The original URL that was requested. May differ from the page's final URL if redirects occurred.",
                                }),
                              url: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'The final URL of the page after all redirects have been followed.',
                                }),
                              statusCode: z.int().exactOptional(),
                              numPages: z
                                .int()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'For PDF inputs, the number of pages parsed (capped by the parsers maxPages option).',
                                }),
                              totalPages: z
                                .int()
                                .exactOptional()
                                .openapi({
                                  description:
                                    "For PDF inputs, the document's true page count before any maxPages capping. Omitted when it cannot be determined; a totalPages greater than numPages indicates the result was truncated.",
                                }),
                              error: z.string().nullable().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  images: z
                    .array(
                      z
                        .object({
                          title: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Title from search result' }),
                          imageUrl: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'URL of the image' }),
                          imageWidth: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Width of the image' }),
                          imageHeight: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Height of the image' }),
                          url: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'URL of the search result' }),
                          position: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Position of the search result' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  news: z
                    .array(
                      z
                        .object({
                          title: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Title of the article' }),
                          snippet: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Snippet from the article' }),
                          url: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'URL of the article' }),
                          date: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Date of the article' }),
                          imageUrl: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Image URL of the article' }),
                          position: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Position of the article' }),
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
                            .openapi({
                              description:
                                'Screenshot URL if requested in formats. Screenshots expire after 24 hours and can no longer be downloaded.',
                            }),
                          audio: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description:
                                'Signed URL to the extracted MP3 audio file if `audio` is in `formats`. The signed URL expires after 1 hour.',
                            }),
                          video: z
                            .string()
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description:
                                'Signed URL to the extracted video file if `video` is in `formats`. The signed URL expires after 1 hour.',
                            }),
                          metadata: z
                            .object({
                              title: z.string().exactOptional(),
                              description: z.string().exactOptional(),
                              sourceURL: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    "The original URL that was requested. May differ from the page's final URL if redirects occurred.",
                                }),
                              url: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'The final URL of the page after all redirects have been followed.',
                                }),
                              statusCode: z.int().exactOptional(),
                              numPages: z
                                .int()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'For PDF inputs, the number of pages parsed (capped by the parsers maxPages option).',
                                }),
                              totalPages: z
                                .int()
                                .exactOptional()
                                .openapi({
                                  description:
                                    "For PDF inputs, the document's true page count before any maxPages capping. Omitted when it cannot be determined; a totalPages greater than numPages indicates the result was truncated.",
                                }),
                              error: z.string().nullable().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  tools: z
                    .array(DiscoveredToolSchema)
                    .exactOptional()
                    .openapi({
                      description:
                        'Tool contracts discovered from the Alexandria catalogue. Present when `alexandria` is among the sources or when `domainTools` was requested; up to `limit` results per discovery source (semantic matches from the `alexandria` source, domain matches from `domainTools`).',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The search results. The arrays available will depend on the sources you specified in the request. By default, the `web` array will be returned.',
                  required: [],
                }),
              warning: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Warning message if any issues occurred. Includes `Some tool discovery results are unavailable.` when Alexandria or domain tool discovery partially failed.',
                }),
              id: z.string().exactOptional().openapi({ description: 'The ID of the search job' }),
              creditsUsed: z
                .int()
                .exactOptional()
                .openapi({ description: 'The number of credits used for the search' }),
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
              code: z.string().exactOptional().openapi({ example: 'UNKNOWN_ERROR' }),
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

export const getInteractRoute = createRoute({
  method: 'get',
  path: '/interact',
  tags: ['Interact'],
  summary: 'List interact sessions',
  operationId: 'listBrowserSessions',
  request: {
    query: z.object({
      status: z
        .enum(['active', 'destroyed'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['active', 'destroyed'] },
            description: 'Filter sessions by status',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of interact sessions',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              sessions: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional(),
                      status: z.enum(['active', 'destroyed']).exactOptional(),
                      cdpUrl: z.string().exactOptional(),
                      liveViewUrl: z.string().exactOptional(),
                      interactiveLiveViewUrl: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'URL to interact with the interact session in real time (click, type, scroll)',
                        }),
                      streamWebView: z.boolean().exactOptional(),
                      createdAt: z.iso.datetime({ offset: true }).exactOptional(),
                      lastActivity: z.iso.datetime({ offset: true }).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
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
  },
  security: [{ bearerAuth: [] }],
})

export const postInteractRoute = createRoute({
  method: 'post',
  path: '/interact',
  tags: ['Interact'],
  summary: 'Create an interact session',
  operationId: 'createBrowserSession',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ttl: z
                .int()
                .min(30)
                .max(3600)
                .default(300)
                .exactOptional()
                .openapi({ description: 'Total time-to-live in seconds for the interact session' }),
              activityTtl: z
                .int()
                .min(10)
                .max(3600)
                .exactOptional()
                .openapi({
                  description: 'Time in seconds before the session is destroyed due to inactivity',
                }),
              streamWebView: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({ description: 'Whether to stream a live view of the browser' }),
              blockAds: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    "Enable ad and cookie popup blocking, as in scrape. Sessions started from a scrape with interact use the scrape's blockAds.",
                }),
              profile: z
                .object({
                  name: z
                    .string()
                    .min(1)
                    .max(128)
                    .openapi({
                      description:
                        'A name for the profile. Sessions with the same name share storage.',
                    }),
                  saveChanges: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({
                      description:
                        'When true, browser state is saved back to the profile on close. Set to false to load existing data without writing. Multiple non-saving sessions are allowed but only one saving session at a time.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Enable persistent storage across interact sessions. Data saved in one session can be loaded in a later session using the same name.',
                  required: ['name'],
                }),
              location: z
                .strictObject({
                  country: z
                    .string()
                    .openapi({
                      description:
                        'ISO 3166-1 alpha-2 country code, such as `GB` or `DE`. Case-insensitive.',
                      example: 'GB',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "Country the session browses from. Defaults to the US. Sessions started from a scrape with interact use the scrape's location.",
                  required: ['country'],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Interact session created successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The unique session identifier' }),
              cdpUrl: z
                .string()
                .exactOptional()
                .openapi({ description: 'WebSocket URL for Chrome DevTools Protocol access' }),
              liveViewUrl: z
                .string()
                .exactOptional()
                .openapi({ description: 'URL to view the interact session in real time' }),
              interactiveLiveViewUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'URL to interact with the interact session in real time (click, type, scroll)',
                }),
              expiresAt: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'When the session will expire based on TTL' }),
            })
            .openapi({ required: [] }),
        },
      },
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
  },
  security: [{ bearerAuth: [] }],
})

export const postInteractSessionIdExecuteRoute = createRoute({
  method: 'post',
  path: '/interact/{sessionId}/execute',
  tags: ['Interact'],
  summary: 'Execute code in an interact session',
  operationId: 'executeBrowserCode',
  request: {
    params: z.object({
      sessionId: z
        .string()
        .openapi({
          param: {
            name: 'sessionId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The interact session ID',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              code: z
                .string()
                .min(1)
                .max(100000)
                .openapi({ description: 'Code to execute in the browser sandbox' }),
              language: z
                .enum(['python', 'node', 'bash'])
                .default('node')
                .exactOptional()
                .openapi({
                  description:
                    'Language of the code to execute. Use `node` for JavaScript or `bash` for agent-browser CLI commands.',
                }),
              timeout: z
                .int()
                .min(1)
                .max(300)
                .exactOptional()
                .openapi({ description: 'Execution timeout in seconds' }),
            })
            .openapi({ required: ['code'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Code executed successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              stdout: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Standard output from the code execution' }),
              result: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Standard output (alias for stdout)' }),
              stderr: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Standard error output from the code execution' }),
              exitCode: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Exit code of the executed process' }),
              killed: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether the process was killed due to timeout' }),
              error: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Error message if the code raised an exception' }),
            })
            .openapi({ required: [] }),
        },
      },
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
  },
  security: [{ bearerAuth: [] }],
})

export const deleteInteractSessionIdRoute = createRoute({
  method: 'delete',
  path: '/interact/{sessionId}',
  tags: ['Interact'],
  summary: 'Delete an interact session',
  operationId: 'deleteBrowserSession',
  request: {
    params: z.object({
      sessionId: z
        .string()
        .openapi({
          param: {
            name: 'sessionId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The interact session ID',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Interact session deleted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              sessionDurationMs: z
                .int()
                .exactOptional()
                .openapi({ description: 'Total session duration in milliseconds' }),
              creditsBilled: z
                .number()
                .exactOptional()
                .openapi({ description: 'Number of credits billed for the session' }),
            })
            .openapi({ required: [] }),
        },
      },
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
  },
  security: [{ bearerAuth: [] }],
})

export const getScrapeJobIdRoute = createRoute({
  method: 'get',
  path: '/scrape/{jobId}',
  tags: ['Scraping'],
  summary: 'Get the status of a scrape job',
  operationId: 'getScrapeStatus',
  request: {
    params: z.object({
      jobId: z
        .uuid()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The ID of the job',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Scrape job status',
      content: { 'application/json': { schema: ScrapeResponseSchema } },
    },
    402: {
      description: 'Payment required',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: false }),
              error: z.string().exactOptional(),
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
              error: z.string().exactOptional(),
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
              error: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postSearchJobIdFeedbackRoute = createRoute({
  method: 'post',
  path: '/search/{jobId}/feedback',
  tags: ['Search', 'Feedback'],
  summary: 'Submit feedback for a search job',
  operationId: 'submitSearchFeedback',
  request: {
    params: z.object({
      jobId: z
        .uuid()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'Search job id returned by /search.',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SearchFeedbackRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Feedback recorded',
      content: { 'application/json': { schema: FeedbackResponseSchema } },
    },
    400: {
      description: 'Invalid request body',
      content: { 'application/json': { schema: FeedbackErrorResponseSchema } },
    },
    403: {
      description: 'Feedback is not available for this team',
      content: { 'application/json': { schema: FeedbackErrorResponseSchema } },
    },
    404: {
      description: 'Search not found for this team',
      content: { 'application/json': { schema: FeedbackErrorResponseSchema } },
    },
    409: {
      description: 'Feedback cannot be recorded for this search',
      content: { 'application/json': { schema: FeedbackErrorResponseSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/json': { schema: FeedbackErrorResponseSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postSupportAskRoute = createRoute({
  method: 'post',
  path: '/support/ask',
  tags: ['Support'],
  summary: 'Ask the Firecrawl support agent',
  description: 'Diagnose Firecrawl job, account, and API usage issues with an AI support agent.',
  operationId: 'askSupportAgent',
  request: {
    body: { content: { 'application/json': { schema: SupportAskRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Support agent answer',
      content: { 'application/json': { schema: SupportAskResponseSchema } },
    },
    400: {
      description: 'Invalid request',
      content: { 'application/json': { schema: SupportProxyErrorResponseSchema } },
    },
    401: {
      description: 'Missing or invalid bearer token',
      content: { 'application/json': { schema: SupportProxyErrorResponseSchema } },
    },
    503: {
      description: 'Support agent unavailable',
      content: { 'application/json': { schema: SupportProxyErrorResponseSchema } },
    },
    504: {
      description: 'Support agent timeout',
      content: { 'application/json': { schema: SupportProxyErrorResponseSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getSearchResearchPapersRoute = createRoute({
  method: 'get',
  path: '/search/research/papers',
  tags: ['Research'],
  summary: 'Search papers',
  operationId: 'researchSearchPapers',
  request: {
    query: z.object({
      query: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            required: true,
            description: 'Natural-language paper search query.',
            schema: { type: 'string', minLength: 1 },
          },
        }),
      k: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .default(40)
        .exactOptional()
        .openapi({
          param: {
            name: 'k',
            in: 'query',
            required: false,
            description: 'Maximum number of ranked papers to return.',
            schema: { type: 'integer', minimum: 1, maximum: 500, default: 40 },
          },
        }),
      authors: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'authors',
            in: 'query',
            required: false,
            description:
              'Author substring filter. Repeat or pass a comma-separated value; all filters must match.',
            schema: { type: 'string' },
          },
        }),
      categories: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'categories',
            in: 'query',
            required: false,
            description:
              'Paper category filter. Repeat or pass a comma-separated value; all filters must match.',
            schema: { type: 'string' },
          },
        }),
      from: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'from',
            in: 'query',
            required: false,
            description: 'Inclusive lower bound on created/updated date.',
            schema: { type: 'string', format: 'date' },
          },
        }),
      to: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'to',
            in: 'query',
            required: false,
            description: 'Inclusive upper bound on created/updated date.',
            schema: { type: 'string', format: 'date' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Ranked paper results.',
      content: {
        'application/json': {
          schema: ResearchSearchPapersResponseSchema,
          example: {
            success: true,
            results: [
              {
                paperId: '2014215642691656232',
                primaryId: 'arxiv:2105.05233',
                ids: { arxiv: ['2105.05233'] },
                title: 'Diffusion Models Beat GANs on Image Synthesis',
                abstract:
                  'We show that diffusion models can achieve image sample quality superior to the current state-of-the-art generative models...',
                score: 0.0163934,
              },
            ],
          },
        },
      },
    },
    400: { description: 'Invalid request' },
    401: { description: 'Missing or invalid bearer token' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
  },
  security: [{ bearerAuth: [] }],
})

export const getSearchResearchPapersIdRoute = createRoute({
  method: 'get',
  path: '/search/research/papers/{id}',
  tags: ['Research'],
  summary: 'Inspect or read a paper',
  operationId: 'researchGetPaper',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Paper reference: a canonical paperId or source-specific primaryId.',
            schema: { type: 'string' },
            examples: {
              paperId: { summary: 'Canonical paperId', value: '2014215642691656232' },
              sourceId: { summary: 'Source-specific primaryId', value: 'arxiv:2105.05233' },
            },
          },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            required: false,
            description:
              'When present, returns the top matching full-text passages for this question. Omit it to inspect metadata only.',
            schema: { type: 'string', minLength: 1 },
          },
        }),
      k: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .default(4)
        .exactOptional()
        .openapi({
          param: {
            name: 'k',
            in: 'query',
            required: false,
            description: 'Passage count for read mode. Only valid when query is present.',
            schema: { type: 'integer', minimum: 1, maximum: 50, default: 4 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Paper metadata or read-mode passages.',
      content: {
        'application/json': {
          schema: z.xor([ResearchPaperMetadataResponseSchema, ResearchReadPaperResponseSchema]),
          example: {
            success: true,
            paper: {
              paperId: '2014215642691656232',
              ids: { arxiv: ['2105.05233'] },
              title: 'Diffusion Models Beat GANs on Image Synthesis',
              abstract:
                'We show that diffusion models can achieve image sample quality superior to the current state-of-the-art generative models...',
              authors: 'Prafulla Dhariwal, Alexander Nichol',
              categories: ['cs.LG'],
              createdDate: 'Wed, 11 May 2021 18:01:01 GMT',
              updateDate: '2021-06-01',
            },
          },
        },
      },
    },
    400: { description: 'Invalid request' },
    401: { description: 'Missing or invalid bearer token' },
    404: { description: 'Paper not found' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
  },
  security: [{ bearerAuth: [] }],
})

export const getSearchResearchPapersIdSimilarRoute = createRoute({
  method: 'get',
  path: '/search/research/papers/{id}/similar',
  tags: ['Research'],
  summary: 'Find related papers',
  operationId: 'researchRelatedPapers',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Primary seed paper reference.',
            schema: { type: 'string' },
            examples: {
              paperId: { summary: 'Canonical paperId', value: '2014215642691656232' },
              sourceId: { summary: 'Source-specific primaryId', value: 'arxiv:2105.05233' },
            },
          },
        }),
    }),
    query: z.object({
      intent: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'intent',
            in: 'query',
            required: true,
            description: 'Natural-language ranking/filtering intent used for semantic ranking.',
            schema: { type: 'string', minLength: 1 },
          },
        }),
      mode: z
        .enum(['similar', 'citers', 'references'])
        .default('similar')
        .exactOptional()
        .openapi({
          param: {
            name: 'mode',
            in: 'query',
            required: false,
            description: 'Structural expansion mode.',
            schema: {
              type: 'string',
              enum: ['similar', 'citers', 'references'],
              default: 'similar',
            },
          },
        }),
      k: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .default(40)
        .exactOptional()
        .openapi({
          param: {
            name: 'k',
            in: 'query',
            required: false,
            description: 'Maximum number of related papers to return.',
            schema: { type: 'integer', minimum: 1, maximum: 500, default: 40 },
          },
        }),
      rerank: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'rerank',
            in: 'query',
            required: false,
            description: 'Apply an additional rerank over fused candidates.',
            schema: { type: 'boolean' },
          },
        }),
      anchor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'anchor',
            in: 'query',
            required: false,
            description:
              'Additional seed paper reference. Repeat this parameter for multiple anchors.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Ranked related papers.',
      content: {
        'application/json': {
          schema: ResearchSimilarPapersResponseSchema,
          example: {
            success: true,
            results: [
              {
                paperId: '482107036680302043',
                primaryId: 'arxiv:2006.11239',
                ids: { arxiv: ['2006.11239'] },
                title: 'Denoising Diffusion Probabilistic Models',
                abstract:
                  'We present high quality image synthesis results using diffusion probabilistic models...',
                score: 0.032119,
                signals: { structural: 12, semantic: 0.61, articleRank: 0.00031, seedOverlap: 2 },
              },
            ],
            poolSize: 40,
            truncated: false,
          },
        },
      },
    },
    400: { description: 'Invalid request' },
    401: { description: 'Missing or invalid bearer token' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
  },
  security: [{ bearerAuth: [] }],
})

export const getSearchDeveloperRoute = createRoute({
  method: 'get',
  path: '/search/developer',
  tags: ['Developer'],
  summary: 'Search the developer index',
  operationId: 'developerSearch',
  request: {
    query: z.object({
      query: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            required: true,
            description: 'Natural-language question or search phrase.',
            schema: { type: 'string', minLength: 1 },
          },
        }),
      k: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'k',
            in: 'query',
            required: false,
            description: 'Number of ranked results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 100, default: 10 },
          },
        }),
      types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['doc', 'issue', 'pull_request', 'readme'])),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'types',
            in: 'query',
            required: false,
            description:
              'Result kinds to search. Defaults to all four. Accepts a repeated parameter (`types=issue&types=pull_request`) or one comma-separated value (`types=issue,pull_request`).',
            schema: {
              type: 'array',
              items: { type: 'string', enum: ['doc', 'issue', 'pull_request', 'readme'] },
            },
          },
        }),
      repos: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'repos',
            in: 'query',
            required: false,
            description:
              'Repository slugs to scope the repository half of the index to, such as `firecrawl/firecrawl`. Applies to the `issue`, `pull_request`, and `readme` types only. Sent together with `sources`, the two halves are combined rather than intersected, so matching results come back from either. Returns 400 when no repository type is in `types`, reporting that `repos` cannot match any requested type and that you should add repository types or drop `repos`.',
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      sources: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().min(1).max(512)).max(20),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sources',
            in: 'query',
            required: false,
            description:
              'Documentation source ids to scope the documentation half to, at most 20. Applies to the `doc` type only. Not a fixed enum: ids reflect the documentation sites in the index and the set grows over time, so confirm an id resolves by sending it and reading the `sources` array on the response. Returns 400 with `sources cannot match any requested type; add doc or drop sources` when `doc` is not in `types`.',
            schema: {
              type: 'array',
              maxItems: 20,
              items: { type: 'string', minLength: 1, maxLength: 512 },
            },
          },
        }),
      skills: z
        .literal('only')
        .exactOptional()
        .openapi({
          param: {
            name: 'skills',
            in: 'query',
            required: false,
            description: 'Set to `only` to limit the search to indexed agent-skill files.',
            schema: { type: 'string', enum: ['only'] },
          },
        }),
      passages: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(5),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'passages',
            in: 'query',
            required: false,
            description: 'Matched passages to return per result.',
            schema: { type: 'integer', minimum: 1, maximum: 5, default: 1 },
          },
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'language',
            in: 'query',
            required: false,
            description:
              'Repository primary language, such as `Rust`. Applies to repository results only; sending it with no `sources` scope returns no `doc` results. See [how the repository filters scope a search](/api-reference/endpoint/developer-search#how-the-repository-filters-scope-a-search).',
            schema: { type: 'string', example: 'Rust' },
          },
          example: 'Rust',
        }),
      topic: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'topic',
            in: 'query',
            required: false,
            description:
              'Repository topic, such as `async`. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.',
            schema: { type: 'string', example: 'async' },
          },
          example: 'async',
        }),
      license: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'license',
            in: 'query',
            required: false,
            description:
              'Repository license, such as `MIT`. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.',
            schema: { type: 'string', example: 'MIT' },
          },
          example: 'MIT',
        }),
      min_stars: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'min_stars',
            in: 'query',
            required: false,
            description:
              'Lower bound on repository stars. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.',
            schema: { type: 'integer', minimum: 0 },
          },
        }),
      max_stars: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_stars',
            in: 'query',
            required: false,
            description:
              'Upper bound on repository stars. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.',
            schema: { type: 'integer', minimum: 0 },
          },
        }),
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'archived',
            in: 'query',
            required: false,
            description:
              'Include or exclude archived repositories. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.',
            schema: { type: 'boolean' },
          },
        }),
      fork: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'fork',
            in: 'query',
            required: false,
            description:
              'Include or exclude forks. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Ranked developer results with matched passages.',
      content: {
        'application/json': {
          schema: DeveloperSearchResponseSchema,
          example: {
            success: true,
            results: [
              {
                id: 'issue:firecrawl/firecrawl#1234',
                type: 'issue',
                url: 'https://github.com/firecrawl/firecrawl/issues/1234',
                title: 'Retries are not applied to 429 responses',
                passages: [
                  {
                    text: 'The client treats 429 as a terminal status, so the backoff never runs.',
                  },
                ],
              },
            ],
            coverage: { doc: 'ok', issue: 'ok', pull_request: 'ok', readme: 'ok' },
            reranked: true,
          },
        },
      },
    },
    400: {
      description: 'Invalid request, including a filter that cannot match any requested type',
    },
    401: { description: 'Missing or invalid bearer token' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
  },
  security: [{ bearerAuth: [] }],
})

export const postSearchDeveloperRoute = createRoute({
  method: 'post',
  path: '/search/developer',
  tags: ['Developer'],
  summary: 'Search the developer index',
  operationId: 'developerSearchPost',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              query: z.string().min(1),
              k: z.int().min(1).max(100).default(10).exactOptional(),
              types: z.array(z.enum(['doc', 'issue', 'pull_request', 'readme'])).exactOptional(),
              repos: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Repository slugs to scope the repository half of the index to. Applies to the `issue`, `pull_request`, and `readme` types only. Sent together with `sources`, the two halves are combined rather than intersected. Returns 400 when no repository type is in `types`, reporting that `repos` cannot match any requested type and that you should add repository types or drop `repos`.',
                }),
              sources: z
                .array(z.string().min(1).max(512))
                .max(20)
                .exactOptional()
                .openapi({
                  description:
                    'Documentation source ids to scope the documentation half to, at most 20. Applies to the `doc` type only. Not a fixed enum: ids reflect the documentation sites in the index and the set grows over time. Returns 400 with `sources cannot match any requested type; add doc or drop sources` when `doc` is not in `types`.',
                }),
              skills: z
                .literal('only')
                .exactOptional()
                .openapi({
                  description: 'Set to `only` to limit the search to indexed agent-skill files.',
                }),
              passages: z.int().min(1).max(5).default(1).exactOptional(),
              language: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Repository primary language, such as `Rust`. Applies to repository results only; sending it with no `sources` scope returns no `doc` results. See [how the repository filters scope a search](/api-reference/endpoint/developer-search#how-the-repository-filters-scope-a-search).',
                  example: 'Rust',
                }),
              topic: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Repository topic, such as `async`. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.',
                  example: 'async',
                }),
              license: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Repository license, such as `MIT`. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.',
                  example: 'MIT',
                }),
              min_stars: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({
                  description:
                    'Lower bound on repository stars. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.',
                }),
              max_stars: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({
                  description:
                    'Upper bound on repository stars. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.',
                }),
              archived: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Include or exclude archived repositories. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.',
                }),
              fork: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Include or exclude forks. Applies to repository results only; sending it with no `sources` scope returns no `doc` results.',
                }),
            })
            .openapi({ required: ['query'] }),
          example: { query: 'how do I configure retries', k: 10, types: ['issue', 'pull_request'] },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Ranked developer results with matched passages.',
      content: { 'application/json': { schema: DeveloperSearchResponseSchema } },
    },
    400: {
      description: 'Invalid request, including a filter that cannot match any requested type',
    },
    401: { description: 'Missing or invalid bearer token' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
  },
  security: [{ bearerAuth: [] }],
})

export const getSearchGovRoute = createRoute({
  method: 'get',
  path: '/search/gov',
  tags: ['Government'],
  summary: 'Search the Government Index',
  operationId: 'govSearch',
  request: {
    query: z.object({
      query: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            required: true,
            description: 'Natural-language question or search phrase.',
            schema: { type: 'string', minLength: 1 },
          },
        }),
      k: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'k',
            in: 'query',
            required: false,
            description: 'Number of results to return.',
            schema: { type: 'integer', minimum: 1, maximum: 100, default: 10 },
          },
        }),
      jurisdiction: z
        .string()
        .regex(/^us(-[a-zA-Z]{2})?$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'jurisdiction',
            in: 'query',
            required: false,
            description:
              'Keep only pages of one jurisdiction: `us` for federal, or `us-` plus a two-letter state or territory code, such as `us-ca` or `us-dc`.',
            schema: { type: 'string', pattern: '^us(-[a-zA-Z]{2})?$' },
          },
        }),
      court: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'court',
            in: 'query',
            required: false,
            description:
              'Keep only pages labeled for one court, by CourtListener court id, such as `scotus`, `ca9` or `nysd`.',
            schema: { type: 'string', minLength: 1 },
          },
        }),
      courtType: z
        .enum([
          'federal-supreme',
          'federal-appellate',
          'federal-district',
          'federal-bankruptcy',
          'federal-special',
          'military',
          'state-supreme',
          'state-appellate',
          'state-trial',
          'state-special',
          'state-attorney-general',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'courtType',
            in: 'query',
            required: false,
            description:
              'Keep only pages from one type of court: `federal-supreme`, `federal-appellate`, `federal-district`, `federal-bankruptcy`, `federal-special`, `military`, `state-supreme`, `state-appellate`, `state-trial`, `state-special`, `state-attorney-general`.',
            schema: {
              type: 'string',
              enum: [
                'federal-supreme',
                'federal-appellate',
                'federal-district',
                'federal-bankruptcy',
                'federal-special',
                'military',
                'state-supreme',
                'state-appellate',
                'state-trial',
                'state-special',
                'state-attorney-general',
              ],
            },
          },
        }),
      cites: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'cites',
            in: 'query',
            required: false,
            description:
              'Keep only pages that cite one law or case, as a printed citation such as `42 U.S.C. § 1983` or `5 U.S. 137`, or a citation id such as `us:usc:42:1983`.',
            schema: { type: 'string', minLength: 1 },
          },
        }),
      domain: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            required: false,
            description: 'Keep only pages from one site, such as `irs.gov`.',
            schema: { type: 'string', minLength: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Ranked Government Index results in the `web` group.',
      content: {
        'application/json': {
          schema: GovSearchResponseSchema,
          example: {
            success: true,
            data: {
              web: [
                {
                  url: 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-101',
                  title: '21 CFR Part 101 -- Food Labeling',
                  description:
                    'Nutrition labeling of food shall be provided for all products intended for human consumption...',
                  position: 1,
                },
              ],
            },
          },
        },
      },
    },
    400: { description: 'Invalid request, including an unknown field' },
    401: { description: 'Invalid bearer token' },
    429: { description: 'Rate limit exceeded' },
    502: { description: 'Upstream error' },
    504: { description: 'Upstream timeout' },
  },
  security: [{ bearerAuth: [] }],
})

export const postSearchGovRoute = createRoute({
  method: 'post',
  path: '/search/gov',
  tags: ['Government'],
  summary: 'Search the Government Index',
  operationId: 'govSearchPost',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              query: z
                .string()
                .min(1)
                .openapi({ description: 'Natural-language question or search phrase.' }),
              k: z
                .int()
                .min(1)
                .max(100)
                .default(10)
                .exactOptional()
                .openapi({ description: 'Number of results to return.' }),
              jurisdiction: z
                .string()
                .regex(/^us(-[a-zA-Z]{2})?$/)
                .exactOptional()
                .openapi({
                  description:
                    'Keep only pages of one jurisdiction: `us` for federal, or `us-` plus a two-letter state or territory code, such as `us-ca` or `us-dc`.',
                }),
              court: z
                .string()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'Keep only pages labeled for one court, by CourtListener court id, such as `scotus`, `ca9` or `nysd`.',
                }),
              courtType: z
                .enum([
                  'federal-supreme',
                  'federal-appellate',
                  'federal-district',
                  'federal-bankruptcy',
                  'federal-special',
                  'military',
                  'state-supreme',
                  'state-appellate',
                  'state-trial',
                  'state-special',
                  'state-attorney-general',
                ])
                .exactOptional()
                .openapi({
                  description:
                    'Keep only pages from one type of court: `federal-supreme`, `federal-appellate`, `federal-district`, `federal-bankruptcy`, `federal-special`, `military`, `state-supreme`, `state-appellate`, `state-trial`, `state-special`, `state-attorney-general`.',
                }),
              cites: z
                .string()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'Keep only pages that cite one law or case, as a printed citation such as `42 U.S.C. § 1983` or `5 U.S. 137`, or a citation id such as `us:usc:42:1983`.',
                }),
              domain: z
                .string()
                .min(1)
                .exactOptional()
                .openapi({ description: 'Keep only pages from one site, such as `irs.gov`.' }),
            })
            .openapi({ required: ['query'] }),
          example: { query: 'food labeling requirements for allergens', k: 10 },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Ranked Government Index results in the `web` group.',
      content: { 'application/json': { schema: GovSearchResponseSchema } },
    },
    400: { description: 'Invalid request, including an unknown field' },
    401: { description: 'Invalid bearer token' },
    429: { description: 'Rate limit exceeded' },
    502: { description: 'Upstream error' },
    504: { description: 'Upstream timeout' },
  },
  security: [{ bearerAuth: [] }],
})

export const postFeedbackRoute = createRoute({
  method: 'post',
  path: '/feedback',
  tags: ['Feedback'],
  summary: 'Submit feedback for a v2 job',
  operationId: 'submitEndpointFeedback',
  request: {
    body: {
      content: { 'application/json': { schema: EndpointFeedbackRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Feedback recorded',
      content: { 'application/json': { schema: FeedbackResponseSchema } },
    },
    400: {
      description: 'Invalid request body',
      content: { 'application/json': { schema: FeedbackErrorResponseSchema } },
    },
    403: {
      description: 'Feedback is not available for this team',
      content: { 'application/json': { schema: FeedbackErrorResponseSchema } },
    },
    404: {
      description: 'Job not found for this team',
      content: { 'application/json': { schema: FeedbackErrorResponseSchema } },
    },
    409: {
      description: 'Feedback cannot be recorded for this job',
      content: { 'application/json': { schema: FeedbackErrorResponseSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/json': { schema: FeedbackErrorResponseSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getTeamThreatProtectionRoute = createRoute({
  method: 'get',
  path: '/team/threat-protection',
  tags: ['Threat Protection'],
  summary: "Get the team's threat protection policy",
  operationId: 'getThreatProtection',
  responses: {
    200: {
      description: "Effective threat protection policy for the team's organization.",
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: true }),
              data: z
                .object({
                  mode: z
                    .enum(['off', 'normal'])
                    .exactOptional()
                    .openapi({
                      description:
                        'Threat protection mode. `off` disables checks; `normal` checks URLs against Google Web Risk (+2 credits per URL scanned).',
                      example: 'normal',
                    }),
                  riskScoreThreshold: z
                    .int()
                    .min(0)
                    .max(100)
                    .exactOptional()
                    .openapi({
                      description:
                        'Normalized score (0-100) at or above which a classifier verdict is blocked. Lower is stricter.',
                      example: 75,
                    }),
                  blacklist: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        'Exact domains or globs (e.g. `*.example.com`) always blocked, without a classifier call.',
                      example: ['*.risky.example'],
                    }),
                  whitelist: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        'Exact domains or globs always allowed. Wins over every other rule.',
                      example: ['*.trusted.example'],
                    }),
                  blockedTlds: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        'Top-level domains to block outright, lowercase without a leading dot.',
                      example: ['zip'],
                    }),
                  failurePolicy: z
                    .enum(['open', 'closed'])
                    .exactOptional()
                    .openapi({
                      description:
                        'Behavior when the classifier is unreachable: `closed` blocks (default), `open` allows.',
                      example: 'closed',
                    }),
                  allowRequestOverrides: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether individual requests may pass a `threatProtection` object. When false, such requests are rejected with 403.',
                      example: true,
                    }),
                  configured: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the organization has saved a policy (vs. serving defaults).',
                      example: true,
                    }),
                  updatedAt: z.iso.datetime({ offset: true }).nullable().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    403: {
      description:
        'Threat protection is not enabled for this team, or a request override was sent while overrides are disabled.',
    },
  },
  security: [{ bearerAuth: [] }],
})

export const putTeamThreatProtectionRoute = createRoute({
  method: 'put',
  path: '/team/threat-protection',
  tags: ['Threat Protection'],
  summary: "Update the team's threat protection policy",
  description:
    'Full-document update. Unspecified fields reset to defaults. Enterprise feature, team admins only.',
  operationId: 'updateThreatProtection',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              mode: z
                .enum(['off', 'normal'])
                .openapi({
                  description:
                    'Threat protection mode. `off` disables checks; `normal` checks URLs against Google Web Risk (+2 credits per URL scanned).',
                  example: 'normal',
                }),
              riskScoreThreshold: z
                .int()
                .min(0)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'Normalized score (0-100) at or above which a classifier verdict is blocked. Lower is stricter.',
                  example: 75,
                }),
              blacklist: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Exact domains or globs (e.g. `*.example.com`) always blocked, without a classifier call.',
                  example: ['*.risky.example'],
                }),
              whitelist: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'Exact domains or globs always allowed. Wins over every other rule.',
                  example: ['*.trusted.example'],
                }),
              blockedTlds: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Top-level domains to block outright, lowercase without a leading dot.',
                  example: ['zip'],
                }),
              failurePolicy: z
                .enum(['open', 'closed'])
                .exactOptional()
                .openapi({
                  description:
                    'Behavior when the classifier is unreachable: `closed` blocks (default), `open` allows.',
                  example: 'closed',
                }),
              allowRequestOverrides: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether individual requests may pass a `threatProtection` object. When false, such requests are rejected with 403.',
                  example: true,
                }),
            })
            .openapi({ required: ['mode'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: "Effective threat protection policy for the team's organization.",
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: true }),
              data: z
                .object({
                  mode: z
                    .enum(['off', 'normal'])
                    .exactOptional()
                    .openapi({
                      description:
                        'Threat protection mode. `off` disables checks; `normal` checks URLs against Google Web Risk (+2 credits per URL scanned).',
                      example: 'normal',
                    }),
                  riskScoreThreshold: z
                    .int()
                    .min(0)
                    .max(100)
                    .exactOptional()
                    .openapi({
                      description:
                        'Normalized score (0-100) at or above which a classifier verdict is blocked. Lower is stricter.',
                      example: 75,
                    }),
                  blacklist: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        'Exact domains or globs (e.g. `*.example.com`) always blocked, without a classifier call.',
                      example: ['*.risky.example'],
                    }),
                  whitelist: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        'Exact domains or globs always allowed. Wins over every other rule.',
                      example: ['*.trusted.example'],
                    }),
                  blockedTlds: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        'Top-level domains to block outright, lowercase without a leading dot.',
                      example: ['zip'],
                    }),
                  failurePolicy: z
                    .enum(['open', 'closed'])
                    .exactOptional()
                    .openapi({
                      description:
                        'Behavior when the classifier is unreachable: `closed` blocks (default), `open` allows.',
                      example: 'closed',
                    }),
                  allowRequestOverrides: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether individual requests may pass a `threatProtection` object. When false, such requests are rejected with 403.',
                      example: true,
                    }),
                  configured: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the organization has saved a policy (vs. serving defaults).',
                      example: true,
                    }),
                  updatedAt: z.iso.datetime({ offset: true }).nullable().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Invalid policy document.' },
    403: {
      description:
        'Threat protection is not enabled for this team, or a request override was sent while overrides are disabled.',
    },
  },
  security: [{ bearerAuth: [] }],
})
