import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionTerminateEnvironmentRoute,
  postActionTerminateEnvironmentRoute,
} from '../routes'

export const getActionTerminateEnvironmentRouteHandler: RouteHandler<
  typeof getActionTerminateEnvironmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionTerminateEnvironmentRouteHandler: RouteHandler<
  typeof postActionTerminateEnvironmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
