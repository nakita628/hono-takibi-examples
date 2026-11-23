import type { RouteHandler } from '@hono/zod-openapi'
import type { getFontFontstackStartEndRoute } from '../routes'

export const getFontFontstackStartEndRouteHandler: RouteHandler<
  typeof getFontFontstackStartEndRoute
> = async (c) => {
  throw new Error('Not implemented')
}
