import type { RouteHandler } from '@hono/zod-openapi'
import type { postPmjayCertificateRoute } from '../routes'

export const postPmjayCertificateRouteHandler: RouteHandler<
  typeof postPmjayCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
