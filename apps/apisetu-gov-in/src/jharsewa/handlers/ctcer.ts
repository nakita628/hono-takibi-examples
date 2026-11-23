import type { RouteHandler } from '@hono/zod-openapi'
import type { postCtcerCertificateRoute } from '../routes'

export const postCtcerCertificateRouteHandler: RouteHandler<
  typeof postCtcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
