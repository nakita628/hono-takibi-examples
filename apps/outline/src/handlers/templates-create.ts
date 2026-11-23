import type { RouteHandler } from '@hono/zod-openapi'
import type { postTemplatesCreateRoute } from '../routes'

export const postTemplatesCreateRouteHandler: RouteHandler<
  typeof postTemplatesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
