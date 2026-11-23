import type { RouteHandler } from '@hono/zod-openapi'
import type { postLlcerCertificateRoute } from '../routes'

export const postLlcerCertificateRouteHandler: RouteHandler<
  typeof postLlcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
