import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDetachClassicLinkVpcRoute,
  postActionDetachClassicLinkVpcRoute,
} from '../routes'

export const getActionDetachClassicLinkVpcRouteHandler: RouteHandler<
  typeof getActionDetachClassicLinkVpcRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDetachClassicLinkVpcRouteHandler: RouteHandler<
  typeof postActionDetachClassicLinkVpcRoute
> = async (c) => {
  throw new Error('Not implemented')
}
