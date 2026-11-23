import type { RouteHandler } from '@hono/zod-openapi'
import type { postLpgtvCertificateRoute } from '../routes'

export const postLpgtvCertificateRouteHandler: RouteHandler<
  typeof postLpgtvCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
