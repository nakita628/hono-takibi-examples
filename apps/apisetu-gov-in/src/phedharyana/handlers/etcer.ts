import type { RouteHandler } from '@hono/zod-openapi'
import type { postEtcerCertificateRoute } from '../routes'

export const postEtcerCertificateRouteHandler: RouteHandler<
  typeof postEtcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
