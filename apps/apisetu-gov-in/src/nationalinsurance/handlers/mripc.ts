import type { RouteHandler } from '@hono/zod-openapi'
import type { postMripcCertificateRoute } from '../routes'

export const postMripcCertificateRouteHandler: RouteHandler<
  typeof postMripcCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
