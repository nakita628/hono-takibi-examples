import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionTerminateInstanceInAutoScalingGroupRoute,
  postActionTerminateInstanceInAutoScalingGroupRoute,
} from '../routes'

export const getActionTerminateInstanceInAutoScalingGroupRouteHandler: RouteHandler<
  typeof getActionTerminateInstanceInAutoScalingGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionTerminateInstanceInAutoScalingGroupRouteHandler: RouteHandler<
  typeof postActionTerminateInstanceInAutoScalingGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
