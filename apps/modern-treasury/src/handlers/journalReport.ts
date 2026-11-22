import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiJournalReportsIdRoute,
  getApiJournalReportsRoute,
  patchApiJournalReportsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const journalReportHandler = app
  .openapi(getApiJournalReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJournalReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiJournalReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
