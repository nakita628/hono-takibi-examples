import type { RouteHandler } from '@hono/zod-openapi'
import type { putBetIdCashinRoute } from '../routes'

export const putBetIdCashinRouteHandler: RouteHandler<typeof putBetIdCashinRoute> = async (c) => {
  throw new Error('Not implemented')
}
