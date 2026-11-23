import type { RouteHandler } from '@hono/zod-openapi'
import type { getVarsRoute } from '../routes'

export const getVarsRouteHandler: RouteHandler<typeof getVarsRoute> = async (c) => {
  throw new Error('Not implemented')
}
