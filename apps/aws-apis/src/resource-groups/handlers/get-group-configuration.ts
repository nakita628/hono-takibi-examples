import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetGroupConfigurationRoute } from '../routes'

export const postGetGroupConfigurationRouteHandler: RouteHandler<
  typeof postGetGroupConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
