import type { RouteHandler } from '@hono/zod-openapi'
import type { putCircularRoute } from '../routes'

export const putCircularRouteHandler: RouteHandler<typeof putCircularRoute> = async (c) => {
  throw new Error('Not implemented')
}
