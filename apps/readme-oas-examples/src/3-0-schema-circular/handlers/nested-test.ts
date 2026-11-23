import type { RouteHandler } from '@hono/zod-openapi'
import type { putNestedTestRoute } from '../routes'

export const putNestedTestRouteHandler: RouteHandler<typeof putNestedTestRoute> = async (c) => {
  throw new Error('Not implemented')
}
