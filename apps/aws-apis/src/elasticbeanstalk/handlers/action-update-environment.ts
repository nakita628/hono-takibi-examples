import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionUpdateEnvironmentRoute, postActionUpdateEnvironmentRoute } from '../routes'

export const getActionUpdateEnvironmentRouteHandler: RouteHandler<
  typeof getActionUpdateEnvironmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateEnvironmentRouteHandler: RouteHandler<
  typeof postActionUpdateEnvironmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
