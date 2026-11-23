import { OpenAPIHono } from '@hono/zod-openapi'
import { getMultRoute } from '../routes'

const app = new OpenAPIHono()

export const multHandler = app.openapi(getMultRoute, (c) => {
  throw new Error('Not implemented')
})
