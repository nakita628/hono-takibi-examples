import type { RouteHandler } from '@hono/zod-openapi'
import type { postLinkRoute } from '../routes'

export const postLinkRouteHandler: RouteHandler<typeof postLinkRoute> = async (c) => {
  throw new Error('Not implemented')
}
