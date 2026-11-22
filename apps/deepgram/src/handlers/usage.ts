import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProjectsProjectIdUsageRoute } from '../routes'

const app = new OpenAPIHono()

export const usageHandler = app.openapi(getV1ProjectsProjectIdUsageRoute, (c) => {
  throw new Error('Not implemented')
})
