import type { RouteHandler } from '@hono/zod-openapi'
import type { postNdcerCertificateRoute } from '../routes'

export const postNdcerCertificateRouteHandler: RouteHandler<
  typeof postNdcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
