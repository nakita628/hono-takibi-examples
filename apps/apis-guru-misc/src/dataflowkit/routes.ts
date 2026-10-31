import { createRoute, z } from '@hono/zod-openapi'

type PaginatorType = { nextPageSelector?: string; pageNum?: number }

type ActionType =
  | { ignoreIfNotPresent?: boolean; selector?: string; value?: string }
  | { ignoreIfNotPresent?: boolean; selector?: string; value?: string }
  | { ignoreIfNotPresent?: boolean; selector?: string; skipLastIteration?: boolean }
  | { ignoreIfNotPresent?: boolean; selector?: string; skipLastIteration?: boolean }
  | { ignoreIfNotPresent?: boolean; selector?: string; skipLastIteration?: boolean }
  | { selector?: string }
  | { selector?: string }
  | { selector?: string }
  | { waitDelay?: string }
  | { script?: string }
  | { actions?: ActionType[]; times?: number }
  | { skipLastIteration?: boolean }
  | {
      scrollByPixels?: number
      scrollingElementSelector?: string
      selector?: string
      times?: number
    }

const ActionSchema: z.ZodType<ActionType> = z
  .lazy(() =>
    z
      .union([
        z
          .object({
            ignoreIfNotPresent: z.boolean().exactOptional().openapi({ example: false }),
            selector: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Must be a valid CSS Selector',
                example: '#search-form-editbox',
              }),
            value: z
              .string()
              .exactOptional()
              .openapi({ description: 'The value to input.', example: 'web scraper' }),
          })
          .openapi({
            description:
              'Sets the value of an input field as if you had typed it in. You can also set the value of combo boxes, checkboxes, etc., using this action. In these cases, the value must be the value of the selected option, not visible text.',
            title: 'input',
            required: [],
          }),
        z
          .object({
            ignoreIfNotPresent: z.boolean().exactOptional().openapi({ example: false }),
            selector: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Must be a valid CSS Selector',
                example: '#search-form-editbox',
              }),
            value: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Sequence of keys to send. Keys can include keystrokes such as ALT+A, ENTER, BACKSPACE, etc.',
                example: 'web scraper',
              }),
          })
          .openapi({
            description:
              "The Send Keys action simulates real user input of key by key into a given string. It mimics real user behavior, such as the inability to type into invisible or read-only DOM elements. This action is useful for cases where explicit keystroke events are required, like auto-completing combo boxes. Unlike a similar 'input' action, which forces a specified value directly into an input selector, this action does not overwrite existing content.",
            title: 'sendKeys',
            required: [],
          }),
        z
          .object({
            ignoreIfNotPresent: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'This optional parameter is useful when the target element occasionally may not be present in the DOM.',
                example: false,
              }),
            selector: z
              .string()
              .exactOptional()
              .openapi({ description: 'Must be a valid CSS Selector', example: '.click-me' }),
            skipLastIteration: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'It is only used for click action inside a loop only. Skips the last iteration.',
                example: true,
              }),
          })
          .openapi({
            description:
              'Clicks on a target element (such as a link, button, checkbox, or radio button) with specified CSS Selector.',
            title: 'click',
            required: [],
          }),
        z
          .object({
            ignoreIfNotPresent: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'This optional parameter is useful when the target element occasionally may not be present in the DOM.',
                example: false,
              }),
            selector: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Must be a valid CSS Selector',
                example: '.double-click-me',
              }),
            skipLastIteration: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'It is only used for click action inside a loop only. Skips the last iteration.',
                example: true,
              }),
          })
          .openapi({
            description:
              'Double clicks on a target element (such as a link, button, checkbox, or radio button) with specified CSS Selector.',
            title: 'doubleClick',
            required: [],
          }),
        z
          .object({
            ignoreIfNotPresent: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'This optional parameter is useful when the target element occasionally may not be present in the DOM.',
                example: false,
              }),
            selector: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Must be a valid CSS Selector for the target element.',
                example: '.js-click-me',
              }),
            skipLastIteration: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'It is only used for click action inside a loop only. Skips the last iteration.',
                example: true,
              }),
          })
          .openapi({
            description:
              'Click on an element with the specified CSS Selector. JS Click internally invokes a script (Javascript) that clicks the element.',
            title: 'jsclick',
            required: [],
          }),
        z
          .object({
            selector: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Must be an any valid CSS Selector inside the parent form to submit.',
                example: '.some-element-inside-form',
              }),
          })
          .openapi({
            description:
              'Submit the specified form. This action is useful for forms without explicit submit buttons, such as single-input Search forms.',
            title: 'submit',
            required: [],
          }),
        z
          .object({
            selector: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Must be a valid CSS Selector for the target element.',
                example: ':root',
              }),
          })
          .openapi({
            description: 'Wait for the target element to become visible on the page.',
            title: 'waitVisible',
            required: [],
          }),
        z
          .object({
            selector: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Must be a valid CSS Selector for the target element.',
                example: '#some-element',
              }),
          })
          .openapi({
            description: 'Wait for the target element to become invisible on the page.',
            title: 'waitNotVisible',
            required: [],
          }),
        z
          .object({
            waitDelay: z
              .string()
              .exactOptional()
              .openapi({ description: 'Wait time (in milliseconds).', example: '5000' }),
          })
          .openapi({
            description: 'Wait for the specified amount of time.',
            title: 'pause',
            required: [],
          }),
        z
          .object({
            script: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The JavaScript snippet to run',
                example: 'console.log("It works!")',
              }),
          })
          .openapi({
            description: "Executes the Javascript passes as 'script' parameter",
            title: 'execute',
            required: [],
          }),
        z
          .object({
            actions: z
              .array(ActionSchema)
              .default([])
              .exactOptional()
              .openapi({
                description: 'list of actions combined in the loop are executed step-by-step',
              }),
            times: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  "the number of times to execute the wrapped actions within the 'loop .. times' construction.",
                example: 5,
              }),
          })
          .openapi({
            description:
              'Loop action combines a set of actions and executes it as many times as specified in the "times" parameter.',
            title: 'loop .. times',
            required: [],
          }),
        z
          .object({
            skipLastIteration: z
              .boolean()
              .exactOptional()
              .openapi({
                description: 'It is only used for loop actions only. Skips the last iteration.',
                example: true,
              }),
          })
          .openapi({
            description:
              'Sometimes it is necessary to retrieve the HTML content of a web page multiple times in a single request. This action is for that.',
            title: 'getcontent',
            required: [],
          }),
        z
          .object({
            scrollByPixels: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  "Scrolls a web page by the number of pixels specified by 'scrollByPixels' parameter.",
                example: 650,
              }),
            scrollingElementSelector: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Optionally specify here a valid CSS Selector of scrolling element.',
                example: '#scroll-panel',
              }),
            selector: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "Some websites require clicking 'More' button while scrolling a page. Put here 'More' button valid CSS Selector.",
                example: '.more-button',
              }),
            times: z
              .int()
              .exactOptional()
              .openapi({
                description: 'The number of times to scroll down a web page.',
                example: 3,
              }),
          })
          .openapi({
            description:
              "Scroll a page down to load more content, simulating user interaction with infinite scrolled pages. Or specify the element's CSS Selector to click for loading more content.",
            title: 'scroll',
            required: [],
          }),
      ])
      .openapi({ title: 'Action' }),
  )
  .openapi('Action')

