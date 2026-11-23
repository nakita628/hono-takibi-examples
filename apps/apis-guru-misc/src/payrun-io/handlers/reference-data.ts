import { OpenAPIHono } from '@hono/zod-openapi'
import { getReferenceDataJournalExpressionDataTableRoute } from '../routes'

const app = new OpenAPIHono()

export const referenceDataHandler = app.openapi(
  getReferenceDataJournalExpressionDataTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
