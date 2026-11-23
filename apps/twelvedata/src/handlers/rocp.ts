import type { RouteHandler } from '@hono/zod-openapi'
import type { getRocpRoute } from '../routes'

export const getRocpRouteHandler: RouteHandler<typeof getRocpRoute> = async (c) => {
  throw new Error('Not implemented')
}
