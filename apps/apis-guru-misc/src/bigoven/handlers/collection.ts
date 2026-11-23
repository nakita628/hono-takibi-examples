import type { RouteHandler } from '@hono/zod-openapi'
import type { getCollectionIdMetaRoute, getCollectionIdRoute } from '../routes'

export const getCollectionIdRouteHandler: RouteHandler<typeof getCollectionIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCollectionIdMetaRouteHandler: RouteHandler<
  typeof getCollectionIdMetaRoute
> = async (c) => {
  throw new Error('Not implemented')
}
