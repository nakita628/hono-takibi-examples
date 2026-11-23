import type { RouteHandler } from '@hono/zod-openapi'
import type { getMidpointRoute } from '../routes'

export const getMidpointRouteHandler: RouteHandler<typeof getMidpointRoute> = async (c) => {
  throw new Error('Not implemented')
}
