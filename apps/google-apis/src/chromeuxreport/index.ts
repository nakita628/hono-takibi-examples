import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1RecordsQueryHistoryRecordRoute, postV1RecordsQueryRecordRoute } from './routes'
import {
  postV1RecordsQueryHistoryRecordRouteHandler,
  postV1RecordsQueryRecordRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1RecordsQueryHistoryRecordRoute, postV1RecordsQueryHistoryRecordRouteHandler)
  .openapi(postV1RecordsQueryRecordRoute, postV1RecordsQueryRecordRouteHandler)

export default app
