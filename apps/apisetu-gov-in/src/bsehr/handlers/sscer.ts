import type { RouteHandler } from '@hono/zod-openapi'
import type { postSscerCertificateRoute } from '../routes'

export const postSscerCertificateRouteHandler: RouteHandler<
  typeof postSscerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
