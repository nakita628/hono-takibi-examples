import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2ApmServicesRoute } from '../routes'

const app = new OpenAPIHono()

export const apmHandler = app.openapi(getApiV2ApmServicesRoute, (c) => {
  throw new Error('Not implemented')
})
