import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1RecordsQueryHistoryRecordRoute, postV1RecordsQueryRecordRoute } from '../routes'

const app = new OpenAPIHono()

export const recordsHandler = app
  .openapi(postV1RecordsQueryHistoryRecordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RecordsQueryRecordRoute, (c) => {
    throw new Error('Not implemented')
  })
