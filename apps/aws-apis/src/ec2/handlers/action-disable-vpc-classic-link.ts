import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDisableVpcClassicLinkRoute,
  postActionDisableVpcClassicLinkRoute,
} from '../routes'

export const getActionDisableVpcClassicLinkRouteHandler: RouteHandler<
  typeof getActionDisableVpcClassicLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisableVpcClassicLinkRouteHandler: RouteHandler<
  typeof postActionDisableVpcClassicLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}
