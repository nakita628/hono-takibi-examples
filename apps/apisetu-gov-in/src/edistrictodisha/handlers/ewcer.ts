import type { RouteHandler } from '@hono/zod-openapi'
import type { postEwcerCertificateRoute } from '../routes'

export const postEwcerCertificateRouteHandler: RouteHandler<
  typeof postEwcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
