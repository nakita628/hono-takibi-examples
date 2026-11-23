import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionPutDataProtectionPolicyRoute,
  postActionPutDataProtectionPolicyRoute,
} from '../routes'

export const getActionPutDataProtectionPolicyRouteHandler: RouteHandler<
  typeof getActionPutDataProtectionPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPutDataProtectionPolicyRouteHandler: RouteHandler<
  typeof postActionPutDataProtectionPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
