import { OpenAPIHono } from '@hono/zod-openapi'
import { postConvertRoute } from '../routes'

const app = new OpenAPIHono()

export const convertHandler = app.openapi(postConvertRoute, (c) => {
  throw new Error('Not implemented')
})
