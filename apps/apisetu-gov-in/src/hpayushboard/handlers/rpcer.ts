import type { RouteHandler } from '@hono/zod-openapi'
import type { postRpcerCertificateRoute } from '../routes'

export const postRpcerCertificateRouteHandler: RouteHandler<
  typeof postRpcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
