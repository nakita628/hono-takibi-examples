import type { RouteHandler } from '@hono/zod-openapi'
import type { postTdlcsCertificateRoute } from '../routes'

export const postTdlcsCertificateRouteHandler: RouteHandler<
  typeof postTdlcsCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
