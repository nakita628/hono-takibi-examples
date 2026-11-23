import type { RouteHandler } from '@hono/zod-openapi'
import type { postPhcerCertificateRoute } from '../routes'

export const postPhcerCertificateRouteHandler: RouteHandler<
  typeof postPhcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
