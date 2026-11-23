import type { RouteHandler } from '@hono/zod-openapi'
import type { postBacerCertificateRoute } from '../routes'

export const postBacerCertificateRouteHandler: RouteHandler<
  typeof postBacerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
