import { OpenAPIHono } from '@hono/zod-openapi'
import { postCalculateMinMaxRoute } from '../routes'

const app = new OpenAPIHono()

export const calculateMinMaxHandler = app.openapi(postCalculateMinMaxRoute, (c) => {
  throw new Error('Not implemented')
})
