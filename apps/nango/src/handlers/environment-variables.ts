import type { RouteHandler } from '@hono/zod-openapi'
import type { getEnvironmentVariablesRoute } from '../routes'

export const getEnvironmentVariablesRouteHandler: RouteHandler<
  typeof getEnvironmentVariablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
