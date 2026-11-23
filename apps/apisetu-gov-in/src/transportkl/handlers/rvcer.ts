import type { RouteHandler } from '@hono/zod-openapi'
import type { postRvcerCertificateRoute } from '../routes'

export const postRvcerCertificateRouteHandler: RouteHandler<
  typeof postRvcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
