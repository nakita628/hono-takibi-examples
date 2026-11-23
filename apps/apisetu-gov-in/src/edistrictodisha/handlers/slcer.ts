import type { RouteHandler } from '@hono/zod-openapi'
import type { postSlcerCertificateRoute } from '../routes'

export const postSlcerCertificateRouteHandler: RouteHandler<
  typeof postSlcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
