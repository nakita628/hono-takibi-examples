import type { RouteHandler } from '@hono/zod-openapi'
import type { postFitcerCertificateRoute } from '../routes'

export const postFitcerCertificateRouteHandler: RouteHandler<
  typeof postFitcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
