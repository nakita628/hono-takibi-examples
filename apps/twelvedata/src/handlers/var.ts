import type { RouteHandler } from '@hono/zod-openapi'
import type { getVarRoute } from '../routes'

export const getVarRouteHandler: RouteHandler<typeof getVarRoute> = async (c) => {
  throw new Error('Not implemented')
}
