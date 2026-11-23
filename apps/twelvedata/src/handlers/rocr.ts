import type { RouteHandler } from '@hono/zod-openapi'
import type { getRocrRoute } from '../routes'

export const getRocrRouteHandler: RouteHandler<typeof getRocrRoute> = async (c) => {
  throw new Error('Not implemented')
}
