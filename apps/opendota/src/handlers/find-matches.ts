import type { RouteHandler } from '@hono/zod-openapi'
import type { getFindMatchesRoute } from '../routes'

export const getFindMatchesRouteHandler: RouteHandler<typeof getFindMatchesRoute> = async (c) => {
  throw new Error('Not implemented')
}
