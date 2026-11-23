import type { RouteHandler } from '@hono/zod-openapi'
import type { postUploadTlsCertificateRoute } from '../routes'

export const postUploadTlsCertificateRouteHandler: RouteHandler<
  typeof postUploadTlsCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