const InitialCookieSchema = z
  .object({
    domain: z.string().exactOptional().openapi({ example: '.twitter.com' }),
    expirationDate: z.number().exactOptional().openapi({ example: 1762900726.409761 }),
    hostOnly: z.boolean().exactOptional().openapi({ example: false }),
    httpOnly: z.boolean().exactOptional().openapi({ example: false }),
    id: z.number().exactOptional().openapi({ example: 1 }),
    name: z.string().exactOptional().openapi({ example: 'auth_token' }),
    path: z.string().exactOptional().openapi({ example: '/' }),
    sameSite: z.enum(['unspecified', 'strict', 'lax', 'no_restriction']).exactOptional(),
    secure: z.boolean().exactOptional().openapi({ example: true }),
    session: z.boolean().exactOptional().openapi({ example: true }),
    storeID: z.string().exactOptional().openapi({ example: '1' }),
    value: z.string().exactOptional().openapi({ example: '46fd9fed1ab8b0b0e231ac3f' }),
  })
  .openapi({
    description:
      'InitialCookie structure keep cookies that optionally can be passed to the new fetcher crawl a website that requires a login. Generate Cookies array with EditThisCookie chrome extension.',
    title: 'initialCookie',
    required: [],
  })
  .openapi('InitialCookie')

type FetchrequestType = {
  actions?: z.infer<typeof ActionSchema>[]
  ignoreHTTPStatusErrCodes?: boolean
  initialCookies?: z.infer<typeof InitialCookieSchema>[]
  output?: 'buffer' | 'file'
  proxy?: string
  type: 'base' | 'chrome'
  url: string
  waitDelay?: number
}

const ParserequestSchema: z.ZodType<ParserequestType> = z
  .lazy(() =>
    z
      .object({
        commonParent: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Specifies common ancestor block for a set of fields used to extract data from a web page. _(CSS Selector)_',
            example: '.common-block',
          }),
        fields: z
          .array(FieldSchema)
          .openapi({
            description:
              'Define a  set of fields used to extract data from a web page. A Field represents a given chunk of extracted data from every block on each page.\n',
          }),
        format: z
          .enum(['csv', 'json', 'jsonl', 'excel', 'xml'])
          .openapi({
            description:
              'Extracted data is returned either in CSV, MS Excel, JSON, JSON(Lines) or XML format.',
            title: 'Format',
          }),
        name: z.string().openapi({ description: 'Collection name.' }),
        paginator: PaginatorSchema.exactOptional(),
        path: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              'Path is a special parameter specifying navigation pages only. It collects information from detailed pages. No results from the current page return. Defaults to false.',
            title: 'Path',
          }),
        request: FetchrequestSchema.exactOptional(),
      })
      .openapi({
        example: {
          fields: [
            {
              attrs: ['text'],
              filters: [{ name: 'trim' }],
              name: 'Number',
              selector: '.badge-primary',
              type: 1,
            },
            {
              attrs: ['href', 'text'],
              filters: [{ name: 'trim' }],
              name: 'Name',
              selector: '#cards a',
              type: 2,
            },
            {
              attrs: ['src', 'alt'],
              filters: [{ name: 'trim' }],
              name: 'Picture',
              selector: '.card-img-top',
              type: 0,
            },
          ],
          format: 'json',
          name: 'test.dataflowkit.com',
          paginator: { nextPageSelector: '.page-item:nth-child(2) .page-link', pageNum: 2 },
          path: false,
          request: { type: 'chrome', url: 'https://test.dataflowkit.com/persons/page-0' },
        },
        required: ['fields', 'format', 'name', 'proxy', 'type', 'url'],
        title: 'Parse request',
      }),
  )
  .openapi('Parserequest')

