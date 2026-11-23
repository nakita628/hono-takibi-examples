import type { RouteHandler } from '@hono/zod-openapi'
import type { postNtcerCertificateRoute } from '../routes'

export const postNtcerCertificateRouteHandler: RouteHandler<
  typeof postNtcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
