import { OpenAPIHono } from '@hono/zod-openapi'
import { getVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const versionHandler = app.openapi(getVersionRoute, (c) => {
  throw new Error('Not implemented')
})