type FieldType = {
  attrs: ('text' | 'href' | 'src' | 'alt')[]
  details?: z.infer<typeof ParserequestSchema>
  filters?: (
    | { name?: 'trim' | 'normal' | 'uppercase' | 'lowercase' | 'capitalize' | 'concatinate' }
    | { name?: string; param?: string }
  )[]
  name: string
  selector: string
  type: 0 | 1 | 2
}

const FieldSchema: z.ZodType<FieldType> = z
  .lazy(() =>
    z
      .object({
        attrs: z
          .array(z.enum(['text', 'href', 'src', 'alt']))
          .openapi({
            description:
              'A set of attributes to extract from a Field. Find more information about attributes',
          }),
        details: ParserequestSchema.exactOptional().openapi({
          description:
            'Details themself represent independent Parse request that extracts data from linked pages.',
        }),
        filters: z
          .array(
            z.union([
              z
                .object({
                  name: z
                    .enum(['trim', 'normal', 'uppercase', 'lowercase', 'capitalize', 'concatinate'])
                    .exactOptional(),
                })
                .openapi({ required: [] }),
              z
                .object({
                  name: z.string().exactOptional().openapi({ example: 'regex' }),
                  param: z.string().exactOptional().openapi({ example: '[\\\\d.]+' }),
                })
                .openapi({ required: [] }),
            ]),
          )
          .exactOptional()
          .openapi({
            description: 'Filters are used to pre-processing of text data when extracting.',
          }),
        name: z.string().openapi({ description: 'Field name is used to aggregate results.' }),
        selector: z
          .string()
          .openapi({
            description:
              'Selector represents a CSS selector for data extraction within the given block.',
            example: '#cards a',
          }),
        type: z
          .union([z.literal(0), z.literal(1), z.literal(2)])
          .openapi({ description: 'Selector type. ( 0 - image, 1 - text, 2 - link)' }),
      })
      .openapi({ required: ['attrs', 'name', 'selector', 'type'], title: 'Field' }),
  )
  .openapi('Field')

const PaginatorSchema: z.ZodType<PaginatorType> = z
  .object({
    nextPageSelector: z.string().exactOptional().openapi({ example: '.page-link' }),
    pageNum: z.int().exactOptional().openapi({ example: 10 }),
  })
  .openapi({
    description:
      "Specify _Next link_ paginator on pages containing a link pointing to the next page. The next page link is extracted from a document by querying href attribute of a given element's CSS selector.",
    required: [],
  })
  .openapi('Paginator')

const FetchrequestSchema: z.ZodType<FetchrequestType> = z
  .object({
    actions: z
      .array(ActionSchema)
      .default([])
      .exactOptional()
      .openapi({
        description:
          'Use actions to automate manual workflows while rendering web pages. They simulate real-world human interaction with pages. _(Chrome fetcher type only)_',
      }),
    ignoreHTTPStatusErrCodes: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The HTTP 200 OK success status response code indicates that the request has succeeded. Sometimes a server returns normal HTML content even with an erroneous Non-200 HTTP response status code. The IgnoreHTTPStatusCode option is useful when you need to force the return of HTML content. Defaults to "false."',
      }),
    initialCookies: z
      .array(InitialCookieSchema)
      .default([])
      .exactOptional()
      .openapi({
        description:
          'The "Initial Cookies" option is useful for crawling websites that require a login. The simplest solution to get an array of cookies for specific websites is to use a web browser "EditThisCookie" extension. Copy a cookie array with "EditThisCookie" and paste it into the "Initial cookie" field.',
      }),
    output: z
      .enum(['buffer', 'file'])
      .default('buffer')
      .exactOptional()
      .openapi({
        description:
          'If set to _file_, the content of downloaded HTML is uploaded to Dataflow Kit Storage first. Then the link to this file is returned. Overwise, downloaded content is returned in the response body.',
      }),
    proxy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specify proxy by adding [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets.',
        example: 'country-sk',
      }),
    type: z
      .enum(['base', 'chrome'])
      .openapi({
        description:
          'If set to `base`, the Base fetcher is used for downloading web page content. Use `chrome` for fetching content with a Headless chrome browser. If omitted `base` fetcher is used by default.',
      }),
    url: z.string().openapi({ description: 'Specify URL to download.' }),
    waitDelay: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Specify a wait delay (in seconds). This may be useful if certain elements of the web site need to be rendered after the initial page load. _(Chrome fetcher type only)_',
      }),
  })
  .openapi({
    example: {
      actions: [{ waitFor: { waitForSelector: ':root' } }],
      output: 'buffer',
      proxy: 'country-any',
      type: 'base',
      url: 'https://ipapi.co/json/',
    },
    required: ['type', 'url'],
    title: 'Fetch request',
  })
  .openapi('Fetchrequest')

type ParserequestType = {
  commonParent?: string
  fields: z.infer<typeof FieldSchema>[]
  format: 'csv' | 'json' | 'jsonl' | 'excel' | 'xml'
  name: string
  paginator?: z.infer<typeof PaginatorSchema>
  path?: boolean
  request?: z.infer<typeof FetchrequestSchema>
}

