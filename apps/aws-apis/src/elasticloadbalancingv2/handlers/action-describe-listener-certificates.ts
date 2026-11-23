import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeListenerCertificatesRoute,
  postActionDescribeListenerCertificatesRoute,
} from '../routes'

export const getActionDescribeListenerCertificatesRouteHandler: RouteHandler<
  typeof getActionDescribeListenerCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeListenerCertificatesRouteHandler: RouteHandler<
  typeof postActionDescribeListenerCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
