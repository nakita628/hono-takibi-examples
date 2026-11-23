import type { RouteHandler } from '@hono/zod-openapi'
import type { getConvertRoute, postConvertRoute } from '../routes'

export const getConvertRouteHandler: RouteHandler<typeof getConvertRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postConvertRouteHandler: RouteHandler<typeof postConvertRoute> = async (c) => {
  throw new Error('Not implemented')
}
