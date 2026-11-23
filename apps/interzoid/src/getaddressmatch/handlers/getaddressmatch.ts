import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetaddressmatchRoute } from '../routes'

const app = new OpenAPIHono()

export const getaddressmatchHandler = app.openapi(getGetaddressmatchRoute, (c) => {
  throw new Error('Not implemented')
})
