import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreatePolicyVersionRoute,
  postActionCreatePolicyVersionRoute,
} from '../routes'

export const getActionCreatePolicyVersionRouteHandler: RouteHandler<
  typeof getActionCreatePolicyVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreatePolicyVersionRouteHandler: RouteHandler<
  typeof postActionCreatePolicyVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
