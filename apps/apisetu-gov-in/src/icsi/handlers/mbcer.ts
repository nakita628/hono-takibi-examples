import type { RouteHandler } from '@hono/zod-openapi'
import type { postMbcerCertificateRoute } from '../routes'

export const postMbcerCertificateRouteHandler: RouteHandler<
  typeof postMbcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
