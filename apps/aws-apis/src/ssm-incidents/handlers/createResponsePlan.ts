import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateResponsePlanRoute } from '../routes'

const app = new OpenAPIHono()

export const createResponsePlanHandler = app.openapi(postCreateResponsePlanRoute, (c) => {
  throw new Error('Not implemented')
})
