import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvisioningjobsJobIdRoute } from '../routes'

const app = new OpenAPIHono()

export const provisioningjobsHandler = app.openapi(getProvisioningjobsJobIdRoute, (c) => {
  throw new Error('Not implemented')
})
