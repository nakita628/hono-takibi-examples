import type { RouteHandler } from '@hono/zod-openapi'
import type { getHooksRoute, postHooksRoute } from '../routes'

export const getHooksRouteHandler: RouteHandler<typeof getHooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postHooksRouteHandler: RouteHandler<typeof postHooksRoute> = async (c) => {
  throw new Error('Not implemented')
}
