import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUploadSigningCertificateRoute,
  postActionUploadSigningCertificateRoute,
} from '../routes'

export const getActionUploadSigningCertificateRouteHandler: RouteHandler<
  typeof getActionUploadSigningCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUploadSigningCertificateRouteHandler: RouteHandler<
  typeof postActionUploadSigningCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
