import type { RouteHandler } from '@hono/zod-openapi'
import type { postV11ProjectsRoute } from '../routes'

export const postV11ProjectsRouteHandler: RouteHandler<typeof postV11ProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}
