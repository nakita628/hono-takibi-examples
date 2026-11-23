import type { RouteHandler } from '@hono/zod-openapi'
import type { getChangesRoute } from '../routes'

export const getChangesRouteHandler: RouteHandler<typeof getChangesRoute> = async (c) => {
  throw new Error('Not implemented')
}
