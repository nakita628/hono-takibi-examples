import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionTagServerCertificateRoute,
  postActionTagServerCertificateRoute,
} from '../routes'

export const getActionTagServerCertificateRouteHandler: RouteHandler<
  typeof getActionTagServerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionTagServerCertificateRouteHandler: RouteHandler<
  typeof postActionTagServerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
