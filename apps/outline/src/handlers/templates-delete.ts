import type { RouteHandler } from '@hono/zod-openapi'
import type { postTemplatesDeleteRoute } from '../routes'

export const postTemplatesDeleteRouteHandler: RouteHandler<
  typeof postTemplatesDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
