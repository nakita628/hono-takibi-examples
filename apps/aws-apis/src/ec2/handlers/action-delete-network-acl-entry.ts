import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteNetworkAclEntryRoute,
  postActionDeleteNetworkAclEntryRoute,
} from '../routes'

export const getActionDeleteNetworkAclEntryRouteHandler: RouteHandler<
  typeof getActionDeleteNetworkAclEntryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteNetworkAclEntryRouteHandler: RouteHandler<
  typeof postActionDeleteNetworkAclEntryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
