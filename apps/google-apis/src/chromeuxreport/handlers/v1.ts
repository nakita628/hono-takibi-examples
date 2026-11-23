import type { RouteHandler } from '@hono/zod-openapi'
import type { postV1RecordsQueryHistoryRecordRoute, postV1RecordsQueryRecordRoute } from '../routes'

export const postV1RecordsQueryHistoryRecordRouteHandler: RouteHandler<
  typeof postV1RecordsQueryHistoryRecordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RecordsQueryRecordRouteHandler: RouteHandler<
  typeof postV1RecordsQueryRecordRoute
> = async (c) => {
  throw new Error('Not implemented')
}
