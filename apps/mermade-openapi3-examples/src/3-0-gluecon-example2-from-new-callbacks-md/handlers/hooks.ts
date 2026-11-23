import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteHooksIdRoute, postHooksRoute } from '../routes'

export const postHooksRouteHandler: RouteHandler<typeof postHooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteHooksIdRouteHandler: RouteHandler<typeof deleteHooksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
