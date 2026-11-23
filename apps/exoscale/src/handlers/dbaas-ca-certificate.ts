import type { RouteHandler } from '@hono/zod-openapi'
import type { getDbaasCaCertificateRoute } from '../routes'

export const getDbaasCaCertificateRouteHandler: RouteHandler<
  typeof getDbaasCaCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
