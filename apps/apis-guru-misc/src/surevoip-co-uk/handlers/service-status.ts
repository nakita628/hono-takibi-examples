import { OpenAPIHono } from '@hono/zod-openapi'
import { getServiceStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const serviceStatusHandler = app.openapi(getServiceStatusRoute, (c) => {
  throw new Error('Not implemented')
})
