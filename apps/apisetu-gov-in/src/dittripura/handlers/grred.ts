import type { RouteHandler } from '@hono/zod-openapi'
import type { postGrredCertificateRoute } from '../routes'

export const postGrredCertificateRouteHandler: RouteHandler<
  typeof postGrredCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