const SerprequestSchema = z
  .object({
    fields: z
      .array(FieldSchema)
      .exactOptional()
      .openapi({
        description:
          'Specify CSS selectors (patterns) used to gather data from Search Engine Result Pages.\n\nReady-to-use payloads for collecting search results from the most popular Search Engines are available. These payloads are customizable, though.\n',
      }),
    format: z
      .enum(['csv', 'json', 'jsonl', 'excel', 'xml'])
      .openapi({
        description:
          'Extracted data is returned either in CSV, MS Excel, JSON, JSON(Lines) or XML format.',
        title: 'Format',
      }),
    name: z.string().openapi({ description: 'Collection name.' }),
    pageNum: z
      .int()
      .default(1)
      .exactOptional()
      .openapi({ description: 'Specify number of pages to crawl.' }),
    proxy: z
      .string()
      .openapi({
        description:
          'Always specify proxy for sending SERP requests. Add choosen [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets.',
        example: 'country-any',
      }),
    type: z
      .string()
      .openapi({
        description:
          'For SERP requests you should _always_ use `chrome` type to fetch content with a Headless chrome browser',
        example: 'chrome',
      }),
    url: z
      .string()
      .openapi({
        description:
          'url holds the link to a Search Engine to use, and other optional parameters like languages or country.',
      }),
  })
  .openapi({
    example: {
      commonParent: 'div[id].result',
      fields: [
        {
          attrs: ['href', 'text'],
          filters: [{ name: 'trim' }],
          name: 'link',
          selector: '.result__a',
          type: 2,
        },
        {
          attrs: ['text'],
          filters: [{ name: 'trim' }],
          name: 'description',
          selector: '.js-result-snippet',
          type: 1,
        },
      ],
      format: 'json',
      name: 'duckduckgo',
      request: {
        proxy: 'country-any',
        type: 'chrome',
        url: 'https://duckduckgo.com/?q=Dataflow+kit&ia=web',
      },
    },
    required: ['format', 'name', 'proxy', 'type', 'url'],
    title: 'SERP request',
  })
  .openapi('Serprequest')

const Url2pdfrequestSchema = z
  .object({
    actions: z
      .array(ActionSchema)
      .default([])
      .exactOptional()
      .openapi({
        description:
          'Use actions to automate manual workflows while rendering web pages. They simulate real-world human interaction with pages.',
      }),
    ignoreHTTPStatusErrCodes: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The HTTP 200 OK success status response code indicates that the request has succeeded. Sometimes a server returns normal HTML content even with an erroneous Non-200 HTTP response status code. The IgnoreHTTPStatusCode option is useful when you need to force the return of HTML content. Defaults to "false."',
      }),
    initialCookies: z
      .array(InitialCookieSchema)
      .default([])
      .exactOptional()
      .openapi({
        description:
          'The "Initial Cookies" option is useful for crawling websites that require a login. The simplest solution to get an array of cookies for specific websites is to use a web browser "EditThisCookie" extension. Copy a cookie array with "EditThisCookie" and paste it into the "Initial cookie" field.',
      }),
    landscape: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Paper orientation. Parameter landscape = false means portrait orientation. Set landscape to true for landscape page oriantation.',
      }),
    marginBottom: z
      .number()
      .default(0.4)
      .exactOptional()
      .openapi({ description: 'Bottom Margin of the PDF (in inches)' }),
    marginLeft: z
      .number()
      .default(0.4)
      .exactOptional()
      .openapi({ description: 'Left Margin of the PDF (in inches)' }),
    marginRight: z
      .number()
      .default(0.4)
      .exactOptional()
      .openapi({ description: 'Right Margin of the PDF (in inches)' }),
    marginTop: z
      .number()
      .default(0.4)
      .exactOptional()
      .openapi({ description: 'Top Margin of the PDF (in inches)' }),
    output: z
      .enum(['buffer', 'file'])
      .default('buffer')
      .exactOptional()
      .openapi({
        description:
          'If set to _file_, the resulted PDF is uploaded to Dataflow Kit Storage first. Then the link to this file is returned. Overwise, PDF content is returned in the response body.',
      }),
    pageRanges: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specify page ranges to convert. Defaults to the empty value, which means convert all pages.',
        example: '1-4, 6, 10-12',
      }),
    paperSize: z
      .enum(['A3', 'A4', 'A5', 'A6', 'Letter', 'Legal', 'Tabloid'])
      .default('A4')
      .exactOptional()
      .openapi({ description: 'Page size parameter consists of the most popular page formats.' }),
    printBackground: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Print background graphics in the PDF.' }),
    printHeaderFooter: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'printHeaderFooter  parameter consists of the date, name of the web page, the page URL, and how many pages the document you are printing.',
      }),
    proxy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specify proxy by adding [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets.',
        example: 'country-any',
      }),
    scale: z
      .number()
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'By default, PDF document content is generated according to dimensions of the original web page content. Using the `scale` parameter, you can specify a custom zoom factor from 0.1 to 5.0 of the webpage rendering.',
      }),
    url: z
      .string()
      .openapi({
        description:
          'The full URL address (including HTTP/HTTPS) of a web page that you want to save as PDF',
      }),
    waitDelay: z
      .number()
      .default(0.5)
      .exactOptional()
      .openapi({
        description:
          'Specify a wait delay (in seconds). This may be useful if certain elements of the web site need to be rendered after the initial page load.',
      }),
  })
  .openapi({
    example: {
      landscape: false,
      marginBottom: 0.4,
      marginLeft: 0.4,
      marginRight: 0.4,
      marginTop: 0.4,
      pageRanges: '',
      paperSize: 'A4',
      printBackground: false,
      printHeaderFooter: false,
      scale: 1,
      url: 'https://dataflowkit.com',
      waitDelay: 0.5,
    },
    required: ['url'],
    title: 'URL to PDF request',
  })
  .openapi('Url2pdfrequest')

