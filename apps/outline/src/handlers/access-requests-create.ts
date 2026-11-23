import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccessRequestsCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const accessRequestsCreateHandler = app.openapi(postAccessRequestsCreateRoute, (c) => {
  throw new Error('Not implemented')
})
