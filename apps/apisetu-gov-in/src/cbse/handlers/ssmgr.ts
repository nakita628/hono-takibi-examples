import type { RouteHandler } from '@hono/zod-openapi'
import type { postSsmgrCertificateRoute } from '../routes'

export const postSsmgrCertificateRouteHandler: RouteHandler<
  typeof postSsmgrCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
