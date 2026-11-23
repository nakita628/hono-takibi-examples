import { OpenAPIHono } from '@hono/zod-openapi'
import { postStopFlowRoute } from '../routes'

const app = new OpenAPIHono()

export const stopFlowHandler = app.openapi(postStopFlowRoute, (c) => {
  throw new Error('Not implemented')
})
