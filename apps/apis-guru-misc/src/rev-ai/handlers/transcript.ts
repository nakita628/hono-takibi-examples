import { OpenAPIHono } from '@hono/zod-openapi'
import { getJobsIdTranscriptRoute } from '../routes'

const app = new OpenAPIHono()

export const transcriptHandler = app.openapi(getJobsIdTranscriptRoute, (c) => {
  throw new Error('Not implemented')
})
