import type { RouteHandler } from '@hono/zod-openapi'
import type { postClcerCertificateRoute } from '../routes'

export const postClcerCertificateRouteHandler: RouteHandler<
  typeof postClcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
