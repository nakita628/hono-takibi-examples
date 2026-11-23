import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSimulateCustomPolicyRoute,
  postActionSimulateCustomPolicyRoute,
} from '../routes'

export const getActionSimulateCustomPolicyRouteHandler: RouteHandler<
  typeof getActionSimulateCustomPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSimulateCustomPolicyRouteHandler: RouteHandler<
  typeof postActionSimulateCustomPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
