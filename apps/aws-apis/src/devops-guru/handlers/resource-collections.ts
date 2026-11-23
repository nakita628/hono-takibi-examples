import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getResourceCollectionsResourceCollectionTypeRoute,
  putResourceCollectionsRoute,
} from '../routes'

export const getResourceCollectionsResourceCollectionTypeRouteHandler: RouteHandler<
  typeof getResourceCollectionsResourceCollectionTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putResourceCollectionsRouteHandler: RouteHandler<
  typeof putResourceCollectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
