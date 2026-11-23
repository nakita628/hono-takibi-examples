import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeCacheEngineVersionsRoute,
  postActionDescribeCacheEngineVersionsRoute,
} from '../routes'

export const getActionDescribeCacheEngineVersionsRouteHandler: RouteHandler<
  typeof getActionDescribeCacheEngineVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeCacheEngineVersionsRouteHandler: RouteHandler<
  typeof postActionDescribeCacheEngineVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
