import type { RouteHandler } from '@hono/zod-openapi'
import type { postDelcsCertificateRoute } from '../routes'

export const postDelcsCertificateRouteHandler: RouteHandler<
  typeof postDelcsCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
