import type { RouteHandler } from '@hono/zod-openapi'
import type { postV1VehiclesRoute } from '../routes'

export const postV1VehiclesRouteHandler: RouteHandler<typeof postV1VehiclesRoute> = async (c) => {
  throw new Error('Not implemented')
}
