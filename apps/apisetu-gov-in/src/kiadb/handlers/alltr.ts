import type { RouteHandler } from '@hono/zod-openapi'
import type { postAlltrCertificateRoute } from '../routes'

export const postAlltrCertificateRouteHandler: RouteHandler<
  typeof postAlltrCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
