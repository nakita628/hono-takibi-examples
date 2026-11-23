import type { RouteHandler } from '@hono/zod-openapi'
import type { getImplementationRoute } from '../routes'

export const getImplementationRouteHandler: RouteHandler<typeof getImplementationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
