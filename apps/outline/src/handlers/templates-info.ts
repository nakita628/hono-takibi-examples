import type { RouteHandler } from '@hono/zod-openapi'
import type { postTemplatesInfoRoute } from '../routes'

export const postTemplatesInfoRouteHandler: RouteHandler<typeof postTemplatesInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
