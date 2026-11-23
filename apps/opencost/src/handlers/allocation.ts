import type { RouteHandler } from '@hono/zod-openapi'
import type { getAllocationRoute } from '../routes'

export const getAllocationRouteHandler: RouteHandler<typeof getAllocationRoute> = async (c) => {
  throw new Error('Not implemented')
}
