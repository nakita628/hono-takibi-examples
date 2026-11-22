import { OpenAPIHono } from '@hono/zod-openapi'
import { getTestIdZipRoute } from '../routes'

const app = new OpenAPIHono()

export const getZippedScreenshotsHandler = app.openapi(getTestIdZipRoute, (c) => {
  throw new Error('Not implemented')
})
