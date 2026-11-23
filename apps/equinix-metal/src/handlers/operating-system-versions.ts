import { OpenAPIHono } from '@hono/zod-openapi'
import { getOperatingSystemVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const operatingSystemVersionsHandler = app.openapi(getOperatingSystemVersionsRoute, (c) => {
  throw new Error('Not implemented')
})
