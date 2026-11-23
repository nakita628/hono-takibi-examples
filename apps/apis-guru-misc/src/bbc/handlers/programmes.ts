import type { RouteHandler } from '@hono/zod-openapi'
import type { getProgrammesRoute } from '../routes'

export const getProgrammesRouteHandler: RouteHandler<typeof getProgrammesRoute> = async (c) => {
  throw new Error('Not implemented')
}
