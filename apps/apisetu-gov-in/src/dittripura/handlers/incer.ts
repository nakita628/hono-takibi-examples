import type { RouteHandler } from '@hono/zod-openapi'
import type { postIncerCertificateRoute } from '../routes'

export const postIncerCertificateRouteHandler: RouteHandler<
  typeof postIncerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
