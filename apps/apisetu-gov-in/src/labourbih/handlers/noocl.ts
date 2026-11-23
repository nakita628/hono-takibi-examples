import type { RouteHandler } from '@hono/zod-openapi'
import type { postNooclCertificateRoute } from '../routes'

export const postNooclCertificateRouteHandler: RouteHandler<
  typeof postNooclCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
