import type { RouteHandler } from '@hono/zod-openapi'
import type { postCripcCertificateRoute } from '../routes'

export const postCripcCertificateRouteHandler: RouteHandler<
  typeof postCripcCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
