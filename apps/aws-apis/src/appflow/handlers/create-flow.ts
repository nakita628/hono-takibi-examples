import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateFlowRoute } from '../routes'

const app = new OpenAPIHono()

export const createFlowHandler = app.openapi(postCreateFlowRoute, (c) => {
  throw new Error('Not implemented')
})
