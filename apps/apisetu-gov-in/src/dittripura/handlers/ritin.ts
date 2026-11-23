import type { RouteHandler } from '@hono/zod-openapi'
import type { postRitinCertificateRoute } from '../routes'

export const postRitinCertificateRouteHandler: RouteHandler<
  typeof postRitinCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
