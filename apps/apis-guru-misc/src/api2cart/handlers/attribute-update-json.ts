import type { RouteHandler } from '@hono/zod-openapi'
import type { postAttributeUpdateJsonRoute } from '../routes'

export const postAttributeUpdateJsonRouteHandler: RouteHandler<
  typeof postAttributeUpdateJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
