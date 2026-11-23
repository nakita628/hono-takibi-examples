import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetContextKeysForCustomPolicyRoute,
  postActionGetContextKeysForCustomPolicyRoute,
} from '../routes'

export const getActionGetContextKeysForCustomPolicyRouteHandler: RouteHandler<
  typeof getActionGetContextKeysForCustomPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetContextKeysForCustomPolicyRouteHandler: RouteHandler<
  typeof postActionGetContextKeysForCustomPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
