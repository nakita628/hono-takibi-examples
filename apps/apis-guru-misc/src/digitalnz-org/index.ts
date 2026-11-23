import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRecordsFormatRoute,
  getRecordsRecordIdFormatRoute,
  getRecordsRecordIdMoreLikeThisFormatRoute,
} from './routes'
import {
  getRecordsFormatRouteHandler,
  getRecordsRecordIdFormatRouteHandler,
  getRecordsRecordIdMoreLikeThisFormatRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRecordsFormatRoute, getRecordsFormatRouteHandler)
  .openapi(getRecordsRecordIdFormatRoute, getRecordsRecordIdFormatRouteHandler)
  .openapi(
    getRecordsRecordIdMoreLikeThisFormatRoute,
    getRecordsRecordIdMoreLikeThisFormatRouteHandler,
  )

export default app
