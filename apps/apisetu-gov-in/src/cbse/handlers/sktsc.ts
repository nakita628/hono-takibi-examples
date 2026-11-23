import type { RouteHandler } from '@hono/zod-openapi'
import type { postSktscCertificateRoute } from '../routes'

export const postSktscCertificateRouteHandler: RouteHandler<
  typeof postSktscCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
