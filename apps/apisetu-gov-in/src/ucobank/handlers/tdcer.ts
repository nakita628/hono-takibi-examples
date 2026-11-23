import type { RouteHandler } from '@hono/zod-openapi'
import type { postTdcerCertificateRoute } from '../routes'

export const postTdcerCertificateRouteHandler: RouteHandler<
  typeof postTdcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
