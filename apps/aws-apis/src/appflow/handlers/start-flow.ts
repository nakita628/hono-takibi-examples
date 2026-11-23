import { OpenAPIHono } from '@hono/zod-openapi'
import { postStartFlowRoute } from '../routes'

const app = new OpenAPIHono()

export const startFlowHandler = app.openapi(postStartFlowRoute, (c) => {
  throw new Error('Not implemented')
})
