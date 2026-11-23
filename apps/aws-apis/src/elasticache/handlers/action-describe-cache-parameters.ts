import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeCacheParametersRoute,
  postActionDescribeCacheParametersRoute,
} from '../routes'

export const getActionDescribeCacheParametersRouteHandler: RouteHandler<
  typeof getActionDescribeCacheParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeCacheParametersRouteHandler: RouteHandler<
  typeof postActionDescribeCacheParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
