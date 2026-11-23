import type { RouteHandler } from '@hono/zod-openapi'
import type { postMalcsCertificateRoute } from '../routes'

export const postMalcsCertificateRouteHandler: RouteHandler<
  typeof postMalcsCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
