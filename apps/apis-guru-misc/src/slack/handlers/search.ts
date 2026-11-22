import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchMessagesRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(getSearchMessagesRoute, (c) => {
  throw new Error('Not implemented')
})
