import type { RouteHandler } from '@hono/zod-openapi'
import type { postPodocCertificateRoute } from '../routes'

export const postPodocCertificateRouteHandler: RouteHandler<
  typeof postPodocCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
