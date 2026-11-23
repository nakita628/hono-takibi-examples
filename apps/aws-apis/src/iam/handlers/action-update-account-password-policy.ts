import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdateAccountPasswordPolicyRoute,
  postActionUpdateAccountPasswordPolicyRoute,
} from '../routes'

export const getActionUpdateAccountPasswordPolicyRouteHandler: RouteHandler<
  typeof getActionUpdateAccountPasswordPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateAccountPasswordPolicyRouteHandler: RouteHandler<
  typeof postActionUpdateAccountPasswordPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
