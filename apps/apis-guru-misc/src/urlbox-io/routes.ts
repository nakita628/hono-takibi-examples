import { createRoute, z } from '@hono/zod-openapi'

const ErrorResponseSchema = z
  .object({
    error: z
      .object({
        code: z.string().exactOptional().openapi({ description: 'A machine-readable error code' }),
        message: z
          .string()
          .exactOptional()
          .openapi({ description: 'A human-readable error message' }),
      })
      .openapi({ required: [] }),
  })
  .openapi({ required: ['error'] })
  .openapi('ErrorResponse')

const RedirectResponseSchema = z
  .object({
    location: z.url().openapi({ description: 'The URL to follow for the long running request' }),
    message: z
      .string()
      .openapi({
        description: 'A human-readable message indicating the need to follow the redirect',
      }),
  })
  .openapi({ required: ['message', 'location'] })
  .openapi('RedirectResponse')

const RenderRequestSchema = z
  .xor([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'url')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['url'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'html')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['html'] }),
  ])
  .and(
    z
      .object({
        block_ads: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether to block ads on the rendered page' }),
        click_accept: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether to automatically click accept buttons on the rendered page',
          }),
        delay: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The amount of milliseconds to delay before taking a screenshot',
          }),
        format: z
          .enum(['png', 'jpg', 'pdf', 'svg', 'mp4', 'webp', 'webm', 'html'])
          .exactOptional()
          .openapi({ description: 'The format of the rendered output' }),
        full_page: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether to capture the full page' }),
        gpu: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether to enable GPU rendering' }),
        height: z
          .int()
          .exactOptional()
          .openapi({ description: 'The viewport height of the rendered output' }),
        hide_cookie_banners: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether to hide cookie banners on the rendered page' }),
        html: z
          .string()
          .exactOptional()
          .openapi({ description: 'The raw HTML to render as an image or video' }),
        metadata: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether to return metadata about the URL' }),
        retina: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether to render the image in retina quality' }),
        selector: z
          .string()
          .exactOptional()
          .openapi({ description: 'The CSS selector of an element you would like to capture' }),
        thumb_height: z
          .int()
          .exactOptional()
          .openapi({ description: 'The height of the thumbnail image' }),
        thumb_width: z
          .int()
          .exactOptional()
          .openapi({ description: 'The width of the thumbnail image' }),
        url: z
          .string()
          .exactOptional()
          .openapi({ description: 'The URL to render as an image or video' }),
        wait_for: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'CSS selector of an element to wait to be present in the web page before rendering',
          }),
        wait_to_leave: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'CSS selector of an element, such as a loading spinner, to wait to leave the web page before rendering',
          }),
        wait_until: z
          .enum(['requestsfinished', 'mostrequestsfinished', 'loaded', 'domloaded'])
          .exactOptional()
          .openapi({ description: 'When' }),
        width: z
          .int()
          .exactOptional()
          .openapi({ description: 'The viewport width of the rendered output' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('RenderRequest')

const RenderResponseSchema = z
  .object({
    renderUrl: z
      .url()
      .exactOptional()
      .openapi({ description: 'The URL where the rendered output is stored' }),
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The size of the rendered output in bytes',
      }),
  })
  .openapi({ required: [] })
  .openapi('RenderResponse')

const SecretKeySecurityScheme = {
  bearerFormat: 'JWT',
  description:
    'The Urlbox API uses your secret API key to authenticate. To find your secret key, login to the Urlbox dashboard at https://urlbox.io/dashboard.\n',
  scheme: 'bearer',
  type: 'http',
}

export const postV1RenderSyncRoute = createRoute({
  method: 'post',
  path: '/v1/render/sync',
  summary: 'Render a URL as an image or video',
  operationId: 'renderSync',
  request: {
    body: { content: { 'application/json': { schema: RenderRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: RenderResponseSchema } },
      headers: z.object({
        'x-renders-allowed': z
          .int()
          .exactOptional()
          .openapi({ description: 'The number of renders allowed', param: { required: false } }),
        'x-renders-reset': z
          .string()
          .exactOptional()
          .openapi({
            description: 'The date and time when the render count will reset',
            param: { required: false },
          }),
        'x-renders-used': z
          .int()
          .exactOptional()
          .openapi({ description: 'The number of renders used', param: { required: false } }),
        'x-urlbox-acceptedby': z
          .string()
          .exactOptional()
          .openapi({
            description: 'The server that accepted the request',
            param: { required: false },
          }),
        'x-urlbox-cache-status': z
          .string()
          .exactOptional()
          .openapi({ description: 'The cache status of the response', param: { required: false } }),
        'x-urlbox-cachekey': z
          .string()
          .exactOptional()
          .openapi({ description: 'The cache key used by URLBox', param: { required: false } }),
        'x-urlbox-renderedby': z
          .string()
          .exactOptional()
          .openapi({
            description: 'The server that rendered the response',
            param: { required: false },
          }),
        'x-urlbox-requestid': z
          .string()
          .exactOptional()
          .openapi({
            description: 'The request ID assigned by URLBox',
            param: { required: false },
          }),
      }),
    },
    307: {
      description: 'Temporary Redirect',
      content: {
        'application/json': {
          schema: RedirectResponseSchema,
          example: {
            location:
              'https://api.urlbox.io/v1/redirect/BQxxwO98uwkSsuJf/1dca9bae-c49d-42d3-8282-89450afb7e73/1',
            message: 'Please follow the redirect to continue your long running request',
          },
        },
      },
      headers: z.object({
        Location: z
          .url()
          .exactOptional()
          .openapi({
            param: { required: false },
            description: 'The URL to follow for the long running request',
          }),
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: { code: 'ApiKeyNotFound', message: 'Api Key does not exist' } },
        },
      },
      headers: z.object({
        'x-urlbox-error-message': z
          .string()
          .exactOptional()
          .openapi({
            description: 'An error message describing the reason the request failed',
            param: { required: false },
          }),
      }),
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: { error: { code: 'ApiKeyNotFound', message: 'Api Key does not exist' } },
        },
      },
      headers: z.object({
        'x-urlbox-error-message': z
          .string()
          .exactOptional()
          .openapi({
            description: 'An error message describing the reason the request failed',
            param: { required: false },
          }),
      }),
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
          example: {
            error: { code: 'ApiKeyNotFound', message: 'Something went wrong rendering that' },
          },
        },
      },
      headers: z.object({
        'x-urlbox-error-message': z
          .string()
          .exactOptional()
          .openapi({
            description: 'An error message describing the reason the request failed',
            param: { required: false },
          }),
      }),
    },
  },
  security: [{ SecretKey: [] }],
})
