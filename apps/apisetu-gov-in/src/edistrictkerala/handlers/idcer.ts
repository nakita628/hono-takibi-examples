import type { RouteHandler } from '@hono/zod-openapi'
import type { postIdcerCertificateRoute } from '../routes'

export const postIdcerCertificateRouteHandler: RouteHandler<
  typeof postIdcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
