import type { RouteHandler } from '@hono/zod-openapi'
import type { getAliasesRoute } from '../routes'

export const getAliasesRouteHandler: RouteHandler<typeof getAliasesRoute> = async (c) => {
  throw new Error('Not implemented')
}
