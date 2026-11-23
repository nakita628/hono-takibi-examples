import { OpenAPIHono } from '@hono/zod-openapi'
import { putFormPrimitiveRoute } from '../routes'

const app = new OpenAPIHono()

export const formHandler = app.openapi(putFormPrimitiveRoute, (c) => {
  throw new Error('Not implemented')
})
