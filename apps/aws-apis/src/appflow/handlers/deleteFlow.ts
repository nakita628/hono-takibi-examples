import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteFlowRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteFlowHandler = app.openapi(postDeleteFlowRoute, (c) => {
  throw new Error('Not implemented')
})
