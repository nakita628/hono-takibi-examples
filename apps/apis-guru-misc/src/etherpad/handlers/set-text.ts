import type { RouteHandler } from '@hono/zod-openapi'
import type { getSetTextRoute, postSetTextRoute } from '../routes'

export const getSetTextRouteHandler: RouteHandler<typeof getSetTextRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetTextRouteHandler: RouteHandler<typeof postSetTextRoute> = async (c) => {
  throw new Error('Not implemented')
}
