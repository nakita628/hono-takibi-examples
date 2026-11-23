import type { RouteHandler } from '@hono/zod-openapi'
import type { postRor1bCertificateRoute } from '../routes'

export const postRor1bCertificateRouteHandler: RouteHandler<
  typeof postRor1bCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
