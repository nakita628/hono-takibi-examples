import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetServerCertificateRoute,
  postActionGetServerCertificateRoute,
} from '../routes'

export const getActionGetServerCertificateRouteHandler: RouteHandler<
  typeof getActionGetServerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetServerCertificateRouteHandler: RouteHandler<
  typeof postActionGetServerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
