import type { RouteHandler } from '@hono/zod-openapi'
import type { postChcerCertificateRoute } from '../routes'

export const postChcerCertificateRouteHandler: RouteHandler<
  typeof postChcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
