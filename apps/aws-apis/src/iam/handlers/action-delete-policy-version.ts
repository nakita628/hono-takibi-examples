import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeletePolicyVersionRoute,
  postActionDeletePolicyVersionRoute,
} from '../routes'

export const getActionDeletePolicyVersionRouteHandler: RouteHandler<
  typeof getActionDeletePolicyVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeletePolicyVersionRouteHandler: RouteHandler<
  typeof postActionDeletePolicyVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
