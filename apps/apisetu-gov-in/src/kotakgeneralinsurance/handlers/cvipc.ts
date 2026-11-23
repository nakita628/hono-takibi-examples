import type { RouteHandler } from '@hono/zod-openapi'
import type { postCvipcCertificateRoute } from '../routes'

export const postCvipcCertificateRouteHandler: RouteHandler<
  typeof postCvipcCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
