import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifySubnetAttributeRoute,
  postActionModifySubnetAttributeRoute,
} from '../routes'

export const getActionModifySubnetAttributeRouteHandler: RouteHandler<
  typeof getActionModifySubnetAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifySubnetAttributeRouteHandler: RouteHandler<
  typeof postActionModifySubnetAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
