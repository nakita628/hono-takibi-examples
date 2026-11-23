import type { RouteHandler } from '@hono/zod-openapi'
import type { postGraphsListRoute } from '../routes'

export const postGraphsListRouteHandler: RouteHandler<typeof postGraphsListRoute> = async (c) => {
  throw new Error('Not implemented')
}
