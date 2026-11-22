import { OpenAPIHono } from '@hono/zod-openapi'
import { postContentProvenanceChecksRoute } from '../routes'

const app = new OpenAPIHono()

export const contentProvenanceChecksHandler = app.openapi(postContentProvenanceChecksRoute, (c) => {
  throw new Error('Not implemented')
})
