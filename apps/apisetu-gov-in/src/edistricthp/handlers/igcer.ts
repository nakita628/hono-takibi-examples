import type { RouteHandler } from '@hono/zod-openapi'
import type { postIgcerCertificateRoute } from '../routes'

export const postIgcerCertificateRouteHandler: RouteHandler<
  typeof postIgcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
