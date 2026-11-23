import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetContextKeysForPrincipalPolicyRoute,
  postActionGetContextKeysForPrincipalPolicyRoute,
} from '../routes'

export const getActionGetContextKeysForPrincipalPolicyRouteHandler: RouteHandler<
  typeof getActionGetContextKeysForPrincipalPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetContextKeysForPrincipalPolicyRouteHandler: RouteHandler<
  typeof postActionGetContextKeysForPrincipalPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
