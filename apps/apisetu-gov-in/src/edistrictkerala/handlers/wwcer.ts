import type { RouteHandler } from '@hono/zod-openapi'
import type { postWwcerCertificateRoute } from '../routes'

export const postWwcerCertificateRouteHandler: RouteHandler<
  typeof postWwcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
