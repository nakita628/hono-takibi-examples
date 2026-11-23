import type { RouteHandler } from '@hono/zod-openapi'
import type { postCoprgCertificateRoute } from '../routes'

export const postCoprgCertificateRouteHandler: RouteHandler<
  typeof postCoprgCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
