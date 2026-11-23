import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteServerCertificateRoute,
  postActionDeleteServerCertificateRoute,
} from '../routes'

export const getActionDeleteServerCertificateRouteHandler: RouteHandler<
  typeof getActionDeleteServerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteServerCertificateRouteHandler: RouteHandler<
  typeof postActionDeleteServerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
