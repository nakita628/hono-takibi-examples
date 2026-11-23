import type { RouteHandler } from '@hono/zod-openapi'
import type { postBrowserBotRoute } from '../routes'

export const postBrowserBotRouteHandler: RouteHandler<typeof postBrowserBotRoute> = async (c) => {
  throw new Error('Not implemented')
}
