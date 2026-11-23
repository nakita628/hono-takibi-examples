import { OpenAPIHono } from '@hono/zod-openapi'
import { postStoredvalueRoute } from '../routes'

const app = new OpenAPIHono()

export const storedvalueHandler = app.openapi(postStoredvalueRoute, (c) => {
  throw new Error('Not implemented')
})
