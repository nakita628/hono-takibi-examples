import type { RouteHandler } from '@hono/zod-openapi'
import type { postCmcerCertificateRoute } from '../routes'

export const postCmcerCertificateRouteHandler: RouteHandler<
  typeof postCmcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
