import type { RouteHandler } from '@hono/zod-openapi'
import type { getSupertrendHeikinashicandlesRoute } from '../routes'

export const getSupertrendHeikinashicandlesRouteHandler: RouteHandler<
  typeof getSupertrendHeikinashicandlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
