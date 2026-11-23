import type { RouteHandler } from '@hono/zod-openapi'
import type { postDtcerCertificateRoute } from '../routes'

export const postDtcerCertificateRouteHandler: RouteHandler<
  typeof postDtcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
