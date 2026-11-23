import type { RouteHandler } from '@hono/zod-openapi'
import type { postObcerCertificateRoute } from '../routes'

export const postObcerCertificateRouteHandler: RouteHandler<
  typeof postObcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
