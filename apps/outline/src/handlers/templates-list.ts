import type { RouteHandler } from '@hono/zod-openapi'
import type { postTemplatesListRoute } from '../routes'

export const postTemplatesListRouteHandler: RouteHandler<typeof postTemplatesListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
