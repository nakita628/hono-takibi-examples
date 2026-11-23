import type { RouteHandler } from '@hono/zod-openapi'
import type { getBotSessionsRoute } from '../routes'

export const getBotSessionsRouteHandler: RouteHandler<typeof getBotSessionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
