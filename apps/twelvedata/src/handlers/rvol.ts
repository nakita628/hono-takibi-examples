import type { RouteHandler } from '@hono/zod-openapi'
import type { getRvolRoute } from '../routes'

export const getRvolRouteHandler: RouteHandler<typeof getRvolRoute> = async (c) => {
  throw new Error('Not implemented')
}
