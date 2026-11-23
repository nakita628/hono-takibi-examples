import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getItemsIdChildrenRoute,
  getItemsIdRelatedRoute,
  getItemsIdRoute,
  getItemsIdVideosRoute,
  getItemsItemIdNextRoute,
} from '../routes'

export const getItemsIdRouteHandler: RouteHandler<typeof getItemsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getItemsIdChildrenRouteHandler: RouteHandler<typeof getItemsIdChildrenRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getItemsIdRelatedRouteHandler: RouteHandler<typeof getItemsIdRelatedRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getItemsIdVideosRouteHandler: RouteHandler<typeof getItemsIdVideosRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getItemsItemIdNextRouteHandler: RouteHandler<typeof getItemsItemIdNextRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
