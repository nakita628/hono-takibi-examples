import type { RouteHandler } from '@hono/zod-openapi'
import type { postCheckFormatRoute } from '../routes'

export const postCheckFormatRouteHandler: RouteHandler<typeof postCheckFormatRoute> = async (c) => {
  throw new Error('Not implemented')
}
