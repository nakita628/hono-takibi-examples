import { OpenAPIHono } from '@hono/zod-openapi'
import { postFetchRoute } from '../routes'

const app = new OpenAPIHono()

export const fetchHandler = app.openapi(postFetchRoute, (c) => {
  throw new Error('Not implemented')
})
