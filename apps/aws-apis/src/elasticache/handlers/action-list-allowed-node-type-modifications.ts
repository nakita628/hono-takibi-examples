import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListAllowedNodeTypeModificationsRoute,
  postActionListAllowedNodeTypeModificationsRoute,
} from '../routes'

export const getActionListAllowedNodeTypeModificationsRouteHandler: RouteHandler<
  typeof getActionListAllowedNodeTypeModificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListAllowedNodeTypeModificationsRouteHandler: RouteHandler<
  typeof postActionListAllowedNodeTypeModificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
