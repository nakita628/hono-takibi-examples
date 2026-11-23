import { OpenAPIHono } from '@hono/zod-openapi'
import { getOperatingSystemsRoute } from '../routes'

const app = new OpenAPIHono()

export const operatingSystemsHandler = app.openapi(getOperatingSystemsRoute, (c) => {
  throw new Error('Not implemented')
})
