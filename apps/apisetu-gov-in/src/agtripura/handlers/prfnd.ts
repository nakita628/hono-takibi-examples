import type { RouteHandler } from '@hono/zod-openapi'
import type { postPrfndCertificateRoute } from '../routes'

export const postPrfndCertificateRouteHandler: RouteHandler<
  typeof postPrfndCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
