import type { RouteHandler } from '@hono/zod-openapi'
import type { getQrRoute, postQrRoute } from '../routes'

export const getQrRouteHandler: RouteHandler<typeof getQrRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postQrRouteHandler: RouteHandler<typeof postQrRoute> = async (c) => {
  throw new Error('Not implemented')
}
