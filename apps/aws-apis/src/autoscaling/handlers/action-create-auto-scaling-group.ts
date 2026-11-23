import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateAutoScalingGroupRoute,
  postActionCreateAutoScalingGroupRoute,
} from '../routes'

export const getActionCreateAutoScalingGroupRouteHandler: RouteHandler<
  typeof getActionCreateAutoScalingGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateAutoScalingGroupRouteHandler: RouteHandler<
  typeof postActionCreateAutoScalingGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
