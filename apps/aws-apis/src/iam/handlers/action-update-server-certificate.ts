import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdateServerCertificateRoute,
  postActionUpdateServerCertificateRoute,
} from '../routes'

export const getActionUpdateServerCertificateRouteHandler: RouteHandler<
  typeof getActionUpdateServerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateServerCertificateRouteHandler: RouteHandler<
  typeof postActionUpdateServerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
