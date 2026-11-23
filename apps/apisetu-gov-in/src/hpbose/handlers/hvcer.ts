import type { RouteHandler } from '@hono/zod-openapi'
import type { postHvcerCertificateRoute } from '../routes'

export const postHvcerCertificateRouteHandler: RouteHandler<
  typeof postHvcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
