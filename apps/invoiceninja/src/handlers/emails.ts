import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1EmailsRoute } from '../routes'

const app = new OpenAPIHono()

export const emailsHandler = app.openapi(postApiV1EmailsRoute, (c) => {
  throw new Error('Not implemented')
})
