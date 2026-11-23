import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBookCollectionRoute,
  getBookCollectionSearchRoute,
  postBookCollectionSearchRoute,
} from '../routes'

export const getBookCollectionRouteHandler: RouteHandler<typeof getBookCollectionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBookCollectionSearchRouteHandler: RouteHandler<
  typeof getBookCollectionSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBookCollectionSearchRouteHandler: RouteHandler<
  typeof postBookCollectionSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
