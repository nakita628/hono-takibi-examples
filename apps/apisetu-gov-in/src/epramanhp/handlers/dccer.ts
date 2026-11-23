import type { RouteHandler } from '@hono/zod-openapi'
import type { postDccerCertificateRoute } from '../routes'

export const postDccerCertificateRouteHandler: RouteHandler<
  typeof postDccerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
