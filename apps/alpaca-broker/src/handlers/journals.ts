import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1JournalsJournalIdRoute,
  getV1JournalsJournalIdRoute,
  getV1JournalsRoute,
  postV1JournalsBatchRoute,
  postV1JournalsReverseBatchRoute,
  postV1JournalsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const journalsHandler = app
  .openapi(getV1JournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1JournalsJournalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1JournalsJournalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JournalsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JournalsReverseBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
