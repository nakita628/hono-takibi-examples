import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRecordsRecordIdFormatRoute,
  getRecordsRecordIdMoreLikeThisFormatRoute,
} from '../routes'

export const getRecordsRecordIdFormatRouteHandler: RouteHandler<
  typeof getRecordsRecordIdFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRecordsRecordIdMoreLikeThisFormatRouteHandler: RouteHandler<
  typeof getRecordsRecordIdMoreLikeThisFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}
