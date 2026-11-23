import type { RouteHandler } from '@hono/zod-openapi'
import type { getScriptsConfigRoute } from '../routes'

export const getScriptsConfigRouteHandler: RouteHandler<typeof getScriptsConfigRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
