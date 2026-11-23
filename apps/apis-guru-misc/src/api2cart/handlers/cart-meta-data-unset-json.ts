import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteCartMetaDataUnsetJsonRoute } from '../routes'

export const deleteCartMetaDataUnsetJsonRouteHandler: RouteHandler<
  typeof deleteCartMetaDataUnsetJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
