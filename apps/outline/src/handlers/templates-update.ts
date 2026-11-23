import type { RouteHandler } from '@hono/zod-openapi'
import type { postTemplatesUpdateRoute } from '../routes'

export const postTemplatesUpdateRouteHandler: RouteHandler<
  typeof postTemplatesUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
