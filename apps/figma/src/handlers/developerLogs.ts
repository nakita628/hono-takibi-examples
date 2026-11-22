import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1DeveloperLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const developerLogsHandler = app.openapi(postV1DeveloperLogsRoute, (c) => {
  throw new Error('Not implemented')
})
