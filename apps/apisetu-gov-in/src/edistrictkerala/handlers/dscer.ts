import type { RouteHandler } from '@hono/zod-openapi'
import type { postDscerCertificateRoute } from '../routes'

export const postDscerCertificateRouteHandler: RouteHandler<
  typeof postDscerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
