import { OpenAPIHono } from '@hono/zod-openapi'
import { postWorkloadsSummariesRoute } from '../routes'

const app = new OpenAPIHono()

export const workloadsSummariesHandler = app.openapi(postWorkloadsSummariesRoute, (c) => {
  throw new Error('Not implemented')
})
