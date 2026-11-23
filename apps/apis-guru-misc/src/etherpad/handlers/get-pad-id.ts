import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetPadIDRoute, postGetPadIDRoute } from '../routes'

export const getGetPadIDRouteHandler: RouteHandler<typeof getGetPadIDRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGetPadIDRouteHandler: RouteHandler<typeof postGetPadIDRoute> = async (c) => {
  throw new Error('Not implemented')
}
