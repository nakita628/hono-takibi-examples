import type { RouteHandler } from '@hono/zod-openapi'
import type { postApptuCertificateRoute } from '../routes'

export const postApptuCertificateRouteHandler: RouteHandler<
  typeof postApptuCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
