import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsersMeRoute } from '../routes'

export const getUsersMeRouteHandler: RouteHandler<typeof getUsersMeRoute> = async (c) => {
  throw new Error('Not implemented')
}
