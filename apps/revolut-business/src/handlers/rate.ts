import type { RouteHandler } from '@hono/zod-openapi'
import type { getRateRoute } from '../routes'

export const getRateRouteHandler: RouteHandler<typeof getRateRoute> = async (c) => {
  throw new Error('Not implemented')
}
