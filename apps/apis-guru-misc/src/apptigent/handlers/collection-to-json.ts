import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionToJSONRoute } from '../routes'

export const postCollectionToJSONRouteHandler: RouteHandler<
  typeof postCollectionToJSONRoute
> = async (c) => {
  throw new Error('Not implemented')
}
