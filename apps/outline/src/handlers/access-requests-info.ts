import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccessRequestsInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const accessRequestsInfoHandler = app.openapi(postAccessRequestsInfoRoute, (c) => {
  throw new Error('Not implemented')
})
