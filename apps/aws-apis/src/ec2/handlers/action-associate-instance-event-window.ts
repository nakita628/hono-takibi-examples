import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAssociateInstanceEventWindowRoute,
  postActionAssociateInstanceEventWindowRoute,
} from '../routes'

export const getActionAssociateInstanceEventWindowRouteHandler: RouteHandler<
  typeof getActionAssociateInstanceEventWindowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAssociateInstanceEventWindowRouteHandler: RouteHandler<
  typeof postActionAssociateInstanceEventWindowRoute
> = async (c) => {
  throw new Error('Not implemented')
}
