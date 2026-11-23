import type { RouteHandler } from '@hono/zod-openapi'
import type { postMiipcCertificateRoute } from '../routes'

export const postMiipcCertificateRouteHandler: RouteHandler<
  typeof postMiipcCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
