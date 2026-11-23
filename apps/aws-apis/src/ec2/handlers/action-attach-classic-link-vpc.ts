import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAttachClassicLinkVpcRoute,
  postActionAttachClassicLinkVpcRoute,
} from '../routes'

export const getActionAttachClassicLinkVpcRouteHandler: RouteHandler<
  typeof getActionAttachClassicLinkVpcRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAttachClassicLinkVpcRouteHandler: RouteHandler<
  typeof postActionAttachClassicLinkVpcRoute
> = async (c) => {
  throw new Error('Not implemented')
}
