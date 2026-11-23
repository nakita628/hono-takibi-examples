import type { RouteHandler } from '@hono/zod-openapi'
import type { postVlcerCertificateRoute } from '../routes'

export const postVlcerCertificateRouteHandler: RouteHandler<
  typeof postVlcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
