import type { RouteHandler } from '@hono/zod-openapi'
import type { postDmcerCertificateRoute } from '../routes'

export const postDmcerCertificateRouteHandler: RouteHandler<
  typeof postDmcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
