import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3VersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const versionsHandler = app.openapi(getApiV3VersionsRoute, (c) => {
  throw new Error('Not implemented')
})
