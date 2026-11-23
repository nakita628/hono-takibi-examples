import type { RouteHandler } from '@hono/zod-openapi'
import type { postFfcerCertificateRoute } from '../routes'

export const postFfcerCertificateRouteHandler: RouteHandler<
  typeof postFfcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
