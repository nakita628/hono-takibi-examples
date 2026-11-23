import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionReplaceNetworkAclAssociationRoute,
  postActionReplaceNetworkAclAssociationRoute,
} from '../routes'

export const getActionReplaceNetworkAclAssociationRouteHandler: RouteHandler<
  typeof getActionReplaceNetworkAclAssociationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionReplaceNetworkAclAssociationRouteHandler: RouteHandler<
  typeof postActionReplaceNetworkAclAssociationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
