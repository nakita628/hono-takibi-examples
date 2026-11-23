import type { RouteHandler } from '@hono/zod-openapi'
import type { postFmcerCertificateRoute } from '../routes'

export const postFmcerCertificateRouteHandler: RouteHandler<
  typeof postFmcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
