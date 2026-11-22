import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiJournalEntriesIdRoute, getApiJournalEntriesRoute } from '../routes'

const app = new OpenAPIHono()

export const journalEntryHandler = app
  .openapi(getApiJournalEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJournalEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
