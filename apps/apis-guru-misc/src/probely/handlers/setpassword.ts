import { OpenAPIHono } from '@hono/zod-openapi'
import { postSetpasswordIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const setpasswordHandler = app.openapi(postSetpasswordIndexRoute, (c) => {
  throw new Error('Not implemented')
})
