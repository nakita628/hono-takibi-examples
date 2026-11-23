import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUploadServerCertificateRoute,
  postActionUploadServerCertificateRoute,
} from '../routes'

export const getActionUploadServerCertificateRouteHandler: RouteHandler<
  typeof getActionUploadServerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUploadServerCertificateRouteHandler: RouteHandler<
  typeof postActionUploadServerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
