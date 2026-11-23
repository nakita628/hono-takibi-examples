import type { RouteHandler } from '@hono/zod-openapi'
import type { postIticrCertificateRoute } from '../routes'

export const postIticrCertificateRouteHandler: RouteHandler<
  typeof postIticrCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
