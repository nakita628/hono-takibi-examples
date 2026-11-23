import type { RouteHandler } from '@hono/zod-openapi'
import type { postCocerCertificateRoute } from '../routes'

export const postCocerCertificateRouteHandler: RouteHandler<
  typeof postCocerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
