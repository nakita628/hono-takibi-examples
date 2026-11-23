import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRecordsRecordGidRoute,
  getRecordsRecordGidRoute,
  getRecordsRecordGidStoriesRoute,
  postRecordsRecordGidStoriesRoute,
  postRecordsRoute,
  putRecordsRecordGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recordsHandler = app
  .openapi(postRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecordsRecordGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRecordsRecordGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRecordsRecordGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecordsRecordGidStoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecordsRecordGidStoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
