import type { RouteHandler } from '@hono/zod-openapi'
import type { getServerRoute, putServerRoute } from '../routes'

export const getServerRouteHandler: RouteHandler<typeof getServerRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putServerRouteHandler: RouteHandler<typeof putServerRoute> = async (c) => {
  throw new Error('Not implemented')
}
