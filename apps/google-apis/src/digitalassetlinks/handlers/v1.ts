import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1AssetlinksCheckRoute,
  getV1StatementsListRoute,
  postV1AssetlinksBulkCheckRoute,
} from '../routes'

export const postV1AssetlinksBulkCheckRouteHandler: RouteHandler<
  typeof postV1AssetlinksBulkCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AssetlinksCheckRouteHandler: RouteHandler<
  typeof getV1AssetlinksCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1StatementsListRouteHandler: RouteHandler<
  typeof getV1StatementsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
