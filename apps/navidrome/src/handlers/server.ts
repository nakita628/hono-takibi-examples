import type { RouteHandler } from '@hono/zod-openapi'
import type { getServerRoute } from '../routes'

export const getServerRouteHandler: RouteHandler<typeof getServerRoute> = async (c) => {
  throw new Error('Not implemented')
}
