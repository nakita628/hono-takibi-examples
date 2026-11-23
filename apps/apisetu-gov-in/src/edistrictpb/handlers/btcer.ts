import type { RouteHandler } from '@hono/zod-openapi'
import type { postBtcerCertificateRoute } from '../routes'

export const postBtcerCertificateRouteHandler: RouteHandler<
  typeof postBtcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
