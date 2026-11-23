import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAbortEnvironmentUpdateRoute,
  postActionAbortEnvironmentUpdateRoute,
} from '../routes'

export const getActionAbortEnvironmentUpdateRouteHandler: RouteHandler<
  typeof getActionAbortEnvironmentUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAbortEnvironmentUpdateRouteHandler: RouteHandler<
  typeof postActionAbortEnvironmentUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
