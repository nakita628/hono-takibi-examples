import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribePlatformVersionRoute,
  postActionDescribePlatformVersionRoute,
} from '../routes'

export const getActionDescribePlatformVersionRouteHandler: RouteHandler<
  typeof getActionDescribePlatformVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribePlatformVersionRouteHandler: RouteHandler<
  typeof postActionDescribePlatformVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
