import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccessRequestsApproveRoute } from '../routes'

const app = new OpenAPIHono()

export const accessRequestsApproveHandler = app.openapi(postAccessRequestsApproveRoute, (c) => {
  throw new Error('Not implemented')
})
