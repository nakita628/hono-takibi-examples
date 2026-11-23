import type { RouteHandler } from '@hono/zod-openapi'
import type { getSwaggerDocJsonRoute } from '../routes'

export const getSwaggerDocJsonRouteHandler: RouteHandler<typeof getSwaggerDocJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
