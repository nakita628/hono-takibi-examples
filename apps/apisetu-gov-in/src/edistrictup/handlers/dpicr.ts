import type { RouteHandler } from '@hono/zod-openapi'
import type { postDpicrCertificateRoute } from '../routes'

export const postDpicrCertificateRouteHandler: RouteHandler<
  typeof postDpicrCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
