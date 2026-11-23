import type { RouteHandler } from '@hono/zod-openapi'
import type { postDgcerCertificateRoute } from '../routes'

export const postDgcerCertificateRouteHandler: RouteHandler<
  typeof postDgcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
