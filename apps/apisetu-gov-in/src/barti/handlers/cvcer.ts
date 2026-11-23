import type { RouteHandler } from '@hono/zod-openapi'
import type { postCvcerCertificateRoute } from '../routes'

export const postCvcerCertificateRouteHandler: RouteHandler<
  typeof postCvcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
