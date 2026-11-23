import type { RouteHandler } from '@hono/zod-openapi'
import type { postAliasesRoute } from '../routes'

export const postAliasesRouteHandler: RouteHandler<typeof postAliasesRoute> = async (c) => {
  throw new Error('Not implemented')
}
