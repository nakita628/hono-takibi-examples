import { OpenAPIHono } from '@hono/zod-openapi'
import { getRecordsRecordIdFormatRoute, getRecordsRecordIdMoreLikeThisFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const recordsHandler = app
  .openapi(getRecordsRecordIdFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecordsRecordIdMoreLikeThisFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
