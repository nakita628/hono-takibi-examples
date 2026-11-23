import { OpenAPIHono } from '@hono/zod-openapi'
import { getCheckForUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const checkForUpdateHandler = app.openapi(getCheckForUpdateRoute, (c) => {
  throw new Error('Not implemented')
})
