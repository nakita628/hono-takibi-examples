import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getListIndicesIndexRoute,
  getListIndicesRoute,
  getListRoute,
  getListShardsIndexRoute,
  getListShardsRoute,
} from '../routes'

export const getListRouteHandler: RouteHandler<typeof getListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getListIndicesRouteHandler: RouteHandler<typeof getListIndicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getListIndicesIndexRouteHandler: RouteHandler<
  typeof getListIndicesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getListShardsRouteHandler: RouteHandler<typeof getListShardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getListShardsIndexRouteHandler: RouteHandler<typeof getListShardsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
