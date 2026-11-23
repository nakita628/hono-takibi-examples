import type { RouteHandler } from '@hono/zod-openapi'
import type { postNtmksCertificateRoute } from '../routes'

export const postNtmksCertificateRouteHandler: RouteHandler<
  typeof postNtmksCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
