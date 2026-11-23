import type { RouteHandler } from '@hono/zod-openapi'
import type { postRdcerCertificateRoute } from '../routes'

export const postRdcerCertificateRouteHandler: RouteHandler<
  typeof postRdcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
