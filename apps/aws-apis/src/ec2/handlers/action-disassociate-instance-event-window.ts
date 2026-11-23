import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDisassociateInstanceEventWindowRoute,
  postActionDisassociateInstanceEventWindowRoute,
} from '../routes'

export const getActionDisassociateInstanceEventWindowRouteHandler: RouteHandler<
  typeof getActionDisassociateInstanceEventWindowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisassociateInstanceEventWindowRouteHandler: RouteHandler<
  typeof postActionDisassociateInstanceEventWindowRoute
> = async (c) => {
  throw new Error('Not implemented')
}
