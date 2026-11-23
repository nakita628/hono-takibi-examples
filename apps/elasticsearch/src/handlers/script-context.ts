import type { RouteHandler } from '@hono/zod-openapi'
import type { getScriptContextRoute } from '../routes'

export const getScriptContextRouteHandler: RouteHandler<typeof getScriptContextRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
