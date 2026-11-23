import type { RouteHandler } from '@hono/zod-openapi'
import type { postSvcerCertificateRoute } from '../routes'

export const postSvcerCertificateRouteHandler: RouteHandler<
  typeof postSvcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
