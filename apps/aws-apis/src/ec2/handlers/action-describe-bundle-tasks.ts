import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeBundleTasksRoute,
  postActionDescribeBundleTasksRoute,
} from '../routes'

export const getActionDescribeBundleTasksRouteHandler: RouteHandler<
  typeof getActionDescribeBundleTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeBundleTasksRouteHandler: RouteHandler<
  typeof postActionDescribeBundleTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
