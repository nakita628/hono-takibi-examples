import type { RouteHandler } from '@hono/zod-openapi'
import type { postRfcerCertificateRoute } from '../routes'

export const postRfcerCertificateRouteHandler: RouteHandler<
  typeof postRfcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
