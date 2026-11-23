import type { RouteHandler } from '@hono/zod-openapi'
import type { postImcerCertificateRoute } from '../routes'

export const postImcerCertificateRouteHandler: RouteHandler<
  typeof postImcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
