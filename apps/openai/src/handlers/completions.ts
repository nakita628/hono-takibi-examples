import type { RouteHandler } from '@hono/zod-openapi'
import type { postCompletionsRoute } from '../routes'

export const postCompletionsRouteHandler: RouteHandler<typeof postCompletionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
