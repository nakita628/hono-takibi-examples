import type { RouteHandler } from '@hono/zod-openapi'
import type { getChatGetPermalinkRoute } from '../routes'

export const getChatGetPermalinkRouteHandler: RouteHandler<
  typeof getChatGetPermalinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}
