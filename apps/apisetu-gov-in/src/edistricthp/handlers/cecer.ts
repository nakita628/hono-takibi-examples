import type { RouteHandler } from '@hono/zod-openapi'
import type { postCecerCertificateRoute } from '../routes'

export const postCecerCertificateRouteHandler: RouteHandler<
  typeof postCecerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
