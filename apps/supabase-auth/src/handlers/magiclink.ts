import type { RouteHandler } from '@hono/zod-openapi'
import type { postMagiclinkRoute } from '../routes'

export const postMagiclinkRouteHandler: RouteHandler<typeof postMagiclinkRoute> = async (c) => {
  throw new Error('Not implemented')
}
