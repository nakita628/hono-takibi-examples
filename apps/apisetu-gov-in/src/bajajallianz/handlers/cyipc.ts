import type { RouteHandler } from '@hono/zod-openapi'
import type { postCyipcCertificateRoute } from '../routes'

export const postCyipcCertificateRouteHandler: RouteHandler<
  typeof postCyipcCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
