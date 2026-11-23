import type { RouteHandler } from '@hono/zod-openapi'
import type { postVochseCertificateRoute } from '../routes'

export const postVochseCertificateRouteHandler: RouteHandler<
  typeof postVochseCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
