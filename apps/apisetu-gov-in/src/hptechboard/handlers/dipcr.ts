import type { RouteHandler } from '@hono/zod-openapi'
import type { postDipcrCertificateRoute } from '../routes'

export const postDipcrCertificateRouteHandler: RouteHandler<
  typeof postDipcrCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
