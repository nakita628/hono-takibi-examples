import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteStreamKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteStreamKeyHandler = app.openapi(postDeleteStreamKeyRoute, (c) => {
  throw new Error('Not implemented')
})
