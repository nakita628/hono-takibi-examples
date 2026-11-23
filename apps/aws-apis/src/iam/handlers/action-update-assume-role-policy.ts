import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdateAssumeRolePolicyRoute,
  postActionUpdateAssumeRolePolicyRoute,
} from '../routes'

export const getActionUpdateAssumeRolePolicyRouteHandler: RouteHandler<
  typeof getActionUpdateAssumeRolePolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateAssumeRolePolicyRouteHandler: RouteHandler<
  typeof postActionUpdateAssumeRolePolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
