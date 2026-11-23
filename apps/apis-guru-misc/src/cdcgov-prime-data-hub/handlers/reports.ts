import type { RouteHandler } from '@hono/zod-openapi'
import type { postReportsRoute } from '../routes'

export const postReportsRouteHandler: RouteHandler<typeof postReportsRoute> = async (c) => {
  throw new Error('Not implemented')
}
