import type { RouteHandler } from '@hono/zod-openapi'
import type { postShcerCertificateRoute } from '../routes'

export const postShcerCertificateRouteHandler: RouteHandler<
  typeof postShcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
