import type { RouteHandler } from '@hono/zod-openapi'
import type { postAttributeAddJsonRoute } from '../routes'

export const postAttributeAddJsonRouteHandler: RouteHandler<
  typeof postAttributeAddJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
