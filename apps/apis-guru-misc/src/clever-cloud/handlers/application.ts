import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApplicationAppIdEnvironmentRoute,
  putApplicationAppIdEnvironmentRoute,
} from '../routes'

export const getApplicationAppIdEnvironmentRouteHandler: RouteHandler<
  typeof getApplicationAppIdEnvironmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApplicationAppIdEnvironmentRouteHandler: RouteHandler<
  typeof putApplicationAppIdEnvironmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
