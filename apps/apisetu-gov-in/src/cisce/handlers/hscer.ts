import type { RouteHandler } from '@hono/zod-openapi'
import type { postHscerCertificateRoute } from '../routes'

export const postHscerCertificateRouteHandler: RouteHandler<
  typeof postHscerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
