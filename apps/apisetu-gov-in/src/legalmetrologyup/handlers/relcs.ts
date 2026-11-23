import type { RouteHandler } from '@hono/zod-openapi'
import type { postRelcsCertificateRoute } from '../routes'

export const postRelcsCertificateRouteHandler: RouteHandler<
  typeof postRelcsCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
