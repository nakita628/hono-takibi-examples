import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetRoute } from '../routes'

const app = new OpenAPIHono()

export const getHandler = app.openapi(getGetRoute, (c) => {
  throw new Error('Not implemented')
})
