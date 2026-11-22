import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1WorkloadOutputWriteRoute } from '../routes'

const app = new OpenAPIHono()

export const workloadOutputHandler = app.openapi(postV1WorkloadOutputWriteRoute, (c) => {
  throw new Error('Not implemented')
})
