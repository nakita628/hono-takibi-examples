import type { RouteHandler } from '@hono/zod-openapi'
import type { getModulesRoute } from '../routes'

export const getModulesRouteHandler: RouteHandler<typeof getModulesRoute> = async (c) => {
  throw new Error('Not implemented')
}
