import type { RouteHandler } from '@hono/zod-openapi'
import type { postLabrpCertificateRoute } from '../routes'

export const postLabrpCertificateRouteHandler: RouteHandler<
  typeof postLabrpCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
