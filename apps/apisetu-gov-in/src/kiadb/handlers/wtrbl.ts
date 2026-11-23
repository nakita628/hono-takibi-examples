import type { RouteHandler } from '@hono/zod-openapi'
import type { postWtrblCertificateRoute } from '../routes'

export const postWtrblCertificateRouteHandler: RouteHandler<
  typeof postWtrblCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
