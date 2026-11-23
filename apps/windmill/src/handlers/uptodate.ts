import type { RouteHandler } from '@hono/zod-openapi'
import type { getUptodateRoute } from '../routes'

export const getUptodateRouteHandler: RouteHandler<typeof getUptodateRoute> = async (c) => {
  throw new Error('Not implemented')
}
