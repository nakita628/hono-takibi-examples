import type { RouteHandler } from '@hono/zod-openapi'
import type { postHtmlCleanRoute } from '../routes'

export const postHtmlCleanRouteHandler: RouteHandler<typeof postHtmlCleanRoute> = async (c) => {
  throw new Error('Not implemented')
}
