import { OpenAPIHono } from '@hono/zod-openapi'
import { getJournalS3ExportsRoute } from '../routes'

const app = new OpenAPIHono()

export const journalS3ExportsHandler = app.openapi(getJournalS3ExportsRoute, (c) => {
  throw new Error('Not implemented')
})
