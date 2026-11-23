import { OpenAPIHono } from '@hono/zod-openapi'
import { postEditMessageTextRoute } from '../routes'

const app = new OpenAPIHono()

export const editMessageTextHandler = app.openapi(postEditMessageTextRoute, (c) => {
  throw new Error('Not implemented')
})
