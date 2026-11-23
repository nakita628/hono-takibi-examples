import type { RouteHandler } from '@hono/zod-openapi'
import type { postConvertUrlPdfRoute, postConvertUrlScreenshotRoute } from '../routes'

export const postConvertUrlPdfRouteHandler: RouteHandler<typeof postConvertUrlPdfRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postConvertUrlScreenshotRouteHandler: RouteHandler<
  typeof postConvertUrlScreenshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
