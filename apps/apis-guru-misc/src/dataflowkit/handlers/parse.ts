import type { RouteHandler } from '@hono/zod-openapi'
import type { postParseRoute } from '../routes'

export const postParseRouteHandler: RouteHandler<typeof postParseRoute> = async (c) => {
  throw new Error('Not implemented')
}
