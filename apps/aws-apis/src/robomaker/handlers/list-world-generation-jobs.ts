import { OpenAPIHono } from '@hono/zod-openapi'
import { postListWorldGenerationJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const listWorldGenerationJobsHandler = app.openapi(postListWorldGenerationJobsRoute, (c) => {
  throw new Error('Not implemented')
})
