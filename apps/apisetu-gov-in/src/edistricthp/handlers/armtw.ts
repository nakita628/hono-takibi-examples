import type { RouteHandler } from '@hono/zod-openapi'
import type { postArmtwCertificateRoute } from '../routes'

export const postArmtwCertificateRouteHandler: RouteHandler<
  typeof postArmtwCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
