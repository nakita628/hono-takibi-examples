import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateNetworkAclEntryRoute,
  postActionCreateNetworkAclEntryRoute,
} from '../routes'

export const getActionCreateNetworkAclEntryRouteHandler: RouteHandler<
  typeof getActionCreateNetworkAclEntryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateNetworkAclEntryRouteHandler: RouteHandler<
  typeof postActionCreateNetworkAclEntryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
