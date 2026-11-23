import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMemoriesIdAssetsRoute,
  deleteMemoriesIdRoute,
  getMemoriesIdRoute,
  getMemoriesRoute,
  getMemoriesStatisticsRoute,
  postMemoriesRoute,
  putMemoriesIdAssetsRoute,
  putMemoriesIdRoute,
} from '../routes'

export const getMemoriesRouteHandler: RouteHandler<typeof getMemoriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMemoriesRouteHandler: RouteHandler<typeof postMemoriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMemoriesStatisticsRouteHandler: RouteHandler<
  typeof getMemoriesStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMemoriesIdRouteHandler: RouteHandler<typeof deleteMemoriesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMemoriesIdRouteHandler: RouteHandler<typeof getMemoriesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putMemoriesIdRouteHandler: RouteHandler<typeof putMemoriesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMemoriesIdAssetsRouteHandler: RouteHandler<
  typeof deleteMemoriesIdAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMemoriesIdAssetsRouteHandler: RouteHandler<
  typeof putMemoriesIdAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
