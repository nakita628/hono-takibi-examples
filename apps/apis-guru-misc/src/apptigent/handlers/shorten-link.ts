import type { RouteHandler } from '@hono/zod-openapi'
import type { postShortenLinkRoute } from '../routes'

export const postShortenLinkRouteHandler: RouteHandler<typeof postShortenLinkRoute> = async (c) => {
  throw new Error('Not implemented')
}
