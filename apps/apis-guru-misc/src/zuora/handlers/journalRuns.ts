import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1JournalRunsJrNumberRoute,
  getV1JournalRunsJrNumberRoute,
  postV1JournalRunsRoute,
  putV1JournalRunsJrNumberCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const journalRunsHandler = app
  .openapi(postV1JournalRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1JournalRunsJrNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1JournalRunsJrNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1JournalRunsJrNumberCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
