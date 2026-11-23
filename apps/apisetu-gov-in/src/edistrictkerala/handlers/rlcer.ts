import type { RouteHandler } from '@hono/zod-openapi'
import type { postRlcerCertificateRoute } from '../routes'

export const postRlcerCertificateRouteHandler: RouteHandler<
  typeof postRlcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
