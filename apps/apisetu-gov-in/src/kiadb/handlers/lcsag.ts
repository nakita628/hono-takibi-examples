import type { RouteHandler } from '@hono/zod-openapi'
import type { postLcsagCertificateRoute } from '../routes'

export const postLcsagCertificateRouteHandler: RouteHandler<
  typeof postLcsagCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
