import type { RouteHandler } from '@hono/zod-openapi'
import type { postEgipcCertificateRoute } from '../routes'

export const postEgipcCertificateRouteHandler: RouteHandler<
  typeof postEgipcCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
