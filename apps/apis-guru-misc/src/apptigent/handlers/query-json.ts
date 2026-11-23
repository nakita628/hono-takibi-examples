import type { RouteHandler } from '@hono/zod-openapi'
import type { postQueryJSONRoute } from '../routes'

export const postQueryJSONRouteHandler: RouteHandler<typeof postQueryJSONRoute> = async (c) => {
  throw new Error('Not implemented')
}
