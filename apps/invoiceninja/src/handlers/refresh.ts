import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1RefreshRoute } from '../routes'

const app = new OpenAPIHono()

export const refreshHandler = app.openapi(postApiV1RefreshRoute, (c) => {
  throw new Error('Not implemented')
})
