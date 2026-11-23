import type { RouteHandler } from '@hono/zod-openapi'
import type { getSummariesImagetagsRoute } from '../routes'

export const getSummariesImagetagsRouteHandler: RouteHandler<
  typeof getSummariesImagetagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
