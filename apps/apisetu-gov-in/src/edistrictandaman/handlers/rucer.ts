import type { RouteHandler } from '@hono/zod-openapi'
import type { postRucerCertificateRoute } from '../routes'

export const postRucerCertificateRouteHandler: RouteHandler<
  typeof postRucerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
