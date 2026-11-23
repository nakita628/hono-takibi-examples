import type { RouteHandler } from '@hono/zod-openapi'
import type { postSkcerCertificateRoute } from '../routes'

export const postSkcerCertificateRouteHandler: RouteHandler<
  typeof postSkcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
