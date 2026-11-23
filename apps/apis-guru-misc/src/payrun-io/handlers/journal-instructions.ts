import { OpenAPIHono } from '@hono/zod-openapi'
import { getJournalInstructionsRoute, postJournalInstructionsRoute } from '../routes'

const app = new OpenAPIHono()

export const journalInstructionsHandler = app
  .openapi(getJournalInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJournalInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