const Url2screenshotrequestSchema = z
  .object({
    actions: z
      .array(ActionSchema)
      .default([])
      .exactOptional()
      .openapi({
        description:
          'Use actions to automate manual workflows while rendering web pages. They simulate real-world human interaction with pages.',
      }),
    clipSelector: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Captures a screenshot of specified CSS element on a web page.',
        example: '#css-element',
      }),
    format: z
      .enum(['png', 'jpeg'])
      .default('png')
      .exactOptional()
      .openapi({ description: 'Sets the Format of output image' }),
    fullPage: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'takes a screenshot of a full web page. It ignores offsetX, offsety, width and height argument values.',
      }),
    height: z
      .int()
      .default(600)
      .exactOptional()
      .openapi({ description: 'Rectangle height in device independent pixels (dip).' }),
    ignoreHTTPStatusErrCodes: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The HTTP 200 OK success status response code indicates that the request has succeeded. Sometimes a server returns normal HTML content even with an erroneous Non-200 HTTP response status code. The IgnoreHTTPStatusCode option is useful when you need to force the return of HTML content. Defaults to "false."',
      }),
    initialCookies: z
      .array(InitialCookieSchema)
      .default([])
      .exactOptional()
      .openapi({
        description:
          'The "Initial Cookies" option is useful for crawling websites that require a login. The simplest solution to get an array of cookies for specific websites is to use a web browser "EditThisCookie" extension. Copy a cookie array with "EditThisCookie" and paste it into the "Initial cookie" field.',
      }),
    offsetx: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({ description: 'X offset in device independent pixels (dip).' }),
    offsety: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({ description: 'Y offset in device independent pixels (dip).' }),
    output: z
      .enum(['buffer', 'file'])
      .default('buffer')
      .exactOptional()
      .openapi({
        description:
          'If set to _file_, the resulted screenshot is uploaded to Dataflow Kit Storage first. Then the link to this file is returned. Overwise, web site screenshot is returned in the response body.',
      }),
    printBackground: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Print background graphics in the PDF.' }),
    proxy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specify proxy by adding [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets.',
        example: 'country-any',
      }),
    quality: z
      .int()
      .default(80)
      .exactOptional()
      .openapi({
        description:
          'Sets the Quality of output image. Compression quality from range [0..100] (jpeg only).',
      }),
    scale: z
      .number()
      .default(1)
      .exactOptional()
      .openapi({ description: 'Image scale factor. range [0.1 .. 3]' }),
    url: z
      .string()
      .openapi({
        description:
          'The full URL address (including HTTP/HTTPS) of a web page that you want to capture',
      }),
    waitDelay: z
      .number()
      .default(0.5)
      .exactOptional()
      .openapi({
        description:
          'Specify a wait delay (in seconds). This may be useful if certain elements of the web site need to be rendered after the initial page load.',
      }),
    width: z
      .int()
      .default(800)
      .exactOptional()
      .openapi({ description: 'Rectangle width in device independent pixels (dip).' }),
  })
  .openapi({
    example: {
      format: 'jpeg',
      height: 1080,
      quality: 80,
      scale: 1,
      url: 'https://dataflowkit.com',
      waitDelay: 0.5,
      width: 1920,
    },
    required: ['url'],
    title: 'URL to Screenshot request',
  })
  .openapi('Url2screenshotrequest')

const BadRequestResponse = { description: 'Bad Request. Invalid payload specified.', content: {} }

const InternalServerErrorResponse = {
  description:
    "Internal Server Error is a very general HTTP status code that means something has gone wrong on the web site's server.",
  content: {},
}

const NotFoundResponse = { description: 'The specified resource was not found', content: {} }

const UnauthorizedResponse = {
  description: 'Unauthorized. `api_key` parameter is missed or incorrect',
  content: {},
}

const ApiKeyAuthSecurityScheme = { in: 'query', name: 'api_key', type: 'apiKey' }

