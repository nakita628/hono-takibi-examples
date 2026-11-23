import type { RouteHandler } from '@hono/zod-openapi'
import type { postCartMetaDataSetJsonRoute } from '../routes'

export const postCartMetaDataSetJsonRouteHandler: RouteHandler<
  typeof postCartMetaDataSetJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
