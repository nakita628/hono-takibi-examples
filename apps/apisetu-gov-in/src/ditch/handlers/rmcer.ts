import type { RouteHandler } from '@hono/zod-openapi'
import type { postRmcerCertificateRoute } from '../routes'

export const postRmcerCertificateRouteHandler: RouteHandler<
  typeof postRmcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
