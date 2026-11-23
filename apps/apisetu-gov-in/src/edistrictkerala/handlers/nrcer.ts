import type { RouteHandler } from '@hono/zod-openapi'
import type { postNrcerCertificateRoute } from '../routes'

export const postNrcerCertificateRouteHandler: RouteHandler<
  typeof postNrcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
