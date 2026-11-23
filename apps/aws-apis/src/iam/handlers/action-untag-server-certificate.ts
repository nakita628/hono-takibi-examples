import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUntagServerCertificateRoute,
  postActionUntagServerCertificateRoute,
} from '../routes'

export const getActionUntagServerCertificateRouteHandler: RouteHandler<
  typeof getActionUntagServerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUntagServerCertificateRouteHandler: RouteHandler<
  typeof postActionUntagServerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
