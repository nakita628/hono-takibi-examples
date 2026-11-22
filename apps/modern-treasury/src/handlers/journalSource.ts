import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiJournalSourcesIdRoute, getApiJournalSourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const journalSourceHandler = app
  .openapi(getApiJournalSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJournalSourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
