import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteResponsePlanRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteResponsePlanHandler = app.openapi(postDeleteResponsePlanRoute, (c) => {
  throw new Error('Not implemented')
})
