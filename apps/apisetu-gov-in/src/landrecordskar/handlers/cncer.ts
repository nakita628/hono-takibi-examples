import type { RouteHandler } from '@hono/zod-openapi'
import type { postCncerCertificateRoute } from '../routes'

export const postCncerCertificateRouteHandler: RouteHandler<
  typeof postCncerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
