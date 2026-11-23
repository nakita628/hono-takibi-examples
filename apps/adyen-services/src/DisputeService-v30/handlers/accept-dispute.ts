import { OpenAPIHono } from '@hono/zod-openapi'
import { postAcceptDisputeRoute } from '../routes'

const app = new OpenAPIHono()

export const acceptDisputeHandler = app.openapi(postAcceptDisputeRoute, (c) => {
  throw new Error('Not implemented')
})
