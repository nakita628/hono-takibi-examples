import { OpenAPIHono } from '@hono/zod-openapi'
import { getWillrRoute } from '../routes'

const app = new OpenAPIHono()

export const willrHandler = app.openapi(getWillrRoute, (c) => {
  throw new Error('Not implemented')
})
