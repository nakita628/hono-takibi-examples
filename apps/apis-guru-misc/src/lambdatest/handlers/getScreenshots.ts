import { OpenAPIHono } from '@hono/zod-openapi'
import { getTestIdRoute } from '../routes'

const app = new OpenAPIHono()

export const getScreenshotsHandler = app.openapi(getTestIdRoute, (c) => {
  throw new Error('Not implemented')
})
