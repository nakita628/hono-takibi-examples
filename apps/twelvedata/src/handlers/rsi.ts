import type { RouteHandler } from '@hono/zod-openapi'
import type { getRsiRoute } from '../routes'

export const getRsiRouteHandler: RouteHandler<typeof getRsiRoute> = async (c) => {
  throw new Error('Not implemented')
}
