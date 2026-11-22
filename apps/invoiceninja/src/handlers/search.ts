import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1SearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postApiV1SearchRoute, (c) => {
  throw new Error('Not implemented')
})
