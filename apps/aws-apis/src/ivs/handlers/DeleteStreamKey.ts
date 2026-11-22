import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteStreamKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const DeleteStreamKeyHandler = app.openapi(postDeleteStreamKeyRoute, (c) => {
  throw new Error('Not implemented')
})
