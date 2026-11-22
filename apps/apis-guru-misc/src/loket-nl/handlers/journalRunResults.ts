import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdResultsRoute } from '../routes'

const app = new OpenAPIHono()

export const journalRunResultsHandler = app.openapi(
  getProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdResultsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
