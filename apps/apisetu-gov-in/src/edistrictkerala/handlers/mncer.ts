import type { RouteHandler } from '@hono/zod-openapi'
import type { postMncerCertificateRoute } from '../routes'

export const postMncerCertificateRouteHandler: RouteHandler<
  typeof postMncerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
