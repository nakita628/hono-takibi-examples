import { OpenAPIHono } from '@hono/zod-openapi'
import { getEnvironmentIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const environmentHandler = app.openapi(getEnvironmentIndexRoute, (c) => {
  throw new Error('Not implemented')
})
