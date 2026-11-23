import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeFastLaunchImagesRoute,
  postActionDescribeFastLaunchImagesRoute,
} from '../routes'

export const getActionDescribeFastLaunchImagesRouteHandler: RouteHandler<
  typeof getActionDescribeFastLaunchImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeFastLaunchImagesRouteHandler: RouteHandler<
  typeof postActionDescribeFastLaunchImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
