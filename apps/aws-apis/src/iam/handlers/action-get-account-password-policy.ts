import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetAccountPasswordPolicyRoute,
  postActionGetAccountPasswordPolicyRoute,
} from '../routes'

export const getActionGetAccountPasswordPolicyRouteHandler: RouteHandler<
  typeof getActionGetAccountPasswordPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetAccountPasswordPolicyRouteHandler: RouteHandler<
  typeof postActionGetAccountPasswordPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
