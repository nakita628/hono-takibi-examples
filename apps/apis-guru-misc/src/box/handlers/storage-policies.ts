import type { RouteHandler } from '@hono/zod-openapi'
import type { getStoragePoliciesRoute, getStoragePoliciesStoragePolicyIdRoute } from '../routes'

export const getStoragePoliciesRouteHandler: RouteHandler<typeof getStoragePoliciesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getStoragePoliciesStoragePolicyIdRouteHandler: RouteHandler<
  typeof getStoragePoliciesStoragePolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
