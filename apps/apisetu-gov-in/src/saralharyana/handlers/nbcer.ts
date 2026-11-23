import type { RouteHandler } from '@hono/zod-openapi'
import type { postNbcerCertificateRoute } from '../routes'

export const postNbcerCertificateRouteHandler: RouteHandler<
  typeof postNbcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
