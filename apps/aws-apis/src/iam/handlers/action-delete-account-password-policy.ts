import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteAccountPasswordPolicyRoute,
  postActionDeleteAccountPasswordPolicyRoute,
} from '../routes'

export const getActionDeleteAccountPasswordPolicyRouteHandler: RouteHandler<
  typeof getActionDeleteAccountPasswordPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteAccountPasswordPolicyRouteHandler: RouteHandler<
  typeof postActionDeleteAccountPasswordPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
