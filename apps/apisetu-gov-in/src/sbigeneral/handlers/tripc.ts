import type { RouteHandler } from '@hono/zod-openapi'
import type { postTripcCertificateRoute } from '../routes'

export const postTripcCertificateRouteHandler: RouteHandler<
  typeof postTripcCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
