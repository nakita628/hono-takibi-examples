import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteAutoScalingGroupRoute,
  postActionDeleteAutoScalingGroupRoute,
} from '../routes'

export const getActionDeleteAutoScalingGroupRouteHandler: RouteHandler<
  typeof getActionDeleteAutoScalingGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteAutoScalingGroupRouteHandler: RouteHandler<
  typeof postActionDeleteAutoScalingGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
