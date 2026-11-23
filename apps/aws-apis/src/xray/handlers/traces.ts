import type { RouteHandler } from '@hono/zod-openapi'
import type { postTracesRoute } from '../routes'

export const postTracesRouteHandler: RouteHandler<typeof postTracesRoute> = async (c) => {
  throw new Error('Not implemented')
}
