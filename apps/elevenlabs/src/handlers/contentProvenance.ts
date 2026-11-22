import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ContentProvenanceWatermarkRoute } from '../routes'

const app = new OpenAPIHono()

export const contentProvenanceHandler = app.openapi(postV1ContentProvenanceWatermarkRoute, (c) => {
  throw new Error('Not implemented')
})
