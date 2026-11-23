import type { RouteHandler } from '@hono/zod-openapi'
import type { getAllocationsRoute } from '../routes'

export const getAllocationsRouteHandler: RouteHandler<typeof getAllocationsRoute> = async (c) => {
  throw new Error('Not implemented')
}
