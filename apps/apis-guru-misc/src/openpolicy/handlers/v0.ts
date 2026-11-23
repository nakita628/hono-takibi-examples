import type { RouteHandler } from '@hono/zod-openapi'
import type { postV0DataPathRoute } from '../routes'

export const postV0DataPathRouteHandler: RouteHandler<typeof postV0DataPathRoute> = async (c) => {
  throw new Error('Not implemented')
}
