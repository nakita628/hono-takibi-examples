import { OpenAPIHono } from '@hono/zod-openapi'
import { getDbRoute } from '../routes'

const app = new OpenAPIHono()

export const dbHandler = app.openapi(getDbRoute, (c) => {
  throw new Error('Not implemented')
})
