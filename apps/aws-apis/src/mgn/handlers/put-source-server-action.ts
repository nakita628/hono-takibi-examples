import { OpenAPIHono } from '@hono/zod-openapi'
import { postPutSourceServerActionRoute } from '../routes'

const app = new OpenAPIHono()

export const putSourceServerActionHandler = app.openapi(postPutSourceServerActionRoute, (c) => {
  throw new Error('Not implemented')
})
