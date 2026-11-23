import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteHsmClientCertificateRoute,
  postActionDeleteHsmClientCertificateRoute,
} from '../routes'

export const getActionDeleteHsmClientCertificateRouteHandler: RouteHandler<
  typeof getActionDeleteHsmClientCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteHsmClientCertificateRouteHandler: RouteHandler<
  typeof postActionDeleteHsmClientCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
