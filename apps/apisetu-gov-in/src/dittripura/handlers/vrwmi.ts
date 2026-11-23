import type { RouteHandler } from '@hono/zod-openapi'
import type { postVrwmiCertificateRoute } from '../routes'

export const postVrwmiCertificateRouteHandler: RouteHandler<
  typeof postVrwmiCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
