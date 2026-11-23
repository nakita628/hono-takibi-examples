import type { RouteHandler } from '@hono/zod-openapi'
import type { postEgcerCertificateRoute } from '../routes'

export const postEgcerCertificateRouteHandler: RouteHandler<
  typeof postEgcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
