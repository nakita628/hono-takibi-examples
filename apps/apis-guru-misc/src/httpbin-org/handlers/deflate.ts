import type { RouteHandler } from '@hono/zod-openapi'
import type { getDeflateRoute } from '../routes'

export const getDeflateRouteHandler: RouteHandler<typeof getDeflateRoute> = async (c) => {
  throw new Error('Not implemented')
}
