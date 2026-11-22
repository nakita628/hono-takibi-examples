import { OpenAPIHono } from '@hono/zod-openapi'
import { getJobsIdCaptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const captionsHandler = app.openapi(getJobsIdCaptionsRoute, (c) => {
  throw new Error('Not implemented')
})
