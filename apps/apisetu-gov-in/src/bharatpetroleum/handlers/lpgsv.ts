import type { RouteHandler } from '@hono/zod-openapi'
import type { postLpgsvCertificateRoute } from '../routes'

export const postLpgsvCertificateRouteHandler: RouteHandler<
  typeof postLpgsvCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
