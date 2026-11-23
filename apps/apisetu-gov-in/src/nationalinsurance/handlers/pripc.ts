import type { RouteHandler } from '@hono/zod-openapi'
import type { postPripcCertificateRoute } from '../routes'

export const postPripcCertificateRouteHandler: RouteHandler<
  typeof postPripcCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
