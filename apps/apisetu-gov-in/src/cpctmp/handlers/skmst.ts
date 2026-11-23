import type { RouteHandler } from '@hono/zod-openapi'
import type { postSkmstCertificateRoute } from '../routes'

export const postSkmstCertificateRouteHandler: RouteHandler<
  typeof postSkmstCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
