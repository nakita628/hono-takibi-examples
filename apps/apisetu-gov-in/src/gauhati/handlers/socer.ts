import type { RouteHandler } from '@hono/zod-openapi'
import type { postSocerCertificateRoute } from '../routes'

export const postSocerCertificateRouteHandler: RouteHandler<
  typeof postSocerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
