import { OpenAPIHono } from '@hono/zod-openapi'
import { postJSONtoCSVRoute } from '../routes'

const app = new OpenAPIHono()

export const jsoNtoCsvHandler = app.openapi(postJSONtoCSVRoute, (c) => {
  throw new Error('Not implemented')
})
