import type { RouteHandler } from '@hono/zod-openapi'
import type { getHeikinashicandlesRoute } from '../routes'

export const getHeikinashicandlesRouteHandler: RouteHandler<
  typeof getHeikinashicandlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
