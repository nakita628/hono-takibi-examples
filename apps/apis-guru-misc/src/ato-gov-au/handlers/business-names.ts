import type { RouteHandler } from '@hono/zod-openapi'
import type { getBusinessNamesRoute } from '../routes'

export const getBusinessNamesRouteHandler: RouteHandler<typeof getBusinessNamesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
