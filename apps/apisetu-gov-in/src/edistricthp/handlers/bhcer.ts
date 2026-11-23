import type { RouteHandler } from '@hono/zod-openapi'
import type { postBhcerCertificateRoute } from '../routes'

export const postBhcerCertificateRouteHandler: RouteHandler<
  typeof postBhcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
