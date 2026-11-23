import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsAutocompletionsRoute } from '../routes'

export const postUsAutocompletionsRouteHandler: RouteHandler<
  typeof postUsAutocompletionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
