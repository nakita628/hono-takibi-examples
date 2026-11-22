import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRecordsFormatRoute,
  getRecordsRecordIdFormatRoute,
  getRecordsRecordIdMoreLikeThisFormatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiCallsHandler = app
  .openapi(getRecordsFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecordsRecordIdFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecordsRecordIdMoreLikeThisFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
