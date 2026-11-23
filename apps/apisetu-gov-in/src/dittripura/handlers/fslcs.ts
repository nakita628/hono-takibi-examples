import type { RouteHandler } from '@hono/zod-openapi'
import type { postFslcsCertificateRoute } from '../routes'

export const postFslcsCertificateRouteHandler: RouteHandler<
  typeof postFslcsCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