export const postConvertUrlPdfRoute = createRoute({
  method: 'post',
  path: '/convert/url/pdf',
  tags: ['url-to-pdf'],
  summary: 'Save web page as PDF',
  description:
    'Automate URL to PDF Conversion right in your application.\n\nSpecify request parameters like URL, Proxy, and actions to render web pages to PDF using Headless Chrome.\n\nGet resulted PDF even from websites blocked in your area for some reason utilizing our worldwide pool of proxies.\n\nSimulate real-world human interaction with the page. For example, before saving a web page to PDF, you may need to scroll it.\n\nGenerate ready-to-run code for your favorite language at [https://dataflowkit.com/url-to-pdf](https://dataflowkit.com/url-to-pdf)',
  operationId: 'url-to-pdf',
  request: {
    body: { content: { 'application/json': { schema: Url2pdfrequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'A PDF file.',
      content: {
        'application/pdf': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: { description: 'Bad Request. Invalid payload specified.', content: {} },
    401: { description: 'Unauthorized. `api_key` parameter is missed or incorrect', content: {} },
    500: {
      description:
        "Internal Server Error is a very general HTTP status code that means something has gone wrong on the web site's server.",
      content: {},
    },
  },
})

export const postConvertUrlScreenshotRoute = createRoute({
  method: 'post',
  path: '/convert/url/screenshot',
  tags: ['url-to-screenshot'],
  summary: 'Capture web page Screenshots.',
  description:
    'Automate URL to Screenshot Conversion right in your application.\n\nSpecify request parameters like URL, Proxy, and actions to convert web pages to screenshots using Headless Chrome.\n\nGet resulted pictures in JPG or PNG formats even from websites blocked in your area for some reason utilizing our worldwide pool of proxies.\n\nSimulate real-world human interaction with the page. For example, before capturing a web page, you may need to scroll it.\n\nGenerate ready-to-run code for your favorite language at [https://dataflowkit.com/url-to-screenshot](https://dataflowkit.com/url-to-screenshot)',
  operationId: 'url-to-screenshot',
  request: {
    body: {
      content: { 'application/json': { schema: Url2screenshotrequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns jpg or png file.',
      content: {
        'image/jpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/png': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: { description: 'Bad Request. Invalid payload specified.', content: {} },
    401: { description: 'Unauthorized. `api_key` parameter is missed or incorrect', content: {} },
    500: {
      description:
        "Internal Server Error is a very general HTTP status code that means something has gone wrong on the web site's server.",
      content: {},
    },
  },
})

export const postFetchRoute = createRoute({
  method: 'post',
  path: '/fetch',
  tags: ['fetch'],
  summary: 'Download web page content',
  description: 'Use fetch endpoint to download web pages.',
  operationId: 'fetch',
  request: {
    body: {
      description:
        '- _Base fetcher type_ is the right choice for fetching server-side rendered pages. It takes fewer resources and works faster than rendering HTML with _Chrome fetcher_\n- But for rendering Angular, React, and Vue.js web sites, you should always specify _Chrome fetcher type_. In this case, headless chrome fetcher renders dynamic Javascript content in the same way as real web browsers would do it.\n\nGenerate ready-to-run code for your favorite language at [https://dataflowkit.com/render-web](https://dataflowkit.com/render-web)\n',
      content: { 'application/json': { schema: FetchrequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Returns utf8 encoded web page content.', content: {} },
    400: { description: 'Bad Request. Invalid payload specified.', content: {} },
    401: { description: 'Unauthorized. `api_key` parameter is missed or incorrect', content: {} },
    500: {
      description:
        "Internal Server Error is a very general HTTP status code that means something has gone wrong on the web site's server.",
      content: {},
    },
  },
})

export const postParseRoute = createRoute({
  method: 'post',
  path: '/parse',
  tags: ['parse'],
  summary: 'Extract structured data from web pages',
  description:
    'Dataflow kit uses CSS selectors to find HTML elements in web pages for later data extraction.\n\nOpen [visual point-and-click toolkit](https://dataflowkit.com/dfk) and click desired elements on a page to specify extracting data. \n\n\n Then you can send generated payload to `/parse` endpoint. We crawl web pages and extract data like text, links, or images for you following the specified rules. \n\n\nExtracted data is returned in CSV, MS Excel, JSON, JSON(Lines) or XML format.\n',
  operationId: 'parse',
  request: {
    body: {
      description:
        "### Field types and attributes\n  \n- **Text**. Extract human-readable text from the selected element and all its child elements. HTML tags are stripped, and only text returned.\n    \n- **Link**. Capture link `href` attribute and link text. Or specify a special _Path_ option for website navigation. When Path option is true, all other selectors ignored, and no results from the current page returned.\n    \n- **Image**. Image type extracts `src` (URL) and `alt` attributes of an image\n\n\n***\n### Filters\nFilters are used to manipulate text data when extracting.\n\nHere is the list of available filters\n\n\n- **Trim** removes leading and trailing white spaces from the _field text or attribute_\n\n- **Normal** leaves the case and capitalization of text/ attribute exactly as is.\n\n- **UPPERCASE** makes all of the letters in the Field's text/ attribute uppercase.\n\n- **lowercase** makes all of the letters in the Field's text/ attribute lowercase.\n\n- **Capitalize** capitalizes the first letter of each word in the Field's text/ attribute\n\n- **Concatinate** joins text array element into a single string\n\n***\n### Regular Expressions\n\nFor more advanced text formatting regular expression can be used. Some useful examples are listed below\n\n\n| Input text | Regex | Result |\n| ---------- | ----- | ------ |\n| price- 10.99€ | <code>[0-9]+\\.[0-9]+</code> | 10.99 |\n| phone- 0 (944) 244-18-22 | <code>\\w+</code> | 09442441822 |\n\n\n***\n### Details. Chaining.\nThe Link field type serves as a navigation link to a details page containing more data.\nA special _Path_ option is used for navigation only. When the Path option specified, no results from the current page returned. But grouped results from details pages will be pulled instead. You can use chaining functionality of Dataflow Kit scraper to retrieve all the detail page data at the same time.\n",
      content: { 'application/json': { schema: ParserequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Returns data in the one of the follwing formats - JSON, JSON Lines, CSV, MS Excel, XML',
      content: {
        'application/json': {
          schema: z.object({}),
          example: [
            {
              Name_href: 'https://test.dataflowkit.com/persons/1',
              Name_text: 'Ethan Aguirre',
              Number_text: '1',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-1.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/2',
              Name_text: 'Melodie Holder',
              Number_text: '2',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-2.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/3',
              Name_text: 'Meghan Reyes',
              Number_text: '3',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-3.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/4',
              Name_text: 'Lane Vinson',
              Number_text: '4',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-4.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/5',
              Name_text: 'Philip Tillman',
              Number_text: '5',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-5.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/6',
              Name_text: 'Theodore Mcclain',
              Number_text: '6',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-6.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/7',
              Name_text: 'Neville Kane',
              Number_text: '7',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-7.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/8',
              Name_text: 'Lila Vazquez',
              Number_text: '8',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-8.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/9',
              Name_text: 'Ulysses Peters',
              Number_text: '9',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-9.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/10',
              Name_text: 'Camden Young',
              Number_text: '10',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-10.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/11',
              Name_text: 'Solomon Petty',
              Number_text: '11',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-11.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/12',
              Name_text: 'Ahmed Robbins',
              Number_text: '12',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-12.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/13',
              Name_text: 'William Olsen',
              Number_text: '13',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-13.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/14',
              Name_text: 'Ahmed Vaughan',
              Number_text: '14',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-14.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/15',
              Name_text: 'Howard Kemp',
              Number_text: '15',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-15.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/16',
              Name_text: 'Channing Flores',
              Number_text: '16',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-16.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/17',
              Name_text: 'Brandon Bauer',
              Number_text: '17',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-17.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/18',
              Name_text: 'Colt Morrow',
              Number_text: '18',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-18.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/19',
              Name_text: 'Kaye Garner',
              Number_text: '19',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-19.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/20',
              Name_text: 'Clayton Justice',
              Number_text: '20',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-20.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/21',
              Name_text: 'Hiroko Mills',
              Number_text: '21',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-21.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/22',
              Name_text: 'Melvin Lloyd',
              Number_text: '22',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-22.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/23',
              Name_text: 'Marshall Mayo',
              Number_text: '23',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-23.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/24',
              Name_text: 'Rae Casey',
              Number_text: '24',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-24.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/25',
              Name_text: 'Astra Snyder',
              Number_text: '25',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-25.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/26',
              Name_text: 'Simon Mckinney',
              Number_text: '26',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-26.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/27',
              Name_text: 'Graiden Riggs',
              Number_text: '27',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-27.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/28',
              Name_text: 'Jaden Stewart',
              Number_text: '28',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-28.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/29',
              Name_text: 'Christian Galloway',
              Number_text: '29',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-29.svg',
            },
            {
              Name_href: 'https://test.dataflowkit.com/persons/30',
              Name_text: 'Signe Sykes',
              Number_text: '30',
              Picture_alt: '',
              Picture_src: 'https://test.dataflowkit.com/static/img/avataaars-30.svg',
            },
          ],
        },
      },
    },
    400: { description: 'Bad Request. Invalid payload specified.', content: {} },
    401: { description: 'Unauthorized. `api_key` parameter is missed or incorrect', content: {} },
    500: {
      description:
        "Internal Server Error is a very general HTTP status code that means something has gone wrong on the web site's server.",
      content: {},
    },
  },
})

export const postSerpRoute = createRoute({
  method: 'post',
  path: '/serp',
  tags: ['serp'],
  summary: 'Collect search results from search engines',
  description:
    'To crawl search engine result pages, you can use `/serp` endpoint. SERP collection service extracts a list of organic results, news, images, and more.  Specify configuration parameters, such as country or languages, to customize output SERP data.\nThe following search engines are supported\n\n- google\n- google-image\n- google-news\n- google-shopping\n- bing\n- duckduckgo\n- baidu\n- yandex\n\n\nGenerate ready-to-run code for your favorite language at [https://dataflowkit.com/serp](https://dataflowkit.com/serp)',
  operationId: 'serp',
  request: {
    body: {
      description:
        '<h2>Search parameters</h2>\n\n> In most cases, you don\'t need to customize parameters by hand. Use <a href="https://dataflowkit.com/serp" target="_blank">SERP extraction Code generator</a>. It is the easiest way to generate a payload for launching in the Dataflow kit cloud.\n\n<h3>URL GET parameters</h3>\n\n||||\n|-|-|-|\n|q| Parameter defines encoded search term. You can use anything that you would use in a regular Search engines search. (e.g. for Google, <ul> <li><code>link:dataflowkit.com</code>,</li> <li><code>site:twitter.com Bratislava</code>,</li><li><code>inurl:view/view.shtml</code>, etc.)</li></ul> See The Complete List of 42 Advanced <a href="https://ahrefs.com/blog/google-advanced-search-operators/" target="_blank">Google Search Operators</a>|<ul> <li><code>q</code> parameter is used by google, Bing, DuckDuckGo.</li><li> <code>text</code> is used as query holder by Yandex SE.</li><li> Chineese Baidu uses <code>wd</code> for this purpose.</li></ul>|\n|tbm| <code>tbm</code> is a special Google parameter used to differentiate between search types|  <ul> <li><code>tbm=isch</code> - Google Images,</li> <li> <code>tbm=nws</code> - Google News</li> <li><code>tbm=shop</code> - Google Shopping</li> </ul>|\n|lr|Restricts the search to documents written in a particular languages.|<ul><li>Google uses <code>lang_{two-letter lang code}</code> to specify languages and <code>&#124;</code> as a delimiter. (e.g., <code>lang_sk&#124;lang_de</code> will only search Slovak and German pages). See the <a href="https://developers.google.com/custom-search/v1/cse/list">full list</a> of possible values for Google. </li><li>For Bing specify <code>setLang=en</code> parameter.</li><li> In Yandex use <code>lang=ca</code> parameter</li></ul>|\n|gl|Specify the country to search from. It\'s a two-letter country code. (e.g., <code>sk</code> for Slovakia, or <code>us</code> for the United States).| For Google see the <a href="https://developers.google.com/custom-search/docs/xml_results_appendices#countryCodes">Country Codes</a> page for a list of valid values. For Bing <code>cc=at</code> parameter is used.|\n',
      content: { 'application/json': { schema: SerprequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Returns data in the one of the follwing formats - JSON, JSON Lines, CSV, MS Excel, XML',
      content: {
        'application/json': {
          schema: z.object({}),
          example: [
            {
              description_text:
                'Dataflow kit visits the web on your behalf, processes Javascript driven pages in the cloud, return rendered HTML, capture screenshot or save as PDF. Dataflow Kit services. Headless Chrome as a service. We automate dynamic web content download using the Headless Chrome browser. ...',
              link_href: 'https://dataflowkit.com/',
              link_text: 'Turn Websites into structured data /Dataflow kit',
            },
            {
              description_text:
                'Dataflow kit ("DFK") is a Web Scraping framework for Gophers. It extracts data from web pages, following the specified CSS Selectors. You can use it in many ways for data mining, data processing or archiving.',
              link_href: 'https://github.com/slotix/dataflowkit',
              link_text: 'GitHub - slotix/dataflowkit: Extract structured data from ...',
            },
            {
              description_text:
                "The Department of Health - Abu Dhabi (DoH - Abu Dhabi) leverages the DataFlow Group's specialized Primary Source Verification (PSV) solutions to screen the credentials of professionals working within Abu Dhabi's healthcare sector. As the regulative body of the healthcare sector in Abu Dhabi, DoH - Abu Dhabi ensures excellence for the ...",
              link_href:
                'https://corp.dataflowgroup.com/verification-services/start-your-verification/healthcare/department-of-health-abu-dhabi/',
              link_text: 'Department of Health - Abu Dhabi - Dataflow Group',
            },
            {
              description_text:
                "Dataflow Kit was added by slotix in Apr 2020 and the latest update was made in May 2020. The list of alternatives was updated Apr 2020. It's possible to update the information on Dataflow Kit or report it as discontinued, duplicated or spam.",
              link_href: 'https://alternativeto.net/software/dataflow-kit/',
              link_text: 'Dataflow Kit Alternatives and Similar Websites and Apps ...',
            },
            {
              description_text:
                'Dataflow Kit Reloaded. We are so excited to introduce a new, completely re-implemented Dataflow Kit. In particular, we supplement our legacy custom web scraper with more focused and more understandable web services for our users.',
              link_href: 'https://blog.dataflowkit.com/',
              link_text: 'Dataflow Kit Blog',
            },
            {
              description_text:
                "The Dubai Health Authority (DHA) leverages the DataFlow Group's specialized Primary Source Verification (PSV) solutions to screen the credentials of professionals working within Dubai's healthcare sector. The DHA is led by a mission to ensure access to health services, maintain and enhance the quality of these services, improve the health ...",
              link_href:
                'https://corp.dataflowgroup.com/verification-services/start-your-verification/healthcare/dubai-health-authority/',
              link_text: 'Dubai Health Authority - Dataflow Group',
            },
            {
              description_text:
                'Dataflow Kit Reloaded. We are so excited to introduce a new, completely re-implemented Dataflow Kit. In particular, we supplement our legacy custom web scraper with more focused and more understandable web services for our users.',
              link_href: 'https://blog.dataflowkit.com/reloaded/',
              link_text: 'Dataflow Kit Reloaded.',
            },
            {
              description_text:
                'The Dataflow Kit API allows embedding free COVID-19 live statistics web widget into sites. Methods provide data for the USA, Spain, or the World. Developers can access live statistics data through the DFK COVID-19 API for free. They can build widgets, mobile apps, or integrate them into other applications.',
              link_href: 'https://www.programmableweb.com/api/dataflow-kit-rest-api-v1',
              link_text: 'Dataflow Kit REST API v1 | ProgrammableWeb',
            },
            {
              description_text:
                'Description. Dataflow kit is a Scraping framework for Gophers. DFK extracts structured data from web pages, following the specified extractors. It can be used in many ways for data mining, data processing or archiving.',
              link_href: 'https://go.libhunt.com/dataflowkit-alternatives',
              link_text: 'Dataflow kit Alternatives - Go Text Processing | LibHunt',
            },
            {
              description_text:
                'Point, click and extract. Work on any interactive site Scrape a website behind a login form Extract data from multiple pages. Scrape infinite scrolled pages. Crawl details; Extract and follow lin',
              link_href: 'https://www.startupranking.com/dataflow-kit',
              link_text: 'Dataflow Kit - Fast extraction of structured data from ...',
            },
          ],
        },
      },
    },
    400: { description: 'Bad Request. Invalid payload specified.', content: {} },
    401: { description: 'Unauthorized. `api_key` parameter is missed or incorrect', content: {} },
    500: {
      description:
        "Internal Server Error is a very general HTTP status code that means something has gone wrong on the web site's server.",
      content: {},
    },
  },
})
