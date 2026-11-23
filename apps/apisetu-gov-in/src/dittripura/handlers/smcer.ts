import type { RouteHandler } from '@hono/zod-openapi'
import type { postSmcerCertificateRoute } from '../routes'

export const postSmcerCertificateRouteHandler: RouteHandler<
  typeof postSmcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
