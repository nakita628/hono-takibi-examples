import type { RouteHandler } from '@hono/zod-openapi'
import type { postErcerCertificateRoute } from '../routes'

export const postErcerCertificateRouteHandler: RouteHandler<
  typeof postErcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
