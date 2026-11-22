import type { RouteHandler } from '@hono/zod-openapi'
import type { postUserCreatePlatformRoute } from '../routes'

export const postUserCreatePlatformRouteHandler: RouteHandler<
  typeof postUserCreatePlatformRoute
> = async (c) => {
  throw new Error('Not implemented')
}
