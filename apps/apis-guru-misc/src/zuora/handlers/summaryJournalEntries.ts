import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1JournalEntriesJeNumberRoute,
  getV1JournalEntriesJeNumberRoute,
  getV1JournalEntriesJournalRunsJrNumberRoute,
  postV1JournalEntriesRoute,
  putV1JournalEntriesJeNumberBasicInformationRoute,
  putV1JournalEntriesJeNumberCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const summaryJournalEntriesHandler = app
  .openapi(postV1JournalEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1JournalEntriesJournalRunsJrNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1JournalEntriesJeNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1JournalEntriesJeNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1JournalEntriesJeNumberBasicInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1JournalEntriesJeNumberCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
