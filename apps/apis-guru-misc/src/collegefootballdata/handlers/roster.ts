import type { RouteHandler } from '@hono/zod-openapi'
import type { getRosterRoute } from '../routes'

export const getRosterRouteHandler: RouteHandler<typeof getRosterRoute> = async (c) => {
  throw new Error('Not implemented')
}
