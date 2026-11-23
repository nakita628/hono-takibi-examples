import type { RouteHandler } from '@hono/zod-openapi'
import type { getDrivesRoute } from '../routes'

export const getDrivesRouteHandler: RouteHandler<typeof getDrivesRoute> = async (c) => {
  throw new Error('Not implemented')
}
