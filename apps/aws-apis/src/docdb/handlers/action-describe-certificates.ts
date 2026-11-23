import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeCertificatesRoute,
  postActionDescribeCertificatesRoute,
} from '../routes'

export const getActionDescribeCertificatesRouteHandler: RouteHandler<
  typeof getActionDescribeCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeCertificatesRouteHandler: RouteHandler<
  typeof postActionDescribeCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
