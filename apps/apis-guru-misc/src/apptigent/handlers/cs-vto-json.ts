import { OpenAPIHono } from '@hono/zod-openapi'
import { postCSVtoJSONRoute } from '../routes'

const app = new OpenAPIHono()

export const csVtoJsonHandler = app.openapi(postCSVtoJSONRoute, (c) => {
  throw new Error('Not implemented')
})
