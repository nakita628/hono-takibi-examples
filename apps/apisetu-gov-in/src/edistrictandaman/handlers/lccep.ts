import type { RouteHandler } from '@hono/zod-openapi'
import type { postLccepCertificateRoute } from '../routes'

export const postLccepCertificateRouteHandler: RouteHandler<
  typeof postLccepCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
