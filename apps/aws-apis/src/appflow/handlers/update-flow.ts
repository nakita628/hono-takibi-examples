import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateFlowRoute } from '../routes'

const app = new OpenAPIHono()

export const updateFlowHandler = app.openapi(postUpdateFlowRoute, (c) => {
  throw new Error('Not implemented')
})
