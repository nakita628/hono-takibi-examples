import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateEnvironmentRoute, postActionCreateEnvironmentRoute } from '../routes'

export const getActionCreateEnvironmentRouteHandler: RouteHandler<
  typeof getActionCreateEnvironmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateEnvironmentRouteHandler: RouteHandler<
  typeof postActionCreateEnvironmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
