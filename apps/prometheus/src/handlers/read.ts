import type { RouteHandler } from '@hono/zod-openapi'
import type { postReadRoute } from '../routes'

export const postReadRouteHandler: RouteHandler<typeof postReadRoute> = async (c) => {
  throw new Error('Not implemented')
}
