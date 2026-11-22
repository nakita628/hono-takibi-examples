import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1CardBulkOrdersBulkOrderTokenRoute,
  getV1CardBulkOrdersRoute,
  patchV1CardBulkOrdersBulkOrderTokenRoute,
  postV1CardBulkOrdersRoute,
} from '../routes'

export const getV1CardBulkOrdersRouteHandler: RouteHandler<
  typeof getV1CardBulkOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CardBulkOrdersRouteHandler: RouteHandler<
  typeof postV1CardBulkOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CardBulkOrdersBulkOrderTokenRouteHandler: RouteHandler<
  typeof getV1CardBulkOrdersBulkOrderTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1CardBulkOrdersBulkOrderTokenRouteHandler: RouteHandler<
  typeof patchV1CardBulkOrdersBulkOrderTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
