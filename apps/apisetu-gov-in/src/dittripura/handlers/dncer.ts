import type { RouteHandler } from '@hono/zod-openapi'
import type { postDncerCertificateRoute } from '../routes'

export const postDncerCertificateRouteHandler: RouteHandler<
  typeof postDncerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
