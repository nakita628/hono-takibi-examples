import type { RouteHandler } from '@hono/zod-openapi'
import type { getBearerRoute } from '../routes'

export const getBearerRouteHandler: RouteHandler<typeof getBearerRoute> = async (c) => {
  throw new Error('Not implemented')
}
