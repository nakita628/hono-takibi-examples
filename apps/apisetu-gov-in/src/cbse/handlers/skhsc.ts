import type { RouteHandler } from '@hono/zod-openapi'
import type { postSkhscCertificateRoute } from '../routes'

export const postSkhscCertificateRouteHandler: RouteHandler<
  typeof postSkhscCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
