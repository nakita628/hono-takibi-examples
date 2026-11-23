import { OpenAPIHono } from '@hono/zod-openapi'
import { postDefendDisputeRoute } from '../routes'

const app = new OpenAPIHono()

export const defendDisputeHandler = app.openapi(postDefendDisputeRoute, (c) => {
  throw new Error('Not implemented')
})
