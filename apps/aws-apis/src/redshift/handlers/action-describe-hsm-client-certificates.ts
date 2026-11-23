import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeHsmClientCertificatesRoute,
  postActionDescribeHsmClientCertificatesRoute,
} from '../routes'

export const getActionDescribeHsmClientCertificatesRouteHandler: RouteHandler<
  typeof getActionDescribeHsmClientCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeHsmClientCertificatesRouteHandler: RouteHandler<
  typeof postActionDescribeHsmClientCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
