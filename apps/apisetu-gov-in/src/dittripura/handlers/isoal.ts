import type { RouteHandler } from '@hono/zod-openapi'
import type { postIsoalCertificateRoute } from '../routes'

export const postIsoalCertificateRouteHandler: RouteHandler<
  typeof postIsoalCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
