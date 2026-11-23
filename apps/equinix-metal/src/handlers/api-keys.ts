import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteApiKeysIdRoute } from '../routes'

export const deleteApiKeysIdRouteHandler: RouteHandler<typeof deleteApiKeysIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
