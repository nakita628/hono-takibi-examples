import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountingJournalEntriesIdRoute,
  getAccountingJournalEntriesIdRoute,
  getAccountingJournalEntriesRoute,
  patchAccountingJournalEntriesIdRoute,
  postAccountingJournalEntriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const journalEntriesHandler = app
  .openapi(getAccountingJournalEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingJournalEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingJournalEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingJournalEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountingJournalEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
