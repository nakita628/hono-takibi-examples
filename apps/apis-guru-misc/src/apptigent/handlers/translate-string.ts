import type { RouteHandler } from '@hono/zod-openapi'
import type { postTranslateStringRoute } from '../routes'

export const postTranslateStringRouteHandler: RouteHandler<
  typeof postTranslateStringRoute
> = async (c) => {
  throw new Error('Not implemented')
}
