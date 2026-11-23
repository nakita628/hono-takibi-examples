import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetDataProtectionPolicyRoute,
  postActionGetDataProtectionPolicyRoute,
} from '../routes'

export const getActionGetDataProtectionPolicyRouteHandler: RouteHandler<
  typeof getActionGetDataProtectionPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetDataProtectionPolicyRouteHandler: RouteHandler<
  typeof postActionGetDataProtectionPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
