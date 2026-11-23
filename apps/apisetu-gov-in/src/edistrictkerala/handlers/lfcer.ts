import type { RouteHandler } from '@hono/zod-openapi'
import type { postLfcerCertificateRoute } from '../routes'

export const postLfcerCertificateRouteHandler: RouteHandler<
  typeof postLfcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
