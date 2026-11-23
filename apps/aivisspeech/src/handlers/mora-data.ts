import type { RouteHandler } from '@hono/zod-openapi'
import type { postMoraDataRoute } from '../routes'

export const postMoraDataRouteHandler: RouteHandler<typeof postMoraDataRoute> = async (c) => {
  throw new Error('Not implemented')
}
