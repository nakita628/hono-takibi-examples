import type { RouteHandler } from '@hono/zod-openapi'
import type { postTwipcCertificateRoute } from '../routes'

export const postTwipcCertificateRouteHandler: RouteHandler<
  typeof postTwipcCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
