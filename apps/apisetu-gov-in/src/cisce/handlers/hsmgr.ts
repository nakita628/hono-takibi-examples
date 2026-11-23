import type { RouteHandler } from '@hono/zod-openapi'
import type { postHsmgrCertificateRoute } from '../routes'

export const postHsmgrCertificateRouteHandler: RouteHandler<
  typeof postHsmgrCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
