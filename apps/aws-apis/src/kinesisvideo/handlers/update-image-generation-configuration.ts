import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateImageGenerationConfigurationRoute } from '../routes'

export const postUpdateImageGenerationConfigurationRouteHandler: RouteHandler<
  typeof postUpdateImageGenerationConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
