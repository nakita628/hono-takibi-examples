import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendbatchRoute } from '../routes'

const app = new OpenAPIHono()

export const sendbatchHandler = app.openapi(postSendbatchRoute, (c) => {
  throw new Error('Not implemented')
})
