import { createRoute, z } from '@hono/zod-openapi'

const EmojisSchema = z.any().openapi('Emojis')

const HashtagsSchema = z.any().openapi('Hashtags')

const ImagesSchema = z.any().openapi('Images')

const InstagramSchema = z.any().openapi('Instagram')

const LinkShorteningSchema = z.any().openapi('LinkShortening')

export const getV1EmojiAutoEmojifyRoute = createRoute({
  method: 'get',
  path: '/v1/emoji/auto-emojify',
  tags: [],
  summary: 'Auto-Emojify',
  description: 'Returns text of the post with emoji added',
  operationId: 'Auto-Emojify',
  request: {
    query: z.object({
      text: z
        .string()
        .openapi({
          param: {
            description: 'Text of the post',
            example: 'Why robots may soon steal all manufacturing jobs – but it’s not all bad news',
            in: 'query',
            name: 'text',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getV1EmojiSuggestionsRoute = createRoute({
  method: 'get',
  path: '/v1/emoji/suggestions',
  tags: [],
  summary: 'Emoji Suggestions',
  description: 'Returns list of emoji suggestions for a given text of the post',
  operationId: 'Emoji Suggestions',
  request: {
    query: z.object({
      text: z
        .string()
        .openapi({
          param: {
            description: 'Text of the post',
            example: 'Why robots may soon steal all manufacturing jobs – but it’s not all bad news',
            in: 'query',
            name: 'text',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getV1ImagesAnimateRoute = createRoute({
  method: 'get',
  path: '/v1/images/animate',
  tags: [],
  summary: 'Animate Image',
  description: 'Returns URL of an animated GIF.',
  operationId: 'Animate Image',
  request: {
    query: z.object({
      url: z
        .string()
        .openapi({
          param: {
            description: 'URL of the company',
            example: 'https://jpeg.org/images/jpeg-home.jpg',
            in: 'query',
            name: 'url',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .openapi({
          param: {
            description: 'URL of the company',
            example: 'glint',
            in: 'query',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getV1ImagesLogoRoute = createRoute({
  method: 'get',
  path: '/v1/images/logo',
  tags: [],
  summary: 'Company Logo',
  description:
    'Returns a company logo based on website domain. If the logo is not in our database yet, it will be extracted from the site on the fly. White logo background is automatically removed to make the logo look better on color backgrounds.\n\nNote: It is not possible to access our company logo API publicly without authentication. If you wish to do so, you have to create proxy on your own server that calls our API from the server side.',
  operationId: 'Company Logo',
  request: {
    query: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'URL of the company',
            example: 'google.com',
            in: 'query',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getV1ImagesQuoteRoute = createRoute({
  method: 'get',
  path: '/v1/images/quote',
  tags: [],
  summary: 'Text to Image',
  description: 'Returns URL of an image created from text according to given style parameters',
  operationId: 'Text to Image',
  request: {
    query: z.object({
      quote: z
        .string()
        .openapi({
          param: {
            description: 'Text of the quote',
            example: "If you love life, don't waste time, for time is what life is made up of",
            in: 'query',
            name: 'quote',
            required: true,
            schema: { type: 'string' },
          },
        }),
      author: z
        .string()
        .openapi({
          param: {
            description: 'Name of the author/source',
            example: 'Bruce Lee',
            in: 'query',
            name: 'author',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fontSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Font size for the quote (author font size is calculated automatically)',
            example: '60',
            in: 'query',
            name: 'fontSize',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      quoteFont: z
        .string()
        .openapi({
          param: {
            description: 'Font-family used for quote text',
            example: 'Lora',
            in: 'query',
            name: 'quoteFont',
            required: true,
            schema: { type: 'string' },
          },
        }),
      quoteFontColor: z
        .string()
        .openapi({
          param: {
            description: 'Font color of the quote text',
            example: '#4f4f4f',
            in: 'query',
            name: 'quoteFontColor',
            required: true,
            schema: { type: 'string' },
          },
        }),
      authorFont: z
        .string()
        .openapi({
          param: {
            description: 'Font-family used for author name',
            example: 'Lato Black',
            in: 'query',
            name: 'authorFont',
            required: true,
            schema: { type: 'string' },
          },
        }),
      authorFontColor: z
        .string()
        .openapi({
          param: {
            description: 'Font color of the author',
            example: '#e5e5e5',
            in: 'query',
            name: 'authorFontColor',
            required: true,
            schema: { type: 'string' },
          },
        }),
      enableHighlight: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Enable highlight on quote text',
            example: '1',
            in: 'query',
            name: 'enableHighlight',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      highlightColor: z
        .string()
        .openapi({
          param: {
            description: 'Color used for highlight',
            example: '#f0ea66',
            in: 'query',
            name: 'highlightColor',
            required: true,
            schema: { type: 'string' },
          },
        }),
      bgType: z
        .string()
        .openapi({
          param: {
            description: 'Background type (gradient/solid)',
            example: 'gradient',
            in: 'query',
            name: 'bgType',
            required: true,
            schema: { type: 'string' },
          },
        }),
      backgroundColor: z
        .string()
        .openapi({
          param: {
            description: 'Background color for solid background type',
            example: '#000000',
            in: 'query',
            name: 'backgroundColor',
            required: true,
            schema: { type: 'string' },
          },
        }),
      gradientType: z
        .string()
        .openapi({
          param: {
            description: 'Type of gradient background (linear/radial)',
            example: 'linear',
            in: 'query',
            name: 'gradientType',
            required: true,
            schema: { type: 'string' },
          },
        }),
      gradientColor1: z
        .string()
        .openapi({
          param: {
            description: 'First color for gradient background type',
            example: '#1ee691',
            in: 'query',
            name: 'gradientColor1',
            required: true,
            schema: { type: 'string' },
          },
        }),
      gradientColor2: z
        .string()
        .openapi({
          param: {
            description: 'Second color for gradient background type',
            example: '#1ddad6',
            in: 'query',
            name: 'gradientColor2',
            required: true,
            schema: { type: 'string' },
          },
        }),
      brandLogo: z
        .string()
        .openapi({
          param: {
            description: 'URL of the brand logo',
            example: 'https://cdn.ritekit.com/assets/img/common/made-with-ritekit-white.png',
            in: 'query',
            name: 'brandLogo',
            required: true,
            schema: { type: 'string' },
          },
        }),
      animation: z
        .string()
        .openapi({
          param: {
            description: 'Animation type: none, rays, glint, circle',
            example: 'glint',
            in: 'query',
            name: 'animation',
            required: true,
            schema: { type: 'string' },
          },
        }),
      showQuoteMark: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'showing/hiding quote mark',
            in: 'query',
            name: 'showQuoteMark',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getV1LinkCtaRoute = createRoute({
  method: 'get',
  path: '/v1/link/cta',
  tags: [],
  summary: 'List of CTAs',
  description:
    'Returns list of available CTA for current user. Requires each user to authenticate with RiteKit',
  operationId: 'List of CTAs',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getV1LinkShortLinkRoute = createRoute({
  method: 'get',
  path: '/v1/link/short-link',
  tags: [],
  summary: 'Shorten Link',
  description: 'Returns a shorten link with a given CTA.',
  operationId: 'Shorten Link',
  request: {
    query: z.object({
      url: z
        .string()
        .openapi({
          param: {
            description: 'URL',
            example: 'https://ritekit.com',
            in: 'query',
            name: 'url',
            required: true,
            schema: { type: 'string' },
          },
        }),
      cta: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'cta id',
            example: '6530',
            in: 'query',
            name: 'cta',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getV1SearchTrendingRoute = createRoute({
  method: 'get',
  path: '/v1/search/trending',
  tags: [],
  summary: 'Trending Hashtags',
  description: 'Returns list of hashtags currently trending on Twitter',
  operationId: 'Trending Hashtags',
  request: {
    query: z.object({
      green: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict results only to green hashtags. Hides overused (red) hashtags.',
            in: 'query',
            name: 'green',
            required: false,
            schema: { default: '1', type: 'boolean' },
          },
          default: '1',
        }),
      latin: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict results only to hashtags with latin characters',
            in: 'query',
            name: 'latin',
            required: false,
            schema: { default: '1', type: 'boolean' },
          },
          default: '1',
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getV1StatsAutoHashtagRoute = createRoute({
  method: 'get',
  path: '/v1/stats/auto-hashtag',
  tags: [],
  summary: 'Auto-Hashtag',
  description: 'Returns auto-hashtagged text of the post.',
  operationId: 'Auto-Hashtag',
  request: {
    query: z.object({
      post: z
        .string()
        .openapi({
          param: {
            description: 'Text of the post',
            example: 'Is artificial intelligence the future of customer service?',
            in: 'query',
            name: 'post',
            required: true,
            schema: { type: 'string' },
          },
        }),
      maxHashtags: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(2)
        .exactOptional()
        .openapi({
          param: {
            description: 'Max number of hashtags.',
            in: 'query',
            name: 'maxHashtags',
            required: false,
            schema: { default: 2, type: 'integer' },
          },
        }),
      hashtagPosition: z
        .string()
        .default('auto')
        .exactOptional()
        .openapi({
          param: {
            description: 'Position of hashtags: end => at the end, auto => anywhere',
            in: 'query',
            name: 'hashtagPosition',
            required: false,
            schema: { default: 'auto', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getV1StatsHashtagSuggestionsRoute = createRoute({
  method: 'get',
  path: '/v1/stats/hashtag-suggestions',
  tags: [],
  summary: 'Hashtag Suggestions',
  description:
    'Returns list of hashtag suggestions for a single-word topic or a shorter text up to 1000 characters. Takes into account both semantic relevancy and real-time hashtag popularity.',
  operationId: 'Hashtag Suggestions',
  request: {
    query: z.object({
      text: z
        .string()
        .openapi({
          param: {
            description: 'Topic',
            example: 'seo',
            in: 'query',
            name: 'text',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getV1StatsHistoryHashtagRoute = createRoute({
  method: 'get',
  path: '/v1/stats/history/{hashtag}',
  tags: [],
  summary: 'Hashtag History',
  description: 'Returns historical stats for a given hashtag from the last 30 days',
  operationId: 'Hashtag History',
  request: {
    params: z.object({
      hashtag: z
        .string()
        .openapi({
          param: {
            description: 'Hashtag without # mark',
            example: 'job',
            in: 'path',
            name: 'hashtag',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getV1StatsMultipleHashtagsRoute = createRoute({
  method: 'get',
  path: '/v1/stats/multiple-hashtags',
  tags: [],
  summary: 'Hashtag Stats',
  description: 'Returns real-time stats for up to 100 hashtags (updated hourly).',
  operationId: 'Hashtag Stats',
  request: {
    query: z.object({
      tags: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.any()),
        )
        .openapi({
          param: {
            description: 'Hashtag(s) without # mark',
            example: 'jobs,hello',
            explode: false,
            in: 'query',
            name: 'tags',
            required: true,
            schema: { items: {}, type: 'array' },
            style: 'form',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getV2InstagramHashtagsCleanerRoute = createRoute({
  method: 'get',
  path: '/v2/instagram/hashtags-cleaner',
  tags: [],
  summary: 'Hashtags cleaner',
  description: 'Remove banned hashtags before posting to Instagram',
  operationId: 'Hashtags cleaner',
  request: {
    query: z.object({
      post: z
        .string()
        .openapi({
          param: {
            description: 'post',
            example:
              '#instaphotography #instabeauty #instagirls #instanature #instagirl #photography #beauty #girls #nature #girl #sky #water #lady #ladies #woman #women #photograph #photographs #beauties #sunlight #sitting #waters #skies #sit #photographies',
            in: 'query',
            name: 'post',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})
