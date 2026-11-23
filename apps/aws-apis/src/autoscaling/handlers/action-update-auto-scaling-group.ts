import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdateAutoScalingGroupRoute,
  postActionUpdateAutoScalingGroupRoute,
} from '../routes'

export const getActionUpdateAutoScalingGroupRouteHandler: RouteHandler<
  typeof getActionUpdateAutoScalingGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateAutoScalingGroupRouteHandler: RouteHandler<
  typeof postActionUpdateAutoScalingGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
