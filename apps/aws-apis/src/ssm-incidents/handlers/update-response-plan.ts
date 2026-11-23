import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateResponsePlanRoute } from '../routes'

const app = new OpenAPIHono()

export const updateResponsePlanHandler = app.openapi(postUpdateResponsePlanRoute, (c) => {
  throw new Error('Not implemented')
})
