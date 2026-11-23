import type { RouteHandler } from '@hono/zod-openapi'
import type { postMpkbyCertificateRoute } from '../routes'

export const postMpkbyCertificateRouteHandler: RouteHandler<
  typeof postMpkbyCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
