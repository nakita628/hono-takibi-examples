import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSetDefaultPolicyVersionRoute,
  postActionSetDefaultPolicyVersionRoute,
} from '../routes'

export const getActionSetDefaultPolicyVersionRouteHandler: RouteHandler<
  typeof getActionSetDefaultPolicyVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetDefaultPolicyVersionRouteHandler: RouteHandler<
  typeof postActionSetDefaultPolicyVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
