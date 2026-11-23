import type { RouteHandler } from '@hono/zod-openapi'
import type { postPutGroupConfigurationRoute } from '../routes'

export const postPutGroupConfigurationRouteHandler: RouteHandler<
  typeof postPutGroupConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
