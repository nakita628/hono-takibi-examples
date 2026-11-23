import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListEntitiesForPolicyRoute,
  postActionListEntitiesForPolicyRoute,
} from '../routes'

export const getActionListEntitiesForPolicyRouteHandler: RouteHandler<
  typeof getActionListEntitiesForPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListEntitiesForPolicyRouteHandler: RouteHandler<
  typeof postActionListEntitiesForPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
