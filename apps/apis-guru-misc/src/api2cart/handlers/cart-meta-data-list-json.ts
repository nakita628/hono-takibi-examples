import type { RouteHandler } from '@hono/zod-openapi'
import type { getCartMetaDataListJsonRoute } from '../routes'

export const getCartMetaDataListJsonRouteHandler: RouteHandler<
  typeof getCartMetaDataListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
