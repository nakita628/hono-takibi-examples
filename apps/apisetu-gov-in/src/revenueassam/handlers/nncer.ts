import type { RouteHandler } from '@hono/zod-openapi'
import type { postNncerCertificateRoute } from '../routes'

export const postNncerCertificateRouteHandler: RouteHandler<
  typeof postNncerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
