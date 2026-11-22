import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvisioningjobsJobIdRoute } from '../routes'

const app = new OpenAPIHono()

export const provisioningJobsHandler = app.openapi(getProvisioningjobsJobIdRoute, (c) => {
  throw new Error('Not implemented')
})
