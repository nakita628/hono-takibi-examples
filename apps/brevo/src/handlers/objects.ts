import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getObjectsObjectTypeAssociatedRecordsRoute,
  getObjectsObjectTypeRecordsRoute,
  postObjectsObjectTypeBatchDeleteRoute,
  postObjectsObjectTypeBatchUpsertRoute,
} from '../routes'

export const postObjectsObjectTypeBatchUpsertRouteHandler: RouteHandler<
  typeof postObjectsObjectTypeBatchUpsertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getObjectsObjectTypeRecordsRouteHandler: RouteHandler<
  typeof getObjectsObjectTypeRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postObjectsObjectTypeBatchDeleteRouteHandler: RouteHandler<
  typeof postObjectsObjectTypeBatchDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getObjectsObjectTypeAssociatedRecordsRouteHandler: RouteHandler<
  typeof getObjectsObjectTypeAssociatedRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
