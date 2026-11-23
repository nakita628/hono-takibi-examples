import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionReplaceNetworkAclEntryRoute,
  postActionReplaceNetworkAclEntryRoute,
} from '../routes'

export const getActionReplaceNetworkAclEntryRouteHandler: RouteHandler<
  typeof getActionReplaceNetworkAclEntryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionReplaceNetworkAclEntryRouteHandler: RouteHandler<
  typeof postActionReplaceNetworkAclEntryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
