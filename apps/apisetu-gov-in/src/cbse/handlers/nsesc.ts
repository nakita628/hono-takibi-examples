import type { RouteHandler } from '@hono/zod-openapi'
import type { postNsescCertificateRoute } from '../routes'

export const postNsescCertificateRouteHandler: RouteHandler<
  typeof postNsescCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
