import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3WantedMissingRoute } from '../routes'

const app = new OpenAPIHono()

export const missingHandler = app.openapi(getApiV3WantedMissingRoute, (c) => {
  throw new Error('Not implemented')
})
