import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getJournalsJournalIDRoute,
  getJournalsJournalNumberRoute,
  getJournalsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const journalsHandler = app
  .openapi(getJournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJournalsJournalIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJournalsJournalNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
