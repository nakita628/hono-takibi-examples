import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionEnableVpcClassicLinkRoute,
  postActionEnableVpcClassicLinkRoute,
} from '../routes'

export const getActionEnableVpcClassicLinkRouteHandler: RouteHandler<
  typeof getActionEnableVpcClassicLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionEnableVpcClassicLinkRouteHandler: RouteHandler<
  typeof postActionEnableVpcClassicLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}
